import { styled } from "../../styles";

import * as Toast from "@radix-ui/react-toast"

export const ToastContainer = styled(Toast.Root, {
   display: "grid",
   position: "relative",

   rowGap: "$1",
   padding: "$3 $5",

   width: "$80",
   background: "$gray800",

   borderRadius: "$md",
   border: "1px solid $gray600"
})

export const CloseButton = styled(Toast.Action, {
   right: 0,
   border: 0,
   
   padding: 0,
   margin: "$4",
   
   lineHeight: 0,

   cursor: "pointer",
   position: "absolute",
   
   color: "$gray200",
   background: "transparent",

   "&:hover": {
      color: "$white"
   }
})