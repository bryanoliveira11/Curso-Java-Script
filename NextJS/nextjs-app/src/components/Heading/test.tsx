import { Heading } from '.';
import { screen } from '@testing-library/react';
import { customRender } from '../../utils/custom-render';

describe('<Heading/>', () => {
  it('should render the heading', () => {
    customRender(<Heading>Oi</Heading>);
    const element = screen.getByRole('heading', { name: /oi/i });
    expect(element).toHaveStyleRule('font-size', '5rem');
  });
});
