function Hero () {
  return (
    <section id='hero' className='section hero'>
      <div className='container flow'>
        <header className='flow'>
          <h2 className='title fs-900 uppercase-text text-white'>
            Continue Exploring
          </h2>
          <p className='width-limit width-limit-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
        </header>
        <a
          href='#tours'
          className='link-button uppercase-text'
          data-type='primary'
        >
          Explore Tours
        </a>
      </div>
    </section>
  )
}

export default Hero
