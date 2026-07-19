// SPDX-FileCopyrightText: 2017-2025 GodoFredo <hello@godofredo.ninja>
//
// SPDX-License-Identifier: GPL-3.0-or-later

export default (selector, parent = document) => Array.prototype.slice.call(parent.querySelectorAll(selector), 0)
