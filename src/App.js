import { useState } from 'react';
import './App.css';
import FoodDropdown from './FoodDropdown';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';
import OrderNameInput from './OrderNameInput';
import OrderImages from './OrderImages';
import InstructionsForm from './InstructionsForm';
import InstructionsList from './InstructionsList';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [orderName, setOrderName] = useState('customer');
  const [instructions, setInstructions] = useState(['N/A']);
  
  return (
    <div className="App">
      <div className='order'>
        <h3 className='order-name'>Order for {orderName}</h3>
        <OrderImages
          foodId={foodId}
          drinkId={drinkId}
          sideId={sideId} />
        <InstructionsList instructions={instructions} />
      </div>
      <div className='order-form'>

      </div>
    </div>
  );
}

export default App;
