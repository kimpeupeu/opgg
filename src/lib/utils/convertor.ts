export function toLocalTimeLengthString(time: number) {
  return `${Math.ceil(time / 60)}분 ${time % 60}초`;
}

export function calcDateStringFromNow(time: number) {
  const gap = Math.ceil(
    (new Date().getTime() / 1000 - time) / (1000 * 60 * 60 * 24)
  );

  if (gap <= 1) {
    return "하루전";
  } else if (gap <= 30) {
    return `${gap}일전`;
  } else {
    return `${Math.round(gap / 30)}달전`;
  }
}
