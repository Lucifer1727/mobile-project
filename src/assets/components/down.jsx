import iphone from "../Images/iPhone 13 Pro.png";
import apple from "../Images/apple.png";

const down = () => {
  return (
    <>
      <div className=" sm:px-96 pt-8">
        <div className="sm:bg-black sm:text-white pl-2 flex justify-center">
          <div className="sm:hidden">
            <h1 className="font-bold text-[44px] px-4">
              Ready To Get Started ?
            </h1>
            <img src={iphone} alt="" />
            <button className="bg-black text-white font-medium ml-10 mt-4 w-[180px] h-[60px]">
              Download App
            </button>
          </div>
        </div>
        <div className="bg-black ml-[135px] w-[50vw] rounded-[8px] text-white ">
          <div className="hidden sm:flex justify-end">
            <div className="">
              <h1 className="font-bold text-[44px] pt-[100px]">
                Ready TO Get Started ?
              </h1>
              <p className="text-[18px]">
                Risus habitant leo egestas mauris diam eget morbi tempus <br />
                vulputate.
              </p>
              <button className="bg-white text-black place-content-between flex text-[18px] font-medium mt-4 w-[208px] h-[60px] px-6 pt-2">
                <h1 className="mt-2">Download App</h1>{" "}
                <img src={apple} alt="" />
              </button>
            </div>
            <img className="" src={iphone} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default down;
