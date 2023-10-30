
import { ITopBar } from '../../@types/topBar/topBar';
import styles from './TopBar.module.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const TopBar = ({ title, children }: ITopBar) => {
  return (
    <div className={styles.container}>
      <div className={styles.goBack}>
       <div className={styles.icon}>
          <ArrowBackIcon />
       </div>
        <p>{title}</p>
      </div>
      <div className={styles.btns}>
       {children}
      </div>
    </div>
  )
}