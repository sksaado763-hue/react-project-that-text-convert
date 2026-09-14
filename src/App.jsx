import Header from "./components/header"
import Textarea from "./components/Textarea"


const App = () => {
  return (
    <div>
      <Header tittal="TextUtils" />
      <div className="text-area" margin="10px" align="center" text-align="center ">
      <Textarea className  h1 = "write same thing hare"/>
      </div>
    </div>
  )
}

export default App