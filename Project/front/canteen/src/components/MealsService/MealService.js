import axios from 'axios';

const API_URL = 'http://localhost:8080/api/meals';

class MealService {
    getAllMeals() {
        return axios.get(API_URL);
    }

    createMeal(meal) {
        return axios.post(API_URL, meal);
    }

    updateMeal(id, meal) {
        return axios.put(`${API_URL}/${id}`, meal);
    }

    deleteMeal(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new MealService();
