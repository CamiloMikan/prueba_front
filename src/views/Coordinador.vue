<template>
  <div>
    <Navbar :usuario="usuarioActual" />

    <div class="container">
    
    <div class="custom-background">
      
    </div>
  </div>

  </div>
  
    
  </template>


<script>
import Navbar from "@/views/Navbar";
export default {
  name: 'CoordinadorView',
  components: {
    Navbar,
  },
  data() {
    return {
      usuarioActual: {
        nombre: 'Nombre del Usuario',
        tipoUsuario: 'Tipo de Usuario',
      },
    };
  },
};
</script>

<style scoped>
.custom-background {
  background-image: url('../assets/mantenimiento-web.png');
  background-size: cover; /* Ajusta la imagen para que cubra completamente el contenedor */
  background-position: center; /* Centra la imagen */
  height: 98vh;
}
</style>
