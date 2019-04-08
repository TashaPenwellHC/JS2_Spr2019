var app = new Vue({
  el: '#app',
  data: {
    isTrue: true,
    hello: "Hello World"
  },
  methods: {
    toggleIsTrue: function toggleIsTrue() {
      this.isTrue = !this.isTrue;
    },
    methodname: function methodname() {
      return "From the method";
    }
  }
});