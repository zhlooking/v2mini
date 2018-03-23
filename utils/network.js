import ErrorUploader from './error_uploader.js'

const defaultHeader = {}

export const ZBaseRequest = ({
  url,
  data,
  method = 'GET',
  header = defaultHeader,
  dataType = 'json',
  responseType = 'text',
  success,
  fail,
  complete
}) => {
  wx.request({
    url,
    data,
    method,
    header,
    dataType,
    responseType,
    success: resp => {
      const statusValue = (resp.statusCode / 100).toFixed(0)
      if (statusValue === '4' || statusValue === '5') {
        if (fail) {
          fail(resp)
        }
        ErrorUploader.uploadInfo({ customData: { url, method, data, resp } })
      } else {
        success(resp)
      }
    },
    fail: err => {
      ErrorUploader.uploadInfo({ customData: { url, method, data, err } })
      if (fail) {
        fail(err)
      }
    },
    complete: (info) => {
      if (complete) {
        complete(info)
      }
    }
  })
}

export const ZGetRequest = ({ url, data, header = defaultHeader, success, fail, complete }) => {
  ZBaseRequest({ url, data, header, success, fail, complete })
}

export const ZPostRequest = ({ url, data, header = defaultHeader, success, fail, complete }) => {
  ZBaseRequest({ url, data, header, method: 'POST', success, fail, complete })
}
