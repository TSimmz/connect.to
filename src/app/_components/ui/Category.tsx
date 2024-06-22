import Button from './Button';
import ButtonGroup from './ButtonGroup';

interface CategoryProps {
  name: string;
}

export default function Category({ name, children }: React.PropsWithChildren<CategoryProps>) {
  return (
    <div>
      <h2 className="text-lg font-secondary text-[#C62D70] font-medium mb-2 truncate">{name}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
