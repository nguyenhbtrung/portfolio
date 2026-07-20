import { useEffect, useMemo, useRef, useState } from 'react';

const FRAME_TIME = 1;

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

const getNow = () => performance.now();

export function useTypingPlaceholders(
    placeholderSets,
    {
        typingSpeed = 60,
        deletingSpeed = 30,
        pauseAfterTyping = 3000,
        pauseBeforeNext = 500,
        fadeOut = false,
        fadeDuration = 250,
        paused = false,
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

    const waitingForResumeRef = useRef(false);

    const pausedRef = useRef(paused);
    const tickRef = useRef();

    useEffect(() => {
        pausedRef.current = paused;
    }, [paused]);

    useEffect(() => {
        if (!placeholderSets?.length) return;

        const createFieldStates = () => {
            const states = {};

            const delayMin = HUMANIZE.delayBetweenFields[0];
            const delayMax = HUMANIZE.delayBetweenFields[1];

            let accumulatedDelay = 0;

            fieldKeys.forEach((key) => {
                const now = getNow();

                states[key] = {
                    charIndex: 0,

                    nextTime:
                        now +
                        accumulatedDelay +
                        randomSpeed(
                            typingSpeed,
                            HUMANIZE.typingVariation
                        )
                };

                accumulatedDelay += randomBetween(delayMin, delayMax);
            });

            return states;
        };

        fieldStates.current = createFieldStates();

        const updateField = (state, target, now) => {
            if (now < state.nextTime) return;

            if (!isDeleting.current) {
                if (state.charIndex < target.length) {
                    state.charIndex++;
                }
            } else {
                if (state.charIndex > 0) {
                    state.charIndex--;
                }
            }

            state.nextTime += randomSpeed(
                isDeleting.current
                    ? deletingSpeed
                    : typingSpeed,
                isDeleting.current
                    ? HUMANIZE.deletingVariation
                    : HUMANIZE.typingVariation
            );
        };

        const render = (current) => {
            const now = getNow();
            const next = {};
            let allFinished = true;

            fieldKeys.forEach((key) => {
                const state = fieldStates.current[key];

                updateField(state, current[key], now);

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
            const nextTick = Math.min(
                ...Object.values(fieldStates.current).map(
                    field => field.nextTime
                )
            );

            let delay = Math.max(
                0,
                nextTick - performance.now()
            );

            if (!allFinished) {
                timeoutRef.current = setTimeout(tick, delay);
                return;
            }

            if (!isDeleting.current) {

                // If user is typing
                // Freeze after current cycle
                if (pausedRef.current) {
                    waitingForResumeRef.current = true;
                    return;
                }

                if (fadeOut) {

                    timeoutRef.current = setTimeout(() => {

                        // Double-check condition to prevent edge case where pause triggers exactly when timeout executes
                        if (pausedRef.current) {
                            waitingForResumeRef.current = true;
                            return;
                        }

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
                
            } else {

                isDeleting.current = false;

                currentSetIndex.current =
                    (currentSetIndex.current + 1) %
                    placeholderSets.length;

                fieldStates.current =
                    createFieldStates();

                delay = pauseBeforeNext;
            }

            // FIXME: 1 more cycle before freeze
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

        tickRef.current = tick;

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

    useEffect(() => {

        if (!waitingForResumeRef.current)
            return;

        if (paused)
            return;

        waitingForResumeRef.current = false;

        tickRef.current?.();

    }, [paused, pauseAfterTyping]);

    return {
        placeholders,
        placeholderOpacity,
        fadeDuration,
    }
}