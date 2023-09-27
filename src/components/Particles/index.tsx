import { colors } from "constants/colors";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const ParticlesJSX = () => {
  const particlesInit = useCallback(async (main: Engine) => {
    await loadFull(main);
  }, []);
  const { darkGray, green } = colors;
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: darkGray,
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "connect",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 3,
              links: {
                enable: false,
                opacity: 0.5,
                distance: 200,
              },
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
          },
        },
        particles: {
          color: {
            value: green,
          },
          links: {
            color: green,
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
      }}
    />
  );
};

export default ParticlesJSX;