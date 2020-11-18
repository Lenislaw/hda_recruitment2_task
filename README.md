# User management - recruitment task

Recruitment task.

## Descriptions

A very simple application for managing members. This application has two basic functions. First, find a member by name and view it as results. The second is the function of adding a member (name and age) to DB.


### Env Variables

In this case .env file doesn't has any sensitive data that's why I include it with repo

```
NODE_ENV = development
PORT = 5000

```


### Install Dependencies (backend)

Clone repository from https://github.com/Lenislaw/hda_recruitment2_task.git 

or

```
$ git clone https://github.com/Lenislaw/hda_recruitment2_task.git
```

then go to root directory 

```
$ cd hda_recruitment2_task
```

and use command to install dependencies

```
$ npm install

```

### Run

Start app from root directory

```
# Run frontend & backend 
$ npm run start

# Run frontend only
$ npm run client

# Run backend only
$ npm run server
```

### Database

You can set different database in backend/db/db.js
by default it is 

```
// Mocked db
const db = {
  people: [
    { name: 'John', age: 27 }, 
    { name: 'Jack', age: 19 }, 
    { name: 'Mack', age: 51 }, 
    { name: 'Sasin', age: 70 },
    { name: 'Richard', age: 34 }, 
    { name: 'Andrew', age: 42 },
  ]
}
```



