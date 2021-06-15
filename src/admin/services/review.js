const reviewService = {
    reviewToLoftSchoolReview(review){
        let loftSchoolReview = {
            id: review.id,
            author: review.reviewer.name,
            occ: review.reviewer.title,
            photo: review.reviewer.avatar,
            text: review.text
        };
        return loftSchoolReview;
    },

    loftSchoolreviewToReview(loftSchoolReview){
        let review = {
            id: loftSchoolReview.id,
            reviewer: {
                name: loftSchoolReview.author,
                title: loftSchoolReview.occ,
                avatar: loftSchoolReview.photo,
            },
            text: loftSchoolReview.text
        };
        return review;
    }
};

export default reviewService;