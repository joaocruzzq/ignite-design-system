import { styled } from "../styles";

import { ComponentProps } from "react";

export const Button = styled("button", {
   all: "unset",

   minWidth: 120,
   
   gap: "$2",
   padding: "0 $4",
   
   cursor: "pointer",

   borderRadius: "$sm",
   boxSizing: "border-box",
   
   fontSize: "$sm",
   fontWeight: "$medium",
   fontFamily: "$default",
   
   display: "flex",
   textAlign: "center",
   alignItems: "center",
   justifyContent: "center",

   "&:disabled": {
      cursor: "not-allowed"
   },

   svg: {
      width: "$4",
      height: "$4"
   },

   variants: {
      variant: {
         primary: {
            color: "$white",
            background: "$ignite500",

            "&:not(:disabled):hover": {
               background: "$ignite300"
            },

            "&:disabled": {
               background: "$gray200"
            }
         },

         secondary: {
            color: "$ignite300",
            border: "2px solid $ignite500",

            "&:not(:disabled):hover": {
               color: "$white",
               background: "$ignite500"
            },

            "&:disabled": {
               color: "$gray200",
               border: "$gray200"
            }
         },

         tertiary: {
            color: "$gray100",

            "&:not(:disabled):hover": {
               color: "$white",
            },

            "&:disabled": {
               color: "$gray600",
            }
         }
      },

      size: {
         sm: {
            height: 38,
         },

         md: {
            height: 46,
         }
      }
   },

   defaultVariants: {
      variant: "primary",
      size: "md"
   }
})

export type ButtonProps = ComponentProps<typeof Button>

Button.displayName = "Button"