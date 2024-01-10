import { SocialIcon } from "react-social-icons"

function Footer() {
  // TODO: Get soc-links inverting on hover
  const sexyIcon = (url) => <SocialIcon url={url} className="social_icon" fgColor="white" bgColor="black" />

  return (
    <footer>
      <div className="social_list">
        {sexyIcon("https://github.com/kelly-keating")}
        {sexyIcon("https://linkedin.com/in/kelly-keating-nz/")}
      </div>

      <div className="version">
        <p>v0.0.4</p>
      </div>
    </footer>
  )
}

export default Footer
