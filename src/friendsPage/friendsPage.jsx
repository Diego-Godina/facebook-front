import React, {StrictMode} from 'react';
import LeftSide from "./leftSide.jsx";
import RightSide from "./rightSide.jsx";

class FriendsPage extends React.Component {
    render() {
        return (
            <div className="container-fluid d-flex">
                <StrictMode>
                    <LeftSide/>

                    <RightSide/>
                </StrictMode>
            </div>
        )
    }
}

export default FriendsPage;