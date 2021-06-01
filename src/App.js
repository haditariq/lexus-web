import './styles/_app.scss';
import Slider from "./components/common/slider";
import Sidebar from "./components/common/sidebar";

function App(){
  return (
    <div className={"app"}>
      <Slider>
        <div className={"container"}>
          <Sidebar/>
          <div className={"rightContentContainer"}/>
        </div>
      </Slider>
    </div>
  );
}

export default App;
