import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {TwitterwallApp} from '../app/twitterwall';

beforeEachProviders(() => [TwitterwallApp]);

describe('App: Twitterwall', () => {
  it('should have the `defaultMeaning` as 42', inject([TwitterwallApp], (app: TwitterwallApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([TwitterwallApp], (app: TwitterwallApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

