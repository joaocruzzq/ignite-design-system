import type { StoryObj, Meta } from "@storybook/react"

import { Box, BoxProps,Text } from "@ignite-ui/react"

const meta = {
   title: "Surfaces/Box",
   component: Box,

   args: {
      children: (
         <>
            <Text>Testando o elemento Box</Text>
         </>
      )
   },

   argTypes: {
      children: {
         control: {
            type: null
         }
      }
   }
} satisfies Meta<BoxProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}