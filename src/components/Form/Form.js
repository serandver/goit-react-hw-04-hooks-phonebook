import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <p>Number</p>
        <input
          type="tel"
          value={number}
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <br />
        <button type="submit" onClick={handleChange}>
          Add contact
        </button>
      </label>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
