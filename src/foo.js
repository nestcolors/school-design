export const dummyFoo = () => {
  const hello = 'hello i`m foo!'

  console.log(hello);
  document.getElementById('text-injection').innerHTML = 'hello from the other side!';
}

// export var dummyFoo1 = 'hello';
