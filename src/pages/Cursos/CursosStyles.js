import styled from "styled-components";

export const CursosMainStyled = styled.div`

.cursos{
    margin-top: 70px;

}

.courses-box{

    .cursos{
        border: 2px solid red;
        margin-top: 70px;

    }

    height: 70vh;
    width: 100%;

    .card-title{
        text-align: center;
        font-size: 32px;
        padding-bottom: 0.5rem;

        @media (max-width: 760px){
            font-size: 24px;
        }
    }

    .timeline-card-contentstyles__TimelineItemContentWrapper-sc-d7qjm1-0{
        background: ${props => props.theme.background_course};
    }

    .timeline-card-contentstyles__TimelineContentSubTitle-sc-d7qjm1-2{
        text-align: center;
        font-style: italic;
        color: #5f5f5fef;
        font-size: 20px;
        
        @media (max-width: 760px){
            font-size: 16px;
        }
    }

    .timeline-card-contentstyles__TimelineContentDetails-sc-d7qjm1-4{
        text-align: center;
        
    }

    img{
        border-radius: 10%;
    }

    a{
        text-decoration: none;
        text-align: center;
        color: #252525;
    }    

    span{
        color: black;
        
    }

    p{
        color: black;
    }
}

`;