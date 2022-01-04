const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      number: 5,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    submitForm(){
      alert('submitted!');
    },
    add(num){
      this.counter+=num;
      // this.counter++;
    },
    reduce(num){
      this.counter-=num;
      // this.counter--;
    },
    setName(ev, lastName){
      // console.log(ev);
      this.name = `${ev.target.value} ${lastName}`;
    },
    confirmInput(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
