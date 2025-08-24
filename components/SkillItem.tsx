"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./SkillItem.module.scss";
import { Code, Palette, Settings } from "lucide-react";
import { mockData } from "@/data/mock.js";

const { skills } = mockData;

const ProgressBar = ({ level }: { level: number }) => {
  const [width, setWidth] = useState(0);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      setTimeout(() => setWidth(level), 200); // небольшая задержка для плавности
    }
  }, [level]);

  return (
    <div className={styles.progressBar}>
      <div className={styles.progressBarFill} style={{ width: `${width}%` }} />
    </div>
  );
};

type Skill = {
  name: string;
  icon: React.ReactNode;
  level: number;
};

type Category = {
  title: string;
  skills: Skill[];
};

const SkillItem = ({ category }: { category: Category }) => {
  return (
    <article className={styles.skill_item}>
      <h3 className={styles.skill__title}>{category.title}</h3>
      <ul className={styles.skill__list}>
        {category.skills.map((skill) => (
          <li className={styles.skill__item} key={skill.name}>
            <span className={styles.skill__icon}>
              <img
                src={skill.icon}
                alt={skill.name}
                className={styles.skill__icon}
              />
            </span>
            <span>{skill.name}</span>
            <ProgressBar level={skill.level} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default SkillItem;
