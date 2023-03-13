"use strict";

// Выполнится.
if (-1 || 0) alert("first"); // if(...) = -1

// Не выполнится
if (-1 && 0) alert("second"); // if(...) = 0

// Выполнится
if (null || (-1 && 1)) alert("third"); // if(...) = 1
