import React from "react";
import { SpinnerClass } from './SpinnerStyles';

export const Spinner = () =>{
    return(
        <>
        <SpinnerClass>
            <div className="loader"></div>
        </SpinnerClass>
        </>
    )
}