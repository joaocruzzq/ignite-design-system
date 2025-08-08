import type { StoryObj, Meta } from "@storybook/react"

import { Button, ButtonProps } from "@ignite-ui/react"

import { ArrowRight } from "phosphor-react"

const meta = {
   title: "Form/Button",
   component: Button,

   args: {
      children: "Send"
   },

   argTypes: {
      onClick: {
         action: "click"
      }
   }
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
   args: {
      variant: "secondary",
      children: "Create new"
   }
}

export const Tertiary: Story = {
   args: {
      variant: "tertiary",
      children: "Cancel"
   }
}

export const Small: Story = {
   args: {
      size: "sm"
   }
}

export const WithIcon: Story = {
   args: {
      children: (
         <>
            Próximo passo
            <ArrowRight weight="bold" />
         </>
      )
   }
}

export const Disabled: Story = {
   args: {
      disabled: true
   }
}