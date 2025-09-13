"use client";
import React, { useState } from "react";
import styles from "./ContactForm.module.scss";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Имя обязательно";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email обязателен";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Введите корректный email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Тема обязательна";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Сообщение обязательно";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Сообщение должно содержать минимум 10 символов";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Произошла ошибка при отправке сообщения. Попробуйте еще раз."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.contactForm}>
        <h2 className={styles.contactForm__title}>Сообщение отправлено!</h2>
        <div className={styles.contactForm__success}>
          <p>Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.</p>
        </div>
        <button
          className={styles.contactForm__button}
          onClick={() => setIsSubmitted(false)}
        >
          Отправить новое сообщение
        </button>
      </div>
    );
  }

  return (
    <div className={styles.contactForm}>
      <h2 className={styles.contactForm__title}>Напишите мне</h2>

      {submitError && (
        <div className={styles.contactForm__error}>
          <p>{submitError}</p>
        </div>
      )}

      <form className={styles.contactForm__form} onSubmit={handleSubmit}>
        <div className={styles.contactForm__field}>
          <label htmlFor="name" className={styles.contactForm__label}>
            Имя *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.contactForm__input}
            placeholder="Ваше имя"
            disabled={isSubmitting}
          />
          {errors.name && (
            <span style={{ color: "red", fontSize: "0.875rem" }}>
              {errors.name}
            </span>
          )}
        </div>

        <div className={styles.contactForm__field}>
          <label htmlFor="email" className={styles.contactForm__label}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.contactForm__input}
            placeholder="your@email.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "0.875rem" }}>
              {errors.email}
            </span>
          )}
        </div>

        <div className={styles.contactForm__field}>
          <label htmlFor="subject" className={styles.contactForm__label}>
            Тема *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={styles.contactForm__input}
            placeholder="Тема сообщения"
            disabled={isSubmitting}
          />
          {errors.subject && (
            <span style={{ color: "red", fontSize: "0.875rem" }}>
              {errors.subject}
            </span>
          )}
        </div>

        <div className={styles.contactForm__field}>
          <label htmlFor="message" className={styles.contactForm__label}>
            Сообщение *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className={styles.contactForm__textarea}
            placeholder="Расскажите о вашем проекте или задайте вопрос..."
            disabled={isSubmitting}
          />
          {errors.message && (
            <span style={{ color: "red", fontSize: "0.875rem" }}>
              {errors.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className={styles.contactForm__button}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправка..." : "Отправить сообщение"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
