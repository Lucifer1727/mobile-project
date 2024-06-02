import logo from "../Images/logosm.png";
import mail from "../Images/mail.png";
import tele from "../Images/telephone.png";
import foot from "../Images/Frame1.png";
import "./css/footer.css";
const footer = () => {
  return (
    <>
      <div className="sm:px-96 hidden sm:flex justify-center mt-28">
        <div className="w-[60vw] flex gap-28 mangal">
          <ul className="font-medium text-[16px]">
            <li>
              <img src={logo} alt="" />
            </li>
            <li className="flex w-fit">
              <img src={mail} alt="" />
              <a href="mailto:help@frybix.com">help@frybix.com</a>
            </li>
            <li className="flex w-fit">
              <img src={tele} alt="" />
              <a href="tel:+1 234 456 678 89">+1 234 456 678 89</a>
            </li>
          </ul>
          <ul>
            <h2 className="text-[32px] font-medium">Links</h2>
            <li>Home</li>
            <li>About Us</li>
            <li>Bookings</li>
            <li>Blog</li>
          </ul>
          <ul>
            <h2 className="text-[32px] font-medium">Legal</h2>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
          <ul>
            <h2 className="text-[32px] font-medium">Product</h2>
            <li>Take Tour</li>
            <li>Live Chat</li>
            <li>Reviews</li>
          </ul>
          <ul>
            <h2 className="text-[32px] font-medium">Newsletter</h2>
            <li>Stay Up To Date</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <button className="bg-black w-[160px] h-[61px] ml-[25vw] text-white">
          Subscribe
        </button>
      </div>
      <div className=" sm:hidden grid grid-flow-col grid-cols-1 grid-rows-6 mt-10 place-items-center">
        <div className="border-b-2">
          <img src={logo} alt="" />
          <a href="mailto:Help@Frybix.Com">Help@Frybix.Com</a>
          <br />
          <a href="tel:+1 234 456 678 89">+1 234 456 678 89</a>
        </div>
        <div className="flex gap-4">
          <div className="border-b-2">
            <ul className="">
              <h1 className="text-[32px] font-medium">Links</h1>
              <li>Home</li>
              <li>About Us</li>
              <li>Bookings</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="border-b-2">
            <ul className="">
              <h1 className="text-[32px] font-medium">Legal</h1>
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="border-b-2">
          <ul className="">
            <h1 className="text-[32px] font-medium">Product</h1>
            <li>Take Tour</li>
            <li>Live Chat</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="border-b-2">
          <ul className="">
            <h1 className="text-[32px] font-medium">Newsletter</h1>
            <li>Stay Up To Date</li>
          </ul>
        </div>
      </div>
      <img className=" hidden sm:flex sm:ml-[20vw]" src={foot} alt="" />
    </>
  );
};

export default footer;
