import axios from '../../axios';
import workService from '../../services/work';
import regeneratorRuntime from "regenerator-runtime";

const about = {
    state : {
        works: []
    },
    mutations: {
        addWork(state, work){
            state.works.push(work);
        },
        ADD_WORK(state, work){
            state.works.push(work);
        },
        SET_WORKS(state, works){
            state.works = works;
        },
        updateWork(state, work){
            var updatedWork = state.works.filter(x => x.id === work.id);
            updatedWork = {...work};
        },
        deleteWork(state, workId){
            state.works = state.works.filter(x => x.id !== workId);
        },
        loadWorks(state, userId) {
            axios.get(`/works/${userId}`).then(response => {
                let loftSchoolWorks = response.data;
                state.works = loftSchoolWorks.map( 
                    loftSchoolWork => workService.loftSchoolWorkTowork(loftSchoolWork));
            });
        },
    },
    actions: {
        async addEventListener({commit}, newWork) {
            try{
                const {data} = await this.$axios.post("/works");
                commit("ADD_WORK", {data});
            } catch(error) {
                console.log("error");
            }
        },

        async fetch({commit}) {
            try {
                const userId = window.localStorage.getItem('userId');
                const { data } = await this.$axios.get(`works/${userId}`);
                commit("SET_WORKS", data);
            } catch(error) {
                console.log("error");
            }
        }
    },
    getters: {}
}

export default about;