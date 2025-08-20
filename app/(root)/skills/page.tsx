import SkillItem from "@/components/SkillItem";
import React from "react";
import { mockData } from "@/data/mock.js";
import styles from "./page.module.scss";

const Page = () => {
  return (
    <div className={styles.skills_page}>
      {mockData.skills.categories.map((category) => (
        <SkillItem key={category.title} category={category} />
      ))}
    </div>
  );
};

export default Page;
