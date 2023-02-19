function Comments(props) {

    function handleSubmit(event) {
        event.preventDefault();
        const comment = {postID: props.postID, text: event.target.elements.comment.value}
        if (comment.text) {
            props.addComment(comment)
            event.target.elements.comment.value = ""
        }

    }

    return <div className="comment">
        {
            props.comments.filter((comment)=> comment.postID === props.postID).map((comment, index) => {
                return (
                    <p key={index}>{comment.text}</p>
                )
            })
        }
        <form onSubmit={handleSubmit} className="comment-form">
            <input type="text" placeholder="Comment" name="comment"/>
            <input type="submit" hidden/>
        </form>
    </div>
}

export default Comments