import AppHeader from "./components/AppHeader.jsx";
import AppPost from "./components/AppPost.jsx";
import AppFooter from "./components/AppFooter.jsx";

function App() {


  return (
    <>
      <div className="container">
        <AppHeader />
        <AppPost />
      </div>
      <AppFooter />
    </>
  )
}

export default App
