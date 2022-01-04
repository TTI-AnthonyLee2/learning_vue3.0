let app = Vue.createApp({
    data(){
        return {
            alertMsg: 'Learn Vue3.0 harder!',
            userInput1: '',
            userInput2: ''
        };
    },
    methods: {
        showAlert(){
            alert(this.alertMsg);
        },
        setUserInput1(ev){
            this.userInput1 = ev.target.value;
        },
        setUserInput2(ev){
            this.userInput2 = ev.target.value;
        }
    }
});

app.mount('#assignment');