# MERN-Stack Infrastructure

Clone this repo to provide the starter code for a comprehensive MERN-Stack project including token-based authentication.

<details>
<summary>Creating Future MERN-Stack Projects</summary>

1. Clone the mern-infrastructure repo:
   
   ```git clone https://github.com/avilla13/MERN-Infrastructure.git <new-project-name>```
   
   + Note: The folder created will be same as `<new-project-name>` instead of MERN-Infrastructure
2. ```cd <new-project-name>```
3. Install the Node modules:  `npm i`
4. Create a .env (touch .env) and add entries for DATABASE_URL and SECRET
5. Update the `"name": "mern-infrastructure"` in package.json to the name of your project.
6. Build the React code to create the `build` folder, otherwise the Express server will not start up: `npm run build`
7. Create a new repo on your personal GH account.
8. Copy the new GH repo’s URL.
9. Update the remote’s URL:
    ```git remote set-url origin <paste the copied GH url>```
10. Make the initial commit:
    ```git add -A && git commit -m "Initial commit"```
11. Push for the first time:
    ```git push -u origin main```
12. Remember that the Express server won’t start without error until the `build` folder used by Express is created by running:
    ```npm run build```
13. Have fun with your new MERN project!




</details>