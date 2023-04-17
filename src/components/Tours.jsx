import Tour from './Tour'
import { tours } from '../assets/data'
import Heading from './Heading'

function Tours () {
  return (
    <section id='tours' className='section tours'>
      <div className='container'>
        <Heading partOne='Featured' partTwo='Tours'></Heading>
        <ul className='list tour-list grid-columns' role='list'>
          {tours.map(tour => {
            return (
              <li key={tour.id}>
                <Tour {...tour}></Tour>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Tours
