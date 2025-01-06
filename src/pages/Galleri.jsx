import { assets } from "../assets/assets";

function Galleri() {
  return (
    <div className="container mx-auto py-4 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden">
      <h1 className="mt-20 text-2xl sm:text-4xl font-bold text-center">
        Gallery
      </h1>
      <p className=" text-center mb-10">yaptığımız bazı işler</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src={assets.floor1}
              alt=""
            />
          </div>
          
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src={assets.floor2}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src={assets.floor3}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src={assets.floor4}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src={assets.floor5}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src={assets.floor6}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src={assets.floor7}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src={assets.floor8}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src={assets.floor9}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src={assets.floor10}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src={assets.floor11}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg"
              src={assets.floor12}
              alt=""
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galleri;
