import { ComponentProps, useState } from "react";

import { Text } from "../Text";
import { Button } from "../Button";
import { Heading } from "../Heading";

import * as Toast from "@radix-ui/react-toast"

import { X } from "phosphor-react";
import { CloseButton, ToastContainer } from "./styles";

export function ToastMessage({ title, description }: ToastProps) {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <Toast.Provider>
         <Button size={"sm"} onClick={() => setIsOpen(true)}>Open Toast</Button>

         <ToastContainer open={isOpen} onOpenChange={setIsOpen}>
            <Toast.Title>
               <Heading size={"sm"} css={{ color: "$white", lineHeight: "$base" }}>
                  {title}
               </Heading>
            </Toast.Title>

            <Toast.Description>
               <Text size={"sm"} css={{ color: "$gray200", lineHeight: "$base" }}>
                  {description}
               </Text>
            </Toast.Description>

            <CloseButton altText="close">
               <X size={20} />
            </CloseButton>
         </ToastContainer>

         <Toast.Viewport />
      </Toast.Provider>
   )
}

export type ToastProps = ComponentProps<typeof Toast.Provider> & {
   title: string
   description: string
}