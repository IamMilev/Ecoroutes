import React, {useEffect, useState} from 'react'
import PageLayout from "../../components/page-layout";

const EcotrailViewPage = (props) => {
    const [post, setPost] = useState({
        _id: '',
        author_id: '',
        author: '',
        title: '',
        description: '',
        duration: null,
        image: '',
        updatedAt: ''
    })

    // console.log(props.match.params)
    const {postId} = props.match.params

    // const fetchEcotrails = async () => {
    //     const promise = await fetch('http://localhost:5000/ecotrail/')
    //     const ecotrails = await promise.json()
    //     // this.setState({post})
    //     // setPost(ecotrails._id)
    //     for (let i = 0; i < ecotrails.length; i++) {
    //         if (ecotrails[i]._id === postId) {
    //             setPost(ecotrails[i])
    //             console.log(ecotrails[i])
    //         }
    //     }
    // }

    useEffect( () =>{
        const fetchEcotrails = async () => {
            const promise = await fetch('http://localhost:5000/ecotrail/')
            const ecotrails = await promise.json()
            // this.setState({post})
            // setPost(ecotrails._id)
            for (let i = 0; i < ecotrails.length; i++) {
                if (ecotrails[i]._id === postId) {
                    setPost(ecotrails[i])
                    console.log(ecotrails[i])
                }
            }
        }
        fetchEcotrails()
    }, [postId])


    return(
        <PageLayout>
            {post.title}
        </PageLayout>
    )
}

export default EcotrailViewPage