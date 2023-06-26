
# Ground
***Ground is the app that makes journaling and logging your daily rhythm a breeze!***

As part of BrainStation's full-stack bootcamp, I am working on my capstone project, where I have been given the challenge of creating a full-stack application within a two-week timeframe. I am utilizing technologies such as create-react-app, react-router, Framer Motion, Chart.js, and SASS for the front end, while the back end consists of a Node/Express backend API and Knex for querying a MySQL database. However, the project is still a work in progress, and there may be changes as I continue to develop it.

[Click here](https://www.canva.com/design/DAFm8LwgN8Q/eA9cm0qniARHnB8dT_5srQ/edit?utm_content=DAFm8LwgN8Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) to watch my demo presentation. 

Thank you for checking it out :)

-David (2023-06-26)

![Screenshot of Ground app](./demo/screenshot.jpg)

Tech stack used:
* Framer Motion
* Chart.js
* Axios
* React -> Create-react-app, Browser-Router
* Node 
* MySQL
* Express

# Features and/or usage instructions:
* Read the "What is it about" section
* Click the "Daily Log" button on the top right and fill out your daily form.
* The form will navigate you after to the Insights page where you'll be able to see the choices you've inputed within a graph, your last 5 text logs, and your streak.
* As this app works also like a journal, you can go and see all you journal history in the "View all of your logs" page.

# Installation on developer and production environments:
Follow these steps to run a local instance of Ribbon:
(You'll need node, npm, and MySQL already installed.)

1. Clone or download this repo.

#### Set up the backend
2. Create a new database in MySQL called ribbon.

3. Install server dependencies:

  Run `npm install` from inside the server directory.
```http
$ cd ground-back
$ npm install
```
4. Run migrations

```http
$ npm run migrate
```
5. Run seeds
```http
$ npm run seed
```

6. Set environment variables:

Rename .env_sample to .env and change placeholder values with your own.
```http
PORT=<PORT_NUMER>
DB_HOST=<HOST ADDRESS>
//JWT_SECRET=<SECRET KEY> //for future reference
DB_LOCAL_DBNAME=ground
DB_LOCAL_USER=<YOUR DB USERNAME>
DB_LOCAL_PASSWORD=<YOUR DB PASSWORD>
```

7. Start the server:
```http
  node server.js
```

#### Set up the frontend
8. Install client dependencies:
```http
 $ cd ./ground-front
 $ npm install
```

9. Start the React app:
```http
 $ npm start
```

# API references:

#### Get all items

```http
  GET http://localhost:8080/users
```

#### Get item

```http
  GET http://localhost:8080/users/1/logs
```



# Lessons learned & next steps:
* I've learned how to troubleshoot MySQL when things don't go as expected.
* I've leaned useful tools such as Framer to create beautiful smooth animations.
* I learned how important is user insight, and to always ask for an opinion.
* I've learned the beauty of asking for help even when you somewhat know what to do, a person can also sit there and be your rubberduck (if they have the time ofc).
* I've solidified my understanding of front and back end and their interaction. 

* For next steps:
1. I'd love to follow-through and create a resource page where a user can find useful information for where they reside. Info such as emergency contact, useful articals about soothing methodology, and maybe psychology related insight snippets. 
2. I want to fix some bugs that may dimish a good user experience. traveling between pages, general styling etc. 
3. I want to add authentication page.

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

