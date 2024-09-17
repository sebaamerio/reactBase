import { useState, useEffect } from "react";
import { Form } from "./components/Form/Form";
import { Table } from "./components/Table/Table";
import { getTodos } from "./services/list.service";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getTodos().then((data) => {
      setList(data);
    });
  }, []);

  const getId = () => {
    let itemMayor = 0;
    list.forEach((item) => {
      if (item.id > itemMayor) itemMayor = parseInt(item.id);
    });

    return itemMayor + 1;
  };

  const handleAddItem = (pTitle) => {
    const newItem = {
      id: getId(),
      title: pTitle,
      completed: false,
    };
    setList([...list, newItem]);
  };

  const handleRemoveItem = (id) => {
    const newList = list.filter((item) => item.id != id);

    if (newList.length >= 0) {
      setList(newList);
    }
  };

  const handleCheck = ({ id }) => {
    const newList = list.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });

    setList(newList);
  };

  return (
    <div className="grid-container">
      <header className="header">
        <Form handleAddItem={handleAddItem} />
      </header>

      <article className="main">
        <Table
          elements={list}
          handleCheck={handleCheck}
          handleRemoveItem={handleRemoveItem}
        ></Table>
      </article>
      <footer className="footer"> footer</footer>
    </div>
  );
}

export default App;
