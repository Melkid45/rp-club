import Vector from '@/assets/images/guide/guide-vector.svg';
import ActientButton from '../common/ActientButton';
const GuideItem = ({title, user, description, time, check}) => {
  return (
    <div className='guide--item'>
        <img className='guide--item-vector' src={Vector} alt="" />
        <ActientButton className="guide--item-user">{user}</ActientButton>
        <div className="guide--item-text">
            <h3 className='medium-text'>{title}</h3>
            <p className='base-text'>{description}</p>
        </div>
        <div className="guide--item-soft base-text">
            <p>{check} просмотров</p>
            <p>{time} мин чтения</p>
        </div>
    </div>
  )
}

export default GuideItem
