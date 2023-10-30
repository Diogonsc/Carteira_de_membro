import React from "react";

import styles from "./modal.module.css";

import Popup from "reactjs-popup";
import { IModal } from "../../@types/modal/modal";

const Modal = ({
  children,
  openModal,
  closeModal,
  nameStyle,
  title,
}: IModal) => {
  const style = nameStyle ? `${styles[nameStyle]}` : "";
  return (
    <div>
      <Popup modal open={openModal} closeOnDocumentClick={false} >
        <div className={styles.containerModal}>
          <div className={styles.modal}>
            <div className={styles.ContainerHeader}>
              <span className={style}>{title}</span>
              <a className={styles.close} onClick={closeModal}>
                &times;
              </a>
            </div>

            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default Modal;
