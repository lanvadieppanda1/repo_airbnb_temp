import { LoginSchemaType, RegisterSchemaType } from '../schemas'
import { apiInstance } from '../constants'
import {  LoginAPIResponse, RegisterAPIResponse} from '../@types'

const api = apiInstance.create({
    baseURL: 'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung',
})

export const quanLyNguoiDungServices = {

    dangKy: (payload: RegisterSchemaType) =>
        api.post<HttpResponse<RegisterAPIResponse>>('/DangKy', payload),

    dangNhap: (payload: LoginSchemaType) =>
        api.post<HttpResponse<LoginAPIResponse>>('/DangNhap', payload),
    
}
