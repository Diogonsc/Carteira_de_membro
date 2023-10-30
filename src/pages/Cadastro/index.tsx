import React, { useState } from "react";

import FormCadastro from "../../components/FormCadastro";
import { ListaMembros } from "../../components/ListaMembros";
import NoDataRegistered from "../../components/NoDataRegistered";
import { TopBar } from "../../components/TopBar";
import styles from "./cadastro.module.css";
import Modal from "../../components/Modal";
import UploadFileProgressBar from "../../components/UploadFileProgressBar";
import UploadIcon from "@mui/icons-material/Upload";
import AddIcon from "@mui/icons-material/Add";
import { IListaMembros } from "../../@types/listaMembros/listaMembros";

export default function Cadastro() {
  const [openForm, setOpenForm] = useState(false);
  const [listas, setListas] = useState([]);
  const [openModalUploadFiles, setOpenModalUploadFiles] = useState(false);

  const handleCriateList = (lista: IListaMembros[]) => {
    setListas([...listas, lista]);
  };

  const openModalFormClient = () => {
    setOpenModalUploadFiles(true);
  };

  const closeModalFormClient = () => {
    setOpenModalUploadFiles(false);
  };

  const handleFormOpen = () => {
    setOpenForm(!openForm);
  };

  return (
    <>
      <div className={styles.containerBox}>
        <TopBar title="Cadastro">
          <button>
            <UploadIcon titleAccess="Upload" onClick={openModalFormClient} />
          </button>
          <button>
            <AddIcon titleAccess="Abrir formulário" onClick={handleFormOpen} />
          </button>
        </TopBar>

        <div className={styles.content}>
          <div className={styles.box1}>
            {listas.length > 0 ? (
              <ListaMembros listas={listas} />
            ) : (
              <NoDataRegistered
                title="Não há registros"
                subtitle="Clique no '+' no canto superior direito para adcionar."
              />
            )}
          </div>
          {openForm && (
            <div className={styles.box2}>
              <FormCadastro handleCriateList={handleCriateList} />
            </div>
          )}
        </div>
      </div>
      {openModalUploadFiles && (
        <Modal
          openModal={openModalUploadFiles}
          closeModal={closeModalFormClient}
        >
          <UploadFileProgressBar closeModal={closeModalFormClient} />
        </Modal>
      )}
    </>
  );
}
