module.exports = {
  baseUrl: '/wapp/5b4f42f6e8ac737dd0225990/',
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
