import { useRouter } from "next/router"
import { FaArrowLeft } from "react-icons/fa"

function BackButton() {
  const { back } = useRouter()

  return (
    <button className="back_container" onClick={back}>
      <FaArrowLeft />
      back
    </button>
  )
}

export default BackButton
