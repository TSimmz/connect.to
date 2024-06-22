import classNames from 'classnames';
import Image from 'next/image';

interface CarouselProps {}

export default function Carousel({}: CarouselProps) {
  return (
    <>
      <div className="relative w-full h-[150px] flex justify-center px-4">
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
            <div className="h-[150px] w-[150px] bg-slate-600 overflow-hidden">
              <Image
                fill={true}
                src="/Tye_and_Rach.jpg"
                alt="Test Picture"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
