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
      baseStyle: (props:any) => ({
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
  };

export const ThemeDefault = {
 /* styles,*/
 /* components,*/
  variant: 'outline',
  size: 'md',
  colorScheme: 'green',
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
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('purple.100', 'purple.900')(props),
    },
  }),
}


export const ThemeUserMike = {
  styles:styleGlobalMike,
  /* components,*/
   variant: 'outline',
   size: 'md',
   colorScheme: 'green',
   colors: {
     brand: {
       100: '#f7fafc',
       // ...
       900: '#1a202c',
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
   styles:styleGlobaKevin,
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