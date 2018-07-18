export default process.env.NODE_ENV === 'development' ? {
  server: 'https://localhost:3091',
} : {
  server: 'https://weblite.me:3091',
}
