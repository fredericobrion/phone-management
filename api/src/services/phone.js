const { Phone } = require('../models');
const { formatSecondPhoneEstructure, formatThirdPhoneEstructure } = require('../utils/phone');

const createSinglePhone = async (estructure, phone) => {
    const formattedPhone = estructure === '2' ? formatSecondPhoneEstructure(phone) : phone;
    const { name, brand, model, price, color } = formattedPhone;
    const phoneCreated = await Phone.create({ name, brand, model, price, color });

    return {
        id: phoneCreated.id,
        name: phoneCreated.name,
        brand: phoneCreated.brand,
        model: phoneCreated.model,
        price: phoneCreated.price,
        color: phoneCreated.color,
    };
};

const createMultiplePhones = async (phones) => {
    const formattedPhones = formatThirdPhoneEstructure(phones);
    const phonesCreated = await Phone.bulkCreate(formattedPhones);

    return phonesCreated.map((phone) => ({
        id: phone.id,
        name: phone.name,
        brand: phone.brand,
        model: phone.model,
        price: phone.price,
        color: phone.color,
    }));
};

module.exports = {
    createSinglePhone,
    createMultiplePhones,
};