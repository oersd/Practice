// const p = new Promise((resolve, reject) => {
//   console.log('Request data...')

//   setTimeout(() => {
//     console.log('Preparing data...')
//     const backandData = {
//       server: 'serverName',
//       port: 5000,
//       status: 'Working',
//       jsonData: { name: 'Mikle', age: '41' }
//     }
//     resolve(backandData)
//   }, 2000)
// })

// p.then(backandDataResolve => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       backandDataResolve.modified = true
//       resolve(backandDataResolve)
//     }, 2000)
//   })
// }).then(dataClient => {
//   console.log('Data recieved', dataClient)
// })

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(ms / 1000), ms)
  })
}

// sleep(2000).then(sec => console.log(`I slept for ${sec} seconds`))
// sleep(3000).then(sec => console.log(`I slept for ${sec} seconds`))

Promise.all([sleep(2000), sleep(5000)])
  .then(() => console.log('All done'))