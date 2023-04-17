function Service (props) {
  const { img, title, body } = props
  return (
    <li className='split--big'>
      <div className='item__image'>
        <img src={img} alt='' className='icon' />
      </div>
      <div className='item__body flow'>
        <h3 className='title'>{title}</h3>
        <p className='width-limit'>{body}</p>
      </div>
    </li>
  )
}

export default Service
