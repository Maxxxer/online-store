import { Data } from '../../types/interfaces';
export const urlData = '../../data/data.json';

export const getDataForFilters = function (url: string) {
  return fetch(url).then((response) => {
    return response.json();
  });
};
