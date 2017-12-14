const pricing = require('pricing')
const database = require('database')
const util = require('util')
const Price = require('models/price')
const Trading = require('trading')
const moment = require('moment')
const bittrex = require('bittrex')
const setTimeoutPromise = util.promisify(setTimeout)
const time = 1 * 1000

const arbitrage = require('arbitrage')

const mainLoop = async () => {
  // try {
  //   const prices = await pricing.getPrices()
  //   const price = await Price.create(prices)
  //   await Trading.onPrice(price)
  // } catch (error) {
  //  console.log(error)
  // }


  
    let result = await arbitrage.getArbitrage()
    

    let delta = result.gdax - result.bittrex
    console.log(result.gdax)
    console.log(result.bittrex)
    console.log(delta)


}

module.exports = {
  
  start: async () => {
  
    // await database.connect()




    // const start = moment().subtract(3, 'days').subtract(2, 'hours').toDate()


    // const end = moment().subtract(3, 'days').toDate()
    // const next6 = moment().subtract(3, 'days').add(1, 'hours').toDate()


    // const period = 1
    // const bollinger = await Trading.getBollinger({ start, period, end })


// const oneDayAgo = moment().subtract(1,'days').toDate()
// const twoDaysAgo = moment().subtract(2,'days').toDate()

//     const prices = await Price.getRange({ start: twoDaysAgo, end: oneDayAgo })

//     console.log(prices)
    


    // Trading.showAvailable({ bollinger, prices })
    /*
    const availables = prices.filter(price => {
      return price < bollinger['middle']
    })*/
    
    setInterval(mainLoop, time)
    mainLoop()
    
  }
}
