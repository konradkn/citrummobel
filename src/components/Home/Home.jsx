// css
import "./Home.css";

// hooks
import { useState } from "react";

// components
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import HomeSlider from "../HomeSlider/HomeSlider";

// assets carousel
import kitchen1 from "../../assets/home_images/kitchen_5.jpg";
import kitchen2 from "../../assets/home_images/kitchen_6.jpg";
import kitchen3 from "../../assets/home_images/kitchen_7.jpg";
import kitchen4 from "../../assets/home_images/kitchen_8.jpg";

// assets icons
import swipeDown from "../../assets/icons/swipe-down.png";
import whatsApp from "../../assets/icons/whatsapp.png";

const phoneNumber = "";
const message = "Hola, me gustaría información sobre una cocina :)";

const handleWARedirect = () => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
};

const Home = () => {
  return (
    <>
      <NavBar />

      <div className="p-3">
        <div className="bg-slate-200 w-full h-96 main-img"></div>
        <div
          className="bg-slate-200 w-full h-96 p-4 mb-1 flex items-center"
          style={{
            borderBottomLeftRadius: "4rem",
            borderBottomRightRadius: "4rem",
          }}
        >
          <div className="h-full">
            <h2 className="text-3xl text-black font-bold">
              La mejor cocina a tu alcance
            </h2>
            <p className="pt-4 text-slate-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              tempore inventore quam dolores exercitationem ducimus aliquam
              debitis aperiam, blanditiis ex voluptatibus repellat facere
              delectus, similique quia ullam optio necessitatibus. Adipisci.
            </p>
          </div>
        </div>

        <div className="w-full h-32 flex justify-center items-end animate-bounce opacity-50">
          <div className="flex justify-center items-center swipe-down-icon">
            <img src={swipeDown} className="w-10" />
          </div>
        </div>
        <HomeSlider
          img1={kitchen1}
          img2={kitchen2}
          img3={kitchen3}
          img4={kitchen4}
        />

        <div className="bg-slate-200 w-full h-96 p-4 rounded-3xl mb-1">
          <div className="h-full">
            <p className="pt-4 text-slate-800 p-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              tempore inventore quam dolores exercitationem ducimus aliquam
              debitis aperiam, blanditiis ex voluptatibus repellat facere
              delectus, similique quia ullam optio necessitatibus. Adipisci.
            </p>
            <div className="w-full flex justify-center items-center">
              <div
                className="bg-teal-700 rounded-3xl w-20 h-20 flex justify-center items-center animate-pulse"
                onClick={handleWARedirect}
              >
                <img src={whatsApp} className="w-10 " />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-200 w-full h-96 p-4 rounded-3xl mb-1 secondary-img-1">
          <div className=" h-full"></div>
        </div>
        <div className="bg-slate-200 w-full h-96 p-4 rounded-3xl mb-1 secondary-img-2">
          <div className=" h-full"></div>
        </div>

        <div
          className="bg-slate-200 w-full h-96 p-4 mb-1 flex items-center"
          style={{
            borderBottomLeftRadius: "4rem",
            borderBottomRightRadius: "4rem",
          }}
        >
          <div className="h-full">
            <h2 className="text-3xl font-bold">La mejor cocina a tu alcance</h2>
            <p className="pt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              tempore inventore quam dolores exercitationem ducimus aliquam
              debitis aperiam, blanditiis ex voluptatibus repellat facere
              delectus, similique quia ullam optio necessitatibus. Adipisci.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
