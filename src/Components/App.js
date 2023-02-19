import {connect} from "react-redux";
import Main from "./Main";
import {bindActionCreators} from "redux";
import {addPost, removePost} from "../redux/actions";

// defines which data to pass from Redux store to React component
function mapStateToProps(state) {
    return {
        posts: state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({removePost, addPost}, dispatch)
}

// wrapped Main component connected to a Redux store
const App = connect(mapStateToProps, mapDispatchToProps)(Main)
export default App