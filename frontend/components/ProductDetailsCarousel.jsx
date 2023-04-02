import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";


const ProductDetailsCarousel = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
        <Carousel
        infiniteLoop={true}
        thumbWidth={60}
        className="productCarousel"
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
            return <div onClick={clickHandler} className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90">
                <BiArrowBack className="text-sm md:text-lg" />
            </div>
        }}
        renderArrowNext={(clickHandler, hasPrev) => {
            return <div onClick={clickHandler} className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90">
                <BiArrowBack className="rotate-180 text-sm md:text-lg" />
            </div>
        }}
      >
        {
          images.map((img) => {
            return <img key={img.attributes.name} src={img.attributes.url} alt={img.attributes.name} />
          })
        }
      </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel