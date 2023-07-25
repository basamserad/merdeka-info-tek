import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/bundle";
import "swiper/core";

function PortfolioCard() {
  const data = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "POS System for TechPro Solutions",
      description:
        "Our client, TechPro Solutions is a leading technology solutions company with a focus on empowering businesses through innovative software products. They have identified a growing demand for a versatile and modern POS system in the market, and they intend to capitalize on this opportunity.",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "BrewBean Website",
      description:
        "BrewBean is a well-established coffee shop chain with multiple locations across various cities. They pride themselves on sourcing ethically traded coffee beans and providing a warm and inviting ambiance for their customers. To further their reach and engage with a broader audience, BrewBean has decided to invest in an exceptional website that reflects their values and enhances the overall customer experience.",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "POS System for TechPro Solutions",
      description:
        "Our client, TechPro Solutions is a leading technology solutions company with a focus on empowering businesses through innovative software products. They have identified a growing demand for a versatile and modern POS system in the market, and they intend to capitalize on this opportunity.",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "BrewBean Website",
      description:
        "BrewBean is a well-established coffee shop chain with multiple locations across various cities. They pride themselves on sourcing ethically traded coffee beans and providing a warm and inviting ambiance for their customers. To further their reach and engage with a broader audience, BrewBean has decided to invest in an exceptional website that reflects their values and enhances the overall customer experience.",
    },
  ];

  return (
    <>
      {data.map((data) => (
        <a href="/" className="flex flex-col border border-gray-300 rounded-md max-h-max">
          <img src={data.image} alt={data.title} className="object-cover rounded-t-md h-52" />
          <div className="flex flex-col text-black p-4">
            <span className="font-semibold mb-2">{data.title}</span>
            <span>{data.description.substring(0, 120)}...</span>
          </div>
        </a>
      ))}
    </>
  );
}

export default PortfolioCard;
