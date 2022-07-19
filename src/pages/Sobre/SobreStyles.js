import styled from 'styled-components'

export const SobreMainStyled = styled.nav`

.sobre{
    margin-top: 70px;

}

a{
    text-decoration: none;
    text-align: center;
    background-color: black;
}


.sobre-box{
    display: flex;

    @media (max-width: 1000px){
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .left{
        flex: 1;
        width: 500px;
        padding: 10px;
        text-indent: 5px;
        
        @media (max-width: 1000px){
            display: none;
        }

        img{
            width: 100%
        }
    }
    .right{
        flex: 1;
        padding: 10px;
    }
}

`;