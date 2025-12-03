# KOVULA Artwork

Vector and raster assets for the KOVULA visual identity.

The icon (`icon.svg`) contains the compact mark built from terminal-inspired
characters at the start and a trailing slash at the end. The full logo
(`kovula.svg`) extends this mark into the wordmark, with the “A” drawn as an
uppercase lambda "Λ" to mirror the shape of the “V”.

## File Structure

- `svg/`
  - `icon.svg` — square mark (|< /)
  - `kovula.svg` — full wordmark (|< O V U L Λ /)
- `png/`
  - Pre-rendered raster versions in multiple sizes.
  - Additional PNGs can be generated using `rsvg-convert`:

    ```
    rsvg-convert -w SIZE ./svg/icon.svg > ./png/icon-SIZE.png
    ```

- `LICENSE` — MIT license, applies to assets in this repository

## Attribution

This artwork incorporates vector shapes derived from **JetBrains Mono**.
The font is licensed under the Open Font License 1.1.
Font source: https://www.jetbrains.com/lp/mono/
