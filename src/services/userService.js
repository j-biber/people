import User from '../models/User';
import { USERS_ENDPOINT } from '../shared/constants';

const fetchData = () => {

    return fetch(USERS_ENDPOINT)
        .then(response =>
            response.json()
        )
        .then(data => {
            return data.results.map(user => {
                const { name: { first, last }, email, dob: { date }, picture, gender } = user;
                return new User(first, last, email, new Date(date), picture, gender)
            });
        });
}

export { fetchData }
