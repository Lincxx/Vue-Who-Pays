new Vue({
  el: '#app',
  data: {
    state: true,
    inputName: '',
    names: [], 
    showError: false,
    result:''
  },
  methods: {
    addNameToList() { 
      
      if (this.validate(this.inputName)) {
        this.names.push(this.inputName);
        this.inputName = '';
        this.showError = false;
        
      } else { 
        this.showError = true;
      }
    },
    validate(value) { 
      if (value !== '') {
        return true;
      } else { 
        return false;
      }
    },
    showResults() { 
      let rand = this.names[Math.floor(Math.random() * this.names.length)]
      this.result = rand
      this.state = false;      
    },
    removeName(index) { 
      this.names.splice(index, 1);
    },
    restApp() { 
      this.state = true;
      this.names = [];
      this.result = ''
    }
  }
})