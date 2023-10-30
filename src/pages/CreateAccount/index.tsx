import React, { useState } from "react";

import styles from "./styles.module.css";

import {
  TextField,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    nome: yup.string().required("Nome obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    perfil: yup.string().required("Perfil obrigatório"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentImage}></div>
      <div className={styles.contentForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="nome"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                label="Nome"
                variant="outlined"
                error={!!errors.nome}
                helperText={errors.nome?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl
                variant="outlined"
                fullWidth
                error={!!errors.password}
              >
                <InputLabel htmlFor="password" className={styles.inputSenha}>
                  Senha
                </InputLabel>
                <OutlinedInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...field}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={handlePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <span>{errors.password?.message}</span>
              </FormControl>
            )}
          />

          <Controller
            name="perfil"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" className={styles.Select}>Perfil de Acesso</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  {...field}
                >
                  <MenuItem value="Administrador">Administrador</MenuItem>
                  <MenuItem value="Usuário">Usuário</MenuItem>
                </Select>
                <span>{errors.perfil?.message}</span>
              </FormControl>
            )}
          />

          <button type="submit" className={styles.btnSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
