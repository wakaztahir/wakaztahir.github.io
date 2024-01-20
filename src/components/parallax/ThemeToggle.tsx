import { IconButton } from "@qinetik/anique"
import Brightness7Icon from "@qinetik/mdi/Brightness7Icon"
import Brightness4Icon from "@qinetik/mdi/Brightness4Icon"

export function ThemeToggle() {

  return (
    <IconButton
      onClick={() => {

      }}>
      {true ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
}
