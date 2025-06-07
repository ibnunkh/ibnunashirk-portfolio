// hooks/useAnimations.js
'use client';

import { useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect, useMemo } from 'react';

// Hook untuk scroll-triggered animations
export const useScrollAnimation = (options = {}) => {
    const {
        threshold = 0.1,
        triggerOnce = true,
        rootMargin = '0px',
    } = options;

    const ref = useRef(null);
    const isInView = useInView(ref, {
        threshold,
        once: triggerOnce,
        rootMargin
    });

    return { ref, isInView };
};

// Hook untuk animasi dengan kontrol manual
export const useControlledAnimation = () => {
    const controls = useAnimation();

    const startAnimation = async (variants) => {
        await controls.start(variants);
    };

    const stopAnimation = () => {
        controls.stop();
    };

    const setAnimation = (variants) => {
        controls.set(variants);
    };

    return {
        controls,
        startAnimation,
        stopAnimation,
        setAnimation,
    };
};

// Hook untuk stagger animations
export const useStaggerAnimation = (itemCount, options = {}) => {
    const {
        staggerDelay = 0.1,
        initialDelay = 0,
        triggerOnce = true,
    } = options;

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: triggerOnce });

    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: initialDelay,
            },
        },
    }), [staggerDelay, initialDelay]);

    const itemVariants = useMemo(() => ({
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }), []);

    return {
        containerRef,
        isInView,
        containerVariants,
        itemVariants,
    };
};

// Hook untuk hover animations
export const useHoverAnimation = (hoverVariants, tapVariants) => {
    const hoverProps = useMemo(() => ({
        whileHover: hoverVariants,
        whileTap: tapVariants,
        transition: { type: "spring", stiffness: 400, damping: 17 },
    }), [hoverVariants, tapVariants]);

    return hoverProps;
};

// Hook untuk responsive animations
export const useResponsiveAnimation = (animations) => {
    const {
        mobile = {},
        tablet = {},
        desktop = {},
    } = animations;

    const getCurrentAnimation = () => {
        if (typeof window === 'undefined') return desktop;

        const width = window.innerWidth;
        if (width < 768) return mobile;
        if (width < 1024) return tablet;
        return desktop;
    };

    const [currentAnimation, setCurrentAnimation] = useState(getCurrentAnimation());

    useEffect(() => {
        const handleResize = () => {
            setCurrentAnimation(getCurrentAnimation());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return currentAnimation;
};

// Hook untuk sequence animations
export const useSequenceAnimation = (sequence, autoPlay = false) => {
    const controls = useAnimation();
    const [currentStep, setCurrentStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const playSequence = async () => {
        setIsPlaying(true);

        for (let i = 0; i < sequence.length; i++) {
            setCurrentStep(i);
            await controls.start(sequence[i]);
        }

        setIsPlaying(false);
    };

    const resetSequence = () => {
        setCurrentStep(0);
        controls.set(sequence[0] || {});
    };

    useEffect(() => {
        if (autoPlay) {
            playSequence();
        }
    }, [autoPlay]);

    return {
        controls,
        currentStep,
        isPlaying,
        playSequence,
        resetSequence,
    };
};

// Hook untuk intersection observer dengan callback
export const useIntersectionAnimation = (callback, options = {}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, options);

    useEffect(() => {
        if (isInView && callback) {
            callback();
        }
    }, [isInView, callback]);

    return { ref, isInView };
};

// Hook untuk parallax effect
export const useParallax = (speed = 0.5, direction = 'vertical') => {
    const ref = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const scrolled = window.pageYOffset;
                const elementTop = rect.top + scrolled;
                const elementHeight = rect.height;
                const windowHeight = window.innerHeight;

                // Calculate offset based on scroll position
                const offsetValue = (scrolled - elementTop + windowHeight) * speed;
                setOffset(offsetValue);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    const transform = direction === 'vertical'
        ? `translateY(${offset}px)`
        : `translateX(${offset}px)`;

    return { ref, transform };
};

// Hook untuk mouse tracking animations
export const useMouseTracking = (options = {}) => {
    const {
        strength = 0.1,
        rotateStrength = 0.05,
        enabled = true
    } = options;

    const ref = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!enabled) return;

        const handleMouseMove = (e) => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const x = (e.clientX - centerX) * strength;
                const y = (e.clientY - centerY) * strength;

                setMousePosition({ x, y });
            }
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => {
            setIsHovered(false);
            setMousePosition({ x: 0, y: 0 });
        };

        const element = ref.current;
        if (element) {
            element.addEventListener('mousemove', handleMouseMove);
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                element.removeEventListener('mousemove', handleMouseMove);
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [strength, enabled]);

    const transform = {
        x: mousePosition.x,
        y: mousePosition.y,
        rotateX: mousePosition.y * rotateStrength,
        rotateY: mousePosition.x * rotateStrength,
    };

    return { ref, transform, isHovered };
};

// Hook untuk typing animation
export const useTypingAnimation = (text, options = {}) => {
    const {
        speed = 100,
        startDelay = 0,
        cursor = true,
        loop = false
    } = options;

    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const startTyping = () => {
            setIsTyping(true);
            const timer = setTimeout(() => {
                if (currentIndex < text.length) {
                    setDisplayText(text.slice(0, currentIndex + 1));
                    setCurrentIndex(prev => prev + 1);
                } else {
                    setIsTyping(false);
                    if (loop) {
                        setTimeout(() => {
                            setCurrentIndex(0);
                            setDisplayText('');
                        }, 1000);
                    }
                }
            }, speed);

            return () => clearTimeout(timer);
        };

        if (startDelay > 0 && currentIndex === 0) {
            const delayTimer = setTimeout(startTyping, startDelay);
            return () => clearTimeout(delayTimer);
        } else {
            return startTyping();
        }
    }, [text, currentIndex, speed, startDelay, loop]);

    const cursorChar = cursor && isTyping ? '|' : '';

    return `${displayText}${cursorChar}`;
};