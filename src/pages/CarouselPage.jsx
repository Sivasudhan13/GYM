import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselPage = () => {
  return (
    <div className="h-500px">
      <div className="max-w-[800px]  mx-auto   mt-8  ">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          transitionTime={600}
        >
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661589429776-d0518e576de9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Resistance Band"
            />
            <p className="legend">Resistance Band</p>
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661589429776-d0518e576de9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dumbbells"
            />
            <p className="legend">Dumbbells</p>
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661589429776-d0518e576de9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="ZMA"
            />
            <p className="legend">ZMA Recovery Supplement</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselPage;
