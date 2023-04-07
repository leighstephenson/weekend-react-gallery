//TODO imports go here
import axios from 'axios'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';


function GalleryItem({ item, id, path, description, title, likes, fetchGalleryList }) {
    //TODO consts, functions, conditional rendering go here


    //! PUT request to UPDATE likes
    //TODO need to get this working, no errors but not updating anything
    const likePhoto = (e) => {
        //console.log('Testing in likePhoto');
        axios.put(`/gallery/like/${id}`, item).then(response => {
            fetchGalleryList();
            console.log(`You liked the ${title} photo. Likes: ${likes} `)
        }).catch((error) => {
            console.log(`Error in LikePhoto ${error}`);
            alert('Something wrong in LikePhoto.. pls no more alerts.');
        });
    } //End likePhoto ())



    const [toggle, setToggle] = useState(false);

    //! Toggle from photo to description 
    //TODO need to call toggleDisplay() somewhere within the return 
    //TODO to display on DOM?

    const toggleDisplay = (e) => {
        if (toggle === true) {
            return (
                <div>
                    {description}
                    Description should be here
                </div>
            ) //End return
        }

        // else {
        //     return (
        //         <div>
        //             <img src={path} alt={title} />
        //         </div>
        //     ); //End else return
        // }
    } //End toggleDisplay ()


    //TODO utilize mui here
    //! What will display on DOM
    //
    return (
        <>
            <Card>
                <CardContent>
                    <li>
                        <Typography variant="h4">
                            {title}
                        </Typography>

                        <img src={path} alt={title} onClick={(e) => setToggle(!toggle)} />
                        {toggleDisplay()}

                        <Typography>
                            likes: {likes}
                        </Typography>

                        <Button variant="outlined" onClick={(e) => likePhoto(e)}> Like button </Button>

                    </li>
                </CardContent>
            </Card>
        </>


    )// End return


} // End GalleryItem function

export default GalleryItem;