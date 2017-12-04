import styled from 'styled-components/macro'

import { HStack, VStack } from './components/Stack'

const Projects = () => (
  <Wrapper>
    <div>
      <h1>Projects</h1>
      <p>Check out my GitHub for more projects!</p>
    </div>
    <HStack alignItems="flex-start" flexWrap="wrap" gap="large" justifyContent="center">
      <VStack>
        <h2>Minesweeper</h2>
        <p>
          An online implementation of the old game Minesweeper. Support for multiplayer mode is
          under development.
        </p>
        <ul>
          <li>RESTful backend server in Golang,</li>
          <li>Frontend in React.js and Bootstrap 4.</li>
        </ul>
        <a href="https://github.com/irvin93d/minesweeper-api-go">
          <img
            alt="Minesweeper"
            src="https://raw.githubusercontent.com/irvin93d/minesweeper-api-go/master/preview.png"
          />
        </a>
      </VStack>
      <VStack>
        <h2>Bird Harassment</h2>
        <p>
          Graphics simulation of birds movement behavior. A from-scratch implementation of boids,
          making use of CPU and GPU.
        </p>
        <ul>
          <li>OpenGL and C++,</li>
          <li>
            Extensive use of matrix algebra for computations of light, shadows and reflections,
            along with positions, speeds and accelerations in 3 dimensions.
          </li>
        </ul>
        <a href="https://github.com/irvin93d/BirdHaressment">
          <img
            alt="Bird Harassment"
            src="https://raw.githubusercontent.com/irvin93d/BirdHaressment/master/web/res/screen2.png"
          />
        </a>
      </VStack>
    </HStack>
  </Wrapper>
)

const Wrapper = styled(VStack)``

export default Projects
