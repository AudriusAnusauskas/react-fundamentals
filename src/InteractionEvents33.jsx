const InteractionEvents33 = () => {
  return (
    <div>
      <button onClick={handleClick}>button</button>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

const handleClick = () => {
  alert("Button was clicked.");
};

const handleChange = (e) => {
  console.log(e.target.value);
};

export default InteractionEvents33;
