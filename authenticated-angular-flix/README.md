## Intro
This project is a continuation of the last Angular Flix project. If you noticed, that project had a problem. Any movie that you added to your list was added to the list of everyone else using the app. That would be like adding a Facebook friend, but then they become everyone's friend. We need data to be associated with a specific user. This requires authentication so that we know who each user is. Let's add sign up and log in to our app.


### Setup
* Sign up for [themoviedb.org](https://www.themoviedb.org/documentation/api)
* [Get your api key](https://www.themoviedb.org/settings/api)
* [Read the instructions](https://developers.themoviedb.org/3/getting-started/introduction)
* Fork, Clone, npm install, npm start
* Notice that when you start the app, nothing shows up. This is on purpose. We need to add our routing.


## Services
* Make sure to import your services into ngModule and add to the providers

### movie.service.ts
* Notice the path has been changed to `movies`.
* This is the authenticated path that will only work if the token is present.

### Create an Authentication Service
* This is the service to handle signing up and logging in
* The class needs a property for the token
* Create the signup and login methods
    * signup(username, password)
        * This method should call the `ApiService` post method passing in a path `auth/signup` and data `{username, password}`
        * Return the response object
    * login(username, password)
        * This method should call the `ApiService` post method passing in a path `auth/login` and data `{username, password}`
        * Extract the token from the response and save it in the token property
        * return the response object
    * getToken()
        * return `this.token`

## Components

### SignUpLogin
* Create a dual-use SignUpLogin component.
* Create an input for username and password. Make sure the name attribute is given a value.
* There should be a button for Sign Up and Login.
* Import and inject the AuthenticationService to use the methods.
* There should be a class property for `user` to store the `username` and `password`.
* Use ngModel to bind the inputs to the `user`. Make sure to implement the `FormsModule`.
* If the Sign Up button is clicked, do the signup process.
* If the Login button is clicked, do the login process.
* The signup process should automatically login the user.
* Display any error messages received.
* import the `Router` service and inject it.
* If login is a successful redirect to the `main` route. `this.router.navigate(['/main']);`.

### main.component.ts
* Notice the markup has been moved from the App component to the `Main` component
* This is because the main content should not be shown until a user does signup/login


### Routes
* Create two Angular routes `/` and `/main`
* `/` will show the SignUpLogin component.
* `/main` will show the Main component

### AuthInterceptor
* Create an HttpInterceptor called `AuthInterceptor`. 
* Add this to the providers array in ngModule
* Import and inject our Authentication Service so that you are able to get the token to add to the header.
* Make sure to add the header `Authentication` and the value `bearer thetoken`

### Bonus
* Use a route guard to prevent a user from going to `/main` unless they are logged in.
* Do you want users to stay logged in after refreshing the page? Where else could you store the token so it doesn't get cleared out.
* Allow the user to log out.


At this point, our flix app should be working the same as before. The only difference is that we are not sharing the movie list amongst all users. If we add a movie to our list, it should only show up for the logged-in user.
