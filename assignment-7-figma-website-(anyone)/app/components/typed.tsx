import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Join the world', 'of fitness.'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return <span className="typed-span" ref={el}>
        <span></span>
    </span>;
};

export default TypedComponent;