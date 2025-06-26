// import Image from "next/image";

import Bio from './components/atoms/Bio/Bio';
import Image from 'next/image';
import Navbar from './components/molecules/Navbar/Navbar';
import NameDisplay from './components/atoms/NameDisplay/NameDisplay';
import SocialPanel from './components/molecules/SocialPanel/SocialPanel';
import TitleDisplay from './components/atoms/TitleDisplay/TitleDisplay';
import CursorFollower from './components/atoms/CursorFollower/CursorFollower';
import ProjectDisplay from './components/molecules/ProjectDisplay/ProjectDisplay';

export default function Home() {
  return (
    <div className="absolute min-h-screen min-w-full bg-gray-900 scroll-mt-5">
      <CursorFollower />
      <Navbar />
      <div className="flex flex-col min-h-full">
        <div
          id="about-container"
          className="flex md:flex-row flex-col h-screen justify-center md:justify-evenly mx-8 md:gap-32 items-center"
        >
          <div
            id="profile"
            className="flex flex-col h-full justify-center items-center gap-4 "
          >
            <div className="justify-center flex flex-1 flex-col items-start gap-4">
              <div>
                <NameDisplay />
                <TitleDisplay title={'Software Engineer'} />
              </div>
              <div
                id="profile-container"
                className="mb-0 rounded-full hidden  md:flex flex-col bg-gray-400"
              >
                <Image
                  src="/images/jordan-ness.jpg"
                  alt="Jordan Ness"
                  className="rounded-lg shadow-md "
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div
              id="social-container"
              className="flex justify-end mb-20 items-end"
            >
              <SocialPanel />
            </div>
          </div>
          <div className=" flex flex-col items-center gap-4 ">
            <Bio />
          </div>
        </div>
        <div id="projects" className="flex flex-col min-h-screen bg-white">
          <div className="mt-14 mx-4 flex flex-col gap-10">
            <span className="text-black text-5xl font-bold">Projects</span>
            <ProjectDisplay />
          </div>
        </div>
        <div id="contact" className="flex flex-col min-h-screen ">
          <div className="mt-14">Contact</div>
        </div>
      </div>
    </div>
  );
}
