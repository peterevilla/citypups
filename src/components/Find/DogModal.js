import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import DogStats from "./DogStats";
import "semantic-ui-css/semantic.min.css";

function DogModal({ dog }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<a href="#" className="text-green-900 hover:text-black">see more...</a>}
    >
      <Modal.Header>
        <p className="font-chewy">{dog.shelter_name}</p>
      </Modal.Header>
      <Modal.Content image>
        <Image size="large" src={`${dog.image_url}`} />
        <Modal.Description>
          <Header>
            <p className="font-sans">{dog.dog_name}</p>
          </Header>
          <p className=" text-justify">{dog.story}</p>
          <div className="flex justify-around">
            <p>Breed: {dog.breed}</p>
            <p>Age: {dog.age}</p>
            <p>{dog.gender}</p>
          </div>

          <p className=" text-justify">{dog.info}</p>
          <DogStats stats={dog} />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          content="Start your adoption application here"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default DogModal;
