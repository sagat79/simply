// SPDX-FileCopyrightText: 2025 2017-2025 GodoFredo <hello@godofredo.ninja>
//
// SPDX-License-Identifier: GPL-3.0-or-later

/* global prismJsComponents */

// https://ghost.org/tutorials/code-syntax-highlighting/
// https://cdnjs.com/libraries/prism/

import Prism from 'prismjs'
import 'prismjs/plugins/autoloader/prism-autoloader'

(prism => {
  if (typeof prismJsComponents === 'undefined') return

  prism.plugins.autoloader.languages_path = prismJsComponents

  prism.highlightAll()
})(Prism)
