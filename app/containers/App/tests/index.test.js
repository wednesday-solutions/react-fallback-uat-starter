import React from 'react';
import App from '../index';
import { renderProvider, renderWithIntl } from '@utils/testUtils';
import history from '@utils/history';
import { BrowserRouter } from 'react-router-dom';
import { waitFor } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import { routeConfig } from '@app/routeConfig';

describe('<App /> container tests', () => {
  it('should render and match the snapshot', () => {
    const { container } = renderWithIntl(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it('should redirect to redirect_uri query params if given in url', async () => {
    history.location.search = '?redirect_uri=/repos';
    renderProvider(<App />, history);
    await waitFor(() => expect(history.location.pathname).toBe('/repos'));
  });

  it("should redirect to newHomePath if clicked on button with text 'Go to the new route'", async () => {
    history.location.pathname = '/';
    const { getByText } = renderProvider(<App />, history);
    fireEvent.click(getByText('Go to the new route'));
    await waitFor(() => expect(history.location.pathname).toBe(routeConfig.newHomePath.route));
  });
});
