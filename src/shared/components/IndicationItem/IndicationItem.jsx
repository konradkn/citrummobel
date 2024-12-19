import "./IndicationItem.css";

const IndicationItem = ({ img }) => {
  return (
    <>
      <div className="w-full h-32 flex justify-center items-end animate-bounce opacity-50 xl:w-1/3">
        <div className="flex justify-center items-center swipe-down-icon">
          <img src={img} className="w-10" />
        </div>
      </div>
    </>
  );
};

export default IndicationItem;
