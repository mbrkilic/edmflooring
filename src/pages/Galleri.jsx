import { useState } from "react";
import { assets } from "../assets/assets";

function ImageZoom(src) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div className="">
      <img
        src={src.src}
        alt=""
        className={`h-auto max-w-full rounded-lg object-contain cursor-pointer ${ // h-full'dü
          isExpanded ? "fixed z-10 top-0 left-0 right-0 bottom-0 m-auto max-w-[1200px] max-h-[600px] " : ""
        }`}
        onClick={handleImageClick}
      />
    </div>
  );
}

function Galleri() {
  return (
    <div className="container mx-auto py-4 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden">
      <h1 className="mt-20 text-2xl sm:text-4xl font-bold text-center">
        Gallery
      </h1>
      <p className=" text-center mb-10">yaptığımız bazı işler</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <ImageZoom src={assets.floor1} />
          <ImageZoom src={assets.floor2} />
          <ImageZoom src={assets.floor3} />
          
        </div>
        <div className="grid gap-4">
          
          <ImageZoom src={assets.floor4} />
          <ImageZoom src={assets.floor5} />
          <ImageZoom src={assets.floor6} />
            
        </div>
        <div className="grid gap-4">
          
          <ImageZoom src={assets.floor7} />
          <ImageZoom src={assets.floor8} />
          <ImageZoom src={assets.floor9} />
            
        </div>
        <div className="grid gap-4">
          
          <ImageZoom src={assets.floor10} />
          <ImageZoom src={assets.floor11} />
          <ImageZoom src={assets.floor12} />
            
        </div>
      </div>
    </div>
  );
}

export default Galleri;
