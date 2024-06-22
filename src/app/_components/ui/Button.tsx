import Link from 'next/link';

export interface ButtonProps {}

export default function Button({ children }: React.PropsWithChildren<ButtonProps>) {
  return (
    <>
      <Link
        href="/"
        className="w-full h-[64px] flex justify-center items-center rounded-lg bg-[#F694C67F] bg-opacity-50 text-[#C62D70]"
      >
        {children}
      </Link>
    </>
  );
}
