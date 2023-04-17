import { pageLinks, socialLinks } from '../assets/data'

function Footer () {
  return (
    <footer className='section footer'>
      <div className='container flow'>
        <nav className='secondary-nav' aria-label='secondary page navigation'>
          <ul className='secondary-nav__list list underline' role='list'>
            {pageLinks.map(link => {
              const { id, href, text } = link
              return (
                <li key={id}>
                  <a href={href} className='footer__link'>
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
          <ul className='social__list list  underline flex' role='list'>
            {socialLinks.map(link => {
              return (
                <li key={link.id}>
                  <a href='#' className='social__link'>
                    <img src={link.img2} alt={link.desc} />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div>
          <p className='copyright'>
            Copyright &copy; Backroads Travel Tours Company
          </p>
          <p className='copyright'>
            {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
