import Title from '../components/Title';

it('should take a snapshot', () => {
  const wrapper = shallow(<Title />);
  expect(wrapper).toMatchSnapshot();
});

it('should display a main title', () => {
  const wrapper = mount(<Title />);
  const text = wrapper.find('h1').text();
  expect(text).toEqual('SUPERHEROES');
});

it('should display a subtitle', () => {
  const wrapper = mount(<Title />);
  const text = wrapper.find('.title-subtitle').text();
  expect(text).toEqual(
    'Search and get information about your favorite superhero!',
  );
});

it('should have a link to redirect to hero List', () => {
  const wrapper = mount(<Title />);
  const text = wrapper.find('NavLink').at(0).text();
  expect(text).toEqual('List');
});

it('should have a link to redirect to the Author section', () => {
  const wrapper = mount(<Title />);
  const text = wrapper.find('NavLink').at(1).text();
  expect(text).toEqual('About');
});
