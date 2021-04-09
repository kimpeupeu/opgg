import { useDispatch } from "react-redux";
import { AppDispatch } from "modules";

export default function useAppDispatch() {
  return useDispatch<AppDispatch>();
}
