const getData = require('./index');
const axios = require('axios');

jest.mock('axios');

describe('getData', () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "username": "Karianne",
          "email": "Julianne.OConner@kory.org",
          "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
              "lat": "29.4572",
              "lng": "-164.2990"
            }
          },
          "phone": "493-170-9623 x156",
          "website": "kale.biz",
          "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
          }
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
              "lat": "-31.8129",
              "lng": "62.5342"
            }
          },
          "phone": "(254)954-1289",
          "website": "demarco.info",
          "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
          }
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "username": "Leopoldo_Corkery",
          "email": "Karley_Dach@jasper.info",
          "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
              "lat": "-71.4197",
              "lng": "71.7478"
            }
          },
          "phone": "1-477-935-8478 x6430",
          "website": "ola.org",
          "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
          }
        },
      ]
    }
  })
  test('Корректное значение', async () => {
    axios.get.mockReturnValue(response);

    const data = await getData();

    expect(axios.get).toBeCalledTimes(1);
    expect(data).toMatchSnapshot();
  })
})
