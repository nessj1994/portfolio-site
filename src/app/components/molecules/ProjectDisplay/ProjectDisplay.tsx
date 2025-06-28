import ProjectItem, { ProjectItemProps } from '../../atoms/ProjectItem/ProjectItem';



const Projects: Array<ProjectItemProps> = [
  {
    title: "Porter Dealer Portal",
    description: "A tool to help our project managers and dealers create and manage quotes",
    tags: ["React", "JavaScript", "TypeScript", "NextJS", "Docker"],
    size: 1,
  },
  {
    title: "Litania REST API",
    description: "A custom REST API to manage data for our tools and allow integration with our ERP software",
    tags: ["Python", "Django", "MS SQL"],
    size: 1,
  },
  {
    title: "Untitled Visual Novel",
    description: "A work in progress game idea made in Unity with C#",
    tags: ["C#", "Unity"],
    size: 1
  }
]

const ProjectDisplay = () => {
const COLUMN_COUNT = 5;

  let currentCol = 0;
  let currentRow = 0;

  return (
    <div className="grid grid-cols-5 gap-4">
      {Projects.map((item, i) => {
        const isEvenRow = currentRow % 2 === 0;
        const span = isEvenRow ? (i % 2 === 0 ? 3 : 2) : i % 2 === 0 ? 2 : 3;
        const isLast = i === 5 - 1;

        let colSpan = span;

        // If the span would overflow this row, wrap to the next
        if (currentCol + colSpan >= COLUMN_COUNT) {
          currentRow++;
          currentCol = 0;
        }

        if (isLast && currentCol + span < COLUMN_COUNT) {
          // Fill the rest of the row
          colSpan = COLUMN_COUNT - currentCol;
        }

        currentCol = (currentCol + span) % COLUMN_COUNT;

        return (
            
          <ProjectItem
            key={`project-${i}`}
            {...item}
            size={colSpan - 1}
          />
        );
      })}
    </div>
  );
};

export default ProjectDisplay;
