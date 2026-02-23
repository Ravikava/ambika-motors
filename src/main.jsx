import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import CSS files - style.css imports most others, but we need to import them individually for Vite
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.css'
import './assets/css/flaticon.css'
import './assets/css/animate.css'
import './assets/css/hover.css'
import './assets/css/jquery.fancybox.css'
import './assets/css/bootstrap-select.min.css'
import './assets/css/polyglot-language-switcher.css'
import './assets/css/nouislider.css'
import './assets/css/jquery.bootstrap-touchspin.css'
import './assets/css/owl.css'
import './assets/css/style.css'
import './assets/css/responsive.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
