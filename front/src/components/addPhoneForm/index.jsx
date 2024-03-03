import { useState } from "react";
import PropTypes from "prop-types";

function AddPhoneForm({ phones, setPhones, position, phoneValues }) {
  const [phone, setPhone] = useState(phoneValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPhone((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    const newPhones = phones.map((p, index) => {
      if (index === position) {
        return { ...phone, [name]: value };
      }
      return p;
    });

    setPhones(newPhones);
  };

  const handleDuplicate = () => {
    const newPhone = { ...phone };
    setPhones([...phones, newPhone]);
  };

  


  return (
    <div>
      <input
        type="text"
        placeholder="Nome"
        value={phone.name}
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="Marca"
        value={phone.brand}
        name="brand"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="Modelo"
        value={phone.model}
        name="model"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="number"
        name="price"
        placeholder="Preço"
        value={phone.price}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="Cor"
        value={phone.color}
        name="color"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={() => handleDuplicate()}>Duplicar</button>
    </div>
  );
}

AddPhoneForm.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPhones: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
  phoneValues: PropTypes.object,
};

export default AddPhoneForm;
