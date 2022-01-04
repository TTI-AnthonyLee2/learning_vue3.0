// #NOTE
// 1. When page re-renders caused by variables changing, vue will execute each methods again. (performance impact)
// 2. We can use 'computed' instead of 'methods' to improve performance.

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      wFullName: ''
    };
  },
  methods: {
    outputFullName(){
      console.log('methods: executed outputFullName again!');
      return this.name === ''? '': `${this.name} Lee`;
    },
    resetInput(){
      this.name = '';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  },
  computed: {
    fullName(){
      console.log('computed: executed fullName again!');
      return this.name === ''? '': `${this.name} Lee`;
    },
  },
  watch: {
    name(lastValue){
      this.wFullName = lastValue? `${lastValue} Lee`: '';
    },
    counter(lastValue){
      window.setTimeout(()=>{
        if (lastValue > 50) this.counter = 0;
      }, 2000);
    }
  }
});

app.mount('#events');
