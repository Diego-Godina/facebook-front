import React, {StrictMode} from 'react';
import MiddleSide from "./middleSide.jsx";
import RightSide from "./rightSide.jsx";
import LeftSide from "./leftSide.jsx";

class HomePage extends React.Component {
    render() {
        return (
            <div className="container-fluid d-flex">
                <StrictMode>
                    <LeftSide/>

                    <MiddleSide/>

                    <RightSide/>
                </StrictMode>
            </div>
        )
    }
}

export default HomePage