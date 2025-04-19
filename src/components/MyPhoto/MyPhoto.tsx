import React, { useRef, useState, useEffect } from "react";
import styles from "./MyPhoto.module.css"; // Importe seus estilos CSS

interface MyPhotoProps {
  src: string;
  alt?: string;
  ref?: React.RefObject<HTMLDivElement>;
}

const MyPhoto: React.FC<MyPhotoProps> = ({ src, alt = "Imagem" }) => {
  const photoRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>(
    "perspective(500px) rotateY(0deg) rotateX(0deg)"
  );

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const photoElement = photoRef.current;
      const imgElement = imgRef.current;

      if (photoElement && imgElement) {
        const rect = photoElement.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (mouseX - centerX) / centerX;
        const deltaY = (mouseY - centerY) / centerY;

        const maxRotation = 10;

        const rotateY = deltaX * maxRotation;
        const rotateX = deltaY * -maxRotation;

        setTransformStyle(
          `perspective(500px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
        );
      }
    };

    const handleMouseLeave = () => {
      setTransformStyle("perspective(500px) rotateY(0deg) rotateX(0deg)");
    };

    const photoElement = photoRef.current;
    if (photoElement) {
      photoElement.addEventListener("mousemove", handleMouseMove);
      photoElement.addEventListener("mouseleave", handleMouseLeave);
    }

    // Limpeza dos event listeners ao desmontar o componente
    return () => {
      if (photoElement) {
        photoElement.removeEventListener("mousemove", handleMouseMove);
        photoElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []); // O array de dependências vazio significa que este efeito roda apenas uma vez (na montagem e desmontagem)

  return (
    <div className={styles.myphoto} ref={photoRef}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{ transform: transformStyle }}
        width={500}
      />
    </div>
  );
};

export default MyPhoto;
