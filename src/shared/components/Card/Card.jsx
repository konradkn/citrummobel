import "./Card.css";

const Card = ({ description, img, onClick }) => {
  return (
    <>
      <div className="bg-slate-200 w-full h-96 p-4 rounded-3xl mb-1">
        <div className="h-full">
          <p className="pt-4 text-slate-800 p-4">{description}</p>
          <div className="w-full flex justify-center items-center">
            <div
              className="bg-teal-700 rounded-3xl w-20 h-20 flex justify-center items-center animate-pulse"
              onClick={onClick}
            >
              <img src={img} className="w-10 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
