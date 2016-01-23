var todo = new Vue({
  el: '#todoApp',
  data: {
    todoItems: [
      { text: 'take out the trash', finished: true},
      { text: 'go to dc', finished: true},
      { text: 'finish applications', finished: false },
      { text: 'pay DC train ticket', finished: false },
      { text: 'buy DC plane ticket by Feb 1', finished: false }
    ],
    newItem: ''
  },
  methods: {
    addItem: function() {
      this.todoItems.push({
        text: this.newItem,
        finished: false
      });
    }
  }
});
