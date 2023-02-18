import React, {Component} from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import {Route, Routes} from "react-router-dom";
import AddPhoto from "./AddPhoto";


class Main extends Component {
    // called before component is mounted. NEVER put side effect code inside of the constructor.
    // Use ComponentDidMount for that instead. Commonly used to initialize state or bind methods.
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
        this.removePhoto = this.removePhoto.bind(this)
        this.addPhoto = this.addPhoto.bind(this)
    }

    removePhoto(postRemoved) {
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    addPhoto(postSubmitted) {
        this.setState((state) => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }

    // this method is called directly after component has been loaded to a DOM
    // Perfect place to fetch data. It gets called after render.
    // This makes it clear that the initial state is empty at first, until we fetch it and re-trigger render.
    // This forces us to set up our initial state properly, otherwise you're likely to get undefined states.
    componentDidMount() {
        const data = FetchPosts()
        this.setState({
            posts: data
        })
    }

    // this method is called always after a component has been updated (this.setState called)
    // called when the state of a component changes.
    // Perfect place to update UI or make network calls based on previous state before update, and current state
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    // render is only responsible for rendering a UI - never inject here any async / AJAX / XHR code here
    // render methods is always called after state update (this.setState)
    render() {
        return <div>
            <Routes>
                <Route path="/" element={
                    <div>
                        <Title title={"Photowall"}/>
                        <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
                    </div>
                }/>
                <Route path="/AddPhoto" element={<AddPhoto onAddPhoto={this.addPhoto}/>}/>
            </Routes>
        </div>
    }
}

function FetchPosts() {
    return [{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
    }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
    }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }
    ]
}

export default Main