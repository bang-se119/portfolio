import React from 'react'
import "./ContactSocial.css"

export enum Social {
  Linkedin = "linkedin",
  Facebook = "facebook",
  Email = "email",
  Github = "github",
}

interface IContactSocialProps {
  href?: string;
  social?: Social;
}

const ContactSocial = (props: IContactSocialProps) => {
  const { href, social } = props;

  return (
    <a href={href} target="_blank" className='contact-social-container'>
        <img alt={`logo-${social}`} src={`/portfolio/images/logo-social-${social}.png`} />
    </a>
  )
}

export default ContactSocial