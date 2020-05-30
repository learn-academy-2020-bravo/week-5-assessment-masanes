# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?
rails new app_name -d postgresql -T


2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - is the http verb we are sending to server
library - name of the url
:id - symbol or parameter
book - namr of the controller
show - name of method found in controller

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

we can create a migration to add a foreign key 
example. add_column :comments, :model_id, :integer
then run rails db:migrate to execute


4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

rails g model Person shirt:string pants:string shoes:string
rails db:migrate //should provide a schema that you can then start working with the data


5. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

models use CamelCase that are singular and will map automatically to plural database table name

Database tables use snake_case the table names are plural. 
The column names however in the table are also snake_case but are usually singular

ex. websites
___________________-
id  | ID
url | STRING
number_of_users | INT