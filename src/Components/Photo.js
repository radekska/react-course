import React from "react";
import {Link, useNavigate} from "react-router-dom";

function Photo(props) {
    let navigate = useNavigate();
    const post = props.post


    return <figure className="figure">
        <Link to={`/single/${post.id}`}><img className="photo" src={post.imageLink} alt={post.description}/></Link>
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container">
            <button onClick={() => {
                props.removePost(props.index)
                navigate("/")
            }}>Remove
            </button>
            <Link className="button" to={`/single/${post.id}`}>
                <div className="comment-count">
                    <div className="speech-bubble"></div>
                    {props.comments.filter((comment) => comment.postID === post.id).length}
                </div>
            </Link>
        </div>

    </figure>

}


export default Photo