'use client';

import { useEffect } from "react";
import axios from "axios";

const useWebSocket = (url: string, onMessage: (data: any) => void) => {
  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      console.log("Connexion WebSocket établie.");
    };

    ws.onmessage = (event) => {
      console.log("Nouveau message :", event.data);
      axios.post('/api/messages', event.data);
      onMessage(JSON.parse(event.data));
    };

    ws.onclose = () => {
      console.log("Connexion WebSocket fermée.");
    };

    return () => {
      ws.close();
    };
  }, [url, onMessage]);
};

export default useWebSocket;
