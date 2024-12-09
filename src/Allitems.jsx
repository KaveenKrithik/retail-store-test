import React, { useState, useEffect } from 'react';
import Product from './Product';

const Allitems = () => {
    const [items, setItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedItemIndex, setExpandedItemIndex] = useState(null);

    
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/products/all'); 
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchItems();
    }, []);

    
    const toggleDetails = (index) => {
        setExpandedItemIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
    };

    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, items.length - 3));
    };

    return (
        <div>
            <h1>products</h1>
            <Product
                items={items}
                currentIndex={currentIndex}
                expandedItemIndex={expandedItemIndex}
                onPrev={handlePrev}
                onNext={handleNext}
                toggleDetails={toggleDetails}
            />
        </div>
    );
};

export default Allitems;
