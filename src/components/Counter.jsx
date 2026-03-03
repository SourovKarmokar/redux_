import Count from "./Count";
import Button from "./Button";

const Counter = ({count, onIncrement , onDecrement}) => {
 
  return (
    <div>
      <div className="p-8 max-w-md mx-auto flex flex-col items-center justify-center space-y-6 bg-white rounded-2xl shadow-xl border border-slate-200">
        
        <div className="w-full flex justify-center">
          <Count count={count} />
        </div>

        
        <div className="flex space-x-3 bg-slate-100 p-3 rounded-xl shadow-inner">
          <Button handler={onIncrement}>Increment</Button>

          <Button type="danger" handler={onDecrement}>
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
