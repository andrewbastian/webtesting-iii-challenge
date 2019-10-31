import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './Controls';
import { render, fireEvent } from '@testing-library/react';

describe('<Controls />', () => {

    it('matches snapshot', () => {
      const tree = renderer.create(<Controls />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('buttons toggle closed and locked', () => {
      const { getByText } = render(<Controls />);
      getByText (/Lock Gate/);
      getByText (/Close Gate/);
    });

    it('closed button disabled if gate locked', () => {
      const { getByText } = render(<Controls closed={true} locked={true}/>);
      const openButton = getByText(/Open Gate/);
      expect(openButton.disabled).toBeTruthy();
    });

    it('locked button disabled if gate open', () => {
      const { getByText } = render(<Controls closed={false} locked={false}/>);
      const lockButton = getByText(/Lock Gate/);
      expect(lockButton.disabled).toBeTruthy();
    });
  });
