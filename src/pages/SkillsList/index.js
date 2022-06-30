import { SkillsListStyle } from './SkillsListStyles';

const SkillsList = ({ id, title, active, setSelectedSkills }) => {
  return (
    <SkillsListStyle>
        <div
        className={active ? "skillsList active" : "skillsList"}
        onClick={() => setSelectedSkills(id)}
        >
        {title}
        </div>
    </SkillsListStyle>
  );
}

export default SkillsList;
