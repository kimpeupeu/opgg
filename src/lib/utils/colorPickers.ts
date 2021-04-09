export function pickKDAColor(kda: number): string {
  if (kda >= 5.0) {
    return "#e19205";
  } else if (kda >= 4.0) {
    return "#1f8ecd";
  } else if (kda >= 3.0) {
    return "#2daf7f";
  } else {
    return "#879292";
  }
}

export function pickWinRateColor(winRate: number): string {
  if (winRate >= 60.0) {
    return "#c6443e";
  }

  return "#879292";
}
