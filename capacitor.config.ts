import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Ionic 7 test app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
