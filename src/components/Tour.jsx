function Tour (props) {
  const { img, desc, title, body, icon, date, country, duration, price } = props
  return (
    <article>
      <div className='article__image'>
        <img src={img} alt={desc} />
      </div>
      <div className='article__body flow'>
        <h3 className='title'>{title}</h3>
        <p className='badge'>{date}</p>
        <p>{body}</p>
        <div className='summary flex'>
          <div className='country flex'>
            <img src={icon} alt='' className='icon' />
            <p>{country}</p>
          </div>
          <p>{duration} days</p>
          <p>From ${price}</p>
        </div>
      </div>
    </article>
  )
}

export default Tour
