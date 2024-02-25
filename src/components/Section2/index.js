export default function Section2() {
  return (

    
    <div className="flex flex-col justify-center items-center mt-20">
      <h2 className="text-4xl text-black dark:text-white font-bold lg:text-6xl">
        Made for developers
      </h2>
      <p className="mt-4 text-black dark:text-white lg:text-xl ">
        Launch serverless Postgres with a single command
      </p>

      <div className="relative flex flex-col justify-center items-center  pr-10 mt-16 w-full ">
        <div className="absolute w-[330px] lg:w-[710px] rounded-full bg-yellow-500 top-3 pl-5 z-1  h-10 lg:h-16"></div>
        <div className=" bg-white w-80 lg:w-[700px] rounded-full z-0 border-4 border-black  h-10 lg:h-16 lg:flex lg:justify-end  lg:items-center">
          <p className="text-center ">$ psql -h pg.neon.tech</p>
          <button className="hidden lg:flex justify-center items-center rounded-full ml-44 mr-5 bg-black text-white h-10 w-20 lg:hover:bg-gray-800  ">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
