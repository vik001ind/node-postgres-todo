angular.module('nodeTodo', [])

.controller('mainController', function($scope, $http) {

    $scope.formData = {};
    $scope.todoData = {};
    $scope.actions = [
    "true",
    "false"
  ];
    $scope.choice = false;
   


    // Get all todos
    $http.get('/api/v1/todos')
        .success(function(data) {
            $scope.todoData = data;
            console.log(data);
        })
        .error(function(error) {
            console.log('Error: ' + error);
        });

    // Create a new todo
    $scope.createTodo = function(todoID) {
        $http.post('/api/v1/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.todoData = data;
                console.log(data);
            })
            .error(function(error) {
                console.log('Error: ' + error);
            });
    };

    // Delete a todo
    $scope.deleteTodo = function(todoID) {
        $http.delete('/api/v1/todos/' + todoID)
            .success(function(data) {
                $scope.todoData = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // update assignment 
    $scope.updateAssign = function(todoID, text, choice) {
	if (String(choice) == "true") {
	    $scope.choice = true;
	}
	else {
	    $scope.choice = false;
	}  
//	console.log('Debug1:' + text + ' ' + choice); 
        $http.put('/api/v1/todos/' + todoID, {text: text, complete: $scope.choice})
            .success(function(data) {
                $scope.todoData = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    /* testing 
    $scope.doSomething = function(choice) {
    switch(choice) {

    }
};*/


});




