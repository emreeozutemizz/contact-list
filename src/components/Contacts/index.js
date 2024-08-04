import {useState, useEffect} from 'react';
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
  {
    fullname : 'Emre',
    phone_number : 123456,
  },
  {
    fullname : 'Hugo',
    phone_number : 456893,
  },
  {
    fullname : 'Siyah',
    phone_number : 785463
  },
  ]);

  useEffect(() => {
    console.log(contacts);

  }, [contacts])


  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact= {setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;
