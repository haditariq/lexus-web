import React, {useState} from 'react';

const ButtonGroupTabs = (props) => {
  const {buttons} = props;
  const [activeButton, setActiveButton] = useState('ZIP')
  const buttonActive = (type) => type == activeButton.toLowerCase() ? "buttonActive" : "";

  return (
    <div className={"groupContainer"}>
      {buttons.map((item, idx) =>
        <button
          onClick={() => {
            setActiveButton(item.title);
            props.onClick(item.title)
          }}
          className={buttonActive(item.title.toLowerCase())}
        >
          {item.title}
        </button>
      )}
    </div>
  );
};

export default ButtonGroupTabs;
