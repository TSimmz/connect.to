import { Header, Carousel, Drawer, Category, Button, ButtonGroup } from './_components/ui';
import ButtonCard from './_components/ui/ButtonCard';

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
      <Drawer>
        <Category name="Category 1">
          <Button>Button 1</Button>
          <ButtonGroup>
            <ButtonCard
              itemName="Shop Item 1"
              itemPrice="$50.00"
              href="/"
              imageSrc="/Tye_and_Rach.jpg"
            />
            <ButtonCard
              itemName="Shop Item 2"
              itemPrice="$50.00"
              href="/"
              imageSrc="/Tye_and_Rach.jpg"
            />
          </ButtonGroup>
          <ButtonGroup>
            <ButtonCard
              itemName="Shop Item 1"
              itemPrice="$50.00"
              href="/"
              imageSrc="/Tye_and_Rach.jpg"
            />
            <ButtonCard
              itemName="Shop Item 2"
              itemPrice="$50.00"
              href="/"
              imageSrc="/Tye_and_Rach.jpg"
            />
          </ButtonGroup>
        </Category>
        <Category name="Category 2">
          <Button>Button 1</Button>
        </Category>
      </Drawer>
    </main>
  );
}
