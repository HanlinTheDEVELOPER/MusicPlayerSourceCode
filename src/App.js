import React from "react";
import Side from "./component/side";
import Main from "./component/main";
import { nanoid } from "nanoid";

export default function App() {
  const tabArray = [
    {
      id: nanoid(),
      isShown: true,
      icon: "fa-solid fa-home",
      name: "Home",
    },
    {
      id: nanoid(),
      isShown: false,
      icon: "fa-solid fa-heart",
      name: "Favourites",
    },
    {
      id: nanoid(),
      isShown: false,
      icon: "fa-solid fa-clock",
      name: "Recents",
    },
    {
      id: nanoid(),
      isShown: false,
      icon: "fa-solid fa-gear",
      name: "Setting",
    },
    {
      id: nanoid(),
      isShown: false,
      icon: "fa-brands fa-glide",
      name: "Guide",
    },
    {
      id: nanoid(),
      isShown: false,
      icon: "fa-solid fa-right-from-bracket",
      name: "Exit",
    },
  ];

  const [dark, setDark] = React.useState(
    JSON.parse(localStorage.getItem("isDark"))
  );
  const [tab, setTab] = React.useState(tabArray);

  React.useEffect(() => {
    localStorage.setItem("isDark", dark);
  }, [dark]);

  function toggleDark() {
    setDark(!dark);
  }
  function handleShow(id) {
    setTab((prevTab) =>
      prevTab.map((tab) => {
        return tab.id === id
          ? { ...tab, isShown: true }
          : { ...tab, isShown: false };
      })
    );
  }

  const darkie = {
    backgroundColor: dark ? "#01234e" : "#90e0ef",
    color: dark ? "#90e0ef" : "#01234e",
  };

  const elements = tab.map((element) => (
    <Side {...element} handleShow={() => handleShow(element.id)} dark={dark} />
  ));

  return (
    <main className="App">
      <main className="sideBar" style={darkie} dark={dark}>
        {elements}
      </main>
      <Main {...tab} dark={dark} toggleDark={toggleDark} />
    </main>
  );
}
