import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* new spirit */
      @font-face {
        font-family: 'New Spirit';
        font-style: normal;
        font-weight: 400;
        src: url('./fonts/New Spirit Regular.otf') format('opentype'), url('./fonts/New Spirit Bold.otf') format('opentype')
      }
      /* plus jakarta sans */
      @font-face {
        font-family: 'Plus Jakarta Sans';
        font-style: normal;
        font-weight: 400;
      src: url('./fonts/PlusJakartaSans-Regular.ttf') format('truetype'), url('./fonts/PlusJakartaSans-Medium.ttf') format('truetype'), url('./fonts/PlusJakartaSans-Bold.ttf') format('truetype')
      }
      /* Inter */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
      src: url('./fonts/Inter-Regular.ttf') format('truetype'), url('./fonts/Inter-Medium.ttf') format('truetype'), url('./fonts/Inter-Bold.ttf') format('truetype')
      }
      /* Gopher */
      @font-face {
        font-family: 'Gopher';
        font-style: normal;
        font-weight: 400;
      src: url('./fonts/GopherDisplay-Regular.ttf') format('truetype'), url('./fonts/GopherDisplay-Medium.ttf') format('truetype')
      }
      /* Gilda */
      @font-face {
        font-family: 'Gilda';
        font-style: normal;
        font-weight: 400;
      src: url('./fonts/GildaDisplay-Regular.ttf') format('truetype')
      }
      `}
  />
);

export default Fonts;
