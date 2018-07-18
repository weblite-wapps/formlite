module.exports = {
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
  }
}
