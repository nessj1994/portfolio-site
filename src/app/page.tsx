// import Image from "next/image";

import Bio from './components/atoms/Bio/Bio';
import Navbar from './components/atoms/molecules/Navbar/Navbar';
import NameDisplay from './components/atoms/NameDisplay/NameDisplay';

export default function Home() {
  return (
    <div className="bg-cyan-700 min-h-screen scroll-mt-5">
      <div className="flex flex-row justify-center items-center h-12 backdrop-blur-md sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="m-8 gap-4 flex flex-col min-h-full">
        <NameDisplay />
        <Bio />
        <div
          id="projects"
          className="flex flex-col  min-h-[500px] scroll-mt-14"
        >
          Projects
        </div>
        <div id="contact" className="flex flex-col min-h-[500px]">
          Contact
        </div>
      </div>
    </div>
  );
}
