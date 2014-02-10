#1. #  4 principles of object oriented programming:
#   1. Abstraction: creating a focused representation of an object in code (think of code in terms of real world objects)
#   2. Inheritance: inheriting methods and methods properties from a parent class in a subclass.
#   3. Polymorphism: redefining (overridding) methods and attributes of a parent class in a subclass.
#   4. Encapsulation: data hiding. Using getters and setters to allow access to attributes outside of that class. Hiding properties and methods from external classes.

# Why Rails: web framework for applications using a database backend and rendering to html on frontend
# 1. Promotes DRY
# 2. Emphasizes convention over configuration- decrease the number of decisions that developers need to make. ( developer only needs to specify and write config files for unconventional aspects of the application.)
# 3. Feature-rich: lots of gems and plugins

# MVC: Model = logic, talks to db; Controller = apps's logic of how model/view interact; View = data used to display to user
    # Customer/webpage view-> Routes-> Controller -> Model(DB) -> Controller -> View -> Customer/webpage view
# 1. Request from browser --> routes
# 2. URL determines what controller and action it goes to
# 3. Talks to model (logic and interacts with db) 
# 4. Sends response to controller  
# 5. Pass appropriate parameters to view (render in browser)

# ActiveRecord:
# How rails interacts with DB:  effortless “persistence” (saving, basically) of data, and magically mapping classes (models) to database tables. ActiveRecord does this through ORM: object-relational mapping.
    # ORM stands for Object-Relationship-Model, it means that your Classes are mapped to table in the database and Objects are directly mapped to the rows in the table.

# REST: Representational State Transfer - requests that move internet along
  # GET, POST, PUT, DELETE
  # = Rails CRUD Actions: Create, Read, Update, Delete

# Classes:
# define the methods and attributes of their instances 
# Eigenclass: dynamically created anonymous class that Ruby inserts into the method lookup path (one's very own)

# Modules: a toolbox that contains a set of methods as CONSTANTS. 

# There are too many Ruby tools to keep around all the same without cluttering the interpretor, so we keep a bunch of the in modules and only pull in those module toolboxes when we need the constants and methods inside. (They're like classes, but they can't create instances and can't have subclasses- they are just used to store things!) Require module to bring in its methods/constants.
  # namespacing: separating methods and constants into named spaces. This is one of the main purposes of modules and  it's how Ruby doesn't confuse Math::PI and Circle::PI.
     #Scope resolution operator :: (double colon): tells Ruby where you're looking for a specific bit of code.



# mixin: when a module is included in a class to mix additional behavior and information into a class, it's called a mixin. They allow us to customize a class without having to rewrite code. Ruby's hack for multiple inheritance. but methods written in class override mixin. 
  # Call Something.new.modulemethod
  # include: when we include a module that has already been required, we pull in all its methods and constants at the instance level. So any class that includes a certain module can create objects (instances) that can use those very same methods. 
      # include mixes a module's methods in at the instance level (allowing instances of a particular class to use methods).
  # extend: mixes a module's methods in at the class level. This means that class itself can use the methods, as opposed to instances of the class.
      # Call Something.modulemethod

# Class var and instance var:
# class: vars shared among class (any change affects all super and sub classes)
# instance: vars shared among instance of class

# Callbacks- in model: trigger logic before or after an alteration of the object state (on model) (before after create, save, validate, etc) IE before_create :set_sequence_id
# Filters- in controller- are methods that are called either before/after a controller action is called. (controller) IE before_action to set @subject, before_filter :authorize_admin

# Caching: three types of caching techniques: page, action and fragment caching (default is fragment)
  # Fragment: mainly used for dynamic pages. In this type of caching, fragments of a page can be cached and expired. (best done in views)
  # Page: whenever a request is sent to the server, the Rails server would check for the cached page and if that exists it would be served. If it does not exist, Rails server generates the page & cache it. Hence the Rails app won’t have to generate it again during the next request. (won't work for authentication and before_filter because doesn't go to the app)
  # Action: Rails action caching only caches the activities happening inside the action. For e.g., if a Rails action is fetching data from database & then rendering a view, these items would be cached & directly used the next time the cache is accessed. Auth and access restr not a prob,bc all requests sent to appr Rails action
