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
            var category = state.categories.filter( (c) => c.id === categoryId)[0];

            var loftSchoolskill = skillService.skillToLoftSchoolSkill(skill)
            loftSchoolskill.category = category.id;

            axios.post('/skills/', loftSchoolskill).then(response => {
                let createdLoftSchoolSkill = response.data;
                var createdSkill = skillService.loftSchoolskillToSkill(createdLoftSchoolSkill);
                category.skills.push(createdSkill);
            });
        },
        
        deleteSkill(state, {categoryId, id}) {
            axios.delete(`/skills/${id}`).then(response => {
                var category = state.categories.filter( (c) => c.id === categoryId)[0];
                category.skills = category.skills.filter( (skill) => skill.id !== id );
            });
        },

        updateSkill(state, {categoryId, skill}) {
            var category = state.categories.filter( (c) => c.id === categoryId)[0];
            var skillToUpdate = category.skills.filter( (s) => s.id === skill.id)[0];
            skillToUpdate.name = skill.name;
            skillToUpdate.value = skill.value;
            
            var updatedLoftSchoolSkill = skillService.skillToLoftSchoolSkill(skill);
            updatedLoftSchoolSkill.category = categoryId;

            axios.post(`/skills/${skill.id}`, updatedLoftSchoolSkill).then(response => {
                skillToUpdate.name = skill.name;
                skillToUpdate.value = skill.value;
            });
        },

        deleteCategory(state, categoryId) {
            axios.delete(`/categories/${categoryId}`).then(response => {
                state.categories = state.categories.filter( (category) => category.id !== categoryId );
            });
        },

        updateCategory(state, category) {
            var categoryToUpdate = state.categories.filter(c => c.id === category.id)[0];
            categoryToUpdate.name = category.name;
            categoryToUpdate.skills = category.skills;

            axios.post(`/categories/${category.id}?title=${category.name}`).then(response => {
                categoryToUpdate.name = category.name;
            });
        },

        addCategory(state){
            const tempName = 'Category Placeholder name';
            axios.post(`/categories?title=${tempName}`).then(response => {
                state.categories.push({id:response.data.id, name:tempName, skills:[]}); 
            });
        },

        loadCategories(state, userId) {
            axios.get(`/categories/${userId}`).then(response => {
                let loftSchoolCategories = response.data;
                state.categories = loftSchoolCategories.map(category => 
                    categoryService.loftSchoolCategoryToCategory(category));
            });
        }
    }
}

export default about;