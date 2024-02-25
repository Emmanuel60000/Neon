import Image from "next/image";
export default function Section3() {
    return (
      <div className="lg:flex lg:justify-center lg:items-center lg:mb-16 lg:mt-16 lg:gap-20">
        <div className="mt-16 ml-5">
          <div><Image src="/logo1.png" alt="" width={100} height={50}/></div>
          <h3 className="text-black dark:text-white text-4xl font-semibold mt-4">Scalable</h3>
          <p className="text-black dark:text-white text-xl mt-4 lg:w-72 lg:text-base">
            Compute scales dynamically to ensure you're ready for peak hours.
          </p>
        </div>
  
        <div className="mt-16 ml-5">
          <div><Image src="/logo2.png" alt="" width={100} height={50}/></div>
          <h3 className="text-black dark:text-white text-4xl font-semibold mt-4">
            Cost efficient
          </h3>
          <p className="text-black dark:text-white text-xl mt-4 lg:w-72 lg:text-base">
            Compute scales to zero and cold storage offloads to S3 for cost
            efficiency.
          </p>
        </div>
  
        <div className="mt-16 ml-5 mb-16 lg:mb-0">
          <div><Image src="/logo3.png" alt="" width={100} height={50}/></div>
          <h3 className="text-black dark:text-white text-4xl font-semibold mt-4">Easy to use</h3>
          <p className="text-black dark:text-white text-xl mt-4 lg:w-72 lg:text-base">
            Create a fully managed serverless Postgres instance in seconds.{" "}
          </p>
        </div>
      </div>
    );
  }