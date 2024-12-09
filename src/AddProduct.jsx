import React from 'react';
import './AddProduct.css';
import { useState } from 'react';

function AddProduct() {
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        aisle: '',
        section: 0,
        location: '',
        availability: true,
        url: '',
    });

    const change = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
        console.log(product);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/products/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            if (res.ok) {
                const data = await res.json();
                alert(data.message || 'Product added successfully!');
                setProduct({
                    name: '',
                    price: 0,
                    aisle: '',
                    section: '',
                    location: '',
                    availability: true,
                    url: '',
                });
            } else {
                const errorData = await res.json();
                alert(errorData.message || 'Failed to add product. Please try again.');
            }
        } catch (err) {
            alert('Failed to add product. Please check your connection.');
        }
    };

    return (
        <form className="add-product-form" onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            {[
                { label: 'Name', name: 'name', type: 'text' },
                { label: 'Price', name: 'price', type: 'number' },
                { label: 'Aisle', name: 'aisle', type: 'text' },
                { label: 'Section', name: 'section', type: 'number' },
                { label: 'Location', name: 'location', type: 'text' },
                { label: 'Availability', name: 'availability', type: 'text' },
                { label: 'Image URL', name: 'url', type: 'text' },
            ].map((field, index) => (
                <div className="form-group" key={index}>
                    <label>{field.label}:</label>
                    <input
                        type={field.type}
                        name={field.name}
                        value={product[field.name]}
                        onChange={change}
                        required
                    />
                </div>
            ))}
            <button type="submit" className="submit-button">
                Add Product
            </button>
        </form>
    );
}

export default AddProduct;