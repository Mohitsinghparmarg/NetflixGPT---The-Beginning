# Netflix GPT

 - Create React App
 - configured TailwindCSS
 - Header
 - Routing of App
 - Login Form
 - Sign up Form
 - Form Validation
 - useRef Hook
 - Firebase Setup
 - Deploying our app to production
 - Create Signing User Account
 - Implemented Sign In User API
 - created Redux Store with userSlice
 - Implemented Sign out
 - Update Profile
 - BugFix:Sign up user displayName and profile picture update
 - BugFix: if the user is not logged in Redirect /browse to login page and vice-versa
 - unsubscribe to the onAuthStateChanged callback
 - Add HardCoded Values to the constants files
 - Register TMDB API & create an app & get access token
 - Get Data from TMDB now playing movies list API
 - Custom Hook for Now Playing Movies
 - Create movieSlice
 - Update Store with movies Data
 - Planning for MainContainer & Secondary Container
 - Fetch Data for Trailer Video Data
 - Update Store with Trailer Video Data
 - Embedded the Youtube video and make it autoplay and mute
 - Tailwind Classes to make Main Container look awesome
 - Build Secondary Component
 - Build Movie List
 - Build Movie Card
 - TMDB Image CDN URL
 - Made the Browse page amazing with Tailwind CSS
 - usePopularMovies Custom hook
 - created some custom hooks like (useMysteryMovies,useTopRatedMovies,useUpcomingMovies...)
 - GPT Search Page
 - GPT Search Bar
 - (BONUS) Multi-language Feature in our App
 -  Get GEMINI Api Key
 - Gpt Search API Call
 - fetched gptMoviesSuggestions from TMDB
 - created gptSlice added data
 - Reused Movie List component to make movie suggestion container 
 - Memoization
 - Added .env file
 - Adding .env file to gitignore
 - Made our Site Responsive


 # Features


  - Login/Sign Up
     - Sign In/Sign up Form
     - redirect to Browse Page
  - Browse (after authentication)
    - Header
    - Main Movie
       - Trailer in Background
       - Title and Discription
       - MovieSuggestions
          - MovieLists * N
    
  - NetFlixGPT  
     - Search Bar
     - Movie Suggestions






## Tech Marvels:

   - Form Validation
   - Firebase Authentication (Login/Logout)
   - React Router Dom for seamless routing
   - TMDB API for a vast movie database
   - Gemini API for intelligent movie searches
   - Multilingual Support
   - Netflix & IMDb-inspired UI with Tailwind CSS
   - Redux Toolkit for efficient state management
   - Responsive design for mobile devices
   - Memoization for optimized performance

## Technologies Used :
   
   - React.js: A popular JavaScript library for building user interfaces.
   - Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
   - Redux Toolkit: A state management library that simplifies the management of application state.
   - Firebase: A backend-as-a-service platform for authentication and real-time database support.
   - TMDB API: The Movie Database API is used to fetch movie and TV show data
   - Gemini API: The OpenAI API is used for advanced movie search functionality using GPT.
   - npm create-react-app: A tool for setting up a new React.js project quickly.

## Getting Started :
    
   - To get started with NetflixGPT on your local machine, follow these steps:
      1. Clone this repository:
            git clone https://github.com/yourusername/NetflixGPT.git
      2. Change to the project directory:
           cd NETFLIXGPT- The BEGINNING
      3. Install the project dependencies:
           npm install
      4. Create a Firebase project and configure it with your Firebase credentials.
      5. Create an GEMINI API account and obtain an API key.
      6. Set up your environment variables with the necessary API keys and configurations.
      7. Start the development server:
           npm start
      8. Access the application in your web browser at http://localhost:3000


