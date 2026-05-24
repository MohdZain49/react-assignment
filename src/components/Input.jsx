function Input({
  label,
  placeholder,
  type,
  name,
  variant = "input",
  value,
  onChange,
  required = false,
  options = [],
  ...props
}) {
  const baseStyle =
    "w-full h-11 rounded-sm bg-[#F8FAFC] border border-[#E5E7EB] px-4 py-3 text-sm placeholder:text-[#B0B5BE] leading-5 focus:outline-none";

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[#353535] leading-5"
      >
        <span>
          {label}{" "}
          {!required && <span className="text-[#B0B5BE] ">(optional)</span>}
        </span>
      </label>

      {variant === "input" ? (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className={baseStyle}
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        />
      ) : (
        <select
          id={name}
          name={name}
          className={baseStyle}
          required={required}
          value={value}
          onChange={onChange}
          {...props}
        >
          <option value="" className="text-[#B0B5BE]">
            {placeholder}
          </option>

          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Input;
