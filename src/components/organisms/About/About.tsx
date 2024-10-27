import React from 'react'
import "./About.css"
import TextTyping from '../../atoms/TextTyping/TextTyping'
import TextBold from '../../atoms/TextBold/TextBold'
import TextNormal from '../../atoms/TextNormal/TextNormal'
import Space from '../../atoms/Space/Space'
import ButtonLight from '../../atoms/ButtonLight/ButtonLight'
import FrameCircle from '../../molecules/FrameCircle/FrameCircle'
import ContactSocial, { Social } from '@components/atoms/ContactSocial/ContactSocial'

const About = () => {
  return (
    <div className='about-container'>
      <div className='intro-self animate__animated animate__fadeInLeft'>
        <TextNormal>Hello, It's me</TextNormal>
        <TextBold>Đặng Duy Bằng</TextBold>
        <TextTyping className='name'>{`And I am a Software Engineer`}</TextTyping>
        <Space verticalSpace={40} />
        <TextNormal size={18}>A full-stack developer is a versatile tech profile who possesses the skills {`\n`} and knowledge to handle all aspects of web development.</TextNormal>
        <Space verticalSpace={25} />
        <div className='contacts'>
          <ContactSocial href="https://linkedin.com/in/bangdd" social={Social.Linkedin} />
          <ContactSocial href="https://www.facebook.com/bangduy.se119" social={Social.Facebook} />
          <ContactSocial href="mailto:bangduy.se119@gmail.com" social={Social.Email} />
          <ContactSocial href="https://github.com/bang-se119" social={Social.Github} />
        </div>
        <Space verticalSpace={25} />
        <ButtonLight>More About Me</ButtonLight>
      </div>
      <div className='frame-avatar'>
        <FrameCircle className='animate__animated animate__fadeInRight' src='/portfolio/images/avatar-bangdd.png' />
      </div>
    </div >
  )
}

export default About;
