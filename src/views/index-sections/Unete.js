import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const MustangForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    mustangYear: '',
    mustangModel: '',
    phoneNumber: '',
    email: ''
  });

  const navigate = useNavigate(); // Usa el hook useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://58rfg1sg45.execute-api.us-east-2.amazonaws.com/default/MustangClubGuatemala',
        formData,
        {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      );
      Swal.fire({
        title: 'Registro exitoso',
        text: 'Te contactaremos pronto.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        navigate('/index'); // Redirige a /index después de un registro exitoso
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        navigate('/index'); // Redirige a /index después de un error
      });
    }
  };

  const mustangModels = ['GT', 'Shelby GT350', 'Shelby GT500', 'Bullitt', 'Mach 1', 'Boss 302', 'V6', 'Other'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

    
      return (
        <div className="container">
          <h2 
          style={{
            fontFamily:"Mustang4",
            textAlign:"center",
            fontSize:"20px"
          }}>Registro al mustang Club Guatemala</h2>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName"
            style={{
              fontFamily:"Mustang5"
            }}>Nombre Completo:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-control"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age"
            style={{
              fontFamily:"Mustang5"
            }}>Edad:</label>
            <input
              type="number"
              id="age"
              name="age"
              className="form-control"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"
            style={{
              fontFamily:"Mustang5"
            }}>Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber"
            style={{
              fontFamily:"Mustang5"
            }}>Número de Teléfono:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="form-control"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mustangModel"
            style={{
              fontFamily:"Mustang5"
            }}>Modelo de tu Mustang:</label>
            <select
              id="mustangModel"
              name="mustangModel"
              className="form-control"
              value={formData.mustangModel}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona un modelo</option>
              {mustangModels.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="mustangYear"
            style={{
              fontFamily:"Mustang5"
            }}>Año de tu Mustang:</label>
            <input
              type="text"
              id="mustangYear"
              name="mustangYear"
              className="form-control"
              value={formData.mustangYear}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block" 
          color="info" 
         >Registrar
           
          </button>
          </form>
        </div>
      );
    };
  
   

  
  export default MustangForm;