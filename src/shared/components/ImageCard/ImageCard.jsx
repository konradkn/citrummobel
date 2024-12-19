import "./ImageCard.css";

const ImageCard = ({ imgClass }) => {
  return (
    <>
      <div className={`bg-slate-200 w-full h-96 p-4 rounded-3xl mb-1 ${imgClass}`}>
        <div className=" h-full"></div>
      </div>
    </>
  );
};

export default ImageCard;
