import { defineStore } from "pinia";
import { ref } from "vue";

export const useUIStore = defineStore("ui", () => {
  // setup store example
  const leftDrawerOpen = ref(false);
  function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  }

  return { leftDrawerOpen, toggleLeftDrawer };
});

// export const useCounterStore = defineStore("counter", {
//   state: () => ({ leftDrawerOpen: false }),
// //   getters: {
// //     doubleCount: (state) => state.count * 2,
// //   },
//   actions: {
//     toggleLeftDrawer() {
//       this.leftDrawerOpen = !this.leftDrawerOpen
//     },
//   },
// });
