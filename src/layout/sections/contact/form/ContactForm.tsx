import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Container} from "../../../../components/Container";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {MainButton} from "../../main/Main";
import {ButtonSlider} from "../../works/Works";

export const ContactForm = () => {
    return (
        <StyledContactForm>
            <Container>
                <FlexWrapper direction={'column'} justify={'center'}>
                    <StyledFormHeader>
                        Contact me, let’s make magic together
                    </StyledFormHeader>
                    <FlexWrapper direction={'column'} gap={'10px'}>
                        <Fields placeholder={'Name:'}/>
                        <Fields placeholder={'Email:'}/>
                        <Fields placeholder={'Message'} as={'textarea'}/>
                        <MainButton>Contact me</MainButton>

                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledContactForm>
    );
};

const StyledContactForm = styled.form`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;

  textarea {
    resize: none;
    height: 155px;
  }
`

const StyledFormHeader = styled.h3`
    text-align: center;
    padding: 30px 0 30px 0;
`
const Fields = styled.input`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.05em;
  background-color: ${theme.colors.secondaryBg};

  &:focus-visible {
    outline: 1px solid ${theme.colors.accent};
  }
`