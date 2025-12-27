
const InputItem = ({name, type,placeholder,id, icon}) => {
  return (
    <div className="input--item">
      <label htmlFor={name}>
          {icon}
      </label>
      <input className="base-text" type={type} placeholder={placeholder} name={name} />
    </div>
  )
}

export default InputItem
