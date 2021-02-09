import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, Sociallogo, SocialIcons, SocialIconLink,}
from './FooterElements';

const Footer = () => {
    return (
       <FooterContainer>
        <FooterWrap>
            <SocialMedia>
            <SocialMediaWrap>
            <Sociallogo to='/'>Buffalo</Sociallogo>
            <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook' rel='noopener'>
            <FaFacebook/>
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram' rel='noopener'>
            <FaInstagram/>
            </SocialIconLink>
            </SocialIcons>
            </SocialMediaWrap>

            </SocialMedia>
        </FooterWrap>
       </FooterContainer>
    )
}

export default Footer
