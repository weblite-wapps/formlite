export default process.env.NODE_ENV === 'development' ? {
  server: 'http://localhost:3091',
} : {
  server: 'https://weblite.me:3091',
}
