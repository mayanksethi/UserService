const axios = require('axios');
require('dotenv').config(); 

const createOrder = async (data) => {
    try {
        console.log('data', data);
        console.log('process.env.ORDER_URL', `${process.env.ORDER_URL}/order`);
        const response = await axios.post(`${process.env.ORDER_URL}/order`, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create order');
    }
}

const getAllOrders = async () => {
    try {
        const response = await axios.get(`${process.env.ORDER_URL}/order`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to get orders');
    }
}

const cancelOrder = async (id) => {
    try {
        const response = await axios.delete(`${process.env.ORDER_URL}/order/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to cancel order');
    }
}

module.exports = {
    createOrder,
    getAllOrders,
    cancelOrder
};