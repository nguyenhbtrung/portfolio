import { useEffect, useMemo, useRef, useState } from 'react';

const FRAME_TIME = 16;

const HUMANIZE = {
    delayBetweenFields: [80,180],

    typingVariation: 0.2,

    deletingVariation:0.2
}

const randomBetween = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const randomSpeed = (base, variation = 0.2) => {
    const minSpeed = 1 - variation;
    const maxSpeed = 1 + variation;

    return randomBetween(
        Math.round(base * minSpeed),
        Math.round(base * maxSpeed)
    );
} 

export function useTypingPlaceholders(
    placeholderSets,
    {
        typingSpeed = 60,
        deletingSpeed = 30,
        pauseAfterTyping = 3000,
        pauseBeforeNext = 500,
        fadeOut = false,
        fadeDuration = 250
    } = {}
) {
    const fieldKeys = useMemo(() => {
        if (!placeholderSets?.length) return [];
        return Object.keys(placeholderSets[0]);
    }, [placeholderSets]);

    const [placeholders, setPlaceholders] = useState({});
    const [placeholderOpacity, setPlaceholderOpacity] = useState(0.42);

    const currentSetIndex = useRef(0);
    const isDeleting = useRef(false);

    const timeoutRef = useRef();
    const fadingRef = useRef(false);

    const fieldStates = useRef({});

    useEffect(() => {
        if (!placeholderSets?.length) return;

        const createFieldStates = () => {
            const states = {};

            const delayMin = HUMANIZE.delayBetweenFields[0];
            const delayMax = HUMANIZE.delayBetweenFields[1];

            let accumulatedDelay = 0;

            fieldKeys.forEach((key) => {
                states[key] = {
                    charIndex: 0,

                    startDelay: accumulatedDelay,

                    speed: randomSpeed(typingSpeed, HUMANIZE.typingVariation)
                };

                accumulatedDelay += randomBetween(delayMin, delayMax);
            });

            return states;
        };

        fieldStates.current = createFieldStates();

        const updateField = (state, target) => {
            if (state.startDelay > 0) {
                state.startDelay -= FRAME_TIME;
                return;
            }

            state.speed -= FRAME_TIME;

            if (state.speed > 0) return;

            if (!isDeleting.current) {
                if (state.charIndex < target.length) {
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
                    : typingSpeed,
                HUMANIZE.deletingVariation
            );
        };

        const render = (current) => {
            const next = {};
            let allFinished = true;

            fieldKeys.forEach((key) => {
                const state = fieldStates.current[key];

                updateField(state, current[key]);

                next[key] = current[key].substring(
                    0,
                    state.charIndex
                );

                if (!isDeleting.current) {
                    if (state.charIndex < current[key].length) {
                        allFinished = false;
                    }
                } else {
                    if (state.charIndex > 0) {
                        allFinished = false;
                    }
                }
            });

            setPlaceholders(next);

            return allFinished;
        };

        const schedule = (allFinished, createFieldStates) => {
            let delay = FRAME_TIME;

            if (!allFinished) {
                timeoutRef.current = setTimeout(tick, delay);
                return;
            }

            if (!isDeleting.current) {

                if (fadeOut) {

                    timeoutRef.current = setTimeout(() => {

                        fadingRef.current = true;

                        setPlaceholderOpacity(0);

                        setTimeout(() => {

                            currentSetIndex.current =
                                (currentSetIndex.current + 1) %
                                placeholderSets.length;

                            fieldStates.current =
                                createFieldStates();

                            setPlaceholders({});

                            setPlaceholderOpacity(0.42);

                            fadingRef.current = false;

                            // timeoutRef.current = setTimeout(
                            //     tick,
                            //     pauseBeforeNext
                            // );
                            tick();

                        }, fadeDuration);

                    }, pauseAfterTyping);

                    return;
                }

                isDeleting.current = true;
                delay = pauseAfterTyping;
            }

            else {

                isDeleting.current = false;

                currentSetIndex.current =
                    (currentSetIndex.current + 1) %
                    placeholderSets.length;

                fieldStates.current =
                    createFieldStates();

                delay = pauseBeforeNext;
            }

            timeoutRef.current = setTimeout(
                tick,
                delay
            );
        };

        const tick = () => {
            if (fadingRef.current) return;

            const current =
                placeholderSets[currentSetIndex.current];

            const allFinished = render(current);

            schedule(allFinished, createFieldStates);
        };

        tick();

        return () => clearTimeout(timeoutRef.current);
    }, [
        fieldKeys,
        placeholderSets,
        typingSpeed,
        deletingSpeed,
        pauseAfterTyping,
        pauseBeforeNext,
        fadeOut,
        fadeDuration
    ]);

    return {
        placeholders,
        placeholderOpacity,
        fadeDuration,
    }
}