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
  it('extracts hostname with slash', () => {
    const parsedUrl = parser('http://localhost/')
    expect(parsedUrl.hostname).toEqual('localhost');
  });

  it('extracts hostname with no slash', () => {
    const parsedUrl = parser('http://localhost')
    expect(parsedUrl.hostname).toEqual('localhost');
  });

  it('extracts hostname from a long url', () => {
    const parsedUrl = parser('https://really.long.hostname.dot.com/spam');
    expect(parsedUrl.hostname).toEqual('really.long.hostname.dot.com');
  });
});

describe('Path', () => {
  it('extracts path', () => {
    const parsedUrl = parser('http://spam/foo');
    expect(parsedUrl.path).toEqual('foo');
  });
});
