import axios from '../../axios';
import skillService from '../../services/skill';
import categoryService from '../../services/category';

const about = {
    state : {
        works: []
    },
    actions: {
        
    },
    getters: {},
    mutations: {
        addWork(state, work){
            state.works.push(work);
        },
        updateWork(state, work){
            var updatedWork = state.works.filter(x => x.id === work.id);
            updatedWork = {...work};
        },
        deleteWork(state, workId){
            state.works = state.works.filter(x => x.id !== workId);
        },
        loadWorks(state, userId) {
            // state.works = [...works];
            axios.get(`/categories/${userId}`).then(response => {
                let loftSchoolCategories = response.data;
                state.works = categoryService.loftSchoolCategoryToCategory(loftSchoolCategories);
            });
        },
    }
}

export default about;