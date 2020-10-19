import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {build, fake} from '@jackfranklin/test-data-bot';

import App from '../App';

jest.spyOn(window, 'alert').mockImplementation(() => {});
afterEach(() => {
  jest.clearAllMocks();
});

// generate a number between 1 and 9, inclusive
const getRandomNum = () => Math.floor(Math.random() * 9 + 1);

const contactBuilder = build('Contact', {
  fields: {
    email: fake(f => f.internet.email()),
    subject: fake(f => f.lorem.words(getRandomNum())),
    message: fake(f => f.lorem.sentences(getRandomNum()))
  }
});

const renderApp = () => render(<App />);

test('should render elements', () => {
  const {
    getByAltText,
    getAllByText,
    getAllByTitle,
    getByText
  } = renderApp();

  // header logo
  getByAltText(/^midwestern interactive logo$/i);

  // main headings
  const headings = getAllByText(/^heading one$/i);
  expect(headings).toHaveLength(2);

  // grid elements
  const countOfGridElements = 3;
  const subHeadings = getAllByText(/^heading 2$/i);
  expect(subHeadings).toHaveLength(countOfGridElements);
  const previews = getAllByTitle(/^article preview$/i);
  expect(previews).toHaveLength(countOfGridElements);
  const buttons = getAllByText(/^read more$/i);
  expect(buttons).toHaveLength(countOfGridElements);

  // contact section
  getByText(/^contact$/i);

  // footer
  getByText(/^thanks for taking the midwestern interactive benchmark test\.$/i);
});

test('contact form can be filled out and submitted', () => {
  const {getByLabelText, getByText} = renderApp();
  const contact = contactBuilder();

  // use generated data to type in fields
  const emailInput = getByLabelText(/^email$/i);
  userEvent.type(emailInput, contact.email);

  const subjectInput = getByLabelText(/^subject$/i);
  userEvent.type(subjectInput, contact.subject);

  const messageInput = getByLabelText(/^message$/i);
  userEvent.type(messageInput, contact.message);

  const submitButton = getByText(/^submit$/i);
  userEvent.click(submitButton);
  expect(window.alert).toBeCalledWith('Contact form submitted successfully!');
});

test('contact form does not submit successfully with empty fields', () => {
  const {getByText} = renderApp();
  const submitButton = getByText(/^submit$/i);
  userEvent.click(submitButton);
  expect(window.alert).toBeCalledWith(
    'Could not submit form. Please check your input and try again.'
  );
});

test('only unique names are displayed after link is clicked', async () => {
  const {getByText, findByText} = renderApp();
  const link = getByText(/^link is clicked$/i);
  userEvent.click(link);
  await findByText('Matt Johnson');
  await findByText('Bart Paden');
  await findByText('Ryan Doss');
  await findByText('Miguel Solano');
  await findByText('Jordan Heigle');
  await findByText('Tyler Viles');

  // alert should display if user clicks link again
  userEvent.click(link);
  expect(window.alert).toBeCalledWith('Unique names are already being displayed');
});