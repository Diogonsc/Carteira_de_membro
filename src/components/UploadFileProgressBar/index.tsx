import React, { useRef, useState } from "react";

import UploadIcon from "@mui/icons-material/Upload";
import DescriptionIcon from "@mui/icons-material/Description";
import DoneIcon from "@mui/icons-material/Done";

import styles from "./UploadFileProgressBar.module.css";
import { getApi } from "../../services/api";

export default function UploadFileProgressBar({ closeModal }) {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const uploadFile = (event) => {
    const file = event.target.files[0];
    console.log(file);
    if (!file) return;
    const fileName =
      file.name.length > 12
        ? `${file.name.substring(0, 20)}... .${file.name.split(".")[1]}`
        : file.name;

    const formData = new FormData();
    formData.append("file", file);
    setFiles((prevState) => [...prevState, { name: fileName, loading: 0 }]);
    setShowProgress(true);
    getApi("")
      .post("", formData, {
        onUploadProgress: ({ loaded, total }) => {
          setFiles((prevState) => {
            const newFiles = [...prevState];
            newFiles[newFiles.length - 1].loading = Math.round(
              (loaded * 100) / total
            );
            return newFiles;
          });
          if (loaded === total) {
            const fileSize =
              total < 1024
                ? `${total} kB`
                : `${(loaded / (1024 * 1024)).toFixed(2)} MB`;
            setUploadedFiles((prevState) => [
              ...uploadedFiles,
              { name: fileName, size: fileSize },
            ]);
            setFiles([]);
            setShowProgress(false);
          }
        },
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.uploadBox}>
      <p>Upload de Arquivos</p>
      <form onClick={handleFileInputClick}>
        <input
          className={styles.fileInput}
          type="file"
          name="file"
          id="file"
          hidden
          multiple
          accept=".csv, .xls, .xlsx"
          ref={fileInputRef}
          onChange={uploadFile}
        />
        <div className={styles.icon}>
          <UploadIcon />
        </div>
        <p>Arraste ou clique aqui para fazer o upload</p>
      </form>
      {showProgress && (
        <section className={styles.loadingArea}>
          {files.map((file, index) => (
            <li className={styles.row} key={index}>
              <DescriptionIcon />
              <div className={styles.content}>
                <div className={styles.details}>
                  <div
                    className={styles.name}
                  >{`${file.name} - uploading`}</div>
                  <div className={styles.percent}>{`${file.loading}%`}</div>
                  <div className={styles.loadingBar}>
                    <div
                      className={styles.loading}
                      style={{ width: `${file.loading}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </section>
      )}
      <section className={styles.uploadArea}>
        {uploadedFiles.map((file, index) => (
          <li className={styles.row} key={index}>
            <DescriptionIcon />
            <div className={styles.contentUpload}>
              <div className={styles.details}>
                <span className={styles.name}>{file.name}</span>
                <span className={styles.size}>{file.size}</span>
              </div>
            </div>
            <DoneIcon />
          </li>
        ))}
      </section>
    </div>
  );
}
