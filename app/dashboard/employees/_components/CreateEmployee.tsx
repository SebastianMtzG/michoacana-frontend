
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { LuPlus} from "react-icons/lu";
import { useDisclosure } from "@nextui-org/react";
export default function CreateEmployee({ children }: { children: React.ReactNode }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
    return (
      <div>
        <Button onPress={onOpen} color="primary">
          <LuPlus size="20" />
        </Button>
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