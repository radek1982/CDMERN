

const HOST = "http://localhost:8000"
const PATH = "api/products"
const API_ROOT = `${HOST}/${PATH}`;
const DELETE_ENDPOINT=`${API_ROOT}/delete`;
const UPDATE_ENDPOINT=`${API_ROOT}/update`;
const CREATE_ENDPOINT=`${API_ROOT}/new`;
const READ_ENDPOINT=`${API_ROOT}`;


const PRODUCT_API_ENDPOINTS = {

delete: function(id) {
        return `${DELETE_ENDPOINT}/${id}`;
    },
update: function(id) {
    return `${UPDATE_ENDPOINT}/${id}`;

},  
create: function() {
    return `${CREATE_ENDPOINT}`
},

detail: function(id) {
    return `${READ_ENDPOINT}/${id}`
},
read: function() {
    return `${READ_ENDPOINT}`
}

}

export default PRODUCT_API_ENDPOINTS;