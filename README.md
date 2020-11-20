# Capstone: Artsy
'Artsy' is an application in which sharing art with your friends and followers is easier than ever. Each user has their own profile containing a timeline of everything they have posted, liked, shared and specific collections they’ve created. They also have their own dashboard feed which shows all of the art posted by the people they follow in chronological order. We want the user to interact with posts by commenting, liking, and sharing!

**Designed and Built by: <a href="https://github.com/bateman001" target="_blank">Michaela Bateman</a>, <a href="https://github.com/jerradm85" target="_blank">Jerrad Moon</a>, <a href="https://github.com/jcochran206" target="_blank">Jonathan Cochran</a>, <a href="https://github.com/artificialarea" target="_blank">Sacha Sedriks</a>**



<br />

## 1. Working Prototype
You can access a working prototype of the React app at: **https://artsy-client.vercel.app**

Corresponding node.js Express Server repo at: https://github.com/jcochran206/artsy-capstone-server




<br />

## 2. Technology
* **Front-End:** HTML5, CSS3, JavaScript ES6, React
* **Back-End:** Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres, and Cloudinary API (for image storage)
* **Development Environment:** Vercel, Heroku, DBeaver



<br />

## 3. Functionality (WIP)
<details><summary><b>CLICK</b> to expand to view screenshots</summary>

<br />
<br />

**Explore Feed** `/feed/explore` User can view posts from across the community

<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/screenshots/feed_explore.png" alt="explore feed" width="300"/>

<br />
<br />
<br />

**Profile: posts (default)** `/profile/:username` Users profile features all tehir posts of artwork, as well as links to users they are following and their followers.

<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/screenshots/profile_posts.png" alt="explore feed" width="300"/>

</details>




<br />

## 4. Wireframes & User Flows
<img src="https://raw.githubusercontent.com/jcochran206/artsy-capstone-client/main/docs/suite_of_views.png" alt="suite of views" width="600"/>

<br />

See: **['Greybox' HTML Wireframes](https://jcochran206.github.io/artsy-capstone-client/greybox/)**

See: **[User Flows](https://github.com/jcochran206/artsy-capstone-client/blob/main/docs/user_flows.pdf)**



<br />

## 5. Front-end Structure - React Components Map (to do later)
* (Example) __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) -
        * __Navbar.js__ (stateless) -


<br />

## 6. Back-end Structure - Business Objects (to do later)
* (Example) Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)


<br />

## 7. API Documentation (to do later)
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
* Personalized Avatar image for profile
* Liking a post (and saving it to your profile)
* Re-posting someone else's post
* Pagnination of posts in a feed via an "infinity scroll" mechanic
* Notifications (informing the user when their post has received a comment or they they have a new follower)
* Deletion of images stored in the Cloudinary database thru our server
* More compelling non-signed experience, especially on the landing page

<br />

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
