import { useState, useEffect } from "react";
import styles from "./carteiraMembro.module.css";

import { TopBar } from "../../components/TopBar";
import SearchIcon from "@mui/icons-material/Search";

import TextField from "@mui/material/TextField";

export default function CarteiraMembro() {
  const [listaMembrosData, setListaMembrosData] = useState({});
  const [imagemSrc, setImagemSrc] = useState("");

  useEffect(() => {
    const storedDataString = localStorage.getItem("listaDeMembros");
    if (storedDataString) {
      const storedData = JSON.parse(storedDataString);
      setListaMembrosData(storedData);

      // Set the image source
      const caminhoCompleto = storedData.imagem;
      setImagemSrc(caminhoCompleto);
    }
  }, []);

  console.log(imagemSrc)

  function formatDateToDDMMYYYY(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
  
    // Ensure leading zeros for day and month if needed
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
  
    return `${formattedDay}/${formattedMonth}/${year}`;
  }  

  return (
    <>
      <div className={styles.containerBox}>
        <TopBar title="Carteira de Membro">
          <button>
            <SearchIcon titleAccess="Search" />
          </button>
        </TopBar>

        <div className={styles.content}>
          <div className={styles.carteiraMolde}>
            <div className={styles.box1}>
              <div className={styles.dadosCadab}>
                <p>Igreja Evangélica Assembléia de Deus</p>
                <hr /> <hr />
                <span>
                  Rua Paolielo, 110 - Santa Cruz - RJ - CEP 23520-200 - Tels.:
                  (21) 3395-4678 / 3157-7722
                </span>
              </div>
              <div className={styles.numeroCartaoMembro}>
                <p>Cartão de Membro</p>
                <span>Nº: 8233</span>
              </div>
              <div className={styles.dadosPessoais}>
                <TextField
                  id="nome"
                  label="Nome"
                  variant="outlined"
                  value={listaMembrosData?.nome}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={styles.inputdadosPessoais}
                />
                <div className={styles.contentPessoais}>
                  <div className={styles.contentPessoaisbox}>
                    <TextField
                      id="filiacao"
                      label="Filiação"
                      variant="outlined"
                      value={listaMembrosData?.filiacao}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      className={styles.inputdadosPessoais}
                    />
                    <div className={styles.inputNascEstado}>
                      <TextField
                        id="nascimento"
                        label="Nascimento"
                        variant="outlined"
                        value={formatDateToDDMMYYYY(listaMembrosData?.dataNascimento)}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        className={styles.inputdadosPessoais}
                      />
                      <TextField
                        id="estadoCivil"
                        label="Estado Civil"
                        variant="outlined"
                        value={listaMembrosData?.estadoCivil}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        className={styles.inputdadosPessoais}
                      />
                    </div>
                    <TextField
                      id="naturalidade"
                      label="Naturalidade"
                      variant="outlined"
                      value={listaMembrosData?.naturalidade}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      className={styles.inputdadosPessoais}
                    />
                  </div>
                  <div className={styles.imagem}>
                    <img src={imagemSrc} alt="imagem do Membro" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.box2}>
              <div className={styles.dadosPessoaisBox2}>
                <div className={styles.dadosFlex}>
                  <TextField
                    id="dataBatismo"
                    label="Data do batismo"
                    variant="outlined"
                    value={formatDateToDDMMYYYY(listaMembrosData?.dataBatismo)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className={styles.inputdadosPessoais}
                  />
                  <TextField
                    id="dataMembro"
                    label="Data do Membro"
                    variant="outlined"
                    value={formatDateToDDMMYYYY(listaMembrosData?.dataMembro)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className={styles.inputdadosPessoais}
                  />
                  <TextField
                    id="congregado"
                    label="Congregado em"
                    variant="outlined"
                    value={listaMembrosData?.congregado}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className={styles.inputdadosPessoais}
                  />
                </div>
                <TextField
                  id="endereco"
                  label="Endereço"
                  variant="outlined"
                  value={listaMembrosData?.endereco}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={styles.inputdadosPessoais}
                />
                <TextField
                  id="cargo"
                  label="Cargo na Igreja"
                  variant="outlined"
                  value={listaMembrosData?.cargo}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={styles.inputdadosPessoais}
                />
                <TextField
                  id="pastor"
                  label="Pastor"
                  variant="outlined"
                  value={listaMembrosData?.pastor}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={styles.inputdadosPessoais}
                />
                <TextField
                  id="portador"
                  label="Portador"
                  variant="outlined"
                  value={
                    listaMembrosData?.portadorNecessidade === true
                      ? "Sim"
                      : "Não"
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={styles.inputdadosPessoais}
                />
                <div className={styles.table}>
                  <div className={styles.row}>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>
                    <div className={styles.cell}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
