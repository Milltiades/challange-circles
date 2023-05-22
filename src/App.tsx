import { useState } from 'react';

const Playground = () => {
  const [circles, setCircles] = useState<any>([]);
  const [undoneCircles, setUndoneCircles] = useState<any>([]);

  const handlePlaygroundClick = (event:any) => {
    const { clientX, clientY } = event;
    const newCircle = {
      x: clientX,
      y: clientY,
      color: getRandomColor(),
    };
    setCircles([...circles, newCircle]);
    setUndoneCircles([]);
  };

  const handleUndo = () => {
    const lastCircle = circles[circles.length - 1];
    setCircles(circles.slice(0, -1));
    setUndoneCircles([...undoneCircles, lastCircle]);
  };

  const handleRedo = () => {
    const lastUndoneCircle = undoneCircles[undoneCircles.length - 1];
    setCircles([...circles, lastUndoneCircle]);
    setUndoneCircles(undoneCircles.slice(0, -1));
  };

  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div>
      <div
        style={{
          height: '90vh',
          width: '100vw',
          border: '1px solid black',
          position: 'relative',
        }}
        onClick={handlePlaygroundClick}
      >
        {circles.map((circle:any, index:any) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: circle.y,
              left: circle.x,
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: circle.color,
            }}
          ></div>
        ))}
      </div>
      <div>
        <button onClick={handleUndo} disabled={circles.length === 0}>
          Undo
        </button>
        <button onClick={handleRedo} disabled={undoneCircles.length === 0}>
          Redo
        </button>
      </div>
    </div>
  );
};

export default Playground;
