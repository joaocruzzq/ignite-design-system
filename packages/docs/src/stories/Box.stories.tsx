import type { StoryObj, Meta } from "@storybook/react"

import { Box, BoxProps } from "@ignite-ui/react"

const meta = {
   title: "Surfaces/Box",
   component: Box,

   args: {
      children: (
         <>
            <span>Testando o elemento Box</span>
         </>
      )
   }
} satisfies Meta<BoxProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}