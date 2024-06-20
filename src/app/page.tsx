import classNames from 'classnames';
import Link from 'next/link';

export default async function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-[#F694C6] to-[#C62D70] text-white">
      <div className="max-w-[430px] w-full mx-5 mt-5">
        {/* Upper Section */}
        <div className="flex flex-col px-5">
          <h1 className="text-4xl font-primary">Krystal Jennings</h1>
          <p className="text-base font-primary font-light mt-0.5 mb-5">
            Description of connect links
          </p>

          {/* Picture Carousel */}
          <div className="relative w-full h-[150px] flex justify-center">
            {new Array(5).fill(5).map((_, index) => (
              <div
                key={index}
                className={classNames('absolute transform rounded-md overflow-hidden shadow-2xl', {
                  '-translate-x-[80%] z-0': index === 0,
                  '-translate-x-[40%] z-10': index === 1,
                  'z-20 text-center': index === 2,
                  'translate-x-[40%] text-right z-10': index === 3,
                  'translate-x-[80%] text-right z-0': index === 4,
                })}
              >
                <div className="h-[150px] w-[150px] bg-slate-600 p-3 ">{index}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Main Connect body */}
      <div className="max-w-[430px] w-full bg-white rounded-t-2xl mt-8 p-4">
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
    </main>
  );
}
