"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(src_exports);
var import_vscode4 = require("vscode");

// src/utils/configuration.ts
var import_vscode = require("vscode");

// src/defaultConfig.ts
var defaultEnabledUtilities = [
  "width",
  "height",
  "flex",
  "grid",
  "position"
];
var defaultUtilitiesConfig = {
  padding: {
    regex: "(?<=[:`'\"\\s])!?(|-)p(|t|b|r|l|x|y)-[^`'\"\\s]+",
    color: "rgba(187, 196, 136, 1)"
  },
  margin: {
    regex: "(?<=[:`'\"\\s])!?(|-)m(|t|b|r|l|x|y)-[^`'\"\\s]+",
    color: "rgba(173, 134, 91, 1)"
  },
  space: {
    regex: "(?<=[:`'\"\\s])!?(|-)space-(x|y)-[^`'\"\\s]+",
    color: "rgba(173, 134, 91, 1)"
  },
  border: {
    regex: "(?<=[:`'\"\\s])!?border(?!-collapse|-separate)(|-)[^`'\"\\s]*",
    color: "rgba(222, 195, 138, 1)"
  },
  rounded: {
    regex: "(?<=[:`'\"\\s])!?rounded(|-)[^`'\"\\s]*",
    color: "rgba(222, 195, 138, 1)"
  },
  divide: {
    regex: "(?<=[:`'\"\\s])!?divide(|-)[^`'\"\\s]*",
    color: "rgba(222, 195, 138, 1)"
  },
  ring: {
    regex: "(?<=[:`'\"\\s])!?ring(|-)[^`'\"\\s]*",
    color: "rgba(222, 195, 138, 1)"
  },
  width: {
    regex: "(?<=[:`'\"\\s])!?(|-)(|max|min)(|-)w-[^`'\"\\s]+",
    color: "rgba(160, 202, 222, 1)"
  },
  height: {
    regex: "(?<=[:`'\"\\s])!?(|-)(|max|min)(|-)h-[^`'\"\\s]+",
    color: "rgba(230, 177, 161, 1)"
  },
  flex: {
    regex: "(?<=[:`'\"\\s])!?(|inline-)flex(|-)[^`'\"\\s]*",
    color: "rgba(192, 175, 224, 1)"
  },
  grid: {
    regex: "(?<=[:`'\"\\s])!?grid(|-)[^`'\"\\s]*",
    color: "rgba(192, 175, 224, 1)"
  },
  order: {
    regex: "(?<=[:`'\"\\s])!?(|-)order-[^`'\"\\s]+",
    color: "rgba(192, 175, 224, 1)"
  },
  gridColumn: {
    regex: "(?<=[:`'\"\\s])!?col(|-)[^`'\"\\s]+",
    color: "rgba(192, 175, 224, 1)"
  },
  gridRow: {
    regex: "(?<=[:`'\"\\s])!?row(|-)[^`'\"\\s]+",
    color: "rgba(192, 175, 224, 1)"
  },
  gridAutoColumns: {
    regex: "(?<=[:`'\"\\s])!?auto-cols-[^`'\"\\s]+",
    color: "rgba(192, 175, 224, 1)"
  },
  gridAutoRows: {
    regex: "(?<=[:`'\"\\s])!?auto-rows-[^`'\"\\s]+",
    color: "rgba(192, 175, 224, 1)"
  },
  gap: {
    regex: "(?<=[:`'\"\\s])!?gap-[^`'\"\\s]+",
    color: "rgba(192, 175, 224, 1)"
  },
  justifyContent: {
    regex: "(?<=[:`'\"\\s])!?justify-(start|end|center|between|around|evenly)",
    color: "rgba(192, 175, 224, 1)"
  },
  justifyItems: {
    regex: "(?<=[:`'\"\\s])!?justify-items-(start|end|center|stretch)",
    color: "rgba(192, 175, 224, 1)"
  },
  justifySelf: {
    regex: "(?<=[:`'\"\\s])!?justify-self-(auto|start|end|center|stretch)",
    color: "rgba(192, 175, 224, 1)"
  },
  alignContent: {
    regex: "(?<=[:`'\"\\s])!?content-(start|end|center|between|around|evenly)",
    color: "rgba(192, 175, 224, 1)"
  },
  alignItems: {
    regex: "(?<=[:`'\"\\s])!?items-(start|end|center|baseline|stretch)",
    color: "rgba(192, 175, 224, 1)"
  },
  alignSelf: {
    regex: "(?<=[:`'\"\\s])!?self-(auto|start|end|center|stretch)",
    color: "rgba(192, 175, 224, 1)"
  },
  placeContent: {
    regex: "(?<=[:`'\"\\s])!?place-content-(center|start|end|between|around|evenly|stretch)",
    color: "rgba(192, 175, 224, 1)"
  },
  placeItems: {
    regex: "(?<=[:`'\"\\s])!?place-items-(start|end|center|stretch)",
    color: "rgba(192, 175, 224, 1)"
  },
  placeSelf: {
    regex: "(?<=[:`'\"\\s])!?place-self-(auto|start|end|center|stretch)",
    color: "rgba(192, 175, 224, 1)"
  },
  table: {
    regex: "(?<=[:`'\"\\s])!?(table-fixed|table-auto|table)",
    color: "rgba(255, 210, 105, 1)"
  },
  borderCollapse: {
    regex: "(?<=[:`'\"\\s])!?border-(collapse|separate)",
    color: "rgba(255, 210, 105, 1)"
  },
  transition: {
    regex: "(?<=[:`'\"\\s])!?transition(|-)[^`'\"\\s]*",
    color: "rgba(141, 179, 184, 1)"
  },
  transitionDuration: {
    regex: "(?<=[:`'\"\\s])!?duration-[^`'\"\\s]*",
    color: "rgba(141, 179, 184, 1)"
  },
  transitionTimingFunction: {
    regex: "(?<=[:`'\"\\s])!?ease(|-)[^`'\"\\s]*",
    color: "rgba(141, 179, 184, 1)"
  },
  transitionDelay: {
    regex: "(?<=[:`'\"\\s])!?delay-[^`'\"\\s]*",
    color: "rgba(141, 179, 184, 1)"
  },
  animation: {
    regex: "(?<=[:`'\"\\s])!?animate-[^`'\"\\s]+",
    color: "rgba(255, 176, 202, 1)"
  },
  transform: {
    regex: "(?<=[:`'\"\\s])!?transform(|-)[^`'\"\\s]*",
    color: "rgba(255, 176, 202, 1)"
  },
  transformOrigin: {
    regex: "(?<=[:`'\"\\s])!?origin-[^`'\"\\s]+",
    color: "rgba(255, 176, 202, 1)"
  },
  scale: {
    regex: "(?<=[:`'\"\\s])!?scale-[^`'\"\\s]+",
    color: "rgba(255, 176, 202, 1)"
  },
  rotate: {
    regex: "(?<=[:`'\"\\s])!?(|-)rotate-[^`'\"\\s]+",
    color: "rgba(255, 176, 202, 1)"
  },
  translate: {
    regex: "(?<=[:`'\"\\s])!?(|-)translate-[^`'\"\\s]+",
    color: "rgba(255, 176, 202, 1)"
  },
  skew: {
    regex: "(?<=[:`'\"\\s])!?(|-)skew-[^`'\"\\s]+",
    color: "rgba(255, 176, 202, 1)"
  },
  text: {
    regex: "(?<=[:`'\"\\s])!?text-[^`'\"\\s]+",
    color: "rgba(171, 169, 169, 1)"
  },
  textDecoration: {
    regex: "(?<=[:`'\"\\s])!?(underline|line-through|no-underline)",
    color: "rgba(171, 169, 169, 1)"
  },
  textTransform: {
    regex: "(?<=[:`'\"\\s])!?(uppercase|lowercase|capitalize|normal-case)",
    color: "rgba(171, 169, 169, 1)"
  },
  textOverflow: {
    regex: "(?<=[:`'\"\\s])!?(truncate|overflow-ellipsis|overflow-clip)",
    color: "rgba(171, 169, 169, 1)"
  },
  verticalAlign: {
    regex: "(?<=[:`'\"\\s])!?align-[^`'\"\\s]+",
    color: "rgba(171, 169, 169, 1)"
  },
  whitespace: {
    regex: "(?<=[:`'\"\\s])!?whitespace-(normal|nowrap|pre(-line|-wrap|))",
    color: "rgba(171, 169, 169, 1)"
  },
  wordBreak: {
    regex: "(?<=[:`'\"\\s])!?break-(normal|words|all)",
    color: "rgba(171, 169, 169, 1)"
  },
  font: {
    regex: "(?<=[:`'\"\\s])!?font-[^`'\"\\s]+",
    color: "rgba(171, 169, 169, 1)"
  },
  fontStyle: {
    regex: "(?<=[:`'\"\\s])!?(italic|not-italic)",
    color: "rgba(171, 169, 169, 1)"
  },
  leading: {
    regex: "(?<=[:`'\"\\s])!?leading-[^`'\"\\s]+",
    color: "rgba(171, 169, 169, 1)"
  },
  tracking: {
    regex: "(?<=[:`'\"\\s])!?tracking-[^`'\"\\s]+",
    color: "rgba(171, 169, 169, 1)"
  },
  background: {
    regex: "(?<=[:`'\"\\s])!?bg-[^`'\"\\s]+",
    color: "rgba(117, 224, 165, 1)"
  },
  gradientColorStops: {
    regex: "(?<=[:`'\"\\s])!?(from|via|to)-[^`'\"\\s]+",
    color: "rgba(117, 224, 165, 1)"
  },
  position: {
    regex: "(?<=[:`'\"\\s])!?(static|fixed|absolute|relative|sticky)",
    color: "rgba(242, 142, 111, 1)"
  },
  inset: {
    regex: "(?<=[:`'\"\\s])!?(|-)(inset|top|bottom|left|right)-[^`'\"\\s]+",
    color: "rgba(242, 142, 111, 1)"
  },
  zIndex: {
    regex: "(?<=[:`'\"\\s])!?(|-)z-[^`'\"\\s]+",
    color: "rgba(249, 225, 159, 1)"
  },
  box: {
    regex: "(?<=[:`'\"\\s])!?box-(border|content)",
    color: "rgba(249, 225, 159, 1)"
  },
  shadow: {
    regex: "(?<=[:`'\"\\s])!?shadow-[^`'\"\\s]+",
    color: "rgba(249, 225, 159, 1)"
  },
  cursor: {
    regex: "(?<=[:`'\"\\s])!?cursor-(auto|default|pointer|wait|text|move|help|not-allowed|none|context-menu|progress|cell|crosshair|vertical-text|alias|copy|no-drop|grab|grabbing|all-scroll|zoom-in|zoom-out)",
    color: "rgba(249, 225, 15, 1)"
  },
  overflow: {
    regex: "(?<=[:`'\"\\s])!?overflow-?(|x|y)-(hidden|scroll|auto|clip|visible)",
    color: "rgba(49, 225, 159, 1)"
  },
  shrink: {
    regex: "(?<=[:`'\"\\s])!?shrink(|-0)",
    color: "rgba(149, 25, 59, 1)"
  }
};

