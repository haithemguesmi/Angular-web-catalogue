export enum ProductActionTypes {
  GET_ALL_PRODUCTS="[Product] Get ALL products",
  GET_SELECTED_PRODUCTS="[Product] Get Selected products",
  GET_AVAILABLE_PRODUCTS="[Product] Get Available products",
  SEARCH_PRODUCTS="[Product] Search product",
  NEW_PRODUCTS="[Product] New product",
  SELECT_PRODUCT="[Product] Select product",
  EDIT_PRODUCT="[Product] Edit product",
  DELETE_PRODUCT="[Product] Delete product",
}

export enum DataStateEnum {
  LOADING,
  LOADED,
  EEROR
}

export interface ActionEvent {
  type:ProductActionTypes,
  payload?:any
}


export interface AppDataState<T>{
  dataState?: DataStateEnum,
  data?:T,
  errorMessage?:string
}
