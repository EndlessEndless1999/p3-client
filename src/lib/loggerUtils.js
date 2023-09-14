function addMessageToLogger(message) {

    const list = document.getElementById('logs');

    if (list) {
      const listItem = document.createElement('li');
      listItem.textContent = message;
  
      if (list.children.length >= 8) {
        list.removeChild(list.firstChild);
      }

      list.appendChild(listItem);
    } else {
      console.error('List element not found.');
    }
  }

export { addMessageToLogger }
  