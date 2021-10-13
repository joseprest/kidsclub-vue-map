import { mount } from '@vue/test-utils'
import RadioButtons from '@/components/base/RadioButtons.vue'
import _ from 'lodash'
import Vue from 'vue'

describe('RadioButtons', () => {
  let wrapper
  let value = ''
  beforeAll(async () => {
    wrapper = mount(RadioButtons, {
      propsData: {
        choices: ['hey', 'whatsup', 'hello'],
        value
      }
    })
  })

  it('mounts with the correct state', () => {
    const states = _.map(wrapper.findAll('input').wrappers, isChecked)
    _.forEach(states, s => {
      expect(s).toBeFalsy()
    })
    expect(wrapper.vm.state).toBe('')
    expect(wrapper.emitted().input).toHaveLength(1)
    expect(wrapper.emitted().input[0][0]).toEqual('')
  })

  it('sets the state with a click', () => {
    const heyInput = wrapper.find('input[value="hey"]')
    const heyDiv = wrapper.findAll('div').filter(d => {
      // very obnoxious way to find direct parent of input with value="hey"
      return d.find('input[value="hey"]').exists() && !d.find('form').exists()
    }).at(0)
    heyInput.trigger('click')

    expect(wrapper.vm.state).toBe('hey')
    expect(wrapper.emitted().input).toHaveLength(2)
    expect(wrapper.emitted().input[1][0]).toEqual('hey')
    expect(isChecked(heyDiv)).toBeTruthy()
  })

  it('sets the state with a click', () => {
    const helloInput = wrapper.find('input[value="hello"]')
    const helloDiv = wrapper.findAll('div').filter(d => {
      // very obnoxious way to find direct parent of input with value="hello"
      return d.find('input[value="hello"]').exists() && !d.find('form').exists()
    }).at(0)
    helloInput.trigger('click')

    expect(wrapper.vm.state).toBe('hello')
    expect(wrapper.emitted().input).toHaveLength(3)
    expect(wrapper.emitted().input[2][0]).toEqual('hello')
    expect(isChecked(helloDiv)).toBeTruthy()
  })
})


const isChecked = function (i) {
  return i.classes('active-checkbox')
}
