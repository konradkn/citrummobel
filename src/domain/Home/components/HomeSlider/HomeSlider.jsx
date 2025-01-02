

const HomeSlider = ({ img1, img2, img3, img4}) => {
  return (
    <>
      <div className="bg-slate-800 w-full h-96 rounded-3xl carousel">
        <div className="carousel-item w-full">
          <img src={img1} />
        </div>
        <div className="carousel-item w-full">
          <img src={img2} />
        </div>
        <div className="carousel-item w-full">
          <img src={img3} />
        </div>
        <div className="carousel-item w-full">
          <img src={img4} />
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
