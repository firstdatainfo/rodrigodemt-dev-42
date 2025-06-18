import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  // Verifica se é um dispositivo móvel
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        // Reduz o FPS em dispositivos móveis
        fpsLimit: isMobile ? 30 : 60,
        // Desativa interações em dispositivos móveis
        interactivity: {
          events: {
            onClick: {
              enable: !isMobile,
              mode: "push",
            },
            onHover: {
              enable: !isMobile,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: isMobile ? 100 : 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#8B5CF6", "#D946EF", "#F97316", "#0EA5E9", "#EC4899", "#F43F5E"],
          },
          // Desativa links em dispositivos móveis
          links: {
            color: "#ffffff",
            distance: 150,
            enable: !isMobile, // Desativa links em dispositivos móveis
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            // Reduz a velocidade em dispositivos móveis
            speed: isMobile ? 1 : 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: isMobile ? 1000 : 800, // Reduz a densidade em dispositivos móveis
            },
            // Reduz o número de partículas em dispositivos móveis
            value: isMobile ? 30 : 60,
          },
          opacity: {
            value: isMobile ? 0.5 : 0.7, // Reduz a opacidade em dispositivos móveis
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: isMobile ? 3 : 5 }, // Reduz o tamanho máximo em dispositivos móveis
          },
        },
        detectRetina: true,
        // Melhora o desempenho em dispositivos móveis
        smooth: true,
        // Reduz a qualidade em dispositivos móveis
        motion: {
          reduce: isMobile,
        },
      }}
    />
  );
};

export default ParticlesBackground;