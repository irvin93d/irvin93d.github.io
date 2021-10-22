import styled from 'styled-components/macro'

import { FadeInImg } from '../components/FadeIn'
import { HStack, VStack } from '../components/Stack'
import Dify1 from './dify1.png'
import Dify2 from './dify2.png'
import Gxc from './gxc.jpg'
import OPay from './opay.jpg'
import PocoPay from './pocopay.jpg'

const Work = () => (
  <Wrapper>
    <h1>Work experience</h1>
    <VStack>
      <h2>React Web Developer - GXC by Opera</h2>
      <p>A platform for fast and free publishing of games made in GameMaker Studio.</p>
      <ul>
        <li>Dynamic/static web pages with next.js/CRA,</li>
        <li>Async data management with react-query,</li>
        <li>Styling with styled-components and SASS.</li>
      </ul>
      <FadeInImg alt="GXC" src={Gxc} />
    </VStack>

    <VStack>
      <h2>React Native App Developer - Dify by Opera</h2>
      <p>
        A fintech product with support for virtual payment cards, biometrics authentication, in-app
        cashback and push notifications.
      </p>
      <ul>
        <li>Bridging of native components from iOS (Swift/ObjC),</li>
        <li>State management with Redux,</li>
        <li>Push notifications with Firebase,</li>
        <li>e2e testing with Detox.</li>
      </ul>
      <HStack flexWrap="wrap" justifyContent="center">
        <FadeInImg alt="Dify" src={Dify1} />
        <FadeInImg alt="Dify" src={Dify2} />
      </HStack>
    </VStack>

    <VStack>
      <h2>iOS Developer - Opera Fintech</h2>
      <p>
        Prototypes in fresh codebases. After Opera acquired Pocosys, I hade the opportunity to and
        maintain and update the existing PocoPay app.
      </p>
      <ul>
        <li>
          Patching of existing apps, maintaining backwards compatibility with very old iOS versions,
        </li>
        <li>Dependency management with CocoaPods,</li>
        <li>UI both with Storyboard and fully programmatic.</li>
      </ul>
      <FadeInImg alt="Poco" src={PocoPay} />
    </VStack>

    <VStack>
      <h2>Go Backend Developer - OPay (by Opera)</h2>
      <p>
        Common financial service for banking, utility payments, transactions and savings. maintain
        and update the existing PocoPay app.
      </p>
      <ul>
        <li>Go, MongoDB, GraphQL,</li>
        <li>Testing and automation utilities.</li>
      </ul>
      <FadeInImg alt="OPay" src={OPay} />
    </VStack>
  </Wrapper>
)

const Wrapper = styled(VStack)``

export default Work
