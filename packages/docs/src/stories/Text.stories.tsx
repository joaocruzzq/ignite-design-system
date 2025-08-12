import type { StoryObj, Meta } from "@storybook/react"

import { Text, TextProps } from "@cruz-ignite-ui/react"

const meta = {
   title: "Typography/Text",
   component: Text,

   args: {
      size: "md",
      children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, assumenda. Vero officia quos voluptas ab minus autem mollitia accusantium! Et nam quis, dolore nulla unde vero commodi eos sapiente neque!"
   },

   argTypes: {
      size: {
         options: ["xxs", "xs", "sm", "md", "lg", "xl", "2xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],

         control: {
            type: "inline-radio"
         }
      },
   }
} satisfies Meta<TextProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const CustomTag: Story = {
   args: {
      children: "Strong Text",
      as: "strong"
   }
}