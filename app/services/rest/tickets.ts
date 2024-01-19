/* - пример использования методов с generic type <T>
  -  запрос на получение информации о туре
 */

export function getTicketById<T>(id: string): Promise<T[]> {
  let url = 'https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket';

  if (id) {
    url += `/${id}`;
  }
    return fetch(url).then((response) => response.json())
        .then((data: T[]) => {
            return data;
        });
}

// запрос на на отправку данных - пока не используется

export function postTicketData(postData: object): Promise<{success: boolean}> {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket').then((response) => response.json())
        .then((data: {success: boolean}) => {
            return data;
        });
}

