import { styled } from "../../styles";

export const TextInputContainer = styled("div", {
   display: "flex",
   padding: "$3 $4",

   alignItems: "baseline",
   
   borderRadius: "$sm",
   border: "2px solid $gray900",
   
   background: "$gray900",
   boxSizing: "border-box",

   "&:has(input:focus)": {
      borderColor: "$ignite300"
   },

   "&:has(input:disabled)": {
      opacity: 0.5,
      cursor: "not-allowed"
   }
})

export const Prefix = styled("span", {
   color: "$gray400",

   fontSize: "$sm",
   fontFamily: "$default",
   fontWeight: "$regular"
})

export const Input = styled("input", {
   border: 0,
   width: "100%",

   fontSize: "$sm",
   fontFamily: "$default",
   fontWeight: "$regular",

   color: "$white",
   background: "transparent",

   "&:focus": {
      outline: 0
   },

   "&:disabled": {
      cursor: "not-allowed"
   },

   "&:placeholder": {
      color: "$gray400"
   }
})