export default function Lablel({
  labelName,
  inputPlaceHolder,
  labelType,
  inputValue,
  isInputEmpty,
  isEmailInvalid,
  onChange,
}) {
  let invalidTextStyle;
  let invalidInputStyle;
  if (isInputEmpty || isEmailInvalid) {
    invalidInputStyle = {
      border: "1px solid red",
    };

    invalidTextStyle = {
      color: "red",
    };
  }

  return (
    <p className="form-element-wrapper">
      <label>
        <span>{labelName}</span>
        {isInputEmpty && (
          <span style={invalidTextStyle}>
            {labelName.toLowerCase()} is required.
          </span>
        )}
        {isEmailInvalid && (
          <span style={invalidTextStyle}>
            {labelName.toLowerCase()} is invalid.
          </span>
        )}
      </label>
      <input
        style={invalidInputStyle}
        value={inputValue}
        type={labelType}
        placeholder={inputPlaceHolder}
        onChange={onChange}
      />
    </p>
  );
}
