let app = Vue.createApp({
    data(){
        return {
            myName: 'Anthony',
            myAge: 18,
            imgLink: 'https://fakeimg.pl/300/'
        };
    },
    methods: {
        randomNumber(){
            return Math.random();
        }
    },
});

app.mount('#assignment');