import { styled } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useEffect, useState } from "react";

function App() {
  
  const [mouseLocation, setMouseLocation] = useState<any>({ x: 0, y: 0 });
  // const [divs, setDivs] = useState<any>([]);
  const mouseMoveHandler = (e: any) => {
    setMouseLocation({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop,
    });
  };


 

  const randomCircleHandler = () => {
    const randomCOlor = '#' + Math.floor(Math.random() * 11177215).toString(16)
    console.log(randomCOlor)
  }
  useEffect(() => {
    
    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  useEffect(() => {
    randomCircleHandler();
  }, [mouseLocation])



  // console.log(mouseLocation.x, mouseLocation.y);
  return (
    <>
      <GlobalStyle />
      <Div>
        <button>undo</button>
        <button>redo</button>
        Mouse Local Coordinates: x = {mouseLocation.x}, y={mouseLocation.y}
      </Div>
    </>
  );
}

export default App;
const Div = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 5px solid white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
