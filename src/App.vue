<template>
  <div class="container app">
    <h1 class="mt-5 mb-3">Home page</h1>
    <div class="form-group pt-2 pb-2">
      <label for="name">Car name</label>
      <input type="text" id="name" class="form-control" v-model.trim="carName" />
    </div>
    <div class="form-group pt-2 pb-2">
      <label for="year">Car year</label>
      <input type="text" id="year" class="form-control" v-model.number="carYear" />
    </div>

    <div class="row">
      <div class="col-4 d-flex justify-content-between">
        <button class="btn btn-success mt-3" @click.prevent="createCar">Create</button>
        <button class="btn btn-primary mt-3 ml-3" @click.prevent="loadCar">Load</button>
      </div>
    </div>

    <hr>

    <ul class="list-group">
      <li class="list-group-item" v-for="car in cars" :key="car.id">
        Name: {{ car.name }} | Year: {{ car.year }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      carName: '',
      carYear: 2014,
      cars: [],
      resourse: null
    }
  },
  methods: {
    createCar() {
      this.resourse.save({}, { name: this.carName, year: this.carYear })
    },
    loadCar() {
      this.resourse.get().then(res => res.json()).then(arr => {
        this.cars = arr
      })
    }
  },
  created() {
    this.resourse = this.$resource('cars')
  }
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
