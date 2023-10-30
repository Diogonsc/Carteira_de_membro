"use client";

import React from "react";
import styles from "../../../styles/components/gamification/textareaBase.module.css";

interface ITextArea extends React.ComponentPropsWithoutRef<"textarea"> {
}

const TextAreaBase = ({...rest }: ITextArea) => {

  return (
    <>
      <textarea
        {...rest}
        className={styles.textAreaBase}
      />
    </>
  );
};

export default TextAreaBase;
