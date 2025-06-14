import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navigation from './navigation/navigation.jsx'
import FriendsPage from "./friendsPage/friendsPage.jsx";

createRoot(document.getElementById('body')).render(
    <StrictMode>
        <Navigation/>

        <FriendsPage/>
    </StrictMode>
)