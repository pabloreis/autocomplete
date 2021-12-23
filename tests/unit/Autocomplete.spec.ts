import { shallowMount, mount, Wrapper } from '@vue/test-utils';
import Autocomplete from '@/components/autocomplete/Autocomplete.vue';

import { AutocompleteItemModel } from '@/models';

describe('Autocomplete', () => {
  let options: AutocompleteItemModel[];
  let wrapper: Wrapper<Autocomplete, Element>;

  beforeAll(() => {
    options = [
      { key: 'San Diego', label: 'San Diego' },
      { key: 'New York', label: 'New York' },
    ];

    // given
    wrapper = shallowMount(Autocomplete, {
      propsData: {
        options,
      },
    });
  });

  it('should show filtered options when typing more than 3 characters', async () => {
    // when
    await wrapper.find('input').setValue('san');

    // then
    expect(wrapper.find('.autocomplete__options')).toBeDefined();
    expect(wrapper.findAll('.autocomplete__options li')).toHaveLength(1);
  });

  it('should show no results element if search returns empty', async () => {
    // when
    await wrapper.find('input').setValue('barcelona');

    // then
    expect(wrapper.findAll('.autocomplete__options')).toHaveLength(0);
    expect(wrapper.find('.autocomplete__empty')).toBeDefined();
  });

  it('should show alert icon when user type less than 3 characters', async () => {
    // when
    await wrapper.find('input').setValue('sa');

    // then
    expect(wrapper.findAll('.autocomplete__options')).toHaveLength(0);
    expect(wrapper.find('.fa-exclamation-circle')).toBeDefined();
  });

  it('should show alert typing promp when icon is hovered', async () => {
    // when
    await wrapper.find('input').setValue('sa');
    const alertWrapper = wrapper.find('.fa-exclamation-circle');
    await alertWrapper.trigger('mouseenter');

    // then
    expect(wrapper.find('.autocomplete__alert-message').isVisible()).toBe(true);
  });

  it('should highlight listed options when given query is a match', async () => {
    const inputValue = 'san';

    // when
    await wrapper.find('input').setValue(inputValue);

    // then
    expect(wrapper.find('.autocomplete__options li span').text()).toBe(inputValue);
  });

  it('should add active class into component\'s existing class list when searching', async () => {
    // when
    await wrapper.find('input').setValue('barcelona');

    // then
    expect(wrapper.classes()).toContain('autocomplete--active');
  });

  it('should add focus class into component\'s existing class list when input is focused', async () => {
    // when
    const inputWrapper = wrapper.find('input');
    await inputWrapper.trigger('focus');

    // then
    expect(wrapper.classes()).toContain('autocomplete--focused');
  });

  it('should update placeholder value when prop.placeholder is given', () => {
    const placeholder = 'Lorem Ipsum';

    // given
    const wrapper = shallowMount(Autocomplete, {
      propsData: {
        options,
        placeholder,
      },
    });

    // then
    expect(wrapper.find('input').attributes().placeholder).toBe(placeholder);
  });
});
