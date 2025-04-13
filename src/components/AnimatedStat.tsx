import React, { useState, useEffect, useRef } from 'react';

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  labelTop?: string;
  labelBottom?: string;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 1500,
  className = '',
  labelTop,
  labelBottom,
}) => {
  const [current, setCurrent] = useState(0);
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Round to nearest integer for large numbers, or keep 1 decimal for smaller numbers
  const formatValue = (val: number) => {
    if (val >= 100) {
      return Math.round(val);
    } else {
      return Math.round(val * 10) / 10;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCurrent(progress * value);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [value, duration, isVisible]);

  return (
    <div 
      ref={targetRef} 
      className={`flex flex-col items-center ${className}`}
    >
      {labelTop && <span className="text-sm text-gray-500 mb-1">{labelTop}</span>}
      <div className="text-3xl md:text-4xl font-bold">
        {prefix}
        {formatValue(current)}
        {suffix}
      </div>
      {labelBottom && <span className="text-sm font-medium mt-2 text-center">{labelBottom}</span>}
    </div>
  );
};

export default AnimatedStat;
