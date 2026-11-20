import { getAccessToken } from '../auth/keycloak.js'

/**
 * Get the currently authenticated user from x-iam backend.
 */
export async function getCurrentUser() {
  const accessToken = await getAccessToken()

  if (!accessToken) {
    throw new Error('User is not authenticated')
  }

  const response = await fetch('/api/v1/users/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error(`Failed to get current user: HTTP ${response.status}`)
  }

  return response.json()
}
