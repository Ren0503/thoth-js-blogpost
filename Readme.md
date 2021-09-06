# Thoth
![Thoth](https://github.com/Ren0503/thoth-js-blogpost/blob/master/client/src/assets/header.png)
> Blogpost M.E.R.N Stack. Repository is divided into 2 main packages: 
- **server** This package container API for Thoth, build with Nodejs, Express and MongoDB with Mongoose. Use REST API.
- **client** Is a frontend for Thoth, build with React, Redux Thunk and Bootstrap.

## Features

1. Login/Sign Up
2. Write blog
3. Search blog by title
4. Search blog by author
5. Filter blog by category
6. Add Comment
7. Edit Profile
8. Text to Speech

### Server

| Plugin | README |
| ------ | ------ |
| bcrypt | [plugins/bcryptjs/README.md](https://github.com/kelektiv/node.bcrypt.js/blob/master/README.md) |
| express | [plugins/express/README.md](https://github.com/expressjs/express/blob/master/Readme.md) |
| jsonwebtoken | [plugins/jsonwebtoken/README.md](https://github.com/auth0/node-jsonwebtoken/blob/master/README.md) |
| mongoose | [plugins/mongoose/README.md](https://github.com/Automattic/mongoose/blob/master/README.md) |
| morgan | [plugins/morgan/README.md](https://github.com/expressjs/morgan/blob/master/README.md) |
| nodemon | [plugins/nodemon/README.md](https://github.com/remy/nodemon/blob/master/README.md) |

### Client

| Plugin | README |
| ------ | ------ |
| axios | [plugins/axios/README.md](https://github.com/axios/axios/blob/master/README.md) |
| react | [plugins/react/README.md](https://github.com/facebook/react/blob/master/README.md) |
| react-bootstrap | [plugins/react-bootstrap/README.md](https://github.com/react-bootstrap/react-bootstrap/blob/master/README.md) |
| react-redux | [plugins/react-redux/README.md](https://github.com/reduxjs/react-redux) |
| react-router-dom | [plugins/react-router/README.md](https://github.com/ReactTraining/react-router/blob/master/README.md) |
| react-quill | [plugins/react-quill/README.md](https://github.com/zenoamaro/react-quill/blob/master/README.md) |
| redux | [plugins/redux/README.md](https://github.com/reduxjs/redux)|
| redux-thunk | [plugins/redux-thunk/README.md](https://github.com/reduxjs/redux-thunk/blob/master/README.md) |

## Core Structure
    code
      ├── package.json
      ├── server
      │   ├── config
      │   ├── controllers
      │   ├── middleware
      │   ├── models
      │   ├── routes
      │   ├── utils
      │   ├── server.js
      │   │
      │   └── package.json
      │
      ├── client
      │   ├── public
      │   ├── src
      │   │   ├── actions
      │   │   ├── assets
      │   │   ├── components
      │   │   ├── constants
      │   │   ├── layouts
      │   │   ├── reducers
      │   │   ├── routes
      │   │   ├── screens
      │   │   ├── App.js
      │   │   ├── store.js
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── .gitignore
      └── README.md

### Screenshots
|                                        Home                                        |                                        Category                                        |                                        Author                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/Ren0503/thoth-js-blogpost/blob/master/client/src/assets/screenshots/home.png) | ![](https://github.com/Ren0503/thoth-js-blogpost/blob/master/client/src/assets/screenshots/category.png) | ![](https://github.com/Ren0503/thoth-js-blogpost/blob/master/client/src/assets/screenshots/author.png) |

|                                        My Stories                                        |                                        Detail                                        |                                        Edit                                        |
| :--------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| ![](https://github.com/Ren0503/thoth-js-blogpost/blob/master/client/src/assets/screenshots/my_story.png) | ![](https://github.com/Ren0503/thoth-js-blogpost/blob/master/client/src/assets/screenshots/detail.png) | ![](https://github.com/Ren0503/thoth-js-blogpost/blob/master/client/src/assets/screenshots/edit.png) |
