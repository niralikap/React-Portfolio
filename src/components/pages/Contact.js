import React, { useState } from 'react';
import '../style/contact.css';
import '../style/allpages.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    
    if (!message) {
        setErrorMessage('Message is required');
        return;
    }
    
    alert(`Message submitted successfully`);
    
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="container">
      <form className="form">
        <br></br>
        <h3> Contact </h3>
        <br></br>
        <h5> Name: </h5>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder=""
        />
        <br></br>
        <h5> Email Address: </h5>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder=""
        />
        <br></br>
        <h5> Message: </h5>
        <textarea className="form-control"
          as="textarea"
          value={message}
          name="message"
          rows={7}
          onChange={handleInputChange}
          type="textarea"
          placeholder=""
        />
        <br></br>
        <button class="btn btn-light" type="button" onClick={handleFormSubmit}>Submit</button>
        <br></br>
        <br></br>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
