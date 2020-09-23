import login from '../../src/views/login';

// jest.mock('../../lib/functionsFireBase.js', () => ({
//   logueo: () => {},
//   signUpGoo: () => {},
// }));

jest.mock('../../src/lib/functionsFireBase.js', () => {
  return {
    logueo: jest.fn(),
    signUpGoo: () => {},
  };
});

import { logueo } from '../../src/lib/functionsFireBase.js';

describe('login', () => {
  it('should be a function', () => {
    // expect(login).toBeFunction();
    expect(typeof login).toBe('function');
  });

  it('should return an HTMLElement', () => {
    expect(login() instanceof HTMLElement).toBe(true);
  });

  it.only('should call logueo when form is submitted', () => {
    const el = login();
    const form = el.querySelector('#formLogin');
    // expect(form instanceof HTMLFormElement).toBe(true);
    expect(form.tagName).toBe('FORM');

    form.querySelector('#emailLog').value = 'foo@bar.baz';
    form.querySelector('#passLogin').value = 'xxxx';

    form.dispatchEvent(new Event('submit'));

    expect(logueo.mock.calls.length).toBe(1);
    expect(logueo.mock.calls[0].length).toBe(2);
    expect(logueo.mock.calls[0][0]).toBe('foo@bar.baz');
    expect(logueo.mock.calls[0][1]).toBe('xxxx');
    // console.log(logueo.mock);
  });
});
