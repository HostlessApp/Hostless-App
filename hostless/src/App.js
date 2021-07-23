import "./App.css";
import AddRestaurant from "./components/Restaurant/AddRestaurant";
import AddUser from "./components/AddUser";
import axios from "axios";

function App() {

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

  return (
    <div className="App">
      <AddRestaurant createRestaurant={createRestaurant} />
      <hr />
      <AddUser createUser={createUser} />
      {/* <main>
            <Route />
        </main> */}
    </div>
  );
}

export default App;
