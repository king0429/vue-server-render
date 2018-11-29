const axios = require('axios')
module.exports = {
  getTest,
}

let getTest = {}
(async () => {
  await axios.get('/test1').then(res => {
    getTest = res
  })
})()