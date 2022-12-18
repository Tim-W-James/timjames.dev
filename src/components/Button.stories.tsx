import { HiOutlineArrowSmRight } from "react-icons/hi";
import ButtonComponent from "./Button";

export default {
  title: "Components/Button",
  component: ButtonComponent,
};

export const Button = () => (
  <div className="flex flex-row gap-4 items-center">
    <ButtonComponent label="label" to="https://timjames.dev/" />
    <ButtonComponent isLight label="light" to="https://timjames.dev/" />
    <ButtonComponent
      icon={<HiOutlineArrowSmRight />}
      label="icon"
      to="https://timjames.dev/"
    />
    <ButtonComponent
      icon={<HiOutlineArrowSmRight />}
      to="https://timjames.dev/"
    />
  </div>
);
