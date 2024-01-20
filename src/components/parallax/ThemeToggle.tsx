import { ColorScheme, IconButton, saveThemeIntoLocalStorage } from "@qinetik/anique"
import Brightness7Icon from "@qinetik/mdi/Brightness7Icon"
import Brightness4Icon from "@qinetik/mdi/Brightness4Icon"
import { createSignal, onMount, Show } from "solid-js"

export function ThemeToggle() {
    const [isDark, setIsDark] = createSignal(true)
    onMount(() => setIsDark(document.documentElement.className === ColorScheme.Dark))
    return (
        <IconButton
            onClick={() => {
                const theme = document.documentElement.className
                let newTheme: ColorScheme
                if (theme === "dark") {
                    newTheme = ColorScheme.Light
                } else {
                    newTheme = ColorScheme.Dark
                }
                saveThemeIntoLocalStorage(newTheme)
                document.documentElement.className = newTheme
                let nowDark = newTheme === "dark"
                setIsDark(nowDark)
            }}>
            <Show when={isDark()}>
                <Brightness7Icon />
            </Show>
            <Show when={!isDark()}>
                <Brightness4Icon />
            </Show>
        </IconButton>
    )
}
