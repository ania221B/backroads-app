import Heading from './Heading.jsx'
import Service from './Service.jsx'
import { services } from '../assets/data.js'

function Services () {
  return (
    <section id='services' className='section services'>
      <div className='container'>
        <Heading partOne='Our' partTwo='Services'></Heading>
        <ul className='service-list list grid-columns' role='list'>
          {services.map(item => {
            return <Service {...item} key={item.id}></Service>
          })}
        </ul>
      </div>
    </section>
  )
}
export default Services
