import { styled } from "../styles";

import { ComponentProps } from "react";

export const TextArea = styled("textarea", {
   minHeight: 80,

   padding: "$3 $4",
   resize: "vertical",

   borderRadius: "$sm",
   border: "2px solid $gray900",
   
   background: "$gray900",
   boxSizing: "border-box",

   color: "$white",

   fontSize: "$sm",
   fontFamily: "$default",
   fontWeight: "$regular",

   "&:focus": {
      outline: 0,
      borderColor: "$ignite300"
   },

   "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed"
   },

   "&:placeholder": {
      color: "$gray400"
   }
})

export type TextAreaProps = ComponentProps<typeof TextArea>

TextArea.displayName = "TextArea"