import {Button, Drawer, UseOverlayStateReturn } from "@heroui/react";
import { CirclePlusFill } from "@gravity-ui/icons"
import clsx from 'clsx'

type OverlayProps = {
  state: UseOverlayStateReturn;
}

export default function ProdukDrawer({state}: OverlayProps) {
  return (
    <Drawer>
      <Drawer.Backdrop isOpen={state.isOpen} onOpenChange={state.setOpen}>
        <Drawer.Content placement="right" >
          <Drawer.Dialog className="min-w-200">
            <Drawer.Header>
              <Drawer.Heading>Drawer Title</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                This is a bottom drawer built with React Aria's Modal component. It slides up from
                the bottom of the screen with a smooth CSS transition.
              </p>
            </Drawer.Body>
            <Drawer.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Confirm</Button>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  )
}