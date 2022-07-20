import { baseService } from "./baseService";

export class CatetgoryService extends baseService {
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
  getAllCategory = () => {
    return this.get(`/category/all-category`);
  };
}

export const catetgoryService = new CatetgoryService();
