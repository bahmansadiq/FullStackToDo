(function() {
    'use strict';

    angular
        .module('todoApp')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = ['$http', 'ToDoFactory'];

    /* @ngInject */
    function ToDoController($http, ToDoFactory) {
        var vm = this;
        vm.title = 'FullStack ToDo Controller';
        vm.selectedPriority = "1";
        vm.todoCopy = [];
        vm.taskPriority = vm.todoCopy.selectedPriority;

        activate();

        ////////////////

        function activate() {
            ToDoFactory.GetToDoList().
            then(function(todoResult) {
                vm.todoCopy = todoResult;
            }, function(error) {
                console.log(error);
            });
        }
        vm.AddToDoList = function() {
            var passTodo = {
                addItem: vm.addItem,
                selectedPriority: vm.selectedPriority

            }
            if (vm.toDoEntryId) {
               passTodo.toDoEntryId = vm.toDoEntryId;
                vm.updateToDo(passTodo, vm.toDoEntryId);
            } else {

                ToDoFactory.PostTodoList(passTodo).then(function(response) {
                   return response;
                    activate();
                }, function(error) {

                    console.log(error);
                });

            }
        }

        vm.populateTodDoForm = function(toDo) {
            vm.addItem = toDo.addItem;
            vm.selectedPriority = toDo.selectedPriority;
            vm.toDoEntryId = toDo.toDoEntryId;
        }

        vm.updateToDo = function(info, id) {

            ToDoFactory.putTodoList(info, id).then(function(response) {
                console.log(response);
                activate();

            }, function(error) {
                console.log(error);
            });
        }
        vm.deleteToDo = function(removeItem) {
            ToDoFactory.DeleteTodoList(removeItem).then(function(response) {
                activate();

                console.log(response);

            }, function(error) {
                alert(error)

            });

        }
    }
})();
