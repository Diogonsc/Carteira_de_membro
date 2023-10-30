import React from "react";
import styles from "./checkbox.module.css";

interface ICheckbox extends React.ComponentPropsWithoutRef<"input"> {}
export default function Checkbox({ ...rest }: ICheckbox) {
  return (
    <div className={styles.customCheckbox}>
      <input type="checkbox" id={rest.name} {...rest} />
      <label htmlFor={rest.name}></label>
    </div>
  );
}
