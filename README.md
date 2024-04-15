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

