import staticThemes from '../static/sidebarThemes';
import { ref } from 'vue';


// Outside of function scope to create global variable
const theme = ref<ITheme>(staticThemes[0]);

export default function useTheme() {
  const themes = ref<ITheme[]>(staticThemes);

  const setTheme = (item: ITheme) => {
    theme.value = item;
  };

  return {
    theme,
    setTheme,
    themes,
  };
}
