myAppModule.factory('itemFactory', function(){
        var items = [];
        var factory = {};
 
        factory.showItems = function(callback) {
            callback(items);
        }
 
        factory.addItem = function (newItem){
            items.push(newItem);
        }
 
        return factory;
      })