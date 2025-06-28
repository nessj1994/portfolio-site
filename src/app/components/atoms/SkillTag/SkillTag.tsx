
const SkillTag = (props: {tag: string}) =>{
    return (<div className="text-white bg-highlight-200 w-24 h-8 rounded-full flex flex-row justify-center items-center self-end opacity-80 shadow">
        {props.tag}
    </div>)
}

export default SkillTag;