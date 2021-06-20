import skillService from './skill';

const categoryService = {
    categoryToLoftSchoolCategory(category){
        console.log("categoryToLoftSchoolCategory");
        console.log(category);
        let loftSchoolCategory = {
            id: category.id,
            title: category.name
        };
        console.log(loftSchoolCategory);
        return loftSchoolCategory;
    },

    loftSchoolCategoryToCategory(loftSchoolCategory){
        console.log("loftSchoolCategoryToCategory");

        console.log(loftSchoolCategory);
        let category = {
            id: loftSchoolCategory.id,
            name: loftSchoolCategory.category,
            skills: loftSchoolCategory.skills.map(skill => skillService.loftSchoolskillToSkill(skill))
        };
        console.log(category);
        return category;
    }
};

export default categoryService;