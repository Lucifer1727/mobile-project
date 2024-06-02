import logo from "../Images/Group.png";
import star from "../Images/Star 1.png";
const Navbar = () => {
  return (
    <>
      <nav className="bg-transparent flex place-content-between sm:px-[20vw] w-[100vw] px-2 pt-4">
        <div className="sm:flex gap-14">
          <div className="flex gap-8">
            <img href="#" className=" pb-4 pt-2" src={logo} alt="" />
            <button className="bg-black text-white sm:text-[18px] sm:hidden font-medium p-2 h-fit mt-2 rounded-[10px]">
              DOWNLOAD
            </button>
          </div>
          <div className="flex gap-2 leading-7 font-[Clash Display'] sm:pt-2 sm:text-[20px]">
            <a href="#" className="text-[#FF5555]  font-bold">
              Home
            </a>
            <a href="" className=" sm:w-fit font-medium">
              About Us
            </a>
            <a href="" className="font-medium">
              Pricing
            </a>
            <a href="" className="font-medium">
              Features
            </a>
          </div>
        </div>
        <div className="flex gap-8">
          <button className="hidden rounded-[4px] sm:flex bg-black text-white text-[18px] h-[60px] w-[180px] font-medium justify-center py-4">
            DOWNLOAD
          </button>
          <img className="hidden sm:flex" src={star} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
