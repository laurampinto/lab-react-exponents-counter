const ExponentTwo = ({ count }) => {
  const result = count * count;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}^2</p>
      <p className="exponent-result">
        {count} * {count} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
