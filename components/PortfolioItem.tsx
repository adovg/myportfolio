"use client";
import React, { useRef } from "react";
import { useState } from "react";
import styles from "./PortfolioItem.module.scss";
import { CircleX } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";


// Define the type for project items
type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
  technologies: string[];
};

interface PortfolioItemProps {
  projects: Project[];
  title: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ projects, title }) => {
  const [selected, setSelected] = useState<Project | null>(null);

  // Массив рефов для всех карточек
  const cardRefs = useRef<HTMLDivElement[]>([]);

  // Анимация при наведении
  const handleMouseEnter = (idx: number) => {
    const el = cardRefs.current[idx];
    if (el) {
      gsap.to(el, {
        y: -10,
        scale: 1.04,
        boxShadow: "0 8px 24px rgba(34,197,94,0.15)",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  // Анимация при уходе курсора
  const handleMouseLeave = (idx: number) => {
    const el = cardRefs.current[idx];
    if (el) {
      gsap.to(el, {
        y: 0,
        scale: 1,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        duration: 0.3,
        ease: "power2.in",
      });
    }
  };

  return (
    <>
      <h2 className={styles.portfolio__title}>{title}</h2>
      <div className={styles.portfolio__wrapper}>
        {projects.map((item, idx) => (
          <article
            key={item.id}
            className={styles["portfolio-item"]}
            ref={(el) => (cardRefs.current[idx] = el!)}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            <div className={styles.image__container}>
              <img className={styles.modal__img} src={item.image} alt={item.title} />
              <div className={styles.image__overlay}>
                <Link href={item.githubUrl}>
                  <img
                    className={styles.overlay__icon}
                    src="/icons/github.svg"
                    alt="github"
                  />
                </Link>
                <Link href={item.demoUrl}>
                  <img
                    className={styles.overlay__icon}
                    src="/icons/link.svg"
                    alt="github"
                  />
                </Link>
              </div>
            </div>
            <div
              className={styles["portfolio-item__info"]}
              onClick={() => setSelected(item)}
            >
              <h3 className={styles["portfolio-item__title"]}>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.longDescription}</p>
              <div className={styles.tech__container}>
                {item.technologies.slice(0, 2).map((tech, index) => (
                  <span key={index} className={styles["tech__container-item"]}>
                    {tech}
                  </span>
                ))}
                {item.technologies.length > 2 && (
                  <span className={styles["tech__container-item-hidden"]}>
                    +{item.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      {selected && (
        <div className={styles.modalOverlay} onClick={() => setSelected(null)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)}>
              <CircleX />
            </button>
            <img src={selected.image} alt={selected.title} />
            <h3 className={styles.modal__title}>{selected.title}</h3>
            <p className={styles.modal__description}>{selected.description}</p>
            <p className={styles.modal__description}>
              {selected.longDescription}
            </p>
            <div className={styles.tech__container}>
              {selected.technologies.slice(0, 3).map((tech, index) => (
                <span className={styles["tech__container-item"]} key={index}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.modal__links}>
              <Link href={selected.githubUrl}>
                <img
                  className={styles.overlay__icon}
                  src="/icons/github.svg"
                  alt="github"
                />
              </Link>
              <Link href={selected.demoUrl}>
                <img
                  className={styles.overlay__icon}
                  src="/icons/link.svg"
                  alt="github"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioItem;
