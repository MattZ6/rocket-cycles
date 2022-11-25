import {
  TooltipProvider,
  Root,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
} from '@radix-ui/react-tooltip'

import { keyframes, styled } from '@styles/stitches.config'

export namespace TooltipStyles {
  export const Provider = TooltipProvider

  export const Tooltip = Root

  export const Trigger = TooltipTrigger

  export const Portal = TooltipPortal

  const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  })

  const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  })

  const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  })

  const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  })

  export const Content = styled(TooltipContent, {
    color: '$tooltipText',
    fontSize: '$normal',
    lineHeight: '$normal',
    fontWeight: '$regular',
    textAlign: 'center',

    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
    userSelect: 'none',

    maxWidth: '240px',
    padding: '$smaller $small',
    borderRadius: '$small',
    backgroundColor: '$tooltipBackground',

    '@media (prefers-reduced-motion: no-preference)': {
      animationDuration: '400ms',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      willChange: 'transform, opacity',
      '&[data-state="delayed-open"]': {
        '&[data-side="top"]': { animationName: slideDownAndFade },
        '&[data-side="right"]': { animationName: slideLeftAndFade },
        '&[data-side="bottom"]': { animationName: slideUpAndFade },
        '&[data-side="left"]': { animationName: slideRightAndFade },
      },
    },
  })

  export const Arrow = styled(TooltipArrow, {
    zIndex: 1,
    fill: '$tooltipBackground',
    stroke: '$tooltipBackground',
  })
}
