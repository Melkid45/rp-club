import Vector from '@/assets/images/home/faq/vector.svg';
const FaqItem = ({title, description}) => {
  return (
    <div className='faq--item'>
        <img src={Vector} alt="" />
        <div className="gradient"></div>
        {title && (
            <h3 className='medium-text'>{title}</h3>
        )}
        {description && (
            <p className='base-text'>{description}</p>
        )}
    </div>
  )
}

export default FaqItem
