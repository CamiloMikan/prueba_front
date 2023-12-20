<template>
  <div>
    <Navbar :usuario="usuarioActual" />
    <div class="tabla-container">
      <h2>Tabla de Ganadores</h2>
      <table class="tabla-ganadores">
        <thead>
          <tr>
            <th>Atleta</th>
            <th>Edad</th>
            <th>País</th>
            <th>Año</th>
            <th>Fecha</th>
            <th>Deporte</th>
            <th>Oro</th>
            <th>Plata</th>
            <th>Bronce</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ganador in ganadores" :key="ganador.athlete">
            <td>{{ ganador.athlete }}</td>
            <td>{{ ganador.age }}</td>
            <td>{{ ganador.country }}</td>
            <td>{{ ganador.year }}</td>
            <td>{{ ganador.date }}</td>
            <td>{{ ganador.sport }}</td>
            <td>{{ ganador.gold }}</td>
            <td>{{ ganador.silver }}</td>
            <td>{{ ganador.bronze }}</td>
            <td>{{ ganador.total }}</td>
          </tr>
        </tbody>
      </table>
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
  },
  components: {
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
};
</script>

<style scoped>
.tabla-container {
  margin: 20px;
}

.tabla-ganadores {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.tabla-ganadores th,
.tabla-ganadores td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.tabla-ganadores th {
  background-color: #8c0fa5;
  color: white;
}

.tabla-ganadores tr:nth-child(even) {
  background-color: #f2f2f2;
}

.tabla-ganadores tr:hover {
  background-color: #ddd;
}
</style>
