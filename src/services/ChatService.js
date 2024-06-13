import axios from "axios";

const CHAT_BASE_REST_API_URL = "http://localhost:8080/api/chat/home";
class ChatService {

    getSaludo(){
        return axios.get(CHAT_BASE_REST_API_URL)
    }
}

export default new ChatService();