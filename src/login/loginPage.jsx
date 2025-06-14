import React, {StrictMode} from 'react';
import RightSide from "./rightSide.jsx";
import LeftSide from "./leftSide.jsx";

class LoginPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row align-items-center">
                    <StrictMode>
                        <LeftSide/>

                        <RightSide/>
                    </StrictMode>
                </div>
            </div>
        )
    }
}

export default LoginPage