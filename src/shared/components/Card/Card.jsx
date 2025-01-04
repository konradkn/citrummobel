import "./Card.css";

const Card = ({ title, description, img, bgColor, textColor, responsiveHeight, onClick }) => {
  return (
    <>
      <div className={`bg-slate-200 ${bgColor ? bgColor : "bg-slate-200"} w-full p-4 rounded-3xl mb-1 ${responsiveHeight ? responsiveHeight : null}`}>
        <div className="h-full">
          <h2 className={`text-2xl font-bold pb-4 ${textColor ? textColor : "text-slate-950"}`}>{title}</h2>
          <p className={`pt-4 pb-4 ${textColor ? textColor : "text-slate-950"} `}>{description}</p>
          {img ? (
            <div className="w-full flex justify-center items-center">
            <div
              className="bg-teal-600 rounded-3xl w-20 h-20 flex justify-center items-center"
              onClick={onClick}
            >
              <img src={img} className="w-10 " />
            </div>
          </div>
          ) : null}
       
        </div>
      </div>
    </>
  );
};

export default Card;
