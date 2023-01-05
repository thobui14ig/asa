export default interface TASK{
    _id: string,
    name: string,
    createdBy: CREATEBY,
    resource_type: string,
    createdAt: string,
    updatedAt: string,
    comments: COMMENT[]
  }

export interface CREATEBY{
  _id: string,
  email: string,
  name: string,
  createdAt: string,
  updatedAt: string
}

export interface COMMENT{
  _id: string,
  name: string,
  createdBy: CREATEBY,
  createdAt: string,
  updatedAt: string,
}