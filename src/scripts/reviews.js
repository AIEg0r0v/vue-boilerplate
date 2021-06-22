import Vue from "vue";
import Flickity from 'vue-flickity';
import {store} from '../admin/store/index';
import { mapState, mapActions } from "vuex";

const serverUrl = 'https://webdev-api.loftschool.com';

Vue.component('quote', {
   template: "#quote",
   props: ["review"] 
});


Vue.component('reviewer', {
    template: "#reviewer",
    props: ["reviewer"],
    computed: {
        avatar() {
            return `${serverUrl}/${this.reviewer.avatar}`;
        }
    }
 });

const works = new Vue({
    template: "#reviews-list",
    store,
    components: {
        Flickity
      },
    data() {
        return {
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
        ...mapState({
            reviews: state => state.reviews.reviews,
            userid: state => 463
        })
               
    },
    watch:{

    },
    methods: {
        ...mapActions(["fetchReviews"]),

        checkArrows(e){

            var selectedIndex = this.$refs.flickity.$flickity.selectedIndex;
            var maxIndex = this.reviews.length - 1;
            this.disabledNext = selectedIndex === maxIndex;
            this.disabledPrev = selectedIndex === 0;
            
        },
        
        next() {
            this.$refs.flickity.next();
          },
          
        previous() {
            this.$refs.flickity.previous();
        }
    },
    async created(){
        await this.fetchReviews(this.userid).then(() => this.$refs.flickity.rerender());
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
