import React, { useEffect, useState } from "react";
import "../ProjectsSection/AnimatedIcons.css"; // Ensure this path is correct

const AnimatedIcons = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const cardWidth = 200; // Width of the card including margin

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calculate the horizontal position for left-to-right cards
    const translateXLeftToRight = scrollPosition % (cardWidth * 10); // For left-to-right cards

    // Calculate the horizontal position for right-to-left cards
    const translateXRightToLeft = -((scrollPosition % (cardWidth * 10)) - (cardWidth * 10)); // For right-to-left cards

    return (
        <div className="scrolling-container">
            {/* Left to Right Cards */}
            <div className="cards" style={{ transform: `translateX(-${translateXLeftToRight}px)` }}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="card" key={index}>
                        Card {index + 1}
                    </div>
                ))}
                {/* Duplicate the cards for seamless scrolling */}
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="card" key={index + 10}>
                        Card {index + 1}
                    </div>
                ))}
            </div>

            {/* Right to Left Cards */}
            <div className="cards" style={{ transform: `translateX(${translateXRightToLeft}px)`, position: 'absolute', top: '50%' }}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="card" key={index + 20}>
                        Card {index + 1}
                    </div>
                ))}
                {/* Duplicate the cards for seamless scrolling */}
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="card" key={index + 30}>
                        Card {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedIcons;
