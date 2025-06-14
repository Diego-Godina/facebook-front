import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from "./login/loginPage.jsx";

createRoot(document.getElementById('body')).render(
    <StrictMode>
        <LoginPage/>
    </StrictMode>
)