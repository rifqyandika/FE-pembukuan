import React, {Component} from 'react';
import M from 'materialize-css';

class FloatingButton extends Component {
    componentDidMount(){
        M.FloatingActionButton.init(this.Floating);
    }
    render(){
        return(
            <div className="fixed-action-btn" ref={Floating => this.Floating = Floating}>
            <a className="btn-floating btn-large red">
                <i className="large material-icons">mode_edit</i>
            </a>
            <ul>
                <li><a className="btn-floating green"><i className="material-icons">note_add</i></a></li>
                <li><a className="btn-floating blue"><i className="material-icons">group_add</i></a></li>
            </ul>
            </div>
        )
    }
}

export default FloatingButton;