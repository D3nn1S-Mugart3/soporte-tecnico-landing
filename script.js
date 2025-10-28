const CONTACT_INFO = {
  A: {
    phone: "+529993298258",
    email: "lcauichmex@gmail.com",
    message:
      "Hola, estoy interesado en servicio de formateo/instalación. ¿Me puedes enviar un presupuesto?",
  },
  B: {
    phone: "+529971136764",
    email: "dennis.mugarte05@gmail.com",
    message:
      "Hola, estoy interesado en soporte avanzado/desarrollo web. ¿Me puedes ayudar?",
  },
};

function handleSubmit(e, recipientKey = "A") {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const service = form.service.value;
  const message = form.message.value.trim();

  const mailto_address = CONTACT_INFO[recipientKey].email;

  const subject = encodeURIComponent(
    `Solicitud de Soporte Técnico: ${service} - ${name}`
  );

  const body = encodeURIComponent(
    `Nombre: ${name}\nCorreo Electrónico: ${email}\nServicio: ${service}\n\nMensaje:\n${message}`
  );
  window.location.href = `mailto:${mailto_address}?subject=${subject}&body=${body}`;
}

function initializeContactLinks() {
  const waBtnAContactHero = document.getElementById("waBtnA");
  if (waBtnAContactHero) {
    waBtnAContactHero.href = `https://wa.me/${CONTACT_INFO.A.phone.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(CONTACT_INFO.A.message)}`;
  }

  const waBtnACard = document.getElementById("waBtnACard");
  if (waBtnACard) {
    waBtnACard.href = `https://wa.me/${CONTACT_INFO.A.phone.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(CONTACT_INFO.A.message)}`;
  }

  const mailtoA = document.getElementById("mailtoA");
  if (mailtoA) {
    mailtoA.href = `mailto:${CONTACT_INFO.A.email}`;
  }

  const waBtnBCard = document.getElementById("waBtnBCard");
  if (waBtnBCard) {
    waBtnBCard.href = `https://wa.me/${CONTACT_INFO.B.phone.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(CONTACT_INFO.B.message)}`;
  }

  const mailtoB = document.getElementById("mailtoB");
  if (mailtoB) {
    mailtoB.href = `mailto:${CONTACT_INFO.B.email}`;
  }
}

document.addEventListener("DOMContentLoaded", initializeContactLinks);

document.getElementById("year").innerText = new Date().getFullYear();
