import "./App.css"
import ColorLine from "./components/ColorLine"
import Navbar from "./components/Navbar"
import SearchWindow from "./components/SearchWindow"
import Content from "./components/Content"
import Commercial from "./components/Commercial"

import "./style/Navbar.css"
import "./style/ColorLine.css"
import "./style/SearchWindow.css"
import "./style/Content.css"
import "./style/Commercial.css"

function App() {
  return (
    <div className="App">
      <header>
        <ColorLine />
        <Navbar />
      </header>
      <SearchWindow />
      <Content />
      <Commercial />

      <div className="attribution">
        <div>
          <p>
            This page is a student project to try to copy the style of{" "}
            <a href="https://www.blocket.se/">Blocket</a>.
          </p>
          <p>
            All images are copied from{" "}
            <a href="https://www.blocket.se/">Blockets</a> webpage.
          </p>
        </div>{" "}
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
