import axios from 'axios'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';


function GalleryItem({ item, id, path, description, title, likes, fetchGalleryList }) {

    //! PUT request to UPDATE likes
    const likePhoto = (e) => {
        console.log(id);
        axios.put(`/gallery/like/${id}`, item).then(response => {
            fetchGalleryList();
            console.log(`You liked the ${title} photo. Thanks!`)
        }).catch((error) => {
            console.log(`Error in LikePhoto ${error}`);
            alert('Something wrong in LikePhoto.. pls no more alerts.');
        });
    } //End likePhoto ())



    //! Toggle from photo to description 
    const [toggle, setToggle] = useState(false);

    //?This code will have the description display below of photo instead of in place of it, add later for portfolio?
    // const toggleDisplay = () => {
    //     setToggle(!toggle);

    //     };
    
    // const toggleDisplay = () => {
    //     if (toggle === true) {
    //         return (
    //             <div>
    //                 {description}
    //             </div>
    //         ) //End return
    //     }

    // } //End toggleDisplay ()


    //! What will display on DOM
    return (
        <>
            <Card sx={{
                display: 'inline-flex',
                justifyContent: 'center',
                border: 2,
                margin: 2,
                boxShadow: 10,

            }}>
                <CardContent>
                    <li >

                        <Typography variant="h6">
                            {title}
                        </Typography>

                        <Typography onClick={(e) => setToggle(!toggle)} className='toggleDisplay'>
                            {toggle ? (
                                <p> {description} </p>
                            ) : (
                                <img src={path} alt={title} onClick={(e) => setToggle(!toggle)} />

                            )}
                        </Typography>

                        <Typography>
                            Likes: {likes}
                        </Typography>

                        <Button variant="outlined" onClick={(e) => likePhoto(e)}> Click to Like </Button>

                    </li>
                </CardContent>
            </Card>
        </>


    )// End return


} // End GalleryItem function

export default GalleryItem;