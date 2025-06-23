interface AppConfig {
  isDevelopment: boolean;
  isProduction: boolean;
  apiBaseUrl: string;
  enableLogging: boolean;
}

function createConfig(): AppConfig {
  const isDevelopment = import.meta.env.DEV;
  const isProduction = import.meta.env.PROD;
  
  return {
    isDevelopment,
    isProduction,
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || '',
    enableLogging: isDevelopment,
  };
}

export const config = createConfig(); 