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
            id = loftSchoolCategory.id,
            name = loftSchoolCategory.title,
            skills: []
        };

        return category;
    }
};

export default categoryService;