import React from "react";

import styles from "./inputBase.module.css"


interface IInput extends React.ComponentPropsWithoutRef<'input'>{}

const InputBase = ({ ...rest }: IInput) => {

  return (
    <>
      <input
        className={styles.inputBase}
        {...rest}
      />
    </>
  );
};

export default InputBase