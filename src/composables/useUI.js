import { useUIStore } from "stores/ui";
import { storeToRefs } from "pinia";
// example composable
const useUI = () => {
  const storeUI = useUIStore();
  const { leftDrawerOpen } = storeToRefs(storeUI); // state and getters need "storeToRefs"
  const { toggleLeftDrawer } = storeUI; // actions can be destructured directly
  return {
    leftDrawerOpen,
    toggleLeftDrawer,
  };
};

export default useUI;
