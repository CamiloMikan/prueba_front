<template>
    <header class="navbar">
      <div class="logo">
        <img src="../assets/icono.png" alt="Icono de la aplicación" />
        <div>
          <button @click="logout">Logout</button>
        </div>
       
      </div>
      <div class="user-info">
        <span>{{ usuarioActual.nombre }}</span>
        <span>{{ usuarioActual.role }}</span>
        
      </div>
    </header>
  </template>
  
  <script>
  export default {
  name: 'NavbarView',
  methods: {
    logout() {
      localStorage.removeItem('usuarioActual');
      
      this.$router.push({ name: 'home' });
    },
  },
    data() {
      return {
        usuarioActual: {
          nombre: "Nombre del Usuario",
          role: "Rol del Usuario",
        },
      };
    },
    created() {
    // Recuperar los datos del usuario del localStorage al crear el componente
    const storedUser = localStorage.getItem('usuarioActual');
    if (storedUser) {
      this.usuarioActual = JSON.parse(storedUser);
    }
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
  