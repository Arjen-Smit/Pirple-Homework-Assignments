# Homework Assignment 1

Please create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice. 
2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want. 

## Implementation
This application is written in ES6 and should run on nodejs 8 

Implement a single route /hello that replies by saying Hi and asking for someones name.
If the name is send to hello by means the following payload it says hi and tells his own name.
```
{
    name: 'my Name'
}
```
If no route or any other route it given it will return another message.
