import axios from '../../axios';
import workService from '../../services/work';

const works = {
    state : {
        works: []
    },
    mutations: {
        ADD_WORK(state, work){
            state.works.push(work);
        },
        SET_WORKS(state, works){
            state.works = works;
        },
        UPDATE_WORK(state, updatedWork){
            //todo handle update better and potential unmatch
            var work = state.works.filter(x => x.id === updatedWork.id)[0];
            
            Object.keys(work).forEach( item => {
                work[item] = updatedWork[item];
            });
            
        },
        DELETE_WORK(state, workId){
            state.works = state.works.filter(x => x.id !== workId);
        }
    },
    actions: {
        async addWork({commit}, newWork) {
            //validation here. size and file type
            const formData = new FormData();
            const loftSchoolWork = workService.workToLoftSchoolWork(newWork);
            
            Object.keys(loftSchoolWork).forEach( item => {
                formData.append(item, loftSchoolWork[item]);
            });

            try{
                const {data} = await axios.post(`/works`, formData);
                const work = workService.loftSchoolWorkTowork(data);
                commit("ADD_WORK", {work});
            } catch(error) {
                console.log(error);
            }
        },
        async deleteWork({commit}, workId) {
            
            try{
                await axios.delete(`/works/${workId}`);
                commit("DELETE_WORK", workId);
            } catch(error) {
                console.log(error);
            }
        },
        async updateWork({commit}, updatedWork) {
            const formData = new FormData();
            const loftSchoolWork = workService.workToLoftSchoolWork(updatedWork);
            
            Object.keys(loftSchoolWork).forEach( item => {
                formData.append(item, loftSchoolWork[item]);
            })

            try{
                const {data} = await axios.post(`/works/${updatedWork.id}`, formData);
                const work = workService.loftSchoolWorkTowork(data.work);
                commit("UPDATE_WORK", work);
            } catch(error) {
                console.log(error);
            }
        },
        async fetchWorks({commit}, userId) {
            try {
                const { data } = await axios.get(`/works/${userId}`);
                const works = data.map(loftSchoolWork => workService.loftSchoolWorkTowork(loftSchoolWork));
                commit("SET_WORKS", works);
            } catch(error) {
                console.log(error);
            }
        }
    },
    getters: {}
}

export default works;