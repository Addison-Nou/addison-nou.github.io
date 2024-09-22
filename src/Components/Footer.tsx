import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footerIcons'>

      <a href="https://github.com/Addison-Nou" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faGithub} color='black' size="3x"/>
      </a>

      <a href="https://www.linkedin.com/in/addison-nou/" rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} color='#0077B5' size="3x"/>
      </a>

      <br/>
      <p>Addison Nou 2024</p>

    </footer>
  )
}
