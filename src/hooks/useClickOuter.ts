import { onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';

export default function useClickOuter(
  ref: Ref<HTMLElement | null>,
  callback: () => void
) {
  const handleClick = (e: MouseEvent) => {
    if (ref.value && !ref.value.contains(e.target as Node)) {
      callback();
    }
  };
  onMounted(() => {
    document.addEventListener('click', handleClick);
  });
  onUnmounted(() => {
    document.removeEventListener('click', handleClick);
  });
}
