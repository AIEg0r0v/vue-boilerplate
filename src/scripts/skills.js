import Vue from "vue";
import {store} from '../admin/store/index';
import { mapState, mapMutations } from "vuex";

const serverUrl = 'https://webdev-api.loftschool.com';

const skills = new Vue({
    template: "#skills-list",
    store,
    data() {
        return {
        }
    },
    computed:{
        ...mapState({
            categories: state => state.about.categories,
            userid: state => 463
        })
               
    },
    methods:{
        ...mapMutations(["loadCategories"]),
    },
    async created(){
        this.loadCategories(this.userid);
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
