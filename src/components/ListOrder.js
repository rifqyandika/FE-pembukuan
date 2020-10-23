import React, { Component } from 'react'
import item from '../data/order'
import ModalItem from './ModalItem'

export default class ListOrder extends Component {
    render() {
        return (
            <ul class="collection">
            { item.map(i => {
                let statusItem = '';
                let statusNama = ''
                if(i.status === 1){
                    statusItem = 'yello'
                    statusNama = 'pending'
                } else if (i.status === 2) {
                    statusItem = 'blue'
                    statusNama = 'onprocess'
                } else if (i.status === 3) {
                    statusItem = 'green'
                    statusNama = 'complete'
                }else {
                    statusItem = 'grey'
                    statusNama = 'waiting'
                }
                return (
                    <li className="collection-item avatar">
                    <img src="https://materializecss.com/images/yuna.jpg" alt="" className="circle" />
                    <span className="title"><b>{i.customer.name}</b></span>
                    <p>INV {i.invoice}</p>
                    <p><i><span className={`${statusItem}-text text-darken-2`}>{statusNama}</span></i></p>
                    <a data-target={`modal${i.id}`} className="secondary-content btn btn-flat modal-trigger"><i className="material-icons">mode_edit</i></a>
                    <ModalItem id={i.id}/>
                    </li>
                )
            })}
            </ul>
        )
    }
}
