import { useEffect, useRef, useState } from 'react';

export function useTypingPlaceholders(
    placeholderSets,
    {
        typingSpeed = 60,
        deletingSpeed = 30,
        pauseAfterTyping = 3000,
        pauseBeforeNext = 500
    } = {}
) {
    const [placeholders, setPlaceholders] = useState({});

    const currentSetIndex = useRef(0);
    const charIndex = useRef(0);
    const isDeleting = useRef(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (!placeholderSets?.length) return;

        const type = () => {
            const current = placeholderSets[currentSetIndex.current];

            const values = Object.values(current);

            const maxChars = Math.max(
                ...values.map((text) => text.length)
            );

            const nextPlaceholders = {};

            Object.entries(current).forEach(([key, value]) => {
                nextPlaceholders[key] = value.substring(
                    0,
                    charIndex.current
                );
            });

            setPlaceholders(nextPlaceholders);

            let speed = isDeleting.current
                ? deletingSpeed
                : typingSpeed;

            if (
                !isDeleting.current &&
                charIndex.current === maxChars
            ) {
                isDeleting.current = true;
                speed = pauseAfterTyping;
            } else if (
                isDeleting.current &&
                charIndex.current === 0
            ) {
                isDeleting.current = false;
                currentSetIndex.current =
                    (currentSetIndex.current + 1) %
                    placeholderSets.length;

                speed = pauseBeforeNext;
            }

            charIndex.current = isDeleting.current
                ? Math.max(charIndex.current - 1, 0)
                : Math.min(charIndex.current + 1, maxChars);

            timeoutRef.current = setTimeout(type, speed);
        };

        type();

        return () => {
            clearTimeout(timeoutRef.current);
        };
    }, [
        placeholderSets,
        typingSpeed,
        deletingSpeed,
        pauseAfterTyping,
        pauseBeforeNext
    ]);

    return placeholders;
}