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
        loadWorks(state, works) {
            state.works = [...works];
        },
    }
}

export default about;