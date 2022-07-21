import { baseService } from "./baseService";

export class ProducyService extends baseService {
  //   createCategory = (data) => {
  //     return this.post(`/api/category`, data);
  //   };
  //   updateCategory = (id, data) => {
  //     return this.patch(`/api/category/${id}`, data);
  //   };
  //   getDetailById = (id) => {
  //     return this.get(`/api/category/${id}`);
  //   };
  //   deteleCategory = (id) => {
  //     return this.delete(`/api/category/${id}`);
  //   };
  getProductById = (id) => {
    return this.get(`/product/${id}`);
  };
  getAllProduct = () => {
    return this.get(`/product/all-product`);
  };
  getTopProduct = () => {
    return this.get(`/order/get-top`);
  };
}

export const producyService = new ProducyService();