// src/utils/configuration.ts
var Configuration = class {
  constructor() {
    this.configuration = import_vscode.workspace.getConfiguration("tailwindcss-highlight");
  }
  get languages() {
    var _a;
    return (_a = this.configuration.get("languages")) != null ? _a : [];
  }
  get configs() {
    var _a, _b, _c, _d;
    const customVariantsConfig = (_a = this.configuration.get("customVariantsConfig")) != null ? _a : {};
    const defaultVariantsColor = (_b = this.configuration.get("defaultVariantsColor")) != null ? _b : "";
    const customUtilitiesConfig = (_c = this.configuration.get("customUtilitiesConfig")) != null ? _c : {};
    const enabledUtilities = (_d = this.configuration.get("enabledUtilities")) != null ? _d : defaultEnabledUtilities;
    const config = __spreadValues(__spreadValues({}, customUtilitiesConfig), Object.entries(defaultUtilitiesConfig).reduce((acc, [key, value]) => {
      var _a2, _b2, _c2, _d2, _e;
      acc[key] = {
        regex: (_b2 = (_a2 = customUtilitiesConfig[key]) == null ? void 0 : _a2.regex) != null ? _b2 : value.regex,
        color: (_d2 = (_c2 = customUtilitiesConfig[key]) == null ? void 0 : _c2.color) != null ? _d2 : value.color,
        style: (_e = customUtilitiesConfig[key]) == null ? void 0 : _e.style
      };
      return acc;
    }, {}));
    const customVariants = Object.values(customVariantsConfig).flatMap((i) => i);
    return __spreadProps(__spreadValues(__spreadValues({}, Object.entries(config).reduce((acc, [key, value]) => {
      var _a2, _b2, _c2, _d2;
      acc[key] = {
        enable: true,
        regex: (_a2 = value.regex) != null ? _a2 : "",
        options: enabledUtilities.includes(key) ? (_c2 = value.style) != null ? _c2 : highlightStyle((_b2 = value.color) != null ? _b2 : "") : borderStyle((_d2 = value.color) != null ? _d2 : "")
      };
      return acc;
    }, {})), Object.entries(customVariantsConfig).reduce((acc, [key, value]) => {
      acc[`variants:${value.join()}`] = {
        enable: true,
        options: {
          color: key
        },
        regex: `(?<=[:\`'"\\s])(${value.join("|")}):`
      };
      return acc;
    }, {})), {
      // default variants
      "variants:other": {
        enable: true,
        options: {
          color: defaultVariantsColor
        },
        regex: `(?<=[:\`'"\\s])(?!(${customVariants.join(
          "|"
        )}))([^\`'"\\s]+):`
      }
    });
  }
};
function borderStyle(color) {
  return {
    backgroundColor: "",
    borderStyle: "dashed",
    borderWidth: "0 0 1px 0",
    borderColor: color
  };
}
function highlightStyle(color) {
  return {
    color: "#333",
    borderRadius: "0.25rem",
    backgroundColor: color
  };
}

