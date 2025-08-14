import { styled } from "../styles";

import { ComponentProps } from "react";

export const ToolTip = styled("div", {
   maxWidth: "fit-content",
   
   padding: "$3 $4",
   position: "relative",

   borderRadius: "$sm",
   background: "$gray900",

   "::after": {
      content: '',

      width: "$4",
      height: "$4",
      
      display: "flex",
      position: "absolute",

      rotate: "45deg",
      marginTop: "$2",

      background: "$gray900",

      left: "50%",
      transform: "translateX(-50%)"
   }
})

export type ToolTipProps = ComponentProps<typeof ToolTip>

ToolTip.displayName = "ToolTip"