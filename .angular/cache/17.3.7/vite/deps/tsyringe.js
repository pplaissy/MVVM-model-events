import "./chunk-J4B6MK7R.js";

// node_modules/tsyringe/dist/esm5/types/lifecycle.js
var Lifecycle;
(function(Lifecycle2) {
  Lifecycle2[Lifecycle2["Transient"] = 0] = "Transient";
  Lifecycle2[Lifecycle2["Singleton"] = 1] = "Singleton";
  Lifecycle2[Lifecycle2["ResolutionScoped"] = 2] = "ResolutionScoped";
  Lifecycle2[Lifecycle2["ContainerScoped"] = 3] = "ContainerScoped";
})(Lifecycle || (Lifecycle = {}));
var lifecycle_default = Lifecycle;

// node_modules/tsyringe/node_modules/tslib/tslib.es6.js
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (b2.hasOwnProperty(p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}

// node_modules/tsyringe/dist/esm5/reflection-helpers.js
var INJECTION_TOKEN_METADATA_KEY = "injectionTokens";
function getParamInfo(target) {
  var params = Reflect.getMetadata("design:paramtypes", target) || [];
  var injectionTokens = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
  Object.keys(injectionTokens).forEach(function(key) {
    params[+key] = injectionTokens[key];
  });
  return params;
}
function defineInjectionTokenMetadata(data, transform) {
  return function(target, _propertyKey, parameterIndex) {
    var descriptors = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
    descriptors[parameterIndex] = transform ? {
      token: data,
      transform: transform.transformToken,
      transformArgs: transform.args || []
    } : data;
    Reflect.defineMetadata(INJECTION_TOKEN_METADATA_KEY, descriptors, target);
  };
}

// node_modules/tsyringe/dist/esm5/providers/class-provider.js
function isClassProvider(provider) {
  return !!provider.useClass;
}

// node_modules/tsyringe/dist/esm5/providers/factory-provider.js
function isFactoryProvider(provider) {
  return !!provider.useFactory;
}

// node_modules/tsyringe/dist/esm5/lazy-helpers.js
var DelayedConstructor = function() {
  function DelayedConstructor2(wrap) {
    this.wrap = wrap;
    this.reflectMethods = [
      "get",
      "getPrototypeOf",
      "setPrototypeOf",
      "getOwnPropertyDescriptor",
      "defineProperty",
      "has",
      "set",
      "deleteProperty",
      "apply",
      "construct",
      "ownKeys"
    ];
  }
  DelayedConstructor2.prototype.createProxy = function(createObject) {
    var _this = this;
    var target = {};
    var init = false;
    var value;
    var delayedObject = function() {
      if (!init) {
        value = createObject(_this.wrap());
        init = true;
      }
      return value;
    };
    return new Proxy(target, this.createHandler(delayedObject));
  };
  DelayedConstructor2.prototype.createHandler = function(delayedObject) {
    var handler = {};
    var install = function(name) {
      handler[name] = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        args[0] = delayedObject();
        var method = Reflect[name];
        return method.apply(void 0, __spread(args));
      };
    };
    this.reflectMethods.forEach(install);
    return handler;
  };
  return DelayedConstructor2;
}();
function delay(wrappedConstructor) {
  if (typeof wrappedConstructor === "undefined") {
    throw new Error("Attempt to `delay` undefined. Constructor must be wrapped in a callback");
  }
  return new DelayedConstructor(wrappedConstructor);
}

// node_modules/tsyringe/dist/esm5/providers/injection-token.js
function isNormalToken(token) {
  return typeof token === "string" || typeof token === "symbol";
}
function isTokenDescriptor(descriptor) {
  return typeof descriptor === "object" && "token" in descriptor && "multiple" in descriptor;
}
function isTransformDescriptor(descriptor) {
  return typeof descriptor === "object" && "token" in descriptor && "transform" in descriptor;
}
function isConstructorToken(token) {
  return typeof token === "function" || token instanceof DelayedConstructor;
}

// node_modules/tsyringe/dist/esm5/providers/token-provider.js
function isTokenProvider(provider) {
  return !!provider.useToken;
}

// node_modules/tsyringe/dist/esm5/providers/value-provider.js
function isValueProvider(provider) {
  return provider.useValue != void 0;
}

