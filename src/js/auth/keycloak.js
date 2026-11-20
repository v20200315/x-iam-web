/**
 * x-iam-web
 * Keycloak authentication configuration and helpers
 */

import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'my-company',
  clientId: 'x-iam-web'
})

/**
 * Initialize Keycloak authentication.
 *
 * check-sso:
 * - Existing authenticated users remain authenticated.
 * - Unauthenticated users can still access the public landing page.
 *
 * PKCE:
 * - Uses Authorization Code Flow with PKCE S256.
 */
export async function initializeAuth() {
  return keycloak.init({
    onLoad: 'check-sso',
    pkceMethod: 'S256'
  })
}

/**
 * Redirect the user to the Keycloak login page.
 */
export function login() {
  return keycloak.login({
    redirectUri: `${window.location.origin}/`
  })
}

/**
 * Redirect the user to the Keycloak registration page.
 *
 * Self-registration must be enabled in Keycloak.
 */
export function register() {
  return keycloak.register({
    redirectUri: `${window.location.origin}/`
  })
}

/**
 * Log out the current user.
 */
export function logout() {
  return keycloak.logout({
    redirectUri: `${window.location.origin}/`
  })
}

/**
 * Get a valid access token.
 *
 * Refresh the token when it is close to expiration.
 * Returns null when the user is not authenticated.
 */
export async function getAccessToken() {
  if (!keycloak.authenticated) {
    return null
  }

  try {
    await keycloak.updateToken(30)
    return keycloak.token
  } catch (error) {
    console.error('Failed to refresh Keycloak token:', error)
    return null
  }
}

/**
 * Check whether the user is authenticated.
 */
export function isAuthenticated() {
  return Boolean(keycloak.authenticated)
}

/**
 * Get the authenticated user's information from the ID token.
 */
export function getCurrentUser() {
  if (!keycloak.authenticated || !keycloak.tokenParsed) {
    return null
  }

  const token = keycloak.tokenParsed

  return {
    id: token.sub,
    username: token.preferred_username,
    email: token.email,
    firstName: token.given_name,
    lastName: token.family_name,
    fullName: token.name
  }
}

/**
 * Export the Keycloak instance for advanced use.
 */
export default keycloak
