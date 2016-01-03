var server=require('./server');
var resources=require('./resources');

//lists
server.get("/lists",resources.lists.list);
server.put("/lists/:list",resources.lists.create);//put /lists/myList
server.del("/lists/:list",resources.lists.del);

//Items
server.get('/lists/:list/items',resources.items.list);
server.post('/lists/:list/items',resources.items.create);
server.del('lists/:list/items/:item',resources.items.del);
