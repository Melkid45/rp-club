import Vector from '@/assets/images/guide/guide-vector.svg';
import ActientButton from '../common/ActientButton';
import { Link } from 'react-router-dom';
const GuideItem = ({title, user, description, time, check, id}) => {
  return (
    <Link 
    
    to={`/guide/${id}`}
    className='guide--item'
    state={{title, description, user, time, check }}
    >
        <img className='guide--item-vector' src={Vector} alt="" />
        <button className="guide--item-user">{user}</button>
        <div className="guide--item-text">
            <h3 className='medium-text'>{title}</h3>
            <p className='base-text'>{description}</p>
        </div>
        <div className="guide--item-soft base-text">
            <p>{check} просмотров</p>
            <p>{time} мин чтения</p>
        </div>
    </Link>
  )
}

export default GuideItem
