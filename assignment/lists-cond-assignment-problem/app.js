const app = Vue.createApp({
    data(){
        return {
            tasks: [],
            inputTask: '',
            isListShown: true,
            btnCaption: 'Hide List',
        };
    },
    methods: {
        addTask(){
            if (this.inputTask){
                this.tasks.push(this.inputTask);
                this.inputTask = '';
            }
        },
        toggleVisibility(){
            if (this.tasks.length > 0){
                this.isListShown = !this.isListShown;
                this.btnCaption = this.isListShown? 'Hide List': 'Show List';
            }
        }
    },
}).mount('#assignment');