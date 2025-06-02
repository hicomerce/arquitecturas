  document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementsByTagName('form')[0];

    if (formulario) {
      formulario.addEventListener('click', function (e) {
        const tag = e.target.tagName.toLowerCase();
        if (tag === 'button' || tag === 'a') {
          formulario.classList.add('enviado');
        }
      });
    }
  });