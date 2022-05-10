import { ButtonIn, ButtonOut } from './styles';

function ButtonConfirm(props: string) {
  return <ButtonIn>{props}</ButtonIn>;
}

function ButtonClose(props: string) {
  return <ButtonOut>{props}</ButtonOut>;
}

export { ButtonConfirm, ButtonClose };
