import Vue from "vue";
import { mapState, mapActions } from "vuex";
import {store} from '../admin/store/index';

const serverUrl = 'https://webdev-api.loftschool.com';

Vue.component('workPreview', {
    template: "#work-preview",
    props: ["currentWork", "works", "selectedIndex"],
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
        cover() {
            return `${serverUrl}/${this.currentWork.image}`;
        },
        reversedWorks(){
            return [...this.works].slice(0,4).reverse();
        }
    },
    created(){
    },
    mounted(){
        // this.currentWork = this.works[0];
    }
});

Vue.component('workThumbs', {
    template: "#work-thumbs",
    props: ["currentWork", "works"],
    data() {
        return {
        }
    },
    methods: {
        cover(workImage) {
            return `${serverUrl}/${workImage}`;
        }, 
    },
    created(){
    }
});

Vue.component('work', {
    props: ["work"],
    template: '#work',
    
    data() {
        return {
            selected: false
        }
    },
    created(){
    }
});
Vue.component('workBtns', {
    template: '#work-btns',
    
    data() {
        return {
        }
    },
    methods: {
    },
    created(){
    }
});

Vue.component('workTags', {
    template: '#work-tags',
    props: ["tags"],
    data() {
        return {

        }
    },
    created(){

    }
});

Vue.component('workInfo', {
    template: '#work-info',
    props: ["work"],
    data() {
        return {
    
        }
    },
    created(){
    }
});

const works = new Vue({
    template: "#works-list",
    store,
    data() {
        return {
            selectedIndex: 0,
            dataLoaded: false,
        }
    },
    computed:{
        ...mapState({
            works: state => state.works.works,
            userid: state => 463
        }),

        selectedWork(){
            return this.works[0];
        }
    },
    watch:{
        selectedIndex(value){
            this.makeInfiniteLoopForIndex(value);
        }
    },
    methods: {

        ...mapActions(["fetchWorks"]),

        makeInfiniteLoopForIndex(index){
            var maxIndexValue = this.works.length - 1;
            if(index < 0) this.selectedIndex = maxIndexValue;
            if(index > maxIndexValue) this.selectedIndex = 0;
        },
        
        nextSlide(){
            this.works.push(this.works[0]);
            this.works.shift();
            this.selectedIndex++;
        },
        prevSlide(){
            const lastItem = this.works[this.works.length - 1];
            this.works.unshift(lastItem);
            this.works.pop();
            this.selectedIndex--;
        },
        setCurrent(work){
            while(this.works[0] !== work)
            {
                this.nextSlide();
            }
        }
    },
    async created(){
        await this.fetchWorks(this.userid).then(() => {
            console.log("finished loading");
            this.dataLoaded = true;
        });
    }
});

works.$mount('#works-component')
