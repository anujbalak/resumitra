import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById('dashboard')).render(
    <StrictMode>
        <App />
    </StrictMode>
)