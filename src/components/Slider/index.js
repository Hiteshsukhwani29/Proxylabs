import Carousel from "react-bootstrap/Carousel";
import nextIcon from "../../assets/stats.png";
import pevIcon from "../../assets/logo.png";
import { ArrowCircleLeft } from "heroicons-react";
import { ArrowCircleRight } from "heroicons-react";

function Slider() {
  return (
    <Carousel
      className="!h-96 !w-[44rem] shadow-2xl"
      nextLabel=""
      prevLabel=""
      nextIcon={<ArrowCircleRight />}
      prevIcon={<ArrowCircleLeft />}
      slide={false}
    >
      <Carousel.Item interval={10000} className="">
        <img
          className="d-block w-[100%] !h-[100%] !rounded-lg"
          src="https://firebasestorage.googleapis.com/v0/b/proxylabs-webapp.appspot.com/o/temp_images%2Fp1.png?alt=media&token=88b42452-d45a-4ba1-981d-a618be4b3a3c"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={10000} className="">
        <img
          className="d-block w-[100%] !h-[100%] !rounded-lg"
          src="https://firebasestorage.googleapis.com/v0/b/proxylabs-webapp.appspot.com/o/temp_images%2Fp2.png?alt=media&token=845e6af3-06fa-4d40-bcc6-069591e865d3"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
