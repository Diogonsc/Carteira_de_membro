
import styles from "./button.module.css";

interface IButton extends React.ComponentPropsWithoutRef<"button">  {
  name: string;
  bgColor?: string;
};

export default function Button ({ name, bgColor, ...rest }: IButton) {

  const buttonClassName = bgColor
    ? `${styles.button} ${styles[bgColor]}`
    : styles.button;

  return (<button {...rest} className={buttonClassName}>{name}</button>);
};

