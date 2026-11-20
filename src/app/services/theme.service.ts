import {DOCUMENT} from '@angular/common';
import {inject, Service} from '@angular/core';
import {ThemeColorKey} from './theme.utils';


@Service()
export class ThemeService {
  private root = inject(DOCUMENT).documentElement;

  /**
   * Set a mauti theme color
   * @param key - Color key (es. 'mauti-red').
   * @param hexValue - CSS value (es. '#ff0000' o 'oklch(...)').
   */
  setColor(key: ThemeColorKey, hexValue: string): void {
    this.root.style.setProperty(`--${key}`, hexValue);
  }

  /**
   * Get the current theme color value
   * @param key - Color key.
   * @returns Return the CSS value set in :root or null
   */
  getColor(key: ThemeColorKey): string | null {
    const styles = this.root.style;
    return styles.getPropertyValue(`--${key}`) || null;
  }

  /**
   * Set all colors at once.
   * @param colors - Record of key and CSS values.
   */
  setColors(colors: Partial<Record<ThemeColorKey, string>>): void {
    for (const [key, value] of Object.entries(colors)) {
      if (value) {
        this.setColor(key as ThemeColorKey, value);
      }
    }
  }

  /**
   * Remove custom values from root to restore initial values
   */
  reset(): void {
    this.root.style.removeProperty('--mauti-red');
    this.root.style.removeProperty('--mauti-cyan');
    this.root.style.removeProperty('--mauti-gray');
  }
}
