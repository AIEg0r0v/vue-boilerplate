import Vue from "vue";


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
    data() {
        return {
            works: [],
            selectedIndex: 0
        }
    },
    computed:{
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
        makeInfiniteLoopForIndex(index){
            var maxIndexValue = this.works.length - 1;
            if(index < 0) this.selectedIndex = maxIndexValue;
            if(index > maxIndexValue) this.selectedIndex = 0;
        },
        updateImagesPath(works){
            return works.map(work => {
                const imagePath = require(`../images/content/${work.image}`).default;
                work.image = imagePath;
                return work
            })
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
        }
    },
    created(){
        var loadedWorks = require('../data/works.json')
        this.works = this.updateImagesPath(loadedWorks);
        this.selectedWork = this.works[this.selectedIndex];
    }
});

works.$mount('#works-component')
