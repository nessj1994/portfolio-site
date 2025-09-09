const SkillTag = (props: { tag: string }) => {
  return (
    <div className="text-white text-xs bg-highlight-200 px-4 h-6 mt-4 rounded-full flex flex-row justify-center items-center opacity-80 shadow">
      {props.tag}
    </div>
  );
};

export default SkillTag;
