import { styled } from "./styles"

const Button = styled("button", {
   fontFamily: "$default",

   height: "$10",
   padding: "$4",

   borderRadius: "$md",
   backgroundColor: "$ignite500"
})

export function App() {
  return <Button>Hello Word</Button>
}
