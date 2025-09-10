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
    <div className="lg:mx-auto min-h-screen bg-gray-900 scroll-mt-5 lg:px-6">
      <CursorFollower />
      {/* <Navbar /> */}
      <div className="flex flex-col mx-6 lg:flex-row lg:justify-evenly lg:gap-12 ">
        <div
          id="header"
          className="flex flex-col max-h-screen  top-0 lg:sticky pt-12 lg:py-24"
        >
          <div
            id="about-container"
            className="flex flex-col lg:flex-row lg:h-screen  lg:mx-8 gap-32 lg:items-center"
          >
            <div
              id="profile"
              className="flex grow flex-col lg:h-full min-w-72 "
            >
              <div className="flex flex-col self-start">
                <NameDisplay />
                <TitleDisplay title={'Software Engineer'} />
                <span className="text-wrap max-w-md text-sm text-slate-300">
                  A full stack engineer with a passion for bringing ideas to
                  life on screen with clean scalable code
                </span>
              </div>
              <div
                id="avatar-container"
                className="justify-center self-center hidden lg:flex flex-col flex-1 grow mx-auto"
              >
                <Image
                  src="/images/avatar.jpg"
                  alt="Jordan Ness"
                  sizes="auto"
                  className="rounded-full shadow-md hidden lg:flex"
                  width={400}
                  height={400}
                />
              </div>
              <div
                id="social-container"
                className="w-full mt-12 lg:mt-16 self-end flex"
              >
                <SocialPanel />
              </div>
            </div>
          </div>
        </div>
        <div id="main" className="flex flex-col lg:py-24">
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
