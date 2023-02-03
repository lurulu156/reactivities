import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
}

export default function ActivityForm({ activity, closeForm }: Props) {
  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder='Title' defaultValue={activity?.title}/>
        <Form.TextArea placeholder='Description' defaultValue={activity?.description} />
        <Form.Input placeholder='Category' defaultValue={activity?.category} />
        <Form.Input placeholder='Date' defaultValue={activity?.date} />
        <Form.Input placeholder='City' defaultValue={activity?.city} />
        <Form.Input placeholder='Venue' defaultValue={activity?.venue} />
        <Button floated='right' positive type='submit' content='Submit' />
        <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
      </Form>
    </Segment>
  )
}