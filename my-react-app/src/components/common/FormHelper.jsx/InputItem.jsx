import { forwardRef } from "react"
import { ref } from "yup"

const InputItem = forwardRef(
  ({ name,error, type, placeholder, id, icon, ...props }, ref) => {
    return (
      <div className={`input--item ${error ? 'error' : ''}`}>
        <label htmlFor={name}>
          {icon}
        </label>
        <input ref={ref} {...props}  className="base-text" type={type || 'text'} placeholder={placeholder} name={name} />
      </div>
    )

  }
)
export default InputItem
