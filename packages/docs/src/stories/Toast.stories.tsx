import type { StoryObj, Meta } from "@storybook/react"

import { Text, ToastMessage, ToastProps } from "@cruz-ignite-ui/react"

const meta = {
   title: "Feedback/Toast",
   component: ToastMessage,

   args: {
      title: "Toast Title",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam qui facilis officiis vitae a!"
   },
} satisfies Meta<ToastProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}