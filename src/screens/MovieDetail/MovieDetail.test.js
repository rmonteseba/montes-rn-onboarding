import { render, screen, waitFor } from '@testing-library/react-native';
import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from '@/networking/clients/movieDBClient';
import MovieDetail from '@/screens/MovieDetail/MovieDetail';
import { withProviders } from '@/test-utils';
import { movieResponse } from '@/test-utils/mocks';
import { initialState as currentMovieInitialState } from '@/reducers/CurrentMovieReducer';

const mockedParams = { movieId: movieResponse.id };

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: () => ({
      params: mockedParams,
    }),
  };
});

const fakeStore = {
  error: {},
  status: {},
  user: {
    username: 'johndoe',
  },
  currentMovie: currentMovieInitialState,
};

describe('MovieDetail', () => {
  let axiosMock;

  beforeEach(() => {
    axiosMock = new MockAdapter(axios);
    axiosMock.onGet(`/movie/${movieResponse.id}`).reply(200, movieResponse);
  });

  afterEach(() => {
    axiosMock.restore();
  });

  it('should match the snapshot', () => {
    const { toJSON } = render(withProviders(<MovieDetail />, { initialState: fakeStore }));
    expect(toJSON()).toMatchSnapshot();
  });

  it('should show the movie when the movie is loaded', async () => {
    const { findByText, toJSON } = render(
      withProviders(<MovieDetail />, {
        initialState: fakeStore,
      })
    );

    const movieTitle = await findByText(movieResponse.title);

    expect(movieTitle).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
