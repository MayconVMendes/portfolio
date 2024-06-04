import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <div className="info">
        <h2>Meus contatos</h2>
        <div className="informations">
          <div className="box">
            <div className="container">
              <FaWhatsapp />
              <div className="data">
                <h2>Meu telefone / WhatsApp</h2>

                <a
                  href="https://wa.me/5513981039317?text=Ol%C3%A1%2C+olhei+seu+portf%C3%B3lio+e+tenho+interesse+em+contratar+seus+servi%C3%A7os."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +55 (13) 98103-9317
                </a>
              </div>
            </div>
            <div className="container">
              <MdOutlineMail />
              <div className="data">
                <h2>Meu e-mail</h2>

                <a href="mailto:maycon-big@hotmail.com">
                  maycon-big@hotmail.com
                </a>
              </div>
            </div>
            <div className="container">
              <IoLocationOutline />
              <div className="data">
                <h2>Localização</h2>

                <p>Praia Grande-SP, Brasil </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="container">
              <FaLinkedinIn />
              <div className="data">
                <h2>linkedin</h2>

                <a
                  href="https://www.linkedin.com/in/maycon-vieira77/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/maycon-vieira77/
                </a>
              </div>
            </div>
            <div className="container">
              <FaGithub />
              <div className="data">
                <h2>GitHub</h2>

                <a
                  href="https://github.com/MayconVMendes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/MayconVMendes
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="locations">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122632.00643472248!2d-46.50028676233415!3d-24.016019015754704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1d00114834dd%3A0xd9331312b249a764!2sPraia%20Grande%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1716669333196!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