// node_modules/tsyringe/dist/esm5/providers/provider.js
function isProvider(provider) {
  return isClassProvider(provider) || isValueProvider(provider) || isTokenProvider(provider) || isFactoryProvider(provider);
}

// node_modules/tsyringe/dist/esm5/registry-base.js
var RegistryBase = function() {
  function RegistryBase2() {
    this._registryMap = /* @__PURE__ */ new Map();
  }
  RegistryBase2.prototype.entries = function() {
    return this._registryMap.entries();
  };
  RegistryBase2.prototype.getAll = function(key) {
    this.ensure(key);
    return this._registryMap.get(key);
  };
  RegistryBase2.prototype.get = function(key) {
    this.ensure(key);
    var value = this._registryMap.get(key);
    return value[value.length - 1] || null;
  };
  RegistryBase2.prototype.set = function(key, value) {
    this.ensure(key);
    this._registryMap.get(key).push(value);
  };
  RegistryBase2.prototype.setAll = function(key, value) {
    this._registryMap.set(key, value);
  };
  RegistryBase2.prototype.has = function(key) {
    this.ensure(key);
    return this._registryMap.get(key).length > 0;
  };
  RegistryBase2.prototype.clear = function() {
    this._registryMap.clear();
  };
  RegistryBase2.prototype.ensure = function(key) {
    if (!this._registryMap.has(key)) {
      this._registryMap.set(key, []);
    }
  };
  return RegistryBase2;
}();
var registry_base_default = RegistryBase;

// node_modules/tsyringe/dist/esm5/registry.js
var Registry = function(_super) {
  __extends(Registry2, _super);
  function Registry2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return Registry2;
}(registry_base_default);
var registry_default = Registry;

// node_modules/tsyringe/dist/esm5/resolution-context.js
var ResolutionContext = /* @__PURE__ */ function() {
  function ResolutionContext2() {
    this.scopedResolutions = /* @__PURE__ */ new Map();
  }
  return ResolutionContext2;
}();
var resolution_context_default = ResolutionContext;

// node_modules/tsyringe/dist/esm5/error-helpers.js
function formatDependency(params, idx) {
  if (params === null) {
    return "at position #" + idx;
  }
  var argName = params.split(",")[idx].trim();
  return '"' + argName + '" at position #' + idx;
}
function composeErrorMessage(msg, e, indent) {
  if (indent === void 0) {
    indent = "    ";
  }
  return __spread([msg], e.message.split("\n").map(function(l) {
    return indent + l;
  })).join("\n");
}
function formatErrorCtor(ctor, paramIdx, error) {
  var _a = __read(ctor.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), _b = _a[1], params = _b === void 0 ? null : _b;
  var dep = formatDependency(params, paramIdx);
  return composeErrorMessage("Cannot inject the dependency " + dep + ' of "' + ctor.name + '" constructor. Reason:', error);
}

// node_modules/tsyringe/dist/esm5/types/disposable.js
function isDisposable(value) {
  if (typeof value.dispose !== "function")
    return false;
  var disposeFun = value.dispose;
  if (disposeFun.length > 0) {
    return false;
  }
  return true;
}

// node_modules/tsyringe/dist/esm5/interceptors.js
var PreResolutionInterceptors = function(_super) {
  __extends(PreResolutionInterceptors2, _super);
  function PreResolutionInterceptors2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return PreResolutionInterceptors2;
}(registry_base_default);
var PostResolutionInterceptors = function(_super) {
  __extends(PostResolutionInterceptors2, _super);
  function PostResolutionInterceptors2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return PostResolutionInterceptors2;
}(registry_base_default);
var Interceptors = /* @__PURE__ */ function() {
  function Interceptors2() {
    this.preResolution = new PreResolutionInterceptors();
    this.postResolution = new PostResolutionInterceptors();
  }
  return Interceptors2;
}();
var interceptors_default = Interceptors;

