/*
 * Copyright (c) 2014 The Native Client Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

function onLaunched(launchData) {
  chrome.app.window.create('Xsdl.html', {
    width: 1024,
    height: 768,
    id: 'Xsdl',
  });
}

chrome.app.runtime.onLaunched.addListener(onLaunched);
