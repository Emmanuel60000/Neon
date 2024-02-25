import Section from "@/components/Section";
import Section2 from "@/components/Section2";
import Navbar from "@/components/Navbar";
import Notification from "@/components/Notification";
import Section3 from "@/components/Section3";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <Notification />
        <Navbar />
      </header>

      <main>
        <Section/>
        <Section2 />
        <Section3/>
      </main>
    </div>
  );
}
