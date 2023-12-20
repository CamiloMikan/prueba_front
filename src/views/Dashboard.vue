<template>
  <div>
    <Navbar />

    <div class="contenedor-central">
    <div class="contenedor-botones">
      <button @click="irATablaGanadores" class="boton">Tabla de Ganadores</button>
      <button @click="irACategoriasInformativas" class="boton">Categorías Informativas</button>
    </div>
    <router-view></router-view>
  </div>
  </div>
  
</template>

<script>
import Navbar from "@/views/Navbar";
export default {
  name: 'DashboardView',
  methods: {
    irATablaGanadores() {
      this.$router.push({ name: 'tabla' });
    },
    irACategoriasInformativas() {
      this.$router.push({ name: 'categorias' });
    },
  },
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.contenedor-central {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.contenedor-botones {
  text-align: center;
}

.boton {
  background-color: #8c0fa5;
  color: white;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
}

.boton:hover {
  background-color: #d3d319;
}
</style>
