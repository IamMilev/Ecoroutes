import React, {useContext, useState} from 'react'
import PageLayout from "../../components/page-layout";
import Title from "../../components/title";
import SubmitButton from "../../components/button/submit-button";
import Input from "../../components/input";
import Form from "../../components/form";
import DatePick from "../../components/date-picker";
import UserContext from '../../context/userContext'
import styles from './index.module.css'
import Button from "../../components/button/standard-button";

const AddEcotrailPage = () => {
    const [date, setDate] = useState(new Date())
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [image, setImage] = useState(null)
    const context = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const ecotrail = {
            id: context.userData.user.id,
            displayName: context.userData.user.displayName,
            title: title,
            description: description,
            duration: duration,
            date: date,
            image: image
        }

        console.log(ecotrail)
    }

    const openWidget = () => {
        const widget = window.cloudinary.createUploadWidget({
            cloudName: 'georgimilev',
            uploadPreset: 'razhodise'
        }, (error, result) => {
            if (result.event === 'success') {
                setImage(result.info.url)
            }
        })

        widget.open()
    }

    return(
        <PageLayout>
            <Title title="Add Ecotrail" />
            <Form onSubmit={handleSubmit}>
                <Input type="text" id="ecotrail-title" label="Title" value={title} onChange={e => setTitle(e.target.value)} />
                <Input type="text" id="ecotrail-description" label="Description" value={description} onChange={e => setDescription(e.target.value)} />
                <Input type="number" id="ecotrail-duration" label="Duration in minutes" value={duration} onChange={e => setDuration(e.target.value)} />
                {/*<Input type="text" id="ecotrail-image" label="Image URL" value={image} onChange={e => setImage(e.target.value)} />*/}
                <DatePick date={date} setDate={setDate} />
                {image ? (<img alt="Uploaded thumbnail" className={styles['img-thumbnail']} src={image} />) : null }
                <Button onClick={openWidget} title={image ? 'Upload Another Image' : 'Upload Image'} />
                <SubmitButton type="submit" title="Add Ecotrail"/>
            </Form>
        </PageLayout>
    )
}

export default AddEcotrailPage