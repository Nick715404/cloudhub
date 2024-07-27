import { TLink } from "@/shared/constants";
import Link from "next/link"

type NavigationItemProps = { link: TLink }

export const NavigationItem = ({ link }: NavigationItemProps) => {
  return (
    <li className="">
      <Link className="block transition-all hover:scale-105" href={link.path}>{link.label}</Link>
    </li>
  );
};