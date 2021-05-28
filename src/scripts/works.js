import Vue from "vue";


Vue.component('workPreview', {
    template: "#work-preview",
    props: ["currentWork", "works"],
    data() {
        return {
        }
    },
    methods: {
        nextSlide(){
            this.$emit("nextSlide");
            console.log("next >");
        },
        prevSlide(){
            this.$emit("prevSlide");
            console.log("prev >");
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
            works: []
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
        nextSlide(){
            this.$emit("nextSlide");
            console.log("next");
        },
        prevSlide(){
            this.$emit("prevSlide");
            console.log("prev");
        }
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
            // work: {
            //     tags: [],
            //     title: 'test',
            //     description: 'descriptions'
            // }
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
            selectedWork: {},
            selectedIndex: 0
        }
    },
    methods: {
        updateImagesPath(works){
            return works.map(work => {
                const imagePath = require(`../images/content/${work.image}`).default;
                work.image = imagePath;
                return work
            })
        },
        nextSlide(){
            var maxIndex = this.works.length - 1;
            this.selectedIndex = this.selectedIndex === maxIndex 
                ? maxIndex 
                : this.selectedIndex + 1;
                
                console.log(this.selectedIndex);
                this.selectedWork = this.works[this.selectedIndex];
        },
        prevSlide(){
            
            this.selectedIndex = this.selectedIndex === 0 
                ? 0 
                : this.selectedIndex - 1;
                console.log(this.selectedIndex);
                this.selectedWork = this.works[this.selectedIndex];
        }
    },
    created(){
        var loadedWorks = require('../data/works.json')
        this.works = this.updateImagesPath(loadedWorks);
        this.selectedWork = this.works[this.selectedIndex];
    }
});

works.$mount('#works-component')
