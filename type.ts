declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_LIVEKIT_URL: string;
    LIVEKIT_API_KEY: string;
    LIVEKIT_API_SECRET: string;
  }
}
