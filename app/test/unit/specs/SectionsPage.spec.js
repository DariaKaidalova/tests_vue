import SectionsPage from '@/components/SectionsPage';
import Vue from 'vue';

describe('SectionsPage.vue', () => {

  it('displays items from the sections list', () => {
	const Constructor = Vue.extend(SectionsPage);
	const ListComponent = new Constructor().$mount();
	//expect(ListComponent.$el.textContent).to.contain('yoga');
	expect(ListComponent.$el.textContent).toBe('yogapilatesstretchingfunctional training')
  })
})