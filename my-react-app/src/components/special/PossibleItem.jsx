import Vector from '@/assets/images/home/possible/possible-vector.png';
const PossibleItem = ({ icon, title, description }) => {
    return (
        <div className='possible-item'>
            <div className="item-gradient"></div>
            <img className='item-vector' src={Vector} alt="" />
            {icon && (
                <div className="item-icon">
                    <img src={icon} alt="" />
                </div>
            )}
            {title && (
                <div className="item-information">
                    <h3 className='medium-text'>{title}</h3>
                    {description && (
                        <p className='base-text'>{description}</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default PossibleItem
