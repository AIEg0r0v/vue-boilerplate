import Vue from "vue";


Vue.component('workPreview', {
    template: "#work-preview",
    data() {
        return {
            works: []
        }
    },
    created(){
    }
});

Vue.component('workThumbs', {
    template: "#work-thumbs",
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
    created(){
    }
});

Vue.component('workTags', {
    template: '#work-tags',
    // props: [tags],
    data() {
        return {
            tags: []
        }
    },
    created(){
        this.tags = [];
    }
});

Vue.component('workInfo', {
    template: '#work-info',
    props: ["work"],
    data() {
        return {
            work: {
                tags: [],
                title: 'test',
                description: 'descriptions'
            }
        }
    },
    created(){
    }
});

const works = new Vue({
    template: "#works-list",
    data() {
        return {
            works: []
        }
    },
    created(){
        this.works = require('../data/works.json')
    }
});

works.$mount('#works-component')
