import test from 'tape';
import app from '../../lib/app';

test('adding two numbers', t => {
  const a = 6;
  const b = 4;

  const actual = app.sum(a,b);
  const expected = 10;
  const msg = `should return the number ${expected}`;

  t.equal(actual, expected, msg);

  t.end();
});