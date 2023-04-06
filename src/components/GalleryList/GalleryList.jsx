import GalleryItem from "../GalleryItem/GalleryItem";
import { useState, useEffect } from 'react';
import axios from 'axios';

function GalleryList() {
    const [listOfItems, setListofItems] = useState([]);

    const fetchGalleryList = () => {

        //! GET request
        console.log('Testing 456')
        axios.get('/gallery').then((response) => {
            //update the array
            setListofItems(response.data);
            console.log('Testing in GET on GalleryList')
        }).catch((error) => {
            console.log(`Error in GET on GalleryList: ${error}`)
            alert('Something wrong on GalleryList!');
        })
    }

    //Keep this outside of the function^
    useEffect(() => {
        fetchGalleryList();
    }, []);

    //! What will display on the DOM
    //TODO Make sure these keys are correct
    return (

        <>

            {
                listOfItems.map((item) => (
                    <GalleryItem
                        key={item.id}
                        path={item.path}
                        likes={item.likes}
                        fetchGalleryList={fetchGalleryList}
                    />
                ))
            }

        </>

    ) // End return
} // End of GalleryList function

export default GalleryList;