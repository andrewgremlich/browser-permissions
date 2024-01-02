declare global {
  interface Window {
    getScreenDetails(): Promise<void>;
  }
}

export {};
