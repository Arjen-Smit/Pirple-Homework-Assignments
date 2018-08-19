# Homework Assignment 1

Please create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice. 
2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want. 

## Implementation
This application is written in ES6 and should run on nodejs 8 

Implement a single route /hello that replies by saying Hi and asking for someones name.

if the name is added by means of json in the body of the request the application will use that to reply and tell his own name.
```
{
    name: 'Arjen'
}
```
Any other request will return a message asking for a hello.
