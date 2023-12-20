<template>

  <div>
    <Navbar :usuario="usuarioActual" />

    <div class="categorias-informativas">
      
      <h2>Categorias Informativas</h2>
      <div @click="mostrarVentanaEmergente('Oro')" class="categoria">
        <img src="../assets/medalla_oro.png" alt="Icono de Oro" />
        <p>Oro</p>
        <p>Total: {{ obtenerTotal('gold') }}</p>
      </div>
      <div @click="mostrarVentanaEmergente('Plata')" class="categoria">
        <img src="../assets/medalla_plata.png" alt="Icono de Plata" />
        <p>Plata</p>
        <p>Total: {{ obtenerTotal('silver') }}</p>
      </div>
      <div @click="mostrarVentanaEmergente('Bronce')" class="categoria">
        <img src="../assets/medalla_bronze.png" alt="Icono de Bronce" />
        <p>Bronce</p>
        <p>Total: {{ obtenerTotal('bronze') }}</p>
      </div>
    </div>

  </div>
    
</template>
  
  <script>
  import axios from 'axios';
  import Navbar from "@/views/Navbar";

  export default {
    data() {
      return {
        ganadores: [],
      };
    },components: {
    Navbar,
  },
    mounted() {
      axios.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json')
        .then(response => {
          this.ganadores = response.data;
        })
        .catch(error => {
          console.error('Error al obtener los datos:', error);
        });
    },
    methods: {
      mostrarVentanaEmergente(categoria) {
        alert(`Descripción de la categoría ${categoria} `);
      },
      obtenerTotal(tipoMedalla) {
        
        return this.ganadores.reduce((total, ganador) => total + ganador[tipoMedalla], 0);
      },
    },
  };
  </script>

<style scoped>
.categorias-informativas {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}

.categoria {
  text-align: center;
  padding: 20px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.categoria:hover {
  transform: scale(1.05);
}

.categoria img {
  width: 50px;
  height: 70px;
  margin-bottom: 10px;
}

</style>
  