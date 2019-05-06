import 'mocha';
import { expect } from 'chai';
import merge from '@/merge';

describe('merge', () => {
  it('merge the input object', () => {
    const info = { 
      name: 'info',
      love: [{
        name: 'basketbal',
        color: 'red'
      }, 'pingbing'],
      relatives: {
        name: 'yz',
        love: {
          name: 'gouwu'
        }
      }
    };
    const version = { 
      name: 'pxy',
      version: '1.0.0',
      lover: [{
        name: 'pingbao'
      }],
      relatives: {
        name: 'yz',
        love: {
          name: 'gouwu',
          money: '1,000,000'
        }
      }
    };
    const result = merge(info, version);
    expect(result).to.have.property('name');
    expect(result).to.have.property('version');
  });

  it('omit the value which is null', () => {
    const info = { name: 'info' };
    const version = { version: '1.0.0' };
    const result = merge(info, null, version);
    expect(result).to.have.property('name');
    expect(result).to.have.property('version');
  });
});
