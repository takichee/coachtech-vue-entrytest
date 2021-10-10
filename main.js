new Vue({
    el: '#app',
    data: {
        list: [],
        addText: '',
        addTime: '',
    },
    methods: {
        addToDo: function() {
            if (this.addText !== '') {
                this.list.push({
                    text: this.addText, 
                    time: this.addTime,
                });
            }
            this.addText = '';
            this.addTime = '';
        },
    }
  });