import { ArrowRight, HeartHandshake, House, ShieldCheck, Sparkles } from "lucide-react";
import ButtonLink from "../components/ui/ButtonLink";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/ui/ServiceCard";
import TestimonialCard from "../components/ui/TestimonialCard";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { whatsappBookingUrl } from "../data/site";

const routeSteps = [
  { title: "Adolescencia", text: "Cambios, primera menstruación y educación sexual." },
  { title: "Adultez temprana", text: "Prevención, anticoncepción y planificación." },
  { title: "Adultez media", text: "Piso pélvico, climaterio y bienestar sexual." },
  { title: "Gestación", text: "Preparación, acompañamiento y educación prenatal." },
  { title: "Posparto", text: "Cuidados, recuperación y orientación familiar." },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero__background" aria-hidden="true" />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content page-width">
          <div className="hero__copy">
            <p className="hero__eyebrow">Atención de matrona a domicilio</p>
            <h1>Acompañamiento en cada etapa de tu salud sexual y reproductiva</h1>
            <p>
              Un entorno cercano, educativo y respetuoso para resolver dudas, prepararte para nuevas etapas y tomar decisiones con confianza.
            </p>
            <div className="hero__actions">
              <ButtonLink to={whatsappBookingUrl} external variant="light">
                Agendar atención <ArrowRight size={18} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/servicios" variant="outline">
                Ver servicios
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview section section--lavender">
        <div className="page-width about-preview__grid">
          <div className="about-preview__symbol-wrap">
            <img src="/images/brand/lunara-symbol-white.png" alt="" className="about-preview__symbol" />
          </div>
          <div>
            <SectionHeading eyebrow="Sobre Lunara" title="Un espacio seguro para aprender, conversar y cuidarte" />
            <p className="about-preview__text">
              Lunara acompaña tu ciclo vital individual y familiar desde una mirada cálida, profesional y centrada en tus necesidades. Cada encuentro busca entregarte información comprensible y herramientas prácticas para tu bienestar.
            </p>
            <ButtonLink to="/nosotros" variant="solid">
              Conoce más sobre Lunara <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section route-section">
        <div className="page-width">
          <SectionHeading
            eyebrow="Nuestra ruta de acompañamiento"
            title="Cada etapa trae nuevas preguntas. No tienes que responderlas sola."
            description="La ruta te ayuda a anticiparte a momentos importantes y a buscar información y apoyo en el momento oportuno."
            light
          />
          <div className="route-timeline" aria-label="Etapas de acompañamiento">
            {routeSteps.map((step, index) => (
              <article className="route-step" key={step.title}>
                <span className="route-step__number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="route-section__action">
            <ButtonLink to="/servicios" variant="outline">
              Ver todos nuestros servicios
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="page-width">
          <SectionHeading
            eyebrow="Servicios"
            title="Acompañamiento para distintos momentos de tu vida"
            description="Elige la etapa que más se acerca a lo que estás viviendo y conoce las formas en que podemos acompañarte."
            centered
          />
          <div className="services-grid services-grid--home">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section values-strip">
        <div className="page-width values-strip__grid">
          <article>
            <ShieldCheck aria-hidden="true" />
            <h3>Espacio seguro</h3>
            <p>Atención confidencial, respetuosa y libre de juicios.</p>
          </article>
          <article>
            <Sparkles aria-hidden="true" />
            <h3>Educación clara</h3>
            <p>Información cercana y adaptada a cada etapa.</p>
          </article>
          <article>
            <House aria-hidden="true" />
            <h3>Atención a domicilio</h3>
            <p>Comodidad y privacidad en tu propio entorno.</p>
          </article>
          <article>
            <HeartHandshake aria-hidden="true" />
            <h3>Acompañamiento humano</h3>
            <p>Decisiones compartidas y centradas en tus necesidades.</p>
          </article>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="page-width">
          <SectionHeading
            eyebrow="Testimonios"
            title="Experiencias de acompañamiento"
            description="Estos textos son ejemplos de diseño y deben reemplazarse por testimonios reales autorizados antes de publicar el sitio."
            light
          />
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="section booking-banner">
        <div className="page-width booking-banner__content">
          <div>
            <p className="booking-banner__eyebrow">¿Tienes dudas?</p>
            <h2>Conversemos sobre el acompañamiento que necesitas</h2>
            <p>También puedes consultar por actividades educativas, colaboraciones y servicios personalizados.</p>
          </div>
          <ButtonLink to={whatsappBookingUrl} external variant="light">
            Escribir por WhatsApp <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
