import React from "react";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";


function AddPhoto(props) {
    let navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        // do not refresh page during form submit
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {id: "4", description: description, imageLink: imageLink}
        if (imageLink && description) {
            props.onAddPhoto(post)
            console.log(post)
            navigate('/');
        }
    }

    return (
        <div>
            <h1> Photowall </h1>
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


AddPhoto.propTypes = {
    onAddPhoto: PropTypes.func.isRequired
}


export default AddPhoto