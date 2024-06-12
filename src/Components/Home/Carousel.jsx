import { Carousel } from "@material-tailwind/react";

const Carousels = () => {
    return (
        <Carousel loop={true} autoplay={true} className="mt-10 rounded-xl h-[600px]">
          <img
            src="./carousel1.jpg"
            alt="image 1"
            className="h-full w-full object-cover object-center"
          />
          <img
            src="carousel2.jpg"
            alt="image 2"
            className="h-full w-full object-cover object-center"
          />
          <img
            src="carousel3.jpg"
            className="h-full w-full object-cover object-center"
          />
           <img
            src="carousel4.jpg"
            className="h-full w-full object-cover object-center"
          />
        </Carousel>
      );
};

export default Carousels;