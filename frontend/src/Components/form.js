import React, {useState} from "react";
import axios from "axios";

export default function Form({ addContact }) {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        phone: '',
        about: ''
    });

    const validateEmail = (email) => {
        const lastAdIndex = email.lastIndexOf("@");
        const lastDotIndex = email.lastIndexOf(".")
        const length = email.length;
    
        if(lastAdIndex === -1 || lastDotIndex === -1) {
            console.log("index not found");
            return false;
        }

        if(length - lastDotIndex - 1 < 2) {
            console.log("com is greater");
            return false;
        }
    
        if(lastDotIndex - lastAdIndex <= 5) {
            return false;
        }
    
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!validateEmail(formData.email)) {
            alert("Please enter a valid email");
            return;
        }

        if(formData.phone.length !== 10) {
            alert(`Phone Number must be of length 10`);
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:8080/contactForm/create', formData);
            console.log("message sent");
            addContact(response.data.details);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                country: '',
                phone: '',
                about: ''
            })
        } catch (err) {
            console.log("Error sending data:", err);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', height: '40px'}}>Contact Form</div>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>

                    <div>
                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>

                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div>
                        <label>Country:</label>
                        <input type="text" name="country" value={formData.country} onChange={handleChange} />
                    </div>

                    <div>
                        <label>Phone:</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>

                    <div>
                        <label>About:</label>
                        <textarea type="text" name="about" value={formData.about} onChange={handleChange} />
                    </div>

                    <button type="submit">Create</button>

                </form>
            </div>
        </>
    );
}