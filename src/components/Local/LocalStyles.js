import styled from 'styled-components';

export const LocalMainStyled = styled.div`

background: ${props => props.theme.background};

a{
    text-decoration: none;
    color: ${props => props.theme.font_contact};

    :hover{
        color: gray;
    }
}

.contact-group{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 760px){
        display: flex;
        flex-direction: column;
    }
    
    .contact-items{
        
        padding: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: auto;
        text-align: center;

        margin: 10px;
        padding: 10px;
        /* -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        box-shadow: ${props => props.theme.navbar_shadow}; */
        transition: all ease 0.5s;

        :hover{
        /* -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        box-shadow: "4px 4px 5px #121214", */
        transition: all ease 0.2s;

        }

        h4{
            font-size: 16px;
        }

        h5{
            font-size: 16px;
        }

        .icon{
            font-size: 50px;
        }

       
    }

}

`;