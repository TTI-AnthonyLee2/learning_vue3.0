const app = Vue.createApp({
    data(){
        return {
            counter: 0,
            message: '',
            timer: null,
        };
    },
    methods: {
        add(num){
            this.counter += num;
        },
    },
    computed: {
        // showMsg(){
        //     if (this.counter < 37){
        //         this.message = 'Not there yet.';
        //     } else if (this.counter > 37){
        //         this.message = 'Too much!';
        //     } else {
        //         this.message = 'Bingo!';
        //     }
        //     return this.message;
        // }
    },
    watch: {
        counter(value){
            if (value < 37){
                this.message = 'Not there yet.';
            } else if (value > 37){
                this.message = 'Too much!';
            } else {
                this.message = 'Bingo!';
            }

            if (this.timer) window.clearTimeout(this.timer);
            this.timer = window.setTimeout(()=>{
                this.counter = 0;
            }, 5000);
        }
    }
});

app.mount('#assignment');