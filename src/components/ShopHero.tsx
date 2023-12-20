import { Link } from "react-scroll";

const ShopHero = () => {
  return (
    <div className="w-full bg-[url('/shop.jpeg')] bg-cover bg-no-repeat bg-center h-[500px] mt-[70px] flex items-center  px-4 lg:px-[70px] space-x-7">
      <article className="text-white lg:w-3/5 flex flex-col items-start gap-y-10">
        <p className="font-bold">WELCOME TO ATIWA BITTERS</p>
        <h2 className=" text-[25px] lg:text-[37px] leading-[30px] lg:leading-[50px] font-semibold uppercase">
          laugh with each sip and let the good times roll
        </h2>
        <Link to="products" smooth={true} duration={500}>
          <button className="bg-green-500 py-3 px-8 hover:bg-black transition-all font-bold uppercase">
            SHOP NOW
          </button>
        </Link>
      </article>
    </div>
  );
};

export default ShopHero;
