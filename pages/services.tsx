import React, { useState, useEffect } from 'react';

interface Service {
  id: string;
  userId: string;
  fecha: string; // Será DateTime en el backend, pero se tratará como string en el frontend
  duration: number;
  location: string;
  price: number;
}

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [formData, setFormData] = useState({ fecha: '', duration: '', location: '', price: " " });
  const [editData, setEditData] = useState<Service | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch('/api/services?userId=YOUR_USER_ID');
        const data: Service[] = await response.json();
        // Convertir la fecha a cadena antes de setear los datos
        const servicesWithStringDates = data.map(service => ({
          ...service,
          fecha: new Date(service.fecha).toLocaleDateString('es-ES'), // Convertir a cadena
        }));
        setServices(servicesWithStringDates);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Error fetching services');
      }
    }
    fetchServices();
  }, []);

  const addService = async () => {
    try {
      const response = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'YOUR_USER_ID',
          ...formData,
          duration: parseInt(formData.duration, 10),
          fecha: formData.fecha,
        }),
      });
      const newService: Service = await response.json();
      setServices([...services, { ...newService, fecha: new Date(newService.fecha).toLocaleDateString('es-ES') }]);
    } catch (err) {
      console.error('Error adding service:', err);
      setError('Error adding service');
    }
  };

  const deleteService = async (id: string) => {
    try {
      await fetch('/api/services', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      setServices(services.filter(service => service.id !== id));
    } catch (err) {
      console.error('Error deleting service:', err);
      setError('Error deleting service');
    }
  };

  const updateService = async () => {
    if (!editData) return;

    try {
      const response = await fetch('/api/services', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...editData,
          duration: parseInt(editData.duration.toString(), 10),
          fecha: editData.fecha,
        }),
      });
      const updatedService: Service = await response.json();
      setServices(services.map(service => (service.id === updatedService.id ? { ...updatedService, fecha: new Date(updatedService.fecha).toLocaleDateString('es-ES') } : service)));
      setEditData(null);
    } catch (err) {
      console.error('Error updating service:', err);
      setError('Error updating service');
    }
  };

  const handleEditClick = (service: Service) => {
    setEditData(service);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editData) return;
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Manage Services</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {services && services.length > 0 ? (
          services.map(service => (
            <li key={service.id}>
              {service.fecha} - {service.duration} - {service.location} - {service.price}
              <button onClick={() => handleEditClick(service)}>Edit</button>
              <button onClick={() => deleteService(service.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No services available</p>
        )}
      </ul>
      <div>
        <h2>{editData ? 'Edit Service' : 'Add Service'}</h2>
        <input
          type="text"
          placeholder="Fecha"
          name="fecha"
          value={editData ? editData.fecha : formData.fecha}
          onChange={e => (editData ? handleEditChange(e) : setFormData({ ...formData, fecha: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Duration"
          name="duration"
          value={editData ? editData.duration.toString() : formData.duration}
          onChange={e => (editData ? handleEditChange(e) : setFormData({ ...formData, duration: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={editData ? editData.location : formData.location}
          onChange={e => (editData ? handleEditChange(e) : setFormData({ ...formData, location: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={editData ? editData.price.toString() : formData.price.toString()}
          onChange={e => (editData ? handleEditChange(e) : setFormData({ ...formData, price: parseFloat(e.target.value) }))}
        />
        <button onClick={editData ? updateService : addService}>{editData ? 'Update Service' : 'Add Service'}</button>
        {editData && <button onClick={() => setEditData(null)}>Cancel</button>}
      </div>
    </div>
  );
};

export default ServicesPage;
