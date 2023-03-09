import React from "react";
import * as C from "./ContactStyles";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ETitle } from "../../components/Elements/title";
import { FormContact } from "../../components/FormContact";
import { SocialNetwork } from "../../components/SocialNetwork";

export const Contact = () => {

    return (
      <C.Container id="contact">
        <AnimationOnScroll animateIn="animate__backInLeft">
          <ETitle title={'Contato'} subtitle={'Responderei o mais rápido possível!'}/>
        </AnimationOnScroll>
        <C.Wrapper>
          <C.Left>
            <FormContact/>
          </C.Left>
          <C.Right>
            <SocialNetwork/>
          </C.Right>
        </C.Wrapper>
      </C.Container>
    )
}
