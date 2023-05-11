import { keyframes, styled } from '@styles/stitches.config'

export namespace HistoryPageStyles {
  const fadeInAnimation = keyframes({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  export const Container = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '$medium',

    paddingTop: '$large',
    paddingBottom: '$large',

    paddingLeft: '$normal',
    paddingRight: '$normal',

    width: '100%',
    maxWidth: '$largeScreen',

    margin: '0 auto',

    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${fadeInAnimation} 150ms ease-out`,
    },

    '> h1': {
      fontSize: '$headline',
      lineHeight: '160%'
    },
  })

  export const History = styled('div', {
    flex: 1,

    overflow: 'auto',

    '> div': { height: 0 },
  })

  export const Table = styled('table', {
    width: '100%',
    minWidth: '600px',

    borderCollapse: 'collapse',

    whiteSpace: 'nowrap',
  })

  export const TableHead = styled('thead', {
    backgroundColor: '$defaultElementBackgroundActive',

    position: 'sticky',
    top: 0,

    th: {
      fontSize: '$normal',
      lineHeight: '$normal',
      textAlign: 'left',

      padding: '$normal',

      '&:first-child': {
        borderTopLeftRadius: '$small',
        paddingLeft: '$medium',
      },

      '&:last-child': {
        borderTopRightRadius: '$small',
        paddingRight: '$medium',
      },
    },
  })

  export const TableBody = styled('tbody', {
    tr: {
      backgroundColor: '$defaultElementBackground',

      '&:last-child > td:first-child': {
        borderBottomLeftRadius: '$small',
      },

      '&:last-child > td:last-child': {
        borderBottomRightRadius: '$small',
      },

      '&:hover': {
        backgroundColor: '$defaultElementBackgroundHover',
      },
    },

    td: {
      fontSize: '$normal',
      lineHeight: '$normal',
      textAlign: 'left',
      color: '$defaultLowContrastText',

      padding: '$normal',
      borderTopWidth: '4px',
      borderTopStyle: 'solid',
      borderTopColor: '$defaultSubtleBackground',

      '&:first-child': {
        width: '50%',
        paddingLeft: '$medium',
      },

      '&:last-child': {
        paddingRight: '$medium',
      },
    },
  })

  export const Status = styled('span', {
    display: 'flex',
    alignItems: 'center',
    gap: '$small',

    variants: {
      statusColor: {
        success: {
          '&::before': {
            backgroundColor: '$successSolid',
          },
        },
        failure: {
          '&::before': {
            backgroundColor: '$dangerSolid',
          },
        },
        inProgress: {
          '&::before': {
            backgroundColor: '$brandSolid',
          },
        },
      },
    },

    '&::before': {
      $$size: '8px',

      content: '',

      width: '$$size',
      height: '$$size',
      borderRadius: '$$size',
    },
  })
}
