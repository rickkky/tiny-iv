export function setup(engine: string) {
  window.hmap = {
    version: '1.0.0',
  };
  console.log(`Setup Hmap engine: ${engine}`);
}

export function hello(pkg: string = 'core') {
  return `Hello @himap/${pkg}`;
}
