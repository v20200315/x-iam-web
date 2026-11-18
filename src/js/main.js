/**
 * x-iam-web
 * Main JavaScript entry point
 */

import '@tabler/core/dist/css/tabler.min.css'
import { Collapse } from '@tabler/core'

import '../css/app.css'

document.addEventListener('DOMContentLoaded', () => {
  console.log('x-iam-web initialized')

  initializeNavigation()
})

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
