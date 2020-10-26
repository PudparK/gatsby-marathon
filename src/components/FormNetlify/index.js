import React, { useState } from "react"
import styles from "./styles.module.scss"

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  return (
    <div className={styles.formWrapper}>
      <form
        name="contact"
        method="posts"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <label for="name">
          Name
          <input
            type="text"
            name="name"
            onChange={e => {
              setName(e.target.value)
            }}
            value={name}
          />
        </label>
        <label for="email">
          Email
          <input
            type="email"
            name="email"
            onChange={e => {
              setEmail(e.target.value)
            }}
            value={email}
          />
        </label>
        <label for="phone">
          Phone
          <input
            type="tel"
            name="phone"
            onChange={e => {
              setPhone(e.target.value)
            }}
            value={phone}
          />
        </label>

        <label for="reason">
          Choose
          <select id="choose" name="reason" required>
            <option selected="true" value="Choose" disabled>
              Employee or Employer
            </option>
            <option value="Employee">Employee</option>
            <option value="Employer">Employer</option>
          </select>
        </label>

        <label for="message">
          Message
          <textarea
            type="textarea"
            name="message"
            rows={4}
            onChange={e => {
              setMessage(e.target.value)
            }}
            value={message}
          ></textarea>
        </label>
        <button>Send</button>
      </form>
    </div>
  )
}

export default Form
