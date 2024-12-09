import React from 'react';

const Product = ({ items, currentIndex, expandedItemIndex, onPrev, onNext, toggleDetails }) => {
    const visibleItems = items.slice(currentIndex, currentIndex + 3); 

    return (
        <div style={styles.carousel}>
            {/* Navigation Buttons */}
            <button
                style={styles.navButton}
                onClick={onPrev}
                disabled={currentIndex === 0}
            >
                ◀
            </button>

            {/* Product Cards */}
            <div style={styles.itemsContainer}>
                {visibleItems.map((item, index) => {
                    const isExpanded = expandedItemIndex === index;
                    return (
                        <div
                            key={index}
                            style={{
                                ...styles.card,
                                transform: isExpanded ? 'scale(1.2) rotateX(0deg)' : 'scale(1) rotateX(15deg)',
                                boxShadow: isExpanded
                                    ? '0 20px 40px rgba(0, 0, 0, 0.4)'
                                    : '0 10px 20px rgba(0, 0, 0, 0.2)',
                                zIndex: isExpanded ? 2 : 1,
                            }}
                            onClick={() => toggleDetails(index)}
                        >
                            <div style={styles.imageContainer}>
                                <img src={item.url} alt={item.name} style={styles.image} />
                            </div>
                            <h3 style={styles.name}>{item.name}</h3>
                            <p style={styles.price}>₹{item.price}</p>

                            {isExpanded && (
                                <div style={styles.details}>
                                    <p><strong>Aisle:</strong> {item.aisle}</p>
                                    <p><strong>Section:</strong> {item.section}</p>
                                    <p><strong>Location:</strong> {item.location}</p>
                                    <p>
                                        <strong>Availability:</strong> {item.availability ? 'In Stock' : 'Out of Stock'}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <button
                style={styles.navButton}
                onClick={onNext}
                disabled={currentIndex + 3 >= items.length}
            >
                ▶
            </button>
        </div>
    );
};


const styles = {
    carousel: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        margin: '30px 0',
        perspective: '1000px',
    },
    itemsContainer: {
        display: 'flex',
        gap: '20px',
    },
    card: {
        position: 'relative',
        background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
        borderRadius: '16px',
        padding: '20px',
        textAlign: 'center',
        width: '250px',
        cursor: 'pointer',
        transition: 'transform 0.4s, box-shadow 0.3s',
        transformStyle: 'preserve-3d',
    },
    imageContainer: {
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '16px',
    },
    image: {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
        borderRadius: '12px',
        transition: 'transform 0.4s',
    },
    name: {
        fontSize: '22px',
        fontWeight: '600',
        margin: '12px 0',
        color: '#333',
    },
    price: {
        fontSize: '20px',
        fontWeight: '600',
        color: '#007bff',
    },
    details: {
        marginTop: '16px',
        textAlign: 'left',
        fontSize: '16px',
        color: '#444',
        animation: 'fadeIn 0.4s',
    },
    navButton: {
        fontSize: '28px',
        padding: '12px 20px',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '50%',
        background: 'linear-gradient(145deg, #007bff, #0056b3)',
        color: '#fff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s, background 0.3s',
    },
    navButtonHover: {
        transform: 'scale(1.1)',
    },
};


styles.fadeIn = {
    '@keyframes fadeIn': {
        from: {
            opacity: 0,
            transform: 'translateY(10px)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
};

export default Product;



