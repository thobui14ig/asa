export default interface TASK extends CREATEUPDATE{
    _id: string,
    name: string,
    createdBy: CREATEBY,
    resource_type: string,
    comments: COMMENT[]
}


export interface COMMENT extends CREATEUPDATE{
  _id: string,
  name: string,
  createdBy: CREATEBY,
}

export interface CREATEBY extends CREATEUPDATE{
  _id: string,
  email: string,
  name: string,
}

export interface PROJECT extends CREATEUPDATE{
  _id: string,
  name: string,
  resource_type: string,
  sections: SECTION[],
  team: string
}

export interface SECTION extends CREATEUPDATE{
  _id: string,
  name: string,
  tasks: TASK[]
}

interface CREATEUPDATE{
  createdAt: string,
  updatedAt: string,
}