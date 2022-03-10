
># Nodejs-Login
Nodejs-Login with mongodb
โปรเจคนี้คือการทำ register และ login ในฝั่ง ของ backend API
เพื่อใช้ในการทำเว็ปไซต์ต่างๆ

สิ่งที่ใช้
- node.js
- mongodb

> ติดตั้ง

    npm install

> Run project

    npm run start

## **Usage**


**POST  /register**

    {
    "name" : "YOUR-NAME",
    "phone" : "YOUR-PHONE",
    "password: "YOUR-PASSWORD"
    }
**POST  /login**

    {
    "name" : "YOUR-NAME",
    "password: "YOUR-PASSWORD"
    }
**GET  /users**

  [ALL USERS]