# SQL Caching: SQL Caching will cache any SQL results performed by the Active Records or Data mappers automatically in each action . So, the same query doesn’t hit the database again – thereby decreasing the load time.
  # caching scope includes only the action in which the query is executed. Outside the action (ie index), query will hit db again.

# puts appends a line; prints just separates by a space
#2. # Equivalence: 
# object equivalence; used by Hash to test for hash key equivalence and and Set to test for instance equivalence
eq?  
# Numeric types perform type converions across == but not eql?, thus eql? performs a stricter comparison than ==.

#. Include?
# Opposition of include is .reject
==

class Array
  def include?(n)   
    self.each do |i|
      if i == n
        return true
      else 
        return false
      end     
    end
  end
end

class Array
  def each(&block)
    i = 0 

    while i < self.size
      yield(self[i])

      i += 1
    end
  end
end
  array.each {|x| puts x}
# returns the first n elements
array.take(n)
# passes elements to block until block returns false or nil; then stops iterating and returns an array of all prior elemets 
array.take(while) {} 
# add to end of array
array.push(n) == array << n
# add to beginning of array
array.unshift
# inset at specific index
array.insert(i, v)
# remove last value and return
array.pop
# remove and return first value
array.shift
# remove nil values
.compact
# remove duplicates
.uniq and .uniq!
# Ternary operator
# if_this_is_a_true_value ? then_the_result_is_this : else_it_is_this

# Spaceship operator: comparison
# 
a <=> b :=
  if a < b then return -1
  if a = b then return  0
  if a > b then return  1

# Hash
# search through hash comparing obj with the key using ==. Returns the key-value pair as a two-element array or nil.
hash_name.assoc("key")
# Searches thr hases and arrays whose elements are also arrays and returns first k-v pair or first array that matches n
.rassoc(n)


# Yield:
# The  collect! method will put in the index 0 and the value 1 will be yielded to the block in array2. 
      class Array
      def collect!
        self.each_with_index! do |value, index|
        self[index] = yield(value)
        # saying replace self index with value
        end
      end

array = [1,2,3,4]
array2 = array.collect! do |n|
  n + 1
end


# FizzBuzz
def fizzbuzz
  (1..100).each do |i|
    if (i % 3 ==0) && (i % 5 == 0)
      puts "FizzBuzz"
    elsif i % 3 == 0
      puts "Fizz"
    elsif  i % 5 == 0 
      puts "Buzz"
    else
      puts i
    end
  end 
end

def fizzbuzz(n)
  if (n % 3 ==0) && (n % 5 == 0)
      print "FizzBuzz"
  elsif n % 3 == 0
      print "Fizz"
  elsif n % 5 == 0 
      print "Buzz"
  else
    print n
  end 
end
def fizzbuzz
  for n in 1..100
    if (n % 3 == 0) && (n % 5 == 0)
      puts "FizzBuzz"
    elsif n % 3 == 0
      puts "Fizz"
    elsif n % 5 == 0 
      puts "Buzz"
    else
      puts n
    end 
  end
end

# 
# Blocks, Procs, and Lamdas: 
  # 01. A block is just a bit of code between do..end or {}. It’s not an object on its own- it is syntax-, but it can be passed to methods like .each or .select. (at most one block can be appear in an arg lisr)
  #   02. A proc is saved block we can use over and over. 
  #   03. A lambda is just like a proc, only it cares about the number of arguments it gets and it returns to its calling method rather than returning immediately. (ie if lamba's {} is in a method, rest of method will execute and the last line of that will return. If it is a proc, the result from proc's {} will be the result returned from proc)
    # (lambdas are lie anonymous functions)

# Closure- when called contains what ever value was in it when you created it
# Example of Proc objects preserving local context

def counter
  n = 0
  return Proc.new { n+= 1 }
end

a = counter
a.call            # returns 1
a.call            # returns 2

b = counter
b.call            # returns 1

a.call            # returns 3

# Recursive Fib- with memoization
fibonacci = Hash.new{ |r,n| r[n] = n < 2 ? n : r[n-1] + r[n-2] }
fibonacci = Hash.new{ |h,k| h[k] = k < 2 ? k: h[k-1] + h[k-2] }

fibonacci[1] = 1
fibonacci[5]= 13

def fib(n)
  fibn = Hash.new do |r,n|
    if n < 2
      r[n] = n
    else
      r[n] = r[n-1] + r[n-2]
    end
  end
  return fibn[n]
end


