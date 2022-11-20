import logo from "./logo.svg";
import "./App.css";
import { FirstReactComponent } from "./FirstReactComponent";
import ChildrenWithTitle from "./ChildrenWithTitle";
import ConditionalRenderingComponent from "./ConditionalRenderingComponent";
import RenderingLists from "./RenderingLists";

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>You look beautiful</p>
      <FirstReactComponent />
      <ChildrenWithTitle title="i'm title">i'm children</ChildrenWithTitle>
      <ConditionalRenderingComponent isBlue={true} />
      <ConditionalRenderingComponent isBlue={false} />
      <RenderingLists fullList={true} />
      <RenderingLists filteredList={true} />
    </div>
  );
}

export default App;
