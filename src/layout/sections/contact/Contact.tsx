import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {ContactForm} from "./form/ContactForm";
import {Container} from "../../../components/Container";
import {SvgWrapper} from "../../../components/menu/classStyled/ClassStyled";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <FlexWrapper justify='space-between'>
                    <FlexWrapper>
                        <FlexWrapper direction='column' justify={'center'}>
                            <ContactHeader>Connect with me:</ContactHeader>
                            <SocialList>
                                <SocialItem>
                                    <SocialLink>
                                        <SvgWrapper>
                                            <Icon iconId={'telegram'} width={'40px'} viewBox={'0 0 40 40'}
                                                  height={'40px'}/>
                                        </SvgWrapper>
                                    </SocialLink>
                                </SocialItem>
                                <SocialItem>
                                    <SocialLink>
                                        <SvgWrapper>
                                            <Icon iconId={'face'} width={'40px'} viewBox={'0 0 40 40'}
                                                  height={'40px'}/>
                                        </SvgWrapper>
                                    </SocialLink>
                                </SocialItem>
                                <SocialItem>
                                    <SocialLink>
                                        <SvgWrapper>
                                            <Icon iconId={'linkedin'} width={'40px'} height={'40px'} viewBox={'0 0 40 40'}/>
                                        </SvgWrapper>
                                    </SocialLink>
                                </SocialItem>
                                <SocialItem>
                                    <SocialLink>
                                        <SvgWrapper>
                                            <Icon iconId={'email'} width={'40px'} height={'40px'} viewBox={'0 0 40 30'}/>
                                        </SvgWrapper>
                                    </SocialLink>
                                </SocialItem>
                            </SocialList>
                        </FlexWrapper>
                    </FlexWrapper>
                    <ContactForm/>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  display: flex;
`
const ContactHeader = styled.h2`

`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;

`
const SocialItem = styled.li`
    text-decoration: none;

`
const SocialLink = styled.a`

`
