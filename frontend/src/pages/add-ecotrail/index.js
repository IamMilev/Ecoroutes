import React, {useContext, useState} from 'react'
import PageLayout from "../../components/page-layout";
import Title from "../../components/title";
import SubmitButton from "../../components/button/submit-button";
import Input from "../../components/input";
import Form from "../../components/form";
import DatePick from "../../components/date-picker";
import UserContext from '../../context/userContext'

const AddEcotrailPage = () => {
    const [date, setDate] = useState(new Date())
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [image, setImage] = useState('')
    const context = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const ecotrail = {
            displayName: context.userData.user.displayName,
            title: title,
            description: description,
            duration: duration,
            image: image,
            date: date
        }

        console.log(ecotrail)
    }

    return(
        <PageLayout>
            <Title title="Add Ecotrail" />
            <Form onSubmit={handleSubmit}>
                <Input type="text" id="ecotrail-title" label="Title" value={title} onChange={e => setTitle(e.target.value)} />
                <Input type="text" id="ecotrail-description" label="Description" value={description} onChange={e => setDescription(e.target.value)} />
                <Input type="number" id="ecotrail-duration" label="Duration in minutes" value={duration} onChange={e => setDuration(e.target.value)} />
                <Input type="text" id="ecotrail-image" label="Image URL" value={image} onChange={e => setImage(e.target.value)} />
                <DatePick date={date} setDate={setDate} />
                <SubmitButton type="submit" title="Add Ecotrail"/>
            </Form>
        </PageLayout>
    )
}

export default AddEcotrailPage