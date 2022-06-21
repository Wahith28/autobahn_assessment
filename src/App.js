import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

import Navbar from "./components/Navbar";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        dispatch({ type: "GET_DATA", payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        dispatch({ type: "ADD_USER", payload: [...selector, data] });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = async (input, id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        input
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((res) => {
        console.log("in", input);

        dispatch({ type: "EDIT_USER", payload: input });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        const temp = selector.filter((user) => {
          return user.id !== id;
        });
        dispatch({ type: "DELETE_USER", payload: temp });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(users);
  console.log(selector, "sele");
  return (
    <div className="App">
      {/* <h3>React Crud Using Jsonplaceholder</h3> */}
      <Navbar
        onAdd={onAdd}
        users={selector}
        onDelete={onDelete}
        onEdit={onEdit}
        data={selector}
      />
      <br />

      {/* </div> */}
    </div>
  );
};

export default App;
