import type { StoryObj, Meta } from "@storybook/react"

import { Text, ToolTip, ToolTipProps } from "@cruz-ignite-ui/react"

const meta = {
   title: "Feedback/ToolTip",
   component: ToolTip,

   args: {
      available: true,

      children: (
         <Text size="sm">Teste de ToolTip - Disponivel</Text>
      )
   },

   argTypes: {
      available: {
         control: "boolean",
      }
   }
} satisfies Meta<ToolTipProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}