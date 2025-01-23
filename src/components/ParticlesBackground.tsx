import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles carregadas", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 1
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ["#ffffff", "#87ceeb", "#00bfff", "#1e90ff", "#00ffff"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
            animation: {
              enable: true,
              speed: 1,
              sync: false
            }
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              speed: 2,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          life: {
            duration: {
              sync: false,
              value: 3
            },
            count: 1
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["bubble"],
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 200,
              size: 6,
              duration: 2,
              opacity: 1
            },
            push: {
              quantity: 6
            }
          }
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;