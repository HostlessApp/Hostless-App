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
import Nav from "./components/Nav";
import Slots from "./components/Slots";
import Reservation from "./components/Reservation";

function App() {
  
var userRes

const [restaurantState, setRestaurant] = useState('')

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
    axios.post("http://localhost:3000/restaurants", payload)
        .then((res) => console.log(res));
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
      setUserState(userState => {
        return {...userState, admin: !userState.admin}
      })
      console.log(userState)
  }

  return (
    <div className="App">

      {userState.admin ? <p>Admin User</p> : <Nav userState={userState} handleAdmin={handleAdmin}/>}
      

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
          {/* Routing for restaurant detail */}
          <Route exact path ='/restaurants/:id'
            render={routerProps => (<RestaurantDetail match={routerProps.match} setRestaurant={setRestaurant} restaurantState={restaurantState} />)}
          />

           {/* Routing for time slots */}
          <Route exact path='/restaurants/:id/:dayId'
            render={routerProps => (<Slots match={routerProps.match} restaurantState={restaurantState} />)}
          />

          {/* Routing for reservation confirmation */}
          <Route exact path='/restaurants/:id/:dayId/:resId'
            render={routerProps => (<Reservation match={routerProps.match} restaurantState={restaurantState} />)}
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
