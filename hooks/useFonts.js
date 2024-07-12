import { useFonts } from 'expo-font';

const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    'BrockScript': require('../assets/fonts/BrockScript.ttf'),
  });

  return fontsLoaded;
};

export default useCustomFonts;
