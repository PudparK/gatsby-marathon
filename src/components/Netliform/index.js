import React from "react"
import styles from "./styles.module.scss"

const Netliform = () => {
    return (
        <div className={styles.netliformContainer}>
            <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Phone: <input type="tel" name="phone" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Employee</option>
      <option value="follower">Employer</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
        </div>
    );
}

export default Netliform