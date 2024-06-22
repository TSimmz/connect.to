interface ButtonGroupProps {}

export default function ButtonGroup({ children }: React.PropsWithChildren<ButtonGroupProps>) {
  return <div className="flex gap-4">{children}</div>;
}
