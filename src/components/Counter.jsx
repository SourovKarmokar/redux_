import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";

const Counter = () => {
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="p-8 max-w-md mx-auto flex flex-col items-center justify-center space-y-6 bg-white rounded-2xl shadow-xl border border-slate-200">
        
        <div className="w-full flex justify-center">
          <Count count={count} />
        </div>

        
        <div className="flex space-x-3 bg-slate-100 p-3 rounded-xl shadow-inner">
          <Button handler={handleIncrement}>Increment</Button>

          <Button type="danger" handler={handleDecrement}>
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
