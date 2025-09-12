import React from "react";
import { Mail, Github } from "lucide-react";
import styles from "./ContactInfo.module.scss";
import { mockData } from "@/data/mock.js";

const ContactInfo = () => {
  const { title, subtitle, email } = mockData.contact;
  const social = mockData.contact.social[0];

  return (
    <div className={styles.contact__wrapper}>
      <h2 className={styles.contact__title}>{title}:</h2>
      <ul className={styles.contact__item}>
        <li>
          <a
            className={styles.contact__mail}
            href={`mailto:${email}`}
            aria-label={`Send email to ${email}`}
          >
            <Mail />
            <p>{subtitle}</p>
          </a>
        </li>
        <li>
          <a
            className={styles.contact__mail}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
          >
            <Github />
            <p>{social.name}</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
