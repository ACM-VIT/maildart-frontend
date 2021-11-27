import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mailgun/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 2', () => {
  render(<App />);
  const linkElement = screen.getByText(/Nodemailer/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 3', () => {
  render(<App />);
  const linkElement = screen.getByText(/Mailgun/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 4', () => {
  render(<App />);
  const linkElement = screen.getByText(/SendGrid/i);
  expect(linkElement).toBeInTheDocument();
});
//--------------------------------------------------------------------

test('label test', () => {
  render(<App />);
  const labelEl = screen.getByTestId(/subject-input/i);
  expect(labelEl).toBeInTheDocument();
});

test('subect input text value', () => {
  render(<App />);
  const inputEl = screen.getByTestId("subject-input");
  fireEvent.change(inputEl, {target:{value:'subject example'}})
  expect(inputEl.value).toBe('subject example')
});

test("radio1 value", () => {
  render(<App/>);
  const radio = screen.getByTestId('listmonk')
  fireEvent.change(radio, { target: { value: "Listmonk" } });
  expect(radio.value).toBe('Listmonk')
});

test("radio4 attribute exist", () => {
  render(<App/>);
  const radio = screen.getByTestId('sendgrid')
  fireEvent.change(radio, { target: { value: "SendGrid" } });
  fireEvent.click(radio)
  expect(radio).toHaveAttribute('name');
});

  test("radio1 attribute exist", () => {
    render(<App/>);
    const radio = screen.getByTestId('listmonk')
    fireEvent.change(radio, { target: { value: "Listmonk" } });
    fireEvent.click(radio)
    expect(radio).toHaveAttribute('id');
  });

  test("radio3 have concrete attribute ", () => {
    render(<App/>);
    const radio = screen.getByTestId('mailgun')
    fireEvent.change(radio, { target: { value: "Mailgun" } });
    fireEvent.click(radio)
    expect(radio).toHaveAttribute("type", "radio");
  });

  test("radio2 have concrete attribute", () => {
    render(<App/>);
    const radio = screen.getByTestId('nodemailer')
    fireEvent.change(radio, { target: { value: "Nodemailer" } });
    fireEvent.click(radio)
    expect(radio).toHaveAttribute('type', "radio");});

  test("radio1 checked", () => {
    render(<App/>);
    const radio = screen.getByTestId('listmonk')
    fireEvent.change(radio, { target: { value: 'Listmonk' } });
    fireEvent.click
    expect(radio).toBeChecked;
  });

  test("radio2 checked", () => {
    render(<App/>);
    const radio = screen.getByTestId('nodemailer')
    fireEvent.change(radio, { target: { value: 'Nodemailer' } });
    fireEvent.click
    expect(radio).toBeChecked;
  });

  test('radio2 label text', () => {
    render(<App />);
    expect(screen.getByTestId("nm").textContent).toEqual("Nodemailer");
  });

  test("radio2 attribute", () => {
    render(<App/>);
    const radio = screen.getByTestId('nodemailer')
    fireEvent.change(radio, { target: { value: "Nodemailer" } });
    expect(radio).toHaveAttribute('id');
  });


it("checkButtonRender", () => {
  const{queryByTitle} = render(<App/>);
  const btn = queryByTitle("unsubscribeButton");
  expect(btn).toBeTruthy();
});

it("checkSubjectInput", ()=>{
  const{queryByTitle} = render(<App/>);
  const sbj = queryByTitle("subject-input");
  expect(sbj).toBeInTheDocument();
  expect(sbj).toHaveAttribute("type", "text");
})

it("checkFileInput", ()=>{
  const{queryByTitle} = render(<App/>);
  const sbj = queryByTitle("file-input");
  expect(sbj).toBeInTheDocument();
  expect(sbj).toHaveAttribute("type", "file");
})

test("EmailTextInput", () => {
  render(<App/>);
  const input = screen.getByTestId('email-input')
  fireEvent.change(input, { target: { value: "email text example 1" } });
  expect(input.value).toBe('email text example 1')
});

test("AuthKeyInput", () => {
  render(<App/>);
  const input = screen.getByTestId('authKey-input')
  fireEvent.change(input, { target: { value: "auth key" } });
  expect(input.value).toBe('auth key')
});

test('display email default text', () => {
  render(<App />);
  expect(screen.getByTestId("emailDefault")).toHaveTextContent("there will be some email content");
});

test('change email text', () => {
  render(<App />);
  const input = screen.getByTestId('email-input')
  fireEvent.change(input, { target: { value: "email text example 1" } });
  const btnIncrement = screen.getByTestId("send-button");
  fireEvent.click(btnIncrement);
  expect(screen.getByTestId("emailDefault")).toHaveTextContent("email text example 1");
});


test('radio text', () => {
  render(<App />);
  expect(screen.getByTestId("sg").textContent).toEqual("SendGrid");
});
