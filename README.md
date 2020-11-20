# Capstone: Artsy
'Artsy' is an application in which sharing art with your friends and followers is easier than ever. Each user has their own profile containing a timeline of everything they have posted, liked, shared and specific collections they’ve created. They also have their own dashboard feed which shows all of the art posted by the people they follow in chronological order. We want the user to interact with posts by commenting, liking, and sharing!

**Team: Michaela Bateman, Jerrad Moon, Jonathan Cochran, Sacha Sedriks**

<br />

## 1. Working Prototype
You can access a working prototype of the React app here: **https://artsy-client.vercel.app/**

The corresponding Node Express Sever repo here: https://github.com/jcochran206/artsy-capstone-server


<br />

## 2. User Stories (to do later or disregard?)
This app is for two types of users: a visitor and a logged-in user

#### (Example) Landing Page
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it


<br />

## 3. Functionality (to do later)
The app's functionality includes:
* (Example with corresponding screenshot) Every User has the ability to create an account

<details><summary><b>CLICK</b> to expand to view screenshots</summary>

**Explore Feed** `/feed/explore`

User can view posts from across the community

<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/screenshots/feed_explore.png" alt="explore feed" width="300"/>

<br>

**Profile: posts (default)** `/profile/:username`

<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/screenshots/profile_posts.png" alt="explore feed" width="300"/>

</details>


<br />

## 4. Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres, and Cloudinary API (for image storage)
* Development Environment: Vercel, Heroku, DBeaver


<br />

## 5. Wireframes etc (to do later)
<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/suite_of_views.png" alt="suite of views" width="600"/>

* ['Greybox' HTML Wireframes](https://jcochran206.github.io/artsy-capstone-client/greybox/)

* [Screen Inventory](https://github.com/jcochran206/artsy-capstone-client/blob/main/docs/screen_inventory.md)

* [User Flows](https://github.com/jcochran206/artsy-capstone-client/blob/main/docs/user_flows.pdf)


<br />

## 6. Front-end Structure - React Components Map (to do later)
* (Example) __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) -
        * __Navbar.js__ (stateless) -


<br />

## 7. Back-end Structure - Business Objects (to do later)
* (Example) Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)


<br />

## 8. API Documentation (to do later)
API Documentation details:


* **`POST`**
  * **`/api/posts`** create new post
  
* **`GET`** 
  * **`/api/posts`** get all posts
  
* **`PUT`**
  * **`/api/posts/:postId`** update post
  
* **`DELETE`**
  * **`/api/posts/:postId`** delete post

<br />

## Development Roadmap (to do later)
This is v1.0 of the app, but future enhancements are expected to include:
* (Example) add more functionality


## How to run it
Use command line to navigate into the project folder and run the following in terminal

### Local React scripts
* To install the react project ===> `npm install`
* To run react (on port 3000) ===> `npm start`
* To run tests ===> `npm run test`

### Local Node scripts
* To install the node project ===> `npm install`
* To migrate the database ===> `npm run migrate -- 1`
* To run Node server (on port 8000) ===> `npm run dev`
* To run tests ===> `npm run test`

<br />

<hr />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
