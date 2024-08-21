const dataApi = "https://norma.nomoreparties.space/api/ingredients";

const checkResponse = (response) => {
    const body = response.json();

    if (response.ok) {
        return body;
    } else {
        return body
            .then(error => {
                error.httpResponseCode = response.status;
                return Promise.reject(error);
            });
    }
}

export const getIngredients = ()  => {
    return fetch(dataApi).then(checkResponse);
};