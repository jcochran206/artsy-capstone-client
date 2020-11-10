# Screen Inventory

### URL Routes:
* **`/`** 
    * _if valid token and user signed in..._ 
      * rerouted to **`/feed`** -- user's "homepage" feed 
    * _else..._ 
      * _**{TBD}**_ rerouted to **`/about`?** -- introductory landing page

<br />
    
* **`/about`** landing page for non-signed-in user with info about the site

<br />
    
* **`/login`**
* **`/registration`**

<br />

* **`/feed/explore`** -- feed of posts from everyone in the wider community
* **`/feed/home`** -- user's "homepage" feed with posts by people the user follows (and if possible, including the user's own posts in the mix, too)

<br />

* **`/users/:userId`** -- profile page _**{TBD: URL might be more human `/users/:username`}**_
  * _subviews that likely require no `route url` change:_
  * `[default]` **feed** of all of that user's posts 
  * `/users/:userId/likes` -- **feed** of all posts a user has liked
  * `/users/following` -- list of all users followed
  * `/users/followed` -- list of all users following you
  
* **`/edit/:userId`** -- form inputs (pre-populated) to submit updated profile info and avatar

<br />

* **`/search`** -- essentially blank page (instead of global nav modal) with a search input to enter some :text
* **`/search/:text/posts`** -- `[default]` search results displaying posts with titles (and descriptions?) that contain the search `:text`
* **`/search/:text/users`** -- search results displaying users whose :usernames that contain the search `:text`

<br />
  
* **`/posts/:postId`** -- "resource" post page _**{TBD: may only be modal, not a destination}**_

<br />

* **`/new-post`** -- form inputs to submit new post
* **`/edit/:postId`** -- form inputs (pre-populated) to update post data or delete post

<br />

* **`/____`** -- 404 page

<br />

### Modals(?):
* **login/register overlay** appears if un-signed-in user tries to interact with a post (say, like it)?
* **post overlay** appears when click on a post in a feed?
* **edit post overlay** appears when click post edit button?
* **searchbox in global nav**

<br />
