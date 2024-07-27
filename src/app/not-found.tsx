import Image from "next/image";

export default function NotFoundPage() {
  return (
    <main className="flex items-center justify-center">
      <section className="container flex flex-col items-center justify-center">
        <Image className="mb-9" width={298} height={264} src="/png/404.png" alt="Oops! We wasn't found this page" />
        <h1 className="text-orange-500 text-center text-5xl mb-4">Page not found</h1>
        <p className="text-center text-black-500">The page youre looking for isnt available. Try to <br /> search again or use the go back button below.</p>

      </section>
    </main>
  )
}