import { baseUrl } from '../history';

describe('Tests for baseUrl method in history', () => {
  const OLD_ENV = process.env;
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  it("should the path '' in development or test mode", () => {
    expect(baseUrl()).toEqual('');
  });

  it("should the path be 'process.env.BRANCH_NAME' if ENVIRONMENT_NAME is 'uat'", () => {
    process.env.ENVIRONMENT_NAME = 'uat';
    process.env.BRANCH_NAME = 'feat/example';
    expect(baseUrl()).toEqual(`/${process.env.BRANCH_NAME}`);
  });
});
