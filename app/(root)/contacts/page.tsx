import React from "react";
import styles from "./page.module.scss";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contacts;
