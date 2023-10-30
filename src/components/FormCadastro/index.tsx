import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "dayjs/locale/en-gb";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import DeleteIcon from "@mui/icons-material/Delete";

import InputBase from "../Input";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Select from "react-select";

import styles from "./FormCadastro.module.css";

const schema = yup
  .object({
    imagem: yup.string().required("Imagem obrigatória"),
    nome: yup.string().required("Nome obrigatório"),
    filiacao: yup.string().required("Filiação obrigatória"),
    dataNascimento: yup.string().required("Data de Nascimento obrigatória"),
    estadoCivil: yup.string().required("Estado Civil obrigatório"),
    naturalidade: yup.string().required("Naturalidade obrigatória"),
    dataBatismo: yup.string().required("Data de Batismo obrigatória"),
    dataMembro: yup.string().required("Data de Membro obrigatória"),
    endereco: yup.string().required("Endereço obrigatório"),
    congregado: yup.string().required("Congregado obrigatório"),
    cargo: yup.string().required("Cargo obrigatório"),
    pastor: yup.string().required("Pastor obrigatório"),
    portadorNecessidade: yup.boolean().default(false),
    validade: yup.string().required("Validade obrigatória"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const optionEstadoCivil = [
  { value: "Solteiro", label: "Solteiro" },
  { value: "Casado", label: "Casado" },
  { value: "Divorciado", label: "Divorciado" },
  { value: "Viúvo", label: "Viúvo" },
];

const optionsNaturalidadesBrasileiras = [
  { value: "Rio de Janeiro", label: "Rio de Janeiro" },
  { value: "São Paulo", label: "São Paulo" },
  { value: "Salvador", label: "Bahia" },
  { value: "Brasília", label: "Distrito Federal" },
  { value: "Belo Horizonte", label: "Minas Gerais" },
  { value: "Recife", label: "Pernambuco" },
  { value: "Fortaleza", label: "Ceará" },
  { value: "Manaus", label: "Amazonas" },
  { value: "Porto Alegre", label: "Rio Grande do Sul" },
  { value: "Natal", label: "Rio Grande do Norte" },
  { value: "Vitória", label: "Espírito Santo" },
  { value: "Curitiba", label: "Paraná" },
  { value: "Goiânia", label: "Goiás" },
  { value: "Teresina", label: "Piauí" },
  { value: "João Pessoa", label: "Paraíba" },
  { value: "Aracaju", label: "Sergipe" },
  { value: "Cuiabá", label: "Mato Grosso" },
  { value: "Palmas", label: "Tocantins" },
  { value: "Boa Vista", label: "Roraima" },
  { value: "Campo Grande", label: "Mato Grosso do Sul" },
  { value: "Porto Velho", label: "Rondônia" },
  { value: "Macapá", label: "Amapá" },
  { value: "Rio Branco", label: "Acre" },
  { value: "Florianópolis", label: "Santa Catarina" },
  { value: "São Luís", label: "Maranhão" },
  { value: "Belém", label: "Pará" },
];


const optionCongregado = [
  { value: "Sede", label: "Sede" },
  { value: "Cajueiros", label: "Cajueiros" },
  { value: "Felipe Cardoso", label: "Felipe Cardoso" },
  { value: "Gilgal", label: "Gilgal" },
  { value: "Vale do Sol", label: "Vale do Sol" },
  { value: "Sapucai", label: "Sapucai" },
  { value: "Praia do Cardo", label: "Praia do Cardo" },
  { value: "Marcolina", label: "Marcolina" },
  { value: "Marques dos Santos", label: "Marques dos Santos" },
];

const optionEnderecoCongregacao = [
  { value: "Sede", label: "Sede" },
  { value: "Cajueiros", label: "Cajueiros" },
  { value: "Felipe Cardoso", label: "Felipe Cardoso" },
  { value: "Gilgal", label: "Gilgal" },
  { value: "Vale do Sol", label: "Vale do Sol" },
  { value: "Sapucai", label: "Sapucai" },
  { value: "Praia do Cardo", label: "Praia do Cardo" },
  { value: "Marcolina", label: "Marcolina" },
  { value: "Marques dos Santos", label: "Marques dos Santos" },
];

const optionCargoCongregacao = [
  { value: "Membro", label: "Membro" },
  { value: "Trabalhador", label: "Trabalhador" },
  { value: "Diácono", label: "Diácono" },
  { value: "Diáconisa", label: "Diáconisa" },
  { value: "Presbitero", label: "Presbitero" },
  { value: "Missionário", label: "Missionário" },
  { value: "Missionaria", label: "Missionaria" },
  { value: "Evangelista", label: "Evangelista" },
  { value: "Segundo Vice Pastor", label: "Segundo Vice Pastor" },
  { value: "Terceiro Vice Pastor", label: "Terceiro Vice Pastor" },
  { value: "Pastor", label: "Pastor" },
  { value: "Pastora", label: "Pastora" },
  { value: "Pastor Presidente", label: "Pastor Presidente" },
];

export default function FormCadastro({ handleCriateList }) {

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const resetForm = () => reset();

  const handleSubmitForm = (data) => {
    // handleCriateList(data);
    const dataString = JSON.stringify(data);
    localStorage.setItem('listaDeMembros', dataString)
    console.log(data)
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <h4>Formulário de Cadastro</h4>

        <div className={styles.input}>
          <label htmlFor="imagem">Foto:</label>
          <Controller
            name="imagem"
            control={control}
            render={({ field }) => (
              <InputBase type="file" placeholder="Foto:" {...field} />
            )}
          />
          <p>{errors.imagem?.message}</p>
        </div>

        <div className={styles.input}>
          <label htmlFor="nome">Nome:</label>
          <Controller
            name="nome"
            control={control}
            render={({ field }) => (
              <InputBase type="text" placeholder="Nome:" {...field} />
            )}
          />
          <p>{errors.nome?.message}</p>
        </div>

        <div className={styles.input}>
          <label htmlFor="filiacao">Filiação:</label>
          <Controller
            name="filiacao"
            control={control}
            render={({ field }) => (
              <InputBase type="text" placeholder="Filiação:" {...field} />
            )}
          />
          <p>{errors.filiacao?.message}</p>
        </div>

     <div className={styles.inputDateContainer}>
          <div className={styles.input}>
            <label htmlFor="dataNascimento">Data de Nascimento:</label>
            <Controller
              name="dataNascimento"
              control={control}
              render={({ field }) => (
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="en-gb"
                >
                  <DatePicker {...field} />
                </LocalizationProvider>
              )}
            />
            <div className={styles.errorMessage}>
              {errors.dataNascimento && errors.dataNascimento.message}
            </div>
          </div>

          <div className={styles.input}>
          <label htmlFor="estadoCivil">Estado Civil: </label>
          <Controller
            name="estadoCivil"
            control={control}
            render={({ field }) => (
              <Select
                options={optionEstadoCivil}
                {...field}
                value={optionEstadoCivil.find(
                  (option) => option.value === field.value
                )}
                onChange={(selectedOptionEstadoCivil) => {
                  field.onChange(
                    selectedOptionEstadoCivil ? selectedOptionEstadoCivil.value : ""
                  );
                }}
              />
            )}
          />
          <p>{errors.estadoCivil?.message}</p>
          </div>
        </div>

        <div className={styles.input}>
          <label htmlFor="naturalidade">Naturalidade: </label>
          <Controller
            name="naturalidade"
            control={control}
            render={({ field }) => (
              <Select
                options={optionsNaturalidadesBrasileiras}
                {...field}
                value={optionsNaturalidadesBrasileiras.find(
                  (option) => option.value === field.value
                )}
                onChange={(selectedOptionNaturalidade) => {
                  field.onChange(
                    selectedOptionNaturalidade ? selectedOptionNaturalidade.value : ""
                  );
                }}
              />
            )}
          />
          <p>{errors.naturalidade?.message}</p>
        </div>

          <div className={styles.inputDateContainer}>
          <div className={styles.input}>
            <label htmlFor="dataBatismo">Data de Batismo:</label>
            <Controller
              name="dataBatismo"
              control={control}
              render={({ field }) => (
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="en-gb"
                >
                  <DatePicker {...field} />
                </LocalizationProvider>
              )}
            />
            <div className={styles.errorMessage}>
              {errors.dataBatismo && errors.dataBatismo.message}
            </div>
          </div>

          <div className={styles.input}>
            <label htmlFor="dataMembro">Data de Membro:</label>
            <Controller
              name="dataMembro"
              control={control}
              render={({ field }) => (
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="en-gb"
                >
                  <DatePicker {...field} />
                </LocalizationProvider>
              )}
            />
            <div className={styles.errorMessage}>
              {errors.dataMembro && errors.dataMembro.message}
            </div>
          </div>
        </div>

          <div className={styles.input}>
          <label htmlFor="congregado">Congregado em: </label>
          <Controller
            name="congregado"
            control={control}
            render={({ field }) => (
              <Select
                options={optionCongregado}
                {...field}
                {...field}
                value={optionCongregado.find(
                  (option) => option.value === field.value
                )}
                onChange={(selectedOptionOperacao) =>
                  field.onChange(
                    selectedOptionOperacao ? selectedOptionOperacao.value : ""
                  )
                }
              />
            )}
          />
          <p>{errors.congregado?.message}</p>
        </div>

        <div className={styles.input}>
          <label htmlFor="endereco">Endereço: </label>
          <Controller
            name="endereco"
            control={control}
            render={({ field }) => (
              <Select
                options={optionEnderecoCongregacao}
                {...field}
                {...field}
                value={optionEnderecoCongregacao.find(
                  (option) => option.value === field.value
                )}
                onChange={(selectedOptionCongregacao) =>
                  field.onChange(
                    selectedOptionCongregacao ? selectedOptionCongregacao.value : ""
                  )
                }
              />
            )}
          />
          <p>{errors.endereco?.message}</p>
        </div>

        <div className={styles.input}>
          <label htmlFor="cargo">Cargo: </label>
          <Controller
            name="cargo"
            control={control}
            render={({ field }) => (
              <Select
                options={optionCargoCongregacao}
                {...field}
                value={optionCargoCongregacao.find(
                  (option) => option.value === field.value
                )}
                onChange={(selectedOptionCargo) =>
                  field.onChange(
                    selectedOptionCargo ? selectedOptionCargo.value : ""
                  )
                }
              />
            )}
          />
          <p>{errors.cargo?.message}</p>
        </div>

        <div className={styles.input}>
          <label htmlFor="pastor">Pastor Responsavel:</label>
          <Controller
            name="pastor"
            control={control}
            render={({ field }) => (
              <InputBase type="text" placeholder="Pastor Responsavel:" {...field} />
            )}
          />
          <p>{errors.pastor?.message}</p>
        </div>

        <div className={styles.inputDateContainerValidade}>
        <div className={styles.input}>
            <label htmlFor="validade">validade:</label>
            <Controller
              name="validade"
              control={control}
              render={({ field }) => (
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale="en-gb"
                >
                  <DatePicker {...field} />
                </LocalizationProvider>
              )}
            />
            <div className={styles.errorMessage}>
              {errors.validade && errors.validade.message}
            </div>
          </div>

          <div className={styles.inputCheck}>
            <Controller
              name="portadorNecessidade"
              control={control}
              render={({ field }) => (
                <Checkbox
                  type="checkbox"
                  {...field}
                  value={field.value ? "true" : "false"}
                />
              )}
            />
            <label htmlFor="portadorNecessidade">Portador de Necessidade</label>
          </div>
        </div>


        <div className={styles.btnForm}>
          <Button name="Salvar" type="submit" bgColor="buttonSolid" />
          <Button
            name="Cancelar"
            type="button"
            bgColor="buttonOutlined"
            onClick={resetForm}
          />
        </div>
      </form>
    </div>
  );
}
