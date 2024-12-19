// css
import "./Home.css";

// hooks
import { useState } from "react";

// components
import NavBar from "../../../../shared/components/NavBar/NavBar";
import Footer from "../../../../shared/components/Footer/Footer";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import Card from "../../../../shared/components/Card/Card";
import Banner from "../../../../shared/components/Banner/Banner";
import ImageCard from "../../../../shared/components/ImageCard/ImageCard";
import IndicationItem from "../../../../shared/components/IndicationItem/IndicationItem";

// assets carousel
import kitchen1 from "../../../../assets/home_images/kitchen_5.jpg";
import kitchen2 from "../../../../assets/home_images/kitchen_6.jpg";
import kitchen3 from "../../../../assets/home_images/kitchen_7.jpg";
import kitchen4 from "../../../../assets/home_images/kitchen_8.jpg";

// assets icons
import swipeDown from "../../../../assets/icons/swipe-down.png";
import whatsApp from "../../../../assets/icons/whatsapp.png";

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
        <Banner
          title={"General title"}
          description={"description..."}
          imgClass={"main-img"}
        />

        <IndicationItem img={swipeDown} />
        <HomeSlider
          img1={kitchen1}
          img2={kitchen2}
          img3={kitchen3}
          img4={kitchen4}
        />

        <Card
          img={whatsApp}
          description={"description..."}
          onClick={handleWARedirect}
        />

        <ImageCard imgClass={"secondary-img-1"} />
        <ImageCard imgClass={"secondary-img-2"} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
