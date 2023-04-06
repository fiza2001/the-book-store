import React from "react";
import "./Slider.css";
import SimpleImageSlider from "react-simple-image-slider";

// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const images = [
    {url: "https://assets3.thrillist.com/v1/image/3105764/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"},
    {url: "https://assets.vogue.com/photos/594830328ba2821cdbcb950f/master/w_1600%2Cc_limit/01-best-new-york-city-bookstores.jpg"},
    {url: "https://cdn.create.vista.com/downloads/8543930c-528a-45cc-862a-9b7ecf338e69_1024.jpeg"},
    {url: "https://images.indianexpress.com/2019/09/nerdy-cafe-759.jpg"}
];
    

export default function Slider() {
    return (
    
    <div className="slider">
          <SimpleImageSlider
        width={800}
        height={600}
        images={images}
        autoPlay={true}
        autoPlayDelay={1.6}
      />
   </div>
  
    )
        
      
  
}
