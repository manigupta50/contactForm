import { useState } from "react";
import axios from "axios";

export default function ContactList({ contacts, handleDelete, setContacts }) {

    const [editDataId, setEditDataId] = useState(null);
    const [editData, setEditData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        phone: '',
        about: ''
    });

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8080/contactForm/update/${editDataId}`, editData);
            setEditDataId(null);

            const updatedContacts = contacts.map((contact) => editDataId === contact._id ? editData : contact);
            setContacts(updatedContacts);
        } catch(err) {
            console.log(err);
        }
    }

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData({
            ...editData,
            [name]: value,
        });
    }

    const handleEdit = (contact) => {
        setEditDataId(contact._id);
        setEditData(contact);
    }



    return (
        <>
            {/* I can use table here but i used div for my own convenience */}
            {contacts.map((c, i) => (
                <div key={i} style={{ border: '1px solid black'}}>
                    {editDataId === c._id ? (
                        <form onSubmit={handleUpdate}>
                            <div>
                                <label>First Name:</label>
                                <input type="text" name="firstName" value={editData.firstName} onChange={handleEditChange} required />
                            </div>
        
                            <div>
                                <label>Last Name:</label>
                                <input type="text" name="lastName" value={editData.lastName} onChange={handleEditChange} required />
                            </div>
        
                            <div>
                                <label>Email:</label>
                                <input type="text" name="email" value={editData.email} onChange={handleEditChange} required />
                            </div>
        
                            <div>
                                <label>Country:</label>
                                <input type="text" name="country" value={editData.country} onChange={handleEditChange} />
                            </div>
        
                            <div>
                                <label>Phone:</label>
                                <input type="text" name="phone" value={editData.phone} onChange={handleEditChange} />
                            </div>
        
                            <div>
                                <label>About:</label>
                                <textarea type="text" name="about" value={editData.about} onChange={handleEditChange} />
                            </div>
        
                            <button type="submit">Update</button>
                            <button onClick={() => setEditDataId(null)}>Cancel</button>
                        </form>
                    ): (
                        <>
                            {/* <div>Id: {c._id}</div> */}
                            <div>First Name: {c.firstName}</div>
                            <div>Last Name: {c.lastName}</div>
                            <div>Email: {c.email}</div>
                            <div>Country: {c.country}</div>
                            <div>Phone: {c.phone}</div>
                            <div>About: {c.about}</div>
                            <button onClick={() => handleEdit(c)}>Edit</button>
                            <button onClick={() => handleDelete(c._id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
        </>
    );

}
