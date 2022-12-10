# foresight

Early stage founders need capital to grow, however, assessing tech startups is different than assessing traditional small businesses. #foresight helps bridge the gap between the traditional small business and startups by providing an assessment for financial institutes to assist in funding decisions.

## Screenshot
<img width="1435" alt="screenshottwo" src="https://user-images.githubusercontent.com/98852538/206814038-5cc0edb8-2f7f-4d9a-944d-357b25b69723.png">
<img width="1433" alt="screenshot" src="https://user-images.githubusercontent.com/98852538/206814049-55dc8c29-f8ba-4223-9af3-56c66f8b7a3b.png">

### Usage

1. As a founder, I want to to fill out a questionnaire about my company
2. As a founder, I want to view information about my company and how I present to investors
3. As a financial investor, I want to invite founders to join #foresight and fill out a questionnaire
4. As a financial investor, I want to see founders from the area that are using #foresight and looking to raise funds for their company
5. As a financial investor, I want to see all of my added and invited founders with their contact information on my home page

### Roadmap/Future Features

1. Founder Email functionality
2. Review and edit questionnaire before submitting
3. Admin user and login view to change visible questionnaire questions
4. SSO/Token authentication 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

### Installing

1. Create a database named `foresight`, or modify the `pool.js` file with your database name.
2. The queries in the `database.sql` file are set up to create all the necessary tables to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries,
3. Open your editor and run `npm install` in your terminal - this will install required dependencies.
4. Create a `.env` file at the root of the project and paste this line into the file:

  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string to keep your application secure. Here's a site that can help you: [https://passwordsgenerators.net/](https://passwordsgenerators.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
  
5. Start postgres if it is not already running
6. run `npm run server` in your terminal. (Default port is 5000, if port is in use modify `server.js` port variable.)
7. run `npm run client` in a new terminal - this will launch the app in the browser.
8. Navigate to `http://localhost:3000/#/registration`
9. Register a user here, this will create a user under the `CDFI` access_group
10. Navigate to `localhost:3000/#/register/founder`
11. Register a user here, this will create a user under the `FOUNDER` 
12. You are now free to move about the application with either user!

## Running the tests

### Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

### Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. Import the sample routes JSON file [v2](./PostmanPrimeSoloRoutesv2.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
   1. `POST /api/user/register` registers a new user, see body to change username/password
   2. `POST /api/user/login` will login a user, see body to change username/password
   3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

1. ![image](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
2. ![image](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
3. ![image](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
4. ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
5. ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
6. ![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
7. ![image](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
8. ![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
9. ![image](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
10. ![image](https://img.shields.io/badge/Redux%20saga-86D46B?style=for-the-badge&logo=redux%20saga&logoColor=999999)
11. ![image](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
12. ![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
13. ![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
14. ![image](https://img.shields.io/badge/Node.pg-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
15. ![image](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
16. ![image](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

## Authors

* **Alex Carufel - *Initial Work* - [Caraul42](https://github.com/Carual42)
* **Meaghan Reinschmidt - *Initial Work* - [meaghanreinschmidt](https://github.com/meaghanreinschmidt)
* **Mark Schumacher - *Initial Work* - [VenoMidas](https://github.com/VenoMidas)
* **Brianna Oliveira - *Initial Work* - [briolive](https://github.com/briolive)
* **Kyle VanTassel - *Initial Work* - [0cticon](https://github.com/0cticon)

See also the list of [contributors](https://github.com/VenoMidas/foresight/graphs/contributors) who participated in this project.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgement

Thanks to [Prime Digital Academy](https://www.primeacademy.io/) and members of the Phrygian cohort who equipped and helped us to make this application a reality.
