import { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  submitting: boolean;
}

export default function ActivityForm({ activity: selectedActivity, closeForm, createOrEdit, submitting }: Props) {
  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  };
  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    createOrEdit(activity);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value })
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input placeholder='Title' defaultValue={activity.title} name='title' onChange={handleInputChange} />
        <Form.TextArea placeholder='Description' defaultValue={activity.description} name='description' onChange={handleInputChange} />
        <Form.Input placeholder='Category' defaultValue={activity.category} name='category' onChange={handleInputChange} />
        <Form.Input placeholder='Date' type='date' defaultValue={activity.date} name='date' onChange={handleInputChange} />
        <Form.Input placeholder='City' defaultValue={activity.city} name='city' onChange={handleInputChange} />
        <Form.Input placeholder='Venue' defaultValue={activity.venue} name='venue' onChange={handleInputChange} />
        <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
        <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
      </Form>
    </Segment>
  )
}