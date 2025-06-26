// import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Bio from './components/atoms/Bio/Bio';
import Navbar from './components/molecules/Navbar/Navbar';
import NameDisplay from './components/atoms/NameDisplay/NameDisplay';
import ProjectItem from './components/atoms/ProjectItem/ProjectItem';
import SocialPanel from './components/molecules/SocialPanel/SocialPanel';
import SocialLink from './components/atoms/SocialLink/SocialLink';
import TitleDisplay from './components/atoms/TitleDisplay/TitleDisplay';
import CursorFollower from './components/atoms/CursorFollower/CursorFollower';
import ProjectDisplay from './components/molecules/ProjectDisplay/ProjectDisplay';
const bskyIcon: IconProp = 'fa-brands fa-bluesky';

export default function Home() {
  return (
    <div className="absolute min-h-screen min-w-full bg-gray-900 scroll-mt-5">
      <CursorFollower />
      <Navbar />
      <div className="flex flex-col min-h-full gap-24 ">
        <div className="flex flex-row min-h-screen justify-evenly items-center">
          <div className="flex flex-col justify-start items-center  ">
            <NameDisplay />
            <TitleDisplay title={'Software Engineer'} />
            <div className="grow bg-blue-500 ">
              <SocialPanel />
            </div>
          </div>
          <div className="">
            <Bio />
          </div>
        </div>
        <div id="projects" className="flex flex-col min-h-screen bg-white">
          <div className="mt-14 mx-4">
            <span>Projects</span>
            <ProjectDisplay />
          </div>
        </div>
        <div id="contact" className="flex flex-col min-h-screen scroll-mt-14">
          Contact
        </div>
      </div>
    </div>
  );
}
