import { IBook, Messages } from "@/types";
import { useAuth } from "@clerk/nextjs";
import { useState } from "react";
export type VapiStatus =
  | "idle"
  | "connecting"
  | "starting"
  | "listening"
  | "thinking"
  | "speaking"
  | "error";
export const useVapi = (book: IBook) => {
  const { userId } = useAuth();
  const [status, setStatus] = useState<VapiStatus>("idle");
  const [message, setMessage] = useState<Messages[]>([]);
  const [currentUserMessage, setCurrentUserMessage] = useState("");
};
