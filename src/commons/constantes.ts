import {mode} from '@chakra-ui/theme-tools'
// A stocker en BDD plus tard

//pas utiliser
export const ThemeDefaultProps = {
  variant: 'outline',
  size: 'md',
  colorScheme: 'blue',
}

const styles = {
  global: (props: any) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#141214')(props),
    },
  }),
}

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: (props: any) => ({
      dialog: {
        bg: mode('white', '#141214')(props),
      },
    }),
  },
  Button: {
    // 1. We can update the base styles
    baseStyle: {
      fontWeight: 'bold', // Normally, it is "semibold"
    },
    // 2. We can add a new button size or extend existing
    sizes: {
      xl: {
        h: '56px',
        fontSize: 'lg',
        px: '32px',
      },
    },
    // 3. We can add a new visual variant
    variants: {
      'with-shadow': {
        bg: 'red.400',
        boxShadow: '0 0 2px 2px #efdfde',
      },
      // 4. We can override existing variants
      solid: (props: any) => ({
        bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
      }),
    },
  },
}
const styleGlobalDefault = {
  global: (props: any) => ({
    body: {
      color: mode('black', 'black')(props),
      bg: mode('white', 'black')(props),
    },
  }),
}
export const ThemeDefault = {
  styles: styleGlobalDefault,
  /* components,*/
  variant: 'outline',
  size: 'md',
  colorScheme: 'teal',
  'font-family': 'Poppins',
  colors: {
    brand: {
      100: '#f7fafc',
      // ...
      900: '#1a202c',
    },
  },
}

const styleGlobalMike = {
  global: (props: any) => ({
    body: {
      color: mode('#011627', '#FBFBFB')(props),
      bg: mode('#D6DEEB', '#403F53')(props),
    },
  }),
}

export const ThemeUserMike = {
  //  styles: styleGlobalMike,
  /* components,*/
  variant: 'outline',
  size: 'md',
  colorScheme: 'blue',
  colors: {
    brand: {
      50: '#EAECEE',
      100: '#EAECEE',
      200: '#D5D8DC',
      300: '#ABB2B9',
      400: '#808B96',
      500: '#566573',
      600: '#2C3E50',
      700: '#273746',
      800: '#212F3D',
      900: '#17202A',
    },
  },
}
const styleGlobaKevin = {
  global: (props: any) => ({
    body: {
      color: mode('gray.900', 'gray.200')(props),
      bg: mode('orange.300', 'orange.900')(props),
    },
  }),
}
export const ThemeUseKevin = {
  styles: styleGlobaKevin,
  /* components,*/
  variant: 'outline',
  size: 'md',
  colorScheme: 'yellow',
  colors: {
    brand: {
      100: '#e7fafc',
      // ...
      900: '#ea202c',
    },
  },
}

export const sizes = {
  xs: 0,
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
}
export const grid6 = {
  xs: 12,
  sm: 12,
  md: 2,
  lg: 2,
  xl: 2,
  xxl: 2,
}
export const grid4 = {
  xs: 12,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 3,
  xxl: 3,
}
export const grid2 = {
  xs: 12,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 6,
  xxl: 6,
}
export const grid1 = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 12,
}
