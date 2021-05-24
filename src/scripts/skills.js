import Vue from "vue";


const skills = new Vue({
    template: "#skills-list",
    data() {
        return {
            categories: []
        }
    },
    created(){
        this.categories = require('../data/skills.json')
    }
})


Vue.component('skills-category', {
    props: ["category"],
    template: '#skills-category',
    data() {
        return {
        }
    },
    created(){
    }
});

Vue.component('skill', {
    props: ["skill"],
    template: '#skill',
    data() {
        return {
            style: "stroke-dashoffset: 110"
        }
    },
    created(){
        const  skillLevelDashOffset = 251 - 251*(this.skill.value / 100);
        this.style = `stroke-dashoffset: ${skillLevelDashOffset}`;
    }
});

skills.$mount('#skills-component')
