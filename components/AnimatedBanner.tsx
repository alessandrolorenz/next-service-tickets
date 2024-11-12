'use client';

import React, { useEffect, useRef } from 'react';
import styles from "../app/animatedBanner.module.css"

const AnimatedBanner = () => {
    const bannerRef = useRef<HTMLDivElement>(null);
    const imagem2Ref = useRef<HTMLImageElement>(null);
    const imagem1Ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const banner = bannerRef.current;
        const imagem1 = imagem1Ref.current;
        const imagem2 = imagem2Ref.current;

        if (!banner || !imagem2 || !imagem1) return;

        const handleMouseMove = (event: MouseEvent) => {
            const bannerRect = banner.getBoundingClientRect();
            const centerX = bannerRect.width / 2;
            const tolerance = 400;

            const distanceFromCenter = event.clientX - bannerRect.left - centerX;

            const percentage = 50 + (distanceFromCenter / tolerance) * 50;
            const inversePercentage = 100 - percentage;
            if (Math.abs(distanceFromCenter) < tolerance) {
                imagem2.style.clipPath = `inset(0 0 0 ${inversePercentage}%)`;
                imagem1.style.clipPath = `inset(0 ${percentage}% 0 0)`;
            } else if (distanceFromCenter >= tolerance) {
                imagem1.style.clipPath = `inset(0 100% 0 0)`;
                imagem2.style.clipPath = 'inset(0 0 0 0)';
            } else if (distanceFromCenter <= -tolerance) {
                imagem1.style.clipPath = `inset(0 0 0 0)`;
                imagem2.style.clipPath = `inset(0 0 0 100%)`;
            }
        };

        const handleTouchMove = (event: TouchEvent) => {
            const touch = event.touches[0];
            handleMouseMove({
                clientX: touch.clientX,
                clientY: touch.clientY,
            } as MouseEvent);
        };

        const handleMouseLeave = () => {
            imagem2.style.clipPath = 'inset(0 0 0 50%)';
            imagem1.style.clipPath = 'inset(0 50% 0 0)';
        };

        const handleTouchEnd = () => {
            handleMouseLeave();
        };

        banner.addEventListener('mousemove', handleMouseMove);
        banner.addEventListener('mouseleave', handleMouseLeave);
        banner.addEventListener('touchmove', handleTouchMove);
        banner.addEventListener('touchend', handleTouchEnd);

        return () => {
            banner.removeEventListener('mousemove', handleMouseMove);
            banner.removeEventListener('mouseleave', handleMouseLeave);
            banner.removeEventListener('touchmove', handleTouchMove);
            banner.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <div className="relative m-auto p-6">
            <div className={`${styles.banner} m-auto`} ref={bannerRef}>
                <img
                    src="video.svg"
                    className={`${styles.imagem} ${styles.imagem1}`}
                    alt="Imagem 1"
                    ref={imagem1Ref}
                />
                <img
                    src="code.svg"
                    className={`${styles.imagem} ${styles.imagem2}`}
                    alt="Imagem 2"
                    ref={imagem2Ref}
                />
            </div>
        </div>
    );
};

export default AnimatedBanner;