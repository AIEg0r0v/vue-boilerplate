import Vue from "vue";

Vue.component('quote', {
   template: "#quote",
   props: ["review"] 
});


Vue.component('reviewer', {
    template: "#reviewer",
    props: ["reviewer"] 
 });

const works = new Vue({
    template: "#reviews-list",
    data() {
        return {
            reviews: []
        }
    },
    computed:{

    },
    watch:{

    },
    methods: {
        updateImagesPath(reviews){
            return reviews.map(review => {
                const imagePath = require(`../images/content/${review.reviewer.avatar}`).default;
                review.reviewer.avatar = imagePath;
                return review
            })
        }
    },
    created(){
        const reviews = require("../data/reviews.json");
        this.reviews = this.updateImagesPath(reviews);
    },
    mounted() {
        console.log(this.reviews);
    }
});

works.$mount('#reviews-component')
