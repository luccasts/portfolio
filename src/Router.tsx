import "./App.css";
import { HackerParticles } from "./components/HackerParticles/HackerParticles";
import { Home } from "./pages/Home";

export function RouterPage() {
  return (
    <div>
      <HackerParticles />
      <Home />
    </div>
  );
}
