import React, { useState } from "react"
import styles from "./styles.module.scss"

import Iframe from "components/Iframe"

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const submitEnd = () => {
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
    setIsSubmitting(false)
    setIsSent(true)
  }
  const submitForm = () => {
    setIsSubmitting(true)
  }
  return (
    <div className={styles.formWrapper}>
      <Iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad={submitEnd}
      />

      <form
        target="hidden_iframe"
        onSubmit={submitForm}
        method="post"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeNETctovcUBOdcOgJDzbOgzooyiIbXjPYc3xx8q1Z9mazaxg/formResponse"
      >
        <label for="entry.746198485">
          Name
          <input
            type="text"
            name="entry.746198485"
            onChange={e => {
              setName(e.target.value)
            }}
            value={name}
          />
        </label>
        <label for="entry.2138130508">
          Email
          <input
            type="email"
            name="entry.2138130508"
            onChange={e => {
              setEmail(e.target.value)
            }}
            value={email}
          />
        </label>
        <label for="entry.1908152362">
          Phone
          <input
            type="tel"
            name="entry.1908152362"
            onChange={e => {
              setPhone(e.target.value)
            }}
            value={phone}
          />
        </label>
        <label for="entry.1435168912">
          Message
          <textarea
            type="textarea"
            name="entry.1435168912"
            rows={4}
            onChange={e => {
              setMessage(e.target.value)
            }}
            value={message}
          ></textarea>
        </label>
        <label>
          <input type="submit" disabled={isSubmitting} />
        </label>
      </form>
      <div className={styles.formMessage}>
        {isSent && <p>Success. We'll get back to you soon. Thank you!</p>}
      </div>
    </div>
  )
}

export default Form
