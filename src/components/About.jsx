import { assets } from "../assets/assets";

function About() {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About 
        <span className="underline underline-offset-4 decoration-1 under font-light ml-2">
           Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md-gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className=" ml-10 flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">15+</p>
              <p>Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Ongoing projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            we believe that the floor is more than just a surface; its the
            foundation of your home or business. Our passion lies in providing
            exceptional flooring solutions that blend style, durability, and
            comfort.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
