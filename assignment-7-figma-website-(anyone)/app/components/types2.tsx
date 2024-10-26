import Typed from "typed.js";
import { useEffect, useRef } from 'react';

const TypedComponent2 = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Get Appointment...'],
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

export default TypedComponent2;