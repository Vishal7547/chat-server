const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://chat-client-lime-chi.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  exposedHeaders: ["set-cookie"],
  optionsSuccessStatus: 204,
};

const CHAT_TOKEN = "chat-token";

export { corsOptions, CHAT_TOKEN };
