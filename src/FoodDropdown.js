export default function FoodDropdown({ setFoodId }) {
  function handleChange(e) {
    setFoodId(e.target.value);
  }
  return (
    <div>
      <p>Select a Sandwich: </p>
      <select onChange={handleChange}>
        <option value='1'>Chicken Sandwich</option>
        <option value='2'>Veggie Sub</option>
        <option value='3'>Breakfast Sandwich</option>
      </select>
    </div>
  );
}