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
                initialIndex: 4,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false
                
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
            console.log("next");
            this.$refs.flickity.next();
          },
          
        previous() {
            
            console.log("previous");
            this.$refs.flickity.previous();
        }
    },
    created(){
        const reviews = require("../data/reviews.json");
        this.reviews = this.updateImagesPath(reviews);
    },
    mounted() {
        console.log(this.reviews);
        console.log(this.$refs.flickity);
    }
});

works.$mount('#reviews-component')
