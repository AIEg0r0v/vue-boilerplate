import reviewService from '../../services/review';
import axios from '../../axios';

const reviews = {
    state : {
        reviews: []
    },
    mutations: {
        ADD_REVIEW(state, review){
            state.reviews.push(review);
        },
        SET_REVIEWS(state, reviews){
            state.reviews = reviews;
        },
        UPDATE_REVIEW(state, updatedReview){
            //todo handle update better and potential unmatch
            var review = state.reviews.filter(x => x.id === updatedReviews.id)[0];
            Object.keys(review).forEach( item => {
                review[item] = updatedReview[item];
            });
        },
        DELETE_REVIEW(state, reviewId){
            state.reviews = state.reviews.filter(x => x.id !== reviewId);
        }
    },
    actions: {
        async addReview({commit}, newReview) {
            //validation here. size and file type
            const formData = new FormData();
            const loftSchoolReview = reviewService.reviewToLoftSchoolReview(newReview);
            
            Object.keys(loftSchoolReview).forEach( item => {
                formData.append(item, loftSchoolReview[item]);
            });

            try{
                const {data} = await axios.post(`/reviews`, formData);
                const review = reviewService.loftSchoolReviewToReview(data);
                commit("ADD_REVIEW", {review});
            } catch(error) {
                console.log(error);
            }
        },
        async deleteReview({commit}, reviewId) {
            
            try{
                await axios.delete(`/reviews/${reviewId}`);
                commit("DELETE_REVIEW", reviewId);
            } catch(error) {
                console.log(error);
            }
        },
        async updateWork({commit}, updatedReview) {
            const formData = new FormData();
            const loftSchoolReview = reviewService.reviewToLoftSchoolReview(updatedReview);
            
            Object.keys(loftSchoolReview).forEach( item => {
                formData.append(item, loftSchoolReview[item]);
            })

            try{
                const {data} = await axios.post(`/reviews/${updatedReview.id}`, formData);
                const review = reviewService.loftSchoolReviewToReview(data.review);
                commit("UPDATE_REVIEW", review);
            } catch(error) {
                console.log(error);
            }
        },
        async fetchReviews({commit}, userId) {
            try {
                const { data } = await axios.get(`/reviews/${userId}`);
                const reviews = data.map(loftSchoolReview => reviewService.loftSchoolReviewToReview(loftSchoolReview));
                commit("SET_REVIEWS", reviews);
            } catch(error) {
                console.log(error);
            }
        }
    },
    getters: {}
}

export default reviews;