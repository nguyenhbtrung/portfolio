import { useEffect, useMemo, useRef, useState } from 'react';

const FRAME_TIME = 16;

const randomBetween = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const randomSpeed = (base) =>
    randomBetween(
        Math.round(base * 0.8),
        Math.round(base * 1.2)
    );

export function useTypingPlaceholders(
    placeholderSets,
    {
        typingSpeed = 60,
        deletingSpeed = 30,
        pauseAfterTyping = 3000,
        pauseBeforeNext = 500
    } = {}
) {
    const fieldKeys = useMemo(() => {
        if (!placeholderSets?.length) return [];
        return Object.keys(placeholderSets[0]);
    }, [placeholderSets]);

    const [placeholders, setPlaceholders] = useState({});

    const currentSetIndex = useRef(0);
    const isDeleting = useRef(false);

    const timeoutRef = useRef();

    const fieldStates = useRef({});

    useEffect(() => {
        if (!placeholderSets?.length) return;

        const createFieldStates = () => {
            const states = {};

            let accumulatedDelay = 0;

            fieldKeys.forEach((key) => {
                states[key] = {
                    charIndex: 0,

                    startDelay: accumulatedDelay,

                    speed: randomSpeed(typingSpeed)
                };

                accumulatedDelay += randomBetween(80, 180);
            });

            return states;
        };

        fieldStates.current = createFieldStates();

        const tick = () => {
            const current =
                placeholderSets[currentSetIndex.current];

            const next = {};

            let allFinished = true;

            fieldKeys.forEach((key) => {
                const state = fieldStates.current[key];

                if (state.startDelay > 0) {
                    state.startDelay -= FRAME_TIME;
                } else {
                    state.speed -= FRAME_TIME;

                    if (state.speed <= 0) {
                        const target = current[key];

                        if (!isDeleting.current) {
                            if (
                                state.charIndex <
                                target.length
                            ) {
                                state.charIndex++;
                            }
                        } else {
                            if (state.charIndex > 0) {
                                state.charIndex--;
                            }
                        }

                        state.speed = randomSpeed(
                            isDeleting.current
                                ? deletingSpeed
                                : typingSpeed
                        );
                    }
                }

                next[key] = current[key].substring(
                    0,
                    state.charIndex
                );

                if (!isDeleting.current) {
                    if (
                        state.charIndex <
                        current[key].length
                    ) {
                        allFinished = false;
                    }
                } else {
                    if (state.charIndex > 0) {
                        allFinished = false;
                    }
                }
            });

            setPlaceholders(next);

            let delay = FRAME_TIME;

            if (allFinished) {
                if (!isDeleting.current) {
                    isDeleting.current = true;
                    delay = pauseAfterTyping;
                } else {
                    isDeleting.current = false;

                    currentSetIndex.current =
                        (currentSetIndex.current + 1) %
                        placeholderSets.length;

                    fieldStates.current =
                        createFieldStates();

                    delay = pauseBeforeNext;
                }
            }

            timeoutRef.current =
                setTimeout(tick, delay);
        };

        tick();

        return () => clearTimeout(timeoutRef.current);
    }, [
        fieldKeys,
        placeholderSets,
        typingSpeed,
        deletingSpeed,
        pauseAfterTyping,
        pauseBeforeNext
    ]);

    return placeholders;
}