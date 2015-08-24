myAppModule.controller('itemController', function ($scope, itemFactory)
      {
            $scope.addItems = function(){
                itemFactory.addItem($scope.newItem);
                $scope.newItem = {};
            };
 
            itemFactory.showItems(function(items) {
                $scope.items = items;
            });
 
        });