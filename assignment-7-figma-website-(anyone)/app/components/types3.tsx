import Typed from "typed.js";
import { useEffect, useRef } from 'react';

const TypedComponent3 = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['7:00 am - 10:00 pm'],
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

export default TypedComponent3;