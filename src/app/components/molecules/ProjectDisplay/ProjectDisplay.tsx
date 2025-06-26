import ProjectItem from '../../atoms/ProjectItem/ProjectItem';

const ProjectDisplay = () => {
  const COLUMN_COUNT = 5;

  let currentCol = 0;
  let currentRow = 0;

  return (
    <div className="grid grid-cols-5 gap-4">
      {[0, 1, 2, 3, 4].map((item, i) => {
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
            size={colSpan - 1}
            title={`Project ${i + 1}`}
          />
        );
      })}
    </div>
  );
};

export default ProjectDisplay;