// node_modules/tsyringe/dist/esm5/dependency-container.js
var typeInfo = /* @__PURE__ */ new Map();
var InternalDependencyContainer = function() {
  function InternalDependencyContainer2(parent) {
    this.parent = parent;
    this._registry = new registry_default();
    this.interceptors = new interceptors_default();
    this.disposed = false;
    this.disposables = /* @__PURE__ */ new Set();
  }
  InternalDependencyContainer2.prototype.register = function(token, providerOrConstructor, options) {
    if (options === void 0) {
      options = { lifecycle: lifecycle_default.Transient };
    }
    this.ensureNotDisposed();
    var provider;
    if (!isProvider(providerOrConstructor)) {
      provider = { useClass: providerOrConstructor };
    } else {
      provider = providerOrConstructor;
    }
    if (isTokenProvider(provider)) {
      var path = [token];
      var tokenProvider = provider;
      while (tokenProvider != null) {
        var currentToken = tokenProvider.useToken;
        if (path.includes(currentToken)) {
          throw new Error("Token registration cycle detected! " + __spread(path, [currentToken]).join(" -> "));
        }
        path.push(currentToken);
        var registration = this._registry.get(currentToken);
        if (registration && isTokenProvider(registration.provider)) {
          tokenProvider = registration.provider;
        } else {
          tokenProvider = null;
        }
      }
    }
    if (options.lifecycle === lifecycle_default.Singleton || options.lifecycle == lifecycle_default.ContainerScoped || options.lifecycle == lifecycle_default.ResolutionScoped) {
      if (isValueProvider(provider) || isFactoryProvider(provider)) {
        throw new Error('Cannot use lifecycle "' + lifecycle_default[options.lifecycle] + '" with ValueProviders or FactoryProviders');
      }
    }
    this._registry.set(token, { provider, options });
    return this;
  };
  InternalDependencyContainer2.prototype.registerType = function(from, to) {
    this.ensureNotDisposed();
    if (isNormalToken(to)) {
      return this.register(from, {
        useToken: to
      });
    }
    return this.register(from, {
      useClass: to
    });
  };
  InternalDependencyContainer2.prototype.registerInstance = function(token, instance2) {
    this.ensureNotDisposed();
    return this.register(token, {
      useValue: instance2
    });
  };
  InternalDependencyContainer2.prototype.registerSingleton = function(from, to) {
    this.ensureNotDisposed();
    if (isNormalToken(from)) {
      if (isNormalToken(to)) {
        return this.register(from, {
          useToken: to
        }, { lifecycle: lifecycle_default.Singleton });
      } else if (to) {
        return this.register(from, {
          useClass: to
        }, { lifecycle: lifecycle_default.Singleton });
      }
      throw new Error('Cannot register a type name as a singleton without a "to" token');
    }
    var useClass = from;
    if (to && !isNormalToken(to)) {
      useClass = to;
    }
    return this.register(from, {
      useClass
    }, { lifecycle: lifecycle_default.Singleton });
  };
  InternalDependencyContainer2.prototype.resolve = function(token, context) {
    if (context === void 0) {
      context = new resolution_context_default();
    }
    this.ensureNotDisposed();
    var registration = this.getRegistration(token);
    if (!registration && isNormalToken(token)) {
      throw new Error('Attempted to resolve unregistered dependency token: "' + token.toString() + '"');
    }
    this.executePreResolutionInterceptor(token, "Single");
    if (registration) {
      var result = this.resolveRegistration(registration, context);
      this.executePostResolutionInterceptor(token, result, "Single");
      return result;
    }
    if (isConstructorToken(token)) {
      var result = this.construct(token, context);
      this.executePostResolutionInterceptor(token, result, "Single");
      return result;
    }
    throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
  };
  InternalDependencyContainer2.prototype.executePreResolutionInterceptor = function(token, resolutionType) {
    var e_1, _a;
    if (this.interceptors.preResolution.has(token)) {
      var remainingInterceptors = [];
      try {
        for (var _b = __values(this.interceptors.preResolution.getAll(token)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var interceptor = _c.value;
          if (interceptor.options.frequency != "Once") {
            remainingInterceptors.push(interceptor);
          }
          interceptor.callback(token, resolutionType);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      this.interceptors.preResolution.setAll(token, remainingInterceptors);
    }
  };
  InternalDependencyContainer2.prototype.executePostResolutionInterceptor = function(token, result, resolutionType) {
    var e_2, _a;
    if (this.interceptors.postResolution.has(token)) {
      var remainingInterceptors = [];
      try {
        for (var _b = __values(this.interceptors.postResolution.getAll(token)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var interceptor = _c.value;
          if (interceptor.options.frequency != "Once") {
            remainingInterceptors.push(interceptor);
          }
          interceptor.callback(token, result, resolutionType);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      this.interceptors.postResolution.setAll(token, remainingInterceptors);
    }
  };
  InternalDependencyContainer2.prototype.resolveRegistration = function(registration, context) {
    this.ensureNotDisposed();
    if (registration.options.lifecycle === lifecycle_default.ResolutionScoped && context.scopedResolutions.has(registration)) {
      return context.scopedResolutions.get(registration);
    }
    var isSingleton = registration.options.lifecycle === lifecycle_default.Singleton;
    var isContainerScoped = registration.options.lifecycle === lifecycle_default.ContainerScoped;
    var returnInstance = isSingleton || isContainerScoped;
    var resolved;
    if (isValueProvider(registration.provider)) {
      resolved = registration.provider.useValue;
    } else if (isTokenProvider(registration.provider)) {
      resolved = returnInstance ? registration.instance || (registration.instance = this.resolve(registration.provider.useToken, context)) : this.resolve(registration.provider.useToken, context);
    } else if (isClassProvider(registration.provider)) {
      resolved = returnInstance ? registration.instance || (registration.instance = this.construct(registration.provider.useClass, context)) : this.construct(registration.provider.useClass, context);
    } else if (isFactoryProvider(registration.provider)) {
      resolved = registration.provider.useFactory(this);
    } else {
      resolved = this.construct(registration.provider, context);
    }
    if (registration.options.lifecycle === lifecycle_default.ResolutionScoped) {
      context.scopedResolutions.set(registration, resolved);
    }
    return resolved;
  };
  InternalDependencyContainer2.prototype.resolveAll = function(token, context) {
    var _this = this;
    if (context === void 0) {
      context = new resolution_context_default();
    }
    this.ensureNotDisposed();
    var registrations = this.getAllRegistrations(token);
    if (!registrations && isNormalToken(token)) {
      throw new Error('Attempted to resolve unregistered dependency token: "' + token.toString() + '"');
    }
    this.executePreResolutionInterceptor(token, "All");
    if (registrations) {
      var result_1 = registrations.map(function(item) {
        return _this.resolveRegistration(item, context);
      });
      this.executePostResolutionInterceptor(token, result_1, "All");
      return result_1;
    }
    var result = [this.construct(token, context)];
    this.executePostResolutionInterceptor(token, result, "All");
    return result;
  };
  InternalDependencyContainer2.prototype.isRegistered = function(token, recursive) {
    if (recursive === void 0) {
      recursive = false;
    }
    this.ensureNotDisposed();
    return this._registry.has(token) || recursive && (this.parent || false) && this.parent.isRegistered(token, true);
  };
  InternalDependencyContainer2.prototype.reset = function() {
    this.ensureNotDisposed();
    this._registry.clear();
    this.interceptors.preResolution.clear();
    this.interceptors.postResolution.clear();
  };
  InternalDependencyContainer2.prototype.clearInstances = function() {
    var e_3, _a;
    this.ensureNotDisposed();
    try {
      for (var _b = __values(this._registry.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2), token = _d[0], registrations = _d[1];
        this._registry.setAll(token, registrations.filter(function(registration) {
          return !isValueProvider(registration.provider);
        }).map(function(registration) {
          registration.instance = void 0;
          return registration;
        }));
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
  };
  InternalDependencyContainer2.prototype.createChildContainer = function() {
    var e_4, _a;
    this.ensureNotDisposed();
    var childContainer = new InternalDependencyContainer2(this);
    try {
      for (var _b = __values(this._registry.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2), token = _d[0], registrations = _d[1];
        if (registrations.some(function(_a2) {
          var options = _a2.options;
          return options.lifecycle === lifecycle_default.ContainerScoped;
        })) {
          childContainer._registry.setAll(token, registrations.map(function(registration) {
            if (registration.options.lifecycle === lifecycle_default.ContainerScoped) {
              return {
                provider: registration.provider,
                options: registration.options
              };
            }
            return registration;
          }));
        }
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
    return childContainer;
  };
  InternalDependencyContainer2.prototype.beforeResolution = function(token, callback, options) {
    if (options === void 0) {
      options = { frequency: "Always" };
    }
    this.interceptors.preResolution.set(token, {
      callback,
      options
    });
  };
  InternalDependencyContainer2.prototype.afterResolution = function(token, callback, options) {
    if (options === void 0) {
      options = { frequency: "Always" };
    }
    this.interceptors.postResolution.set(token, {
      callback,
      options
    });
  };
  InternalDependencyContainer2.prototype.dispose = function() {
    return __awaiter(this, void 0, void 0, function() {
      var promises;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.disposed = true;
            promises = [];
            this.disposables.forEach(function(disposable) {
              var maybePromise = disposable.dispose();
              if (maybePromise) {
                promises.push(maybePromise);
              }
            });
            return [4, Promise.all(promises)];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  InternalDependencyContainer2.prototype.getRegistration = function(token) {
    if (this.isRegistered(token)) {
      return this._registry.get(token);
    }
    if (this.parent) {
      return this.parent.getRegistration(token);
    }
    return null;
  };
  InternalDependencyContainer2.prototype.getAllRegistrations = function(token) {
    if (this.isRegistered(token)) {
      return this._registry.getAll(token);
    }
    if (this.parent) {
      return this.parent.getAllRegistrations(token);
    }
    return null;
  };
  InternalDependencyContainer2.prototype.construct = function(ctor, context) {
    var _this = this;
    if (ctor instanceof DelayedConstructor) {
      return ctor.createProxy(function(target) {
        return _this.resolve(target, context);
      });
    }
    var instance2 = function() {
      var paramInfo = typeInfo.get(ctor);
      if (!paramInfo || paramInfo.length === 0) {
        if (ctor.length === 0) {
          return new ctor();
        } else {
          throw new Error('TypeInfo not known for "' + ctor.name + '"');
        }
      }
      var params = paramInfo.map(_this.resolveParams(context, ctor));
      return new (ctor.bind.apply(ctor, __spread([void 0], params)))();
    }();
    if (isDisposable(instance2)) {
      this.disposables.add(instance2);
    }
    return instance2;
  };
  InternalDependencyContainer2.prototype.resolveParams = function(context, ctor) {
    var _this = this;
    return function(param, idx) {
      var _a, _b, _c;
      try {
        if (isTokenDescriptor(param)) {
          if (isTransformDescriptor(param)) {
            return param.multiple ? (_a = _this.resolve(param.transform)).transform.apply(_a, __spread([_this.resolveAll(param.token)], param.transformArgs)) : (_b = _this.resolve(param.transform)).transform.apply(_b, __spread([_this.resolve(param.token, context)], param.transformArgs));
          } else {
            return param.multiple ? _this.resolveAll(param.token) : _this.resolve(param.token, context);
          }
        } else if (isTransformDescriptor(param)) {
          return (_c = _this.resolve(param.transform, context)).transform.apply(_c, __spread([_this.resolve(param.token, context)], param.transformArgs));
        }
        return _this.resolve(param, context);
      } catch (e) {
        throw new Error(formatErrorCtor(ctor, idx, e));
      }
    };
  };
  InternalDependencyContainer2.prototype.ensureNotDisposed = function() {
    if (this.disposed) {
      throw new Error("This container has been disposed, you cannot interact with a disposed container");
    }
  };
  return InternalDependencyContainer2;
}();
var instance = new InternalDependencyContainer();

// node_modules/tsyringe/dist/esm5/decorators/auto-injectable.js
function autoInjectable() {
  return function(target) {
    var paramInfo = getParamInfo(target);
    return function(_super) {
      __extends(class_1, _super);
      function class_1() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return _super.apply(this, __spread(args.concat(paramInfo.slice(args.length).map(function(type, index) {
          var _a, _b, _c;
          try {
            if (isTokenDescriptor(type)) {
              if (isTransformDescriptor(type)) {
                return type.multiple ? (_a = instance.resolve(type.transform)).transform.apply(_a, __spread([instance.resolveAll(type.token)], type.transformArgs)) : (_b = instance.resolve(type.transform)).transform.apply(_b, __spread([instance.resolve(type.token)], type.transformArgs));
              } else {
                return type.multiple ? instance.resolveAll(type.token) : instance.resolve(type.token);
              }
            } else if (isTransformDescriptor(type)) {
              return (_c = instance.resolve(type.transform)).transform.apply(_c, __spread([instance.resolve(type.token)], type.transformArgs));
            }
            return instance.resolve(type);
          } catch (e) {
            var argIndex = index + args.length;
            throw new Error(formatErrorCtor(target, argIndex, e));
          }
        })))) || this;
      }
      return class_1;
    }(target);
  };
}
var auto_injectable_default = autoInjectable;

// node_modules/tsyringe/dist/esm5/decorators/inject.js
function inject(token) {
  return defineInjectionTokenMetadata(token);
}
var inject_default = inject;

// node_modules/tsyringe/dist/esm5/decorators/injectable.js
function injectable() {
  return function(target) {
    typeInfo.set(target, getParamInfo(target));
  };
}
var injectable_default = injectable;

// node_modules/tsyringe/dist/esm5/decorators/registry.js
function registry(registrations) {
  if (registrations === void 0) {
    registrations = [];
  }
  return function(target) {
    registrations.forEach(function(_a) {
      var token = _a.token, options = _a.options, provider = __rest(_a, ["token", "options"]);
      return instance.register(token, provider, options);
    });
    return target;
  };
}
var registry_default2 = registry;

// node_modules/tsyringe/dist/esm5/decorators/singleton.js
function singleton() {
  return function(target) {
    injectable_default()(target);
    instance.registerSingleton(target);
  };
}
var singleton_default = singleton;

// node_modules/tsyringe/dist/esm5/decorators/inject-all.js
function injectAll(token) {
  var data = { token, multiple: true };
  return defineInjectionTokenMetadata(data);
}
var inject_all_default = injectAll;

// node_modules/tsyringe/dist/esm5/decorators/inject-all-with-transform.js
function injectAllWithTransform(token, transformer) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  var data = {
    token,
    multiple: true,
    transform: transformer,
    transformArgs: args
  };
  return defineInjectionTokenMetadata(data);
}
var inject_all_with_transform_default = injectAllWithTransform;

// node_modules/tsyringe/dist/esm5/decorators/inject-with-transform.js
function injectWithTransform(token, transformer) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  return defineInjectionTokenMetadata(token, {
    transformToken: transformer,
    args
  });
}
var inject_with_transform_default = injectWithTransform;

// node_modules/tsyringe/dist/esm5/decorators/scoped.js
function scoped(lifecycle, token) {
  return function(target) {
    injectable_default()(target);
    instance.register(token || target, target, {
      lifecycle
    });
  };
}

// node_modules/tsyringe/dist/esm5/factories/instance-caching-factory.js
function instanceCachingFactory(factoryFunc) {
  var instance2;
  return function(dependencyContainer) {
    if (instance2 == void 0) {
      instance2 = factoryFunc(dependencyContainer);
    }
    return instance2;
  };
}

// node_modules/tsyringe/dist/esm5/factories/instance-per-container-caching-factory.js
function instancePerContainerCachingFactory(factoryFunc) {
  var cache = /* @__PURE__ */ new WeakMap();
  return function(dependencyContainer) {
    var instance2 = cache.get(dependencyContainer);
    if (instance2 == void 0) {
      instance2 = factoryFunc(dependencyContainer);
      cache.set(dependencyContainer, instance2);
    }
    return instance2;
  };
}

// node_modules/tsyringe/dist/esm5/factories/predicate-aware-class-factory.js
function predicateAwareClassFactory(predicate, trueConstructor, falseConstructor, useCaching) {
  if (useCaching === void 0) {
    useCaching = true;
  }
  var instance2;
  var previousPredicate;
  return function(dependencyContainer) {
    var currentPredicate = predicate(dependencyContainer);
    if (!useCaching || previousPredicate !== currentPredicate) {
      if (previousPredicate = currentPredicate) {
        instance2 = dependencyContainer.resolve(trueConstructor);
      } else {
        instance2 = dependencyContainer.resolve(falseConstructor);
      }
    }
    return instance2;
  };
}

// node_modules/tsyringe/dist/esm5/index.js
if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
  throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
}
export {
  lifecycle_default as Lifecycle,
  auto_injectable_default as autoInjectable,
  instance as container,
  delay,
  inject_default as inject,
  inject_all_default as injectAll,
  inject_all_with_transform_default as injectAllWithTransform,
  inject_with_transform_default as injectWithTransform,
  injectable_default as injectable,
  instanceCachingFactory,
  instancePerContainerCachingFactory,
  isClassProvider,
  isFactoryProvider,
  isNormalToken,
  isTokenProvider,
  isValueProvider,
  predicateAwareClassFactory,
  registry_default2 as registry,
  scoped,
  singleton_default as singleton
};
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=tsyringe.js.map
