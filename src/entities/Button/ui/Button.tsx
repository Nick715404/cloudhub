import { ElementType } from "react";

type ButtonOwnProps<E extends ElementType = ElementType> = {
  title: string,
  accent?: boolean,
  style: 'black' | 'white',
  as?: 'link' | 'button',
};

type ButtonProps = {};

export const Button = ({ }: ButtonProps) => {
  const TagName = "button"
  return (
    <TagName>Button</TagName>
  )
}