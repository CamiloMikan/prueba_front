<template>
    <header class="navbar">
      <div class="logo">
        <img src="../assets/icono.png" alt="Icono de la aplicación" />
      </div>
      <div class="user-info">
        <span>{{ usuarioActual.nombre }}</span>
        <span>{{ usuarioActual.tipoUsuario }}</span>
      </div>
    </header>
  </template>
  
  <script>
  export default {
  name: 'NavbarView',
    data() {
      return {
        usuarioActual: {
          nombre: "Nombre del Usuario",
          tipoUsuario: "Tipo de Usuario",
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #8c0fa5;
    color: white;
  }
  
  .logo img {
    width: 40px;
  }
  
  .user-info {
    display: flex;
    flex-direction: column;
    text-align: right;
  }
  </style>
  