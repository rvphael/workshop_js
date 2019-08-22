const parser = require('./url_parser')

describe('Protocol', () => {
  it('extracts protocol http', () => {
    expect(parser('http://this.is.my.site.com/spam')).toEqual({
      protocol: 'http'
    });
  });

  it('extracts protocol http', () => {
    expect(parser('https://this.is.my.site.com/spam')).toEqual({
      protocol: 'https'
    });
  });

  it('extacts protocol ftp', () => {
    expect(parser('ftp://this.is.my.site.com/spam')).toEqual({
      protocol: 'ftp'
    });
  });
});
