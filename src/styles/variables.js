import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #1c1b1a;
    --navy: #292826;
    --light-navy: #363532;
    --lightest-navy: #43423f;
    --navy-overlay: rgba(41, 40, 38, 0.85);
    --navy-shadow: rgba(33, 32, 30, 0.7);
    --dark-slate: #a19e99;
    --slate: #b4b2ae;
    --light-slate: #c7c5c2;
    --lightest-slate: #dad9d7;
    --white: #f6f6f5;
    --green: #f9d342;
    --green-tint: rgba(249, 211, 66, 0.1);

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;

/*
Color Themes

Original
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-overlay: rgba(10, 25, 47, 0.85);
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);

BLack and Yellow
    --dark-navy: #1c1b1a;
    --navy: #292826;
    --light-navy: #363532;
    --lightest-navy: #43423f;
    --navy-overlay: rgba(41, 40, 38, 0.85);
    --navy-shadow: rgba(33, 32, 30, 0.7);
    --dark-slate: #a19e99;
    --slate: #b4b2ae;
    --light-slate: #c7c5c2;
    --lightest-slate: #dad9d7;
    --white: #f6f6f5;
    --green: #F9D342;
    --green-tint: rgba(249, 211, 66, 0.1);

Pink and Blue
    --dark-navy: rgb(249,233,225);
    --navy: #FBEAEB;
    --light-navy: #fefafb;
    --lightest-navy: #ffffff;
    --navy-overlay: rgba(251, 234, 235, 0.85);
    --navy-shadow: rgba(243, 226, 227, 0.7);
    --dark-slate: #2d090b;
    --slate: rgb(36,7,9);
    --light-slate: #1c0507;
    --lightest-slate: rgb(20,3,5);
    --white: #0c0203;
    --green: #2F3C7E;
    --green-tint: rgba(47, 60, 126, 0.1);

Blue and turquoise
    --dark-navy: rgb(29,44,82);
    --navy: rgb(36,54,101);
    --light-navy: rgb(43,64,120);
    --lightest-navy: rgb(49,74,139);
    --navy-overlay: rgba(36,54,101, 0.85);
    --navy-shadow: rgba(28, 46, 93, 0.7);
    --dark-slate: rgb(168,184,224);
    --slate: rgb(175,190,227);
    --light-slate: rgb(197,207,234);
    --lightest-slate: rgb(211,219,239);
    --white: rgb(240,243,250);
    --green: #8BD8BD;
    --green-tint: rgba(139, 216, 189, 0.1);

Beige and rust
    --dark-navy: rgb(213,173,124);
    --navy: rgb(219,185,143);
    --light-navy: rgb(225,197,162);
    --lightest-navy: rgb(231,209,182);
    --navy-overlay: rgba(219,185,143, 0.85);
    --navy-shadow: rgba(211, 177, 135, 0.7);
    --dark-slate: rgb(81,56,26);
    --slate: rgb(66,46,21);
    --light-slate: rgb(51,36,16);
    --lightest-slate: rgb(36,25,12);
    --white: rgb(7,5,2);
    --green: #96351E;
    --green-tint: rgba(150, 53, 30, 0.1);

BLack and Yellow 2
    --dark-navy: rgb(26,26,26);
    --navy: rgb(39,39,39);
    --light-navy: rgb(52,52,52);
    --lightest-navy: rgb(65,65,65);
    --navy-overlay: rgba(39,39,39, 0.85);
    --navy-shadow: rgba(31, 31, 31, 0.7);
    --dark-slate: rgb(147,147,147);
    --slate: rgb(167,167,167);
    --light-slate: rgb(186,186,186);
    --lightest-slate: rgb(206,206,206);
    --white: rgb(235,235,235);
    --green: rgb(255,228,0);
    --green-tint: rgba(255,228,0, 0.1);
*/
