import React, { Component } from 'react'
import M from 'materialize-css'

export default class ModalItem extends Component {
    constructor(){
        super()
    }
    componentDidMount(){
        M.Modal.init(this.modal1)
    }
    render() {
        console.log(this.props.id)
        return (
            <div ref={modal1 => {this.modal1 = modal1}} id={`modal${this.props.id}`} class="modal modal-fixed-footer">
                <div class="modal-content">
                <div className="container-fluid">
                    <h4>Modal Header</h4>
                <div class="row">
                    <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                        <input placeholder="Placeholder" id="first_name" type="text" class="validate" />
                        <label for="first_name">First Name</label>
                        </div>
                        <div class="input-field col s6">
                        <input id="last_name" type="text" class="validate" />
                        <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <input disabled value="I am not editable" id="disabled" type="text" class="validate" />
                        <label for="disabled">Disabled</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="password" type="password" class="validate" />
                        <label for="password">Password</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="email" type="email" class="validate" />
                        <label for="email">Email</label>
                        </div>
                    </div>
                    </form>
                </div>
            
                </div>
                </div>
                <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
            </div>
        )
    }
}
