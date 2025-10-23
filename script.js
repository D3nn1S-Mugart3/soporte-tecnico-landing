const WHATSAPP_NUMBER = "+529999999999";

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const service = form.service.value;
  const message = form.message.value.trim();

  const mailto_address = "dennis.mugarte05gmail.com";

  const subject = encodeURIComponent(
    `Solicitud de Soporte Técnico: ${service} - ${name}`
  );

  const body = encodeURIComponent(
    `Nombre: ${name}\nCorreo Electrónico: ${email}\nServicio: ${service}\n\nMensaje:\n${message}`
  );
  window.location.href = `mailto:${mailto_address}?subject=${subject}&body=${body}`;
}

const waBtn = document.getElementById("waBtn");
if (waBtn) {
  waBtn.href = `https://wa.me/${WHATSAPP_NUMBER.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    "Hola, estoy interesado en servicio de formateo/instalación. ¿Me puedes enviar un presupuesto?"
  )}`;
}

document.getElementById("year").innerText = new Date().getFullYear();
