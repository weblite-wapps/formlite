module.exports = {
  baseUrl: '/wapp/5c7d3b80cb652f5fc9380c50/',
  pages: {
    main: {
      entry: 'src/main/main.js',
      template: 'public/index.html',
      filename: 'index.main.html',
    },
    customize: {
      entry: 'src/customize/main.js',
      template: 'public/index.html',
      filename: 'index.customize.html',
    },
  },
}
