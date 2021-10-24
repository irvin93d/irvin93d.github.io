import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps, PropsWithChildren } from 'react'
import styled from 'styled-components/macro'

import { HStack, VStack } from './components/Stack'
import beutiface from './res/beutiface.jpg'

const Profile = () => {
  return (
    <Wrapper>
      <Photo />
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        <VStack alignItems="stretch" gap="large">
          <HStack sizeEvenly justifyContent="space-evenly">
            <a href="https://github.com/irvin93d/">
              <Icon height="132px" icon={faGithub} width="132px" />
            </a>
            <a href="https://www.linkedin.com/in/duane-irvin/">
              <Icon icon={faLinkedinIn} />
            </a>
            <a href="https://www.facebook.com/irvin93d">
              <Icon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/irvin93d/">
              <Icon icon={faInstagram} />
            </a>
          </HStack>
          <HStack sizeEvenly flexWrap="wrap" gap="medium" justifyContent="space-around">
            <a href="tel:+4673-4646969">
              <LabeledIcon icon={faPhoneAlt}>+46 73-464 69 69</LabeledIcon>
            </a>
            <a href="mailto:irvin93d@gmail.com">
              <LabeledIcon icon={faEnvelope}>irvin93d@gmail.com</LabeledIcon>
            </a>
            <a href="https://irvin93d.github.io/files/CV.pdf">
              <LabeledIcon icon={faFile}>Resumé</LabeledIcon>
            </a>
          </HStack>
        </VStack>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(HStack).attrs(() => ({ flexWrap: 'wrap', justifyContent: 'center' }))`
  a {
    transition: color 250ms ease;
    svg {
      transition: transform 250ms ease;
    }
    &:hover {
      svg {
        transform: translateY(-8px);
      }
    }
  }
`

const LabeledIcon = styled(
  ({ children, className, ...props }: PropsWithChildren<ComponentProps<typeof Icon>>) => (
    <VStack alignItems="center" className={className}>
      <span>
        <Icon {...props} />
      </span>
      {children}
    </VStack>
  ),
)`
  white-space: nowrap;
`

const Photo = styled.img.attrs(() => ({ src: beutiface, alt: 'Photo of me' }))`
  width: 300px;
`

const title = 'Duane Irvin'
const subtitle = 'Computer Engineer & Fullstack Developer'
const description =
  "Hey! A lot has happened since I made this page, so it needs some updating. However, I have a master's in algorithms, programming languages and logic. Professionally I worked as a backend developer in Go, iOS in Swift, Android and iOS in React Native (including porting native components) and web developer React (both CRA and Next.js). I currently a pretty solid postition at Opera Software, but hey, feel free to shoot me a message anyways!"

const Icon = styled(FontAwesomeIcon)`
  &&& {
    width: 32px;
    height: 32px;
  }
`

export default Profile
