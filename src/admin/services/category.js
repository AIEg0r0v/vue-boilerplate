import skillService from './skill';

const categoryService = {
    categoryToLoftSchoolCategory(category){
        let loftSchoolCategory = {
            id: category.id,
            title: category.name
        };
        return loftSchoolCategory;
    },

    loftSchoolCategoryToCategory(loftSchoolCategory){
        let category = {
            id: loftSchoolCategory.id,
            name: loftSchoolCategory.category,
            skills: loftSchoolCategory.skills.map(skill => skillService.loftSchoolskillToSkill(skill))
        };
        return category;
    }
};

export default categoryService;