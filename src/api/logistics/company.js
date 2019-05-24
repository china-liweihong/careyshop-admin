import request from '@/utils/request'

/**
 * 添加一个快递公司
 * @param {Object} data
 * @returns {AxiosPromise}
 */
export function addDeliveryCompanyItem(data) {
  return request({
    url: '/v1/delivery_item',
    method: 'post',
    params: {
      method: 'add.delivery.company.item'
    },
    data
  })
}

/**
 * 编辑一个快递公司
 * @param {Object} data
 * @returns {AxiosPromise}
 */
export function setDeliveryCompanyItem(data) {
  return request({
    url: '/v1/delivery_item',
    method: 'post',
    params: {
      method: 'set.delivery.company.item'
    },
    data
  })
}

/**
 * 批量删除快递公司
 * @param {Array} delivery_item_id
 * @returns {AxiosPromise}
 */
export function delDeliveryCompanyList(delivery_item_id) {
  return request({
    url: '/v1/delivery_item',
    method: 'post',
    params: {
      method: 'del.delivery.company.list'
    },
    data: {
      delivery_item_id
    }
  })
}

/**
 * 获取一个快递公司
 * @param {Number} delivery_item_id
 * @returns {AxiosPromise}
 */
export function getDeliveryCompanyItem(delivery_item_id) {
  return request({
    url: '/v1/delivery_item',
    method: 'post',
    params: {
      method: 'get.delivery.company.item'
    },
    data: {
      delivery_item_id
    }
  })
}

/**
 * 查询快递公司编码是否已存在
 * @param {String} code
 * @param {Number} type
 * @param {Number} exclude_id
 * @returns {AxiosPromise}
 */
export function uniqueDeliveryCompanyCode(code, type, exclude_id = null) {
  return request({
    url: '/v1/delivery_item',
    method: 'post',
    params: {
      method: 'unique.delivery.company.code'
    },
    data: {
      code,
      type,
      exclude_id
    }
  })
}

/**
 * 获取快递公司列表
 * @param {Object} data
 * @returns {AxiosPromise}
 */
export function getDeliveryCompanyList(data) {
  return request({
    url: '/v1/delivery_item',
    method: 'post',
    params: {
      method: 'get.delivery.company.list'
    },
    data
  })
}

/**
 * 获取快递公司选择列表
 * @param {Number} type
 * @returns {AxiosPromise}
 */
export function getDeliveryCompanySelect(type = null) {
  return request({
    url: '/v1/delivery_item',
    method: 'post',
    params: {
      method: 'get.delivery.company.select'
    },
    data: {
      type
    }
  })
}

/**
 * 复制一个快递公司为「热门类型」
 * @param {Number} delivery_item_id
 * @returns {AxiosPromise}
 */
export function copyDeliveryCompanyHot(delivery_item_id) {
  return request({
    url: '/v1/delivery_item',
    method: 'post',
    params: {
      method: 'copy.delivery.company.hot'
    },
    data: {
      delivery_item_id
    }
  })
}