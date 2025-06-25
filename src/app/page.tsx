// import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Bio from './components/atoms/Bio/Bio';
import Navbar from './components/atoms/molecules/Navbar/Navbar';
import NameDisplay from './components/atoms/NameDisplay/NameDisplay';
import ProjectItem from './components/atoms/ProjectItem/ProjectItem';
import SocialPanel from './components/atoms/molecules/SocialPanel/SocialPanel';
import SocialLink from './components/atoms/SocialLink/SocialLink';
const bskyIcon: IconProp = 'fa-brands fa-bluesky';

export default function Home() {
  return (
    <div className="bg-cyan-700 min-h-screen scroll-mt-5">
      <Navbar />
      <div className="m-8 flex flex-col min-h-full gap-24 ">
        <div className="flex gap-4 flex-col min-h-screen">
          <div className="flex flex-col justify-start align-start">
            <NameDisplay />
            <Bio />
            <SocialPanel />
          </div>

        </div>
        <div id="projects" className="flex flex-col  min-h-screen scroll-mt-14">
          <span>Projects</span>
          <div className="m-4 flex flex-row flex-wrap gap-4 justify-center items-center">
            {[0, 1, 2, 3, 4].map((item, idx) => (
              // eslint-disable-next-line react/jsx-key
              <ProjectItem key={`project-${idx}`} />
            ))}
          </div>
        </div>
        <div id="contact" className="flex flex-col min-h-screen scroll-mt-14">
          Contact
        </div>
      </div>
    </div>
  );
}
