import type { StoryObj, Meta } from "@storybook/react"

import { Avatar, AvatarProps } from "@cruz-ignite-ui/react"

const meta = {
   title: "Data Display/Avatar",
   component: Avatar,

   args: {
      src: "https://github.com/joaocruzzq.png",
      alt: "João Pedro Cruz"
   },

   argTypes: {
      src: {
         control: {
            type: "text"
         }
      }
   }
} satisfies Meta<AvatarProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const WithFallback: Story = {
   args: {
      src: undefined
   }
}