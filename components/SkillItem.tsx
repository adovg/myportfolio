"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./SkillItem.module.scss";
import { mockData } from "@/data/mock.js";
import gsap from "gsap";
// const { skills } = mockData;

const ProgressBar = ({ level, color }: { level: number; color: string }) => {
  const [width, setWidth] = useState(0);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      setTimeout(() => setWidth(level), 200);
    }
  }, [level]);

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressBarFill}
        style={{ width: `${width}%`, backgroundColor: color }}
      />
    </div>
  );
};

type Skill = {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
};

type Category = {
  title: string;
  skills: Skill[];
};

const SkillItem = ({ category }: { category: Category }) => {
  const skillRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Анимация при наведении
  const handleMouseEnter = (idx: number) => {
    const el = skillRefs.current[idx];
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
    const el = skillRefs.current[idx];
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
    <article className={styles.skill_item}>
      <h3 className={styles.skill__title}>{category.title}</h3>
      <ul className={styles.skill__list}>
        {category.skills.map((skill, idx) => (
          <li
            className={styles.skill__item}
            key={skill.name}
            ref={(el) => (skillRefs.current[idx] = el)}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            <span className={styles.skill__icon}>
              <img
                src={skill.icon}
                alt={skill.name}
                className={styles.skill__icon}
              />
            </span>
            <span>{skill.name}</span>
            <ProgressBar level={skill.level} color={skill.color} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default SkillItem;
