//inizializzazione Vue
const { createApp } = Vue;

//creazione app
createApp({
    data() {
        return {
         
            newTodo: '',
            searchKey: '',
            pageTitle: 'My Todo List in Vue',
            // todoList: [
            //     'Fare la spesa',
            //     'Andare al parco',
            //     'Mangiare una pizza'
            // ],
            todoList: [
                { text:'Fare la spesa', done: false },
                { text: 'Andare al parco', done: false },
                { text: 'Mangiare una pizza', done: false}
            ],
        }
    },
    methods: {
        deleteTodo(elementToDelete) {
            // console.log(elementToDelete);
            // console.log('mi stai cancellando');

            this.todoList.splice(elementToDelete, 1);
        },
        addTodo() {
           if (this.newTodo.trim() !== '') {
                // const newTodo = {
                //     text:this.newTodo, 
                //     done: false
                // };
                
                this.todoList.push({
                    text:this.newTodo, 
                    done: false
                });
                this.newTodo = '';
            }
        },
            toggleTodo(elementToToggle){
            console.log('sto scatenando anche il toggle');
            console.log(elementToToggle);
            console.log(this.todoList[elementToToggle].done);


            // if(this.todoList[elementToToggle].done === false) {
            //     console.log('condizione 1');
            //     this.todoList[elementToToggle].done = true;
            // } else {
            //     console.log('condizione 2');
            //     this.todoList[elementToToggle].done = false;
            // }



            this.todoList[elementToToggle].done = !this.todoList[elementToToggle].done;

            // this.todoList[elementToToggle].done = true;
        },
        search() {
            this.todoList = this.todoList.filter(element => element.includes(this.searchKey));
        },
        filteredList() {
            if (this.searchKey !== '') {
                return this.todoList.filter(element => element.toLowerCase().includes(this.searchKey.toLowerCase()));
            } else {
                return this.todoList;
            }

        }

    }
}).mount('#app');