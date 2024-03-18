import SocialIcon from "./SocialIcon"


function Footer() {
  return (
    <footer>
      <div className="social_list">
        <SocialIcon site='github' url="https://github.com/kelly-keating" />
        <SocialIcon site='linkedin' url="https://linkedin.com/in/kelly-keating-nz/" />
      </div>
      <div className="version">
        <p>v0.0.6</p>
      </div>
    </footer>
  )
}

export default Footer
