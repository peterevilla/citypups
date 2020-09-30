import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import DogStats from "./DogStats";
import 'semantic-ui-css/semantic.min.css'

function DogModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Info</Button>}
    >
      <Modal.Header ><p className="font-chewy" >Paws Chicago</p></Modal.Header>
      <Modal.Content image>
        <Image size='medium' src="https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" wrapped />
        <Modal.Description>
          <Header><p className="font-sans" >Comet</p></Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <DogStats/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          content="Start your adoption application here"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default DogModal;