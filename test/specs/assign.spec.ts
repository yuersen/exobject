import 'mocha';
import { expect } from 'chai';
import assign from '@/assign';

describe('assign', () => {
  it('throw TypeError when the target is null', () => {
    try {
      assign(null, {});
    } catch (error) {
      expect(() => {
        throw new TypeError('Cannot convert undefined or null to object');
      }).to.throw(TypeError);
    }
  });

  it('merge specified input', () => {
    const info = { name: 'info' };
    const version = { version: '1.0.0' };
    const result = assign(info, version);
    expect(result).to.have.property('name');
    expect(result).to.have.property('version');
  });

  it('omit the value which is null', () => {
    const info = { name: 'info' };
    const version = { version: '1.0.0' };
    const result = assign(info, null, version);
    expect(result).to.have.property('name');
    expect(result).to.have.property('version');
  });
});
