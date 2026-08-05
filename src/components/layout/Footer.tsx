import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets";
import { contactInfo, navigation } from "../../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main page-width">
        <div className="site-footer__brand">
          <img src={assets.brand.logoWhite} alt="Lunara" />
          <p>Acompañamiento cercano, educativo y respetuoso en cada etapa de tu salud sexual y reproductiva.</p>
        </div>

        <div className="site-footer__column">
          <h2>Navegación</h2>
          {navigation.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="site-footer__column site-footer__contact">
          <h2>Contacto</h2>
          <a href={`https://wa.me/${contactInfo.phoneValue}`} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            <span>{contactInfo.phoneDisplay}</span>
          </a>
          <a href={`mailto:${contactInfo.email}`}>
            <Mail aria-hidden="true" />
            <span>{contactInfo.email}</span>
          </a>
          <a href={contactInfo.instagramUrl} target="_blank" rel="noreferrer">
            <Instagram aria-hidden="true" />
            <span>@{contactInfo.instagram}</span>
          </a>
          <span>
            <MapPin aria-hidden="true" />
            {contactInfo.city}
          </span>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="page-width">
          <span>© {new Date().getFullYear()} Lunara. Todos los derechos reservados.</span>
          {/* <span>Contenido informativo: no reemplaza una evaluación profesional ni atención de urgencia.</span> */}
        </div>
      </div>
    </footer>
  );
}
