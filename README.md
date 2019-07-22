Title of project: `fe-nc-news-react`
Author: Sherpal Singh
Licence: Standard MIT Lincence

Brief description:
This is `fe-nc-news-react`. It is the frontend interface for a prior backend project titled `be-nc-news-sherpal`. This is a social news aggregation, web content rating, and discussion website. It is not too dissimilar to Reddit. In essence, it is a news app.

At the top of the page, you have the option to login. The details are as below:
**username**: jessjelly
**password** : 123

However, for the purpose of enhanced security, to POST and DELETE comments, you will need to login again and this time a registered fullname will also be required, as below.

**Gentle note: Important**
To post and delete comments, you will need to enter all 3 details as below. The username and fullname matches the database (credentials) in the backend to allow for function. Additionally, as the backend is currently deficient with regards to passwords data, frontend functional logic has been hardcoded to accept the password as 123 only.
**username**: jessjelly
**fullname** : Jess Jelly
**password** : 123

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Minimum dependency versions as below:
"dependencies": {
"@reach/router": "^1.2.1",
"axios": "^0.19.0",
"cypress": "^3.4.0",
"react": "^16.8.6",
"react-dom": "^16.8.6",
"react-scripts": "3.0.1"
}

Getting started:

1. Step 1:
   Go to the GitHub repository at https://github.com/sherpal8/fe-nc-news-react

2. Step 2:
   Fork the GitHub repository into your own GitHub repository **YOUR-REPOSITORY**.

3. Step 3:
   via the CLI: \$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
   (this will clone the files locally to your computer)

4. Step 4:
   via the CLI: \$ cd fe-nc-news-react
   (this will bring you to the correct directory prior to npm start)

5. Step 5:
   via the CLI: \$ npm install
   (this will install the required files for the node module)

6. Step 6:
   via the CLI: \$ npm start
   (this will get this front-end project running locally on your browser on port 3000)

7. If interested, front-end testing using Cypress
   via the CLI: \$ npm run cy:open
   (this will only work if \$ npm start is currently running)

Futher information:

1. Link to hosted version of the project as below:
   https://sherpal-fe-nc-news-react.netlify.com/

2. Link to the GitHub repository of this project i.e. front-ent:
   https://github.com/sherpal8/fe-nc-news-react

3. Link to the GitHub repository of the back-end of precursor project:
   https://github.com/sherpal8/be-nc-news-sherpal

4. Link to hosted version of the back-end project as below:
   https://be-nc-news-sherpal.herokuapp.com/api/
