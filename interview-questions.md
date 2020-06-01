# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC is a model view controller

  Researched answer:

  the Rails controller is the logical center of your application. It coordinates the interaction between the user, the views, and the model.
The model: “Maintains the relationship between Object and Database and handles validation, association, transactions”

The view: “A presentation of data in a particular format, triggered by a controller’s decision to present the data.”

The controller: “The facility within the application that directs traffic, on the one hand querying the models for specific data, and on the other hand organizing that data (searching, sorting) into a form that fits the needs of a given view.”

is responsible for routing external requests to internal actions. It handles people-friendly URLs extremely well
manages caching
manages helper modules, which extend the capabilities of the view templates without bulking up their code
manages sessions, giving users the impression of an ongoing interaction with our applications



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: CRUD stands for create, read, update and delete

  Researched answer:



3. What is a migration? Why would you use one?

  Your answer: you would use migration to make changes/updates to a schema 

  Researched answer:

Migrations are used to modify the shape of an existing database.
Changing the shape of the database can include adding or deleting columns, changing the name of the column, or changing the data type of a column.


4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: Person would be the primary key since a person can have many computers while usually a computer would belong to one person or have many people that use it.

  Researched answer: 



5. What is object-relational mapping?

  Your answer: No idea

  Researched answer:
  Object Relational Mapping, commonly referred to as its abbreviation ORM, is a technique that connects the rich objects of an application to tables in a relational database management system. Using ORM, the properties and relationships of the objects in an application can be easily stored and retrieved from a database without writing SQL statements directly and with less overall database access code.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
Routes are the code that are responsible for listening and receiving requests and then deciding what to send back.
https://medium.com/@shubhangirajagrawal/the-7-restful-routes-a8e84201f206

- JSON
JSON stands for JavaScript Object Notation

JSON is a lightweight format for storing and transporting data

JSON is often used when data is sent from a server to a web page

JSON is "self-describing" and easy to understand

- API
An application programming interface is a computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc.

- Endpoints
simply put, an endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints.


- Strong params
Strong Parameters. It provides an interface for protecting attributes from end-user assignment. This makes Action Controller parameters forbidden to be used in Active Model mass assignment until they have been explicitly enumerated.
