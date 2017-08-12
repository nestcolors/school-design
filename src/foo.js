export function dummyFoo() {
  console.log('hello i`m foo!');
  document.getElementById('text-injection').innerHTML = 'hello from the other side!';
}

// export var dummyFoo1 = 'hello';
