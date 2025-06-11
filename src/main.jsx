import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navigation from './navigation/navigation.jsx'

createRoot(document.getElementById('body')).render(
    <StrictMode>
        <Navigation/>
    </StrictMode>
)