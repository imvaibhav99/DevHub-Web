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

    ->Adding the links for navigation,use <Link to="'></Link>,for logout and profile in NavBar
    ->Building the Logout button in the NavBar:


    <!-- const handleLogout = async () => {
    try {
    const res = await axios.post(BASE_URL + "/logout",{}, { withCredentials: true });
    console.log("Logout successful", res.data);
    dispatch(removeUser());
    navigate("/login");
  } catch (err) {
    console.error("Logout failed:", err);
  }
}; -->

  ->For error message           {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}

  ->Create the UserCard:
  <!-- const UserCard = ({ user, onLike, onPass }) => {
  if (!user) return null;
  const {
    firstName = "",
    lastName = "",
    age,
    gender,
    about = "No bio provided",
    photoUrl,
  } = user;

return(

); -->
->Create EditProfile.jsx: with Form fetching user details and showing on the form and also the user card showing the user details.

->create a connection page and show all the connections of the user in on place

->Create the accepted/ignored  (❤️/❌):use the redux store to fetch the data of the user and to remove the user data once ignored.Also update the feed instantly using the dispatch feature.




















->Deployement: 1> SIgnup 2>Launch instance > add new key pair->devhub-secret.pem 4>cd important-> chmod devhub-secret.pem -> ssh secret code -> yes-> it takes us to the terminal of our machine,now we are no longer in the desktop->important.  To exit the machine: write "exit" command.
->You have to reconnect to the machine using the same command if you leave the terminal for a while.

->Check the version installed in your project by node -v,and then download the same version in the machine:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash->exit->again start->nvm install 22.12.18(v)

git clone (http url) ->for both frontend and the backend project

-> Now build the project by running npm run build in your devhub-web terminal->it created a dist folder which compile all the files in one folder which is send for deployement.

->In machine: cd DevHub-Web/->npm install( to install all the dependencies)->npm run build