import React from 'react'
import styled from 'styled-components'
import { BiCodeBlock } from "react-icons/bi";

export const Title = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: ${props => props.theme.font_title_el};
padding-top: 4rem;
font-family: 'Dela Gothic One', cursive;
text-transform: uppercase;
`;

export const TitleMain = styled.h2`

    font-size: 32px;

    @media(max-width: 900px){
        font-size: 22px;
    }

    @media(max-width: 760px){
        font-size: 20px;
    }

    @media(max-height: 400px){
        font-size: 18px;
    }
`;

export const H3 = styled.h3`
    color: ${props => props.theme.font_title_el_h3};
    font-size: 18px;

    @media(max-width: 760px){
        font-size: 16px;
    }

    @media(max-width: 500px){
        font-size: 14px;
    }
`;

export const Icon = styled(BiCodeBlock)`
margin: 5px;
color: ${props => props.theme.font};

font-size: 36px;

@media(max-width: 760px){
    font-size: 36px;
}

@media(max-width: 500px){
    font-size: 28px;
}

`;

export const SubTitle = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: ${props => props.theme.font};
font-family: 'Josefin Sans', sans-serif;
font-family: 'Josefin Sans', sans-serif;


`;

export const Hr = styled.hr`
border-bottom: ${props => props.theme.hr};
max-width: 500px;
margin: auto;
margin-top: 10px;

`;

export const ETitle = ({title, subtitle}) => {

    return (
    <div>
        <Title>
            <Icon/><TitleMain>{title}</TitleMain>
        </Title>
        <SubTitle>
            <H3>{subtitle}</H3>
        </SubTitle>
        <Hr/>
    </div>
    )
}
