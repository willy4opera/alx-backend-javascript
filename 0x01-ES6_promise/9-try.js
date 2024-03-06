export default function guardrail(mathFunction) {
  const queue = []; // create a list queue

  try { // try pushing to the queue
    queue.push(mathFunction());
  } catch (err) {
    queue.push(String(err));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
