
// LEVEL ONE 
// Create a Model class
var TodoItem = Backbone.Model.extend({});

// Model instance
var todoItem = new TodoItem({
  description: 'thing',
   status: 'incomplete'
});

// To get an attribute
todoItem.get('description');

// To set an attribute
todoItem.set({status:'complete'});

// To sync to server
todoItem.save();

// Create a View class
var TodoView = Backbone.View.extend({});

// View instance. Link to model by setting and object-  model to model instance here.
var todoView = new TodoView({model:todoItem})

// Rendering the View.
// Can replace the var html and html passed into .html with underscore template 
// Every view has a top level ELement- div is the default 
var todoView = Backbone.View.extend({
  render: function(){
    var html = '<h3>' + this.model.get('description') + '</h3>';
    $(this.el).html(html);
  }
})

todoView.render();
// To insert top level el into html el with id app
$('#app').html(todoView.el)

// LEVEL TWO :MODELS

// Fetching data from server

// to set URL to get JSON data for model
todoItem.url = '/todo'; // but this is not a good way to do todoItem

// Set url this way- it adds a RESTful web service (Rails flavor)
var todoItem = Backbone.Model.extend({urlRoot: '/todos'});

// to set id of instance
var todoItem = new TodoItem({id:1});

// To fetch/populate model from server. GET/todos/1 
todoItem.fetch();

 // Update the todo - PUT/todos/1 with JSON params
 TodoItem.set({description:'do this now'});
 todoItem.save();

 // POST/todos with JSON params
 var todoItem = new TodoItem();
 todoItem.set({description:'and another thing'});
 TodoItem.save();

 // DELETE /todos/2
 todoItem.get('id');
 todoItem.destroy();

 // to get JSON from model (ie get all obj data)
 todoItem.toJSON();

 // Default values. Then when you create a new instance of the model ,you can 'get' the properties in defaults as if they belonged to the model instance
 var TodoItem = Backbone.Model.extend({
  defaults: {
    name: 'value'
  }
 });

 // Models can have events.
 // To listen for an event on a model
 todoItem.on('event-name', function(){

 });
 // method can be a function that is defined elsewhere
 todoItem.on('event', method);
 // Run the event
 todoItem.trigger('event-name');

 // Set without triggering event
// Add to triggering event 
{silent:true}

// Remove event listener
todoItem.off('event', method);

// Special built in events
change; change:<attr>; destroy; sync;error;all

 //LEVEL THREE: VIEWS

 // tagName changes top-level el (default is div); set if and class here
  var TodoView = Backbone.View.extend({
    tagName: 'article',
    id: 'todo-view',
    className: 'todo'
  });

  // jQuery- all the same, last is shortcut
  $('#todo-view').html();
  $(todoView.el).html();
  todoView.$el.html();

  // underscore templates. you send in string which is our underscore template; then set var attributes = to the JSON from our model. To render, call template function and send in those attributes. 
  var TodoView = Backbone.View.extend({
    // some stuff
    template: _.template('<html>');
    render: function() {
      var attributes = this.model.toJSON();
      this.$el.html(this.template(attributes));
    }
  });
  // Or:
    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
    }
  // Then render out to get html, using a template
  var todoView = new TodoView({model: todoItem});
  todoView.render();
    // This will return the html data 

// Views are responsible for responding to any user interaction, so we define events in Views. The selector refers to element where event will occur (if no selector, wherever on page event occurs will trigger event)
var SampleView = Backbone.View.extend({
  events: {
    "<event> <selector>": "<method>"
  },
  // more stuff
});
  // ex
var TodoView = Backbone.View.extend ({
  events: {
    'click h3': 'alertStatus'
  },
  alertStatus: function(e){

  }
});
  // Backbone will know event only applies to h3 in this particular element- it is scoped to el (calling jQuery delegate method)
    this.$el.delegate('h3','click', alertStatus);
// There is a list of events that jQuery can listen to; you can always create custom events at model or view level

// LEVEL 4: MODELS AND VIEWS 
// for event logic, put logic in Model (in eventFunction()) and in View, have function triggered in events be: this.model.eventFunction();
// then to sync this to serve, use this.save() after model logic to send PUT request to server

// integrate to css- change template by adding class
template:_.template('<h3 class = "<%= status%>"' +'<% if...%>/>')
// To update the view when model changes: use model event to notify view whenever model changes so view can re-render and update view. Add initialize func that is called whenever a new instance of view is created- which listens for changes in model, and then calls render function
initialize: function(){
  this.model.on('change', this.render, this);
}
  // the 3rd argument - this - so that when render function is called, this refers to view instance (Without 3rd argument this, render is called with this refering to window)

// To listen to destroy event and remove view from document

  // add to initialize:
    this.model.on('destroy', this.remove, this);

// add another function to remove element from view
remove: function(){
  this.$el.remove();
}

// LEVEL FIVE: COLLECTIONS
// Instead of putting multiple 'items' (multiple model instances) in an array and looping through to render, use collections
// Specify which model the collection is managing
var TodoList = Backbone.Collection.extend({
  model:TodoItem
});
var todoList = new TodoList();
  // The new instance of the TodoList collection manages a set of TodoItem models instances
// Things to use collection instances for:
  // get number of models; will return ie 2
  todoList.length;
  // add a model instance
  todoList.add(todoItem1);
  // to get model instance at index 0; will return ie todoItem1
  todoList.at(0);
  // get by id 1; will return ie todoItem1
  TodoList.get(1);
  // removing a model instance
  todoList.remove(todoItem1);
  // populate a collection with models in bulk
    // create an array of models
    var todos = [
    {description: 'One', status: 'incomplete'},
    {description: 'One', status: 'incomplete'}
    ]
    // then use reset() function 
    todoList.reset(todos);
  // populating list with data from server, use fetch to do a GET request
    // URL to get JSON data from
  var TodoList = Backbone.Collection.extend({
    url: '/todos'
  });
  // populate collection from server; GET /todos
  todoList.fetch();
// listen for an event on a collection (just like in models)
  todoList.on('event-name', function(){
    alert('event-name happened!');
  });
    // run the event
    todoList.trigger('event-name');
// collection special events
todoList.(<event> <function>);
// ie
todoList.on('reset', doThing);
  // event triggered on reset and fetch
  todoList.fetch();
  todoList.reset();
// without notification
todoList.fetch({silent: true});
// remove event listener
todoList.off('reset', doThing);
// built in events
// add- when a model is added; remove- when a model is removed; reset- when reset or fetched 
// add/remove special case: pass in model that is being added or removed
todoList.on('add', function(todoItem){
  // some stuff
});
// Can also listen to events triggered on models: events triggered on a model in a collection will also be triggered on the collection

// Iteration
  // Setup our collection
todoList.reset([
    {description: 'One', status: 'incomplete'},
    {description: 'One', status: 'incomplete'}
    ]);
  // Alert each model's description- call forEach on the instance of collection, pass in a function, and that function will be called with each item in the collection.
todoList.forEach(function(todoItem){
  alert(todoItem.get('description'));
});

// Map to iterate- the function will be called with each item, but here will create a new array based off the return items of that function. 
todoList.map(function(todoItem){
  return todoItem.get('description');
});
    // returns an array of however many toDoitems in collection todoList
// Filter- filter models by some criteria and returns items that return true from the function
  todoList.filter(function(todoItem){
    return todoItem.get('status') === "incomplete";
  });


// LEVEL SIX: COLLECTION VIEWS
// Models and views are one-to-one. BUt collection views are 1 to many models and views. A Collection View doesn't render any of it's own HTML itself. It delegates that responsibility to the model view. 









  
