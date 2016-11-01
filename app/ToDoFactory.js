(function() {
    'use strict';

    angular
        .module('todoApp')
        .factory('ToDoFactory', ToDoFactory);
    /* @ngInject */
    ToDoFactory.$inject = ['$http'];

    function ToDoFactory($http) {
        // declaring the function insdie the factory
        var service = {
            GetToDoList: GetToDoList,
            PostTodoList: PostTodoList,
            putTodoList: putTodoList,
            DeleteTodoList: DeleteTodoList
        };

        return service;

        ////////////////

        function GetToDoList() {

            //  var defer = $q.defer();

            return $http({
                    method: 'GET',
                    url: 'http://localhost:49366/api/Todoes'
                })
                .then(
                    function(response) {
                        return response.data;

                    },
                    function(error) {
                        console.log(error + "Not able to load the database");

                    });

        }

        function PostTodoList(todo) {


            return $http({
                    method: 'POST',
                    url: 'http://localhost:49366/api/Todoes',
                    data: todo
                })
                .then(
                    function(response) {

                        return response.data;
                    },
                    function(error) {
                        console.log(error + 'unable to contact the database!');
                        return error;
                    });
        }


        function putTodoList(todo, id) {

            console.log(todo);
            return $http({
                    method: 'PUT',
                    crossDomain: true,
                    url: 'http://localhost:49366/api/Todoes' + '/' + id,
                    data: todo,
                })
                .then(
                    function(response) {
                        console.log(response + "successfully updated the data in factory!");

                        return response.data;
                    },
                    function(error) {
                        console.log(error + 'unable to update the task!');
                        return error;
                    });
        }

        function DeleteTodoList(id) {
            console.log(id);
            return $http({
                    method: 'DELETE',
                    crossDomain: true,
                    url: 'http://localhost:49366/api/Todoes' + '/' + id

                })
                .then(
                    function(response) {
                        console.log(response + "successfully updated the data!");

                        return response.data;
                    },
                    function(error) {
                        console.log(error + 'unable to update the task!');
                        return error;
                    });
        }
    }

})();
