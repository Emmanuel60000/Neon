import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-[#1A1A1A] flex justify-between items-center px-4 py-3.5 mx-auto max-w-screen-xl">
      <div className="w-32">
        <Image src="/neon.svg" alt="" width={100} height={50} />
      </div>

      <div className="grid grid-cols-2">
        <div className="hidden lg:grid">
          <ul className="flex gap-10">
            <li>
              <a
                href="#"
                className="text-white text-lg lg:hover:text-[#1AFFB2] lg:duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg lg:hover:text-[#1AFFB2] lg:duration-200"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg lg:hover:text-[#1AFFB2] lg:duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg lg:hover:text-[#1AFFB2] lg:duration-200"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg lg:hover:text-[#1AFFB2] lg:duration-200"
              >
                Company
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:grid">
          <ul className="flex gap-4 items-center justify-end">
            <li className="flex">
              <button id="darkModeButton" className=" text-white hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-moon"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                </svg>
              </button>
              <button id="lightModeButton" className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-brightness-high-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              </button>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 36 36"
                  width="20"
                  height="20"
                  className="text-white lg:hover:text-[#1AFFB2] lg:duration-200"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M18 .45c-9.9 0-18 8.1-18 18 0 7.988 5.175 14.738 12.262 17.1.9.113 1.238-.337 1.238-.9v-3.037c-5.063 1.125-6.075-2.363-6.075-2.363-.787-2.025-2.025-2.587-2.025-2.587-1.688-1.125.112-1.125.112-1.125 1.8.112 2.813 1.8 2.813 1.8 1.575 2.7 4.163 1.912 5.288 1.462a3.884 3.884 0 0 1 1.125-2.362c-4.05-.45-8.213-2.025-8.213-8.888 0-1.912.675-3.6 1.8-4.837-.225-.45-.787-2.25.225-4.725 0 0 1.462-.45 4.95 1.8 1.463-.45 2.925-.563 4.5-.563 1.575 0 3.038.225 4.5.563 3.488-2.363 4.95-1.913 4.95-1.913 1.012 2.475.338 4.275.225 4.725 1.125 1.238 1.8 2.813 1.8 4.838 0 6.862-4.163 8.437-8.213 8.887.675.563 1.238 1.688 1.238 3.375v4.95c0 .45.337 1.013 1.238.9C30.825 33.188 36 26.438 36 18.45c0-9.9-8.1-18-18-18Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <button className="text-white border-2 border-slate-700  w-20 lg:w-24 h-8 lg:h-10 rounded-full lg:hover:border-white lg:duration-200">
                  Log In
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className=" font-medium bg-[#00E599] w-20 lg:w-24 h-8 lg:h-10 rounded-full text-white dark:text-black lg:hover:bg-[#1AFFB2] lg:duration-200">
                  Sign Up
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-5 w-5 lg:hidden">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 18L20 18"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M4 12L20 12"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M4 6L20 6"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
}
