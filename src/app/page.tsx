import Link from 'next/link';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#F694C6] to-[#C62D70] text-white p-5">
      <div className="max-w-[430px] w-full mx-auto border-black border-2">
        <div id="upper-section">
          <h1 className="text-4xl font-primary">Krystal Jennings</h1>
          <p className="text-base font-primary font-light mt-0.5 mb-5">
            Description of connect links
          </p>
        </div>
      </div>
    </main>
  );
}
