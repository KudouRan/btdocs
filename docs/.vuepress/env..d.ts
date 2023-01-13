/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TAG_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
