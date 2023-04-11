import GalleryItem from "../GalleryItem/GalleryItem";
import { useState, useEffect } from 'react';
import axios from 'axios';

function GalleryList() {
    const [listOfItems, setListofItems] = useState([]);

    const fetchGalleryList = () => {

        //! GET request
        axios.get('/gallery').then((response) => {
            //update the array
            setListofItems(response.data);
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
    return (

        <ul>

            {
                listOfItems.map((item) => (
                    <GalleryItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        path={item.path}
                        likes={item.likes}
                        description={item.description}
                        fetchGalleryList={fetchGalleryList}
                    />
                ))
            }

        </ul>

    ) // End return
} // End of GalleryList function

export default GalleryList;