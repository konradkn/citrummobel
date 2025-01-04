import "./FixedButton.css";

const FixedButton = ({ icon, onClick }) => {
  return (
    <>
      <div className="fixed-button bg-teal-600" onClick={onClick}>
        <img src={icon} />
      </div>
    </>
  );
};

export default FixedButton;
