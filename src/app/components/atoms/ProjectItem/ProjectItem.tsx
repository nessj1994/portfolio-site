import SkillTag from '../SkillTag/SkillTag';
import { Project } from './projects';

const ProjectItem = (props: Project) => {
  const { title, description, image, link, tags } = props;

  return (
    <li className="mb-8">
      <div
        className={`group relative grid transition-all justify-between max-w-full grow hover:!opacity-100 group-hover/list:opacity-50 `}
      >
        <div className="absolute hidden z-0 -inset-4 lg:block rounded-sm transition group-hover:bg-slate-800/50 group-hover:drop-shadow-lg lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <div className="z-10 group-hover:text-highlight-100">
          <h2 className="text-md font-semibold">{props.title}</h2>
          <p className="text-sm group-hover:text-white">{props.description}</p>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start">
          {tags?.map((value) => (
            <SkillTag tag={value} />
          ))}
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
