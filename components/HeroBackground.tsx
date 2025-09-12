"use client";
import React, { useEffect, useRef } from "react";
import { mockData } from "@/data/mock.js";

const HeroBackgroundIcons: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const icons: HTMLDivElement[] = [];

    const frontendSkills =
      mockData.skills.categories.find(
        (category) => category.title === "Frontend"
      )?.skills || [];

    const toolsSkills =
      mockData.skills.categories.find(
        (category) => category.title === "Tools & Libraries"
      )?.skills || [];

    const filteredSkills = [...frontendSkills, ...toolsSkills];

    const uniqueSkills = filteredSkills.filter(
      (skill, index, array) =>
        array.findIndex((s) => s.name === skill.name) === index
    );

    const style = document.createElement("style");
    style.textContent = `
      @keyframes floatIcon {
        0% { transform: translate(0, 0) rotate(0deg) scale(1); }
        25% { transform: translate(30px, -20px) rotate(10deg) scale(1.1); }
        50% { transform: translate(-20px, -30px) rotate(-10deg) scale(0.9); }
        75% { transform: translate(-30px, 20px) rotate(5deg) scale(1.05); }
        100% { transform: translate(20px, 30px) rotate(-5deg) scale(1); }
      }
      @keyframes glowIcon {
        0%, 100% { opacity: 0; filter: drop-shadow(0 0 4px currentColor); }
        25%, 75% { opacity: 0.6; filter: drop-shadow(0 0 12px currentColor); }
        50% { opacity: 0.8; filter: drop-shadow(0 0 16px currentColor); }
      }
    `;
    document.head.appendChild(style);

    for (let i = 0; i < Math.min(20, uniqueSkills.length); i++) {
      const iconWrapper = document.createElement("div");
      iconWrapper.style.position = "absolute";
      iconWrapper.style.display = "flex";
      iconWrapper.style.alignItems = "center";
      iconWrapper.style.justifyContent = "center";
      iconWrapper.style.pointerEvents = "none";
      iconWrapper.style.userSelect = "none";
      iconWrapper.style.opacity = "0";
      iconWrapper.style.filter = "drop-shadow(0 0 8px currentColor)";

      const tech = uniqueSkills[i];

      const img = document.createElement("img");
      img.src = tech.icon;
      img.alt = tech.name;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "contain";

      iconWrapper.appendChild(img);
      iconWrapper.style.color = tech.color;

      const size = 20 + Math.random() * 30;
      iconWrapper.style.width = `${size}px`;
      iconWrapper.style.height = `${size}px`;
      iconWrapper.style.left = `${Math.random() * 100}%`;
      iconWrapper.style.top = `${Math.random() * 100}%`;

      const duration = 15 + Math.random() * 25;
      const delay = Math.random() * 3;

      iconWrapper.style.animation = `
        floatIcon ${duration}s ease-in-out ${delay}s infinite alternate,
        glowIcon ${duration}s ease-in-out ${delay}s infinite alternate
      `;

      container.appendChild(iconWrapper);
      icons.push(iconWrapper);
    }

    return () => {
      icons.forEach((icon) => icon.remove());
      style.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    />
  );
};

export default HeroBackgroundIcons;
