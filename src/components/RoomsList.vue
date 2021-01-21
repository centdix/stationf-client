<template>
  <div id="results" class="mt-4" v-if="available_rooms.length > 0">
    <hr>
    <div class="row ml-1">
      <h5>Rooms available from {{ start_date | moment("L, HH:mm") }} to {{ end_date | moment("L, HH:mm") }} :</h5>
    </div>
    <div class="row mt-3">
      <div class="col-6">
        <span>Minimum capacity: {{ min_cap }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <input type="range" class="form-control-range" id="formControlRange" min="0" max="50" v-model="min_cap">
      </div>
      <div class="col-3 offset-md-2">
        <input class="form-check-input" type="checkbox" v-model="tv_selected" id="flexCheckChecked">
        <label class="form-check-label" for="flexCheckChecked">TV</label>
      </div>
      <div class="col-3">
        <input class="form-check-input" type="checkbox" v-model="retro_selected" id="flexCheckChecked">
        <label class="form-check-label" for="flexCheckChecked">Retro Projecteur</label>
      </div>  
    </div>
    <div class="card mt-1" v-for="room in filteredRooms" :key="room.id">
      <h5 class="card-header text-center">
        {{ room.name }}
      </h5>
      <div class="card-body">
        <div class="row m-2 justify-content-center">
          <div class="col-4">
            Capacity: {{ room.capacity }}
          </div>
          <div class="col-4">
            <span v-if="room.equipements.length > 0">Equipments: </span>
            <span v-else>No equipments</span>
            <br>
            <span v-for="e in room.equipements" :key="e.id" class="ml-3">
              {{ e.name }}
            </span>
          </div>
        </div>
        <div class="row justify-content-end m-3">
          <button class="btn btn-primary col-3" @click="book(room)">Book</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RoomsList',
    props: [
      'start_date',
      'end_date',
      'available_rooms'
    ],
    data() {
      return {
        min_cap: 0,
        tv_selected: false,
        retro_selected: false,
      }
    },
    methods: {
      async book(room) {
        let booking = {
          room_name: room.name,
          start_date: this.start_date,
          end_date: this.end_date,
        };
        let url = process.env.VUE_APP_API_URL
        let res = await fetch(url + 'book', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(booking),
        });
        this.$emit('book');
        if (res.status === 200)
          this.$toasted.success('Room booked !').goAway(1500);
        else
          this.$toasted.error('Something went wrong...').goAway(1500);
      },
    },
    computed: {
      filteredRooms() {
        let results = [...this.available_rooms];
        results = results.filter((r) => {
          if (r.capacity < this.min_cap)
            return false;
          let has_tv = false;
          let has_retro = false;
          for (let i = 0; i < r.equipements.length; i++) {
            if (r.equipements[i].name === "TV")
              has_tv = true;
            if (r.equipements[i].name === "Retro Projecteur")
              has_retro = true;
          }
          if ((this.tv_selected && !has_tv) || this.retro_selected && !has_retro)
            return false;
          return true;
        })
        return results;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
