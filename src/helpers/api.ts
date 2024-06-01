export const URL_API = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC'
//https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${query.page}&rows=${query.rows}&sortBy=${query.sortby}&orderBy=${query.orderby}
export type queryType = {
    page: number;
    rows: number;
    sortby: string;
    orderby: string;
}

export function GET_PRODUCTS(query: queryType) {
    return {
        url: URL_API,
        option: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    };
}