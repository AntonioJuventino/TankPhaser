function resizePolygon(originalPhysicsKey, newPhysicsKey, shapeKey, scale){
   var newData = [];
   var data = this.game.cache.getPhysicsData(originalPhysicsKey, shapeKey);

   for (var i = 0; i < data.length; i++) {
       var vertices = [];

       for (var j = 0; j < data[i].shape.length; j += 2) {
          vertices[j] = data[i].shape[j] * scale;
          vertices[j+1] = data[i].shape[j+1] * scale; 
       }

       newData.push({shape : vertices});
   }

   var item = {};
   item[shapeKey] = newData;
   game.load.physics(newPhysicsKey, '', item);

}