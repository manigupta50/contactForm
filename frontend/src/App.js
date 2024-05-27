import { useState, useEffect } from "react";
import axios from "axios";

import ContactList from "./Components/contactList.js";
import Form from "./Components/form.js";

function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
      async function fetchData() {
          const data = await axios.get('http://localhost:8080/contactForm/getAll');
          // console.log("data: ", data.data.details);
          setContacts(data.data.details);
          // console.log(contacts);
      }
      fetchData();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:8080/contactForm/delete/${id}`);
    setContacts(contacts.filter(con => con._id !== id))
  }

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  }

  return (
    <>
      <Form addContact={addContact}/>
      <ContactList contacts={contacts} handleDelete={handleDelete} setContacts={setContacts}/>
    </>
  );
}

export default App;
