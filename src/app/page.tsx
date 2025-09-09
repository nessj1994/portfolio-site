// import Image from "next/image";

import Bio from './components/atoms/Bio/Bio';
import Image from 'next/image';
import Navbar from './components/molecules/Navbar/Navbar';
import NameDisplay from './components/atoms/NameDisplay/NameDisplay';
import SocialPanel from './components/molecules/SocialPanel/SocialPanel';
import TitleDisplay from './components/atoms/TitleDisplay/TitleDisplay';
import CursorFollower from './components/atoms/CursorFollower/CursorFollower';
import ProjectDisplay from './components/molecules/ProjectDisplay/ProjectDisplay';
import ResumeButton from './components/atoms/ResumeButton/ResumeButton';

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen bg-gray-900 scroll-mt-5 px-6">
      <CursorFollower />
      {/* <Navbar /> */}
      <div className="flex justify-evenly gap-12">
        <div
          id="header"
          className="flex flex-col max-h-screen top-0 sticky py-24"
        >
          <div
            id="about-container"
            className="flex flex-col md:flex-row h-screen justify-center md:justify-evenly mx-8 gap-32 items-center"
          >
            <div
              id="profile"
              className="flex flex-col gap-8 md:h-full min-w-72 "
            >
              <div>
                <NameDisplay />
                <TitleDisplay title={'Software Engineer'} />
              </div>
              <span className="text-wrap max-w-md">
                A full stack engineer with a passion for bringing ideas to life
                on screen with clean scalable code
              </span>
              <div
                id="avatar-container"
                className="justify-center hidden md:flex flex-col mx-auto "
              >
                <Image
                  src="/images/avatar.jpg"
                  alt="Jordan Ness"
                  sizes="auto"
                  className="rounded-full shadow-md hidden md:flex"
                  width={400}
                  height={400}
                />
              </div>
              <div id="social-container" className="w-full mt-16 ">
                <SocialPanel />
              </div>
            </div>
          </div>
        </div>
        <div id="main" className="flex flex-col py-24">
          <Bio />
          <ResumeButton />
          {/* <div id="projects" className=" flex flex-col ">
              <div className=" mt-14 mx-8 flex flex-col gap-10 z-2"> */}
          <div className="flex flex-col gap-4">
            <span className="text-white text-2xl font-bold">Projects</span>
            <ProjectDisplay />
          </div>
          {/* </div>
            </div> */}
          {/* <span className="text-white text-5xl font-bold">Contact</span> */}
        </div>
      </div>
    </div>
  );
}
