import { Input, Prefix, TextInputContainer } from "./styles";

import { ComponentProps, forwardRef } from "react";

export type TextInputProps = ComponentProps<typeof Input> & {
   prefix?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ prefix, ...props }, ref) => {
   return (
      <TextInputContainer>
         {!!prefix &&
            <Prefix>
               {prefix}
            </Prefix>
         }

         <Input ref={ref} {...props} />
      </TextInputContainer>
   )
})

TextInput.displayName = "TextInput"