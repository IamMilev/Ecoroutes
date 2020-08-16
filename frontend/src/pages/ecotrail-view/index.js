import React, {useEffect, useState} from 'react'
import PageLayout from "../../components/page-layout";
import styles from './index.module.css'
import InfoWrapper from "../../components/ecotrail-info-wrapper";
import { useParams } from 'react-router-dom'

const EcotrailViewPage = () => {
    const [post, setPost] = useState({
        _id: '',
        author_id: '',
        author: '',
        title: '',
        description: '',
        duration: null,
        image: '',
        updatedAt: '',
        createdAt: '',
        date: ''
    })

    let {trailId} = useParams();
    // const {trailId} = this.props.match.params

    useEffect( () =>{
        const fetchEcotrails = async () => {
            const promise = await fetch('http://localhost:5000/ecotrail/')
            const ecotrails = await promise.json()


            for (let i = 0; i < ecotrails.length; i++) {
                if (ecotrails[i]._id === trailId) {
                    setPost(ecotrails[i])
                }
            }
        }
        fetchEcotrails()
    }, [trailId])

    return(
        <PageLayout>
            <div className={styles['content-wrapper']}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.author}>by {post.author}</div>
                <div className={styles['image-wrapper']}>
                    <img src={post.image} alt={post.title} />
                </div>
                <InfoWrapper title='Description'>
                    {post.description}
                </InfoWrapper>
                <InfoWrapper title='Ecotrail duration'>
                    {post.duration < 60 ? post.duration + ' Minutes' : (post.duration/60).toFixed(2) + ' Hours'}
                </InfoWrapper>
                <InfoWrapper title='Date of visit'>
                    {post.date.slice(0, 10)}
                </InfoWrapper>
                <InfoWrapper title='Created at'>
                    {post.createdAt.slice(0, 10)}
                </InfoWrapper>
            </div>
        </PageLayout>
    )
}

export default EcotrailViewPage