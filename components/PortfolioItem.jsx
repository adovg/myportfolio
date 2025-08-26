import React from 'react'
import {mockData} from '@/data/mock'
import styles from  './PortfolioItem.module.scss'

const PortfolioItem = ({projects, title}) => {
  console.log(projects)
  return (
    <>
       <h2 className={styles.portfolio__title}>{title}</h2>
    <div className={styles.portfolio__wrapper}>
 
    {projects.map((item) => (
      <article key={item.id} className={styles.portfolio__item}>
        <div className="portfolio-item__img">
            <img src={item.image} alt="" />
        </div>
        <div className="portfolion-item__content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.longDescription}</p>
            {item.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
        </div>

    </article>
    ))}

    </div>
      </>
  )

}

export default PortfolioItem
