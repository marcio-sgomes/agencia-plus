import axios from 'axios'

//const AGENCIA_API_BD_URL = 'http://localhost:8080/api/cliente'
const AGENCIA_API_BD_URL = 'http://localhost:8080/api/clientes'

class ClienteService {
    getCliente(){
        return axios.get(AGENCIA_API_BD_URL);
    }

    createCliente(cliente) {
        return axios.post(AGENCIA_API_BD_URL, cliente);
       
    }
    getClienteById(clienteId) {
        return axios.get(AGENCIA_API_BD_URL + '/' + clienteId);
      }
    
      updateCliente(cliente, clienteId) {
        return axios.put(AGENCIA_API_BD_URL + '/' + clienteId, cliente);
      }
    
      deleteCliente(clienteId) {
        return axios.delete(AGENCIA_API_BD_URL + '/' + clienteId);
      }
    }

    export default new ClienteService();