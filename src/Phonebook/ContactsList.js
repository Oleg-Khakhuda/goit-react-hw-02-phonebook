import React, { Component } from 'react';
// import style from './ContactsList.module.css';
import PropTypes from "prop-types";

export default class ContactsList extends Component{

    render() {
        const { handleDelete } = this.props
        return (
            <ul>        
                {
                    this.props.contacts.map(contact => (<li
                        key={contact.id} >
                        {contact.name}:  {contact.number}
                        <button
                            type="button"
                            id={contact.id}
                            onClick={handleDelete}
                        >Delete</button>
                      </li>))
                }
        </ul>
    )}

}

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
}