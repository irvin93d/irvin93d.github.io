import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components/macro'

import useHover from '../hooks/useHover'
import { HStack, VStack } from './Stack'
import { ReactComponent as EnvelopeClosed } from './TheNewClosed.svg'
import { ReactComponent as EnvelopeOpen } from './TheNewOpen.svg'

export const Envelope = () => {
  const [{ x }, set] = useSpring(() => ({
    x: 0,
  }))
  const hoverRef = useRef<HTMLDivElement>(null)
  const isHover = useHover(hoverRef)

  useEffect(() => {
    set({ x: isHover ? 1 : 0 })
  }, [isHover, set])

  return (
    <VStack ref={hoverRef}>
      <HStack>
        <Icon icon={faEnvelope} />
        <Icon icon={faEnvelopeOpen} />
      </HStack>
      <HStack>
        <div style={{ height: '512px', width: '512px' }}>
          <EnvelopeClosed />
        </div>
        <div style={{ height: '512px', width: '512px' }}>
          <EnvelopeOpen />
        </div>
      </HStack>
      <HStack>
        <Icon icon={faEnvelope} />
        <div style={{ height: '512px', width: '512px' }}>
          <svg viewBox="0 0 512 512">
            <animated.path
              d={x.to({
                range: [0, 1],
                output: [first, second],
              })}
            />
          </svg>
        </div>
        <div style={{ height: '512px', width: '512px' }}>
          <svg viewBox="0 0 512 512">
            <animated.path
              d={x.to({
                range: [0, 1],
                output: [second, first],
              })}
            />
          </svg>
        </div>
      </HStack>
    </VStack>
  )
}
const first =
  'm512 400c0 26.51-21.49 48-48 48h-416c-26.51 0-48-21.49-48-48v-288c0-25.996 21.497-48 48-48 31.655 2.06e-4 -12.078 0 134.59 0 20.822-0.0455 50.21-0.35 73.413 0 23.198-0.354 52.601 0 73.413 0 146.65-0.31978 102.95-2.23e-4 134.59 0 26.001 0 48 21.996 48 48zm0-269c0 7.4027-3.3969 14.396-9.2 18.9-22.845 16.873-123.27 92.326-173.39 128.7-16.825 12.266-50.21 41.751-73.413 41.4-23.211 0.344-56.559-29.113-73.413-41.4-50.114-36.37-150.54-111.82-173.39-128.7-5.7981-4.6014-9.2-11.439-9.2-18.9v64.6c0-4.9987 5.6951-7.797 9.7-4.7 22.887 16.899 104.19 77.422 154.04 113.6 20.274 14.781 56.524 47.84 92.264 47.6 35.724 0.242 71.961-32.798 92.263-47.6 49.85-36.179 131.15-96.802 154.04-113.7 3.4698-2.5618 9.7-0.19987 9.7 4.7z'
const second =
  'm512 464c0 26.51-21.49 48-48 48h-416c-26.51 0-48-21.49-48-48v-263.28a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.51 16.825-12.267 50.21-41.784 73.413-41.434 23.198-0.354 56.596 29.172 73.413 41.433 118.69 86.137 139.3 102 164.2 121.51a48 48 0 0 1 18.387 37.776zm-65.666-196.6c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.58 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211 0.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.58-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.3 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724 0.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.3-76.868a7.998 7.998 0 0 0 1.839-10.967z'

console.log(first[1])

const Icon = styled(FontAwesomeIcon)`
  &&& {
    width: 512px;
    height: 512px;
  }
`
export default Envelope
