import { Header, Carousel, Drawer } from './_components/ui';

export default async function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-[#F694C6] to-[#C62D70] text-white relative">
      <div className="max-w-[430px] w-full mx-5 mt-5">
        {/* Upper Section */}
        <div className="flex flex-col px-5">
          <Header name="Krystal Jennings" description="Description of connect links" />

          {/* Picture Carousel */}
          <Carousel />
        </div>
      </div>

      {/* Main Connect body */}
      <Drawer />
    </main>
  );
}
