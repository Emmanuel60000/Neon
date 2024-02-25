"use client";


import { useEffect } from "react";

const DarkMode= () => {
  useEffect(() => {
    const page = document.getElementById("html");
    const darkModeButton = document.getElementById("darkModeButton");
    const lightModeButton = document.getElementById("lightModeButton");

    const toggleDarkMode = () => {
      page.classList.toggle("dark");
      darkModeButton.style.display = page.classList.contains("dark")
        ? "none"
        : "block";
      lightModeButton.style.display = page.classList.contains("dark")
        ? "block"
        : "none";
    };

    darkModeButton.addEventListener("click", toggleDarkMode);
    lightModeButton.addEventListener("click", toggleDarkMode);

    return () => {
      darkModeButton.removeEventListener("click", toggleDarkMode);
      lightModeButton.removeEventListener("click", toggleDarkMode);
    };
  }, []); 

  return null; 
};

export default DarkMode;
