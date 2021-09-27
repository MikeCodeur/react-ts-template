// theme.js

    const colors = {
      black: '#000e1a',
      white: '#fff',
      blue: '#007ce0',
      navy: '#004175',
      primary: {
        lighter: '#eef6fa',
        light: '#819CAD',
        default: '#00ABEF',
        dark: '#004269',
      },
      error: {
        default: '#f24750',
        dark: '#f24750',
        light: '#fdeeef',
        lighter: '#fdeeef',
      },
    
      warning: { default: '#FF8C4C' },
      success: { default: '#1BC773' },
      grey: {
        default: '#819CAD',
      },
    }

    const fontSize = {
        small: 11,
        regular: 14,
        xlarge: 20,
      };
      
      const padding = {
        regular: 20,
      };

      const sizes = {
        xs: 0,
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      };
    export const Theme = {
        colors,
        fontSize,
        padding,
        breakpoints: sizes,
        sizes,
      
        innerSize: 1170,

        background: colors.white,
        text: colors.black,
        success: colors.success.default,
        danger: colors.error.default,
      };
      
export default Theme;
  