import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navigation from './navigation/navigation.jsx'
import HomePage from "./homePage/homePage.jsx";

createRoot(document.getElementById('body')).render(
    <StrictMode>
        <Navigation/>

        <HomePage/>
    </StrictMode>
)