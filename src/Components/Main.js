import React, {Component} from "react";
import Title from "./Title";
import {Link, Route, Routes} from "react-router-dom";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";


class Main extends Component {
    // called before component is mounted. NEVER put side effect code inside of the constructor.
    // Use ComponentDidMount for that instead. Commonly used to initialize state or bind methods.


    // render is only responsible for rendering a UI - never inject here any async / AJAX / XHR code here
    // render methods is always called after state update (this.setState)
    render() {
        return <div>
            <Title title="Photowall"></Title>
            <Routes>
                <Route path="/" element={
                    <div>
                        <PhotoWall {...this.props}/>
                    </div>
                }/>
                <Route path="/AddPhoto" element={<AddPhoto {...this.props}/>}/>
            </Routes>
        </div>
    }
}


export default Main