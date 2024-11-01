import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HorizontalScrollingCards = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const cardSize = 200; 

    // Make sure these images are correctly named and located in the public folder
    const imageUrls = [
        "/image1.jpg",
        "/image2.jpg",
        "/image3.jpg",
        "/PF.png", // Assuming this image exists in your public folder
        "/image5.jpg",
        "/image6.jpg",
        "/image7.jpg",
        "/image8.jpg",
        "/image9.jpg",
        "/image10.jpg",
    ];

    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const translateX = scrollPosition % (cardSize * 10);

    return (
        <div className="relative overflow-hidden h-[250px] flex items-center mt-8">
            <motion.div
                className="flex"
                style={{ transform: `translateX(-${translateX}px)` }}
                transition={{ ease: "linear", duration: 0.2 }}
            >
                {imageUrls.concat(imageUrls).map((src, index) => (
                    <motion.div
                        className="shadow-lg mx-4"
                        key={index}
                    >
                        <img 
                            src={src} 
                            alt={`Card ${index + 1}`} 
                            className="w-[200px] h-[200px] object-cover rounded-lg" 
                            onError={() => console.error(`Image failed to load: ${src}`)} // Error handling
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default HorizontalScrollingCards;
