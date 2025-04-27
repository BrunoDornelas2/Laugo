export default function Input({ id, label, type = "text", placeholder }) {
    return (
      <div className="input-wrapper">
        <label>{label}</label>
        <input id={id} type={type} placeholder={placeholder} required />
      </div>
    );
  }