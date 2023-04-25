import { useState, Component, useEffect } from "react";

// string, number, booleans, component, array []
// function App() {
//   const [name, setName] = useState("hello");

//   return (
//     <div className="App">
//       {name}
//       {}
//       <button
//         onClick={() => {
//           setName("how are u?");
//         }}
//       >
//         Change
//       </button>
//     </div>
//   );
// }

function Compo() {
  return <div>hello</div>;
}

class App extends Component {
  state = { name: "hello", users: {} };

  componentDidMount() {
    console.log("Mount");
    fetch("http://localhost:4000/allUsers").then(async (res) => {
      const data = await res.json();
      console.log(data);
      this.setState({ users: data });
    });
  }

  // componentDidUpdate() {
  //   console.log("Mountupdated");
  // }

  // componentWillUnmount() {
  //   console.log("unmounted");
  // }

  render() {
    return <Compo />;
  }
}

function App2() {
  const [name, setName] = useState("hello");
  const [users, setUsers] = useState({});
  // const [state, setState] = useState({ name: "hello", users: {} });

  /* 1. [Dependency list] Runs when the component is rendered/re-rendered (in case any of the state variable changes). */
  useEffect(() => {
    console.log("Component is re rendered");

    return () => {
      console.log("Unmounted 2");
    };
  });

  /* 2. [Dependency list] Runs only when the component is mounted */
  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted 1");
    };
  }, []);

  /* 3. [Dependency list] Runs in case any of the dependencies */
  useEffect(
    () => {
      console.log("Value of name is updated");

      return () => {
        console.log("Unmounted 3");
      };
    },
    [name, users] /* Dependencies */
  );

  return <Compo />;
}

export default App;
