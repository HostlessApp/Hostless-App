import "./App.css";
import AddRestaurant from "./components/Restaurant/AddRestaurant";
import AddUser from "./components//User/AddUser";
import UpdateUser from "./components/User/UpdateUser";
import RestaurantList from "./components/Restaurant/RestaurantList";
import {Fragment, useState} from 'react'
import axios from "axios";
import {Route, Link} from 'react-router-dom'
import SearchParams from "./components/SearchParams";
import RestaurantDetail from "./components/Restaurant/RestaurantDetail";

function App() {
  
var userRes

const [userState, setUserState] = useState({
      name:{
          first: "John",
          last: "Smith"
      },
      username: "jsmith1",
      admin: false
  })
const [restaurantList, setRestaurantList] = useState([])

  function createRestaurant(data) {
    const payload = data;
    console.log(payload)
    axios.post("http://localhost:3000/restaurants", payload).then((res) => console.log(res));
  }

  function createUser(data) {
    const payload = data;
    console.log(payload)
    axios.post('http://localhost:3000/users', payload)
      .then((res) => console.log(res));
  }

  //function to grab user _id from DB in order to pass it through update route
  function findUser() {
    axios.get('http://localhost:3000/users')
      .then(res => res.data)
      .then(res =>{
         userRes = res.filter(item => item.username === userState.username)
      console.log(userRes)
      setUserState(userRes)
    })
  }

  //updates user in db
  function updateUser(data){
    const payload = data;
    console.log(payload)
    axios.put(`http://localhost:3000/users/edit/${userState.username}`, payload)
      .then((res) => console.log(res));
  }

  function deleteUser(){
    axios.delete(`http://localhost:3000/users/edit/${userState.username}`)
  }

  //changes admin field in userState
  function handleAdmin(){
      userState.admin = !userState.admin
      setUserState(userState)
      console.log(userState.admin)
  }

  return (
    <div className="App">

      <nav>
        <Link class='navItem' to='/restaurants' >Find a Restaurant</Link>
        <Link class='navItem' to='/reservations'>My Reservations</Link>
        <Link class='navItem' to={`/edit/${userState.username}`}>My Profile</Link>
        <form onChange={handleAdmin}>
          <label htmlFor="adminToggle">Admin View</label>
          <input type="checkbox" name="adminToggle" id="" />
        </form>
      </nav>

      <main>
        {/* Routing for create fields (restaurant and user) */}
        <Route exact path = '/new'
          render={() => 
            <Fragment>
              <AddRestaurant createRestaurant={createRestaurant} />
              <hr />
              <AddUser createUser={createUser} userState={userState} setUserState={setUserState} findUser={findUser}/>
            </Fragment>
          }/>

          {/* Routing for user update */}
          <Route exact path = '/edit/:username'
            render ={() => <UpdateUser updateUser={updateUser} userState={userState} deleteUser={deleteUser}/>}
            />

          <Route exact path ='/restaurants/:id'
            render={routerProps => (<RestaurantDetail match={routerProps.match} />)}
          />

          {/* Routing for home page */}
          <Route exact path = '/restaurants'
            render ={() => 
              <Fragment>
                <SearchParams />
                <RestaurantList restaurantList={restaurantList} setRestaurantList={setRestaurantList}/>
              </Fragment>
            }/>
      </main>
    </div>
  );
}

export default App;
