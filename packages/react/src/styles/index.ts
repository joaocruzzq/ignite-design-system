import {
   fonts,
   radii,
   space,
   colors,
   fontSizes,
   fontWeights,
   lineHeights
} from "@cruz-ignite-ui/tokens";

import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
   css,
   theme,
   config,
   styled,
   keyframes,
   globalCss,
   getCssText,
   createTheme,
} = createStitches({
   themeMap: {
      ...defaultThemeMap,
      width: "space",
      height: "space"
   },

   theme: {
      fonts: fonts,
      radii: radii,
      space: space,
      colors: colors,
      fontSizes: fontSizes,
      fontWeights: fontWeights,
      lineHeights: lineHeights
   },
})