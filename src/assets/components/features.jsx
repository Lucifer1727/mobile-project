import star from "../Images/star.png";
import cube1 from "../Images/cube.png";
import cube2 from "../Images/cube2.png";
import bell from "../Images/bell.png";
import covstar from "../Images/st.png";
import phone from "../Images/phone2.png";
const features = () => {
  return (
    <>
      <div className="sm:px-96 px-4">
        <div className="flex">
          <img className="hidden sm:flex" src={phone} alt="" />
          <div className="sm:py-[25vh]">
            <h2 className="sm:text-[18px] text-[14px] font-medium text-[#ff5555]">
              FEATURES
            </h2>
            <h1 className="text-[44px] font-bold">Uifry Premium</h1>
            <div>
              <div className="flex gap-4 font-semibold text-[14px]">
                <img src={star} alt="" />
                <h2>Budget Intervals</h2>
              </div>
              <p className="text-[10px] font-medium text-gray-700 sm:hidden">
                `` Cum Et Convallis Risus Placerat Aliquam,Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipscing Sociis ArcuLorem
                Porttitor
              </p>
              <p className="text-[18px] font-medium text-gray-700 hidden sm:flex">
                Cum Et Convallis Risus Placerat Aliquam,Nunc. Scelerisque
                Aliquet <br /> Faucibus Tincidunt Eu Adipscing Sociis ArcuLorem
                Porttitor
              </p>
            </div>
            <div>
              <div className="flex gap-4 font-semibold text-[14px]">
                <img src={cube1} alt="" />
                <h2>Budget Intervals</h2>
              </div>
              <p className="text-[10px] font-medium text-gray-700 sm:hidden">
                Cum Et Convallis Risus Placerat Aliquam,Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipscing Sociis ArcuLorem
                Porttitor
              </p>
              <p className="text-[18px] font-medium text-gray-700 hidden sm:flex">
                Cum Et Convallis Risus Placerat Aliquam,Nunc. Scelerisque
                Aliquet <br /> Faucibus Tincidunt Eu Adipscing Sociis ArcuLorem
                Porttitor
              </p>
            </div>
            <div>
              <div className="flex gap-4 font-semibold text-[14px]">
                <img src={cube2} alt="" />
                <h2>Budget Intervals</h2>
              </div>
              <p className="text-[10px] font-medium text-gray-700 sm:hidden">
                Cum Et Convallis Risus Placerat Aliquam,Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipscing Sociis ArcuLorem
                Porttitor
              </p>
              <p className="text-[18px] font-medium text-gray-700 hidden sm:flex">
                Cum Et Convallis Risus Placerat Aliquam,Nunc. Scelerisque
                Aliquet <br /> Faucibus Tincidunt Eu Adipscing Sociis ArcuLorem
                Porttitor
              </p>
            </div>
          </div>
          <img src="" alt="" />
        </div>
        <div className="pt-6">
          <h2 className="sm:text-[18px] text-[14px] w-fit font-medium text-[#ff5555]">
            ADVANTAGES
          </h2>
          <div className="flex">
            <div>
              <h1 className="text-[44px] font-bold">Why Choose Uifry</h1>
              <div className="flex gap-4">
                <img src={bell} alt="" />
                <h2 className="font-semibold text-[18px] pt-2">
                  Clever Notifications
                </h2>
              </div>
              <p className="text-[10px] font-medium text-gray-700 sm:hidden pt-2">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
              <p className="text-[18px] font-medium text-gray-700 hidden sm:flex">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                <br /> ultricies. In ultrices malesuada elit mauris etiam odio.
                Duis <br /> tristique lacus, et blandit viverra nisl velit. Sed
                mattis <br /> rhoncus, diam suspendisse sit nunc, gravida eu.
                Lectus eget eget <br /> ac dolor neque lorem sapien, suspendisse
                aliquam.
              </p>
            </div>
            <img className="mt-[-290px] hidden sm:flex" src={phone} alt="" />
          </div>
          <div className="flex">
            <img className="mt-[-290px] hidden sm:flex" src={phone} alt="" />
            <div>
              <div className="flex gap-4">
                <img src={covstar} alt="" />
                <h2 className="font-semibold text-[18px] pt-2">
                  Fully Customizable
                </h2>
              </div>
              <p className="text-[10px] font-medium text-gray-700 sm:hidden pt-2">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
              <p className="text-[18px] font-medium text-gray-700 hidden sm:flex">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                <br /> ultricies. In ultrices malesuada elit mauris etiam odio.
                Duis <br /> tristique lacus, et blandit viverra nisl velit. Sed
                mattis <br /> rhoncus, diam suspendisse sit nunc, gravida eu.
                Lectus eget eget <br /> ac dolor neque lorem sapien, suspendisse
                aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default features;
