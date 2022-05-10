import b2b from './themes/b2b';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      darkBlue: string;
      mediumblue: string;
      lightblue: string;
      fuchsia: string;
      white: string;
      whiteMiv2: string;
      whiteMiv: string;
      black: string;
      darkblack: string;
    };

    palette: {
      primary: {
        light: string;
        dark: string;
        main: string;
        fuchsia: string;
      };

      text: {
        primary: string;
        secondary: string;
        fuchsia: string;
      };
    };
    alerts: {
      error: string;
      warning: string;
      success: string;
    };

    size: {
      text: {
        tx1: string;
        tx2: string;
        tx3: string;
      };
      title: {
        tx1: string;
        tx2: string;
        tx3: string;
      };
      borderRadius: {
        br1: string;
        br2: string;
        br3: string;
      };
      padding: {
        pd1: string;
        pd2: string;
        pd3: string;
      };
    };

    typography: {
      fontFamily: string;
    };
  }
}
