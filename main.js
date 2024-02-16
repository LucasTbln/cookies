// Establece unha cookie
function setCookie(name, value, expirationSeconds) {
    const date = new Date();
    date.setTime(date.getTime() + expirationSeconds * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }

  //Obtén as cookies e devolta o valor que se lle pasa coma paraámetro(ou null)
  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  // borra a cookie
  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  // mostra as cookies
  function verCookies() {
    const idioma = prompt("Ingresa o teu idioma:");
    const tema = prompt("Ingresa o teu tema (oscuro, claro, ...):");
    const usuario = prompt("Ingresa o teu usuario:");
    const preferencia = prompt("Ingresa a túa preferencia (alta, baja, ...):");
    const ultimaVisita = new Date().toLocaleString();

    setCookie("Idioma", idioma, 10);
    setCookie("Tema", tema, 15);
    setCookie("Usuario", usuario, 20);
    setCookie("Preferencia", preferencia, 0);
    setCookie("UltimaVisita", ultimaVisita, 0);

    const contadorDeVisitas = parseInt(getCookie("contadorDeVisitas")) || 0;
    setCookie("contadorDeVisitas", contadorDeVisitas + 1, 0); // Incrementa o contador de visitas

    setInterval(function() {
      const cookies = document.cookie.split(';');
      console.clear();
      console.log("Cookies vigentes:");
      for (let i = 0; i < cookies.length; i++) {
        console.log(cookies[i].trim());
      }

      if (contadorDeVisitas >= 1) {
        // Elimina as cookies sen fecha de expiración na segunda visita
        deleteCookie("Preferencia");
        deleteCookie("UltimaVisita");
        console.log("Cookies eliminadas na segunda visita.");
      }
    }, 2000);
  }

  verCookies();