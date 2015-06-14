app.controller('mytodoCtrl', function($scope) {

$scope.saved = localStorage.getItem('todos');//vrati postojece iz localStorage
	$scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {todoText: 'firstTask', done: false}];
	localStorage.setItem('todos', JSON.stringify($scope.todos));

	$scope.addTodo = function() {//add to Todo array
		$scope.todos.push({
			todoText: $scope.todoInput,
			done: false
		});
		$scope.todoInput = ''; //clear the input after adding
		localStorage.setItem('todos', JSON.stringify($scope.todos));//setuj na novu vrijednost array u localStorage
	};



	$scope.remove = function() {//obrisi one koji su chekirani
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo){
			if (!todo.done)
				$scope.todos.push(todo);
		});
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};

	$scope.mark = function() {
		angular.forEach($scope.todos, function(todo) {
			todo.done = true;
		});
	};

});

