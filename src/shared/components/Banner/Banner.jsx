import "./Banner.css";

const Banner = ({ title, description, imgClass }) => {
  return (
    <>
      <div className="">
        <div className={`bg-slate-200 w-full h-96 ${imgClass} xl:rounded-t-3xl`}></div>
        <div
          className="bg-slate-200 w-full h-96 p-4 mb-1 flex items-center"
          style={{
            borderBottomLeftRadius: "4rem",
            borderBottomRightRadius: "4rem",
          }}
        >
          <div className="h-full">
            <h2 className="text-3xl text-black font-bold">{title}</h2>
            <p className="pt-4 text-slate-800">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