// src/utils/decoration.ts
var import_vscode3 = require("vscode");

// src/utils/utils.ts
var import_vscode2 = require("vscode");

// node_modules/find-up/index.js
var import_node_path2 = __toESM(require("path"), 1);
var import_node_url2 = require("url");

// node_modules/locate-path/index.js
var import_node_process = __toESM(require("process"), 1);
var import_node_path = __toESM(require("path"), 1);
var import_node_fs = __toESM(require("fs"), 1);
var import_node_url = require("url");

// node_modules/p-locate/node_modules/yocto-queue/index.js
var Node = class {
  constructor(value) {
    __publicField(this, "value");
    __publicField(this, "next");
    this.value = value;
  }
};
var _head, _tail, _size;
var Queue = class {
  constructor() {
    __privateAdd(this, _head, void 0);
    __privateAdd(this, _tail, void 0);
    __privateAdd(this, _size, void 0);
    this.clear();
  }
  enqueue(value) {
    const node = new Node(value);
    if (__privateGet(this, _head)) {
      __privateGet(this, _tail).next = node;
      __privateSet(this, _tail, node);
    } else {
      __privateSet(this, _head, node);
      __privateSet(this, _tail, node);
    }
    __privateWrapper(this, _size)._++;
  }
  dequeue() {
    const current = __privateGet(this, _head);
    if (!current) {
      return;
    }
    __privateSet(this, _head, __privateGet(this, _head).next);
    __privateWrapper(this, _size)._--;
    return current.value;
  }
  clear() {
    __privateSet(this, _head, void 0);
    __privateSet(this, _tail, void 0);
    __privateSet(this, _size, 0);
  }
  get size() {
    return __privateGet(this, _size);
  }
  *[Symbol.iterator]() {
    let current = __privateGet(this, _head);
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
};
_head = new WeakMap();
_tail = new WeakMap();
_size = new WeakMap();

// node_modules/p-locate/node_modules/p-limit/index.js
function pLimit(concurrency) {
  if (!((Number.isInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency > 0)) {
    throw new TypeError("Expected `concurrency` to be a number from 1 and up");
  }
  const queue = new Queue();
  let activeCount = 0;
  const next = () => {
    activeCount--;
    if (queue.size > 0) {
      queue.dequeue()();
    }
  };
  const run = async (fn, resolve, args) => {
    activeCount++;
    const result = (async () => fn(...args))();
    resolve(result);
    try {
      await result;
    } catch (e) {
    }
    next();
  };
  const enqueue = (fn, resolve, args) => {
    queue.enqueue(run.bind(void 0, fn, resolve, args));
    (async () => {
      await Promise.resolve();
      if (activeCount < concurrency && queue.size > 0) {
        queue.dequeue()();
      }
    })();
  };
  const generator = (fn, ...args) => new Promise((resolve) => {
    enqueue(fn, resolve, args);
  });
  Object.defineProperties(generator, {
    activeCount: {
      get: () => activeCount
    },
    pendingCount: {
      get: () => queue.size
    },
    clearQueue: {
      value: () => {
        queue.clear();
      }
    }
  });
  return generator;
}

// node_modules/p-locate/index.js
var EndError = class extends Error {
  constructor(value) {
    super();
    this.value = value;
  }
};
var testElement = async (element, tester) => tester(await element);
var finder = async (element) => {
  const values = await Promise.all(element);
  if (values[1] === true) {
    throw new EndError(values[0]);
  }
  return false;
};
async function pLocate(iterable, tester, {
  concurrency = Number.POSITIVE_INFINITY,
  preserveOrder = true
} = {}) {
  const limit = pLimit(concurrency);
  const items = [...iterable].map((element) => [element, limit(testElement, element, tester)]);
  const checkLimit = pLimit(preserveOrder ? 1 : Number.POSITIVE_INFINITY);
  try {
    await Promise.all(items.map((element) => checkLimit(finder, element)));
  } catch (error) {
    if (error instanceof EndError) {
      return error.value;
    }
    throw error;
  }
}

// node_modules/locate-path/index.js
var typeMappings = {
  directory: "isDirectory",
  file: "isFile"
};
function checkType(type) {
  if (Object.hasOwnProperty.call(typeMappings, type)) {
    return;
  }
  throw new Error(`Invalid type specified: ${type}`);
}
var matchType = (type, stat) => stat[typeMappings[type]]();
var toPath = (urlOrPath) => urlOrPath instanceof URL ? (0, import_node_url.fileURLToPath)(urlOrPath) : urlOrPath;
async function locatePath(paths, {
  cwd = import_node_process.default.cwd(),
  type = "file",
  allowSymlinks = true,
  concurrency,
  preserveOrder
} = {}) {
  checkType(type);
  cwd = toPath(cwd);
  const statFunction = allowSymlinks ? import_node_fs.promises.stat : import_node_fs.promises.lstat;
  return pLocate(paths, async (path_) => {
    try {
      const stat = await statFunction(import_node_path.default.resolve(cwd, path_));
      return matchType(type, stat);
    } catch (e) {
      return false;
    }
  }, { concurrency, preserveOrder });
}

// node_modules/find-up/node_modules/path-exists/index.js
var import_node_fs2 = __toESM(require("fs"), 1);

// node_modules/find-up/index.js
var toPath2 = (urlOrPath) => urlOrPath instanceof URL ? (0, import_node_url2.fileURLToPath)(urlOrPath) : urlOrPath;
var findUpStop = Symbol("findUpStop");
async function findUpMultiple(name, options = {}) {
  let directory = import_node_path2.default.resolve(toPath2(options.cwd) || "");
  const { root } = import_node_path2.default.parse(directory);
  const stopAt = import_node_path2.default.resolve(directory, options.stopAt || root);
  const limit = options.limit || Number.POSITIVE_INFINITY;
  const paths = [name].flat();
  const runMatcher = async (locateOptions) => {
    if (typeof name !== "function") {
      return locatePath(paths, locateOptions);
    }
    const foundPath = await name(locateOptions.cwd);
    if (typeof foundPath === "string") {
      return locatePath([foundPath], locateOptions);
    }
    return foundPath;
  };
  const matches = [];
  while (true) {
    const foundPath = await runMatcher(__spreadProps(__spreadValues({}, options), { cwd: directory }));
    if (foundPath === findUpStop) {
      break;
    }
    if (foundPath) {
      matches.push(import_node_path2.default.resolve(directory, foundPath));
    }
    if (directory === stopAt || matches.length >= limit) {
      break;
    }
    directory = import_node_path2.default.dirname(directory);
  }
  return matches;
}
async function findUp(name, options = {}) {
  const matches = await findUpMultiple(name, __spreadProps(__spreadValues({}, options), { limit: 1 }));
  return matches[0];
}

// src/utils/utils.ts
function getClassNames(targetText) {
  const arr = [];
  const regexes = [
    /(?:\b(?:class(?:Name)?|tw)\s*=\s*(?:(?:{([^>}]+)})|(["'`][^"'`]+["'`])))/,
    /(?:(clsx|classnames)\()([^)]+)\)/
  ];
  const regex = new RegExp(regexes.map((r) => r.source).join("|"), "gm");
  const classNameMatches = targetText.matchAll(regex);
  for (const classNameMatch of classNameMatches) {
    const stringMatches = classNameMatch[0].matchAll(
      /(?:["'`]([\s\S.:/${}()[\]"']+)["'`])/g
    );
    for (const stringMatch of stringMatches) {
      if (classNameMatch.index != null && stringMatch.index != null) {
        arr.push({
          start: classNameMatch.index + stringMatch.index,
          value: stringMatch[0]
        });
      }
    }
  }
  return arr;
}
function getUtility(targetText, regex) {
  const arr = [];
  const matches = targetText.matchAll(regex);
  for (const match of matches) {
    if (match.index != null) {
      arr.push({
        start: match.index,
        end: match.index + match[0].length,
        value: match[0]
      });
    }
  }
  return arr;
}
async function hasTailwindConfig() {
  var _a;
  const url = (_a = import_vscode2.window.activeTextEditor) == null ? void 0 : _a.document.uri.fsPath;
  if (!url)
    return;
  const config = await findUp(["tailwind.config.js", "tailwind.config.ts"], { cwd: url });
  return !!config;
}

// src/utils/decoration.ts
var Decoration = class {
  constructor(configuration) {
    this.timer = void 0;
    this.configuration = configuration;
    this.decorators = Object.entries(configuration.configs).filter((config) => config[1].enable).sort((a, b) => {
      console.log(a[0]);
      if (a[0].startsWith("variants:") && !["variants:other", "variants:responsive"].includes(a[0]))
        return -1;
      return 0;
    }).map((config) => {
      return {
        regex: config[1].regex,
        decorator: import_vscode3.window.createTextEditorDecorationType(config[1].options)
      };
    });
  }
  decorate(editor) {
    if (editor == null)
      return;
    const document = editor.document;
    const text = document.getText();
    const classNames = getClassNames(text);
    this.decorators.forEach((decorator) => {
      const regex = new RegExp(decorator.regex, "g");
      const chars = [];
      classNames.forEach((className) => {
        const utilities = getUtility(className.value, regex);
        utilities.forEach((utility) => {
          const start = document.positionAt(className.start + utility.start);
          const end = document.positionAt(className.start + utility.end);
          const range = new import_vscode3.Range(start, end);
          chars.push({ range });
        });
        editor.setDecorations(decorator.decorator, chars);
      });
    });
  }
  update(configuration) {
    if (configuration != null) {
      this.configuration = configuration;
      this.decorators = Object.entries(configuration.configs).filter((config) => config[1].enable).map((config) => {
        return {
          regex: config[1].regex,
          decorator: import_vscode3.window.createTextEditorDecorationType(config[1].options)
        };
      });
    }
    const editor = import_vscode3.window.activeTextEditor;
    if (editor == null)
      return;
    const languageId = editor.document.languageId;
    if (!this.configuration.languages.includes(languageId))
      return;
    if (this.timer != null) {
      clearTimeout(this.timer);
      this.timer = void 0;
    }
    this.timer = setTimeout(() => {
      this.decorate(editor);
    }, 500);
  }
  dispose() {
    this.decorators.forEach((decorator) => {
      decorator.decorator.dispose();
    });
  }
};

// src/index.ts
async function activate(context) {
  const a = await hasTailwindConfig();
  debugger;
  const configuration = new Configuration();
  const decoration = new Decoration(configuration);
  decoration.update();
  import_vscode4.window.onDidChangeActiveTextEditor(
    (editor) => {
      decoration.update();
    },
    null,
    context.subscriptions
  );
  import_vscode4.workspace.onDidChangeTextDocument(
    (event) => {
      decoration.update();
    },
    null,
    context.subscriptions
  );
  import_vscode4.workspace.onDidChangeConfiguration(
    (event) => {
      const configuration2 = new Configuration();
      decoration.update(configuration2);
    },
    null,
    context.subscriptions
  );
}
async function deactivate() {
  const configuration = new Configuration();
  const decoration = new Decoration(configuration);
  decoration.dispose();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
