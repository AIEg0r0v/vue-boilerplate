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

            var skillIds = state.categories.map( x => x.skills).flat().map( x => x.id);
            var lastId = skillIds.reduce((id, currentId) => {var maxId = currentId >= id ?  currentId : id; return maxId});
            skill.id = lastId + 1;
            
            category.skills.push(skill);
        },
        loadCategories(state, categories) {
            state.categories = [...categories];
        }
    }
}

export default about;