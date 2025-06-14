import React, {StrictMode} from 'react';
import LeftSide from "./leftSide.jsx";
import MiddleSide from "./middleSide.jsx";
import RightSide from "./rightSide.jsx";

class homePage extends React.Component {
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

export default homePage