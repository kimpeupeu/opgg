export function saveToLoaclStorage(key: string, data: any) {
  if (!window) return false;

  window.localStorage.setItem(key, JSON.stringify(data));

  return true;
}

export function loadFromLoaclStorage(key: string) {
  if (!window) return null;

  const item = window.localStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  }

  return null;
}

export function clearAll() {
  if (!window) return false;

  window.localStorage.clear();

  return true;
}
