import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled=true}: IButtonProps) => {
    console.log(disabled)
  return <>
    <ButtonContainer as="button" onClick={onClick} hidden={!disabled}>{title}</ButtonContainer>
  </>

};

export default Button;
