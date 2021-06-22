import {Person} from './Person.js';

export function createContacts(contacts) {
  contacts.forEach((person, name) => {
  // Create name for each contact
  let contactsElement = document.getElementById("contacts-container");
  let element = document.createElement("h5");
  element.className += "contacts";
  element.id = name;
  element.addEventListener("click", addActive);
  let contactName = document.createTextNode(name);
  element.appendChild(contactName);
  contactsElement.appendChild(element);
  })
} 

function addActive(event) {
  let contactsElement = document.getElementById("contacts-container");
  let currentActive = contactsElement.getElementsByClassName("active");
  if(currentActive.length > 0) {
    currentActive[0].className = currentActive[0].className.replace(" active", "");
  }
  event.target.className += " active"
}