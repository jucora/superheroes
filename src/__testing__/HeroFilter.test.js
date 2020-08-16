import HeroFilter from '../components/HeroFilter';

it('should take a snapshot', () => {
  const wrapper = shallow(<HeroFilter handleChange={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

it('should take a snapshot', () => {
  const wrapper = render(<HeroFilter handleChange={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

it('should call an action when a filter option is selected', () => {
  const spy = sinon.spy();
  const wrapper = mount(<HeroFilter handleChange={spy} />);
  wrapper.find('select').simulate('change');
  expect(spy.calledOnce).toBe(true);
});
