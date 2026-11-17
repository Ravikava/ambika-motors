import { useEffect } from 'react'

// The dark loading screen lives in index.html, so it shows before any JavaScript loads.
// Once the page has rendered and its fonts are ready, this fades it out and removes it.
const MAX_WAIT_MS = 2500 // never keep visitors waiting longer than this, even on a slow connection

const Preloader = () => {
  useEffect(() => {
    const preloader = document.getElementById('site-preloader')
    if (!preloader) return

    let hidden = false
    const hide = () => {
      if (hidden) return
      hidden = true
      preloader.classList.add('site-preloader--hidden')
      setTimeout(() => preloader.remove(), 400)
    }

    // Two frames let the first render reach the screen and start its font downloads
    requestAnimationFrame(() => requestAnimationFrame(() => document.fonts.ready.then(hide)))
    const fallback = setTimeout(hide, MAX_WAIT_MS)
    return () => clearTimeout(fallback)
  }, [])

  return null
}

export default Preloader
