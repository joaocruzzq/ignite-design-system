import { styled } from "../../styles";

import { Text } from "../Text";

export const MultiStepContainer = styled("div", {})

export const Label = styled(Text, {
   color: "$gray200",

   defaultVariants: {
      size: "xs"
   }
})

export const Steps = styled("div", {
   display: "grid",
   marginTop: "$1",
   gap: "$2",

   gridTemplateColumns: "repeat(var(--steps-size), 1fr)"
})

export const Step = styled("div", {
   height: "$1",
   borderRadius: "$px",
   background: "$gray600",

   variants: {
      active: {
         true: {
            background: "$gray100"
         }
      }
   }
})