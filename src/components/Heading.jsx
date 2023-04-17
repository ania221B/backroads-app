function Heading (props) {
  const { partOne, partTwo } = props
  return (
    <h2 className='title section-title fs-800 uppercase-text'>
      {partOne}
      <span> {partTwo}</span>
    </h2>
  )
}

export default Heading
