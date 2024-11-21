
import { Button } from "@nextui-org/react";
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
export default function ModalGeneric({ children, icon }: { children: React.ReactNode, icon:React.ReactNode}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
    return (
      <div>
       
       <Button onPress={onOpen} > {icon} </Button>
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