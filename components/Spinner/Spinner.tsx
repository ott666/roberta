'use client'
import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import styles from './spinner.module.css';

interface SpinnerProps {
  percentage: number;
}

const Spinner: React.FC<SpinnerProps> = ({ percentage }) => {
  const controls = useAnimation();
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true });

  const radius = 90;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  React.useEffect(() => {
    if (isInView) {
      controls.start({ strokeDashoffset: circumference - (percentage / 100) * circumference });
    }
  }, [controls, isInView, circumference, percentage]);

  return (
    <div className={styles.container}>
      <svg
        ref={ref}
        height={radius * 2}
        width={radius * 2}
        className={styles.svg}
      >
        <circle
          stroke="#d2d3d4"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className={styles.circleBackground}
        />
        <motion.circle
          stroke="#4caf50"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          animate={controls}
          initial={{ strokeDashoffset: circumference }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className={styles.circleProgress}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className={styles.text}
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default Spinner;
