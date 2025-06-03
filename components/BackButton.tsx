import { useRouter } from 'next/router'
import { FaArrowLeft } from 'react-icons/fa'

function BackButton() {
  const { back } = useRouter()
  // BUG: This button does not work when the user arrives at the page directly
  // TODO: If no history, redirect to home page

  return (
    <button className='back_container' onClick={back}>
      <FaArrowLeft />
      back
    </button>
  )
}

export default BackButton
