//TODO imports go here
import axios from 'axios'


function GalleryItem({ item, path, description, likes, fetchGalleryList }) {

    //TODO consts, functions, conditional rendering go here

    //! PUT request to update likes
    const likePhoto = (e) => {
        console.log('Testing in likePhoto');
        axios.put(`/gallery/likes.${item.id}`, item).then(response => {
            fetchGalleryList();
        }).catch((error) => {
            console.log(`Error in LikePhoto ${error}`);
            alert('Something wrong in LikePhoto.. pls no more alerts.');
        })
    } //End likePhoto function


    //TODO utilize mui here
    //! What will display on DOM
    return (
        <>
            <li>
                {
                    { path }
                }
            </li>
            <p>Total likes: {likes}</p>
            <button onClick={(e) => likePhoto(e)}> Like button </button>
        </>


    )// End return


} // End GalleryItem function

export default GalleryItem;