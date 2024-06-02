import usersall from "../Images/all.png";
import Users from "../Images/users.png";

const users = () => {
  return (
    <>
      <div className="w-[100vw] px-6 sm:pt-[5vh]">
        <div className="flex justify-center font-medium text-[14px] sm:text-[18px]">
          <h2 className="">TESTIMONIAL</h2>
        </div>
        <div className="flex justify-center font-bold text-[30px] sm:text-[44px]">
          <div className="flex-col">
            <h1 className="sm:hidden">What Our Users Say About Us?</h1>
            <h1 className="hidden sm:flex">What Our Users </h1>
            <h1 className="hidden sm:flex">Say About Us?</h1>
          </div>
        </div>
        <div className="flex justify-center leading-7 sm:px-96">
          <img className="hidden sm:flex" src={Users} alt="" />
          <div className="flex-col  sm:pt-[20vh]">
            <h2 className="text-[20px] font-semibold">
              The Best Financial Accounting App Ever!
            </h2>
            <p className="text-[14px] pt-2 text-gray-700">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
            <div className="flex justify-center">
              <img src={usersall} alt="" />
            </div>
            <h1 className="text-[14px] font-bold">Nick Jonas</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default users;
