"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./HeroBackground.module.scss";

interface FlyingNumber {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  initialOpacity: number;
}

const HeroBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const numbersRef = useRef<FlyingNumber[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  // Параметры для контроля размера цифр
  const numberConfig = {
    baseSize: 48, // Базовый размер цифр
    resolutionMultiplier: 8, // Множитель разрешения для четкости
    fontSize: 24, // Размер шрифта
    sizeVariation: 0.1, // Вариация размера (0-1)
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Инициализация Three.js
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 500;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Создаем летающие цифры
    const createNumber = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) return;

      // Добавляем вариацию размера
      const sizeVariation =
        1 + (Math.random() - 0.5) * numberConfig.sizeVariation;
      const effectiveBaseSize = numberConfig.baseSize * sizeVariation;

      // Увеличиваем размер canvas для большей четкости
      const size = effectiveBaseSize * numberConfig.resolutionMultiplier;
      canvas.width = size;
      canvas.height = size;

      // Очищаем canvas
      context.clearRect(0, 0, size, size);

      // Масштабируем контекст для четкого отображения
      context.scale(
        numberConfig.resolutionMultiplier,
        numberConfig.resolutionMultiplier
      );

      // Рисуем цифру
      const digit = Math.random() > 0.5 ? "0" : "1";
      const initialOpacity = Math.random() * 0.5 + 0.5;

      // Устанавливаем стиль текста (матричный зеленый цвет)
      const effectiveFontSize = numberConfig.fontSize * sizeVariation;
      context.font = `bold ${effectiveFontSize}px 'Courier New', monospace`;
      context.fillStyle = `rgba(0, 255, 0, ${initialOpacity})`;
      context.textAlign = "center";
      context.textBaseline = "middle";

      // Добавляем свечение (зеленая тень как в матрице)
      context.shadowColor = "#0f0";
      context.shadowBlur = 15;
      context.fillText(digit, effectiveBaseSize / 2, effectiveBaseSize / 2);

      // Создаем текстуру из canvas
      const texture = new THREE.CanvasTexture(canvas);

      // Создаем материал с прозрачностью
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        color: 0x00ff00,
      });

      // Создаем плоскость для цифры
      const geometry = new THREE.PlaneGeometry(
        effectiveBaseSize,
        effectiveBaseSize
      );
      const mesh = new THREE.Mesh(geometry, material);

      // Начальная позиция в 3D пространстве
      mesh.position.set(
        (Math.random() - 0.5) * window.innerWidth,
        (Math.random() - 0.5) * window.innerHeight,
        Math.random() * 1000 - 500
      );

      // Случайная скорость
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.3
      );

      const number: FlyingNumber = { mesh, velocity, initialOpacity };
      numbersRef.current.push(number);
      scene.add(mesh);

      return number;
    };

    // Создаем 50 цифр
    for (let i = 0; i < 50; i++) {
      createNumber();
    }

    // Анимация
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      numbersRef.current.forEach((number) => {
        // Обновляем позицию
        number.mesh.position.x += number.velocity.x * delta * 60;
        number.mesh.position.y += number.velocity.y * delta * 60;
        number.mesh.position.z += number.velocity.z * delta * 60;

        // Отскок от границ
        if (Math.abs(number.mesh.position.x) > window.innerWidth / 2) {
          number.velocity.x *= -1;
        }
        if (Math.abs(number.mesh.position.y) > window.innerHeight / 2) {
          number.velocity.y *= -1;
        }
        if (number.mesh.position.z > 500 || number.mesh.position.z < -500) {
          number.velocity.z *= -1;
        }

        // Обновляем масштаб и прозрачность в зависимости от глубины
        const scale = Math.max(0.3, 1 - Math.abs(number.mesh.position.z) / 500);
        number.mesh.scale.set(scale, scale, scale);

        // Базовая прозрачность в зависимости от глубины
        let opacity = Math.max(0.2, 1 - Math.abs(number.mesh.position.z) / 500);

        // Добавляем эффект мерцания
        opacity *= 0.7 + 0.3 * Math.sin(time * 2 + number.mesh.id * 0.1);

        if (number.mesh.material instanceof THREE.MeshBasicMaterial) {
          number.mesh.material.opacity = opacity;
        }
      });

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    // Запускаем анимацию
    animate();

    // Обработка изменения размера окна
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Очистка
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      window.removeEventListener("resize", handleResize);

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (containerRef.current && rendererRef.current.domElement) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
      }

      // Очистка сцены
      if (sceneRef.current) {
        while (sceneRef.current.children.length > 0) {
          const object = sceneRef.current.children[0];
          if (object instanceof THREE.Mesh) {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach((material) => material.dispose());
              } else {
                object.material.dispose();
              }
            }
          }
          sceneRef.current.remove(object);
        }
      }
    };
  }, []);

  return <div ref={containerRef} className={styles.matrixBackground} />;
};

export default HeroBackground;
