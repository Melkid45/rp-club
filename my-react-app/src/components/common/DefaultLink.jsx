import { Link } from 'react-router-dom'

const DefaultLink = ({link, className, children}) => {
  return (
    <Link to={link} className={`default-link base-text ${className}`}>
      <span>{children}</span>
    </Link>
  )
}

export default DefaultLink
