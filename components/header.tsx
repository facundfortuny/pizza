import Image from "next/image";

export default function Header() {
  return (
    <header className="relative py-5">
      <div className="mx-auto max-w-xl pt-3 pb-5 sm:pt-5 sm:pb-5">
        <div className="grid grid-cols-1 place-items-center">
          <Image
            src="/pizza.svg"
            width={300}
            height={300}
            alt="Picture of the author"
          />
          <h1 className="font-mono text-3xl font-bold sm:text-center sm:text-3xl pt-2">
            Pizza Dough Calculator
          </h1>
        </div>
      </div>
    </header>
  );
}
