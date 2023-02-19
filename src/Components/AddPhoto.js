import React from "react";
import {useNavigate} from "react-router-dom";


function AddPhoto(props) {
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        // do not refresh page during form submit
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {id: Number(new Date()), description: description, imageLink: imageLink}
        if (imageLink && description) {
            props.addPost(post)
            navigate('/');
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} className="form">
                    <input type="text" placeholder="Link" name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <button>Post</button>
                </form>
            </div>
        </div>

    );
}


export default AddPhoto