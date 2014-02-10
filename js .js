// jQuery:

// Document Object Model: the DOM
// A tree like structure created by browsers so we can quickly find HTML Elements using JavaScript. Inside the DOM html elements become nodes that have relationships to each other

// find elements in HTML
jQuery("h1");
$("h1");
$("#id");
$(".class");

// Fetch an element's text
$("h1").text();
// Replace an element's text
$("h1").text("text to replace with");

// Need to make sure DOM has finished loading HTML content before we can reliably use JS- JS may execute before DOM loads. So:
$(document).ready(function(){
  //code
});

// To use:
<script src = "jquery.min.js"></script>

// descendent selector
$('#id element');

//direct children
$('#id > direct_child');

// first item - use pseudo class or not.
$('#id element:first');
$('#id').first();


// last
$('#id element:last');
$('#id').last();


// traversing. Id is selection, element is the traversal.
$('#id').find('element');

// to append, prepend (adds as last or first 'child' of refernce point)
// after, before (adds before or after ref pt as 'sibling')

$('el').append('stuff')
$(document).ready(function(){
  var price = $("<p> From $100-200 </p>");
  $(".vacation").prepend(price);
  $("button").remove();
});
//or
$(price).appendTo('.vacation');

//click handlers
$("button").on("click", function(){
  // code
  //this refers to thing tha triggered the event
  $(this).append(price);
});

//
$(this).closest("vacation").append(price);

// Data tag:  an HTML5 attribute you can add to any of your elements to provide additional information about the objects on your page.  
  // -jQuery objects:
  .data(<name>) - to get the info
  .data(<name>), <value>  - to set the attributes 


// shows elements
.slideDown(); 
// hides elements
.slideUp();
// toggles between show and hide
.slideToggle();

//to prevent jummping on onpage
// pass e into function(e)
e.preventDefault();

//conditionals
if (this condition is true)
  { 
      // do this code ;
  }
  else // “otherwise”
  {
       // do this code instead ; 
  }


//   Scope:
// Global variables: variables defined outside a function are accessible anywhere once they have been declared. Their scope is global. 

// Local variables: variables defined within a function; they cannot be accessed outside of the function. 

