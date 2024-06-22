import Image from 'next/image';
import Link, { LinkProps } from 'next/link';

interface ButtonCardProps extends LinkProps {
  itemName: string;
  itemPrice: string;
  imageSrc: string;
}

export default function ButtonCard({
  itemName,
  itemPrice,
  imageSrc,
  href,
}: React.PropsWithChildren<ButtonCardProps>) {
  return (
    <>
      <Link
        href={href}
        className="relative h-48 w-full bg-[#bdbdbd] text-[#C62D70] rounded-lg overflow-hidden basis-1/2"
      >
        <Image fill={true} src={imageSrc} alt="Test Picture" className="object-cover" />
        <div className="absolute left-0 right-0 bottom-0 p-3 bg-[#FACAE2]">
          <h3 id="title" className="text-base truncate">
            {itemName}
          </h3>
          <p id="price" className="text-sm">
            {itemPrice}
          </p>
        </div>
      </Link>
    </>
  );
}
