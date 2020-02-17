module.exports = (on) => {

  on('before:browser:launch', (browser) => {
    if (browser.name === 'electron') {
      return {
        width: 1440,
        height: 960,
      }
    }
  })

}
