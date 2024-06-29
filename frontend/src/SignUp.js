import React from "react";
import SignUpHeader from "./SignUp/SignUpHeader";
import SignUpMain from "./SignUp/SignUpMain";
import SignUpFooter from "./SignUp/SignUpFooter";


const SignUp = () => {
    return(
    <div className="flex flex-col min-h-screen bg-gradient-to-t overflow-y-hidden">
        <SignUpHeader/>
        <SignUpMain/>
        <SignUpFooter/>
    </div>
);
}

export default SignUp;