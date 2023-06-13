const Square = ({ value, children }) => {
  console.log(children);
  return (
    <div>
      {value}

      <h5>Children will be rendered below</h5>
      <div>{children}</div>
    </div>
  );
};

export default Square;
