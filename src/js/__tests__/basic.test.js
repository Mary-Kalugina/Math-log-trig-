import Daemon from '../Daemon';
import Magician from '../Magician';

test('stoned', () => {
  const magician = new Magician(2, 100);
  const daemon = new Daemon(3, 200);
  magician.stoned = true;
  daemon.stoned = true;

  const daemonResult = daemon.attack;
  const result = magician.attack;

  expect(daemonResult).toBe(192);
  expect(result).toBe(95);
});

test('not stoned', () => {
  const magician = new Magician(2, 100);
  const daemon = new Daemon(3, 200);
  magician.stoned = false;
  daemon.stoned = false;

  const daemonResult = daemon.attack;
  const result = magician.attack;

  expect(daemonResult).toBe(120);
  expect(result).toBe(10);
});
