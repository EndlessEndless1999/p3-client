import React, { useState } from 'react';

const Logger = () => {
  const [messages, setMessages] = useState([]);

  // Function to add a message to the list
  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  // Example: Adding a message when a button is clicked
  const handleButtonClick = () => {
    const newMessage = `Button clicked at ${new Date().toLocaleTimeString()}`;
    addMessage(newMessage);
  };

  return (
    <div>
      <h2>Logger</h2>
      <button onClick={handleButtonClick}>Click me</button>
      <ul className="logs">
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Logger;
