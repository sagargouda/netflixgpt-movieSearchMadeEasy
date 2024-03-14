# Netflix GPT
    
- Create React App
- Configured Tailwind CSS
- Header
- Login Form
- Sign up Form
- form validation
- firebase setup
- deploying my app to firebase
- Created Signup user Account
- implement sign in user api
- created redux store with user slice
- implemented sign out
- updated profile
- Fixed a bug (redirect and refactored useeffect in header component)
- Header photo fixed 
- made api call to tmdb and got a movielist and stored it in my store by creating movie slice
- created custom hook for fetching data from tmdb movielist api

- made plan for structuring UI (2 section)
- 1) Main video part we have trending movie and it's trailer is running constantly
- 2) Movie Lists or secondary container

- Main Container
     - video background
     - video title
- Movie List container or secondaryContainer
     - MovieList * N (rows)
        - Cards * N (Many cards)

- First I built Main container
  -  Video Background 
  -   video Title
  - overlapped them
 - Also fetched trailer from Videos api by filtering only Trailer
 - created a custom hook for getting trailer video , we fetch youtube video dynamically
 - built video background same like netflix 

- Second I built secondary container
- Movie Lists (multiple movielists)
  - popular
  - trending
  - now playing
  - horror
  
- Cards
  - in each movie list we have multiple movie cards

- 2 components 1) movie list , 2) movie card


- now next is gpt search recommendation system



# Features
- Login / Sign Up 
     - Sign In / Sign Up Form
     - Redirect to Browse Page
- Browse (After Authentication)
   - Header
   - Main Movie
        - Trailer in Backround Running
        - Title and Description
        - Movie Suggestion
             - MovieLists 

- NetflixGpt
    - Search Bar
    - Movie Suggestion