import styled from "styled-components";

export const Container = styled.div`
width: 100%;
background: ${props => props.theme.background};
`;

export const FormBox = styled.div`
margin: auto;
width: 500px;
height: auto;
background: ${props => props.theme.contact_background_form};
box-shadow: ${props => props.theme.contact_form_shadow};
border: 1px solid white;
margin: 20px auto;
transition: all ease 0.5s;


@media (max-width: 760px){
    max-width: 310px;
    height: auto;
}
`;

export const Form = styled.form`
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
max-width: 350px;
margin: auto;
margin-top: 20px;
padding: 10px;


.label-float{
    position: relative;
    padding-top: 10px;


    .textarea{
        min-height: 100px;
    }
}

.label-float input{
    width: 450px;
    border: 1px solid #c3bebe;
    border-radius: 5px;
    outline: none;
    padding: 20px;
    font-size: 16px;
    transition: all .1s linear;
    background: ${props => props.theme.contact_background_input};
    color: ${props => props.theme.contact_font_input};

    @media (max-width: 760px){
        width: 320px;
        padding: 15px;
        font-size: 16px;
        height: 50px;
    }
}

.label-float input:focus{
    border-top: ${props => props.theme.contact_border_input};    
    border-left: ${props => props.theme.contact_border_input};                    
    border-right: ${props => props.theme.contact_border_input};
    border-bottom: ${props => props.theme.contact_border_input};                                 
                                 
}

.label-float input::placeholder{
    color:transparent;
    
}

.label-float label{
    pointer-events: none;
    position: absolute;
    top: calc(40% - 8px);
    left: 15px;
    transition: all .1s linear;
    -webkit-transition: all .1s linear;
    -moz-transition: all .1s linear;
    background: ${props => props.theme.contact_background_label};
    color: ${props => props.theme.fontColor};                    
    padding: 5px;
    box-sizing: border-box;
    border-radius: 10%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.label-float input:required:invalid + label:before{
    content: '*';
}
.label-float input:focus + label,
.label-float input:not(:placeholder-shown) + label{
    font-size: 13px;
    top: 0;
    color: ${props => props.theme.fontColor};
}

@media (max-width: 760px){
    .contact-form-box-main{
        box-shadow: 0;
    }

    .label-float input{
        width: 250px;
    }
}
.btn-form-contact{
        text-decoration: none;
        color: ${props => props.theme.contact_font_btn};
        background: ${props => props.theme.contact_background_btn};
        transition: all ease 0.5s;
        width: 100px;
        margin: auto;
        border-radius: 20px;
        border: 1px solid #ecececcc;

        :hover{
            width: 110px;
            transition: all ease 0.5s;
            background: ${props => props.theme.contact_background_btn_hover};
        }
    }
`;