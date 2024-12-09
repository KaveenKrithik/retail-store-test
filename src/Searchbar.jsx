import React, { useState, useEffect } from 'react';
import Product from './Product';
import './Searchbar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleSearch = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() !== '') {
        
            try {
                const response = await fetch('http://13.61.10.176:5000/api/products/search', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',  
                    },
                    body: JSON.stringify({"query":searchQuery}),  
                });

                const data = await response.json();
                setFilteredProducts(data); 
            } catch (error) {
                console.error('Error fetching filtered products:', error);
            }
        } else {
            setFilteredProducts([]);  
        }
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="searchbar-container">
            <div className="searchbar-box">
                <div className="searchbar-input-container">
                    <AiOutlineSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search for your favorite products..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="searchbar-input"
                    />
                    {searchQuery && (
                        <MdClose
                            className="clear-icon"
                            onClick={() => {
                                setSearchQuery('');
                                setFilteredProducts([]);  
                            }}
                        />
                    )}
                </div>
                <ul className="suggestions">
                    {filteredProducts.map((product) => (
                        <li
                            key={product.id}
                            className="suggestion-item"
                            onClick={() => handleProductClick(product)}
                        >
                            {product.name}
                        </li>
                    ))}
                </ul>
                {selectedProduct && (
                    <div className="product-details">
                        <h3>Selected Product Details:</h3>
                        <Product
                            items={[selectedProduct]}
                            currentIndex={0}
                            expandedItemIndex={0}
                            onPrev={() => {}}
                            onNext={() => {}}
                            toggleDetails={() => {}}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Searchbar;
