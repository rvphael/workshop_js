const parser = require('./url_parser')

describe('Protocol', () => {
  it('extracts protocol http', () => {
    const parsedUrl = parser('http://this.is.my.site.com/spam')
    expect(parsedUrl.protocol).toEqual('http');
  });

  it('extracts protocol http', () => {
    const parsedUrl = parser('https://this.is.my.site.com/spam')
    expect(parsedUrl.protocol).toEqual('https');
  });

  it('extacts protocol ftp', () => {
    const parsedUrl = parser('ftp://this.is.my.site.com/spam')
    expect(parsedUrl.protocol).toEqual('ftp');
  });
});


describe('Hostname', () => {
  it('extracts hostname', () => {
    const parsedUrl = parser('http://localhost:2000/this.is.my.site.com/spam')
    expect(parsedUrl.hostname).toEqual('localhost:2000');
  })
});
