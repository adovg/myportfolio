import React from "react";
import styles from "./page.module.scss";
import ContactForm from "@/components/ContactForm";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <ContactForm />
    </div>
  );
};

export default Contacts;
