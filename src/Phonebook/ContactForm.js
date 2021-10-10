import React from "react";
import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';


export default class ContactForm extends Component {
    inputNameId = uuidv4();
    inputNumberId = uuidv4();

    state = {
        name: '',
        number: ''
    }

    handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewContact(this.state);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            name: '',
            number: ''
        });
    };

    render() {
        const { handleSubmit, inputNameId, handleChange, inputNumberId } = this
        return (
            <form onSubmit={handleSubmit}>  
            <label htmlFor={inputNameId}>Name</label>
            <input
                type="text"
                id={inputNameId}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={handleChange}
                />
            <label htmlFor={inputNumberId}>Number</label>
            <input
                type="tel"
                id={inputNumberId}
                name="number"
                pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                required
                onChange={handleChange}
            />
                <button type='submit'>Add contact</button>
            </form>
       ) 
    }
}
