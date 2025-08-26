import React from "react";
import styles from "./page.module.scss";
import { mockData } from "@/data/mock.js";
import PortfolioItem from "@/components/PortfolioItem";

// const page = () => {
//   return (
//     <div>
//       {mockData.portfolio.map((item) => (
//         <PortfolioItem key={item.title} item={item} />
//       ))}
//     </div>
//   );
// };

const page = () => {
  return (
    <div>
      <PortfolioItem
        key={mockData.portfolio.title}
        projects={mockData.portfolio.projects}
        title={mockData.portfolio.title}
      />
    </div>
  );
};

export default page;
