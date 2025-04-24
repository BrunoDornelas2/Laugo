export default function Input({ label, type = "text", placeholder }) {
    return (
      <div className="input-wrapper">
        <label>{label}</label>
        <input type={type} placeholder={placeholder} />
      </div>
    );
  }