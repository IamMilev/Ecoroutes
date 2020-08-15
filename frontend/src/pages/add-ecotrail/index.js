import React, {useContext, useState} from 'react'
import { useHistory } from 'react-router-dom'
import PageLayout from "../../components/page-layout";
import Title from "../../components/title/heading";
import SubmitButton from "../../components/button/submit-button";
import Input from "../../components/input";
import Form from "../../components/form";
import DatePick from "../../components/date-picker";
import UserContext from '../../context/userContext'
import styles from './index.module.css'
import Button from "../../components/button/standard-button";
import Axios from "axios";
import HalfLayout from "../../components/half-layout";

const AddEcotrailPage = () => {
    const [date, setDate] = useState(new Date())
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [titleError, setTitleError] = useState(undefined)
    const [descriptionError, setDescriptionError] = useState(undefined)
    const [durationError, setDurationError] = useState(undefined)
    const [imageError, setImageError] = useState(undefined)
    const [dateError, setDateError] = useState(undefined)


    const context = useContext(UserContext)

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEcotrail = {
            author_id: context.userData.user.id,
            author: context.userData.user.displayName,
            title: title,
            description: description,
            duration: duration,
            date: date,
            image: imageUrl
        }

        try{
            await Axios.post('http://localhost:5000/ecotrail/add', newEcotrail)
            alert('Success')
            history.push('/ecotrail')
        } catch (err) {
            if (title === '') {
                setTitleError(true)
            }

            if (description === '') {
                setDescriptionError(true)
            }

            if (duration === '') {
                setDurationError(true)
            }

            if (imageUrl === '') {
                setImageError(true)
            }
        }

    }

    const openWidget = () => {
        const widget = window.cloudinary.createUploadWidget({
            cloudName: 'georgimilev',
            uploadPreset: 'razhodise'
        }, (err, result) => {
            if (result.event === 'success') {
                setImageUrl(result.info.url)
                return setImageError(false)
            }
        })

        widget.open()
    }


    const handleChange = (e) => {
        const {id, value} = e.target

        switch (id) {
            case "ecotrailTitle" :
                setTitle(value)
                if (value.length < 2) {
                    setTitleError(true)
                } else {
                    setTitleError(false)
                }
                break
            case "ecotrailDescription" :
                setDescription(value)
                if (value.length < 2) {
                    setDescriptionError(true)
                } else {
                    setDescriptionError(false)
                }
                break
            case "ecotrailDuration":
                setDuration(value)
                if (value.length === 0 || value === '0') {
                    setDurationError(true)
                } else {
                    setDurationError(false)
                }
                break
            default:
                break
        }
    }

    return(
        <PageLayout>
            <HalfLayout>
                <Title variant='title' title="Add Ecotrail" />
                <Form onSubmit={handleSubmit}>
                    <Input type="text" id="ecotrailTitle" label="Title" value={title} error={titleError ? 'Please enter valid title' : ''} onChange={handleChange} />
                    <Input type="text" id="ecotrailDescription" label="Description" value={description} error={descriptionError ? 'Please enter valid description' : ''} onChange={handleChange} />
                    <Input type="number" id="ecotrailDuration" label="Duration in minutes" value={duration} error={durationError ? 'Please enter valid duration' : ''} onChange={handleChange} />
                    <DatePick date={date} setDate={setDate} setDateError={setDateError} />
                    {imageUrl ? (<img alt="Uploaded thumbnail" className={styles['img-thumbnail']} src={imageUrl} />) : '' }
                    { dateError ? (<div className={styles.error}>Please enter valid date</div>) : ''}
                    <Button onClick={openWidget} type='button' title={imageUrl ? 'Upload Another Image' : 'Upload Image'} />
                    { imageError ? (<div className={styles.error}>Please Upload image</div>) : ''}

                    <SubmitButton type="submit" title="Add Ecotrail"/>
                </Form>
            </HalfLayout>
        </PageLayout>
    )
}

export default AddEcotrailPage