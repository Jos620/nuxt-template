declare global {
  interface ImportMetaEnv {
    TEST: boolean;
  }

  interface ImportMeta {
    env: ImportMetaEnv;
  }
}

export {};
