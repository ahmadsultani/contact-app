import Card from "./components/Card";
import Navbar from "./components/Navbar";
import styles from "./App.module.css";
import { useState } from "react";
import AddContact from "./components/AddContact";

function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <main className={styles.main}>
      <Navbar />
      <AddContact setContacts={setContacts}/>
      <ul>
        {
          contacts.map(contact => (
            <Card name={contact.name} phone={contact.phone} setContacts={setContacts}/>
          ))
        }
      </ul>
    </main>
  );
}

export default App;