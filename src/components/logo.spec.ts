import { mount } from '@vue/test-utils';
import logo from '@/components/logo.vue';

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(logo);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
