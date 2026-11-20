/**
 * x-iam-web
 * Main JavaScript entry point
 */

import '@tabler/core/dist/css/tabler.min.css'
import { Collapse } from '@tabler/core'

import '../css/app.css'

import keycloak, { initializeAuth, login, register } from './auth/keycloak.js'

import { getCurrentUser } from './api/user.js'

document.addEventListener('DOMContentLoaded', async () => {
  console.log('x-iam-web initialized')

  initializeNavigation()

  await initializeAuthentication()
})

/**
 * Initialize Keycloak authentication.
 */
async function initializeAuthentication() {
  try {
    const authenticated = await initializeAuth()

    console.log('Authentication status:', authenticated)

    if (authenticated) {
      await loadCurrentUser()
    }

    initializeAuthenticationButtons()
  } catch (error) {
    console.error('Keycloak initialization failed:', error)
  }
}

/**
 * Load the authenticated user from x-iam backend.
 */
async function loadCurrentUser() {
  try {
    const user = await getCurrentUser()

    console.log('Current user from x-iam backend:', user)

    // You can use this user information to update the UI.
    updateAuthenticationUI(user)
  } catch (error) {
    console.error('Failed to load current user:', error)
  }
}

/**
 * Update the landing page according to authentication status.
 */
function updateAuthenticationUI(user) {
  const signInButton = document.getElementById('sign-in-button')

  if (signInButton) {
    signInButton.textContent = user.username || 'My Account'
  }

  console.log('Welcome:', user.username)
}

/**
 * Initialize authentication buttons.
 */
function initializeAuthenticationButtons() {
  const signInButton = document.getElementById('sign-in-button')

  const signInAboutButton = document.getElementById('sign-in-about-button')

  const registerButton = document.getElementById('register-button')

  // Navbar Sign in
  signInButton?.addEventListener('click', async (event) => {
    event.preventDefault()

    try {
      if (keycloak.authenticated) {
        await loadCurrentUser()
      } else {
        await login()
      }
    } catch (error) {
      console.error('Login failed:', error)
    }
  })

  // About section: Access your account
  signInAboutButton?.addEventListener('click', async (event) => {
    event.preventDefault()

    try {
      await login()
    } catch (error) {
      console.error('Login failed:', error)
    }
  })

  // Hero section: Get started
  registerButton?.addEventListener('click', async (event) => {
    event.preventDefault()

    try {
      await register()
    } catch (error) {
      console.error('Registration failed:', error)
    }
  })
}

/**
 * Close the mobile navigation menu after a link is clicked.
 */
function initializeNavigation() {
  const navbar = document.querySelector('.navbar-collapse')

  const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link')

  navbarLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbar?.classList.contains('show')) {
        Collapse.getOrCreateInstance(navbar).hide()
      }
    })
  })
}
