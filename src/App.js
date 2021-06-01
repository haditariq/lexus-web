import './styles/_app.scss';
import Slider from "./components/common/slider";
import Sidebar from "./components/common/sidebar";
import CarTypeItem from "./components/carTypeItem";
import {useState} from "react";

const carTypeData = [
  {
    uri: "https://www.lexus.com/content/dam/lexus/images/models/is/2021/gallery/Lexus-IS-gallery-thumbnail-desktop-1440x811-LEX-ISG-MY21-0063_M75.jpg",
    name: "SEDANS"
  },
  {
    uri: "https://www.lexus.com/content/dam/lexus/images/models/rx/2021/gallery/Lexus-RX-gallery-1-ultrawhite-1440x811-LEX-RXG-MY21-0027_M75.jpg",
    name: "SUVS"
  },
  {
    uri: "https://www.lexus.com/content/dam/lexus/images/models/lc/2021/gallery/Lexus-LCh-toastedcaramel-interior-gallery-thumbnail-desktop-1440x811-LEX-LCH-MY19-0007_M75.jpg",
    name: "COUPES"
  },
  {
    uri: "https://www.lexus.com/content/dam/lexus/images/models/ls/2021/gallery/Lexus-LS-gallery-1-thumbnail-desktop-1440x811-LEX-LSG-MY21-0039_M75.jpg",
    name: "HYBRID"
  },
  {
    uri: "https://toyota.scene7.com/is/image/toyota/Hero-Lexus-FCV-LF30-2048x2048?wid=2048&hei=2048",
    name: "FUTURE"
  },
];

function App(){
  const [activeItem, setActiveItem] = useState(carTypeData[0]);
  return (
    <div className={"app"}>
      <Slider uri={activeItem.uri}>
        <div className={"container"}>
          <Sidebar/>
          <div className={"rightContentContainer"}>
            {carTypeData.map((item, idx) =>
              <CarTypeItem
                item={item}
                onTypeClick={(item)=> setActiveItem(item)}
              />
            )}
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default App;
