import type { StoryObj, Meta } from "@storybook/react"

import { Button } from "@ignite-ui/react"
import { background } from "storybook/internal/theming"

const meta = {
   component: Button,

   args: {
      children: "Enviar"
   }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
   args: {
      size: "big"
   }
}