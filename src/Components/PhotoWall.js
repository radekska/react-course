import React, {Component} from "react";
import PropTypes from "prop-types";
import Photo from "./Photo";
import {Link} from "react-router-dom";

class PhotoWall extends Component {
    render() {
        return <div>
            <Link className="addIcon" to="/AddPhoto"></Link>
            <div className="photoGrid">
                {this.props.posts.sort((a, b) => b.id - a.id).map((post, index) => <Photo key={index}
                                                                                          post={post} {...this.props}
                                                                                          index={index}/>)}
            </div>
        </div>
    }


}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default PhotoWall