import styled from "styled-components";

export const Container = styled.div`
position: fixed;
width: 100%;
height: 70px;
top: 0;
scroll-behavior: smooth;
background: ${props => props.theme.background_navbar};
color: ${props => props.theme.font_navbar};
box-shadow: ${props => props.theme.navbar_shadow};
z-index: 9;
`;

export const Icon = styled.div`
display: none;
color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};

@media(max-width: 760px){
    display: block;
    padding: 10px;
    font-size: 32px;
    margin-left: 10px;
}
`;
export const Menu = styled.ul`
display: flex;
justify-content: flex-start;
flex-direction: row;
max-width: 500px;
margin-top: 15px;
text-align: center;
margin-left: 40px;

@media(max-width: 760px){
    flex-direction: column;
    background: ${props => props.theme.background_navbar_mobile};
    position: absolute;
    transition: all 0.5s ease;
    width: 250px;
    left: ${({ click }) => (click ? '0px' : '-1000px')};
    margin-top: 5px;
    padding: 10px;
    margin-left: 0px;
}

`;

export const MenuLi = styled.li`
padding: 10px;
list-style: none;
text-transform: uppercase;
transition: all ease 0.2s;
border: 1px solid transparent;

@media(max-width: 760px){
    line-height: 35px;
}
`

export const MenuLink = styled.a`
text-decoration: none;
color: ${props => props.theme.font_navbar};
transition: all ease 0.1s;

&:visited {
    color: ${props => props.theme.font_navbar};
    transition: all ease 0.1s;
}

&:hover   {
    color: ${props => props.theme.font_navbar_hover};
    text-decoration: ${props => props.theme.overline_navbar_hover};
    transition: all ease 0.1s;
}

/* &:active{
    color: #ffdd40;
} 


&:focus{
    color: #ffdd40;
}  */

`

export const Theme = styled.div`
/* border: 2px solid red; */
float: right;
display: flex;
justify-content: center;
margin-right: 40px;
margin-top: -40px;
padding: 5px;
width: 70px;
border-radius: 20px;
background: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};
color: ${({ theme }) => (theme === 'dark' ? 'black' : 'white')};
transition: all 0.5s ease;
cursor: pointer;

@media(max-width: 760px){
    margin-top: -46px;
    margin-right: 20px;
}
`
export const ThemeIcon = styled.div`
/* color: ${({ theme }) => (theme === 'dark' ? 'white' : 'yellow')}; */
margin-top: -2px;

`

// export const aaa = styled.div``