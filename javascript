<script>
  // Espera a que la página cargue
  document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("btnMenu");
    const bienvenida = document.getElementById("bienvenida");
    const contenido = document.getElementById("contenido");

    btn.addEventListener("click", function() {
      // Oculta la pantalla de bienvenida
      bienvenida.style.display = "none";
      // Muestra el contenido con efecto
      contenido.style.display = "block";
      contenido.classList.add("mostrar");
    });
  });
</script>
