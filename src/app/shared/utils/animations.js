import styled, { keyframes } from 'styled-components';
import { bounceInRight, bounceInLeft } from 'react-animations';

const bounceAnimationInRight = keyframes`${bounceInRight}`;
const bounceAnimationInLeft = keyframes`${bounceInLeft}`;

export const BouncyDiv = styled.div`
animation: 2s ${bounceAnimationInRight};
`;

export const BouncyDivInLeft = styled.div`
animation: 2s ${bounceAnimationInLeft};
`;