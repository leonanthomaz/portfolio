import React from "react";
import { SpinnerClass } from './SpinnerStyles';

const Loader = () =>{
    return(
        <>
        <SpinnerClass>
            <div className="loader"></div>
        </SpinnerClass>
        </>
    )
}

export default Loader;