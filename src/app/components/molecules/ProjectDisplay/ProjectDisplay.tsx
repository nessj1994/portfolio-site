'use client';
import React from 'react';
import ProjectItem from '../../atoms/ProjectItem/ProjectItem';
import { projects } from '../../atoms/ProjectItem/projects';
import next from 'next';

const ProjectDisplay = () => {
  const displaySpeed = 200; // milliseconds between showing each project
  const [visibleProjects, setVisibleProjects] = React.useState(
    projects.slice(0, 4),
  );
  const [expanded, setExpanded] = React.useState(false);

  const handleShowMore = () => {
    if (!expanded) {
      let nextIndex = visibleProjects.length;

      if (nextIndex >= projects.length) return;

      setExpanded(!expanded);
      const showNext = () => {
        setVisibleProjects((currDisplayed) => [
          ...currDisplayed,
          projects[nextIndex],
        ]);

        nextIndex++;

        if (nextIndex < projects.length) {
          setTimeout(showNext, displaySpeed);
        }
      };

      showNext();
    } else {
      setVisibleProjects(projects.slice(0, 4));
    }

    setExpanded(!expanded);
  };

  return (
    <div className="flex grow flex-col max-w-xl gap-4 min-w-full w-full ">
      <ul className="group/list transition-all duration-300 mt-2">
        {visibleProjects.map((item, i) => {
          return <ProjectItem key={`project-${i}`} {...item} />;
        })}
      </ul>
      <button onClick={handleShowMore}>
        {expanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default ProjectDisplay;
