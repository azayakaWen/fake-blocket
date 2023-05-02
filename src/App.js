import "./App.css"
import ColorLine from "./components/ColorLine"
import Navbar from "./components/Navbar"
import SearchWindow from "./components/SearchWindow"
import Content from "./components/Content"

import "./style/Navbar.css"
import "./style/ColorLine.css"
import "./style/SearchWindow.css"
import "./style/Content.css"

function App() {
  return (
    <div className="App">
      <header>
        <ColorLine />
        <Navbar />
      </header>
      <SearchWindow />
      <Content />

      <div className="attribution">
        {" "}
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          {" "}
          Freepik{" "}
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com'
        </a>
      </div>
    </div>
  )
}

export default App
