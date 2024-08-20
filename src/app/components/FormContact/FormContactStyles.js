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

  @media (max-width: 760px) {
    max-width: 310px;
    height: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  margin: auto;
  margin-top: 20px;
  padding: 10px;

  .label-float {
    position: relative;
    width: 100%;
    margin-bottom: 20px;

    label {
      pointer-events: none;
      position: absolute;
      top: 50%;
      left: 15px;
      transition: all .1s linear;
      background: ${props => props.theme.contact_background_label};
      color: ${props => props.theme.fontColor};
      padding: 0 5px;
      box-sizing: border-box;
      border-radius: 5px;
      transform: translateY(-50%);
      font-size: 16px;
    }

    input,
    textarea {
      width: 100%;
      border: 1px solid #c3bebe;
      border-radius: 5px;
      outline: none;
      padding: 15px;
      font-size: 16px;
      background: ${props => props.theme.contact_background_input};
      color: ${props => props.theme.contact_font_input};
      box-sizing: border-box; /* Inclui padding e border no cálculo da largura e altura */
    }

    input {
      height: 50px;
      transition: all .1s linear;
    }

    textarea {
      min-height: 120px; /* Maior altura para o textarea */
      resize: vertical; /* Permite redimensionar verticalmente */
    }

    input:focus,
    textarea:focus {
      border-color: ${props => props.theme.contact_border_input};
    }

    input::placeholder,
    textarea::placeholder {
      color: transparent;
    }

    input:focus + label,
    textarea:focus + label,
    input:not(:placeholder-shown) + label,
    textarea:not(:placeholder-shown) + label {
      font-size: 13px;
      top: -10px; /* Ajusta o label para cima quando o campo está focado ou preenchido */
      color: ${props => props.theme.fontColor};
    }
  }

  .btn-form-contact {
    text-decoration: none;
    color: ${props => props.theme.contact_font_btn};
    background: ${props => props.theme.contact_background_btn};
    transition: all ease 0.5s;
    width: 100px;
    margin: auto;
    border-radius: 20px;
    border: 1px solid #ecececcc;

    :hover {
      width: 110px;
      transition: all ease 0.5s;
      background: ${props => props.theme.contact_background_btn_hover};
    }
  }

  @media (max-width: 760px) {
    .contact-form-box-main {
      box-shadow: 0;
    }

    .label-float input,
    .label-float textarea {
      width: 100%;
    }
  }
`;
