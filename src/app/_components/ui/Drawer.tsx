interface DrawerProps {}

export default function Drawer({ children }: React.PropsWithChildren<DrawerProps>) {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 max-h-[65%] w-full z-30 bg-white rounded-t-2xl p-4 overflow-y-scroll">
        <div className="flex flex-col gap-5 pt-4">{children}</div>
      </div>
    </>
  );
}
