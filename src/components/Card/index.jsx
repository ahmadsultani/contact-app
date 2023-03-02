import styles from "./Card.module.css";
import { IoIosCall } from "react-icons/io";
import { BsFillChatDotsFill, BsPersonCircle, BsTrash } from "react-icons/bs";

export default function Card(props) {
  const { name, phone, setContacts } = props;

  function handleDelete() {
    setContacts((prev) =>
      prev.filter((contact) => (name !== contact.name || phone !== contact.phone))
    );
  }

  return (
    <div className={styles.card}>
      <section className={styles.content}>
        <BsPersonCircle size={60} />
        <div className={styles.desc}>
          <h3>{name}</h3>
          <p>{phone}</p>
        </div>
      </section>
      <section className={styles.buttons}>
        <button>
          <IoIosCall size={25} />
        </button>
        <button>
          <BsFillChatDotsFill size={20} />
        </button>
        <button onClick={handleDelete}>
          <BsTrash />
        </button>
      </section>
    </div>
  );
}
