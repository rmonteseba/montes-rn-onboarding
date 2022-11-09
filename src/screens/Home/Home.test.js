import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import Home from '@/screens/Home/Home';
import { withProviders } from '@/test-utils';
import { moviesResponse } from '@/test-utils/mocks';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const fakeStore = {
  error: {},
  status: {},
  user: {
    username: 'johndoe',
  },
};

describe('Home', () => {
  let axiosMock;

  beforeEach(() => {
    axiosMock = new MockAdapter(axios);
    axiosMock.onGet(`/movie/upcoming`).reply(200, moviesResponse);
    axiosMock.onGet(`/movie/top_rated`).reply(200, moviesResponse);
    axiosMock.onGet(`/movie/popular`).reply(200, moviesResponse);
  });

  afterEach(() => {
    axiosMock.restore();
  });

  it('should show the movie list of the main carousel', () => {
    const { getAllByTestId, toJSON } = render(withProviders(<Home />, { initialState: fakeStore }));
    // expect(getAllByTestId('movie-card').length).toBe(moviesResponse.results.length); TODO solve items rendering on carousel
    expect(toJSON()).toMatchSnapshot();
  });

  it('should browse to the detail page', () => {
    const { getByTestId } = render(withProviders(<Home />, { initialState: fakeStore }));
    const movieDetailButton = getByTestId('movie-detail-btn');

    fireEvent.press(movieDetailButton);
    expect(mockedNavigate).toHaveBeenCalled();
  });

  it('should match the snapshot', () => {
    const { toJSON } = render(withProviders(<Home />, { initialState: fakeStore }));
    expect(toJSON()).toMatchSnapshot();
  });
});
