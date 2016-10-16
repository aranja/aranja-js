/**
 * Copyright (c) 2016-present, Aranja ehf.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @flow
 */

// Convert a DOM element to a string.
export function fragmentToString(element: HTMLElement): string {
  const fragmentDIV = document.createElement('div')
  fragmentDIV.appendChild(element)
  return fragmentDIV.innerHTML
}

// Get element's position in the DOM, from the viewport's top point.
export function offsetTop(element: HTMLElement): number {
  const { top } = element.getBoundingClientRect()
  return top + window.pageYOffset
}

// Force a relayout.
export function forceLayout(element: HTMLElement): number {
  return element.offsetHeight
}
