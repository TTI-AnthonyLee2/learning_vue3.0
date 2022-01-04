const app = Vue.createApp({
    data(){
        return {
            goal:'finish Vue3.0 courses.',
            goalPrimary: 'finish Vue only.',
            goalAdvanced: 'master Vue!',
            linkVue:'https://vuejs.org/',
            htmlGoal: '<span>let\'s create a Vue project!</span>'
        };
    },
    methods: {
        outputGoal(){
            const randomNum = Math.random();
            return randomNum < 0.5? this.goalPrimary: this.goalAdvanced;
        }
    }
});

app.mount('#user-goal');
