const InteractionEvents33 = () => {
  const handleClick = () => {
    alert("Button was clicked.");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <button onClick={handleClick}>button</button>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default InteractionEvents33;
