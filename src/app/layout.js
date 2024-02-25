import { Inter } from "next/font/google";
import "./globals.css";
import DarkMode from "@/Script/DarkMode";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" id="html">
      <body className="bg-white dark:bg-darkScreen">
        {children}
        <DarkMode />
      </body>
    </html>
  );
}