import type { AttributifyOptions } from '@unocss/preset-attributify'
import type { PresetUnoOptions } from '@unocss/preset-uno'
import type { IconsOptions } from '@unocss/preset-icons'
import type { WebFontsOptions } from '@unocss/preset-web-fonts'
import type { TypographyOptions } from '@unocss/preset-typography'
import type { TagifyOptions } from '@unocss/preset-tagify'
import type { RemToPxOptions } from '@unocss/preset-rem-to-px'
import type { PresetScrollbarDefaultOption } from 'unocss-preset-scrollbar'
import type { Preset } from '@unocss/core'
import type { Theme, ThemeAnimation } from '@unocss/preset-mini'

export interface UsefulThemeAnimation extends ThemeAnimation {
  animate?: string[]
}

export interface UsefulTheme extends Theme {
  animation?: UsefulThemeAnimation
}

export interface UsefulOptions {
  /**
   * Extract rgba color in css variable
   *
   * @default false
   */
  unColor?: boolean | string

  /**
   * Improve theme to be more useful
   *
   * - Add `animation` to theme, Expand theme animation name usage
   *
   * [ name, duration, timing-function, iteration-count ]
   *
   * @example
   *
   * ```ts
    themeAnimate: ['spin 1s linear infinite'],
   * ```
   *
   */
  theme?: UsefulTheme

  /**
   * Enable the default preset
   * Only works when `presets` is not specified
   * @default true
   */
  uno?: boolean | PresetUnoOptions

  /**
   * Enable attributify mode and the options of it
   * Only works when `presets` is not specified
   * @default false
   */
  attributify?: boolean | AttributifyOptions

  /**
   * Enable icons preset and the options of it
   * Only works when `presets` is not specified
   * @default false
   */
  icons?: boolean | IconsOptions

  /**
   * Enable webFonts preset and the options of it
   * Only works when `presets` is not specified
   * @default false
   */
  webFonts?: boolean | WebFontsOptions

  /**
   * Enable typography preset and the options of it
   * Only works when `presets` is not specified
   * @default false
   */
  typography?: boolean | TypographyOptions

  /**
   * Enable tagify preset and the options of it
   * Only works when `presets` is not specified
   * @default false
   */
  tagify?: boolean | TagifyOptions

  /**
   * Enable remToPx preset and the options of it
   * Only works when `presets` is not specified
   * @default false
   */
  remToPx?: boolean | RemToPxOptions

  /**
   * Enable scrollbar preset and the options of it
   * Only works when `presets` is not specified
   *
   * See: https://github.com/action-hong/unocss-preset-scrollbar
   *
   * @default false
   */
  scrollbar?: boolean | PresetScrollbarDefaultOption
}

export type ResolvedOptions = Required<UsefulOptions> & { presets: Preset[] }

export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> }