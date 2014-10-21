angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {
	$scope.formData = {};
	$scope.tagline = 'Nothing beats a pocket protector!';

	// when landing on the page, get all people and show them
	$http.get('/api/person')
		.success(function(data) {
			$scope.people = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.createPerson = function() {
		if($scope.formData.name){
			$http.post('/api/person', $scope.formData)
				.success(function(data) {
					$scope.formData = {}; // clear the form so our user is ready to enter another
					$http.get('/api/person')
						.success(function(data) {
							$scope.people = data;
						})
						.error(function(data) {
							console.log('Error: ' + data);
						});
				})
				.error(function(data) {
					console.log('Error: ' + data);
				});
		}else{
			alert('You must enter a name');
		}
	};

	// delete a person after checking it
	$scope.deletePerson = function(id) {
		$http.delete('/api/person/' + id)
			.success(function(data) {
				$http.get('/api/person')
					.success(function(data) {
						$scope.people = data;
					})
					.error(function(data) {
						console.log('Error: ' + data);
					});
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

});