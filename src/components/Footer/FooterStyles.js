import styled from 'styled-components';

export const FooterMainStyled = styled.footer`

/* background: ${props => props.theme.background_navbar}; */


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

.social-network{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;

        .contact-items{
        /* border: 2px solid red; */

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

        :hover{
        /* -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        box-shadow: "4px 4px 5px #121214", */
        }

        h4{
            font-size: 16px;
            padding-top: 10px;
        }

        h5{
            font-size: 16px;
            padding-bottom: 10px;

            @media (max-width: 760px){
                display: none;
            }
        }

        .icon{
            font-size: 50px;
            border-radius: 100%;
            color: ${props => props.theme.font_contact_icons};
            background: ${props => props.theme.background_contact_icons};
            padding: 5px 20px 5px 20px;
            transition: all ease 1s;
            :hover{
                background: ${props => props.theme.background_contact_icons_hover};
                transition: all ease 0.5s;

            }

        }

    }

}

.InfoPortfolio{
    cursor: pointer;
    text-align: center;
    font-size: 30px;
}



`;