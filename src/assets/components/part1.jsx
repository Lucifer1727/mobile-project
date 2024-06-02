import "./css/part1.css";
import image from "../Images/pink.png";
// import vector from "../Images/Vector 1.png";
import play from "../Images/play.png";
import ribbon from "../Images/ribbon.png";

const part1 = () => {
  return (
    <>
      <div className="relative sm:px-96">
        <img className="overlap image" src={image} alt="" />
        <div className=" mt-8 p-4 overlap ">
          <div className="font-bold text-[50px] sm:hidden">
            <h1 className="">Make</h1>
            <h1>TheBest</h1>
            <h1>Financial</h1>
            <h1>Decisions</h1>
          </div>
          <div className="font-bold text-[64px] hidden sm:flex sm:flex-col">
            <h1>MakeTheBest</h1>
            <h1>FinancialDecisions</h1>
          </div>
          <div>
            <p className="text-[10px] font-medium text-gray-700 sm:hidden">
              Cum Et Convallis Risus Placerat Aliquam,Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipscing Sociis ArcuLorem Porttitor
            </p>
            <p className="text-[18px] font-medium text-gray-700 hidden sm:flex">
              Cum Et Convallis Risus Placerat Aliquam,Nunc. Scelerisque Aliquet{" "}
              <br /> Faucibus Tincidunt Eu Adipscing Sociis ArcuLorem Porttitor
            </p>
          </div>
          <div className="sm:flex gap-8 font-medium text-[18px] pt-4 sm:pt-8">
            <button className="bg-black text-white w-[180px] h-[60px]">
              Get Started
            </button>
            <a
              className="flex gap-2 h-[60px] w-[180px] py-4"
              href="https://www.loom.com/share/1735f90b5e464089935cd1dff4fca2b8?sid=ca423c04-d553-4631-97d7-fb84aa1766b6"
              target="_blank"
            >
              <img src={play} alt="" /> Watch Video
            </a>
          </div>
          <img className="hidden sm:flex" src={ribbon} alt="" />
        </div>
      </div>
    </>
  );
};

export default part1;
