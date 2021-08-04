import "./App.css";
import AddRestaurant from "./components/Restaurant/AddRestaurant";
import AddUser from "./components//User/AddUser";
import UpdateUser from "./components/User/UpdateUser";
import RestaurantList from "./components/Restaurant/RestaurantList";
import {Fragment, useState} from 'react'
import axios from "axios";
import {Route, Redirect, useHistory} from 'react-router-dom'
import SearchParams from "./components/SearchParams";
import RestaurantDetail from "./components/Restaurant/RestaurantDetail";
import Nav from "./components/Nav";
import Slots from "./components/Slots";
import Reservation from "./components/Reservation/Reservation";
import EditRestaurant from "./components/Restaurant/EditRestaurant";
import ReservationList from "./components/Reservation/ReservationList";


function App() {
  
var userRes

let history = useHistory()

const [restaurantState, setRestaurant] = useState({
  name: "Mr Beans Lair",
  description: "It is a restaurant with beans as food",
  address:{
      street: "1234 Street",
      city: "Happy Town",
      state: "FL",
      zip: "123456"
  }, 
  internalID: 1
})

const [userState, setUserState] = useState({
      name:{
          first: "John",
          last: "Smith"
      },
      username: "jsmith2",
      admin: true
  })

const [restaurantList, setRestaurantList] = useState([])

const [reservationState, setReservationState] = useState({
  date: '',
  user: userState.username,
  // user: null,
  // userObj: null,
  restaurant: '',
  time: ''
})

//const [reservationList, setReservationList] = useState([])

const [checkState, setCheckState] =  useState(userState.admin)

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
      console.log('userRes: ', userRes[0])
      setUserState(userRes[0]) // TODO - user cast ObjectId error
    })
  }

  //updates user in db
  function updateUser(data){
    const payload = data;
    console.log(payload)
    axios.put(`http://localhost:3000/users/edit/${userState.username}`, payload)
      .then((res) => console.log(res));
  }

  //delete user in db
  function deleteUser(){
    axios.delete(`http://localhost:3000/users/edit/${userState.username}`)
  }

  //update restaurant in db
  function updateRestaurant(data){
    const payload = data;
    console.log(payload)
    axios.put(`http://localhost:3000/restaurants/edit/${restaurantState.internalID}`, payload)
      .then((res) => console.log(res));
  }

  //changes admin field in userState
  function handleAdmin(){
    let newState = !userState.admin
      setUserState(userState => {
        return {...userState, admin: newState}
      })
      setCheckState(newState)
      console.log(newState)
      history.push("/restaurants")
  }

  //sends reservation data to backend
  function sendRes(e){
  // function sendRes(event){
    e.preventDefault()
    // findUser()
    // setReservationState({...reservationState, user: userRes[0]}) 
    axios.post('http://localhost:3000/reservations', reservationState)
    .then(res => console.log('reservation posted: ', res))
    // .then(() => this.props.location('http://localhost:3002/reservations'))
    history.push("/reservations")
  }

  // cancels the reservation
  function cancelRes(event){
    // event.preventDefault();
    // <Route exact path to='/reservations'/>
    console.log('hit cancel reservation')
  }

  return (
    <div className="App">

      <Nav userState={userState} handleAdmin={handleAdmin} restaurantState={restaurantState} checkState={checkState}/>

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
            render={routerProps => (<RestaurantDetail match={routerProps.match} setRestaurant={setRestaurant} restaurantState={restaurantState} reservationState={reservationState} setReservationState={setReservationState} />)}
          />

           {/* Routing for time slots */}
          <Route exact path='/restaurants/:id/:dayId'
            render={routerProps => (<Slots match={routerProps.match} restaurantState={restaurantState} reservationState={reservationState} setReservationState={setReservationState} />)}
          />

          {/* Routing for Reservation List */}
          <Route path='/reservations'
            render={routerProps => (<ReservationList userState={userState} reservationState={reservationState} restaurantState={restaurantState} />)}
          />

          {/* Routing for reservation confirmation */}
          <Route exact path='/restaurants/:id/:dayId/:resId'
            render={routerProps => (<Reservation match={routerProps.match} restaurantState={restaurantState} reservationState={reservationState} setReservationState={setReservationState} findUser={findUser} userState={userState} sendRes={sendRes} cancelRes={cancelRes} />)}
          />

          {/* Routing for restaurant edit */}
          <Route exact path='/edit/restaurant/:id'
            render={routerProps => (<EditRestaurant match={routerProps.match} restaurantState={restaurantState} updateRestaurant={updateRestaurant} />)}
          />

          {/* Routing for home page */}
          <Route exact path = '/restaurants'
            render ={() => 
              <Fragment>
                <SearchParams />
                <RestaurantList restaurantList={restaurantList} setRestaurantList={setRestaurantList} reservationState={reservationState} setReservationState={setReservationState} />
              </Fragment>
            }/>
      </main>
    </div>
  );
}

export default App;
