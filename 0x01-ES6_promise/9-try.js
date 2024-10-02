export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
    queue.push('Guardrail was processed');
  } catch (e) {
    queue.push(e.message);
    queue.push('Guardrail was processed');
  }
}
