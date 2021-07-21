import "./App.css";
import AddRestaurant from "./components/Restaurant/AddRestaurant";
import axios from "axios";

function App() {

  function createRestaurant(data) {
    const payload = data;
    console.log(payload)
    axios.post("http://localhost:3000/restaurants", payload).then((res) => console.log(res));
  }


  return (
    <div className="App">
      <AddRestaurant createRestaurant={createRestaurant} />
      {/* <main>
            <Route />
        </main> */}
    </div>
  );
}

export default App;
