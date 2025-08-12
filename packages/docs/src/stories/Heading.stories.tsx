import type { StoryObj, Meta } from "@storybook/react"

import { Heading, HeadingProps } from "@cruz-ignite-ui/react"

const meta = {
   title: "Typography/Heading",
   component: Heading,

   args: {
      size: "md",
      children: "Custom title"
   },

   argTypes: {
      size: {
         options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],

         control: {
            type: "inline-radio"
         }
      },
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