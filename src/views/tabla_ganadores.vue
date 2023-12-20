<template>
    <div>
      <h2>Tabla de Ganadores</h2>
      <table>
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
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        ganadores: [],
      };
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
  