import multi_http from '../http-multipart-data';
import http from '../http-common';

const create_order = (product) => {
    return http.post(`/order/createOrder`, product);
};

const get_order_by_id = (id) =>{
    return http.get(`/order/getOrder/${id}`);
}


// const update_product = (product, id) => {
//     return multi_http.put(`/product/updateProduct/${id}`, product);
// };

// const get_products = () =>{
//     return http.get('/product');
// }

// const delete_product = (id) =>{
//     return http.delete(`/product/deleteProduct/${id}`);
// }



const OrderService = {
    create_order,
    get_order_by_id
};
export default OrderService;