import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components/macro'

const Toggle = styled(
  ({ value, onChange, ...props }: { value?: boolean; onChange?: (value: boolean) => void }) => {
    const [toggle, _setToggle] = useState(false)

    const [stylesOn, apiOn] = useSpring(() => ({
      position: 'absolute' as const,
      opacity: toggle ? 1 : 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }))
    const [stylesOff, apiOff] = useSpring(() => ({
      position: 'absolute' as const,
      opacity: toggle ? 0 : 1,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }))

    const setToggle: typeof _setToggle = useCallback(
      (f) =>
        _setToggle((oldValue) => {
          const toggle = typeof f === 'function' ? f(oldValue) : f
          apiOn.start({ opacity: toggle ? 1 : 0 })
          apiOff.start({ opacity: toggle ? 0 : 1 })
          onChange && onChange(toggle)
          return toggle
        }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [apiOn, apiOff],
    )

    useEffect(() => {
      if (value !== undefined) setToggle(value)
    }, [setToggle, value])

    return (
      <button {...props} onClick={() => setToggle((v) => !v)}>
        <animated.div style={stylesOff}>
          <FontAwesomeIcon icon={faToggleOff} />
        </animated.div>
        <animated.div style={stylesOn}>
          <FontAwesomeIcon icon={faToggleOn} />
        </animated.div>
        <FontAwesomeIcon icon={faToggleOn} opacity={0} />
      </button>
    )
  },
)`
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`

export default Toggle
