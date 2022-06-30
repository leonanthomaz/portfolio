import React, { useContext } from "react";
import { ModalMainStyled } from "./ModalStyles";
import { HooksContext } from "../../contexts/Hooks";

const Modal  = ({title}) => {
    const { show, handleClose } = useContext(HooksContext);

    console.log()
    return (
       <ModalMainStyled>
            <h1>{title}</h1>
       </ModalMainStyled>
    )
}

export default Modal;