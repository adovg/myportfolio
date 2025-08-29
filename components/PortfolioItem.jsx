'use client'
import React from 'react'
// import {mockData} from '@/data/mock'
import { useState } from 'react'
import styles from  './PortfolioItem.module.scss'


const PortfolioItem = ({projects, title}) => {
  const [selected, setSelected] = useState(null)
  // console.log(projects)
  return (
    <>
    <h2 className={styles.portfolio__title}>{title}</h2>
    <div className={styles.portfolio__wrapper}>
 
    {projects.map((item) => (
      <article key={item.id} className={styles["portfolio-item"]} onClick={() => setSelected(item)} >
        <div>
            <img src={item.image} alt="" />
        </div>
        <div className={styles["portfolio-item__info"]}>
            <h3 className={styles["portfolio-item__title"]}>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.longDescription}</p>
            {item.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
        </div>

    </article>
    ))}

    </div>

     {selected && (
        <div className={styles.modalOverlay} onClick={() => setSelected(null)}>
          <div
            className={styles.modalContent}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)}>Закрыть</button>
            <img src={selected.image} alt="" />
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <p>{selected.longDescription}</p>
            {selected.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>
      )}

      </>
  )

}

export default PortfolioItem
