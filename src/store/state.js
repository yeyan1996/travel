let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default {
  city: defaultCity,
  firstname: '周',
  lastname: '浩磊'
}
