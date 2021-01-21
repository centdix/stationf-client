<template>
  <div id="bookings" class="mt-4">
    <h5>Bookings list: </h5>
    <div class="col m-2">
      <ul class="list-group">
        <li v-for="booking in bookings" :key="booking.id" class="list-group-item d-flex justify-content-between align-items-center">
          <span style="font-weight: bold">{{ booking.room_name }}</span>
          <span>{{ booking.start_date | moment("L, HH:mm") }} - {{ booking.end_date | moment("L, HH:mm") }}</span>
          <a href="#!" @click="deleteBooking(booking)">delete</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BookingsList',
    props: [
      'bookings'
    ],
    data() {
      return {

      }
    },
    methods: {
      async deleteBooking(booking) {
        let url = process.env.VUE_APP_API_URL;
        let id = booking._id;
        let res = await fetch(url + 'bookings/' + id, {
          method: 'DELETE',
        });
        if (res.status === 200)
          this.$toasted.success('Booking deleted !').goAway(1500);
        else
          this.$toasted.error('Something went wrong...').goAway(1500);
        this.$emit('deleteBooking');
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
