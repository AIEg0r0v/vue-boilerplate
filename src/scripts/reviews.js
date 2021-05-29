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
            disabledNext: false,
            disabledPrev: true,
            flickityOptions: {
                initialIndex: 0,
                groupCells: 1,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false,
                adaptiveHeight: true,
                cellAlign: 'left'
                
                // any options from Flickity can be used
              }
        }
    },
    computed:{

    },
    watch:{

    },
    methods: {
        checkArrows(e){

            var selectedIndex = this.$refs.flickity.$flickity.selectedIndex;
            var maxIndex = this.reviews.length - 1;
            this.disabledNext = selectedIndex === maxIndex;
            this.disabledPrev = selectedIndex === 0;
            
        },
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
        let context = this;
        this.$refs.flickity.on("change", function(_) {
            context.disabledNext = this.selectedIndex === context.reviews.length - 1;
            context.disabledPrev = this.selectedIndex === 0;
        });
    }
});

works.$mount('#reviews-component')
