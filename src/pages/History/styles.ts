import { styled } from '@styles/stitches.config'

export namespace HistoryPageStyles {
  export const Table = styled('table', {
    width: '100%',
    minWidth: '600px',

    borderCollapse: 'collapse',

    whiteSpace: 'nowrap',

    // margin: '-$medium',
  })

  export const TableHead = styled('thead', {
    backgroundColor: '$defaultSubtleBackground',

    position: 'sticky',
    top: 0,

    th: {
      fontSize: '$normal',
      lineHeight: '$normal',
      textAlign: 'left',

      padding: '$normal',

      '&:first-child': {
        // borderTopLeftRadius: '$small',
        paddingLeft: '$medium',
      },

      '&:last-child': {
        // borderTopRightRadius: '$small',
        paddingRight: '$medium',
      },
    },
  })

  export const TableBody = styled('tbody', {
    tr: {
      // backgroundColor: '$defaultElementBackground',
      // '@media (prefers-reduced-motion: no-preference)': {
      //   transition: '$default',
      //   transitionProperty: 'background-color',
      // },
      // '&:last-child > td:first-child': {
      //   borderBottomLeftRadius: '$small',
      // },
      // '&:last-child > td:last-child': {
      //   borderBottomRightRadius: '$small',
      // },
      // '&:hover': {
      //   backgroundColor: '$defaultElementBackgroundHover',
      // },
    },

    td: {
      fontSize: '$normal',
      lineHeight: '$normal',
      textAlign: 'left',
      color: '$defaultLowContrastText',

      padding: '$normal',
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: '$defaultBorder',

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
    display: 'inline-flex',
    alignItems: 'center',

    $$size: '28px',

    height: '$$size',
    borderRadius: '$$size',

    padding: '0 $small',
    border: '1px solid transparent',

    variants: {
      statusColor: {
        success: {
          color: '$successSolid',
          backgroundColor: '$successElementBackground',
          borderColor: '$successBorder',
        },
        failure: {
          color: '$dangerSolid',
          backgroundColor: '$dangerElementBackground',
          borderColor: '$dangerBorder',
        },
        inProgress: {
          color: '$brandSolid',
          backgroundColor: '$brandElementBackground',
          borderColor: '$brandBorder',
        },
      },
    },
  })
}
