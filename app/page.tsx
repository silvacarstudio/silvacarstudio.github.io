'use client'

import { useEffect, useState } from 'react'

type Service = { title: string; subtitle: string; detail: string; includes?: string[] }

const whatsappNumber = '59894577748'
const getWhatsAppUrl = (service?: string) => {
  const message = service
    ? `Hola, ¿qué tal? Quería consultar tu agenda para ${service.toLowerCase()}.`
    : 'Hola, ¿qué tal? Quería consultar tu agenda para un servicio de detailing.'
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

const services: Service[] = [
  { title: 'Detailing Interior', subtitle: 'Limpieza profunda y tratamiento de interiores.', detail: 'Servicio de limpieza y acondicionamiento integral del habitáculo. Se realiza una limpieza profunda y minuciosa de tapizados, alfombras, plásticos, paneles y demás superficies interiores, utilizando productos y técnicas específicas según cada material, seguido de tratamientos protectores.', includes: ['Aspirado y extracción de suciedad profunda', 'Limpieza de telas, cueros y paneles', 'Acondicionado de cueros y plásticos', 'Eliminación de bacterias y olores'] },
  { title: 'Detailing Exterior', subtitle: 'Limpieza, descontaminación y terminación exterior.', detail: 'Proceso profesional de lavado, descontaminación y acondicionamiento de las superficies exteriores del vehículo. Trabajamos con técnicas de lavado seguro y productos específicos para carrocería, llantas, neumáticos, plásticos y pasos de rueda, reduciendo el riesgo de generar swirl y otros defectos. El objetivo es lograr una superficie limpia, descontaminada y correctamente acondicionada, con una terminación uniforme y alto nivel de detalle.', includes: ['Lavado técnico', 'Acondicionamiento de plásticos exteriores', 'Secado con técnicas seguras', 'Detallado de emblemas, molduras y zonas de difícil acceso', 'Terminación y control final de la superficie'] },
  { title: 'Corrección de Pintura', subtitle: 'Corrección de imperfecciones y recuperación del brillo.', detail: 'La corrección de pintura es un proceso técnico destinado a reducir y eliminar mecánicamente los defectos superficiales presentes en la capa de barniz, como swirl marks, microarañazos, marcas de lavado y oxidación superficial. El objetivo es recuperar la profundidad de color, claridad, reflejo y brillo de la pintura, logrando una superficie visualmente renovada.', includes: ['Descontaminación química y mecánica', 'Pulido de corrección según los defectos', 'Refinado', 'Inspección post-corrección'] },
  { title: 'Tratamientos', subtitle: 'Protección y mantenimiento para conservar el acabado.', detail: 'Consiste en la aplicación de un recubrimiento nanocerámico sobre diferentes superficies del vehículo, creando una capa protectora dura, resistente y de larga duración. Puede aplicarse sobre pintura, cuero, plásticos, vano motor, llantas y vidrios. En Silva Studio ofrecemos protección cerámica según el uso del vehículo, el nivel de protección buscado, la duración deseada y el presupuesto disponible.', includes: ['Descontaminación química y mecánica', 'Pulido de corrección para corregir la mayor cantidad de rayas posibles', 'Preparación de superficie para garantizar el anclaje correcto del cerámico'] },
  { title: 'Servicio Personalizado', subtitle: 'Evaluamos tu vehículo y armamos el tratamiento ideal.', detail: 'Evaluamos pintura, interior y necesidades puntuales para crear una combinación de servicios a medida, con presupuesto claro antes de empezar.' },
]

const gallery = ['/images/work-1.jpg', '/images/work-2.jpg', '/images/work-3.jpg', '/images/work-4.jpg']

export default function Page() {
  const [activeService, setActiveService] = useState<Service | null>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal, .service').forEach((element) => revealObserver.observe(element))

    let ticking = false
    const updateParallax = () => {
      document.querySelectorAll<HTMLElement>('.parallax-panel').forEach((panel) => {
        const distance = panel.getBoundingClientRect().top - window.innerHeight / 2
        panel.style.setProperty('--parallax-offset', `${Math.max(-42, Math.min(42, -distance * 0.035))}px`)
      })
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) { window.requestAnimationFrame(updateParallax); ticking = true }
    }
    updateParallax()
    window.addEventListener('scroll', onScroll, { passive: true })

    document.body.style.overflow = activeService || lightbox ? 'hidden' : ''
    const close = (event: KeyboardEvent) => event.key === 'Escape' && (setActiveService(null), setLightbox(null))
    window.addEventListener('keydown', close)
    return () => { revealObserver.disconnect(); document.body.style.overflow = ''; window.removeEventListener('keydown', close); window.removeEventListener('scroll', onScroll) }
  }, [activeService, lightbox])

  return <main>
    <header><div className="wrap head"><a className="brand" href="#inicio"><img src="/images/logo.png" alt="Silva Studio" /></a><nav><a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a><a href="#galeria">Galería</a><a href="#contacto">Contacto</a></nav><a className="btn outline" href={getWhatsAppUrl()}>Agendar turno</a></div></header>
    <section id="inicio" className="hero parallax-panel"><div className="hero-bg" /><div className="overlay" /><div className="wrap hero-content"><p className="eyebrow">DETAILING &amp; ESTÉTICA AUTOMOTRIZ</p><h1>Tu auto.<br /><em>En otro nivel.</em></h1><p>Cuidado, precisión y pasión por cada detalle.</p><a className="btn primary" href={getWhatsAppUrl()}>Agendar turno</a></div></section>
    <section id="servicios" className="section wrap parallax-panel"><p className="eyebrow">NUESTROS SERVICIOS</p><h2>Más que una limpieza.</h2><p className="muted">Tratamos cada vehículo como si fuera nuestro.</p><div className="grid">{services.map((service, i) => <article className="service" key={service.title}><button className="serviceHead" onClick={() => setActiveService(service)} aria-label={`Abrir ${service.title}`}><div><small>0{i + 1}</small><h3>{service.title}</h3><p>{service.subtitle}</p></div><span className="servicePlus">+</span></button></article>)}</div></section>
    <section id="nosotros" className="about parallax-panel"><div className="aboutMedia"><img src="/images/about.jpg" alt="Trabajo de detailing en Silva Studio" /></div><div className="aboutText"><p className="eyebrow">SILVA STUDIO</p><h2>El detalle hace la diferencia.</h2><p>Somos un estudio especializado en detailing y estética automotriz, enfocado en devolverle a cada vehículo una presencia impecable.</p><p>Trabajamos con dedicación, productos premium y atención minuciosa para lograr resultados que se notan.</p></div></section>
    <section id="galeria" className="section wrap parallax-panel"><p className="eyebrow">TRABAJOS</p><h2>Resultados que hablan solos.</h2><div className="gallery">{gallery.map((image, i) => <button className="pic" key={image} onClick={() => setLightbox(image)}><img src={image} alt={`Trabajo realizado ${i + 1}`} /></button>)}</div></section>
    <section className="cta parallax-panel"><div className="wrap ctaIn"><div><p className="eyebrow">¿LISTO PARA CAMBIAR EL LOOK DE TU AUTO?</p><h2>Dejalo en nuestras manos.</h2></div><a className="btn primary" href={getWhatsAppUrl()}>Agendar ahora</a></div></section>
    <section id="contacto" className="section wrap contact stack-section"><div><p className="eyebrow">CONTACTO</p><h2>Estética y cuidado a tu medida.</h2></div><div className="contactInfo"><a href={getWhatsAppUrl()}>WhatsApp</a><a href="https://www.instagram.com/silva_car_studio/">Instagram</a><span>Luis Cluzeau Mortet 4763</span><span>Lunes a domingos</span></div></section>
    <footer><div className="wrap foot"><img src="/images/logo.png" alt="Silva Studio" /><span>Detailing &amp; estética automotriz premium.</span></div></footer>
    {activeService && <div className="modalBackdrop" onClick={() => setActiveService(null)}><section className="serviceModal" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onClick={e => e.stopPropagation()}><button className="modalClose" onClick={() => setActiveService(null)} aria-label="Cerrar">×</button><p className="eyebrow">SERVICIO DESTACADO</p><small className="modalNumber">/ 0{services.indexOf(activeService) + 1}</small><h2 id="dialog-title">{activeService.title}</h2><p className="modalSubtitle">{activeService.subtitle}</p><p className="modalDetail">{activeService.detail}</p>{activeService.includes && <div className="serviceIncludes"><h3>¿Qué incluye?</h3><ul>{activeService.includes.map((item) => <li key={item}>{item}</li>)}</ul></div>}<div className="keyPoints"><span><b>+</b> Atención artesanal</span><span><b>+</b> Productos premium</span><span><b>+</b> Resultado visible</span></div><a className="btn primary" href={getWhatsAppUrl(activeService.title)}>Agendar este servicio ↗</a></section></div>}
    {lightbox && <div className="lightbox" onClick={() => setLightbox(null)}><button onClick={() => setLightbox(null)} aria-label="Cerrar imagen">×</button><img src={lightbox} alt="Trabajo de Silva Studio ampliado" /></div>}
  </main>
}
