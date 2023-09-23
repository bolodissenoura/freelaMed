import { Icon } from "@iconify/react";
import Link from "next/link";

export enum ButtonVariant {
  primary = "bg-primary-500",
  secondary = "bg-white",
}

type ButtonProps = {
  text: string;
  icon?: string;
  link: string;
  variant?: ButtonVariant;
  type?: string | "button" | "link";
};

const Button = ({ text, icon, link, type = "link", variant }: ButtonProps) => {
  const Element = type === "button" ? "button" : Link;
  return (
    <Element
      href={link}
      role="button"
      className={`flex font-medium w-full md:w-auto justify-center gap-3 items-center px-8  text-white py-2 rounded-md hover:bg-primary-300 transition-colors duration-300 ${
        variant && variant
      }`}>
      {icon?.length && <Icon icon={icon} />}
      {text}
    </Element>
  );
};

export default Button;
