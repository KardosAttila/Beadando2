import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        //return this.store.findAll('todo');
        var todos = this.store.findAll('todo');
        var people = this.store.findAll('person');
        return Ember.Object.create({
            todos: todos,
            people: people
        });
    },
    actions: {
        editTodo(item){
            console.log(item);
        },
        deleteTodo(item){
            item.deleteRecord();
            item.save();
        },
        addTodo(){
            this.get('onSave')({
                
                title: document.getElementById("title").value,
                description: document.getElementById("description").value,
                time: document.getElementById("time").value,
                assignedto: document.getElementById("description").value,
            });
        }
    },
});
