import React from 'react'

import styles from './NoDataRegistered.module.css'

// import { INoDataRegistered } from '../../../types/gamification/components/noDataRegistered/noDataRegistered'

export default function NoDataRegistered({ title, subtitle }) {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <p>{ title }</p>
            <span>{ subtitle }</span>
        </div>
    </div>
  )
}
