import * as React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'dotlottie-player': {
                src?: string;
                autoplay?: string | boolean;
                loop?: string | boolean;
                controls?: string | boolean;
                speed?: string | number;
                style?: React.CSSProperties;
                class?: string;
                className?: string;
            };
        }
    }
}

export { };
