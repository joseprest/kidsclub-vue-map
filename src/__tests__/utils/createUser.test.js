import { createUser } from '@/utils/createUser'
import mockAxios from 'axios'
import normalize from 'json-api-normalizer'

describe('createUser', () => {

  describe('public access', () => {
    let user
    beforeAll(async () => {
      const res = await mockAxios.get(`${process.env.BASE_URL_API}/api/users/1230`)
      user = createUser(normalize(res.data))
    })

    it('returns the correct basic information', async () => {
      // console.log({user})
      expect(user.id).toBe('1230')
      expect(user.locality).toBe('Worcester')
      expect(Array.isArray(user.activities)).toBe(true)
      expect(user.hasAllRequiredFields).toBe(false)
      expect(user).not.toHaveProperty('phone')
      expect(user).toHaveProperty('children')
    })
  })

  describe('private access', () => {
    // mock data is for authenticated user with profile filled out

    let user
    beforeAll(async () => {
      const res = await mockAxios.get(`${process.env.BASE_URL_API}/users/1228`)
      user = createUser(normalize(res.data))
    })

    it('returns the correct basic information', async () => {
      expect(user.id).toBe('1228')
      expect(user.locality).toBe('Worcester')
      expect(Array.isArray(user.activities)).toBe(true)
      expect(user.hasAllRequiredFields).toBe(true)
      expect(user).toHaveProperty('phone')
      expect(user)
      expect(user.children.length).toBe(1)
      expect(user.children[0].id).toBe('766')
      expect(user.children[0].firstName).toBe('Pesh')
      expect(user.children[0].emergencyContacts).toHaveLength(1)
    })
  })
})
