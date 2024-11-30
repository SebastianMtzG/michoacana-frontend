"use client";

import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
export default function CreateUser({ children, icon, photo }: { children: React.ReactNode, icon:React.ReactNode, photo: string | undefined }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
    return (
      <div>
        <Image src={photo} onClick={onOpen} isZoomed
className="object-cover"
classNames={{
        img: "size-60"
    }} />
       
        <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="w-full">
            {() => (
              <>
                <ModalBody>
                  {children}
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    );
  }