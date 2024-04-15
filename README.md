# Netflix-Gpt
 Chat Gpt powered movie recomondation in netflix.

# steps perfomed
1. create react App
2. configure tailwind
3. Header
4. Login Form
5. singup form
6. Form Validation
7. validation by using useRef hook
8. Firebase Auth 
    - Created a firebase for project
    - installed in npm
    - Select Authentication methods
    - firebase login from vscode
    - init
    - Hosting- configure files manually and deploy not from github
    - make folder as a src folder named it as "build" for hosting 
    - before deploy run "npm build" to build as optimised minified project for hosting.
    - It  creates a optimised build product
    - firebase deploy for deploy the app
    - successfully deployed.
9. Create user account in firebase by signup/signIn code and connects to browse page.
10. Created Redux store.
    - userslice created.
    - Userslice dispatchers for username on screen for after login and logout.
    - after login navigate to the browse page.
11. UseNavigate Hook
    - used to navigate over pages.
    - Signout from Browse to home.
12. Display name and profile when user login and vanish after logout. for that use "Manage users-> update profile APi after signIn". Finally login, signup and authentication is working fine.
13. Restricted the uncontrolled navigations. (If logins , can't navigate to login page from browse by url)
14. Unsubscribe onauthstatechanged eventlistener.
15. HardCoded values store in constant.js
16. Login to tmdb.
17. Created API key in tmdb. go to documentation and extract script of API fetch with options.
18. TMDB integration
19. Redux store created, movie slice created .
20. Fetch data of movies.
21. Custom hooks created for nowPlayingvideo and trailerVideo.
22. Embedded youtube video and make it more better using tailwindcss
23. Maincontainer with some live video is created.

* Why react renders two times App? due to the strictMode using

 

# Features
- Login/signup
    - singin/signUp 
    - redirect to browse page

- Browse (after authentication)
    - Header
    - Trailer -bg
    - Title and desc
    - playbutton
    - movie suggestions
        - Movies with features

- Netflix Gpt
    - search bar
    - Movie recommondations

