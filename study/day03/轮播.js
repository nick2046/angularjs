var myapp = angular.module("app",[]);
		// 自定义指令
		// ("指令名",fn()) 指令名需要驼峰命名法
		// 引用的时候,以形式命名
		// 引用的形式
		// 以元素的方式 
		myapp.directive("easyDemo",function(){
			return {
				restrict:'E',
				replace:false,

				templateUrl:'app/index.html',

			controller:function($scope,$http,$interval){
				// $scope.imgArr = [
				// 		'http://10.48.0.41:3000/static/app/images/1.jpg',
				// 		'http://10.48.0.41:3000/static/app/images/2.jpg',
				// 		'http://10.48.0.41:3000/static/app/images/3.jpg',
				// 		'http://10.48.0.41:3000/static/app/images/4.jpg'];
				// $scope.imgArr = 
				$http({
					url: 'http://10.48.0.41:3000/User/getImgSlide',
					type: "post",
					params: {
						id: "1601",
						name: "yinguit"
					}
				}).success(function(res){
					$scope.imgArr = res.result;
					$scope.showIndex = 0;
					$interval(function(){
						$scope.showIndex++;
						if( $scope.showIndex >= $scope.imgArr.length){
							$scope.showIndex = 0;
						}
					},2000)
				});
			}

			}

		});