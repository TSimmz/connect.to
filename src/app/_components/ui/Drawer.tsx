import Link from 'next/link';

interface DrawerProps {}

export default function Drawer({}: DrawerProps) {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 max-h-[80%] w-full bg-white rounded-t-2xl p-4">
        <div className="mb-5">
          <h2 className="text-lg font-secondary text-[#C62D70] font-medium mb-2">Category 1</h2>
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="w-full h-[64px] flex justify-center items-center rounded-lg bg-[#F694C6] bg-opacity-50 text-[#C62D70]"
            >
              Button 1
            </Link>
            <Link
              href="/"
              className="w-full h-[64px] flex justify-center items-center rounded-lg bg-[#F694C6] bg-opacity-50 text-[#C62D70]"
            >
              Button 2
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
