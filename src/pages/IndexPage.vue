<template>
  <q-page class="flex column flex-center">
    <div class="row items-center justify-center">
      <div class="col-12">
        {{ data }}
      </div>
      <div class="col-12">
        <q-btn @click="toggleLeftDrawer">Open Menu Left</q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
window.Pusher = Pusher;
import useUI from "../composables/useUI";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const { toggleLeftDrawer } = useUI();

    const data = ref([]);
    onMounted(() => {
      //test laravel web-socket works fine!
      // window.Echo = new Echo({
      //   broadcaster: "pusher",
      //   key: process.env.VUE_APP_WEBSOCKETS_KEY,
      //   wsHost: window.location.hostname,
      //   wsPort: 6001,
      //   cluster: "mt1",
      //   forceTLS: false,
      //   disableStats: true,
      //   // authEndpoint: "http://127.0.0.1:8000/api/broadcasting/auth",
      //   // auth: {
      //   //   headers: {
      //   //     Authorization: "Bearer " + YOUR_TOKEN_FROM_LOGIN,
      //   //   },
      //   // },
      // });
      // window.Echo.channel("channel-tickets").listen("NewMessage", (e) => {
      //   data.value.push(e);
      // });
    });

    return {
      data,
      toggleLeftDrawer,
    };
  },
});
</script>
