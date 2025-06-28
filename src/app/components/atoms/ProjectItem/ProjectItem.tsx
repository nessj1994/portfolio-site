import SkillTag from '../SkillTag/SkillTag';

export type Tag = "JavaScript" | "TypeScript" | "React" | "NextJS" | "Python" | "Django" | "Docker" | "MS SQL" | "C++" | "C#" | "Unity" | "Unreal Engine"

export interface ProjectItemProps {
  title: string;
  description?: string;
  image?: string;
  link?: string;
  tags?: Tag[];
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
      className={`flex flex-col h-64 ${sizes[size]} bg-gray-800 rounded-lg shadow-sm p-4 justify-between shadow-gray-600 hover:bg-gray-700`}
    >
      <div>
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        {tags?.map((value) => (
          <SkillTag tag={value} />
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
