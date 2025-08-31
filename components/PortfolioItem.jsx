'use client'
import React from 'react'
// import {mockData} from '@/data/mock'
import { useState } from 'react'
import styles from  './PortfolioItem.module.scss'
import { CircleX } from 'lucide-react';
import Link from 'next/link'


const PortfolioItem = ({projects, title}) => {
  const [selected, setSelected] = useState(null)
  // console.log(projects)
  return (
    <>
    <h2 className={styles.portfolio__title}>{title}</h2>
    <div className={styles.portfolio__wrapper}>
 
    {projects.map((item) => (
      <article key={item.id} className={styles["portfolio-item"]} >
        <div className={styles.image__container}>
            <img src={item.image} alt={item.title} />
            <div className={styles.image__overlay}>
              <Link href="https://github.com/">
                <img className={styles.overlay__icon} src="/icons/github.svg" alt="github" />
              </Link>
              <Link href="https://github.com/">
                <img className={styles.overlay__icon} src="/icons/link.svg" alt="github" />
              </Link>
            </div>
        </div>
        <div className={styles["portfolio-item__info"]} onClick={() => setSelected(item)} >
            <h3 className={styles["portfolio-item__title"]}>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.longDescription}</p>
            <div className={styles.tech__container}>
            {item.technologies.slice(0, 2).map((tech, index) => (
              <span key={index} className={styles["tech__container-item"]}>{tech}</span>
            ))}
            {item.technologies.length > 2 && (
              <span className={styles["tech__container-item-hidden"]}>+{item.technologies.length - 3}</span>
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
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)}><CircleX /></button>
            <img src={selected.image} alt={selected.title} />
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <p>{selected.longDescription}</p>

            <div className={styles.tech__container}>
            {selected.technologies.slice(0, 3).map((tech, index) => (
              <span className={styles["tech__container-item"]} key={index}>{tech}</span>
            ))}
            </div>
          </div>
        </div>
      )}

      </>
  )

}

export default PortfolioItem
