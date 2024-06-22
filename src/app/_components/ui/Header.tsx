interface HeaderProps {
  name: string;
  description: string;
  link?: string;
}

export default function Header({ name, description, link }: HeaderProps) {
  return (
    <>
      <h1 className="text-4xl font-primary">{name}</h1>
      <p className="text-base font-primary font-light mt-0.5 mb-5">{description}</p>
    </>
  );
}
