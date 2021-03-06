import { mount, shallowMount } from '@vue/test-utils'

import { testHasStatefulMixin } from '../../../vuestic-mixins/StatefulMixin/testHasStatefulMixin'
import { testIsContextableComponent } from '../../../context-test/context-provide/testIsContextableComponent'
import { testHasColorThemeMixin } from '../../../../services/testHasColorThemeMixin'
import { testHasKeyboardOnlyFocusMixin } from '../../../vuestic-mixins/KeyboardOnlyFocusMixin/testHasKeyboardOnlyFocusMixin'

import { ColorThemeMixin } from '../../../../services/ColorThemePlugin'
import { StatefulMixin } from '../../../vuestic-mixins/StatefulMixin/StatefulMixin'
import { KeyboardOnlyFocusMixin } from '../../../vuestic-mixins/KeyboardOnlyFocusMixin/KeyboardOnlyFocusMixin'

import VaAccordion from '../VaAccordion.vue'

describe('VaAccordion', () => {
  it('should render without an error', () => {
    const wrapper = mount(VaAccordion)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('has StatefulMixin', () => {
    expect(() =>
      testHasStatefulMixin((VaAccordion as unknown) as StatefulMixin),
    ).not.toThrow()
  })

  it('is contextable', () => {
    const props = {
      value: [],
      multiply: false,
      inset: false,
      popout: false,
    }
    expect(() => testIsContextableComponent(VaAccordion, props)).not.toThrow()
  })

  it('should emit `input`', async () => {
    const wrapper: any = shallowMount(VaAccordion)
    await wrapper.vm.onChildChange()
    expect(wrapper.emitted().input.length).toBe(1)
  })
})
