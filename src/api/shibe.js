import apiAxios from './apiAxios'

const shibeURL = '/shibes?count=[1]'

export const apiGetShibe = () => apiAxios.get(shibeURL)
