import { styled } from "./styles"

import { ComponentProps } from "react"

export const Button = styled("button", {
   border: 0,
   borderRadius: "$sm",
   
   fontWeight: "bold",
   fontFamily: "$default",
   
   color: "$white",
   backgroundColor: "$ignite300",

   variants: {
      size: {
         small: {
            fontSize: 14,
            padding: "$2 $4"
         },

         big: {
            fontSize: 16,
            padding: "$3 $6"
         }
      }
   },

   defaultVariants: {
      size: "small"
   }
})

export type ButtonProps = ComponentProps<typeof Button>