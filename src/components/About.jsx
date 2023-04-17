import Heading from './Heading'

function About () {
  return (
    <section id='about' className='section about'>
      <div className='container'>
        <Heading partOne='About' partTwo='Us'></Heading>
        <article className='split'>
          <div className='article__image'>
            <img
              src='./src/assets/images/about.jpeg'
              alt='beautiful beach with palm trees and waves washing the shore under a blue sky'
            />
          </div>
          <div className='article__body flow'>
            <h3 className='title fs-700'>Explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              doloribus. Possimus omnis quisquam sunt repellat dignissimos
              sequi. At, natus.
            </p>
            <a
              href=''
              className='link-button uppercase-text'
              data-type='secondary'
            >
              Read more
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
