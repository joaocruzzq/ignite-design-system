import type { StoryObj, Meta } from "@storybook/react"

import { Heading, HeadingProps } from "@ignite-ui/react"

const meta = {
   title: "Typography/Heading",
   component: Heading,

   args: {
      children: "Custom title"
   }
} satisfies Meta<HeadingProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const CustomTag: Story = {
   args: {
      children: "H1 Heading",
      as: "h1"
   }
}