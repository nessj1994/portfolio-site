interface ProjectItemProps {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  tags?: string[];
  size: number;
}

const ProjectItem = (props: ProjectItemProps) => {
  const { title, description, image, link, tags, size } = props;

  const sizes = [
    'col-span-1',
    'col-span-2',
    'col-span-3',
    'col-span-4',
    'col-span-5',
    'col-span-6',
    'col-span-7',
    'col-span-8',
    'col-span-9',
    'col-span-10',
    'col-span-11',
    'col-span-12',
  ];
  console.log(`Project Item ${title} with size ${size}`);
  return (
    <div
      className={` flex flex-col h-48 ${sizes[size]} bg-gray-500 rounded-lg shadow-md `}
    >
      <h2 className="text-xl font-semibold">{props.title}</h2>
    </div>
  );
};

export default ProjectItem;
