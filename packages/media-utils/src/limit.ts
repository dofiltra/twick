// Queue for concurrency control
const concurrencyLimit = 5;
let activeCount = 0;
const queue: (() => void)[] = [];

function runNext() {
  if (queue.length === 0 || activeCount >= concurrencyLimit) return;
  const next = queue.shift();
  if (next) {
    activeCount++;
    next();
  }
}

export function limit<T>(fn: () => Promise<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    const task = () => {
      fn()
        .then(resolve)
        .catch(reject)
        .finally(() => {
          activeCount--;
          runNext();
        });
    };

    if (activeCount < concurrencyLimit) {
      activeCount++;
      task();
    } else {
      queue.push(task);
    }
  });
}