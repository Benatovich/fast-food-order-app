export default function SideDropdown({ setSideId }) {
  function handleChange(e) {
    setSideId(e.target.value);
  }
  return (
    <div>
      <p>Select a Side:</p>
      <select onChange={handleChange}>
        <option value='1'>Hashbrowns</option>
        <option value='2'>Fries</option>
        <option value='3'>Apple Slices</option>
      </select>
    </div>
  );
}