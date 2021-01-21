<template>
  <div id="app" class="container">
    <h1 class="text-center">Book a meeting room</h1>
    <div id="date_search">
      <h3 class="text-center m-4">Search by date and time</h3>
      <div class="row mt-4 justify-content-center">
        <label class="col-3">When: </label>
        <input type="date" id="date" class="col-4" v-model="date">
        <vue-timepicker :minute-interval="10" v-model="time" class="tp"></vue-timepicker>
      </div>
      <div class="row mt-4 justify-content-center">
        <label class="col-3">Duration: </label>
        <vue-timepicker
          :hour-range="[0, 1, 2, 3, 4, 5]"
          :minute-interval="30"
          v-model="duration"
          class="tp">    
        </vue-timepicker>
        <button @click="date_search" class="btn-secondary col-2 offset-md-2">Search</button>
      </div>
    </div>
    <RoomsList :start_date="start_search" :end_date="end_search"
      :available_rooms="available_rooms" @book="date_search"></RoomsList>
    <hr>
    <BookingsList :bookings="bookings" @deleteBooking="getBookings"></BookingsList>
  </div>
</template>

<script>
  import VueTimepicker from 'vue2-timepicker';
  import 'vue2-timepicker/dist/VueTimepicker.css';
  import moment from 'moment';
  import RoomsList from './components/RoomsList';
  import BookingsList from './components/BookingsList';

  export default {
    name: 'App',
    components: {
      VueTimepicker,
      RoomsList,
      BookingsList
    },
    data() {
      return {
        date: "",
        time: "",
        duration: "",
        start_search: "",
        end_search: "",
        available_rooms: [],
        rooms: [],
        bookings: [],
      }
    },
    async mounted() {
      await this.getRooms();
      await this.getBookings();
    },
    methods: {
      findByName(arr, name) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].name === name)
            return i;
        }
        return -1;
      },
      async getRooms() {
        let url = process.env.VUE_APP_API_URL;
        let response = await fetch(url + 'rooms', { method: 'get' });
        let data = await response.json();
        this.rooms = data.rooms;
      },
      async getBookings() {
        let url = process.env.VUE_APP_API_URL;
        let response = await fetch(url + 'bookings', { method: 'get' })
        let data = await response.json();
        this.bookings = data;
      },
      async date_search() {
        if (this.start_date === null || this.end_value === null || this.start_date.isBefore(new moment()) || this.start_date.isSame(this.end_value)) {
          this.$toasted.error('Invalid or incomplete inputs').goAway(1500);
          return ;
        }
        this.start_search = this.start_date;
        this.end_search = this.end_date;
        let available = [...this.rooms];
        let url = process.env.VUE_APP_API_URL;
        let response = await fetch(url + 'bookings', { method: 'get' })
        let data = await response.json();
        this.bookings = data;
        this.bookings.forEach((b) => {
          let start = moment(b.start_date).subtract(1, 'minutes');
          let end = moment(b.end_date).add(1, 'minutes');
          if (this.start_date.isBetween(start, end) || this.end_date.isBetween(start, end)
            || start.isBetween(this.start_date, this.end_date) || end.isBetween(this.start_date, this.end_date))
          {
            let i = this.findByName(available, b.room_name);
            available.splice(i, 1);
          }
        })
        this.available_rooms = available;
      },
    },
    computed: {
      start_date() {
        let time = this.time.split(':');
        let start_date = null;
        if (this.date.length > 0 && time.length > 1)
          start_date = new moment(this.date).hours(time[0]).minutes(time[1]);
        return start_date;
      },
      end_date() {
        let duration = this.duration.split(':');
        let end_date = null;
        if (this.start_date != null && duration.length > 1) {
          end_date = this.start_date.clone();
          end_date.add(parseInt(duration[0], 10), 'hours');
          end_date.add(parseInt(duration[1], 10), 'minutes');
        }
        return end_date;
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 30px;
  }
  .tp {
    padding-left: 0;
  }
</style>
