## mysite powered by node.js(express)

#### 설치패키지

```bash
[mysite] $ npm i express    o2
[mysite] $ npm i ejs        o3
[mysite] $ npm i mysql2
[mysite] $ npm i express-session
[mysite] $ npm i sequelize
[mysite] $ npm i dotenv      o5
[mysite] $ npm i multer 
[mysite] $ npm i winston          o6
[mysite] $ npm i winston-daily-rotate-file        o7
[mysite] $ npm i moment

[mysite] $ npm i -D nodemon   o4
[mysite] $ npm i -D mocha
[mysite] $ npm i -D chai

```

#### scripts in package.json

```json
     "scripts": {
    "start": "node index.js",
    "debug": "nodemon index.js",
    "test" : "npx mocha"
  }
```

#### project structure
<pre>
/mysite
    |--- index.js
    |--- package.json
    |--- package-lock.json
    |--- [node-modules]
    |--- test
    |--- logging
    |--- [logs]
    |       |--- [error]
    |--- [multer-temporary-store]
    |--- config
    |--- public
    |       |--- [upload-images]
    |       |--- assets
    |       |       |--- css
    |       |       |--- images
    |       |       |--- js
    |--- routes
    |--- controllers
    |       |--- admin
    |--- models
    |--- views
    |       |--- main
    |       |--- user
    |       |--- board
    |       |--- guestbook
    |       |--- gallery
    |       |--- includes
    |       |--- admin
    |       |       |--- includes

<pre>

