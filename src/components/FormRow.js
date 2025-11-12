function FormRow({type, name, id, value, onChange, labelText}) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        id={id}
        autoComplete="off"
        onChange={onChange}
        className="form-input"
      />
    </div>
  );
}
export default FormRow;
