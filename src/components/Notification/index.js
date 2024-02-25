export default function Notification() {
  return (
    <div className="flex bg-[#00E599] lg:hover:bg-[#1AFFB2] lg:duration-200 justify-center px-4 py-3 items-center gap-6">
      <p className="flex gap-1 w-80 lg:w-96">
        <span className="text-xs lg:text-[10px] flex items-center text-white dark:text-black">
          AU
        </span>
        <span className="text-sm  lg:text-[14px] font-medium truncate text-white dark:text-black">
          Hello Australia! Sydney region is officially live on Neon.
        </span>
      </p>
      <p className="lg:flex lg:justify-center lg:items-center">
        {" "}
        <span className="hidden lg:flex lg:text-[14px] text-white dark:text-black">
          Sign Up
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="10"
          fill="none"
          viewBox="0 0 16 10"
          class="ml-1 text-white dark:text-black"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M11 .727 15.272 5 11 9.273 9.727 8l2.1-2.1H.1V4.1h11.727L9.727 2 11 .727Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </p>
    </div>
  );
}
