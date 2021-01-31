# Weekend Challenge: Feedback Loop

## Description
For this week of Prime Digital Academy's Full-Stack Engineering bootcamp, we were tasked with building a full-stack form with React to collect feedback from a user. The form has a few pages, each collecting a small piece of feedback, with the goal of using that feedback to improve the quality of the admins program. As the user navigates through the form, they submit information on each page. That information is stored in Redux until the user is ready to submit their final responses. The user is able to navigate back and forward through the forms to change their responses. When they click the submit button, the information held by Redux is sent to the database, and its memory is cleared out, leaving a blank slate for the next user. Though this page doesn't have user validation, one can access a secret '/admin' page outside of the normal page flow. There, the admin can see all the responses from the users, sorted by newest to oldest. The admin can delete feedback, and also flag it for further review.

## Screen Shots
![Home page](/public/images/home.png)
![A page from the form](/public/images/form.png)
![User can submit custom comments](/public/images/comments.png)
![Final approval](/public/images/submit.png)
![Admin view](/public/images/admin.png)

### Prerequisites
* NodeJS
* mySQL/Postgres/Postico
* React
* Redux

## Installation
1. Type `npm install` to install all dependencies
1. Create Postgres/Postico database per information in `data.sql`
1. Type `npm run server` to start your NodeJS server
1. Type `npm run client` to launch the react app on your browser

## Built With
* NodeJS
* Postgres/Postico
* React
* Redux
* Express
* SweetAlert
* Material UI

## Usage
1. As a user, click the `Let's Begin` button on the home page
1. Input your feedback for the day (note: feedback is required in ALL fields except for comments)
1. If you're satisfied with your feedback, click the `Submit` button on the review page
    1. Note: data is cleared from Redux on submission of data, the user is routed to the home page to start again

Now, if you're an admin
1. Navigate to `http://localhost:3000/#/admin` where you can review all feedback, sorted from new to old
1. If you'd like to delete a piece of feedback, click the delete button for that row on the table
1. If you'd like to flag a piece of feedback for further review by you or another admin, click the flag button for that row
1. Flagging and deleting interact with the database, be mindful of what you click. Deleting is permanent!
    1. The admin is require to validate and delete requests. Flagging can be undone by a second click of the flag button.
1. When finished, click `Return to Home` to go back to the home page. All temporary data stored in Redux will be cleared.

## Acknowledgements
Huge thanks to everyone at [Prime Digital Academy](http://primeacademy.io)for teaching me the skills I needed to build something like this. Huge thanks especially to [Dane Smith](), [Kris Szafranski](https://github.com/kdszafranski), and [Edan Schwartz](https://github.com/eschwartz).

Thanks also to my classmates [Travis Huss](https://github.com/travisjhuss) and [Joe Meyer](https://github.com/meyerj19) for crashing the boards with me this last week and helping get a handle on the material!
