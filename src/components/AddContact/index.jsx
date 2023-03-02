import React, { useState } from 'react'
import styles from './AddContact.module.css'

export default function AddContact(props) {
  const { setContacts } = props;
  
  const [nameValue, setNameValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')

  function handleName(e) {
    e.preventDefault()
    setNameValue(e.target.value)
  }

  function handlePhone(e) {
    e.preventDefault()
    setPhoneValue(e.target.value)
  }

  function handleButtonClick(e) {
    e.preventDefault()
    if (nameValue === '' || phoneValue === '') {
      window.alert('Field masih ada yang kosong')
      return
    }
    setContacts((prev) => [...prev, { name: nameValue, phone: phoneValue }])
    setNameValue('')
    setPhoneValue('')
  }

  return (
    <form className={styles.form}>
      <input type="text" value={nameValue} onChange={handleName}/>
      <input type="text" value={phoneValue} onChange={handlePhone}/>
      <button onClick={handleButtonClick}>
        submit
      </button>
    </form>
  )
}
