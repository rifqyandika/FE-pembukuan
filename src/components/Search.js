import React, {useState} from 'react'

export default function Search(props) {
    const [showSearch, setShowSearch] = useState(props.setSearch)
    console.log(props.setSearch)
    return showSearch ? (
        <div></div>
    )  : (
        <div className="container">
        <div className="nav-wrapper">
          <div className="input-field">
            <input id="search" type="search" required />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i onClick={()=> setShowSearch(!props.setSearch)} className="material-icons">close</i>
              </div>
          </div>
        </div>
    )
}
