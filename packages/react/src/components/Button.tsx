import { styled } from "../styles";

import { ComponentProps } from "react";

export const Button = styled("button", {
   all: "unset",

   borderRadius: "$sm",
   fontSize: "$sm",
   fontWeight: "$medium",
   fontFamily: "$default",
   textAlign: "center",
   minWidth: 120,
   boxSizing: "border-box",

   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   gap: "$2",
   cursor: "pointer",
   padding: "0 $4",

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