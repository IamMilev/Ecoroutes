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
// import ErrorNotice from "../../components/misc/ErrorNotice";

const AddEcotrailPage = () => {
    const [date, setDate] = useState(new Date())
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [imageUrl, setImageUrl] = useState(null)
    const [error, setError] = useState({
        image: undefined,
        ecotrailTitle: undefined,
        ecotrailDescription: undefined,
        ecotrailDuration: undefined,
    })
    const [isFormfilled, setIsFormFilled] = useState(null)

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
            console.log(newEcotrail)

            setIsFormFilled(false)
        }

    }

    const openWidget = () => {
        const widget = window.cloudinary.createUploadWidget({
            cloudName: 'georgimilev',
            uploadPreset: 'razhodise'
        }, (err, result) => {
            if (result.event === 'success') {
                setImageUrl(result.info.url)
                return setError({...error, image: false})
            }
        })

        widget.open()
    }


    const handleChange = (e) => {
        setIsFormFilled(true)
        const {id, value} = e.target

        switch (id) {
            case "ecotrailTitle" :
                setTitle(value)
                if (value.length < 2) {
                    return setError({...error, ecotrailTitle: true})
                } else {
                    return setError({...error, ecotrailTitle: false})
                }
            case "ecotrailDescription" :
                setDescription(value)
                if (value.length < 2) {
                    return setError({...error, ecotrailDescription: true})
                } else {
                    return setError({...error, ecotrailDescription: false})
                }
            case "ecotrailDuration":
                setDuration(value)
                if (value.length === 0 || value === '0') {
                    return setError({...error, ecotrailDuration: true})
                } else {
                    return setError({...error, ecotrailDuration: false})
                }
            default:
                break
        }
    }

    return(
        <PageLayout>
            <Title variant='title' title="Add Ecotrail" />
            { (isFormfilled === false ) ? (<div className={styles.error}>Please fill in the full form and upload image</div>) : '' }

            <Form onSubmit={handleSubmit}>
                <Input type="text" id="ecotrailTitle" label="Title" value={title} error={error.ecotrailTitle ? 'Please enter valid title' : ''} onChange={handleChange} />
                <Input type="text" id="ecotrailDescription" label="Description" value={description} error={error.ecotrailDescription ? 'Please enter valid description' : ''} onChange={handleChange} />
                <Input type="number" id="ecotrailDuration" label="Duration in minutes" value={duration} error={error.ecotrailDuration ? 'Please enter valid duration' : ''} onChange={handleChange} />
                <DatePick date={date} setDate={setDate} />
                {imageUrl ? (<img alt="Uploaded thumbnail" className={styles['img-thumbnail']} src={imageUrl} />) : '' }
                { error.date ? (<div className={styles.error}>Please enter valid date</div>) : ''}
                <Button onClick={openWidget} type='button' title={imageUrl ? 'Upload Another Image' : 'Upload Image'} />
                { error.image ? (<div className={styles.error}>Please Upload image</div>) : ''}

                <SubmitButton type="submit" title="Add Ecotrail"/>
            </Form>
        </PageLayout>
    )
}

export default AddEcotrailPage