<template>
  <article class="py-sm-4" id="task-3">
    <div class="container p-4 bg-white border">
      <p class="display-4">Task 3</p>
      <p class="h5 mb-3">
        Please use “Google API” for finding the best way to go to Central World from SCG Bangsue
      </p>
      <div class="mt-3" id="map"></div>
    </div>
  </article>
</template>

<script>
import gmapsInit from '@/utils/gmaps';

export default {
  name: 'Task-3',
  data() {
    return {
      isLoading: false,
      showResult: false,
    };
  },
  async mounted() {
    try {
      const el = document.querySelector('#map');
      const google = await gmapsInit();
      const centralWorld = { lat: 13.746890928195297, lng: 100.5393136406783 };
      const scgBangsue = { lat: 13.800683049084455, lng: 100.52785799834938 };
      const directionsRenderer = new google.maps.DirectionsRenderer();
      const directionsService = new google.maps.DirectionsService();
      const map = new google.maps.Map(el, {
        zoom: 17,
        center: centralWorld,
      });

      directionsRenderer.setMap(map);
      const request = {
        origin: { location: centralWorld },
        destination: { location: scgBangsue },
        travelMode: 'DRIVING',
      };
      directionsService.route(request, (result, status) => {
        if (status == 'OK') {
          directionsRenderer.setDirections(result);
        }
      });
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style scoped>
#map {
  height: calc(100vh - 325px);
}
</style>
