import React from 'react';
import styles from '../../../styles/components/gamification/ListaDeMetas.module.css';
import Button from '../Button';

export default function ListaDeMetas({ metas }) {
  return (
    <div className={styles.container}>
      <ul>
        {metas.map((meta, index) => (
          <li key={index} className={styles.list}>
            <p>{meta.indicador}</p>
            <Button
              name={meta.ativo ? 'Ativo' : 'Desativado'}
              bgColor={meta.ativo ? 'buttonAtivo' : 'buttonDesativado'}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
