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
        loadWorks(state, works) {
            state.works = [...works];
        }
    }
}

export default about;