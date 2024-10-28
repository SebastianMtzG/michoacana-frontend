"use client";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { ReactNode } from "react";
import { LuPencil } from "react-icons/lu";

export default function UpdateLocation({children, store} : {children: ReactNode, store: string | string[] | undefined} ) {
 if(!store) return <div />
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary" ><LuPencil size="20" /> Editar Tienda</Button>
      <Modal className="bg-purple-600" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="w-full">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                {children}               
               
              </ModalBody>
        
        

            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}