import React, {Component} from 'react';
import Search from './Search';

class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            search : false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(state => ({
        search: !state.search
      }));
    }
    render(){
        return (
            <div>
              <nav>
            <div className="nav-wrapper container">
              <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Perc KIKY</a>
              <ul className="right hide-on-med-and-down">
                <li><a onClick={this.handleClick}><i className="material-icons">search</i></a></li>
                <li><a onClick={()=> alert('profile')}><i className="material-icons">account_circle</i></a></li>
                <li><a onClick={()=> alert('more')}><i className="material-icons">more_vert</i></a></li>
              </ul>
            </div>
          </nav>
          {this.state.search ? <Search /> : <div></div> }
            </div>
        
        )
    }
}

export default Navbar;