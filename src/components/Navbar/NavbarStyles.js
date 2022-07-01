import styled from 'styled-components'

export const NavbarMainStyled = styled.nav`

position: fixed;
width: 100%;
z-index: 2;
background: ${props => props.theme.background_navbar};
box-shadow: ${props => props.theme.navbar_shadow};

.nav-icon{
    display: none;
}

.nav-menu ul{ 
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    
    li {
        list-style: none;
        padding: 5px;
        margin-left: 10px;
        margin-top: 15px;
        text-transform: uppercase;

        a{
            color: ${props => props.theme.font_navbar};
            text-decoration: none;
            transition: all ease 1s;


            :visited {
                color: ${props => props.theme.font_navbar};
                transition: all ease 1s;
            }
            
            :hover   {
                color: ${props => props.theme.font_navbar_hover};
                text-decoration: ${props => props.theme.overline_navbar_hover};
                transition: all ease 1s;
            }

            :active  {
                color: yellow;
                
            }
        }
    }

    .nav-item {
        margin-right: 1.5rem;

        :after {
        content: "";
            display: block;
            height: 3px;
            width: 0;
            background: transparent;
            transition: width 0.7s ease, background-color 0.5s ease;
        }

        .active {
            color: #ffdd40;
        }
    }
}


@media (max-width: 760px){
  
    .nav-menu{
        background: ${props => props.theme.background_navbar_mobile};
        border: 1px solid #5f5f5fef;
        width: 250px;
        position: absolute;
        left: -400px;
        transition: all 0.5s ease;
        border-radius: 3px;
        margin-top: 72px;
        z-index: 3;
        padding-right: 15px;
    }
    .nav-menu.active{
        left: 0px;
        transition: all 0.5s ease;
        
    }
    .nav-item.active {
        color: #ffdd40;
        border: none;
    }
    .nav-icon{
        display: block;
        float: left;
        font-size: 24px;
        padding: 10px;   
        margin-top: 10px;
        cursor: pointer;
        color: ${props => props.theme.icon_navbar};
    }
    .nav-menu ul{ 
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
    }
    .nav-menu li{
        display: flex;
        justify-content: center;
    }
}

.nav-theme-box{
    cursor: pointer;
    /* border: 2px solid red; */
    float: right;
    display: flex;
    justify-content: center;
    margin-right: 20px;
    margin-top: -52px;
    padding: 2px;
    width: 70px;
    border-radius: 20px;
    background: ${props => props.theme.box};
    color: ${props => props.theme.boxfont};
    transition: all 0.5s ease;

    @media (max-width: 760px){
        margin-top: 22px;
    }

    i{
        padding: 5px;
    }

    .nav-menu ul{ 
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        padding: 10px;
    }
    .nav-menu li{
        list-style: none;
        padding: 20px;
        margin-left: 20px;
    }

    .active{
        /* background-color: #77c752; */
        /* border: 1px solid #77c752; */
        border-radius: 20px;
        transition: all ease 1s;
    }
}

`;