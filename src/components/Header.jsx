import { pageLinks, socialLinks } from '../assets/data'

function Header () {
  return (
    <>
      <a href='#main-content' className='skip-to-content link-button'>
        Skip to main Content
      </a>
      <header className='primary-header'>
        <div className='container container--medium flex'>
          <h1>
            <img src='./src/assets/images/logo.svg' alt='BackRoads' />
          </h1>
          <button
            type='button'
            aria-label='mobile menu toggle'
            aria-controls='nav'
            className='button menu-button'
            aria-expanded='false'
          >
            <span className='line line-top' aria-hidden></span>
            <span className='line line-middle' aria-hidden></span>
            <span className='line line-bottom' aria-hidden></span>
          </button>
          <nav
            id='nav'
            className='primary-nav'
            aria-label='primary page navigation'
            data-state='closed'
          >
            <ul className='primary-nav__list list underline' role='list'>
              {pageLinks.map(link => {
                const { id, href, text } = link
                return (
                  <li key={id}>
                    <a href={href} className='nav__link'>
                      {text}
                    </a>
                  </li>
                )
              })}
            </ul>
            <ul className='social__list list underline flex' role='list'>
              {socialLinks.map(link => {
                return (
                  <li key={link.id}>
                    <a href='#' className='social__link'>
                      <img src={link.img1} alt={link.desc} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
export default Header
