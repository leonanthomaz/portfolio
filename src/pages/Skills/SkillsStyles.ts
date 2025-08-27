// import styled from 'styled-components';
// import { Box } from '@mui/material';

// export const SkillsContainer = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   color: ${({ theme }) => theme.palette.primary.main};
//   text-align: center;
//   /* min-height: 100vh; */
// `;

// export const SkillsWrapper = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const SkillItemContainer = styled(Box)`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 80px;
//   margin-top: 40px;

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(3, 1fr); /* 3 itens por linha em telas médias */
//   }

//   @media (max-width: 768px) {
//     gap: 40px;
//     grid-template-columns: repeat(2, 1fr); /* 2 itens por linha em telas pequenas */
//   }

//   @media (max-width: 480px) {
//     gap: 20px;
//     grid-template-columns: repeat(1, 1fr); /* 1 item por linha em telas muito pequenas */
//   }
// `;

// export const SkillItem = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 120px;
//   height: 120px;
//   border-radius: 50%;
//   background-color: ${({ theme }) => theme.palette.background.paper}; /* Cor de fundo do tema */
//   padding: 20px;
//   text-align: center;
//   cursor: pointer;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 10px 20px rgba(255, 235, 59, 0.3);
//   }

//   svg {
//     font-size: 48px;
//     color: ${({ theme }) => theme.palette.primary.main}; /* Cor do tema */
//   }

//   span {
//     margin-top: 10px;
//     font-size: 16px;
//     font-weight: 500;
//     color: ${({ theme }) => theme.palette.text.secondary}; /* Cor do texto do tema */
//   }
// `;

// export const HighlightText = styled.span`
//   font-weight: bold;
//   color: ${({ theme }) => theme.palette.primary.main}; /* Cor do tema */
// `;
