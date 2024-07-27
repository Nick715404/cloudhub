import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/">
      <Image width={105} height={25} src='/svg/logo.svg' priority alt="Logo CloudHub" />
    </Link>
  )
}