const skillService = {
    skillToLoftSchoolSkill(skill){
        let loftSchoolSkill = {
            percent: skill.value,
            title: skill.name
        };
        return loftSchoolSkill;
    },

    loftSchoolskillToSkill(loftSchoolSkill){
        let skill = {
            id: loftSchoolSkill.id,
            value: loftSchoolSkill.percent,
            name: loftSchoolSkill.title
        };
        return skill;
    }
};

export default skillService;