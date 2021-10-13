
export const gmapApi = {
  maps: {
    Polygon: jest.fn((center, radius, map) => {
      return {
        addListener: jest.fn()
      }
    }),
    LatLng: jest.fn((lat, lng) => {
      return null
    })
  }
}
