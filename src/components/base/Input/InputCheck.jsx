const InputCheck = (props) => {
  return (
    <div className="d-flex flex-nowrap flex-row align-items-center">
      {props.defaultChecked && (
        <input
          type={props.type}
          className={`form-check-input ${props.styleInput}`}
          value={props.value}
          name={props.name}
          id={props.id}
          onBlur={props.onBlur}
          onChange={props.onClick}
          checked={props.defaultChecked === props.value ? true : false}
          disabled={props.disabled}
        />
      )}
      {!props.defaultChecked && (
        <input
          type={props.type}
          className={`form-check-input ${props.styleInput}`}
          value={props.value}
          name={props.name}
          id={props.id}
          onBlur={props.onBlur}
          onChange={props.onClick}
          disabled={props.disabled}
        />
      )}
      <label htmlFor={props.id} className={`form-check-label ${props.styleLabel}`}>
        {props.label}
      </label>
    </div>
  );
};

export default InputCheck;
