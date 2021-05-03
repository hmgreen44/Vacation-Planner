import axios from 'axios'

export function axiosHelper(props) {
    const {
        method = 'get',
        url = '/',
        data = {},
        token = '',
        successMethod = r => console.log(r),
        failureMethod = e => console.log(e)
    } = props;

    const API_URL = 'https://vacation_planner-hmgreen44956074.codeanyapp.com'

    return axios({
        method,
        url: API_URL + url,
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data

    })
        .then(successMethod)
        .catch(failureMethod)
}


