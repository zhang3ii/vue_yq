import { axios } from '@/utils/request'

const ip = 'http://172.16.201.65:8080'
const api = {
  store : ip + '/store/',
  shopDetail : ip + '/storedetail/',
  shopHealth : ip + '/storehealth/',
  UserResourcesFour : ip + '/UserResourcesFour/',
  UserResourcesTable : ip + '/UserResourcesTable/',
  UserResourcesStage : ip + '/UserResourcesStage/',
  UserResourcesFlowFour: ip + '/UserResourcesFlowFour/',
  UserResourcesFlowTop: ip + '/UserResourcesFlowTop/',
  UserResourcesFlowTable: ip + '/UserResourcesFlowTable/'
}
export default api

export function getShopMessage (parameter) {
  return axios ({
      url: api.store,
      method: 'get',
      params: parameter
    })
}

export function getShopDataDetail (parameter) {
  return axios ({
    url: api.shopDetail,
    method: 'get',
    params: parameter
  })
}

export function getShophealthDetail (parameter) {
  return axios ({
    url: api.shopHealth,
    method: 'get',
    params: parameter
  })
}

export function getUserResourcesFour (parameter) {
  return axios ({
    url: api.UserResourcesFour,
    method: 'get',
    params: parameter
  })
}

export function getUserResourcesTable(parameter) {
  return axios ({
    url: api.UserResourcesTable,
    method: 'get',
    params: parameter
  })

}

export function getUserResourcesFlowFour(parameter) {
  return axios ({
    url: api.UserResourcesFlowFour,
    method: 'get',
    params: parameter
  })

}

export function getUserResourcesStage(parameter) {
  return axios ({
    url: api.UserResourcesStage,
    method: 'get',
    params: parameter
  })

}

export function getUserResourcesFlowTop(parameter) {
  return axios ({
    url: api.UserResourcesFlowTop,
    method: 'get',
    params: parameter
  })
}

export function getUserResourcesFlowTable(parameter) {
  return axios ({
    url: api.UserResourcesFlowTable,
    method: 'get',
    params: parameter
  })
}

