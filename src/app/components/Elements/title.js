import React from 'react'
import styled from 'styled-components'
import { BiCodeBlock } from "react-icons/bi";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Title = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: ${props => props.theme.font_title_el};
padding-top: 80px;
font-family: 'Dela Gothic One', cursive;
text-transform: uppercase;
`;

export const Icon = styled(BiCodeBlock)`
font-size: 32px;
margin: 10px;
color: ${props => props.theme.font};

`;

export const SubTitle = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color: ${props => props.theme.font};
font-family: 'Didact Gothic', sans-serif;

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
        <Icon/><h1>{title}</h1>
        </Title>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <SubTitle>
        <h3>{subtitle}</h3>
        </SubTitle>
        </AnimationOnScroll>
        <Hr/>
    </div>
    )
}
