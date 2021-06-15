import axios from '../../axios';
import categoryService from '../../services/category';
import skillService from '../../services/skill';

const about = {
    state : {
        categories: []
    },
    actions: {
        
    },
    getters: {},
    mutations: {

        addSkill(state, {categoryId, skill}) {
            console.log("addSkill mutation");

            console.log(categoryId, skill);
            
            var category = state.categories.filter( (c) => c.id === categoryId)[0];
            console.log(category);
            
            var loftSchoolskill = skillService.skillToLoftSchoolSkill(skill)
            loftSchoolskill.category = category.id;

            axios.post('/skills/', loftSchoolskill).then(response => {
                let createdLoftSchoolSkill = response.data;
                var createdSkill = skillService.loftSchoolskillToSkill(createdLoftSchoolSkill);
                category.skills.push(createdSkill);
            });
        },
        
        deleteSkill(state, {categoryId, id}) {
            console.log("onSkillDeleted");
            console.log(categoryId, id);
            var category = state.categories.filter( (c) => c.id === categoryId)[0];
            category.skills = category.skills.filter( (skill) => skill.id !== id );
        },

        updateSkill(state, {categoryId, skill}) {
            console.log("onSkillUpdated");
            console.log(categoryId, skill);
            var category = state.categories.filter( (c) => c.id === categoryId)[0];
            var skillToUpdate = category.skills.filter( (s) => s.id === skill.id)[0];
            skillToUpdate.name = skill.name;
            skillToUpdate.value = skill.value;
        },

        deleteCategory(state, categoryId) {
            console.log("onCategoryDeleted");
            console.log(categoryId);
            state.categories = state.categories.filter( (category) => category.id !== categoryId );
        },

        updateCategory(state, category) {
            console.log("onCategoryUpdated");
            console.log(category);
            var categoryToUpdate = state.categories.filter(c => c.id === category.id)[0];
            categoryToUpdate.name = category.name;
            categoryToUpdate.skills = category.skills;
        },

        addCategory(state){
            var newCategoryId = state.categories.map(x => x.id).reduce(
                (id, currentId) => {
                    var maxId = currentId >= id ?  currentId : id; return maxId
                }) + 1;

            state.categories.push({id:newCategoryId, skills:[]});
        },

        loadCategories(state, userId) {
            // state.categories = [...categories];
            console.log('requesting categories for user' + userId);
            axios.get(`/categories/${userId}`).then(response => {
                let loftSchoolCategories = response.data;
                state.categories = loftSchoolCategories.map(category => 
                    categoryService.loftSchoolCategoryToCategory(category));
            });
        }
    }
}

export default about;