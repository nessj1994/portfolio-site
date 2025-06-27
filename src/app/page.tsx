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
    <div className="absolute min-h-screen min-w-full bg-gray-900 scroll-mt-5">
      <CursorFollower />
      <Navbar />
      <div className="flex flex-col min-h-full">
        <div
          id="about-container"
          className="flex flex-col md:flex-row h-screen justify-center md:justify-evenly mx-8 gap-32 items-center"
        >
          <div
            id="profile"
            className="flex flex-col md:h-full items-center min-w-72 "
          >
            <div className="justify-center flex flex-1 flex-col items-start gap-8">
              <div>
                <NameDisplay />
                <TitleDisplay title={'Software Engineer'} />
              </div>
                <span className="text-wrap max-w-md">
                  A full stack engineer with a passion for bringing ideas to life on screen with clean scalable code
                </span>
              <div
                id="avatar-container"
                className="justify-center hidden md:flex flex-col mx-auto "
              >
                <Image
                  src="/images/avatar.jpg"
                  alt="Jordan Ness"
                  sizes='auto'
                  className="rounded-full shadow-md hidden md:flex"
                  width={400}
                  height={400}
                />
              </div>
            <div
              id="social-container"
              className="w-full mt-16 "
            >
              <SocialPanel />
            </div>
            </div>
          </div>
          <div className="flex flex-col">

          <Bio />
          <ResumeButton />
          </div>
        </div>
        <div id="projects" className="flex flex-col min-h-screen bg-gray-800">
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
