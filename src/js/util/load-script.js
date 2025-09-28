// SPDX-FileCopyrightText: 2025 2017-2025 GodoFredo <hello@godofredo.ninja>
//
// SPDX-License-Identifier: GPL-3.0-or-later

export default (src, callback) => {
  const scriptElement = document.createElement('script')
  scriptElement.src = src
  scriptElement.defer = true
  scriptElement.async = true

  callback && scriptElement.addEventListener('load', callback)
  document.body.appendChild(scriptElement)
}
