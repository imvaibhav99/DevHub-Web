->Install vite react,Tailwind css and Daisy UI
->Add navbar from DaisyUI into NavBar.jsx and import it to App.jsx
->install npm i react-router-dom
->All the routing must be done in the App.jsx

->BrowserRouter: The router wrapper component. It enables routing functionality by watching the browser's URL and rendering the appropriate components.
->Routes: This is the container for all <Route /> components. It tells React Router how to handle matching paths.
->Route: Defines an individual route and what component to show for a specific path.

->Body.js: Only used for routes which attached with the <NavBar> and <Footer> though <Outlet/> as children route, and for the <Login> and <SignUp> routes are directly provided by App.jsx

->Login.js: 

added the useState hooks for the email and password,then for handling login button and calling api: npm i axios ->To handle promises and fetch apis
->When api call are from one domain to different domain CORS error occurs
<!-- const handleLogin= async ()=>{
  try{
const res = await axios.post(
  "http://localhost:7777/login",{     //this is to know the backend web addredd
    emailId,
    password,
  },
  {
    withCredentials: true,  //to allow token creation while login in cookie
  }
);
}catch(err){
    console.error("Login failed:", err);
   
  }
} returns the req.user data -->
<!-- <button className="btn btn-primary" onClick={handleLogin}>Login</button> -->Now the api will be called when clicking login
->Install npm i cors in backend,use it as middleware in app.js->Now the api can be called but the token cookie will not be recieved by browser till we whitelist the address of api:
    ->in app.js backend:
    <!-- app.use(cors({
    origin:"http://localhost:5173", adding frontend
    credentials:true, //allow cookies to be sent with requests
})); -->

->npm install @reduxjs/toolkit and npm install react-redux   //state management library

->create the src->utils->appStore.js: create the appStore which will act as a box to store all the data of the website at one place so that every route of app can use the given data->Instead of using the data as props in each route,we use it through the redux
->create the userSlice.js and export it to appStore and use the reducer;
->Wrap all the route inside the <Provider store={ appStore }> < /Provider>

->Now to add data to the redux store,we use useDispatch hook:
<!-- import { addUser } from '../utils/userSlice.js'; -->
<!-- dispatch(addUser(res.data)) -->
->When entered login details and clicked login->to enter the feed route,use {useNavigate} hook from 'react-router-dom' and add navigate("/feed");

->While refreshing the page after reaching feed page,the login details disappears and user gets logged out,and the datails get vanish despite the login token being there,so to resolve this issue,useEffect hook will be used.
->Everything else except login/signup comes from the Body:
<!-- const dispatch = useDispatch(); //to upload the data to redux store
  const fetchUser = async () =>{
    try{
    const user= await axios.get(BASE_URL + "/profile/view",{
      withCredentials:true, //for cors and token cookies
    });
    dispatch(addUser(user.data));
  } catch (err){
    console.error("Error fetching user:", err);
  }
    }
    useEffect(()=>{
      fetchUser();
    },[]) --> Now the user remains logged in,even after refresh

    