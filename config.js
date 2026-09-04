/* ===================== EDITÁ SOLAMENTE ESTE ARCHIVO =====================
   Textos, colores, tamaño del logo y TODAS las imágenes están acá.
========================================================================== */
const SITE = {
  brand: { logoDesktop: 140, logoMobile: 120 },
  colors: { bg:"#080808", surface:"#111111", surface2:"#171717", text:"#f4f4f2", muted:"#a2a2a0", accent:"#79D34A", border:"#292929" },

  // Datos de contacto
  contactInfo: {
    whatsapp: "+59894577748",
    message: "Hola Silva Studio, quiero consultar por un turno.",
    instagram: "https://www.instagram.com/silva_car_studio/",
    location: "Luis Cluzeau Mortet 4763",
    hours: "Lunes a Domingos · Lunes, miércoles, jueves de 08:00hs a 16:00hs Martes de 08:00hs a 18:00hs, sábado y domingo de 10:00hs a 16:00hs"
  },

  nav: [["Servicios","#servicios"],["Nosotros","#nosotros"],["Galería","#galeria"],["Contacto","#contacto"]],
  hero: { eyebrow:"DETAILING & ESTÉTICA AUTOMOTRIZ", title:"Tu auto.<br><em>En otro nivel.</em>", subtitle:"Cuidado, precisión y pasión por cada detalle.", button:"Agendar turno", image:"images/hero.jpg", position:"center center", darkness:.90 },
  services: { eyebrow:"NUESTROS SERVICIOS", title:"Más que una limpieza.", subtitle:"Tratamos cada vehículo como si fuera nuestro.", items:[
    ["Detailing Interior","Limpieza profunda y tratamiento de interiores.",""],
    ["Detailing Exterior","Limpieza, descontaminación y terminación exterior.",""],
    ["Pulido de Pintura","Corrección de imperfecciones y recuperación del brillo.",""],
    ["Tratamientos","Protección y mantenimiento para conservar el acabado.",""],
    ["Servicio Personalizado","Evaluamos tu vehículo y armamos el tratamiento ideal.",""]
  ]},
  about: { eyebrow:"SILVA STUDIO", title:"El detalle hace la diferencia.", text:[
    "Somos un estudio especializado en detailing y estética automotriz, enfocado en devolverle a cada vehículo una presencia impecable.",
    "Trabajamos con dedicación, productos premium y atención minuciosa para lograr resultados que se notan."
  ], image:"images/about.jpg", position:"center center", darkness:.70 },
  gallery: { eyebrow:"TRABAJOS", title:"Resultados que hablan solos.", images:[
    "images/work-1.jpg","images/work-2.jpg","images/work-3.jpg","images/work-4.jpg","images/work-5.jpg","images/work-6.jpg"
  ]},
  cta: { eyebrow:"¿LISTO PARA CAMBIAR EL LOOK DE TU AUTO?", title:"Dejalo en nuestras manos.", button:"Agendar ahora" },

  // Texto de la sección contacto
  contact: { eyebrow:"CONTACTO", title:"Estética y cuidado a tu medida." },

  footer:"Detailing & estética automotriz premium."
};
