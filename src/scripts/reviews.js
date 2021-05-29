import Vue from "vue";
import Flickity from 'vue-flickity';
 


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
    components: {
        Flickity
      },
    data() {
        return {
            reviews: [],
            flickityOptions: {
                initialIndex: 3,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: true
                
                // any options from Flickity can be used
              }
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
        },
        next() {
            this.$refs.flickity.next();
          },
          
        previous() {
        this.$refs.flickity.previous();
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
