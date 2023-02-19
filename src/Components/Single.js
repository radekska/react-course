import {useParams} from "react-router-dom";
import Photo from "./Photo";
import Comments from "./Comments";

function Single(props) {
    const id = Number(useParams().id)
    const posts = props.posts
    const post = posts.find((post) => post.id === id)
    const comments = props.comments
    const index = props.posts.findIndex((post) => post.id === id)

    return <div className="single-photo">
        <Photo {...props} post={post} removePost={props.removePost} index={index}/>
        <Comments addComment={props.addComment} comments={comments} postID={id}/>
    </div>

}


export default Single