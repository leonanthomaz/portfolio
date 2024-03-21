import styled from "styled-components";

export const Container = styled.div`
position: fixed;
align-items: center;
justify-content: space-between;
width: 100%;
height: 70px;
scroll-behavior: smooth;
background: ${props => props.theme.navbar_background};
color: ${props => props.theme.navbar_font};
box-shadow: ${props => props.theme.navbar_shadow};
z-index: 999;

`;

export const Left = styled.nav`
display: flex;
`;

export const Right = styled.div`
position: absolute;
right: 0;
top: 22px;
margin-right: 30px;

@media(max-width: 760px){
    margin-right: 10px;
}
`;

export const Icon = styled.div`
display: none;
color: ${({ theme }) => (theme === null || theme === 'dark' ? '#dddddd' : '#5b7178')};
cursor: pointer;

@media(max-width: 760px){
    display: block;
    padding: 10px;
    font-size: 32px;
    margin-left: 10px;
}
`;

export const Navbar = styled.ul`
display: flex;
justify-content: flex-start;
flex-direction: row;
max-width: 500px;
margin-top: 15px;
text-align: center;
margin-left: 20px;
color: ${props => props.theme.navbar_font};


@media(max-width: 760px){
    flex-direction: column;
    background: ${props => props.theme.navbar_background_mobile};
    position: absolute;
    transition: all 0.5s ease;
    width: 250px;
    left: ${({ click }) => (click ? '0px' : '-1000px')};
    margin-top: 72px;
    padding: 10px;
    margin-left: 0px;
}

`;

export const NavbarLi = styled.li`
padding: 10px;
list-style: none;
text-transform: uppercase;
transition: all ease 0.2s;
border: 1px solid transparent;
font-weight: 500;

@media(max-width: 760px){
    line-height: 35px;
}

&.active a {
        color: ${props => props.theme.navbar_font_active};
        font-weight: 700;
        font-weight: 700;
        text-decoration: 3px solid overline;  
        transition: all ease 0.4s;

        :hover{
            transition: all ease 0.2s;
            transition: all ease 0.4s;
        }
        
    }

a{
    color: ${props => props.theme.navbar_font};
    text-decoration: none;

    :hover{
        text-decoration: none;
        color: ${props => props.theme.navbar_font_active};
        
    }
}
`;

export const ThemeContainer = styled.div`
/* border: 2px solid red; */
float: right;
display: flex;
justify-content: center;
padding: 5px;
width: 70px;
border-radius: 20px;
background: ${({ theme }) => (theme === 'dark' ? '#dddddd' : '#1f022a')};
color: ${({ theme }) => (theme === 'dark' ? '#1f022a' : '#dddddd')};
transition: all 0.5s ease;
cursor: pointer;
`;

export const ThemeIcon = styled.div`
margin-top: -2px;
`;

export const Active = styled.div`
background: ${({ theme }) => (theme === 'dark' ? '#1f022a' : '#ffffff')};
width: 20px;
height: 20px;
border-radius: 50%;
margin-right: ${({ theme }) => (theme === 'dark' ? '35px' : '')};
margin-left: ${({ theme }) => (theme === 'light' ? '35px' : '')};
transition: all ease-in-out 0.5s;

margin-top: 2px;
`;