'use client';
import React from 'react';
import ProjectItem from '../../atoms/ProjectItem/ProjectItem';
import { projects } from '../../atoms/ProjectItem/projects';

const ProjectDisplay = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="flex grow flex-col max-w-xl gap-4 min-w-full w-full">
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show Less' : 'Show More'}
      </button>
      <ul className="group/list">
        {projects.map((item, i) => {
          if (!expanded && i >= 4) return null;
          return <ProjectItem key={`project-${i}`} {...item} />;
        })}
      </ul>
    </div>
  );
};

export default ProjectDisplay;
