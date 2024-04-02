function Pv(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != "string" && !Array.isArray(r)) {
			for (const o in r)
				if (o !== "default" && !(o in e)) {
					const i = Object.getOwnPropertyDescriptor(r, o);
					i &&
						Object.defineProperty(
							e,
							o,
							i.get ? i : { enumerable: !0, get: () => r[o] }
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
	);
}
(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
		r(o);
	new MutationObserver((o) => {
		for (const i of o)
			if (i.type === "childList")
				for (const s of i.addedNodes)
					s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(o) {
		const i = {};
		return (
			o.integrity && (i.integrity = o.integrity),
			o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
			o.crossOrigin === "use-credentials"
				? (i.credentials = "include")
				: o.crossOrigin === "anonymous"
				? (i.credentials = "omit")
				: (i.credentials = "same-origin"),
			i
		);
	}
	function r(o) {
		if (o.ep) return;
		o.ep = !0;
		const i = n(o);
		fetch(o.href, i);
	}
})();
function qs(e) {
	return e &&
		e.__esModule &&
		Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
function tE(e) {
	if (e.__esModule) return e;
	var t = e.default;
	if (typeof t == "function") {
		var n = function r() {
			return this instanceof r
				? Reflect.construct(t, arguments, this.constructor)
				: t.apply(this, arguments);
		};
		n.prototype = t.prototype;
	} else n = {};
	return (
		Object.defineProperty(n, "__esModule", { value: !0 }),
		Object.keys(e).forEach(function (r) {
			var o = Object.getOwnPropertyDescriptor(e, r);
			Object.defineProperty(
				n,
				r,
				o.get
					? o
					: {
							enumerable: !0,
							get: function () {
								return e[r];
							},
					  }
			);
		}),
		n
	);
}
var kv = { exports: {} },
	Vl = {},
	Nv = { exports: {} },
	pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gs = Symbol.for("react.element"),
	nE = Symbol.for("react.portal"),
	rE = Symbol.for("react.fragment"),
	oE = Symbol.for("react.strict_mode"),
	iE = Symbol.for("react.profiler"),
	sE = Symbol.for("react.provider"),
	aE = Symbol.for("react.context"),
	lE = Symbol.for("react.forward_ref"),
	uE = Symbol.for("react.suspense"),
	cE = Symbol.for("react.memo"),
	dE = Symbol.for("react.lazy"),
	Kp = Symbol.iterator;
function fE(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Kp && e[Kp]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var Tv = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	_v = Object.assign,
	Dv = {};
function wi(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Dv),
		(this.updater = n || Tv);
}
wi.prototype.isReactComponent = {};
wi.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
wi.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Lv() {}
Lv.prototype = wi.prototype;
function ef(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Dv),
		(this.updater = n || Tv);
}
var tf = (ef.prototype = new Lv());
tf.constructor = ef;
_v(tf, wi.prototype);
tf.isPureReactComponent = !0;
var Wp = Array.isArray,
	Iv = Object.prototype.hasOwnProperty,
	nf = { current: null },
	Av = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mv(e, t, n) {
	var r,
		o = {},
		i = null,
		s = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (s = t.ref),
		t.key !== void 0 && (i = "" + t.key),
		t))
			Iv.call(t, r) && !Av.hasOwnProperty(r) && (o[r] = t[r]);
	var a = arguments.length - 2;
	if (a === 1) o.children = n;
	else if (1 < a) {
		for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
		o.children = l;
	}
	if (e && e.defaultProps)
		for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
	return {
		$$typeof: Gs,
		type: e,
		key: i,
		ref: s,
		props: o,
		_owner: nf.current,
	};
}
function pE(e, t) {
	return {
		$$typeof: Gs,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function rf(e) {
	return typeof e == "object" && e !== null && e.$$typeof === Gs;
}
function hE(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Qp = /\/+/g;
function Fu(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? hE("" + e.key)
		: t.toString(36);
}
function $a(e, t, n, r, o) {
	var i = typeof e;
	(i === "undefined" || i === "boolean") && (e = null);
	var s = !1;
	if (e === null) s = !0;
	else
		switch (i) {
			case "string":
			case "number":
				s = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case Gs:
					case nE:
						s = !0;
				}
		}
	if (s)
		return (
			(s = e),
			(o = o(s)),
			(e = r === "" ? "." + Fu(s, 0) : r),
			Wp(o)
				? ((n = ""),
				  e != null && (n = e.replace(Qp, "$&/") + "/"),
				  $a(o, t, n, "", function (u) {
						return u;
				  }))
				: o != null &&
				  (rf(o) &&
						(o = pE(
							o,
							n +
								(!o.key || (s && s.key === o.key)
									? ""
									: ("" + o.key).replace(Qp, "$&/") + "/") +
								e
						)),
				  t.push(o)),
			1
		);
	if (((s = 0), (r = r === "" ? "." : r + ":"), Wp(e)))
		for (var a = 0; a < e.length; a++) {
			i = e[a];
			var l = r + Fu(i, a);
			s += $a(i, t, n, l, o);
		}
	else if (((l = fE(e)), typeof l == "function"))
		for (e = l.call(e), a = 0; !(i = e.next()).done; )
			(i = i.value), (l = r + Fu(i, a++)), (s += $a(i, t, n, l, o));
	else if (i === "object")
		throw (
			((t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: t) +
					"). If you meant to render a collection of children, use an array instead."
			))
		);
	return s;
}
function ha(e, t, n) {
	if (e == null) return e;
	var r = [],
		o = 0;
	return (
		$a(e, r, "", "", function (i) {
			return t.call(n, i, o++);
		}),
		r
	);
}
function mE(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var wt = { current: null },
	Fa = { transition: null },
	vE = {
		ReactCurrentDispatcher: wt,
		ReactCurrentBatchConfig: Fa,
		ReactCurrentOwner: nf,
	};
pe.Children = {
	map: ha,
	forEach: function (e, t, n) {
		ha(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			ha(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			ha(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!rf(e))
			throw Error(
				"React.Children.only expected to receive a single React element child."
			);
		return e;
	},
};
pe.Component = wi;
pe.Fragment = rE;
pe.Profiler = iE;
pe.PureComponent = ef;
pe.StrictMode = oE;
pe.Suspense = uE;
pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vE;
pe.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				"."
		);
	var r = _v({}, e.props),
		o = e.key,
		i = e.ref,
		s = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((i = t.ref), (s = nf.current)),
			t.key !== void 0 && (o = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var a = e.type.defaultProps;
		for (l in t)
			Iv.call(t, l) &&
				!Av.hasOwnProperty(l) &&
				(r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
	}
	var l = arguments.length - 2;
	if (l === 1) r.children = n;
	else if (1 < l) {
		a = Array(l);
		for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
		r.children = a;
	}
	return { $$typeof: Gs, type: e.type, key: o, ref: i, props: r, _owner: s };
};
pe.createContext = function (e) {
	return (
		(e = {
			$$typeof: aE,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: sE, _context: e }),
		(e.Consumer = e)
	);
};
pe.createElement = Mv;
pe.createFactory = function (e) {
	var t = Mv.bind(null, e);
	return (t.type = e), t;
};
pe.createRef = function () {
	return { current: null };
};
pe.forwardRef = function (e) {
	return { $$typeof: lE, render: e };
};
pe.isValidElement = rf;
pe.lazy = function (e) {
	return { $$typeof: dE, _payload: { _status: -1, _result: e }, _init: mE };
};
pe.memo = function (e, t) {
	return { $$typeof: cE, type: e, compare: t === void 0 ? null : t };
};
pe.startTransition = function (e) {
	var t = Fa.transition;
	Fa.transition = {};
	try {
		e();
	} finally {
		Fa.transition = t;
	}
};
pe.unstable_act = function () {
	throw Error("act(...) is not supported in production builds of React.");
};
pe.useCallback = function (e, t) {
	return wt.current.useCallback(e, t);
};
pe.useContext = function (e) {
	return wt.current.useContext(e);
};
pe.useDebugValue = function () {};
pe.useDeferredValue = function (e) {
	return wt.current.useDeferredValue(e);
};
pe.useEffect = function (e, t) {
	return wt.current.useEffect(e, t);
};
pe.useId = function () {
	return wt.current.useId();
};
pe.useImperativeHandle = function (e, t, n) {
	return wt.current.useImperativeHandle(e, t, n);
};
pe.useInsertionEffect = function (e, t) {
	return wt.current.useInsertionEffect(e, t);
};
pe.useLayoutEffect = function (e, t) {
	return wt.current.useLayoutEffect(e, t);
};
pe.useMemo = function (e, t) {
	return wt.current.useMemo(e, t);
};
pe.useReducer = function (e, t, n) {
	return wt.current.useReducer(e, t, n);
};
pe.useRef = function (e) {
	return wt.current.useRef(e);
};
pe.useState = function (e) {
	return wt.current.useState(e);
};
pe.useSyncExternalStore = function (e, t, n) {
	return wt.current.useSyncExternalStore(e, t, n);
};
pe.useTransition = function () {
	return wt.current.useTransition();
};
pe.version = "18.2.0";
Nv.exports = pe;
var p = Nv.exports;
const ie = qs(p),
	xs = Pv({ __proto__: null, default: ie }, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yE = p,
	gE = Symbol.for("react.element"),
	xE = Symbol.for("react.fragment"),
	wE = Object.prototype.hasOwnProperty,
	SE =
		yE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	EE = { key: !0, ref: !0, __self: !0, __source: !0 };
function $v(e, t, n) {
	var r,
		o = {},
		i = null,
		s = null;
	n !== void 0 && (i = "" + n),
		t.key !== void 0 && (i = "" + t.key),
		t.ref !== void 0 && (s = t.ref);
	for (r in t) wE.call(t, r) && !EE.hasOwnProperty(r) && (o[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
	return {
		$$typeof: gE,
		type: e,
		key: i,
		ref: s,
		props: o,
		_owner: SE.current,
	};
}
Vl.Fragment = xE;
Vl.jsx = $v;
Vl.jsxs = $v;
kv.exports = Vl;
var c = kv.exports,
	Tc = {},
	Fv = { exports: {} },
	Wt = {},
	Uv = { exports: {} },
	Bv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(T, M) {
		var F = T.length;
		T.push(M);
		e: for (; 0 < F; ) {
			var Q = (F - 1) >>> 1,
				se = T[Q];
			if (0 < o(se, M)) (T[Q] = M), (T[F] = se), (F = Q);
			else break e;
		}
	}
	function n(T) {
		return T.length === 0 ? null : T[0];
	}
	function r(T) {
		if (T.length === 0) return null;
		var M = T[0],
			F = T.pop();
		if (F !== M) {
			T[0] = F;
			e: for (var Q = 0, se = T.length, Ee = se >>> 1; Q < Ee; ) {
				var fe = 2 * (Q + 1) - 1,
					ce = T[fe],
					re = fe + 1,
					nt = T[re];
				if (0 > o(ce, F))
					re < se && 0 > o(nt, ce)
						? ((T[Q] = nt), (T[re] = F), (Q = re))
						: ((T[Q] = ce), (T[fe] = F), (Q = fe));
				else if (re < se && 0 > o(nt, F))
					(T[Q] = nt), (T[re] = F), (Q = re);
				else break e;
			}
		}
		return M;
	}
	function o(T, M) {
		var F = T.sortIndex - M.sortIndex;
		return F !== 0 ? F : T.id - M.id;
	}
	if (
		typeof performance == "object" &&
		typeof performance.now == "function"
	) {
		var i = performance;
		e.unstable_now = function () {
			return i.now();
		};
	} else {
		var s = Date,
			a = s.now();
		e.unstable_now = function () {
			return s.now() - a;
		};
	}
	var l = [],
		u = [],
		d = 1,
		f = null,
		h = 3,
		m = !1,
		y = !1,
		w = !1,
		S = typeof setTimeout == "function" ? setTimeout : null,
		g = typeof clearTimeout == "function" ? clearTimeout : null,
		x = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function v(T) {
		for (var M = n(u); M !== null; ) {
			if (M.callback === null) r(u);
			else if (M.startTime <= T)
				r(u), (M.sortIndex = M.expirationTime), t(l, M);
			else break;
			M = n(u);
		}
	}
	function C(T) {
		if (((w = !1), v(T), !y))
			if (n(l) !== null) (y = !0), Y(j);
			else {
				var M = n(u);
				M !== null && K(C, M.startTime - T);
			}
	}
	function j(T, M) {
		(y = !1), w && ((w = !1), g(R), (R = -1)), (m = !0);
		var F = h;
		try {
			for (
				v(M), f = n(l);
				f !== null && (!(f.expirationTime > M) || (T && !L()));

			) {
				var Q = f.callback;
				if (typeof Q == "function") {
					(f.callback = null), (h = f.priorityLevel);
					var se = Q(f.expirationTime <= M);
					(M = e.unstable_now()),
						typeof se == "function"
							? (f.callback = se)
							: f === n(l) && r(l),
						v(M);
				} else r(l);
				f = n(l);
			}
			if (f !== null) var Ee = !0;
			else {
				var fe = n(u);
				fe !== null && K(C, fe.startTime - M), (Ee = !1);
			}
			return Ee;
		} finally {
			(f = null), (h = F), (m = !1);
		}
	}
	var E = !1,
		O = null,
		R = -1,
		D = 5,
		N = -1;
	function L() {
		return !(e.unstable_now() - N < D);
	}
	function $() {
		if (O !== null) {
			var T = e.unstable_now();
			N = T;
			var M = !0;
			try {
				M = O(!0, T);
			} finally {
				M ? B() : ((E = !1), (O = null));
			}
		} else E = !1;
	}
	var B;
	if (typeof x == "function")
		B = function () {
			x($);
		};
	else if (typeof MessageChannel < "u") {
		var J = new MessageChannel(),
			oe = J.port2;
		(J.port1.onmessage = $),
			(B = function () {
				oe.postMessage(null);
			});
	} else
		B = function () {
			S($, 0);
		};
	function Y(T) {
		(O = T), E || ((E = !0), B());
	}
	function K(T, M) {
		R = S(function () {
			T(e.unstable_now());
		}, M);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (T) {
			T.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			y || m || ((y = !0), Y(j));
		}),
		(e.unstable_forceFrameRate = function (T) {
			0 > T || 125 < T
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
				  )
				: (D = 0 < T ? Math.floor(1e3 / T) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return h;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(l);
		}),
		(e.unstable_next = function (T) {
			switch (h) {
				case 1:
				case 2:
				case 3:
					var M = 3;
					break;
				default:
					M = h;
			}
			var F = h;
			h = M;
			try {
				return T();
			} finally {
				h = F;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (T, M) {
			switch (T) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					T = 3;
			}
			var F = h;
			h = T;
			try {
				return M();
			} finally {
				h = F;
			}
		}),
		(e.unstable_scheduleCallback = function (T, M, F) {
			var Q = e.unstable_now();
			switch (
				(typeof F == "object" && F !== null
					? ((F = F.delay),
					  (F = typeof F == "number" && 0 < F ? Q + F : Q))
					: (F = Q),
				T)
			) {
				case 1:
					var se = -1;
					break;
				case 2:
					se = 250;
					break;
				case 5:
					se = 1073741823;
					break;
				case 4:
					se = 1e4;
					break;
				default:
					se = 5e3;
			}
			return (
				(se = F + se),
				(T = {
					id: d++,
					callback: M,
					priorityLevel: T,
					startTime: F,
					expirationTime: se,
					sortIndex: -1,
				}),
				F > Q
					? ((T.sortIndex = F),
					  t(u, T),
					  n(l) === null &&
							T === n(u) &&
							(w ? (g(R), (R = -1)) : (w = !0), K(C, F - Q)))
					: ((T.sortIndex = se), t(l, T), y || m || ((y = !0), Y(j))),
				T
			);
		}),
		(e.unstable_shouldYield = L),
		(e.unstable_wrapCallback = function (T) {
			var M = h;
			return function () {
				var F = h;
				h = M;
				try {
					return T.apply(this, arguments);
				} finally {
					h = F;
				}
			};
		});
})(Bv);
Uv.exports = Bv;
var CE = Uv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zv = p,
	Bt = CE;
function A(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
			n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var Hv = new Set(),
	ws = {};
function jo(e, t) {
	ri(e, t), ri(e + "Capture", t);
}
function ri(e, t) {
	for (ws[e] = t, e = 0; e < t.length; e++) Hv.add(t[e]);
}
var or = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	_c = Object.prototype.hasOwnProperty,
	jE =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Vp = {},
	qp = {};
function RE(e) {
	return _c.call(qp, e)
		? !0
		: _c.call(Vp, e)
		? !1
		: jE.test(e)
		? (qp[e] = !0)
		: ((Vp[e] = !0), !1);
}
function OE(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)),
				  e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function bE(e, t, n, r) {
	if (t === null || typeof t > "u" || OE(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function St(e, t, n, r, o, i, s) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = o),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = i),
		(this.removeEmptyString = s);
}
var ft = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		ft[e] = new St(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	ft[t] = new St(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	ft[e] = new St(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	ft[e] = new St(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		ft[e] = new St(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	ft[e] = new St(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	ft[e] = new St(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	ft[e] = new St(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	ft[e] = new St(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var of = /[\-:]([a-z])/g;
function sf(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(of, sf);
		ft[t] = new St(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(of, sf);
		ft[t] = new St(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(of, sf);
	ft[t] = new St(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	ft[e] = new St(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ft.xlinkHref = new St(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1
);
["src", "href", "action", "formAction"].forEach(function (e) {
	ft[e] = new St(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function af(e, t, n, r) {
	var o = ft.hasOwnProperty(t) ? ft[t] : null;
	(o !== null
		? o.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== "o" && t[0] !== "O") ||
		  (t[1] !== "n" && t[1] !== "N")) &&
		(bE(t, n, o, r) && (n = null),
		r || o === null
			? RE(t) &&
			  (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: o.mustUseProperty
			? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
			: ((t = o.attributeName),
			  (r = o.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((o = o.type),
					  (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var dr = zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	ma = Symbol.for("react.element"),
	$o = Symbol.for("react.portal"),
	Fo = Symbol.for("react.fragment"),
	lf = Symbol.for("react.strict_mode"),
	Dc = Symbol.for("react.profiler"),
	Kv = Symbol.for("react.provider"),
	Wv = Symbol.for("react.context"),
	uf = Symbol.for("react.forward_ref"),
	Lc = Symbol.for("react.suspense"),
	Ic = Symbol.for("react.suspense_list"),
	cf = Symbol.for("react.memo"),
	yr = Symbol.for("react.lazy"),
	Qv = Symbol.for("react.offscreen"),
	Gp = Symbol.iterator;
function $i(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Gp && e[Gp]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var Me = Object.assign,
	Uu;
function Zi(e) {
	if (Uu === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			Uu = (t && t[1]) || "";
		}
	return (
		`
` +
		Uu +
		e
	);
}
var Bu = !1;
function zu(e, t) {
	if (!e || Bu) return "";
	Bu = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == "string") {
			for (
				var o = u.stack.split(`
`),
					i = r.stack.split(`
`),
					s = o.length - 1,
					a = i.length - 1;
				1 <= s && 0 <= a && o[s] !== i[a];

			)
				a--;
			for (; 1 <= s && 0 <= a; s--, a--)
				if (o[s] !== i[a]) {
					if (s !== 1 || a !== 1)
						do
							if ((s--, a--, 0 > a || o[s] !== i[a])) {
								var l =
									`
` + o[s].replace(" at new ", " at ");
								return (
									e.displayName &&
										l.includes("<anonymous>") &&
										(l = l.replace(
											"<anonymous>",
											e.displayName
										)),
									l
								);
							}
						while (1 <= s && 0 <= a);
					break;
				}
		}
	} finally {
		(Bu = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? Zi(e) : "";
}
function PE(e) {
	switch (e.tag) {
		case 5:
			return Zi(e.type);
		case 16:
			return Zi("Lazy");
		case 13:
			return Zi("Suspense");
		case 19:
			return Zi("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = zu(e.type, !1)), e;
		case 11:
			return (e = zu(e.type.render, !1)), e;
		case 1:
			return (e = zu(e.type, !0)), e;
		default:
			return "";
	}
}
function Ac(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case Fo:
			return "Fragment";
		case $o:
			return "Portal";
		case Dc:
			return "Profiler";
		case lf:
			return "StrictMode";
		case Lc:
			return "Suspense";
		case Ic:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case Wv:
				return (e.displayName || "Context") + ".Consumer";
			case Kv:
				return (e._context.displayName || "Context") + ".Provider";
			case uf:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e =
							e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case cf:
				return (
					(t = e.displayName || null),
					t !== null ? t : Ac(e.type) || "Memo"
				);
			case yr:
				(t = e._payload), (e = e._init);
				try {
					return Ac(e(t));
				} catch {}
		}
	return null;
}
function kE(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName ||
					(e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return Ac(t);
		case 8:
			return t === lf ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t;
	}
	return null;
}
function Ar(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function Vv(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function NE(e) {
	var t = Vv(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var o = n.get,
			i = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return o.call(this);
				},
				set: function (s) {
					(r = "" + s), i.call(this, s);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (s) {
					r = "" + s;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function va(e) {
	e._valueTracker || (e._valueTracker = NE(e));
}
function qv(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = Vv(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function ol(e) {
	if (
		((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
	)
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Mc(e, t) {
	var n = t.checked;
	return Me({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Xp(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = Ar(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function Gv(e, t) {
	(t = t.checked), t != null && af(e, "checked", t, !1);
}
function $c(e, t) {
	Gv(e, t);
	var n = Ar(t.value),
		r = t.type;
	if (n != null)
		r === "number"
			? ((n === 0 && e.value === "") || e.value != n) &&
			  (e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return;
	}
	t.hasOwnProperty("value")
		? Fc(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && Fc(e, t.type, Ar(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Jp(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (
			!(
				(r !== "submit" && r !== "reset") ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n);
}
function Fc(e, t, n) {
	(t !== "number" || ol(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var es = Array.isArray;
function Jo(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
		for (n = 0; n < e.length; n++)
			(o = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== o && (e[n].selected = o),
				o && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + Ar(n), t = null, o = 0; o < e.length; o++) {
			if (e[o].value === n) {
				(e[o].selected = !0), r && (e[o].defaultSelected = !0);
				return;
			}
			t !== null || e[o].disabled || (t = e[o]);
		}
		t !== null && (t.selected = !0);
	}
}
function Uc(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
	return Me({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function Yp(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(A(92));
			if (es(n)) {
				if (1 < n.length) throw Error(A(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: Ar(n) };
}
function Xv(e, t) {
	var n = Ar(t.value),
		r = Ar(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function Zp(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue &&
		t !== "" &&
		t !== null &&
		(e.value = t);
}
function Jv(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function Bc(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? Jv(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: e;
}
var ya,
	Yv = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, r, o) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, o);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t;
		else {
			for (
				ya = ya || document.createElement("div"),
					ya.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = ya.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Ss(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var is = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	TE = ["Webkit", "ms", "Moz", "O"];
Object.keys(is).forEach(function (e) {
	TE.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (is[t] = is[e]);
	});
});
function Zv(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n ||
		  typeof t != "number" ||
		  t === 0 ||
		  (is.hasOwnProperty(e) && is[e])
		? ("" + t).trim()
		: t + "px";
}
function ey(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				o = Zv(n, t[n], r);
			n === "float" && (n = "cssFloat"),
				r ? e.setProperty(n, o) : (e[n] = o);
		}
}
var _E = Me(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
);
function zc(e, t) {
	if (t) {
		if (_E[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(A(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(A(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(A(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(A(62));
	}
}
function Hc(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0;
	}
}
var Kc = null;
function df(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Wc = null,
	Yo = null,
	Zo = null;
function eh(e) {
	if ((e = Ys(e))) {
		if (typeof Wc != "function") throw Error(A(280));
		var t = e.stateNode;
		t && ((t = Yl(t)), Wc(e.stateNode, e.type, t));
	}
}
function ty(e) {
	Yo ? (Zo ? Zo.push(e) : (Zo = [e])) : (Yo = e);
}
function ny() {
	if (Yo) {
		var e = Yo,
			t = Zo;
		if (((Zo = Yo = null), eh(e), t))
			for (e = 0; e < t.length; e++) eh(t[e]);
	}
}
function ry(e, t) {
	return e(t);
}
function oy() {}
var Hu = !1;
function iy(e, t, n) {
	if (Hu) return e(t, n);
	Hu = !0;
	try {
		return ry(e, t, n);
	} finally {
		(Hu = !1), (Yo !== null || Zo !== null) && (oy(), ny());
	}
}
function Es(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Yl(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(A(231, t, typeof n));
	return n;
}
var Qc = !1;
if (or)
	try {
		var Fi = {};
		Object.defineProperty(Fi, "passive", {
			get: function () {
				Qc = !0;
			},
		}),
			window.addEventListener("test", Fi, Fi),
			window.removeEventListener("test", Fi, Fi);
	} catch {
		Qc = !1;
	}
function DE(e, t, n, r, o, i, s, a, l) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (d) {
		this.onError(d);
	}
}
var ss = !1,
	il = null,
	sl = !1,
	Vc = null,
	LE = {
		onError: function (e) {
			(ss = !0), (il = e);
		},
	};
function IE(e, t, n, r, o, i, s, a, l) {
	(ss = !1), (il = null), DE.apply(LE, arguments);
}
function AE(e, t, n, r, o, i, s, a, l) {
	if ((IE.apply(this, arguments), ss)) {
		if (ss) {
			var u = il;
			(ss = !1), (il = null);
		} else throw Error(A(198));
		sl || ((sl = !0), (Vc = u));
	}
}
function Ro(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function sy(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null &&
				((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function th(e) {
	if (Ro(e) !== e) throw Error(A(188));
}
function ME(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = Ro(e)), t === null)) throw Error(A(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var o = n.return;
		if (o === null) break;
		var i = o.alternate;
		if (i === null) {
			if (((r = o.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (o.child === i.child) {
			for (i = o.child; i; ) {
				if (i === n) return th(o), e;
				if (i === r) return th(o), t;
				i = i.sibling;
			}
			throw Error(A(188));
		}
		if (n.return !== r.return) (n = o), (r = i);
		else {
			for (var s = !1, a = o.child; a; ) {
				if (a === n) {
					(s = !0), (n = o), (r = i);
					break;
				}
				if (a === r) {
					(s = !0), (r = o), (n = i);
					break;
				}
				a = a.sibling;
			}
			if (!s) {
				for (a = i.child; a; ) {
					if (a === n) {
						(s = !0), (n = i), (r = o);
						break;
					}
					if (a === r) {
						(s = !0), (r = i), (n = o);
						break;
					}
					a = a.sibling;
				}
				if (!s) throw Error(A(189));
			}
		}
		if (n.alternate !== r) throw Error(A(190));
	}
	if (n.tag !== 3) throw Error(A(188));
	return n.stateNode.current === n ? e : t;
}
function ay(e) {
	return (e = ME(e)), e !== null ? ly(e) : null;
}
function ly(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = ly(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var uy = Bt.unstable_scheduleCallback,
	nh = Bt.unstable_cancelCallback,
	$E = Bt.unstable_shouldYield,
	FE = Bt.unstable_requestPaint,
	ze = Bt.unstable_now,
	UE = Bt.unstable_getCurrentPriorityLevel,
	ff = Bt.unstable_ImmediatePriority,
	cy = Bt.unstable_UserBlockingPriority,
	al = Bt.unstable_NormalPriority,
	BE = Bt.unstable_LowPriority,
	dy = Bt.unstable_IdlePriority,
	ql = null,
	Fn = null;
function zE(e) {
	if (Fn && typeof Fn.onCommitFiberRoot == "function")
		try {
			Fn.onCommitFiberRoot(
				ql,
				e,
				void 0,
				(e.current.flags & 128) === 128
			);
		} catch {}
}
var On = Math.clz32 ? Math.clz32 : WE,
	HE = Math.log,
	KE = Math.LN2;
function WE(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((HE(e) / KE) | 0)) | 0;
}
var ga = 64,
	xa = 4194304;
function ts(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function ll(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		o = e.suspendedLanes,
		i = e.pingedLanes,
		s = n & 268435455;
	if (s !== 0) {
		var a = s & ~o;
		a !== 0 ? (r = ts(a)) : ((i &= s), i !== 0 && (r = ts(i)));
	} else (s = n & ~o), s !== 0 ? (r = ts(s)) : i !== 0 && (r = ts(i));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & o) &&
		((o = r & -r),
		(i = t & -t),
		o >= i || (o === 16 && (i & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - On(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
	return r;
}
function QE(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function VE(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			o = e.expirationTimes,
			i = e.pendingLanes;
		0 < i;

	) {
		var s = 31 - On(i),
			a = 1 << s,
			l = o[s];
		l === -1
			? (!(a & n) || a & r) && (o[s] = QE(a, t))
			: l <= t && (e.expiredLanes |= a),
			(i &= ~a);
	}
}
function qc(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function fy() {
	var e = ga;
	return (ga <<= 1), !(ga & 4194240) && (ga = 64), e;
}
function Ku(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function Xs(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - On(t)),
		(e[t] = n);
}
function qE(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var o = 31 - On(n),
			i = 1 << o;
		(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
	}
}
function pf(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - On(n),
			o = 1 << r;
		(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
	}
}
var we = 0;
function py(e) {
	return (
		(e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
	);
}
var hy,
	hf,
	my,
	vy,
	yy,
	Gc = !1,
	wa = [],
	br = null,
	Pr = null,
	kr = null,
	Cs = new Map(),
	js = new Map(),
	Sr = [],
	GE =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" "
		);
function rh(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			br = null;
			break;
		case "dragenter":
		case "dragleave":
			Pr = null;
			break;
		case "mouseover":
		case "mouseout":
			kr = null;
			break;
		case "pointerover":
		case "pointerout":
			Cs.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			js.delete(t.pointerId);
	}
}
function Ui(e, t, n, r, o, i) {
	return e === null || e.nativeEvent !== i
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: i,
				targetContainers: [o],
		  }),
		  t !== null && ((t = Ys(t)), t !== null && hf(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  o !== null && t.indexOf(o) === -1 && t.push(o),
		  e);
}
function XE(e, t, n, r, o) {
	switch (t) {
		case "focusin":
			return (br = Ui(br, e, t, n, r, o)), !0;
		case "dragenter":
			return (Pr = Ui(Pr, e, t, n, r, o)), !0;
		case "mouseover":
			return (kr = Ui(kr, e, t, n, r, o)), !0;
		case "pointerover":
			var i = o.pointerId;
			return Cs.set(i, Ui(Cs.get(i) || null, e, t, n, r, o)), !0;
		case "gotpointercapture":
			return (
				(i = o.pointerId),
				js.set(i, Ui(js.get(i) || null, e, t, n, r, o)),
				!0
			);
	}
	return !1;
}
function gy(e) {
	var t = no(e.target);
	if (t !== null) {
		var n = Ro(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = sy(n)), t !== null)) {
					(e.blockedOn = t),
						yy(e.priority, function () {
							my(n);
						});
					return;
				}
			} else if (
				t === 3 &&
				n.stateNode.current.memoizedState.isDehydrated
			) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Ua(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Xc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Kc = r), n.target.dispatchEvent(r), (Kc = null);
		} else return (t = Ys(n)), t !== null && hf(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function oh(e, t, n) {
	Ua(e) && n.delete(t);
}
function JE() {
	(Gc = !1),
		br !== null && Ua(br) && (br = null),
		Pr !== null && Ua(Pr) && (Pr = null),
		kr !== null && Ua(kr) && (kr = null),
		Cs.forEach(oh),
		js.forEach(oh);
}
function Bi(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Gc ||
			((Gc = !0),
			Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority, JE)));
}
function Rs(e) {
	function t(o) {
		return Bi(o, e);
	}
	if (0 < wa.length) {
		Bi(wa[0], e);
		for (var n = 1; n < wa.length; n++) {
			var r = wa[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		br !== null && Bi(br, e),
			Pr !== null && Bi(Pr, e),
			kr !== null && Bi(kr, e),
			Cs.forEach(t),
			js.forEach(t),
			n = 0;
		n < Sr.length;
		n++
	)
		(r = Sr[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Sr.length && ((n = Sr[0]), n.blockedOn === null); )
		gy(n), n.blockedOn === null && Sr.shift();
}
var ei = dr.ReactCurrentBatchConfig,
	ul = !0;
function YE(e, t, n, r) {
	var o = we,
		i = ei.transition;
	ei.transition = null;
	try {
		(we = 1), mf(e, t, n, r);
	} finally {
		(we = o), (ei.transition = i);
	}
}
function ZE(e, t, n, r) {
	var o = we,
		i = ei.transition;
	ei.transition = null;
	try {
		(we = 4), mf(e, t, n, r);
	} finally {
		(we = o), (ei.transition = i);
	}
}
function mf(e, t, n, r) {
	if (ul) {
		var o = Xc(e, t, n, r);
		if (o === null) ec(e, t, r, cl, n), rh(e, r);
		else if (XE(o, e, t, n, r)) r.stopPropagation();
		else if ((rh(e, r), t & 4 && -1 < GE.indexOf(e))) {
			for (; o !== null; ) {
				var i = Ys(o);
				if (
					(i !== null && hy(i),
					(i = Xc(e, t, n, r)),
					i === null && ec(e, t, r, cl, n),
					i === o)
				)
					break;
				o = i;
			}
			o !== null && r.stopPropagation();
		} else ec(e, t, r, null, n);
	}
}
var cl = null;
function Xc(e, t, n, r) {
	if (((cl = null), (e = df(r)), (e = no(e)), e !== null))
		if (((t = Ro(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = sy(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (cl = e), null;
}
function xy(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (UE()) {
				case ff:
					return 1;
				case cy:
					return 4;
				case al:
				case BE:
					return 16;
				case dy:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var Cr = null,
	vf = null,
	Ba = null;
function wy() {
	if (Ba) return Ba;
	var e,
		t = vf,
		n = t.length,
		r,
		o = "value" in Cr ? Cr.value : Cr.textContent,
		i = o.length;
	for (e = 0; e < n && t[e] === o[e]; e++);
	var s = n - e;
	for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
	return (Ba = o.slice(e, 1 < r ? 1 - r : void 0));
}
function za(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function Sa() {
	return !0;
}
function ih() {
	return !1;
}
function Qt(e) {
	function t(n, r, o, i, s) {
		(this._reactName = n),
			(this._targetInst = o),
			(this.type = r),
			(this.nativeEvent = i),
			(this.target = s),
			(this.currentTarget = null);
		for (var a in e)
			e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
		return (
			(this.isDefaultPrevented = (
				i.defaultPrevented != null
					? i.defaultPrevented
					: i.returnValue === !1
			)
				? Sa
				: ih),
			(this.isPropagationStopped = ih),
			this
		);
	}
	return (
		Me(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" &&
						  (n.returnValue = !1),
					(this.isDefaultPrevented = Sa));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" &&
						  (n.cancelBubble = !0),
					(this.isPropagationStopped = Sa));
			},
			persist: function () {},
			isPersistent: Sa,
		}),
		t
	);
}
var Si = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	yf = Qt(Si),
	Js = Me({}, Si, { view: 0, detail: 0 }),
	eC = Qt(Js),
	Wu,
	Qu,
	zi,
	Gl = Me({}, Js, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: gf,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== zi &&
						(zi && e.type === "mousemove"
							? ((Wu = e.screenX - zi.screenX),
							  (Qu = e.screenY - zi.screenY))
							: (Qu = Wu = 0),
						(zi = e)),
				  Wu);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : Qu;
		},
	}),
	sh = Qt(Gl),
	tC = Me({}, Gl, { dataTransfer: 0 }),
	nC = Qt(tC),
	rC = Me({}, Js, { relatedTarget: 0 }),
	Vu = Qt(rC),
	oC = Me({}, Si, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	iC = Qt(oC),
	sC = Me({}, Si, {
		clipboardData: function (e) {
			return "clipboardData" in e
				? e.clipboardData
				: window.clipboardData;
		},
	}),
	aC = Qt(sC),
	lC = Me({}, Si, { data: 0 }),
	ah = Qt(lC),
	uC = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	cC = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	dC = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function fC(e) {
	var t = this.nativeEvent;
	return t.getModifierState
		? t.getModifierState(e)
		: (e = dC[e])
		? !!t[e]
		: !1;
}
function gf() {
	return fC;
}
var pC = Me({}, Js, {
		key: function (e) {
			if (e.key) {
				var t = uC[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = za(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				? cC[e.keyCode] || "Unidentified"
				: "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: gf,
		charCode: function (e) {
			return e.type === "keypress" ? za(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? za(e)
				: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		},
	}),
	hC = Qt(pC),
	mC = Me({}, Gl, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	lh = Qt(mC),
	vC = Me({}, Js, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: gf,
	}),
	yC = Qt(vC),
	gC = Me({}, Si, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	xC = Qt(gC),
	wC = Me({}, Gl, {
		deltaX: function (e) {
			return "deltaX" in e
				? e.deltaX
				: "wheelDeltaX" in e
				? -e.wheelDeltaX
				: 0;
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
				? -e.wheelDeltaY
				: "wheelDelta" in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	SC = Qt(wC),
	EC = [9, 13, 27, 32],
	xf = or && "CompositionEvent" in window,
	as = null;
or && "documentMode" in document && (as = document.documentMode);
var CC = or && "TextEvent" in window && !as,
	Sy = or && (!xf || (as && 8 < as && 11 >= as)),
	uh = " ",
	ch = !1;
function Ey(e, t) {
	switch (e) {
		case "keyup":
			return EC.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function Cy(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Uo = !1;
function jC(e, t) {
	switch (e) {
		case "compositionend":
			return Cy(t);
		case "keypress":
			return t.which !== 32 ? null : ((ch = !0), uh);
		case "textInput":
			return (e = t.data), e === uh && ch ? null : e;
		default:
			return null;
	}
}
function RC(e, t) {
	if (Uo)
		return e === "compositionend" || (!xf && Ey(e, t))
			? ((e = wy()), (Ba = vf = Cr = null), (Uo = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (
				!(t.ctrlKey || t.altKey || t.metaKey) ||
				(t.ctrlKey && t.altKey)
			) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return Sy && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var OC = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function dh(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!OC[e.type] : t === "textarea";
}
function jy(e, t, n, r) {
	ty(r),
		(t = dl(t, "onChange")),
		0 < t.length &&
			((n = new yf("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }));
}
var ls = null,
	Os = null;
function bC(e) {
	Iy(e, 0);
}
function Xl(e) {
	var t = Ho(e);
	if (qv(t)) return e;
}
function PC(e, t) {
	if (e === "change") return t;
}
var Ry = !1;
if (or) {
	var qu;
	if (or) {
		var Gu = "oninput" in document;
		if (!Gu) {
			var fh = document.createElement("div");
			fh.setAttribute("oninput", "return;"),
				(Gu = typeof fh.oninput == "function");
		}
		qu = Gu;
	} else qu = !1;
	Ry = qu && (!document.documentMode || 9 < document.documentMode);
}
function ph() {
	ls && (ls.detachEvent("onpropertychange", Oy), (Os = ls = null));
}
function Oy(e) {
	if (e.propertyName === "value" && Xl(Os)) {
		var t = [];
		jy(t, Os, e, df(e)), iy(bC, t);
	}
}
function kC(e, t, n) {
	e === "focusin"
		? (ph(), (ls = t), (Os = n), ls.attachEvent("onpropertychange", Oy))
		: e === "focusout" && ph();
}
function NC(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return Xl(Os);
}
function TC(e, t) {
	if (e === "click") return Xl(t);
}
function _C(e, t) {
	if (e === "input" || e === "change") return Xl(t);
}
function DC(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Pn = typeof Object.is == "function" ? Object.is : DC;
function bs(e, t) {
	if (Pn(e, t)) return !0;
	if (
		typeof e != "object" ||
		e === null ||
		typeof t != "object" ||
		t === null
	)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var o = n[r];
		if (!_c.call(t, o) || !Pn(e[o], t[o])) return !1;
	}
	return !0;
}
function hh(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function mh(e, t) {
	var n = hh(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = hh(n);
	}
}
function by(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? by(e, t.parentNode)
			: "contains" in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function Py() {
	for (var e = window, t = ol(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = ol(e.document);
	}
	return t;
}
function wf(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function LC(e) {
	var t = Py(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		by(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && wf(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				"selectionStart" in n)
			)
				(n.selectionStart = t),
					(n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e =
					((t = n.ownerDocument || document) && t.defaultView) ||
					window),
				e.getSelection)
			) {
				e = e.getSelection();
				var o = n.textContent.length,
					i = Math.min(r.start, o);
				(r = r.end === void 0 ? i : Math.min(r.end, o)),
					!e.extend && i > r && ((o = r), (r = i), (i = o)),
					(o = mh(n, i));
				var s = mh(n, r);
				o &&
					s &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== o.node ||
						e.anchorOffset !== o.offset ||
						e.focusNode !== s.node ||
						e.focusOffset !== s.offset) &&
					((t = t.createRange()),
					t.setStart(o.node, o.offset),
					e.removeAllRanges(),
					i > r
						? (e.addRange(t), e.extend(s.node, s.offset))
						: (t.setEnd(s.node, s.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (
			typeof n.focus == "function" && n.focus(), n = 0;
			n < t.length;
			n++
		)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var IC = or && "documentMode" in document && 11 >= document.documentMode,
	Bo = null,
	Jc = null,
	us = null,
	Yc = !1;
function vh(e, t, n) {
	var r =
		n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Yc ||
		Bo == null ||
		Bo !== ol(r) ||
		((r = Bo),
		"selectionStart" in r && wf(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(us && bs(us, r)) ||
			((us = r),
			(r = dl(Jc, "onSelect")),
			0 < r.length &&
				((t = new yf("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Bo))));
}
function Ea(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var zo = {
		animationend: Ea("Animation", "AnimationEnd"),
		animationiteration: Ea("Animation", "AnimationIteration"),
		animationstart: Ea("Animation", "AnimationStart"),
		transitionend: Ea("Transition", "TransitionEnd"),
	},
	Xu = {},
	ky = {};
or &&
	((ky = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete zo.animationend.animation,
		delete zo.animationiteration.animation,
		delete zo.animationstart.animation),
	"TransitionEvent" in window || delete zo.transitionend.transition);
function Jl(e) {
	if (Xu[e]) return Xu[e];
	if (!zo[e]) return e;
	var t = zo[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in ky) return (Xu[e] = t[n]);
	return e;
}
var Ny = Jl("animationend"),
	Ty = Jl("animationiteration"),
	_y = Jl("animationstart"),
	Dy = Jl("transitionend"),
	Ly = new Map(),
	yh =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" "
		);
function Hr(e, t) {
	Ly.set(e, t), jo(t, [e]);
}
for (var Ju = 0; Ju < yh.length; Ju++) {
	var Yu = yh[Ju],
		AC = Yu.toLowerCase(),
		MC = Yu[0].toUpperCase() + Yu.slice(1);
	Hr(AC, "on" + MC);
}
Hr(Ny, "onAnimationEnd");
Hr(Ty, "onAnimationIteration");
Hr(_y, "onAnimationStart");
Hr("dblclick", "onDoubleClick");
Hr("focusin", "onFocus");
Hr("focusout", "onBlur");
Hr(Dy, "onTransitionEnd");
ri("onMouseEnter", ["mouseout", "mouseover"]);
ri("onMouseLeave", ["mouseout", "mouseover"]);
ri("onPointerEnter", ["pointerout", "pointerover"]);
ri("onPointerLeave", ["pointerout", "pointerover"]);
jo(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(
		" "
	)
);
jo(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" "
	)
);
jo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jo(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" ")
);
jo(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
jo(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ns =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" "
		),
	$C = new Set(
		"cancel close invalid load scroll toggle".split(" ").concat(ns)
	);
function gh(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), AE(r, t, void 0, e), (e.currentTarget = null);
}
function Iy(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			o = r.event;
		r = r.listeners;
		e: {
			var i = void 0;
			if (t)
				for (var s = r.length - 1; 0 <= s; s--) {
					var a = r[s],
						l = a.instance,
						u = a.currentTarget;
					if (((a = a.listener), l !== i && o.isPropagationStopped()))
						break e;
					gh(o, a, u), (i = l);
				}
			else
				for (s = 0; s < r.length; s++) {
					if (
						((a = r[s]),
						(l = a.instance),
						(u = a.currentTarget),
						(a = a.listener),
						l !== i && o.isPropagationStopped())
					)
						break e;
					gh(o, a, u), (i = l);
				}
		}
	}
	if (sl) throw ((e = Vc), (sl = !1), (Vc = null), e);
}
function Pe(e, t) {
	var n = t[rd];
	n === void 0 && (n = t[rd] = new Set());
	var r = e + "__bubble";
	n.has(r) || (Ay(t, e, 2, !1), n.add(r));
}
function Zu(e, t, n) {
	var r = 0;
	t && (r |= 4), Ay(n, e, r, t);
}
var Ca = "_reactListening" + Math.random().toString(36).slice(2);
function Ps(e) {
	if (!e[Ca]) {
		(e[Ca] = !0),
			Hv.forEach(function (n) {
				n !== "selectionchange" &&
					($C.has(n) || Zu(n, !1, e), Zu(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[Ca] || ((t[Ca] = !0), Zu("selectionchange", !1, t));
	}
}
function Ay(e, t, n, r) {
	switch (xy(t)) {
		case 1:
			var o = YE;
			break;
		case 4:
			o = ZE;
			break;
		default:
			o = mf;
	}
	(n = o.bind(null, t, n, e)),
		(o = void 0),
		!Qc ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(o = !0),
		r
			? o !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: o })
				: e.addEventListener(t, n, !0)
			: o !== void 0
			? e.addEventListener(t, n, { passive: o })
			: e.addEventListener(t, n, !1);
}
function ec(e, t, n, r, o) {
	var i = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var a = r.stateNode.containerInfo;
				if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
				if (s === 4)
					for (s = r.return; s !== null; ) {
						var l = s.tag;
						if (
							(l === 3 || l === 4) &&
							((l = s.stateNode.containerInfo),
							l === o || (l.nodeType === 8 && l.parentNode === o))
						)
							return;
						s = s.return;
					}
				for (; a !== null; ) {
					if (((s = no(a)), s === null)) return;
					if (((l = s.tag), l === 5 || l === 6)) {
						r = i = s;
						continue e;
					}
					a = a.parentNode;
				}
			}
			r = r.return;
		}
	iy(function () {
		var u = i,
			d = df(n),
			f = [];
		e: {
			var h = Ly.get(e);
			if (h !== void 0) {
				var m = yf,
					y = e;
				switch (e) {
					case "keypress":
						if (za(n) === 0) break e;
					case "keydown":
					case "keyup":
						m = hC;
						break;
					case "focusin":
						(y = "focus"), (m = Vu);
						break;
					case "focusout":
						(y = "blur"), (m = Vu);
						break;
					case "beforeblur":
					case "afterblur":
						m = Vu;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						m = sh;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						m = nC;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						m = yC;
						break;
					case Ny:
					case Ty:
					case _y:
						m = iC;
						break;
					case Dy:
						m = xC;
						break;
					case "scroll":
						m = eC;
						break;
					case "wheel":
						m = SC;
						break;
					case "copy":
					case "cut":
					case "paste":
						m = aC;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						m = lh;
				}
				var w = (t & 4) !== 0,
					S = !w && e === "scroll",
					g = w ? (h !== null ? h + "Capture" : null) : h;
				w = [];
				for (var x = u, v; x !== null; ) {
					v = x;
					var C = v.stateNode;
					if (
						(v.tag === 5 &&
							C !== null &&
							((v = C),
							g !== null &&
								((C = Es(x, g)),
								C != null && w.push(ks(x, C, v)))),
						S)
					)
						break;
					x = x.return;
				}
				0 < w.length &&
					((h = new m(h, y, null, n, d)),
					f.push({ event: h, listeners: w }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((h = e === "mouseover" || e === "pointerover"),
					(m = e === "mouseout" || e === "pointerout"),
					h &&
						n !== Kc &&
						(y = n.relatedTarget || n.fromElement) &&
						(no(y) || y[ir]))
				)
					break e;
				if (
					(m || h) &&
					((h =
						d.window === d
							? d
							: (h = d.ownerDocument)
							? h.defaultView || h.parentWindow
							: window),
					m
						? ((y = n.relatedTarget || n.toElement),
						  (m = u),
						  (y = y ? no(y) : null),
						  y !== null &&
								((S = Ro(y)),
								y !== S || (y.tag !== 5 && y.tag !== 6)) &&
								(y = null))
						: ((m = null), (y = u)),
					m !== y)
				) {
					if (
						((w = sh),
						(C = "onMouseLeave"),
						(g = "onMouseEnter"),
						(x = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((w = lh),
							(C = "onPointerLeave"),
							(g = "onPointerEnter"),
							(x = "pointer")),
						(S = m == null ? h : Ho(m)),
						(v = y == null ? h : Ho(y)),
						(h = new w(C, x + "leave", m, n, d)),
						(h.target = S),
						(h.relatedTarget = v),
						(C = null),
						no(d) === u &&
							((w = new w(g, x + "enter", y, n, d)),
							(w.target = v),
							(w.relatedTarget = S),
							(C = w)),
						(S = C),
						m && y)
					)
						t: {
							for (w = m, g = y, x = 0, v = w; v; v = Lo(v)) x++;
							for (v = 0, C = g; C; C = Lo(C)) v++;
							for (; 0 < x - v; ) (w = Lo(w)), x--;
							for (; 0 < v - x; ) (g = Lo(g)), v--;
							for (; x--; ) {
								if (
									w === g ||
									(g !== null && w === g.alternate)
								)
									break t;
								(w = Lo(w)), (g = Lo(g));
							}
							w = null;
						}
					else w = null;
					m !== null && xh(f, h, m, w, !1),
						y !== null && S !== null && xh(f, S, y, w, !0);
				}
			}
			e: {
				if (
					((h = u ? Ho(u) : window),
					(m = h.nodeName && h.nodeName.toLowerCase()),
					m === "select" || (m === "input" && h.type === "file"))
				)
					var j = PC;
				else if (dh(h))
					if (Ry) j = _C;
					else {
						j = NC;
						var E = kC;
					}
				else
					(m = h.nodeName) &&
						m.toLowerCase() === "input" &&
						(h.type === "checkbox" || h.type === "radio") &&
						(j = TC);
				if (j && (j = j(e, u))) {
					jy(f, j, n, d);
					break e;
				}
				E && E(e, h, u),
					e === "focusout" &&
						(E = h._wrapperState) &&
						E.controlled &&
						h.type === "number" &&
						Fc(h, "number", h.value);
			}
			switch (((E = u ? Ho(u) : window), e)) {
				case "focusin":
					(dh(E) || E.contentEditable === "true") &&
						((Bo = E), (Jc = u), (us = null));
					break;
				case "focusout":
					us = Jc = Bo = null;
					break;
				case "mousedown":
					Yc = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(Yc = !1), vh(f, n, d);
					break;
				case "selectionchange":
					if (IC) break;
				case "keydown":
				case "keyup":
					vh(f, n, d);
			}
			var O;
			if (xf)
				e: {
					switch (e) {
						case "compositionstart":
							var R = "onCompositionStart";
							break e;
						case "compositionend":
							R = "onCompositionEnd";
							break e;
						case "compositionupdate":
							R = "onCompositionUpdate";
							break e;
					}
					R = void 0;
				}
			else
				Uo
					? Ey(e, n) && (R = "onCompositionEnd")
					: e === "keydown" &&
					  n.keyCode === 229 &&
					  (R = "onCompositionStart");
			R &&
				(Sy &&
					n.locale !== "ko" &&
					(Uo || R !== "onCompositionStart"
						? R === "onCompositionEnd" && Uo && (O = wy())
						: ((Cr = d),
						  (vf = "value" in Cr ? Cr.value : Cr.textContent),
						  (Uo = !0))),
				(E = dl(u, R)),
				0 < E.length &&
					((R = new ah(R, e, null, n, d)),
					f.push({ event: R, listeners: E }),
					O
						? (R.data = O)
						: ((O = Cy(n)), O !== null && (R.data = O)))),
				(O = CC ? jC(e, n) : RC(e, n)) &&
					((u = dl(u, "onBeforeInput")),
					0 < u.length &&
						((d = new ah(
							"onBeforeInput",
							"beforeinput",
							null,
							n,
							d
						)),
						f.push({ event: d, listeners: u }),
						(d.data = O)));
		}
		Iy(f, t);
	});
}
function ks(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function dl(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var o = e,
			i = o.stateNode;
		o.tag === 5 &&
			i !== null &&
			((o = i),
			(i = Es(e, n)),
			i != null && r.unshift(ks(e, i, o)),
			(i = Es(e, t)),
			i != null && r.push(ks(e, i, o))),
			(e = e.return);
	}
	return r;
}
function Lo(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function xh(e, t, n, r, o) {
	for (var i = t._reactName, s = []; n !== null && n !== r; ) {
		var a = n,
			l = a.alternate,
			u = a.stateNode;
		if (l !== null && l === r) break;
		a.tag === 5 &&
			u !== null &&
			((a = u),
			o
				? ((l = Es(n, i)), l != null && s.unshift(ks(n, l, a)))
				: o || ((l = Es(n, i)), l != null && s.push(ks(n, l, a)))),
			(n = n.return);
	}
	s.length !== 0 && e.push({ event: t, listeners: s });
}
var FC = /\r\n?/g,
	UC = /\u0000|\uFFFD/g;
function wh(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			FC,
			`
`
		)
		.replace(UC, "");
}
function ja(e, t, n) {
	if (((t = wh(t)), wh(e) !== t && n)) throw Error(A(425));
}
function fl() {}
var Zc = null,
	ed = null;
function td(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var nd = typeof setTimeout == "function" ? setTimeout : void 0,
	BC = typeof clearTimeout == "function" ? clearTimeout : void 0,
	Sh = typeof Promise == "function" ? Promise : void 0,
	zC =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof Sh < "u"
			? function (e) {
					return Sh.resolve(null).then(e).catch(HC);
			  }
			: nd;
function HC(e) {
	setTimeout(function () {
		throw e;
	});
}
function tc(e, t) {
	var n = t,
		r = 0;
	do {
		var o = n.nextSibling;
		if ((e.removeChild(n), o && o.nodeType === 8))
			if (((n = o.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(o), Rs(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = o;
	} while (n);
	Rs(t);
}
function Nr(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function Eh(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--;
			} else n === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Ei = Math.random().toString(36).slice(2),
	Mn = "__reactFiber$" + Ei,
	Ns = "__reactProps$" + Ei,
	ir = "__reactContainer$" + Ei,
	rd = "__reactEvents$" + Ei,
	KC = "__reactListeners$" + Ei,
	WC = "__reactHandles$" + Ei;
function no(e) {
	var t = e[Mn];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[ir] || n[Mn])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = Eh(e); e !== null; ) {
					if ((n = e[Mn])) return n;
					e = Eh(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function Ys(e) {
	return (
		(e = e[Mn] || e[ir]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
			? null
			: e
	);
}
function Ho(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(A(33));
}
function Yl(e) {
	return e[Ns] || null;
}
var od = [],
	Ko = -1;
function Kr(e) {
	return { current: e };
}
function ke(e) {
	0 > Ko || ((e.current = od[Ko]), (od[Ko] = null), Ko--);
}
function be(e, t) {
	Ko++, (od[Ko] = e.current), (e.current = t);
}
var Mr = {},
	vt = Kr(Mr),
	Ot = Kr(!1),
	mo = Mr;
function oi(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Mr;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var o = {},
		i;
	for (i in n) o[i] = t[i];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		o
	);
}
function bt(e) {
	return (e = e.childContextTypes), e != null;
}
function pl() {
	ke(Ot), ke(vt);
}
function Ch(e, t, n) {
	if (vt.current !== Mr) throw Error(A(168));
	be(vt, t), be(Ot, n);
}
function My(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var o in r) if (!(o in t)) throw Error(A(108, kE(e) || "Unknown", o));
	return Me({}, n, r);
}
function hl(e) {
	return (
		(e =
			((e = e.stateNode) &&
				e.__reactInternalMemoizedMergedChildContext) ||
			Mr),
		(mo = vt.current),
		be(vt, e),
		be(Ot, Ot.current),
		!0
	);
}
function jh(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(A(169));
	n
		? ((e = My(e, t, mo)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  ke(Ot),
		  ke(vt),
		  be(vt, e))
		: ke(Ot),
		be(Ot, n);
}
var Xn = null,
	Zl = !1,
	nc = !1;
function $y(e) {
	Xn === null ? (Xn = [e]) : Xn.push(e);
}
function QC(e) {
	(Zl = !0), $y(e);
}
function Wr() {
	if (!nc && Xn !== null) {
		nc = !0;
		var e = 0,
			t = we;
		try {
			var n = Xn;
			for (we = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(Xn = null), (Zl = !1);
		} catch (o) {
			throw (Xn !== null && (Xn = Xn.slice(e + 1)), uy(ff, Wr), o);
		} finally {
			(we = t), (nc = !1);
		}
	}
	return null;
}
var Wo = [],
	Qo = 0,
	ml = null,
	vl = 0,
	tn = [],
	nn = 0,
	vo = null,
	Zn = 1,
	er = "";
function Zr(e, t) {
	(Wo[Qo++] = vl), (Wo[Qo++] = ml), (ml = e), (vl = t);
}
function Fy(e, t, n) {
	(tn[nn++] = Zn), (tn[nn++] = er), (tn[nn++] = vo), (vo = e);
	var r = Zn;
	e = er;
	var o = 32 - On(r) - 1;
	(r &= ~(1 << o)), (n += 1);
	var i = 32 - On(t) + o;
	if (30 < i) {
		var s = o - (o % 5);
		(i = (r & ((1 << s) - 1)).toString(32)),
			(r >>= s),
			(o -= s),
			(Zn = (1 << (32 - On(t) + o)) | (n << o) | r),
			(er = i + e);
	} else (Zn = (1 << i) | (n << o) | r), (er = e);
}
function Sf(e) {
	e.return !== null && (Zr(e, 1), Fy(e, 1, 0));
}
function Ef(e) {
	for (; e === ml; )
		(ml = Wo[--Qo]), (Wo[Qo] = null), (vl = Wo[--Qo]), (Wo[Qo] = null);
	for (; e === vo; )
		(vo = tn[--nn]),
			(tn[nn] = null),
			(er = tn[--nn]),
			(tn[nn] = null),
			(Zn = tn[--nn]),
			(tn[nn] = null);
}
var Ut = null,
	$t = null,
	De = !1,
	Cn = null;
function Uy(e, t) {
	var n = rn(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Rh(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 ||
					n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (Ut = e), ($t = Nr(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Ut = e), ($t = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = vo !== null ? { id: Zn, overflow: er } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = rn(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (Ut = e),
					  ($t = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function id(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function sd(e) {
	if (De) {
		var t = $t;
		if (t) {
			var n = t;
			if (!Rh(e, t)) {
				if (id(e)) throw Error(A(418));
				t = Nr(n.nextSibling);
				var r = Ut;
				t && Rh(e, t)
					? Uy(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (De = !1), (Ut = e));
			}
		} else {
			if (id(e)) throw Error(A(418));
			(e.flags = (e.flags & -4097) | 2), (De = !1), (Ut = e);
		}
	}
}
function Oh(e) {
	for (
		e = e.return;
		e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

	)
		e = e.return;
	Ut = e;
}
function Ra(e) {
	if (e !== Ut) return !1;
	if (!De) return Oh(e), (De = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !td(e.type, e.memoizedProps))),
		t && (t = $t))
	) {
		if (id(e)) throw (By(), Error(A(418)));
		for (; t; ) Uy(e, t), (t = Nr(t.nextSibling));
	}
	if ((Oh(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(A(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							$t = Nr(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			$t = null;
		}
	} else $t = Ut ? Nr(e.stateNode.nextSibling) : null;
	return !0;
}
function By() {
	for (var e = $t; e; ) e = Nr(e.nextSibling);
}
function ii() {
	($t = Ut = null), (De = !1);
}
function Cf(e) {
	Cn === null ? (Cn = [e]) : Cn.push(e);
}
var VC = dr.ReactCurrentBatchConfig;
function wn(e, t) {
	if (e && e.defaultProps) {
		(t = Me({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
var yl = Kr(null),
	gl = null,
	Vo = null,
	jf = null;
function Rf() {
	jf = Vo = gl = null;
}
function Of(e) {
	var t = yl.current;
	ke(yl), (e._currentValue = t);
}
function ad(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function ti(e, t) {
	(gl = e),
		(jf = Vo = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Rt = !0), (e.firstContext = null));
}
function an(e) {
	var t = e._currentValue;
	if (jf !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Vo === null)) {
			if (gl === null) throw Error(A(308));
			(Vo = e), (gl.dependencies = { lanes: 0, firstContext: e });
		} else Vo = Vo.next = e;
	return t;
}
var ro = null;
function bf(e) {
	ro === null ? (ro = [e]) : ro.push(e);
}
function zy(e, t, n, r) {
	var o = t.interleaved;
	return (
		o === null ? ((n.next = n), bf(t)) : ((n.next = o.next), (o.next = n)),
		(t.interleaved = n),
		sr(e, r)
	);
}
function sr(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var gr = !1;
function Pf(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function Hy(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function tr(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function Tr(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), ye & 2)) {
		var o = r.pending;
		return (
			o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
			(r.pending = t),
			sr(e, n)
		);
	}
	return (
		(o = r.interleaved),
		o === null ? ((t.next = t), bf(r)) : ((t.next = o.next), (o.next = t)),
		(r.interleaved = t),
		sr(e, n)
	);
}
function Ha(e, t, n) {
	if (
		((t = t.updateQueue),
		t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), pf(e, n);
	}
}
function bh(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var o = null,
			i = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var s = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
			} while (n !== null);
			i === null ? (o = i = t) : (i = i.next = t);
		} else o = i = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: o,
			lastBaseUpdate: i,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function xl(e, t, n, r) {
	var o = e.updateQueue;
	gr = !1;
	var i = o.firstBaseUpdate,
		s = o.lastBaseUpdate,
		a = o.shared.pending;
	if (a !== null) {
		o.shared.pending = null;
		var l = a,
			u = l.next;
		(l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
		var d = e.alternate;
		d !== null &&
			((d = d.updateQueue),
			(a = d.lastBaseUpdate),
			a !== s &&
				(a === null ? (d.firstBaseUpdate = u) : (a.next = u),
				(d.lastBaseUpdate = l)));
	}
	if (i !== null) {
		var f = o.baseState;
		(s = 0), (d = u = l = null), (a = i);
		do {
			var h = a.lane,
				m = a.eventTime;
			if ((r & h) === h) {
				d !== null &&
					(d = d.next =
						{
							eventTime: m,
							lane: 0,
							tag: a.tag,
							payload: a.payload,
							callback: a.callback,
							next: null,
						});
				e: {
					var y = e,
						w = a;
					switch (((h = t), (m = n), w.tag)) {
						case 1:
							if (((y = w.payload), typeof y == "function")) {
								f = y.call(m, f, h);
								break e;
							}
							f = y;
							break e;
						case 3:
							y.flags = (y.flags & -65537) | 128;
						case 0:
							if (
								((y = w.payload),
								(h =
									typeof y == "function"
										? y.call(m, f, h)
										: y),
								h == null)
							)
								break e;
							f = Me({}, f, h);
							break e;
						case 2:
							gr = !0;
					}
				}
				a.callback !== null &&
					a.lane !== 0 &&
					((e.flags |= 64),
					(h = o.effects),
					h === null ? (o.effects = [a]) : h.push(a));
			} else
				(m = {
					eventTime: m,
					lane: h,
					tag: a.tag,
					payload: a.payload,
					callback: a.callback,
					next: null,
				}),
					d === null ? ((u = d = m), (l = f)) : (d = d.next = m),
					(s |= h);
			if (((a = a.next), a === null)) {
				if (((a = o.shared.pending), a === null)) break;
				(h = a),
					(a = h.next),
					(h.next = null),
					(o.lastBaseUpdate = h),
					(o.shared.pending = null);
			}
		} while (!0);
		if (
			(d === null && (l = f),
			(o.baseState = l),
			(o.firstBaseUpdate = u),
			(o.lastBaseUpdate = d),
			(t = o.shared.interleaved),
			t !== null)
		) {
			o = t;
			do (s |= o.lane), (o = o.next);
			while (o !== t);
		} else i === null && (o.shared.lanes = 0);
		(go |= s), (e.lanes = s), (e.memoizedState = f);
	}
}
function Ph(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				o = r.callback;
			if (o !== null) {
				if (((r.callback = null), (r = n), typeof o != "function"))
					throw Error(A(191, o));
				o.call(r);
			}
		}
}
var Ky = new zv.Component().refs;
function ld(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : Me({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var eu = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Ro(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = gt(),
			o = Dr(e),
			i = tr(r, o);
		(i.payload = t),
			n != null && (i.callback = n),
			(t = Tr(e, i, o)),
			t !== null && (bn(t, e, o, r), Ha(t, e, o));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = gt(),
			o = Dr(e),
			i = tr(r, o);
		(i.tag = 1),
			(i.payload = t),
			n != null && (i.callback = n),
			(t = Tr(e, i, o)),
			t !== null && (bn(t, e, o, r), Ha(t, e, o));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = gt(),
			r = Dr(e),
			o = tr(n, r);
		(o.tag = 2),
			t != null && (o.callback = t),
			(t = Tr(e, o, r)),
			t !== null && (bn(t, e, r, n), Ha(t, e, r));
	},
};
function kh(e, t, n, r, o, i, s) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, i, s)
			: t.prototype && t.prototype.isPureReactComponent
			? !bs(n, r) || !bs(o, i)
			: !0
	);
}
function Wy(e, t, n) {
	var r = !1,
		o = Mr,
		i = t.contextType;
	return (
		typeof i == "object" && i !== null
			? (i = an(i))
			: ((o = bt(t) ? mo : vt.current),
			  (r = t.contextTypes),
			  (i = (r = r != null) ? oi(e, o) : Mr)),
		(t = new t(n, i)),
		(e.memoizedState =
			t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = eu),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = o),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		t
	);
}
function Nh(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && eu.enqueueReplaceState(t, t.state, null);
}
function ud(e, t, n, r) {
	var o = e.stateNode;
	(o.props = n), (o.state = e.memoizedState), (o.refs = Ky), Pf(e);
	var i = t.contextType;
	typeof i == "object" && i !== null
		? (o.context = an(i))
		: ((i = bt(t) ? mo : vt.current), (o.context = oi(e, i))),
		(o.state = e.memoizedState),
		(i = t.getDerivedStateFromProps),
		typeof i == "function" && (ld(e, t, i, n), (o.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof o.getSnapshotBeforeUpdate == "function" ||
			(typeof o.UNSAFE_componentWillMount != "function" &&
				typeof o.componentWillMount != "function") ||
			((t = o.state),
			typeof o.componentWillMount == "function" && o.componentWillMount(),
			typeof o.UNSAFE_componentWillMount == "function" &&
				o.UNSAFE_componentWillMount(),
			t !== o.state && eu.enqueueReplaceState(o, o.state, null),
			xl(e, n, o, r),
			(o.state = e.memoizedState)),
		typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Hi(e, t, n) {
	if (
		((e = n.ref),
		e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(A(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(A(147, e));
			var o = r,
				i = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === i
				? t.ref
				: ((t = function (s) {
						var a = o.refs;
						a === Ky && (a = o.refs = {}),
							s === null ? delete a[i] : (a[i] = s);
				  }),
				  (t._stringRef = i),
				  t);
		}
		if (typeof e != "string") throw Error(A(284));
		if (!n._owner) throw Error(A(290, e));
	}
	return e;
}
function Oa(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			A(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e
			)
		))
	);
}
function Th(e) {
	var t = e._init;
	return t(e._payload);
}
function Qy(e) {
	function t(g, x) {
		if (e) {
			var v = g.deletions;
			v === null ? ((g.deletions = [x]), (g.flags |= 16)) : v.push(x);
		}
	}
	function n(g, x) {
		if (!e) return null;
		for (; x !== null; ) t(g, x), (x = x.sibling);
		return null;
	}
	function r(g, x) {
		for (g = new Map(); x !== null; )
			x.key !== null ? g.set(x.key, x) : g.set(x.index, x),
				(x = x.sibling);
		return g;
	}
	function o(g, x) {
		return (g = Lr(g, x)), (g.index = 0), (g.sibling = null), g;
	}
	function i(g, x, v) {
		return (
			(g.index = v),
			e
				? ((v = g.alternate),
				  v !== null
						? ((v = v.index), v < x ? ((g.flags |= 2), x) : v)
						: ((g.flags |= 2), x))
				: ((g.flags |= 1048576), x)
		);
	}
	function s(g) {
		return e && g.alternate === null && (g.flags |= 2), g;
	}
	function a(g, x, v, C) {
		return x === null || x.tag !== 6
			? ((x = uc(v, g.mode, C)), (x.return = g), x)
			: ((x = o(x, v)), (x.return = g), x);
	}
	function l(g, x, v, C) {
		var j = v.type;
		return j === Fo
			? d(g, x, v.props.children, C, v.key)
			: x !== null &&
			  (x.elementType === j ||
					(typeof j == "object" &&
						j !== null &&
						j.$$typeof === yr &&
						Th(j) === x.type))
			? ((C = o(x, v.props)), (C.ref = Hi(g, x, v)), (C.return = g), C)
			: ((C = Ga(v.type, v.key, v.props, null, g.mode, C)),
			  (C.ref = Hi(g, x, v)),
			  (C.return = g),
			  C);
	}
	function u(g, x, v, C) {
		return x === null ||
			x.tag !== 4 ||
			x.stateNode.containerInfo !== v.containerInfo ||
			x.stateNode.implementation !== v.implementation
			? ((x = cc(v, g.mode, C)), (x.return = g), x)
			: ((x = o(x, v.children || [])), (x.return = g), x);
	}
	function d(g, x, v, C, j) {
		return x === null || x.tag !== 7
			? ((x = po(v, g.mode, C, j)), (x.return = g), x)
			: ((x = o(x, v)), (x.return = g), x);
	}
	function f(g, x, v) {
		if ((typeof x == "string" && x !== "") || typeof x == "number")
			return (x = uc("" + x, g.mode, v)), (x.return = g), x;
		if (typeof x == "object" && x !== null) {
			switch (x.$$typeof) {
				case ma:
					return (
						(v = Ga(x.type, x.key, x.props, null, g.mode, v)),
						(v.ref = Hi(g, null, x)),
						(v.return = g),
						v
					);
				case $o:
					return (x = cc(x, g.mode, v)), (x.return = g), x;
				case yr:
					var C = x._init;
					return f(g, C(x._payload), v);
			}
			if (es(x) || $i(x))
				return (x = po(x, g.mode, v, null)), (x.return = g), x;
			Oa(g, x);
		}
		return null;
	}
	function h(g, x, v, C) {
		var j = x !== null ? x.key : null;
		if ((typeof v == "string" && v !== "") || typeof v == "number")
			return j !== null ? null : a(g, x, "" + v, C);
		if (typeof v == "object" && v !== null) {
			switch (v.$$typeof) {
				case ma:
					return v.key === j ? l(g, x, v, C) : null;
				case $o:
					return v.key === j ? u(g, x, v, C) : null;
				case yr:
					return (j = v._init), h(g, x, j(v._payload), C);
			}
			if (es(v) || $i(v)) return j !== null ? null : d(g, x, v, C, null);
			Oa(g, v);
		}
		return null;
	}
	function m(g, x, v, C, j) {
		if ((typeof C == "string" && C !== "") || typeof C == "number")
			return (g = g.get(v) || null), a(x, g, "" + C, j);
		if (typeof C == "object" && C !== null) {
			switch (C.$$typeof) {
				case ma:
					return (
						(g = g.get(C.key === null ? v : C.key) || null),
						l(x, g, C, j)
					);
				case $o:
					return (
						(g = g.get(C.key === null ? v : C.key) || null),
						u(x, g, C, j)
					);
				case yr:
					var E = C._init;
					return m(g, x, v, E(C._payload), j);
			}
			if (es(C) || $i(C))
				return (g = g.get(v) || null), d(x, g, C, j, null);
			Oa(x, C);
		}
		return null;
	}
	function y(g, x, v, C) {
		for (
			var j = null, E = null, O = x, R = (x = 0), D = null;
			O !== null && R < v.length;
			R++
		) {
			O.index > R ? ((D = O), (O = null)) : (D = O.sibling);
			var N = h(g, O, v[R], C);
			if (N === null) {
				O === null && (O = D);
				break;
			}
			e && O && N.alternate === null && t(g, O),
				(x = i(N, x, R)),
				E === null ? (j = N) : (E.sibling = N),
				(E = N),
				(O = D);
		}
		if (R === v.length) return n(g, O), De && Zr(g, R), j;
		if (O === null) {
			for (; R < v.length; R++)
				(O = f(g, v[R], C)),
					O !== null &&
						((x = i(O, x, R)),
						E === null ? (j = O) : (E.sibling = O),
						(E = O));
			return De && Zr(g, R), j;
		}
		for (O = r(g, O); R < v.length; R++)
			(D = m(O, g, R, v[R], C)),
				D !== null &&
					(e &&
						D.alternate !== null &&
						O.delete(D.key === null ? R : D.key),
					(x = i(D, x, R)),
					E === null ? (j = D) : (E.sibling = D),
					(E = D));
		return (
			e &&
				O.forEach(function (L) {
					return t(g, L);
				}),
			De && Zr(g, R),
			j
		);
	}
	function w(g, x, v, C) {
		var j = $i(v);
		if (typeof j != "function") throw Error(A(150));
		if (((v = j.call(v)), v == null)) throw Error(A(151));
		for (
			var E = (j = null), O = x, R = (x = 0), D = null, N = v.next();
			O !== null && !N.done;
			R++, N = v.next()
		) {
			O.index > R ? ((D = O), (O = null)) : (D = O.sibling);
			var L = h(g, O, N.value, C);
			if (L === null) {
				O === null && (O = D);
				break;
			}
			e && O && L.alternate === null && t(g, O),
				(x = i(L, x, R)),
				E === null ? (j = L) : (E.sibling = L),
				(E = L),
				(O = D);
		}
		if (N.done) return n(g, O), De && Zr(g, R), j;
		if (O === null) {
			for (; !N.done; R++, N = v.next())
				(N = f(g, N.value, C)),
					N !== null &&
						((x = i(N, x, R)),
						E === null ? (j = N) : (E.sibling = N),
						(E = N));
			return De && Zr(g, R), j;
		}
		for (O = r(g, O); !N.done; R++, N = v.next())
			(N = m(O, g, R, N.value, C)),
				N !== null &&
					(e &&
						N.alternate !== null &&
						O.delete(N.key === null ? R : N.key),
					(x = i(N, x, R)),
					E === null ? (j = N) : (E.sibling = N),
					(E = N));
		return (
			e &&
				O.forEach(function ($) {
					return t(g, $);
				}),
			De && Zr(g, R),
			j
		);
	}
	function S(g, x, v, C) {
		if (
			(typeof v == "object" &&
				v !== null &&
				v.type === Fo &&
				v.key === null &&
				(v = v.props.children),
			typeof v == "object" && v !== null)
		) {
			switch (v.$$typeof) {
				case ma:
					e: {
						for (var j = v.key, E = x; E !== null; ) {
							if (E.key === j) {
								if (((j = v.type), j === Fo)) {
									if (E.tag === 7) {
										n(g, E.sibling),
											(x = o(E, v.props.children)),
											(x.return = g),
											(g = x);
										break e;
									}
								} else if (
									E.elementType === j ||
									(typeof j == "object" &&
										j !== null &&
										j.$$typeof === yr &&
										Th(j) === E.type)
								) {
									n(g, E.sibling),
										(x = o(E, v.props)),
										(x.ref = Hi(g, E, v)),
										(x.return = g),
										(g = x);
									break e;
								}
								n(g, E);
								break;
							} else t(g, E);
							E = E.sibling;
						}
						v.type === Fo
							? ((x = po(v.props.children, g.mode, C, v.key)),
							  (x.return = g),
							  (g = x))
							: ((C = Ga(
									v.type,
									v.key,
									v.props,
									null,
									g.mode,
									C
							  )),
							  (C.ref = Hi(g, x, v)),
							  (C.return = g),
							  (g = C));
					}
					return s(g);
				case $o:
					e: {
						for (E = v.key; x !== null; ) {
							if (x.key === E)
								if (
									x.tag === 4 &&
									x.stateNode.containerInfo ===
										v.containerInfo &&
									x.stateNode.implementation ===
										v.implementation
								) {
									n(g, x.sibling),
										(x = o(x, v.children || [])),
										(x.return = g),
										(g = x);
									break e;
								} else {
									n(g, x);
									break;
								}
							else t(g, x);
							x = x.sibling;
						}
						(x = cc(v, g.mode, C)), (x.return = g), (g = x);
					}
					return s(g);
				case yr:
					return (E = v._init), S(g, x, E(v._payload), C);
			}
			if (es(v)) return y(g, x, v, C);
			if ($i(v)) return w(g, x, v, C);
			Oa(g, v);
		}
		return (typeof v == "string" && v !== "") || typeof v == "number"
			? ((v = "" + v),
			  x !== null && x.tag === 6
					? (n(g, x.sibling), (x = o(x, v)), (x.return = g), (g = x))
					: (n(g, x),
					  (x = uc(v, g.mode, C)),
					  (x.return = g),
					  (g = x)),
			  s(g))
			: n(g, x);
	}
	return S;
}
var si = Qy(!0),
	Vy = Qy(!1),
	Zs = {},
	Un = Kr(Zs),
	Ts = Kr(Zs),
	_s = Kr(Zs);
function oo(e) {
	if (e === Zs) throw Error(A(174));
	return e;
}
function kf(e, t) {
	switch ((be(_s, t), be(Ts, e), be(Un, Zs), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Bc(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Bc(t, e));
	}
	ke(Un), be(Un, t);
}
function ai() {
	ke(Un), ke(Ts), ke(_s);
}
function qy(e) {
	oo(_s.current);
	var t = oo(Un.current),
		n = Bc(t, e.type);
	t !== n && (be(Ts, e), be(Un, n));
}
function Nf(e) {
	Ts.current === e && (ke(Un), ke(Ts));
}
var Ie = Kr(0);
function wl(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated),
				n === null || n.data === "$?" || n.data === "$!")
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var rc = [];
function Tf() {
	for (var e = 0; e < rc.length; e++)
		rc[e]._workInProgressVersionPrimary = null;
	rc.length = 0;
}
var Ka = dr.ReactCurrentDispatcher,
	oc = dr.ReactCurrentBatchConfig,
	yo = 0,
	Ae = null,
	Ge = null,
	et = null,
	Sl = !1,
	cs = !1,
	Ds = 0,
	qC = 0;
function pt() {
	throw Error(A(321));
}
function _f(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Pn(e[n], t[n])) return !1;
	return !0;
}
function Df(e, t, n, r, o, i) {
	if (
		((yo = i),
		(Ae = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Ka.current = e === null || e.memoizedState === null ? YC : ZC),
		(e = n(r, o)),
		cs)
	) {
		i = 0;
		do {
			if (((cs = !1), (Ds = 0), 25 <= i)) throw Error(A(301));
			(i += 1),
				(et = Ge = null),
				(t.updateQueue = null),
				(Ka.current = e1),
				(e = n(r, o));
		} while (cs);
	}
	if (
		((Ka.current = El),
		(t = Ge !== null && Ge.next !== null),
		(yo = 0),
		(et = Ge = Ae = null),
		(Sl = !1),
		t)
	)
		throw Error(A(300));
	return e;
}
function Lf() {
	var e = Ds !== 0;
	return (Ds = 0), e;
}
function In() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return et === null ? (Ae.memoizedState = et = e) : (et = et.next = e), et;
}
function ln() {
	if (Ge === null) {
		var e = Ae.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = Ge.next;
	var t = et === null ? Ae.memoizedState : et.next;
	if (t !== null) (et = t), (Ge = e);
	else {
		if (e === null) throw Error(A(310));
		(Ge = e),
			(e = {
				memoizedState: Ge.memoizedState,
				baseState: Ge.baseState,
				baseQueue: Ge.baseQueue,
				queue: Ge.queue,
				next: null,
			}),
			et === null ? (Ae.memoizedState = et = e) : (et = et.next = e);
	}
	return et;
}
function Ls(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function ic(e) {
	var t = ln(),
		n = t.queue;
	if (n === null) throw Error(A(311));
	n.lastRenderedReducer = e;
	var r = Ge,
		o = r.baseQueue,
		i = n.pending;
	if (i !== null) {
		if (o !== null) {
			var s = o.next;
			(o.next = i.next), (i.next = s);
		}
		(r.baseQueue = o = i), (n.pending = null);
	}
	if (o !== null) {
		(i = o.next), (r = r.baseState);
		var a = (s = null),
			l = null,
			u = i;
		do {
			var d = u.lane;
			if ((yo & d) === d)
				l !== null &&
					(l = l.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var f = {
					lane: d,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
					(Ae.lanes |= d),
					(go |= d);
			}
			u = u.next;
		} while (u !== null && u !== i);
		l === null ? (s = r) : (l.next = a),
			Pn(r, t.memoizedState) || (Rt = !0),
			(t.memoizedState = r),
			(t.baseState = s),
			(t.baseQueue = l),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		o = e;
		do (i = o.lane), (Ae.lanes |= i), (go |= i), (o = o.next);
		while (o !== e);
	} else o === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function sc(e) {
	var t = ln(),
		n = t.queue;
	if (n === null) throw Error(A(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		o = n.pending,
		i = t.memoizedState;
	if (o !== null) {
		n.pending = null;
		var s = (o = o.next);
		do (i = e(i, s.action)), (s = s.next);
		while (s !== o);
		Pn(i, t.memoizedState) || (Rt = !0),
			(t.memoizedState = i),
			t.baseQueue === null && (t.baseState = i),
			(n.lastRenderedState = i);
	}
	return [i, r];
}
function Gy() {}
function Xy(e, t) {
	var n = Ae,
		r = ln(),
		o = t(),
		i = !Pn(r.memoizedState, o);
	if (
		(i && ((r.memoizedState = o), (Rt = !0)),
		(r = r.queue),
		If(Zy.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || i || (et !== null && et.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Is(9, Yy.bind(null, n, r, o, t), void 0, null),
			tt === null)
		)
			throw Error(A(349));
		yo & 30 || Jy(n, t, o);
	}
	return o;
}
function Jy(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = Ae.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Ae.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Yy(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), eg(t) && tg(e);
}
function Zy(e, t, n) {
	return n(function () {
		eg(t) && tg(e);
	});
}
function eg(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Pn(e, n);
	} catch {
		return !0;
	}
}
function tg(e) {
	var t = sr(e, 1);
	t !== null && bn(t, e, 1, -1);
}
function _h(e) {
	var t = In();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Ls,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = JC.bind(null, Ae, e)),
		[t.memoizedState, e]
	);
}
function Is(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = Ae.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (Ae.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next),
					  (n.next = e),
					  (e.next = r),
					  (t.lastEffect = e))),
		e
	);
}
function ng() {
	return ln().memoizedState;
}
function Wa(e, t, n, r) {
	var o = In();
	(Ae.flags |= e),
		(o.memoizedState = Is(1 | t, n, void 0, r === void 0 ? null : r));
}
function tu(e, t, n, r) {
	var o = ln();
	r = r === void 0 ? null : r;
	var i = void 0;
	if (Ge !== null) {
		var s = Ge.memoizedState;
		if (((i = s.destroy), r !== null && _f(r, s.deps))) {
			o.memoizedState = Is(t, n, i, r);
			return;
		}
	}
	(Ae.flags |= e), (o.memoizedState = Is(1 | t, n, i, r));
}
function Dh(e, t) {
	return Wa(8390656, 8, e, t);
}
function If(e, t) {
	return tu(2048, 8, e, t);
}
function rg(e, t) {
	return tu(4, 2, e, t);
}
function og(e, t) {
	return tu(4, 4, e, t);
}
function ig(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function sg(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), tu(4, 4, ig.bind(null, t, e), n)
	);
}
function Af() {}
function ag(e, t) {
	var n = ln();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && _f(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function lg(e, t) {
	var n = ln();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && _f(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function ug(e, t, n) {
	return yo & 21
		? (Pn(n, t) ||
				((n = fy()), (Ae.lanes |= n), (go |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Rt = !0)),
		  (e.memoizedState = n));
}
function GC(e, t) {
	var n = we;
	(we = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = oc.transition;
	oc.transition = {};
	try {
		e(!1), t();
	} finally {
		(we = n), (oc.transition = r);
	}
}
function cg() {
	return ln().memoizedState;
}
function XC(e, t, n) {
	var r = Dr(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		dg(e))
	)
		fg(t, n);
	else if (((n = zy(e, t, n, r)), n !== null)) {
		var o = gt();
		bn(n, e, r, o), pg(n, t, r);
	}
}
function JC(e, t, n) {
	var r = Dr(e),
		o = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
	if (dg(e)) fg(t, o);
	else {
		var i = e.alternate;
		if (
			e.lanes === 0 &&
			(i === null || i.lanes === 0) &&
			((i = t.lastRenderedReducer), i !== null)
		)
			try {
				var s = t.lastRenderedState,
					a = i(s, n);
				if (((o.hasEagerState = !0), (o.eagerState = a), Pn(a, s))) {
					var l = t.interleaved;
					l === null
						? ((o.next = o), bf(t))
						: ((o.next = l.next), (l.next = o)),
						(t.interleaved = o);
					return;
				}
			} catch {
			} finally {
			}
		(n = zy(e, t, o, r)),
			n !== null && ((o = gt()), bn(n, e, r, o), pg(n, t, r));
	}
}
function dg(e) {
	var t = e.alternate;
	return e === Ae || (t !== null && t === Ae);
}
function fg(e, t) {
	cs = Sl = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function pg(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), pf(e, n);
	}
}
var El = {
		readContext: an,
		useCallback: pt,
		useContext: pt,
		useEffect: pt,
		useImperativeHandle: pt,
		useInsertionEffect: pt,
		useLayoutEffect: pt,
		useMemo: pt,
		useReducer: pt,
		useRef: pt,
		useState: pt,
		useDebugValue: pt,
		useDeferredValue: pt,
		useTransition: pt,
		useMutableSource: pt,
		useSyncExternalStore: pt,
		useId: pt,
		unstable_isNewReconciler: !1,
	},
	YC = {
		readContext: an,
		useCallback: function (e, t) {
			return (In().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: an,
		useEffect: Dh,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Wa(4194308, 4, ig.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Wa(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Wa(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = In();
			return (
				(t = t === void 0 ? null : t),
				(e = e()),
				(n.memoizedState = [e, t]),
				e
			);
		},
		useReducer: function (e, t, n) {
			var r = In();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = XC.bind(null, Ae, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = In();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: _h,
		useDebugValue: Af,
		useDeferredValue: function (e) {
			return (In().memoizedState = e);
		},
		useTransition: function () {
			var e = _h(!1),
				t = e[0];
			return (e = GC.bind(null, e[1])), (In().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = Ae,
				o = In();
			if (De) {
				if (n === void 0) throw Error(A(407));
				n = n();
			} else {
				if (((n = t()), tt === null)) throw Error(A(349));
				yo & 30 || Jy(r, t, n);
			}
			o.memoizedState = n;
			var i = { value: n, getSnapshot: t };
			return (
				(o.queue = i),
				Dh(Zy.bind(null, r, i, e), [e]),
				(r.flags |= 2048),
				Is(9, Yy.bind(null, r, i, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = In(),
				t = tt.identifierPrefix;
			if (De) {
				var n = er,
					r = Zn;
				(n = (r & ~(1 << (32 - On(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = Ds++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = qC++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	ZC = {
		readContext: an,
		useCallback: ag,
		useContext: an,
		useEffect: If,
		useImperativeHandle: sg,
		useInsertionEffect: rg,
		useLayoutEffect: og,
		useMemo: lg,
		useReducer: ic,
		useRef: ng,
		useState: function () {
			return ic(Ls);
		},
		useDebugValue: Af,
		useDeferredValue: function (e) {
			var t = ln();
			return ug(t, Ge.memoizedState, e);
		},
		useTransition: function () {
			var e = ic(Ls)[0],
				t = ln().memoizedState;
			return [e, t];
		},
		useMutableSource: Gy,
		useSyncExternalStore: Xy,
		useId: cg,
		unstable_isNewReconciler: !1,
	},
	e1 = {
		readContext: an,
		useCallback: ag,
		useContext: an,
		useEffect: If,
		useImperativeHandle: sg,
		useInsertionEffect: rg,
		useLayoutEffect: og,
		useMemo: lg,
		useReducer: sc,
		useRef: ng,
		useState: function () {
			return sc(Ls);
		},
		useDebugValue: Af,
		useDeferredValue: function (e) {
			var t = ln();
			return Ge === null
				? (t.memoizedState = e)
				: ug(t, Ge.memoizedState, e);
		},
		useTransition: function () {
			var e = sc(Ls)[0],
				t = ln().memoizedState;
			return [e, t];
		},
		useMutableSource: Gy,
		useSyncExternalStore: Xy,
		useId: cg,
		unstable_isNewReconciler: !1,
	};
function li(e, t) {
	try {
		var n = "",
			r = t;
		do (n += PE(r)), (r = r.return);
		while (r);
		var o = n;
	} catch (i) {
		o =
			`
Error generating stack: ` +
			i.message +
			`
` +
			i.stack;
	}
	return { value: e, source: t, stack: o, digest: null };
}
function ac(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function cd(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var t1 = typeof WeakMap == "function" ? WeakMap : Map;
function hg(e, t, n) {
	(n = tr(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			jl || ((jl = !0), (wd = r)), cd(e, t);
		}),
		n
	);
}
function mg(e, t, n) {
	(n = tr(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var o = t.value;
		(n.payload = function () {
			return r(o);
		}),
			(n.callback = function () {
				cd(e, t);
			});
	}
	var i = e.stateNode;
	return (
		i !== null &&
			typeof i.componentDidCatch == "function" &&
			(n.callback = function () {
				cd(e, t),
					typeof r != "function" &&
						(_r === null ? (_r = new Set([this])) : _r.add(this));
				var s = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: s !== null ? s : "",
				});
			}),
		n
	);
}
function Lh(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new t1();
		var o = new Set();
		r.set(t, o);
	} else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
	o.has(n) || (o.add(n), (e = m1.bind(null, e, t, n)), t.then(e, e));
}
function Ih(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState),
				(t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function Ah(e, t, n, r, o) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = o), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = tr(-1, 1)), (t.tag = 2), Tr(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var n1 = dr.ReactCurrentOwner,
	Rt = !1;
function yt(e, t, n, r) {
	t.child = e === null ? Vy(t, null, n, r) : si(t, e.child, n, r);
}
function Mh(e, t, n, r, o) {
	n = n.render;
	var i = t.ref;
	return (
		ti(t, o),
		(r = Df(e, t, n, r, i, o)),
		(n = Lf()),
		e !== null && !Rt
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~o),
			  ar(e, t, o))
			: (De && n && Sf(t), (t.flags |= 1), yt(e, t, r, o), t.child)
	);
}
function $h(e, t, n, r, o) {
	if (e === null) {
		var i = n.type;
		return typeof i == "function" &&
			!Kf(i) &&
			i.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = i), vg(e, t, i, r, o))
			: ((e = Ga(n.type, null, r, t, t.mode, o)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((i = e.child), !(e.lanes & o))) {
		var s = i.memoizedProps;
		if (
			((n = n.compare),
			(n = n !== null ? n : bs),
			n(s, r) && e.ref === t.ref)
		)
			return ar(e, t, o);
	}
	return (
		(t.flags |= 1),
		(e = Lr(i, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function vg(e, t, n, r, o) {
	if (e !== null) {
		var i = e.memoizedProps;
		if (bs(i, r) && e.ref === t.ref)
			if (((Rt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
				e.flags & 131072 && (Rt = !0);
			else return (t.lanes = e.lanes), ar(e, t, o);
	}
	return dd(e, t, n, r, o);
}
function yg(e, t, n) {
	var r = t.pendingProps,
		o = r.children,
		i = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null,
			}),
				be(Go, Mt),
				(Mt |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = i !== null ? i.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					be(Go, Mt),
					(Mt |= e),
					null
				);
			(t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null,
			}),
				(r = i !== null ? i.baseLanes : n),
				be(Go, Mt),
				(Mt |= r);
		}
	else
		i !== null
			? ((r = i.baseLanes | n), (t.memoizedState = null))
			: (r = n),
			be(Go, Mt),
			(Mt |= r);
	return yt(e, t, o, n), t.child;
}
function gg(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function dd(e, t, n, r, o) {
	var i = bt(n) ? mo : vt.current;
	return (
		(i = oi(t, i)),
		ti(t, o),
		(n = Df(e, t, n, r, i, o)),
		(r = Lf()),
		e !== null && !Rt
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~o),
			  ar(e, t, o))
			: (De && r && Sf(t), (t.flags |= 1), yt(e, t, n, o), t.child)
	);
}
function Fh(e, t, n, r, o) {
	if (bt(n)) {
		var i = !0;
		hl(t);
	} else i = !1;
	if ((ti(t, o), t.stateNode === null))
		Qa(e, t), Wy(t, n, r), ud(t, n, r, o), (r = !0);
	else if (e === null) {
		var s = t.stateNode,
			a = t.memoizedProps;
		s.props = a;
		var l = s.context,
			u = n.contextType;
		typeof u == "object" && u !== null
			? (u = an(u))
			: ((u = bt(n) ? mo : vt.current), (u = oi(t, u)));
		var d = n.getDerivedStateFromProps,
			f =
				typeof d == "function" ||
				typeof s.getSnapshotBeforeUpdate == "function";
		f ||
			(typeof s.UNSAFE_componentWillReceiveProps != "function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((a !== r || l !== u) && Nh(t, s, r, u)),
			(gr = !1);
		var h = t.memoizedState;
		(s.state = h),
			xl(t, r, s, o),
			(l = t.memoizedState),
			a !== r || h !== l || Ot.current || gr
				? (typeof d == "function" &&
						(ld(t, n, d, r), (l = t.memoizedState)),
				  (a = gr || kh(t, n, a, r, h, l, u))
						? (f ||
								(typeof s.UNSAFE_componentWillMount !=
									"function" &&
									typeof s.componentWillMount !=
										"function") ||
								(typeof s.componentWillMount == "function" &&
									s.componentWillMount(),
								typeof s.UNSAFE_componentWillMount ==
									"function" &&
									s.UNSAFE_componentWillMount()),
						  typeof s.componentDidMount == "function" &&
								(t.flags |= 4194308))
						: (typeof s.componentDidMount == "function" &&
								(t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = l)),
				  (s.props = r),
				  (s.state = l),
				  (s.context = u),
				  (r = a))
				: (typeof s.componentDidMount == "function" &&
						(t.flags |= 4194308),
				  (r = !1));
	} else {
		(s = t.stateNode),
			Hy(e, t),
			(a = t.memoizedProps),
			(u = t.type === t.elementType ? a : wn(t.type, a)),
			(s.props = u),
			(f = t.pendingProps),
			(h = s.context),
			(l = n.contextType),
			typeof l == "object" && l !== null
				? (l = an(l))
				: ((l = bt(n) ? mo : vt.current), (l = oi(t, l)));
		var m = n.getDerivedStateFromProps;
		(d =
			typeof m == "function" ||
			typeof s.getSnapshotBeforeUpdate == "function") ||
			(typeof s.UNSAFE_componentWillReceiveProps != "function" &&
				typeof s.componentWillReceiveProps != "function") ||
			((a !== f || h !== l) && Nh(t, s, r, l)),
			(gr = !1),
			(h = t.memoizedState),
			(s.state = h),
			xl(t, r, s, o);
		var y = t.memoizedState;
		a !== f || h !== y || Ot.current || gr
			? (typeof m == "function" &&
					(ld(t, n, m, r), (y = t.memoizedState)),
			  (u = gr || kh(t, n, u, r, h, y, l) || !1)
					? (d ||
							(typeof s.UNSAFE_componentWillUpdate !=
								"function" &&
								typeof s.componentWillUpdate != "function") ||
							(typeof s.componentWillUpdate == "function" &&
								s.componentWillUpdate(r, y, l),
							typeof s.UNSAFE_componentWillUpdate == "function" &&
								s.UNSAFE_componentWillUpdate(r, y, l)),
					  typeof s.componentDidUpdate == "function" &&
							(t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate == "function" &&
							(t.flags |= 1024))
					: (typeof s.componentDidUpdate != "function" ||
							(a === e.memoizedProps && h === e.memoizedState) ||
							(t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate != "function" ||
							(a === e.memoizedProps && h === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = y)),
			  (s.props = r),
			  (s.state = y),
			  (s.context = l),
			  (r = u))
			: (typeof s.componentDidUpdate != "function" ||
					(a === e.memoizedProps && h === e.memoizedState) ||
					(t.flags |= 4),
			  typeof s.getSnapshotBeforeUpdate != "function" ||
					(a === e.memoizedProps && h === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return fd(e, t, n, r, i, o);
}
function fd(e, t, n, r, o, i) {
	gg(e, t);
	var s = (t.flags & 128) !== 0;
	if (!r && !s) return o && jh(t, n, !1), ar(e, t, i);
	(r = t.stateNode), (n1.current = t);
	var a =
		s && typeof n.getDerivedStateFromError != "function"
			? null
			: r.render();
	return (
		(t.flags |= 1),
		e !== null && s
			? ((t.child = si(t, e.child, null, i)),
			  (t.child = si(t, null, a, i)))
			: yt(e, t, a, i),
		(t.memoizedState = r.state),
		o && jh(t, n, !0),
		t.child
	);
}
function xg(e) {
	var t = e.stateNode;
	t.pendingContext
		? Ch(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Ch(e, t.context, !1),
		kf(e, t.containerInfo);
}
function Uh(e, t, n, r, o) {
	return ii(), Cf(o), (t.flags |= 256), yt(e, t, n, r), t.child;
}
var pd = { dehydrated: null, treeContext: null, retryLane: 0 };
function hd(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function wg(e, t, n) {
	var r = t.pendingProps,
		o = Ie.current,
		i = !1,
		s = (t.flags & 128) !== 0,
		a;
	if (
		((a = s) ||
			(a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
		a
			? ((i = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (o |= 1),
		be(Ie, o & 1),
		e === null)
	)
		return (
			sd(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((s = r.children),
				  (e = r.fallback),
				  i
						? ((r = t.mode),
						  (i = t.child),
						  (s = { mode: "hidden", children: s }),
						  !(r & 1) && i !== null
								? ((i.childLanes = 0), (i.pendingProps = s))
								: (i = ou(s, r, 0, null)),
						  (e = po(e, r, n, null)),
						  (i.return = t),
						  (e.return = t),
						  (i.sibling = e),
						  (t.child = i),
						  (t.child.memoizedState = hd(n)),
						  (t.memoizedState = pd),
						  e)
						: Mf(t, s))
		);
	if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
		return r1(e, t, s, r, a, o, n);
	if (i) {
		(i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
		var l = { mode: "hidden", children: r.children };
		return (
			!(s & 1) && t.child !== o
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = l),
				  (t.deletions = null))
				: ((r = Lr(o, l)),
				  (r.subtreeFlags = o.subtreeFlags & 14680064)),
			a !== null
				? (i = Lr(a, i))
				: ((i = po(i, s, n, null)), (i.flags |= 2)),
			(i.return = t),
			(r.return = t),
			(r.sibling = i),
			(t.child = r),
			(r = i),
			(i = t.child),
			(s = e.child.memoizedState),
			(s =
				s === null
					? hd(n)
					: {
							baseLanes: s.baseLanes | n,
							cachePool: null,
							transitions: s.transitions,
					  }),
			(i.memoizedState = s),
			(i.childLanes = e.childLanes & ~n),
			(t.memoizedState = pd),
			r
		);
	}
	return (
		(i = e.child),
		(e = i.sibling),
		(r = Lr(i, { mode: "visible", children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Mf(e, t) {
	return (
		(t = ou({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function ba(e, t, n, r) {
	return (
		r !== null && Cf(r),
		si(t, e.child, null, n),
		(e = Mf(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function r1(e, t, n, r, o, i, s) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = ac(Error(A(422)))), ba(e, t, s, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((i = r.fallback),
			  (o = t.mode),
			  (r = ou({ mode: "visible", children: r.children }, o, 0, null)),
			  (i = po(i, o, s, null)),
			  (i.flags |= 2),
			  (r.return = t),
			  (i.return = t),
			  (r.sibling = i),
			  (t.child = r),
			  t.mode & 1 && si(t, e.child, null, s),
			  (t.child.memoizedState = hd(s)),
			  (t.memoizedState = pd),
			  i);
	if (!(t.mode & 1)) return ba(e, t, s, null);
	if (o.data === "$!") {
		if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
		return (
			(r = a), (i = Error(A(419))), (r = ac(i, r, void 0)), ba(e, t, s, r)
		);
	}
	if (((a = (s & e.childLanes) !== 0), Rt || a)) {
		if (((r = tt), r !== null)) {
			switch (s & -s) {
				case 4:
					o = 2;
					break;
				case 16:
					o = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					o = 32;
					break;
				case 536870912:
					o = 268435456;
					break;
				default:
					o = 0;
			}
			(o = o & (r.suspendedLanes | s) ? 0 : o),
				o !== 0 &&
					o !== i.retryLane &&
					((i.retryLane = o), sr(e, o), bn(r, e, o, -1));
		}
		return Hf(), (r = ac(Error(A(421)))), ba(e, t, s, r);
	}
	return o.data === "$?"
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = v1.bind(null, e)),
		  (o._reactRetry = t),
		  null)
		: ((e = i.treeContext),
		  ($t = Nr(o.nextSibling)),
		  (Ut = t),
		  (De = !0),
		  (Cn = null),
		  e !== null &&
				((tn[nn++] = Zn),
				(tn[nn++] = er),
				(tn[nn++] = vo),
				(Zn = e.id),
				(er = e.overflow),
				(vo = t)),
		  (t = Mf(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Bh(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), ad(e.return, t, n);
}
function lc(e, t, n, r, o) {
	var i = e.memoizedState;
	i === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: o,
		  })
		: ((i.isBackwards = t),
		  (i.rendering = null),
		  (i.renderingStartTime = 0),
		  (i.last = r),
		  (i.tail = n),
		  (i.tailMode = o));
}
function Sg(e, t, n) {
	var r = t.pendingProps,
		o = r.revealOrder,
		i = r.tail;
	if ((yt(e, t, r.children, n), (r = Ie.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Bh(e, n, t);
				else if (e.tag === 19) Bh(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((be(Ie, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (o) {
			case "forwards":
				for (n = t.child, o = null; n !== null; )
					(e = n.alternate),
						e !== null && wl(e) === null && (o = n),
						(n = n.sibling);
				(n = o),
					n === null
						? ((o = t.child), (t.child = null))
						: ((o = n.sibling), (n.sibling = null)),
					lc(t, !1, o, n, i);
				break;
			case "backwards":
				for (n = null, o = t.child, t.child = null; o !== null; ) {
					if (((e = o.alternate), e !== null && wl(e) === null)) {
						t.child = o;
						break;
					}
					(e = o.sibling), (o.sibling = n), (n = o), (o = e);
				}
				lc(t, !0, n, null, i);
				break;
			case "together":
				lc(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Qa(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ar(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(go |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(A(153));
	if (t.child !== null) {
		for (
			e = t.child, n = Lr(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling),
				(n = n.sibling = Lr(e, e.pendingProps)),
				(n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function o1(e, t, n) {
	switch (t.tag) {
		case 3:
			xg(t), ii();
			break;
		case 5:
			qy(t);
			break;
		case 1:
			bt(t.type) && hl(t);
			break;
		case 4:
			kf(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				o = t.memoizedProps.value;
			be(yl, r._currentValue), (r._currentValue = o);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (be(Ie, Ie.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? wg(e, t, n)
					: (be(Ie, Ie.current & 1),
					  (e = ar(e, t, n)),
					  e !== null ? e.sibling : null);
			be(Ie, Ie.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Sg(e, t, n);
				t.flags |= 128;
			}
			if (
				((o = t.memoizedState),
				o !== null &&
					((o.rendering = null),
					(o.tail = null),
					(o.lastEffect = null)),
				be(Ie, Ie.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), yg(e, t, n);
	}
	return ar(e, t, n);
}
var Eg, md, Cg, jg;
Eg = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
md = function () {};
Cg = function (e, t, n, r) {
	var o = e.memoizedProps;
	if (o !== r) {
		(e = t.stateNode), oo(Un.current);
		var i = null;
		switch (n) {
			case "input":
				(o = Mc(e, o)), (r = Mc(e, r)), (i = []);
				break;
			case "select":
				(o = Me({}, o, { value: void 0 })),
					(r = Me({}, r, { value: void 0 })),
					(i = []);
				break;
			case "textarea":
				(o = Uc(e, o)), (r = Uc(e, r)), (i = []);
				break;
			default:
				typeof o.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = fl);
		}
		zc(n, r);
		var s;
		n = null;
		for (u in o)
			if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
				if (u === "style") {
					var a = o[u];
					for (s in a)
						a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
				} else
					u !== "dangerouslySetInnerHTML" &&
						u !== "children" &&
						u !== "suppressContentEditableWarning" &&
						u !== "suppressHydrationWarning" &&
						u !== "autoFocus" &&
						(ws.hasOwnProperty(u)
							? i || (i = [])
							: (i = i || []).push(u, null));
		for (u in r) {
			var l = r[u];
			if (
				((a = o != null ? o[u] : void 0),
				r.hasOwnProperty(u) && l !== a && (l != null || a != null))
			)
				if (u === "style")
					if (a) {
						for (s in a)
							!a.hasOwnProperty(s) ||
								(l && l.hasOwnProperty(s)) ||
								(n || (n = {}), (n[s] = ""));
						for (s in l)
							l.hasOwnProperty(s) &&
								a[s] !== l[s] &&
								(n || (n = {}), (n[s] = l[s]));
					} else n || (i || (i = []), i.push(u, n)), (n = l);
				else
					u === "dangerouslySetInnerHTML"
						? ((l = l ? l.__html : void 0),
						  (a = a ? a.__html : void 0),
						  l != null && a !== l && (i = i || []).push(u, l))
						: u === "children"
						? (typeof l != "string" && typeof l != "number") ||
						  (i = i || []).push(u, "" + l)
						: u !== "suppressContentEditableWarning" &&
						  u !== "suppressHydrationWarning" &&
						  (ws.hasOwnProperty(u)
								? (l != null &&
										u === "onScroll" &&
										Pe("scroll", e),
								  i || a === l || (i = []))
								: (i = i || []).push(u, l));
		}
		n && (i = i || []).push("style", n);
		var u = i;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
jg = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function Ki(e, t) {
	if (!De)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function ht(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var o = e.child; o !== null; )
			(n |= o.lanes | o.childLanes),
				(r |= o.subtreeFlags & 14680064),
				(r |= o.flags & 14680064),
				(o.return = e),
				(o = o.sibling);
	else
		for (o = e.child; o !== null; )
			(n |= o.lanes | o.childLanes),
				(r |= o.subtreeFlags),
				(r |= o.flags),
				(o.return = e),
				(o = o.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function i1(e, t, n) {
	var r = t.pendingProps;
	switch ((Ef(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return ht(t), null;
		case 1:
			return bt(t.type) && pl(), ht(t), null;
		case 3:
			return (
				(r = t.stateNode),
				ai(),
				ke(Ot),
				ke(vt),
				Tf(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Ra(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024),
						  Cn !== null && (Cd(Cn), (Cn = null)))),
				md(e, t),
				ht(t),
				null
			);
		case 5:
			Nf(t);
			var o = oo(_s.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Cg(e, t, n, r, o),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(A(166));
					return ht(t), null;
				}
				if (((e = oo(Un.current)), Ra(t))) {
					(r = t.stateNode), (n = t.type);
					var i = t.memoizedProps;
					switch (
						((r[Mn] = t), (r[Ns] = i), (e = (t.mode & 1) !== 0), n)
					) {
						case "dialog":
							Pe("cancel", r), Pe("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							Pe("load", r);
							break;
						case "video":
						case "audio":
							for (o = 0; o < ns.length; o++) Pe(ns[o], r);
							break;
						case "source":
							Pe("error", r);
							break;
						case "img":
						case "image":
						case "link":
							Pe("error", r), Pe("load", r);
							break;
						case "details":
							Pe("toggle", r);
							break;
						case "input":
							Xp(r, i), Pe("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!i.multiple }),
								Pe("invalid", r);
							break;
						case "textarea":
							Yp(r, i), Pe("invalid", r);
					}
					zc(n, i), (o = null);
					for (var s in i)
						if (i.hasOwnProperty(s)) {
							var a = i[s];
							s === "children"
								? typeof a == "string"
									? r.textContent !== a &&
									  (i.suppressHydrationWarning !== !0 &&
											ja(r.textContent, a, e),
									  (o = ["children", a]))
									: typeof a == "number" &&
									  r.textContent !== "" + a &&
									  (i.suppressHydrationWarning !== !0 &&
											ja(r.textContent, a, e),
									  (o = ["children", "" + a]))
								: ws.hasOwnProperty(s) &&
								  a != null &&
								  s === "onScroll" &&
								  Pe("scroll", r);
						}
					switch (n) {
						case "input":
							va(r), Jp(r, i, !0);
							break;
						case "textarea":
							va(r), Zp(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof i.onClick == "function" && (r.onclick = fl);
					}
					(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(s = o.nodeType === 9 ? o : o.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = Jv(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = s.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
								? (e = s.createElement(n, { is: r.is }))
								: ((e = s.createElement(n)),
								  n === "select" &&
										((s = e),
										r.multiple
											? (s.multiple = !0)
											: r.size && (s.size = r.size)))
							: (e = s.createElementNS(e, n)),
						(e[Mn] = t),
						(e[Ns] = r),
						Eg(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((s = Hc(n, r)), n)) {
							case "dialog":
								Pe("cancel", e), Pe("close", e), (o = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								Pe("load", e), (o = r);
								break;
							case "video":
							case "audio":
								for (o = 0; o < ns.length; o++) Pe(ns[o], e);
								o = r;
								break;
							case "source":
								Pe("error", e), (o = r);
								break;
							case "img":
							case "image":
							case "link":
								Pe("error", e), Pe("load", e), (o = r);
								break;
							case "details":
								Pe("toggle", e), (o = r);
								break;
							case "input":
								Xp(e, r), (o = Mc(e, r)), Pe("invalid", e);
								break;
							case "option":
								o = r;
								break;
							case "select":
								(e._wrapperState = {
									wasMultiple: !!r.multiple,
								}),
									(o = Me({}, r, { value: void 0 })),
									Pe("invalid", e);
								break;
							case "textarea":
								Yp(e, r), (o = Uc(e, r)), Pe("invalid", e);
								break;
							default:
								o = r;
						}
						zc(n, o), (a = o);
						for (i in a)
							if (a.hasOwnProperty(i)) {
								var l = a[i];
								i === "style"
									? ey(e, l)
									: i === "dangerouslySetInnerHTML"
									? ((l = l ? l.__html : void 0),
									  l != null && Yv(e, l))
									: i === "children"
									? typeof l == "string"
										? (n !== "textarea" || l !== "") &&
										  Ss(e, l)
										: typeof l == "number" && Ss(e, "" + l)
									: i !== "suppressContentEditableWarning" &&
									  i !== "suppressHydrationWarning" &&
									  i !== "autoFocus" &&
									  (ws.hasOwnProperty(i)
											? l != null &&
											  i === "onScroll" &&
											  Pe("scroll", e)
											: l != null && af(e, i, l, s));
							}
						switch (n) {
							case "input":
								va(e), Jp(e, r, !1);
								break;
							case "textarea":
								va(e), Zp(e);
								break;
							case "option":
								r.value != null &&
									e.setAttribute("value", "" + Ar(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(i = r.value),
									i != null
										? Jo(e, !!r.multiple, i, !1)
										: r.defaultValue != null &&
										  Jo(
												e,
												!!r.multiple,
												r.defaultValue,
												!0
										  );
								break;
							default:
								typeof o.onClick == "function" &&
									(e.onclick = fl);
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return ht(t), null;
		case 6:
			if (e && t.stateNode != null) jg(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null)
					throw Error(A(166));
				if (((n = oo(_s.current)), oo(Un.current), Ra(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Mn] = t),
						(i = r.nodeValue !== n) && ((e = Ut), e !== null))
					)
						switch (e.tag) {
							case 3:
								ja(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !==
									!0 &&
									ja(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					i && (t.flags |= 4);
				} else
					(r = (
						n.nodeType === 9 ? n : n.ownerDocument
					).createTextNode(r)),
						(r[Mn] = t),
						(t.stateNode = r);
			}
			return ht(t), null;
		case 13:
			if (
				(ke(Ie),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null &&
						e.memoizedState.dehydrated !== null))
			) {
				if (De && $t !== null && t.mode & 1 && !(t.flags & 128))
					By(), ii(), (t.flags |= 98560), (i = !1);
				else if (((i = Ra(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!i) throw Error(A(318));
						if (
							((i = t.memoizedState),
							(i = i !== null ? i.dehydrated : null),
							!i)
						)
							throw Error(A(317));
						i[Mn] = t;
					} else
						ii(),
							!(t.flags & 128) && (t.memoizedState = null),
							(t.flags |= 4);
					ht(t), (i = !1);
				} else Cn !== null && (Cd(Cn), (Cn = null)), (i = !0);
				if (!i) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || Ie.current & 1
								? Xe === 0 && (Xe = 3)
								: Hf())),
				  t.updateQueue !== null && (t.flags |= 4),
				  ht(t),
				  null);
		case 4:
			return (
				ai(),
				md(e, t),
				e === null && Ps(t.stateNode.containerInfo),
				ht(t),
				null
			);
		case 10:
			return Of(t.type._context), ht(t), null;
		case 17:
			return bt(t.type) && pl(), ht(t), null;
		case 19:
			if ((ke(Ie), (i = t.memoizedState), i === null)) return ht(t), null;
			if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
				if (r) Ki(i, !1);
				else {
					if (Xe !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((s = wl(e)), s !== null)) {
								for (
									t.flags |= 128,
										Ki(i, !1),
										r = s.updateQueue,
										r !== null &&
											((t.updateQueue = r),
											(t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(i = n),
										(e = r),
										(i.flags &= 14680066),
										(s = i.alternate),
										s === null
											? ((i.childLanes = 0),
											  (i.lanes = e),
											  (i.child = null),
											  (i.subtreeFlags = 0),
											  (i.memoizedProps = null),
											  (i.memoizedState = null),
											  (i.updateQueue = null),
											  (i.dependencies = null),
											  (i.stateNode = null))
											: ((i.childLanes = s.childLanes),
											  (i.lanes = s.lanes),
											  (i.child = s.child),
											  (i.subtreeFlags = 0),
											  (i.deletions = null),
											  (i.memoizedProps =
													s.memoizedProps),
											  (i.memoizedState =
													s.memoizedState),
											  (i.updateQueue = s.updateQueue),
											  (i.type = s.type),
											  (e = s.dependencies),
											  (i.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext:
																	e.firstContext,
														  })),
										(n = n.sibling);
								return be(Ie, (Ie.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					i.tail !== null &&
						ze() > ui &&
						((t.flags |= 128),
						(r = !0),
						Ki(i, !1),
						(t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = wl(s)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							Ki(i, !0),
							i.tail === null &&
								i.tailMode === "hidden" &&
								!s.alternate &&
								!De)
						)
							return ht(t), null;
					} else
						2 * ze() - i.renderingStartTime > ui &&
							n !== 1073741824 &&
							((t.flags |= 128),
							(r = !0),
							Ki(i, !1),
							(t.lanes = 4194304));
				i.isBackwards
					? ((s.sibling = t.child), (t.child = s))
					: ((n = i.last),
					  n !== null ? (n.sibling = s) : (t.child = s),
					  (i.last = s));
			}
			return i.tail !== null
				? ((t = i.tail),
				  (i.rendering = t),
				  (i.tail = t.sibling),
				  (i.renderingStartTime = ze()),
				  (t.sibling = null),
				  (n = Ie.current),
				  be(Ie, r ? (n & 1) | 2 : n & 1),
				  t)
				: (ht(t), null);
		case 22:
		case 23:
			return (
				zf(),
				(r = t.memoizedState !== null),
				e !== null &&
					(e.memoizedState !== null) !== r &&
					(t.flags |= 8192),
				r && t.mode & 1
					? Mt & 1073741824 &&
					  (ht(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: ht(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(A(156, t.tag));
}
function s1(e, t) {
	switch ((Ef(t), t.tag)) {
		case 1:
			return (
				bt(t.type) && pl(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				ai(),
				ke(Ot),
				ke(vt),
				Tf(),
				(e = t.flags),
				e & 65536 && !(e & 128)
					? ((t.flags = (e & -65537) | 128), t)
					: null
			);
		case 5:
			return Nf(t), null;
		case 13:
			if (
				(ke(Ie),
				(e = t.memoizedState),
				e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(A(340));
				ii();
			}
			return (
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return ke(Ie), null;
		case 4:
			return ai(), null;
		case 10:
			return Of(t.type._context), null;
		case 22:
		case 23:
			return zf(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Pa = !1,
	mt = !1,
	a1 = typeof WeakSet == "function" ? WeakSet : Set,
	H = null;
function qo(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				Fe(e, t, r);
			}
		else n.current = null;
}
function vd(e, t, n) {
	try {
		n();
	} catch (r) {
		Fe(e, t, r);
	}
}
var zh = !1;
function l1(e, t) {
	if (((Zc = ul), (e = Py()), wf(e))) {
		if ("selectionStart" in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var o = r.anchorOffset,
						i = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, i.nodeType;
					} catch {
						n = null;
						break e;
					}
					var s = 0,
						a = -1,
						l = -1,
						u = 0,
						d = 0,
						f = e,
						h = null;
					t: for (;;) {
						for (
							var m;
							f !== n ||
								(o !== 0 && f.nodeType !== 3) ||
								(a = s + o),
								f !== i ||
									(r !== 0 && f.nodeType !== 3) ||
									(l = s + r),
								f.nodeType === 3 && (s += f.nodeValue.length),
								(m = f.firstChild) !== null;

						)
							(h = f), (f = m);
						for (;;) {
							if (f === e) break t;
							if (
								(h === n && ++u === o && (a = s),
								h === i && ++d === r && (l = s),
								(m = f.nextSibling) !== null)
							)
								break;
							(f = h), (h = f.parentNode);
						}
						f = m;
					}
					n = a === -1 || l === -1 ? null : { start: a, end: l };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (
		ed = { focusedElem: e, selectionRange: n }, ul = !1, H = t;
		H !== null;

	)
		if (
			((t = H),
			(e = t.child),
			(t.subtreeFlags & 1028) !== 0 && e !== null)
		)
			(e.return = t), (H = e);
		else
			for (; H !== null; ) {
				t = H;
				try {
					var y = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (y !== null) {
									var w = y.memoizedProps,
										S = y.memoizedState,
										g = t.stateNode,
										x = g.getSnapshotBeforeUpdate(
											t.elementType === t.type
												? w
												: wn(t.type, w),
											S
										);
									g.__reactInternalSnapshotBeforeUpdate = x;
								}
								break;
							case 3:
								var v = t.stateNode.containerInfo;
								v.nodeType === 1
									? (v.textContent = "")
									: v.nodeType === 9 &&
									  v.documentElement &&
									  v.removeChild(v.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(A(163));
						}
				} catch (C) {
					Fe(t, t.return, C);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (H = e);
					break;
				}
				H = t.return;
			}
	return (y = zh), (zh = !1), y;
}
function ds(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var o = (r = r.next);
		do {
			if ((o.tag & e) === e) {
				var i = o.destroy;
				(o.destroy = void 0), i !== void 0 && vd(t, n, i);
			}
			o = o.next;
		} while (o !== r);
	}
}
function nu(e, t) {
	if (
		((t = t.updateQueue),
		(t = t !== null ? t.lastEffect : null),
		t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function yd(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function Rg(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Rg(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Mn],
				delete t[Ns],
				delete t[rd],
				delete t[KC],
				delete t[WC])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Og(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hh(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Og(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function gd(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = fl));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (gd(e, t, n), e = e.sibling; e !== null; )
			gd(e, t, n), (e = e.sibling);
}
function xd(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (xd(e, t, n), e = e.sibling; e !== null; )
			xd(e, t, n), (e = e.sibling);
}
var lt = null,
	Sn = !1;
function hr(e, t, n) {
	for (n = n.child; n !== null; ) bg(e, t, n), (n = n.sibling);
}
function bg(e, t, n) {
	if (Fn && typeof Fn.onCommitFiberUnmount == "function")
		try {
			Fn.onCommitFiberUnmount(ql, n);
		} catch {}
	switch (n.tag) {
		case 5:
			mt || qo(n, t);
		case 6:
			var r = lt,
				o = Sn;
			(lt = null),
				hr(e, t, n),
				(lt = r),
				(Sn = o),
				lt !== null &&
					(Sn
						? ((e = lt),
						  (n = n.stateNode),
						  e.nodeType === 8
								? e.parentNode.removeChild(n)
								: e.removeChild(n))
						: lt.removeChild(n.stateNode));
			break;
		case 18:
			lt !== null &&
				(Sn
					? ((e = lt),
					  (n = n.stateNode),
					  e.nodeType === 8
							? tc(e.parentNode, n)
							: e.nodeType === 1 && tc(e, n),
					  Rs(e))
					: tc(lt, n.stateNode));
			break;
		case 4:
			(r = lt),
				(o = Sn),
				(lt = n.stateNode.containerInfo),
				(Sn = !0),
				hr(e, t, n),
				(lt = r),
				(Sn = o);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!mt &&
				((r = n.updateQueue),
				r !== null && ((r = r.lastEffect), r !== null))
			) {
				o = r = r.next;
				do {
					var i = o,
						s = i.destroy;
					(i = i.tag),
						s !== void 0 && (i & 2 || i & 4) && vd(n, t, s),
						(o = o.next);
				} while (o !== r);
			}
			hr(e, t, n);
			break;
		case 1:
			if (
				!mt &&
				(qo(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (a) {
					Fe(n, t, a);
				}
			hr(e, t, n);
			break;
		case 21:
			hr(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((mt = (r = mt) || n.memoizedState !== null),
				  hr(e, t, n),
				  (mt = r))
				: hr(e, t, n);
			break;
		default:
			hr(e, t, n);
	}
}
function Kh(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new a1()),
			t.forEach(function (r) {
				var o = y1.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(o, o));
			});
	}
}
function xn(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var o = n[r];
			try {
				var i = e,
					s = t,
					a = s;
				e: for (; a !== null; ) {
					switch (a.tag) {
						case 5:
							(lt = a.stateNode), (Sn = !1);
							break e;
						case 3:
							(lt = a.stateNode.containerInfo), (Sn = !0);
							break e;
						case 4:
							(lt = a.stateNode.containerInfo), (Sn = !0);
							break e;
					}
					a = a.return;
				}
				if (lt === null) throw Error(A(160));
				bg(i, s, o), (lt = null), (Sn = !1);
				var l = o.alternate;
				l !== null && (l.return = null), (o.return = null);
			} catch (u) {
				Fe(o, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Pg(t, e), (t = t.sibling);
}
function Pg(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((xn(t, e), Ln(e), r & 4)) {
				try {
					ds(3, e, e.return), nu(3, e);
				} catch (w) {
					Fe(e, e.return, w);
				}
				try {
					ds(5, e, e.return);
				} catch (w) {
					Fe(e, e.return, w);
				}
			}
			break;
		case 1:
			xn(t, e), Ln(e), r & 512 && n !== null && qo(n, n.return);
			break;
		case 5:
			if (
				(xn(t, e),
				Ln(e),
				r & 512 && n !== null && qo(n, n.return),
				e.flags & 32)
			) {
				var o = e.stateNode;
				try {
					Ss(o, "");
				} catch (w) {
					Fe(e, e.return, w);
				}
			}
			if (r & 4 && ((o = e.stateNode), o != null)) {
				var i = e.memoizedProps,
					s = n !== null ? n.memoizedProps : i,
					a = e.type,
					l = e.updateQueue;
				if (((e.updateQueue = null), l !== null))
					try {
						a === "input" &&
							i.type === "radio" &&
							i.name != null &&
							Gv(o, i),
							Hc(a, s);
						var u = Hc(a, i);
						for (s = 0; s < l.length; s += 2) {
							var d = l[s],
								f = l[s + 1];
							d === "style"
								? ey(o, f)
								: d === "dangerouslySetInnerHTML"
								? Yv(o, f)
								: d === "children"
								? Ss(o, f)
								: af(o, d, f, u);
						}
						switch (a) {
							case "input":
								$c(o, i);
								break;
							case "textarea":
								Xv(o, i);
								break;
							case "select":
								var h = o._wrapperState.wasMultiple;
								o._wrapperState.wasMultiple = !!i.multiple;
								var m = i.value;
								m != null
									? Jo(o, !!i.multiple, m, !1)
									: h !== !!i.multiple &&
									  (i.defaultValue != null
											? Jo(
													o,
													!!i.multiple,
													i.defaultValue,
													!0
											  )
											: Jo(
													o,
													!!i.multiple,
													i.multiple ? [] : "",
													!1
											  ));
						}
						o[Ns] = i;
					} catch (w) {
						Fe(e, e.return, w);
					}
			}
			break;
		case 6:
			if ((xn(t, e), Ln(e), r & 4)) {
				if (e.stateNode === null) throw Error(A(162));
				(o = e.stateNode), (i = e.memoizedProps);
				try {
					o.nodeValue = i;
				} catch (w) {
					Fe(e, e.return, w);
				}
			}
			break;
		case 3:
			if (
				(xn(t, e),
				Ln(e),
				r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Rs(t.containerInfo);
				} catch (w) {
					Fe(e, e.return, w);
				}
			break;
		case 4:
			xn(t, e), Ln(e);
			break;
		case 13:
			xn(t, e),
				Ln(e),
				(o = e.child),
				o.flags & 8192 &&
					((i = o.memoizedState !== null),
					(o.stateNode.isHidden = i),
					!i ||
						(o.alternate !== null &&
							o.alternate.memoizedState !== null) ||
						(Uf = ze())),
				r & 4 && Kh(e);
			break;
		case 22:
			if (
				((d = n !== null && n.memoizedState !== null),
				e.mode & 1
					? ((mt = (u = mt) || d), xn(t, e), (mt = u))
					: xn(t, e),
				Ln(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !d && e.mode & 1)
				)
					for (H = e, d = e.child; d !== null; ) {
						for (f = H = d; H !== null; ) {
							switch (((h = H), (m = h.child), h.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									ds(4, h, h.return);
									break;
								case 1:
									qo(h, h.return);
									var y = h.stateNode;
									if (
										typeof y.componentWillUnmount ==
										"function"
									) {
										(r = h), (n = h.return);
										try {
											(t = r),
												(y.props = t.memoizedProps),
												(y.state = t.memoizedState),
												y.componentWillUnmount();
										} catch (w) {
											Fe(r, n, w);
										}
									}
									break;
								case 5:
									qo(h, h.return);
									break;
								case 22:
									if (h.memoizedState !== null) {
										Qh(f);
										continue;
									}
							}
							m !== null ? ((m.return = h), (H = m)) : Qh(f);
						}
						d = d.sibling;
					}
				e: for (d = null, f = e; ; ) {
					if (f.tag === 5) {
						if (d === null) {
							d = f;
							try {
								(o = f.stateNode),
									u
										? ((i = o.style),
										  typeof i.setProperty == "function"
												? i.setProperty(
														"display",
														"none",
														"important"
												  )
												: (i.display = "none"))
										: ((a = f.stateNode),
										  (l = f.memoizedProps.style),
										  (s =
												l != null &&
												l.hasOwnProperty("display")
													? l.display
													: null),
										  (a.style.display = Zv("display", s)));
							} catch (w) {
								Fe(e, e.return, w);
							}
						}
					} else if (f.tag === 6) {
						if (d === null)
							try {
								f.stateNode.nodeValue = u
									? ""
									: f.memoizedProps;
							} catch (w) {
								Fe(e, e.return, w);
							}
					} else if (
						((f.tag !== 22 && f.tag !== 23) ||
							f.memoizedState === null ||
							f === e) &&
						f.child !== null
					) {
						(f.child.return = f), (f = f.child);
						continue;
					}
					if (f === e) break e;
					for (; f.sibling === null; ) {
						if (f.return === null || f.return === e) break e;
						d === f && (d = null), (f = f.return);
					}
					d === f && (d = null),
						(f.sibling.return = f.return),
						(f = f.sibling);
				}
			}
			break;
		case 19:
			xn(t, e), Ln(e), r & 4 && Kh(e);
			break;
		case 21:
			break;
		default:
			xn(t, e), Ln(e);
	}
}
function Ln(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Og(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(A(160));
			}
			switch (r.tag) {
				case 5:
					var o = r.stateNode;
					r.flags & 32 && (Ss(o, ""), (r.flags &= -33));
					var i = Hh(e);
					xd(e, i, o);
					break;
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						a = Hh(e);
					gd(e, a, s);
					break;
				default:
					throw Error(A(161));
			}
		} catch (l) {
			Fe(e, e.return, l);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function u1(e, t, n) {
	(H = e), kg(e);
}
function kg(e, t, n) {
	for (var r = (e.mode & 1) !== 0; H !== null; ) {
		var o = H,
			i = o.child;
		if (o.tag === 22 && r) {
			var s = o.memoizedState !== null || Pa;
			if (!s) {
				var a = o.alternate,
					l = (a !== null && a.memoizedState !== null) || mt;
				a = Pa;
				var u = mt;
				if (((Pa = s), (mt = l) && !u))
					for (H = o; H !== null; )
						(s = H),
							(l = s.child),
							s.tag === 22 && s.memoizedState !== null
								? Vh(o)
								: l !== null
								? ((l.return = s), (H = l))
								: Vh(o);
				for (; i !== null; ) (H = i), kg(i), (i = i.sibling);
				(H = o), (Pa = a), (mt = u);
			}
			Wh(e);
		} else
			o.subtreeFlags & 8772 && i !== null
				? ((i.return = o), (H = i))
				: Wh(e);
	}
}
function Wh(e) {
	for (; H !== null; ) {
		var t = H;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							mt || nu(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !mt)
								if (n === null) r.componentDidMount();
								else {
									var o =
										t.elementType === t.type
											? n.memoizedProps
											: wn(t.type, n.memoizedProps);
									r.componentDidUpdate(
										o,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var i = t.updateQueue;
							i !== null && Ph(t, i, r);
							break;
						case 3:
							var s = t.updateQueue;
							if (s !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								Ph(t, s, n);
							}
							break;
						case 5:
							var a = t.stateNode;
							if (n === null && t.flags & 4) {
								n = a;
								var l = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										l.autoFocus && n.focus();
										break;
									case "img":
										l.src && (n.src = l.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate;
								if (u !== null) {
									var d = u.memoizedState;
									if (d !== null) {
										var f = d.dehydrated;
										f !== null && Rs(f);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(A(163));
					}
				mt || (t.flags & 512 && yd(t));
			} catch (h) {
				Fe(t, t.return, h);
			}
		}
		if (t === e) {
			H = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (H = n);
			break;
		}
		H = t.return;
	}
}
function Qh(e) {
	for (; H !== null; ) {
		var t = H;
		if (t === e) {
			H = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (H = n);
			break;
		}
		H = t.return;
	}
}
function Vh(e) {
	for (; H !== null; ) {
		var t = H;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						nu(4, t);
					} catch (l) {
						Fe(t, n, l);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var o = t.return;
						try {
							r.componentDidMount();
						} catch (l) {
							Fe(t, o, l);
						}
					}
					var i = t.return;
					try {
						yd(t);
					} catch (l) {
						Fe(t, i, l);
					}
					break;
				case 5:
					var s = t.return;
					try {
						yd(t);
					} catch (l) {
						Fe(t, s, l);
					}
			}
		} catch (l) {
			Fe(t, t.return, l);
		}
		if (t === e) {
			H = null;
			break;
		}
		var a = t.sibling;
		if (a !== null) {
			(a.return = t.return), (H = a);
			break;
		}
		H = t.return;
	}
}
var c1 = Math.ceil,
	Cl = dr.ReactCurrentDispatcher,
	$f = dr.ReactCurrentOwner,
	on = dr.ReactCurrentBatchConfig,
	ye = 0,
	tt = null,
	We = null,
	dt = 0,
	Mt = 0,
	Go = Kr(0),
	Xe = 0,
	As = null,
	go = 0,
	ru = 0,
	Ff = 0,
	fs = null,
	Ct = null,
	Uf = 0,
	ui = 1 / 0,
	Gn = null,
	jl = !1,
	wd = null,
	_r = null,
	ka = !1,
	jr = null,
	Rl = 0,
	ps = 0,
	Sd = null,
	Va = -1,
	qa = 0;
function gt() {
	return ye & 6 ? ze() : Va !== -1 ? Va : (Va = ze());
}
function Dr(e) {
	return e.mode & 1
		? ye & 2 && dt !== 0
			? dt & -dt
			: VC.transition !== null
			? (qa === 0 && (qa = fy()), qa)
			: ((e = we),
			  e !== 0 ||
					((e = window.event), (e = e === void 0 ? 16 : xy(e.type))),
			  e)
		: 1;
}
function bn(e, t, n, r) {
	if (50 < ps) throw ((ps = 0), (Sd = null), Error(A(185)));
	Xs(e, n, r),
		(!(ye & 2) || e !== tt) &&
			(e === tt && (!(ye & 2) && (ru |= n), Xe === 4 && Er(e, dt)),
			Pt(e, r),
			n === 1 &&
				ye === 0 &&
				!(t.mode & 1) &&
				((ui = ze() + 500), Zl && Wr()));
}
function Pt(e, t) {
	var n = e.callbackNode;
	VE(e, t);
	var r = ll(e, e === tt ? dt : 0);
	if (r === 0)
		n !== null && nh(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && nh(n), t === 1))
			e.tag === 0 ? QC(qh.bind(null, e)) : $y(qh.bind(null, e)),
				zC(function () {
					!(ye & 6) && Wr();
				}),
				(n = null);
		else {
			switch (py(r)) {
				case 1:
					n = ff;
					break;
				case 4:
					n = cy;
					break;
				case 16:
					n = al;
					break;
				case 536870912:
					n = dy;
					break;
				default:
					n = al;
			}
			n = Mg(n, Ng.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function Ng(e, t) {
	if (((Va = -1), (qa = 0), ye & 6)) throw Error(A(327));
	var n = e.callbackNode;
	if (ni() && e.callbackNode !== n) return null;
	var r = ll(e, e === tt ? dt : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = Ol(e, r);
	else {
		t = r;
		var o = ye;
		ye |= 2;
		var i = _g();
		(tt !== e || dt !== t) && ((Gn = null), (ui = ze() + 500), fo(e, t));
		do
			try {
				p1();
				break;
			} catch (a) {
				Tg(e, a);
			}
		while (!0);
		Rf(),
			(Cl.current = i),
			(ye = o),
			We !== null ? (t = 0) : ((tt = null), (dt = 0), (t = Xe));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((o = qc(e)), o !== 0 && ((r = o), (t = Ed(e, o)))),
			t === 1)
		)
			throw ((n = As), fo(e, 0), Er(e, r), Pt(e, ze()), n);
		if (t === 6) Er(e, r);
		else {
			if (
				((o = e.current.alternate),
				!(r & 30) &&
					!d1(o) &&
					((t = Ol(e, r)),
					t === 2 &&
						((i = qc(e)), i !== 0 && ((r = i), (t = Ed(e, i)))),
					t === 1))
			)
				throw ((n = As), fo(e, 0), Er(e, r), Pt(e, ze()), n);
			switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(A(345));
				case 2:
					eo(e, Ct, Gn);
					break;
				case 3:
					if (
						(Er(e, r),
						(r & 130023424) === r &&
							((t = Uf + 500 - ze()), 10 < t))
					) {
						if (ll(e, 0) !== 0) break;
						if (((o = e.suspendedLanes), (o & r) !== r)) {
							gt(), (e.pingedLanes |= e.suspendedLanes & o);
							break;
						}
						e.timeoutHandle = nd(eo.bind(null, e, Ct, Gn), t);
						break;
					}
					eo(e, Ct, Gn);
					break;
				case 4:
					if ((Er(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, o = -1; 0 < r; ) {
						var s = 31 - On(r);
						(i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
					}
					if (
						((r = o),
						(r = ze() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * c1(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = nd(eo.bind(null, e, Ct, Gn), r);
						break;
					}
					eo(e, Ct, Gn);
					break;
				case 5:
					eo(e, Ct, Gn);
					break;
				default:
					throw Error(A(329));
			}
		}
	}
	return Pt(e, ze()), e.callbackNode === n ? Ng.bind(null, e) : null;
}
function Ed(e, t) {
	var n = fs;
	return (
		e.current.memoizedState.isDehydrated && (fo(e, t).flags |= 256),
		(e = Ol(e, t)),
		e !== 2 && ((t = Ct), (Ct = n), t !== null && Cd(t)),
		e
	);
}
function Cd(e) {
	Ct === null ? (Ct = e) : Ct.push.apply(Ct, e);
}
function d1(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var o = n[r],
						i = o.getSnapshot;
					o = o.value;
					try {
						if (!Pn(i(), o)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function Er(e, t) {
	for (
		t &= ~Ff,
			t &= ~ru,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - On(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function qh(e) {
	if (ye & 6) throw Error(A(327));
	ni();
	var t = ll(e, 0);
	if (!(t & 1)) return Pt(e, ze()), null;
	var n = Ol(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = qc(e);
		r !== 0 && ((t = r), (n = Ed(e, r)));
	}
	if (n === 1) throw ((n = As), fo(e, 0), Er(e, t), Pt(e, ze()), n);
	if (n === 6) throw Error(A(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		eo(e, Ct, Gn),
		Pt(e, ze()),
		null
	);
}
function Bf(e, t) {
	var n = ye;
	ye |= 1;
	try {
		return e(t);
	} finally {
		(ye = n), ye === 0 && ((ui = ze() + 500), Zl && Wr());
	}
}
function xo(e) {
	jr !== null && jr.tag === 0 && !(ye & 6) && ni();
	var t = ye;
	ye |= 1;
	var n = on.transition,
		r = we;
	try {
		if (((on.transition = null), (we = 1), e)) return e();
	} finally {
		(we = r), (on.transition = n), (ye = t), !(ye & 6) && Wr();
	}
}
function zf() {
	(Mt = Go.current), ke(Go);
}
function fo(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), BC(n)), We !== null))
		for (n = We.return; n !== null; ) {
			var r = n;
			switch ((Ef(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && pl();
					break;
				case 3:
					ai(), ke(Ot), ke(vt), Tf();
					break;
				case 5:
					Nf(r);
					break;
				case 4:
					ai();
					break;
				case 13:
					ke(Ie);
					break;
				case 19:
					ke(Ie);
					break;
				case 10:
					Of(r.type._context);
					break;
				case 22:
				case 23:
					zf();
			}
			n = n.return;
		}
	if (
		((tt = e),
		(We = e = Lr(e.current, null)),
		(dt = Mt = t),
		(Xe = 0),
		(As = null),
		(Ff = ru = go = 0),
		(Ct = fs = null),
		ro !== null)
	) {
		for (t = 0; t < ro.length; t++)
			if (((n = ro[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var o = r.next,
					i = n.pending;
				if (i !== null) {
					var s = i.next;
					(i.next = o), (r.next = s);
				}
				n.pending = r;
			}
		ro = null;
	}
	return e;
}
function Tg(e, t) {
	do {
		var n = We;
		try {
			if ((Rf(), (Ka.current = El), Sl)) {
				for (var r = Ae.memoizedState; r !== null; ) {
					var o = r.queue;
					o !== null && (o.pending = null), (r = r.next);
				}
				Sl = !1;
			}
			if (
				((yo = 0),
				(et = Ge = Ae = null),
				(cs = !1),
				(Ds = 0),
				($f.current = null),
				n === null || n.return === null)
			) {
				(Xe = 1), (As = t), (We = null);
				break;
			}
			e: {
				var i = e,
					s = n.return,
					a = n,
					l = t;
				if (
					((t = dt),
					(a.flags |= 32768),
					l !== null &&
						typeof l == "object" &&
						typeof l.then == "function")
				) {
					var u = l,
						d = a,
						f = d.tag;
					if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var h = d.alternate;
						h
							? ((d.updateQueue = h.updateQueue),
							  (d.memoizedState = h.memoizedState),
							  (d.lanes = h.lanes))
							: ((d.updateQueue = null),
							  (d.memoizedState = null));
					}
					var m = Ih(s);
					if (m !== null) {
						(m.flags &= -257),
							Ah(m, s, a, i, t),
							m.mode & 1 && Lh(i, u, t),
							(t = m),
							(l = u);
						var y = t.updateQueue;
						if (y === null) {
							var w = new Set();
							w.add(l), (t.updateQueue = w);
						} else y.add(l);
						break e;
					} else {
						if (!(t & 1)) {
							Lh(i, u, t), Hf();
							break e;
						}
						l = Error(A(426));
					}
				} else if (De && a.mode & 1) {
					var S = Ih(s);
					if (S !== null) {
						!(S.flags & 65536) && (S.flags |= 256),
							Ah(S, s, a, i, t),
							Cf(li(l, a));
						break e;
					}
				}
				(i = l = li(l, a)),
					Xe !== 4 && (Xe = 2),
					fs === null ? (fs = [i]) : fs.push(i),
					(i = s);
				do {
					switch (i.tag) {
						case 3:
							(i.flags |= 65536), (t &= -t), (i.lanes |= t);
							var g = hg(i, l, t);
							bh(i, g);
							break e;
						case 1:
							a = l;
							var x = i.type,
								v = i.stateNode;
							if (
								!(i.flags & 128) &&
								(typeof x.getDerivedStateFromError ==
									"function" ||
									(v !== null &&
										typeof v.componentDidCatch ==
											"function" &&
										(_r === null || !_r.has(v))))
							) {
								(i.flags |= 65536), (t &= -t), (i.lanes |= t);
								var C = mg(i, a, t);
								bh(i, C);
								break e;
							}
					}
					i = i.return;
				} while (i !== null);
			}
			Lg(n);
		} catch (j) {
			(t = j), We === n && n !== null && (We = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function _g() {
	var e = Cl.current;
	return (Cl.current = El), e === null ? El : e;
}
function Hf() {
	(Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4),
		tt === null || (!(go & 268435455) && !(ru & 268435455)) || Er(tt, dt);
}
function Ol(e, t) {
	var n = ye;
	ye |= 2;
	var r = _g();
	(tt !== e || dt !== t) && ((Gn = null), fo(e, t));
	do
		try {
			f1();
			break;
		} catch (o) {
			Tg(e, o);
		}
	while (!0);
	if ((Rf(), (ye = n), (Cl.current = r), We !== null)) throw Error(A(261));
	return (tt = null), (dt = 0), Xe;
}
function f1() {
	for (; We !== null; ) Dg(We);
}
function p1() {
	for (; We !== null && !$E(); ) Dg(We);
}
function Dg(e) {
	var t = Ag(e.alternate, e, Mt);
	(e.memoizedProps = e.pendingProps),
		t === null ? Lg(e) : (We = t),
		($f.current = null);
}
function Lg(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = s1(n, t)), n !== null)) {
				(n.flags &= 32767), (We = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(Xe = 6), (We = null);
				return;
			}
		} else if (((n = i1(n, t, Mt)), n !== null)) {
			We = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			We = t;
			return;
		}
		We = t = e;
	} while (t !== null);
	Xe === 0 && (Xe = 5);
}
function eo(e, t, n) {
	var r = we,
		o = on.transition;
	try {
		(on.transition = null), (we = 1), h1(e, t, n, r);
	} finally {
		(on.transition = o), (we = r);
	}
	return null;
}
function h1(e, t, n, r) {
	do ni();
	while (jr !== null);
	if (ye & 6) throw Error(A(327));
	n = e.finishedWork;
	var o = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(A(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var i = n.lanes | n.childLanes;
	if (
		(qE(e, i),
		e === tt && ((We = tt = null), (dt = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			ka ||
			((ka = !0),
			Mg(al, function () {
				return ni(), null;
			})),
		(i = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || i)
	) {
		(i = on.transition), (on.transition = null);
		var s = we;
		we = 1;
		var a = ye;
		(ye |= 4),
			($f.current = null),
			l1(e, n),
			Pg(n, e),
			LC(ed),
			(ul = !!Zc),
			(ed = Zc = null),
			(e.current = n),
			u1(n),
			FE(),
			(ye = a),
			(we = s),
			(on.transition = i);
	} else e.current = n;
	if (
		(ka && ((ka = !1), (jr = e), (Rl = o)),
		(i = e.pendingLanes),
		i === 0 && (_r = null),
		zE(n.stateNode),
		Pt(e, ze()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(o = t[n]),
				r(o.value, { componentStack: o.stack, digest: o.digest });
	if (jl) throw ((jl = !1), (e = wd), (wd = null), e);
	return (
		Rl & 1 && e.tag !== 0 && ni(),
		(i = e.pendingLanes),
		i & 1 ? (e === Sd ? ps++ : ((ps = 0), (Sd = e))) : (ps = 0),
		Wr(),
		null
	);
}
function ni() {
	if (jr !== null) {
		var e = py(Rl),
			t = on.transition,
			n = we;
		try {
			if (((on.transition = null), (we = 16 > e ? 16 : e), jr === null))
				var r = !1;
			else {
				if (((e = jr), (jr = null), (Rl = 0), ye & 6))
					throw Error(A(331));
				var o = ye;
				for (ye |= 4, H = e.current; H !== null; ) {
					var i = H,
						s = i.child;
					if (H.flags & 16) {
						var a = i.deletions;
						if (a !== null) {
							for (var l = 0; l < a.length; l++) {
								var u = a[l];
								for (H = u; H !== null; ) {
									var d = H;
									switch (d.tag) {
										case 0:
										case 11:
										case 15:
											ds(8, d, i);
									}
									var f = d.child;
									if (f !== null) (f.return = d), (H = f);
									else
										for (; H !== null; ) {
											d = H;
											var h = d.sibling,
												m = d.return;
											if ((Rg(d), d === u)) {
												H = null;
												break;
											}
											if (h !== null) {
												(h.return = m), (H = h);
												break;
											}
											H = m;
										}
								}
							}
							var y = i.alternate;
							if (y !== null) {
								var w = y.child;
								if (w !== null) {
									y.child = null;
									do {
										var S = w.sibling;
										(w.sibling = null), (w = S);
									} while (w !== null);
								}
							}
							H = i;
						}
					}
					if (i.subtreeFlags & 2064 && s !== null)
						(s.return = i), (H = s);
					else
						e: for (; H !== null; ) {
							if (((i = H), i.flags & 2048))
								switch (i.tag) {
									case 0:
									case 11:
									case 15:
										ds(9, i, i.return);
								}
							var g = i.sibling;
							if (g !== null) {
								(g.return = i.return), (H = g);
								break e;
							}
							H = i.return;
						}
				}
				var x = e.current;
				for (H = x; H !== null; ) {
					s = H;
					var v = s.child;
					if (s.subtreeFlags & 2064 && v !== null)
						(v.return = s), (H = v);
					else
						e: for (s = x; H !== null; ) {
							if (((a = H), a.flags & 2048))
								try {
									switch (a.tag) {
										case 0:
										case 11:
										case 15:
											nu(9, a);
									}
								} catch (j) {
									Fe(a, a.return, j);
								}
							if (a === s) {
								H = null;
								break e;
							}
							var C = a.sibling;
							if (C !== null) {
								(C.return = a.return), (H = C);
								break e;
							}
							H = a.return;
						}
				}
				if (
					((ye = o),
					Wr(),
					Fn && typeof Fn.onPostCommitFiberRoot == "function")
				)
					try {
						Fn.onPostCommitFiberRoot(ql, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(we = n), (on.transition = t);
		}
	}
	return !1;
}
function Gh(e, t, n) {
	(t = li(n, t)),
		(t = hg(e, t, 1)),
		(e = Tr(e, t, 1)),
		(t = gt()),
		e !== null && (Xs(e, 1, t), Pt(e, t));
}
function Fe(e, t, n) {
	if (e.tag === 3) Gh(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Gh(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(_r === null || !_r.has(r)))
				) {
					(e = li(n, e)),
						(e = mg(t, e, 1)),
						(t = Tr(t, e, 1)),
						(e = gt()),
						t !== null && (Xs(t, 1, e), Pt(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function m1(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = gt()),
		(e.pingedLanes |= e.suspendedLanes & n),
		tt === e &&
			(dt & n) === n &&
			(Xe === 4 ||
			(Xe === 3 && (dt & 130023424) === dt && 500 > ze() - Uf)
				? fo(e, 0)
				: (Ff |= n)),
		Pt(e, t);
}
function Ig(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = xa), (xa <<= 1), !(xa & 130023424) && (xa = 4194304))
			: (t = 1));
	var n = gt();
	(e = sr(e, t)), e !== null && (Xs(e, t, n), Pt(e, n));
}
function v1(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), Ig(e, n);
}
function y1(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				o = e.memoizedState;
			o !== null && (n = o.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(A(314));
	}
	r !== null && r.delete(t), Ig(e, n);
}
var Ag;
Ag = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Ot.current) Rt = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128))
				return (Rt = !1), o1(e, t, n);
			Rt = !!(e.flags & 131072);
		}
	else (Rt = !1), De && t.flags & 1048576 && Fy(t, vl, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Qa(e, t), (e = t.pendingProps);
			var o = oi(t, vt.current);
			ti(t, n), (o = Df(null, t, r, e, o, n));
			var i = Lf();
			return (
				(t.flags |= 1),
				typeof o == "object" &&
				o !== null &&
				typeof o.render == "function" &&
				o.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  bt(r) ? ((i = !0), hl(t)) : (i = !1),
					  (t.memoizedState =
							o.state !== null && o.state !== void 0
								? o.state
								: null),
					  Pf(t),
					  (o.updater = eu),
					  (t.stateNode = o),
					  (o._reactInternals = t),
					  ud(t, r, e, n),
					  (t = fd(null, t, r, !0, i, n)))
					: ((t.tag = 0),
					  De && i && Sf(t),
					  yt(null, t, o, n),
					  (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Qa(e, t),
					(e = t.pendingProps),
					(o = r._init),
					(r = o(r._payload)),
					(t.type = r),
					(o = t.tag = x1(r)),
					(e = wn(r, e)),
					o)
				) {
					case 0:
						t = dd(null, t, r, e, n);
						break e;
					case 1:
						t = Fh(null, t, r, e, n);
						break e;
					case 11:
						t = Mh(null, t, r, e, n);
						break e;
					case 14:
						t = $h(null, t, r, wn(r.type, e), n);
						break e;
				}
				throw Error(A(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : wn(r, o)),
				dd(e, t, r, o, n)
			);
		case 1:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : wn(r, o)),
				Fh(e, t, r, o, n)
			);
		case 3:
			e: {
				if ((xg(t), e === null)) throw Error(A(387));
				(r = t.pendingProps),
					(i = t.memoizedState),
					(o = i.element),
					Hy(e, t),
					xl(t, r, null, n);
				var s = t.memoizedState;
				if (((r = s.element), i.isDehydrated))
					if (
						((i = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries:
								s.pendingSuspenseBoundaries,
							transitions: s.transitions,
						}),
						(t.updateQueue.baseState = i),
						(t.memoizedState = i),
						t.flags & 256)
					) {
						(o = li(Error(A(423)), t)), (t = Uh(e, t, r, n, o));
						break e;
					} else if (r !== o) {
						(o = li(Error(A(424)), t)), (t = Uh(e, t, r, n, o));
						break e;
					} else
						for (
							$t = Nr(t.stateNode.containerInfo.firstChild),
								Ut = t,
								De = !0,
								Cn = null,
								n = Vy(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((ii(), r === o)) {
						t = ar(e, t, n);
						break e;
					}
					yt(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				qy(t),
				e === null && sd(t),
				(r = t.type),
				(o = t.pendingProps),
				(i = e !== null ? e.memoizedProps : null),
				(s = o.children),
				td(r, o)
					? (s = null)
					: i !== null && td(r, i) && (t.flags |= 32),
				gg(e, t),
				yt(e, t, s, n),
				t.child
			);
		case 6:
			return e === null && sd(t), null;
		case 13:
			return wg(e, t, n);
		case 4:
			return (
				kf(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = si(t, null, r, n)) : yt(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : wn(r, o)),
				Mh(e, t, r, o, n)
			);
		case 7:
			return yt(e, t, t.pendingProps, n), t.child;
		case 8:
			return yt(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return yt(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(o = t.pendingProps),
					(i = t.memoizedProps),
					(s = o.value),
					be(yl, r._currentValue),
					(r._currentValue = s),
					i !== null)
				)
					if (Pn(i.value, s)) {
						if (i.children === o.children && !Ot.current) {
							t = ar(e, t, n);
							break e;
						}
					} else
						for (
							i = t.child, i !== null && (i.return = t);
							i !== null;

						) {
							var a = i.dependencies;
							if (a !== null) {
								s = i.child;
								for (var l = a.firstContext; l !== null; ) {
									if (l.context === r) {
										if (i.tag === 1) {
											(l = tr(-1, n & -n)), (l.tag = 2);
											var u = i.updateQueue;
											if (u !== null) {
												u = u.shared;
												var d = u.pending;
												d === null
													? (l.next = l)
													: ((l.next = d.next),
													  (d.next = l)),
													(u.pending = l);
											}
										}
										(i.lanes |= n),
											(l = i.alternate),
											l !== null && (l.lanes |= n),
											ad(i.return, n, t),
											(a.lanes |= n);
										break;
									}
									l = l.next;
								}
							} else if (i.tag === 10)
								s = i.type === t.type ? null : i.child;
							else if (i.tag === 18) {
								if (((s = i.return), s === null))
									throw Error(A(341));
								(s.lanes |= n),
									(a = s.alternate),
									a !== null && (a.lanes |= n),
									ad(s, n, t),
									(s = i.sibling);
							} else s = i.child;
							if (s !== null) s.return = i;
							else
								for (s = i; s !== null; ) {
									if (s === t) {
										s = null;
										break;
									}
									if (((i = s.sibling), i !== null)) {
										(i.return = s.return), (s = i);
										break;
									}
									s = s.return;
								}
							i = s;
						}
				yt(e, t, o.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(o = t.type),
				(r = t.pendingProps.children),
				ti(t, n),
				(o = an(o)),
				(r = r(o)),
				(t.flags |= 1),
				yt(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(o = wn(r, t.pendingProps)),
				(o = wn(r.type, o)),
				$h(e, t, r, o, n)
			);
		case 15:
			return vg(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(o = t.pendingProps),
				(o = t.elementType === r ? o : wn(r, o)),
				Qa(e, t),
				(t.tag = 1),
				bt(r) ? ((e = !0), hl(t)) : (e = !1),
				ti(t, n),
				Wy(t, r, o),
				ud(t, r, o, n),
				fd(null, t, r, !0, e, n)
			);
		case 19:
			return Sg(e, t, n);
		case 22:
			return yg(e, t, n);
	}
	throw Error(A(156, t.tag));
};
function Mg(e, t) {
	return uy(e, t);
}
function g1(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function rn(e, t, n, r) {
	return new g1(e, t, n, r);
}
function Kf(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function x1(e) {
	if (typeof e == "function") return Kf(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === uf)) return 11;
		if (e === cf) return 14;
	}
	return 2;
}
function Lr(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = rn(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null
				? null
				: { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function Ga(e, t, n, r, o, i) {
	var s = 2;
	if (((r = e), typeof e == "function")) Kf(e) && (s = 1);
	else if (typeof e == "string") s = 5;
	else
		e: switch (e) {
			case Fo:
				return po(n.children, o, i, t);
			case lf:
				(s = 8), (o |= 8);
				break;
			case Dc:
				return (
					(e = rn(12, n, t, o | 2)),
					(e.elementType = Dc),
					(e.lanes = i),
					e
				);
			case Lc:
				return (
					(e = rn(13, n, t, o)),
					(e.elementType = Lc),
					(e.lanes = i),
					e
				);
			case Ic:
				return (
					(e = rn(19, n, t, o)),
					(e.elementType = Ic),
					(e.lanes = i),
					e
				);
			case Qv:
				return ou(n, o, i, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case Kv:
							s = 10;
							break e;
						case Wv:
							s = 9;
							break e;
						case uf:
							s = 11;
							break e;
						case cf:
							s = 14;
							break e;
						case yr:
							(s = 16), (r = null);
							break e;
					}
				throw Error(A(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = rn(s, n, t, o)),
		(t.elementType = e),
		(t.type = r),
		(t.lanes = i),
		t
	);
}
function po(e, t, n, r) {
	return (e = rn(7, e, r, t)), (e.lanes = n), e;
}
function ou(e, t, n, r) {
	return (
		(e = rn(22, e, r, t)),
		(e.elementType = Qv),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function uc(e, t, n) {
	return (e = rn(6, e, null, t)), (e.lanes = n), e;
}
function cc(e, t, n) {
	return (
		(t = rn(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function w1(e, t, n, r, o) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Ku(0)),
		(this.expirationTimes = Ku(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Ku(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = o),
		(this.mutableSourceEagerHydrationData = null);
}
function Wf(e, t, n, r, o, i, s, a, l) {
	return (
		(e = new w1(e, t, n, a, l)),
		t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
		(i = rn(3, null, null, t)),
		(e.current = i),
		(i.stateNode = e),
		(i.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		Pf(i),
		e
	);
}
function S1(e, t, n) {
	var r =
		3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: $o,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function $g(e) {
	if (!e) return Mr;
	e = e._reactInternals;
	e: {
		if (Ro(e) !== e || e.tag !== 1) throw Error(A(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (bt(t.type)) {
						t =
							t.stateNode
								.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(A(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (bt(n)) return My(e, n, t);
	}
	return t;
}
function Fg(e, t, n, r, o, i, s, a, l) {
	return (
		(e = Wf(n, r, !0, e, o, i, s, a, l)),
		(e.context = $g(null)),
		(n = e.current),
		(r = gt()),
		(o = Dr(n)),
		(i = tr(r, o)),
		(i.callback = t ?? null),
		Tr(n, i, o),
		(e.current.lanes = o),
		Xs(e, o, r),
		Pt(e, r),
		e
	);
}
function iu(e, t, n, r) {
	var o = t.current,
		i = gt(),
		s = Dr(o);
	return (
		(n = $g(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = tr(i, s)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Tr(o, t, s)),
		e !== null && (bn(e, o, s, i), Ha(e, o, s)),
		s
	);
}
function bl(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Xh(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Qf(e, t) {
	Xh(e, t), (e = e.alternate) && Xh(e, t);
}
function E1() {
	return null;
}
var Ug =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
		  };
function Vf(e) {
	this._internalRoot = e;
}
su.prototype.render = Vf.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(A(409));
	iu(e, t, null, null);
};
su.prototype.unmount = Vf.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		xo(function () {
			iu(null, e, null, null);
		}),
			(t[ir] = null);
	}
};
function su(e) {
	this._internalRoot = e;
}
su.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = vy();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < Sr.length && t !== 0 && t < Sr[n].priority; n++);
		Sr.splice(n, 0, e), n === 0 && gy(e);
	}
};
function qf(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function au(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 ||
				e.nodeValue !== " react-mount-point-unstable "))
	);
}
function Jh() {}
function C1(e, t, n, r, o) {
	if (o) {
		if (typeof r == "function") {
			var i = r;
			r = function () {
				var u = bl(s);
				i.call(u);
			};
		}
		var s = Fg(t, r, e, 0, null, !1, !1, "", Jh);
		return (
			(e._reactRootContainer = s),
			(e[ir] = s.current),
			Ps(e.nodeType === 8 ? e.parentNode : e),
			xo(),
			s
		);
	}
	for (; (o = e.lastChild); ) e.removeChild(o);
	if (typeof r == "function") {
		var a = r;
		r = function () {
			var u = bl(l);
			a.call(u);
		};
	}
	var l = Wf(e, 0, !1, null, null, !1, !1, "", Jh);
	return (
		(e._reactRootContainer = l),
		(e[ir] = l.current),
		Ps(e.nodeType === 8 ? e.parentNode : e),
		xo(function () {
			iu(t, l, n, r);
		}),
		l
	);
}
function lu(e, t, n, r, o) {
	var i = n._reactRootContainer;
	if (i) {
		var s = i;
		if (typeof o == "function") {
			var a = o;
			o = function () {
				var l = bl(s);
				a.call(l);
			};
		}
		iu(t, s, e, o);
	} else s = C1(n, t, e, o, r);
	return bl(s);
}
hy = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = ts(t.pendingLanes);
				n !== 0 &&
					(pf(t, n | 1),
					Pt(t, ze()),
					!(ye & 6) && ((ui = ze() + 500), Wr()));
			}
			break;
		case 13:
			xo(function () {
				var r = sr(e, 1);
				if (r !== null) {
					var o = gt();
					bn(r, e, 1, o);
				}
			}),
				Qf(e, 1);
	}
};
hf = function (e) {
	if (e.tag === 13) {
		var t = sr(e, 134217728);
		if (t !== null) {
			var n = gt();
			bn(t, e, 134217728, n);
		}
		Qf(e, 134217728);
	}
};
my = function (e) {
	if (e.tag === 13) {
		var t = Dr(e),
			n = sr(e, t);
		if (n !== null) {
			var r = gt();
			bn(n, e, t, r);
		}
		Qf(e, t);
	}
};
vy = function () {
	return we;
};
yy = function (e, t) {
	var n = we;
	try {
		return (we = e), t();
	} finally {
		we = n;
	}
};
Wc = function (e, t, n) {
	switch (t) {
		case "input":
			if (($c(e, n), (t = n.name), n.type === "radio" && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						"input[name=" +
							JSON.stringify("" + t) +
							'][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var o = Yl(r);
						if (!o) throw Error(A(90));
						qv(r), $c(r, o);
					}
				}
			}
			break;
		case "textarea":
			Xv(e, n);
			break;
		case "select":
			(t = n.value), t != null && Jo(e, !!n.multiple, t, !1);
	}
};
ry = Bf;
oy = xo;
var j1 = { usingClientEntryPoint: !1, Events: [Ys, Ho, Yl, ty, ny, Bf] },
	Wi = {
		findFiberByHostInstance: no,
		bundleType: 0,
		version: "18.2.0",
		rendererPackageName: "react-dom",
	},
	R1 = {
		bundleType: Wi.bundleType,
		version: Wi.version,
		rendererPackageName: Wi.rendererPackageName,
		rendererConfig: Wi.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: dr.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = ay(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Wi.findFiberByHostInstance || E1,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Na = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Na.isDisabled && Na.supportsFiber)
		try {
			(ql = Na.inject(R1)), (Fn = Na);
		} catch {}
}
Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j1;
Wt.createPortal = function (e, t) {
	var n =
		2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!qf(t)) throw Error(A(200));
	return S1(e, t, null, n);
};
Wt.createRoot = function (e, t) {
	if (!qf(e)) throw Error(A(299));
	var n = !1,
		r = "",
		o = Ug;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
		(t = Wf(e, 1, !1, null, null, n, !1, r, o)),
		(e[ir] = t.current),
		Ps(e.nodeType === 8 ? e.parentNode : e),
		new Vf(t)
	);
};
Wt.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(A(188))
			: ((e = Object.keys(e).join(",")), Error(A(268, e)));
	return (e = ay(t)), (e = e === null ? null : e.stateNode), e;
};
Wt.flushSync = function (e) {
	return xo(e);
};
Wt.hydrate = function (e, t, n) {
	if (!au(t)) throw Error(A(200));
	return lu(null, e, t, !0, n);
};
Wt.hydrateRoot = function (e, t, n) {
	if (!qf(e)) throw Error(A(405));
	var r = (n != null && n.hydratedSources) || null,
		o = !1,
		i = "",
		s = Ug;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (o = !0),
			n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
		(t = Fg(t, null, e, 1, n ?? null, o, !1, i, s)),
		(e[ir] = t.current),
		Ps(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(o = n._getVersion),
				(o = o(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, o])
					: t.mutableSourceEagerHydrationData.push(n, o);
	return new su(t);
};
Wt.render = function (e, t, n) {
	if (!au(t)) throw Error(A(200));
	return lu(null, e, t, !1, n);
};
Wt.unmountComponentAtNode = function (e) {
	if (!au(e)) throw Error(A(40));
	return e._reactRootContainer
		? (xo(function () {
				lu(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[ir] = null);
				});
		  }),
		  !0)
		: !1;
};
Wt.unstable_batchedUpdates = Bf;
Wt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!au(n)) throw Error(A(200));
	if (e == null || e._reactInternals === void 0) throw Error(A(38));
	return lu(e, t, n, !1, r);
};
Wt.version = "18.2.0-next-9e3b772b8-20220608";
function Bg() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bg);
		} catch (e) {
			console.error(e);
		}
}
Bg(), (Fv.exports = Wt);
var Gf = Fv.exports;
const Rr = qs(Gf),
	O1 = Pv({ __proto__: null, default: Rr }, [Gf]);
var Yh = Gf;
(Tc.createRoot = Yh.createRoot), (Tc.hydrateRoot = Yh.hydrateRoot);
var zg = { exports: {} },
	Hg = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ea = p;
function b1(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var P1 = typeof Object.is == "function" ? Object.is : b1,
	k1 = ea.useSyncExternalStore,
	N1 = ea.useRef,
	T1 = ea.useEffect,
	_1 = ea.useMemo,
	D1 = ea.useDebugValue;
Hg.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
	var i = N1(null);
	if (i.current === null) {
		var s = { hasValue: !1, value: null };
		i.current = s;
	} else s = i.current;
	i = _1(
		function () {
			function l(m) {
				if (!u) {
					if (
						((u = !0),
						(d = m),
						(m = r(m)),
						o !== void 0 && s.hasValue)
					) {
						var y = s.value;
						if (o(y, m)) return (f = y);
					}
					return (f = m);
				}
				if (((y = f), P1(d, m))) return y;
				var w = r(m);
				return o !== void 0 && o(y, w) ? y : ((d = m), (f = w));
			}
			var u = !1,
				d,
				f,
				h = n === void 0 ? null : n;
			return [
				function () {
					return l(t());
				},
				h === null
					? void 0
					: function () {
							return l(h());
					  },
			];
		},
		[t, n, r, o]
	);
	var a = k1(e, i[0], i[1]);
	return (
		T1(
			function () {
				(s.hasValue = !0), (s.value = a);
			},
			[a]
		),
		D1(a),
		a
	);
};
zg.exports = Hg;
var L1 = zg.exports,
	Ft = "default" in xs ? ie : xs,
	Zh = Symbol.for("react-redux-context"),
	em = typeof globalThis < "u" ? globalThis : {};
function I1() {
	if (!Ft.createContext) return {};
	const e = em[Zh] ?? (em[Zh] = new Map());
	let t = e.get(Ft.createContext);
	return t || ((t = Ft.createContext(null)), e.set(Ft.createContext, t)), t;
}
var $r = I1(),
	A1 = () => {
		throw new Error("uSES not initialized!");
	};
function Xf(e = $r) {
	return function () {
		return Ft.useContext(e);
	};
}
var Kg = Xf(),
	Wg = A1,
	M1 = (e) => {
		Wg = e;
	},
	$1 = (e, t) => e === t;
function F1(e = $r) {
	const t = e === $r ? Kg : Xf(e),
		n = (r, o = {}) => {
			const { equalityFn: i = $1, devModeChecks: s = {} } =
					typeof o == "function" ? { equalityFn: o } : o,
				{
					store: a,
					subscription: l,
					getServerState: u,
					stabilityCheck: d,
					identityFunctionCheck: f,
				} = t();
			Ft.useRef(!0);
			const h = Ft.useCallback(
					{
						[r.name](y) {
							return r(y);
						},
					}[r.name],
					[r, d, s.stabilityCheck]
				),
				m = Wg(l.addNestedSub, a.getState, u || a.getState, h, i);
			return Ft.useDebugValue(m), m;
		};
	return Object.assign(n, { withTypes: () => n }), n;
}
var Je = F1();
function U1(e) {
	e();
}
function B1() {
	let e = null,
		t = null;
	return {
		clear() {
			(e = null), (t = null);
		},
		notify() {
			U1(() => {
				let n = e;
				for (; n; ) n.callback(), (n = n.next);
			});
		},
		get() {
			const n = [];
			let r = e;
			for (; r; ) n.push(r), (r = r.next);
			return n;
		},
		subscribe(n) {
			let r = !0;
			const o = (t = { callback: n, next: null, prev: t });
			return (
				o.prev ? (o.prev.next = o) : (e = o),
				function () {
					!r ||
						e === null ||
						((r = !1),
						o.next ? (o.next.prev = o.prev) : (t = o.prev),
						o.prev ? (o.prev.next = o.next) : (e = o.next));
				}
			);
		},
	};
}
var tm = { notify() {}, get: () => [] };
function z1(e, t) {
	let n,
		r = tm,
		o = 0,
		i = !1;
	function s(w) {
		d();
		const S = r.subscribe(w);
		let g = !1;
		return () => {
			g || ((g = !0), S(), f());
		};
	}
	function a() {
		r.notify();
	}
	function l() {
		y.onStateChange && y.onStateChange();
	}
	function u() {
		return i;
	}
	function d() {
		o++, n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (r = B1()));
	}
	function f() {
		o--, n && o === 0 && (n(), (n = void 0), r.clear(), (r = tm));
	}
	function h() {
		i || ((i = !0), d());
	}
	function m() {
		i && ((i = !1), f());
	}
	const y = {
		addNestedSub: s,
		notifyNestedSubs: a,
		handleChangeWrapper: l,
		isSubscribed: u,
		trySubscribe: h,
		tryUnsubscribe: m,
		getListeners: () => r,
	};
	return y;
}
var H1 =
		typeof window < "u" &&
		typeof window.document < "u" &&
		typeof window.document.createElement < "u",
	K1 = H1 ? Ft.useLayoutEffect : Ft.useEffect;
function W1({
	store: e,
	context: t,
	children: n,
	serverState: r,
	stabilityCheck: o = "once",
	identityFunctionCheck: i = "once",
}) {
	const s = Ft.useMemo(() => {
			const u = z1(e);
			return {
				store: e,
				subscription: u,
				getServerState: r ? () => r : void 0,
				stabilityCheck: o,
				identityFunctionCheck: i,
			};
		}, [e, r, o, i]),
		a = Ft.useMemo(() => e.getState(), [e]);
	K1(() => {
		const { subscription: u } = s;
		return (
			(u.onStateChange = u.notifyNestedSubs),
			u.trySubscribe(),
			a !== e.getState() && u.notifyNestedSubs(),
			() => {
				u.tryUnsubscribe(), (u.onStateChange = void 0);
			}
		);
	}, [s, a]);
	const l = t || $r;
	return Ft.createElement(l.Provider, { value: s }, n);
}
var Q1 = W1;
function Qg(e = $r) {
	const t = e === $r ? Kg : Xf(e),
		n = () => {
			const { store: r } = t();
			return r;
		};
	return Object.assign(n, { withTypes: () => n }), n;
}
var V1 = Qg();
function q1(e = $r) {
	const t = e === $r ? V1 : Qg(e),
		n = () => t().dispatch;
	return Object.assign(n, { withTypes: () => n }), n;
}
var It = q1();
M1(L1.useSyncExternalStoreWithSelector);
function st(e) {
	return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var G1 = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
	nm = G1,
	dc = () => Math.random().toString(36).substring(7).split("").join("."),
	X1 = {
		INIT: `@@redux/INIT${dc()}`,
		REPLACE: `@@redux/REPLACE${dc()}`,
		PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${dc()}`,
	},
	Pl = X1;
function Jf(e) {
	if (typeof e != "object" || e === null) return !1;
	let t = e;
	for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Vg(e, t, n) {
	if (typeof e != "function") throw new Error(st(2));
	if (
		(typeof t == "function" && typeof n == "function") ||
		(typeof n == "function" && typeof arguments[3] == "function")
	)
		throw new Error(st(0));
	if (
		(typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
		typeof n < "u")
	) {
		if (typeof n != "function") throw new Error(st(1));
		return n(Vg)(e, t);
	}
	let r = e,
		o = t,
		i = new Map(),
		s = i,
		a = 0,
		l = !1;
	function u() {
		s === i &&
			((s = new Map()),
			i.forEach((S, g) => {
				s.set(g, S);
			}));
	}
	function d() {
		if (l) throw new Error(st(3));
		return o;
	}
	function f(S) {
		if (typeof S != "function") throw new Error(st(4));
		if (l) throw new Error(st(5));
		let g = !0;
		u();
		const x = a++;
		return (
			s.set(x, S),
			function () {
				if (g) {
					if (l) throw new Error(st(6));
					(g = !1), u(), s.delete(x), (i = null);
				}
			}
		);
	}
	function h(S) {
		if (!Jf(S)) throw new Error(st(7));
		if (typeof S.type > "u") throw new Error(st(8));
		if (typeof S.type != "string") throw new Error(st(17));
		if (l) throw new Error(st(9));
		try {
			(l = !0), (o = r(o, S));
		} finally {
			l = !1;
		}
		return (
			(i = s).forEach((x) => {
				x();
			}),
			S
		);
	}
	function m(S) {
		if (typeof S != "function") throw new Error(st(10));
		(r = S), h({ type: Pl.REPLACE });
	}
	function y() {
		const S = f;
		return {
			subscribe(g) {
				if (typeof g != "object" || g === null) throw new Error(st(11));
				function x() {
					const C = g;
					C.next && C.next(d());
				}
				return x(), { unsubscribe: S(x) };
			},
			[nm]() {
				return this;
			},
		};
	}
	return (
		h({ type: Pl.INIT }),
		{ dispatch: h, subscribe: f, getState: d, replaceReducer: m, [nm]: y }
	);
}
function J1(e) {
	Object.keys(e).forEach((t) => {
		const n = e[t];
		if (typeof n(void 0, { type: Pl.INIT }) > "u") throw new Error(st(12));
		if (typeof n(void 0, { type: Pl.PROBE_UNKNOWN_ACTION() }) > "u")
			throw new Error(st(13));
	});
}
function Y1(e) {
	const t = Object.keys(e),
		n = {};
	for (let i = 0; i < t.length; i++) {
		const s = t[i];
		typeof e[s] == "function" && (n[s] = e[s]);
	}
	const r = Object.keys(n);
	let o;
	try {
		J1(n);
	} catch (i) {
		o = i;
	}
	return function (s = {}, a) {
		if (o) throw o;
		let l = !1;
		const u = {};
		for (let d = 0; d < r.length; d++) {
			const f = r[d],
				h = n[f],
				m = s[f],
				y = h(m, a);
			if (typeof y > "u") throw (a && a.type, new Error(st(14)));
			(u[f] = y), (l = l || y !== m);
		}
		return (l = l || r.length !== Object.keys(s).length), l ? u : s;
	};
}
function kl(...e) {
	return e.length === 0
		? (t) => t
		: e.length === 1
		? e[0]
		: e.reduce(
				(t, n) =>
					(...r) =>
						t(n(...r))
		  );
}
function Z1(...e) {
	return (t) => (n, r) => {
		const o = t(n, r);
		let i = () => {
			throw new Error(st(15));
		};
		const s = { getState: o.getState, dispatch: (l, ...u) => i(l, ...u) },
			a = e.map((l) => l(s));
		return (i = kl(...a)(o.dispatch)), { ...o, dispatch: i };
	};
}
function ej(e) {
	return Jf(e) && "type" in e && typeof e.type == "string";
}
var qg = Symbol.for("immer-nothing"),
	rm = Symbol.for("immer-draftable"),
	zt = Symbol.for("immer-state");
function Rn(e, ...t) {
	throw new Error(
		`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
	);
}
var ci = Object.getPrototypeOf;
function Fr(e) {
	return !!e && !!e[zt];
}
function lr(e) {
	var t;
	return e
		? Gg(e) ||
				Array.isArray(e) ||
				!!e[rm] ||
				!!((t = e.constructor) != null && t[rm]) ||
				cu(e) ||
				du(e)
		: !1;
}
var tj = Object.prototype.constructor.toString();
function Gg(e) {
	if (!e || typeof e != "object") return !1;
	const t = ci(e);
	if (t === null) return !0;
	const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
	return n === Object
		? !0
		: typeof n == "function" && Function.toString.call(n) === tj;
}
function Ms(e, t) {
	uu(e) === 0
		? Object.entries(e).forEach(([n, r]) => {
				t(n, r, e);
		  })
		: e.forEach((n, r) => t(r, n, e));
}
function uu(e) {
	const t = e[zt];
	return t ? t.type_ : Array.isArray(e) ? 1 : cu(e) ? 2 : du(e) ? 3 : 0;
}
function jd(e, t) {
	return uu(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Xg(e, t, n) {
	const r = uu(e);
	r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function nj(e, t) {
	return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function cu(e) {
	return e instanceof Map;
}
function du(e) {
	return e instanceof Set;
}
function to(e) {
	return e.copy_ || e.base_;
}
function Rd(e, t) {
	if (cu(e)) return new Map(e);
	if (du(e)) return new Set(e);
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	if (!t && Gg(e))
		return ci(e) ? { ...e } : Object.assign(Object.create(null), e);
	const n = Object.getOwnPropertyDescriptors(e);
	delete n[zt];
	let r = Reflect.ownKeys(n);
	for (let o = 0; o < r.length; o++) {
		const i = r[o],
			s = n[i];
		s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
			(s.get || s.set) &&
				(n[i] = {
					configurable: !0,
					writable: !0,
					enumerable: s.enumerable,
					value: e[i],
				});
	}
	return Object.create(ci(e), n);
}
function Yf(e, t = !1) {
	return (
		fu(e) ||
			Fr(e) ||
			!lr(e) ||
			(uu(e) > 1 && (e.set = e.add = e.clear = e.delete = rj),
			Object.freeze(e),
			t && Ms(e, (n, r) => Yf(r, !0))),
		e
	);
}
function rj() {
	Rn(2);
}
function fu(e) {
	return Object.isFrozen(e);
}
var oj = {};
function wo(e) {
	const t = oj[e];
	return t || Rn(0, e), t;
}
var $s;
function Jg() {
	return $s;
}
function ij(e, t) {
	return {
		drafts_: [],
		parent_: e,
		immer_: t,
		canAutoFreeze_: !0,
		unfinalizedDrafts_: 0,
	};
}
function om(e, t) {
	t &&
		(wo("Patches"),
		(e.patches_ = []),
		(e.inversePatches_ = []),
		(e.patchListener_ = t));
}
function Od(e) {
	bd(e), e.drafts_.forEach(sj), (e.drafts_ = null);
}
function bd(e) {
	e === $s && ($s = e.parent_);
}
function im(e) {
	return ($s = ij($s, e));
}
function sj(e) {
	const t = e[zt];
	t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function sm(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	const n = t.drafts_[0];
	return (
		e !== void 0 && e !== n
			? (n[zt].modified_ && (Od(t), Rn(4)),
			  lr(e) && ((e = Nl(t, e)), t.parent_ || Tl(t, e)),
			  t.patches_ &&
					wo("Patches").generateReplacementPatches_(
						n[zt].base_,
						e,
						t.patches_,
						t.inversePatches_
					))
			: (e = Nl(t, n, [])),
		Od(t),
		t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
		e !== qg ? e : void 0
	);
}
function Nl(e, t, n) {
	if (fu(t)) return t;
	const r = t[zt];
	if (!r) return Ms(t, (o, i) => am(e, r, t, o, i, n)), t;
	if (r.scope_ !== e) return t;
	if (!r.modified_) return Tl(e, r.base_, !0), r.base_;
	if (!r.finalized_) {
		(r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
		const o = r.copy_;
		let i = o,
			s = !1;
		r.type_ === 3 && ((i = new Set(o)), o.clear(), (s = !0)),
			Ms(i, (a, l) => am(e, r, o, a, l, n, s)),
			Tl(e, o, !1),
			n &&
				e.patches_ &&
				wo("Patches").generatePatches_(
					r,
					n,
					e.patches_,
					e.inversePatches_
				);
	}
	return r.copy_;
}
function am(e, t, n, r, o, i, s) {
	if (Fr(o)) {
		const a =
				i && t && t.type_ !== 3 && !jd(t.assigned_, r)
					? i.concat(r)
					: void 0,
			l = Nl(e, o, a);
		if ((Xg(n, r, l), Fr(l))) e.canAutoFreeze_ = !1;
		else return;
	} else s && n.add(o);
	if (lr(o) && !fu(o)) {
		if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
		Nl(e, o), (!t || !t.scope_.parent_) && Tl(e, o);
	}
}
function Tl(e, t, n = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Yf(t, n);
}
function aj(e, t) {
	const n = Array.isArray(e),
		r = {
			type_: n ? 1 : 0,
			scope_: t ? t.scope_ : Jg(),
			modified_: !1,
			finalized_: !1,
			assigned_: {},
			parent_: t,
			base_: e,
			draft_: null,
			copy_: null,
			revoke_: null,
			isManual_: !1,
		};
	let o = r,
		i = Zf;
	n && ((o = [r]), (i = Fs));
	const { revoke: s, proxy: a } = Proxy.revocable(o, i);
	return (r.draft_ = a), (r.revoke_ = s), a;
}
var Zf = {
		get(e, t) {
			if (t === zt) return e;
			const n = to(e);
			if (!jd(n, t)) return lj(e, n, t);
			const r = n[t];
			return e.finalized_ || !lr(r)
				? r
				: r === fc(e.base_, t)
				? (pc(e), (e.copy_[t] = kd(r, e)))
				: r;
		},
		has(e, t) {
			return t in to(e);
		},
		ownKeys(e) {
			return Reflect.ownKeys(to(e));
		},
		set(e, t, n) {
			const r = Yg(to(e), t);
			if (r != null && r.set) return r.set.call(e.draft_, n), !0;
			if (!e.modified_) {
				const o = fc(to(e), t),
					i = o == null ? void 0 : o[zt];
				if (i && i.base_ === n)
					return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
				if (nj(n, o) && (n !== void 0 || jd(e.base_, t))) return !0;
				pc(e), Pd(e);
			}
			return (
				(e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
					(Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
					((e.copy_[t] = n), (e.assigned_[t] = !0)),
				!0
			);
		},
		deleteProperty(e, t) {
			return (
				fc(e.base_, t) !== void 0 || t in e.base_
					? ((e.assigned_[t] = !1), pc(e), Pd(e))
					: delete e.assigned_[t],
				e.copy_ && delete e.copy_[t],
				!0
			);
		},
		getOwnPropertyDescriptor(e, t) {
			const n = to(e),
				r = Reflect.getOwnPropertyDescriptor(n, t);
			return (
				r && {
					writable: !0,
					configurable: e.type_ !== 1 || t !== "length",
					enumerable: r.enumerable,
					value: n[t],
				}
			);
		},
		defineProperty() {
			Rn(11);
		},
		getPrototypeOf(e) {
			return ci(e.base_);
		},
		setPrototypeOf() {
			Rn(12);
		},
	},
	Fs = {};
Ms(Zf, (e, t) => {
	Fs[e] = function () {
		return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
	};
});
Fs.deleteProperty = function (e, t) {
	return Fs.set.call(this, e, t, void 0);
};
Fs.set = function (e, t, n) {
	return Zf.set.call(this, e[0], t, n, e[0]);
};
function fc(e, t) {
	const n = e[zt];
	return (n ? to(n) : e)[t];
}
function lj(e, t, n) {
	var o;
	const r = Yg(t, n);
	return r
		? "value" in r
			? r.value
			: (o = r.get) == null
			? void 0
			: o.call(e.draft_)
		: void 0;
}
function Yg(e, t) {
	if (!(t in e)) return;
	let n = ci(e);
	for (; n; ) {
		const r = Object.getOwnPropertyDescriptor(n, t);
		if (r) return r;
		n = ci(n);
	}
}
function Pd(e) {
	e.modified_ || ((e.modified_ = !0), e.parent_ && Pd(e.parent_));
}
function pc(e) {
	e.copy_ || (e.copy_ = Rd(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var uj = class {
	constructor(e) {
		(this.autoFreeze_ = !0),
			(this.useStrictShallowCopy_ = !1),
			(this.produce = (t, n, r) => {
				if (typeof t == "function" && typeof n != "function") {
					const i = n;
					n = t;
					const s = this;
					return function (l = i, ...u) {
						return s.produce(l, (d) => n.call(this, d, ...u));
					};
				}
				typeof n != "function" && Rn(6),
					r !== void 0 && typeof r != "function" && Rn(7);
				let o;
				if (lr(t)) {
					const i = im(this),
						s = kd(t, void 0);
					let a = !0;
					try {
						(o = n(s)), (a = !1);
					} finally {
						a ? Od(i) : bd(i);
					}
					return om(i, r), sm(o, i);
				} else if (!t || typeof t != "object") {
					if (
						((o = n(t)),
						o === void 0 && (o = t),
						o === qg && (o = void 0),
						this.autoFreeze_ && Yf(o, !0),
						r)
					) {
						const i = [],
							s = [];
						wo("Patches").generateReplacementPatches_(t, o, i, s),
							r(i, s);
					}
					return o;
				} else Rn(1, t);
			}),
			(this.produceWithPatches = (t, n) => {
				if (typeof t == "function")
					return (s, ...a) =>
						this.produceWithPatches(s, (l) => t(l, ...a));
				let r, o;
				return [
					this.produce(t, n, (s, a) => {
						(r = s), (o = a);
					}),
					r,
					o,
				];
			}),
			typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
				this.setAutoFreeze(e.autoFreeze),
			typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
				this.setUseStrictShallowCopy(e.useStrictShallowCopy);
	}
	createDraft(e) {
		lr(e) || Rn(8), Fr(e) && (e = Zg(e));
		const t = im(this),
			n = kd(e, void 0);
		return (n[zt].isManual_ = !0), bd(t), n;
	}
	finishDraft(e, t) {
		const n = e && e[zt];
		(!n || !n.isManual_) && Rn(9);
		const { scope_: r } = n;
		return om(r, t), sm(void 0, r);
	}
	setAutoFreeze(e) {
		this.autoFreeze_ = e;
	}
	setUseStrictShallowCopy(e) {
		this.useStrictShallowCopy_ = e;
	}
	applyPatches(e, t) {
		let n;
		for (n = t.length - 1; n >= 0; n--) {
			const o = t[n];
			if (o.path.length === 0 && o.op === "replace") {
				e = o.value;
				break;
			}
		}
		n > -1 && (t = t.slice(n + 1));
		const r = wo("Patches").applyPatches_;
		return Fr(e) ? r(e, t) : this.produce(e, (o) => r(o, t));
	}
};
function kd(e, t) {
	const n = cu(e)
		? wo("MapSet").proxyMap_(e, t)
		: du(e)
		? wo("MapSet").proxySet_(e, t)
		: aj(e, t);
	return (t ? t.scope_ : Jg()).drafts_.push(n), n;
}
function Zg(e) {
	return Fr(e) || Rn(10, e), e0(e);
}
function e0(e) {
	if (!lr(e) || fu(e)) return e;
	const t = e[zt];
	let n;
	if (t) {
		if (!t.modified_) return t.base_;
		(t.finalized_ = !0), (n = Rd(e, t.scope_.immer_.useStrictShallowCopy_));
	} else n = Rd(e, !0);
	return (
		Ms(n, (r, o) => {
			Xg(n, r, e0(o));
		}),
		t && (t.finalized_ = !1),
		n
	);
}
var Ht = new uj(),
	t0 = Ht.produce;
Ht.produceWithPatches.bind(Ht);
Ht.setAutoFreeze.bind(Ht);
Ht.setUseStrictShallowCopy.bind(Ht);
Ht.applyPatches.bind(Ht);
Ht.createDraft.bind(Ht);
Ht.finishDraft.bind(Ht);
function cj(e, t = `expected a function, instead received ${typeof e}`) {
	if (typeof e != "function") throw new TypeError(t);
}
function dj(e, t = `expected an object, instead received ${typeof e}`) {
	if (typeof e != "object") throw new TypeError(t);
}
function fj(
	e,
	t = "expected all items to be functions, instead received the following types: "
) {
	if (!e.every((n) => typeof n == "function")) {
		const n = e
			.map((r) =>
				typeof r == "function"
					? `function ${r.name || "unnamed"}()`
					: typeof r
			)
			.join(", ");
		throw new TypeError(`${t}[${n}]`);
	}
}
var lm = (e) => (Array.isArray(e) ? e : [e]);
function pj(e) {
	const t = Array.isArray(e[0]) ? e[0] : e;
	return (
		fj(
			t,
			"createSelector expects all input-selectors to be functions, but received the following types: "
		),
		t
	);
}
function hj(e, t) {
	const n = [],
		{ length: r } = e;
	for (let o = 0; o < r; o++) n.push(e[o].apply(null, t));
	return n;
}
var mj = class {
		constructor(e) {
			this.value = e;
		}
		deref() {
			return this.value;
		}
	},
	vj = typeof WeakRef < "u" ? WeakRef : mj,
	yj = 0,
	um = 1;
function Ta() {
	return { s: yj, v: void 0, o: null, p: null };
}
function ep(e, t = {}) {
	let n = Ta();
	const { resultEqualityCheck: r } = t;
	let o,
		i = 0;
	function s() {
		var f;
		let a = n;
		const { length: l } = arguments;
		for (let h = 0, m = l; h < m; h++) {
			const y = arguments[h];
			if (
				typeof y == "function" ||
				(typeof y == "object" && y !== null)
			) {
				let w = a.o;
				w === null && (a.o = w = new WeakMap());
				const S = w.get(y);
				S === void 0 ? ((a = Ta()), w.set(y, a)) : (a = S);
			} else {
				let w = a.p;
				w === null && (a.p = w = new Map());
				const S = w.get(y);
				S === void 0 ? ((a = Ta()), w.set(y, a)) : (a = S);
			}
		}
		const u = a;
		let d;
		if (
			(a.s === um ? (d = a.v) : ((d = e.apply(null, arguments)), i++),
			(u.s = um),
			r)
		) {
			const h =
				((f = o == null ? void 0 : o.deref) == null
					? void 0
					: f.call(o)) ?? o;
			h != null && r(h, d) && ((d = h), i !== 0 && i--),
				(o =
					(typeof d == "object" && d !== null) ||
					typeof d == "function"
						? new vj(d)
						: d);
		}
		return (u.v = d), d;
	}
	return (
		(s.clearCache = () => {
			(n = Ta()), s.resetResultsCount();
		}),
		(s.resultsCount = () => i),
		(s.resetResultsCount = () => {
			i = 0;
		}),
		s
	);
}
function n0(e, ...t) {
	const n = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
		r = (...o) => {
			let i = 0,
				s = 0,
				a,
				l = {},
				u = o.pop();
			typeof u == "object" && ((l = u), (u = o.pop())),
				cj(
					u,
					`createSelector expects an output function after the inputs, but received: [${typeof u}]`
				);
			const d = { ...n, ...l },
				{
					memoize: f,
					memoizeOptions: h = [],
					argsMemoize: m = ep,
					argsMemoizeOptions: y = [],
					devModeChecks: w = {},
				} = d,
				S = lm(h),
				g = lm(y),
				x = pj(o),
				v = f(function () {
					return i++, u.apply(null, arguments);
				}, ...S),
				C = m(function () {
					s++;
					const E = hj(x, arguments);
					return (a = v.apply(null, E)), a;
				}, ...g);
			return Object.assign(C, {
				resultFunc: u,
				memoizedResultFunc: v,
				dependencies: x,
				dependencyRecomputations: () => s,
				resetDependencyRecomputations: () => {
					s = 0;
				},
				lastResult: () => a,
				recomputations: () => i,
				resetRecomputations: () => {
					i = 0;
				},
				memoize: f,
				argsMemoize: m,
			});
		};
	return Object.assign(r, { withTypes: () => r }), r;
}
var gj = n0(ep),
	xj = Object.assign(
		(e, t = gj) => {
			dj(
				e,
				`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
			);
			const n = Object.keys(e),
				r = n.map((i) => e[i]);
			return t(r, (...i) =>
				i.reduce((s, a, l) => ((s[n[l]] = a), s), {})
			);
		},
		{ withTypes: () => xj }
	);
function r0(e) {
	return ({ dispatch: n, getState: r }) =>
		(o) =>
		(i) =>
			typeof i == "function" ? i(n, r, e) : o(i);
}
var wj = r0(),
	Sj = r0,
	Ej = (...e) => {
		const t = n0(...e),
			n = Object.assign(
				(...r) => {
					const o = t(...r),
						i = (s, ...a) => o(Fr(s) ? Zg(s) : s, ...a);
					return Object.assign(i, o), i;
				},
				{ withTypes: () => n }
			);
		return n;
	};
Ej(ep);
var Cj =
	typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: function () {
				if (arguments.length !== 0)
					return typeof arguments[0] == "object"
						? kl
						: kl.apply(null, arguments);
		  };
function di(e, t) {
	function n(...r) {
		if (t) {
			let o = t(...r);
			if (!o) throw new Error(kt(0));
			return {
				type: e,
				payload: o.payload,
				...("meta" in o && { meta: o.meta }),
				...("error" in o && { error: o.error }),
			};
		}
		return { type: e, payload: r[0] };
	}
	return (
		(n.toString = () => `${e}`),
		(n.type = e),
		(n.match = (r) => ej(r) && r.type === e),
		n
	);
}
var o0 = class rs extends Array {
	constructor(...t) {
		super(...t), Object.setPrototypeOf(this, rs.prototype);
	}
	static get [Symbol.species]() {
		return rs;
	}
	concat(...t) {
		return super.concat.apply(this, t);
	}
	prepend(...t) {
		return t.length === 1 && Array.isArray(t[0])
			? new rs(...t[0].concat(this))
			: new rs(...t.concat(this));
	}
};
function cm(e) {
	return lr(e) ? t0(e, () => {}) : e;
}
function dm(e, t, n) {
	if (e.has(t)) {
		let o = e.get(t);
		return n.update && ((o = n.update(o, t, e)), e.set(t, o)), o;
	}
	if (!n.insert) throw new Error(kt(10));
	const r = n.insert(t, e);
	return e.set(t, r), r;
}
function jj(e) {
	return typeof e == "boolean";
}
var Rj = () =>
		function (t) {
			const {
				thunk: n = !0,
				immutableCheck: r = !0,
				serializableCheck: o = !0,
				actionCreatorCheck: i = !0,
			} = t ?? {};
			let s = new o0();
			return n && (jj(n) ? s.push(wj) : s.push(Sj(n.extraArgument))), s;
		},
	Oj = "RTK_autoBatch",
	i0 = (e) => (t) => {
		setTimeout(t, e);
	},
	bj =
		typeof window < "u" && window.requestAnimationFrame
			? window.requestAnimationFrame
			: i0(10),
	Pj =
		(e = { type: "raf" }) =>
		(t) =>
		(...n) => {
			const r = t(...n);
			let o = !0,
				i = !1,
				s = !1;
			const a = new Set(),
				l =
					e.type === "tick"
						? queueMicrotask
						: e.type === "raf"
						? bj
						: e.type === "callback"
						? e.queueNotification
						: i0(e.timeout),
				u = () => {
					(s = !1), i && ((i = !1), a.forEach((d) => d()));
				};
			return Object.assign({}, r, {
				subscribe(d) {
					const f = () => o && d(),
						h = r.subscribe(f);
					return (
						a.add(d),
						() => {
							h(), a.delete(d);
						}
					);
				},
				dispatch(d) {
					var f;
					try {
						return (
							(o = !(
								(f = d == null ? void 0 : d.meta) != null &&
								f[Oj]
							)),
							(i = !o),
							i && (s || ((s = !0), l(u))),
							r.dispatch(d)
						);
					} finally {
						o = !0;
					}
				},
			});
		},
	kj = (e) =>
		function (n) {
			const { autoBatch: r = !0 } = n ?? {};
			let o = new o0(e);
			return r && o.push(Pj(typeof r == "object" ? r : void 0)), o;
		},
	Nj = !0;
function Tj(e) {
	const t = Rj(),
		{
			reducer: n = void 0,
			middleware: r,
			devTools: o = !0,
			preloadedState: i = void 0,
			enhancers: s = void 0,
		} = e || {};
	let a;
	if (typeof n == "function") a = n;
	else if (Jf(n)) a = Y1(n);
	else throw new Error(kt(1));
	let l;
	typeof r == "function" ? (l = r(t)) : (l = t());
	let u = kl;
	o && (u = Cj({ trace: !Nj, ...(typeof o == "object" && o) }));
	const d = Z1(...l),
		f = kj(d);
	let h = typeof s == "function" ? s(f) : f();
	const m = u(...h);
	return Vg(a, i, m);
}
function s0(e) {
	const t = {},
		n = [];
	let r;
	const o = {
		addCase(i, s) {
			const a = typeof i == "string" ? i : i.type;
			if (!a) throw new Error(kt(28));
			if (a in t) throw new Error(kt(29));
			return (t[a] = s), o;
		},
		addMatcher(i, s) {
			return n.push({ matcher: i, reducer: s }), o;
		},
		addDefaultCase(i) {
			return (r = i), o;
		},
	};
	return e(o), [t, n, r];
}
function _j(e) {
	return typeof e == "function";
}
function Dj(e, t) {
	let [n, r, o] = s0(t),
		i;
	if (_j(e)) i = () => cm(e());
	else {
		const a = cm(e);
		i = () => a;
	}
	function s(a = i(), l) {
		let u = [
			n[l.type],
			...r.filter(({ matcher: d }) => d(l)).map(({ reducer: d }) => d),
		];
		return (
			u.filter((d) => !!d).length === 0 && (u = [o]),
			u.reduce((d, f) => {
				if (f)
					if (Fr(d)) {
						const m = f(d, l);
						return m === void 0 ? d : m;
					} else {
						if (lr(d)) return t0(d, (h) => f(h, l));
						{
							const h = f(d, l);
							if (h === void 0) {
								if (d === null) return d;
								throw new Error(kt(9));
							}
							return h;
						}
					}
				return d;
			}, a)
		);
	}
	return (s.getInitialState = i), s;
}
var Lj = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
	Ij = (e = 21) => {
		let t = "",
			n = e;
		for (; n--; ) t += Lj[(Math.random() * 64) | 0];
		return t;
	},
	Aj = Symbol.for("rtk-slice-createasyncthunk");
function Mj(e, t) {
	return `${e}/${t}`;
}
function $j({ creators: e } = {}) {
	var n;
	const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Aj];
	return function (o) {
		const { name: i, reducerPath: s = i } = o;
		if (!i) throw new Error(kt(11));
		typeof process < "u";
		const a =
				(typeof o.reducers == "function"
					? o.reducers(Uj())
					: o.reducers) || {},
			l = Object.keys(a),
			u = {
				sliceCaseReducersByName: {},
				sliceCaseReducersByType: {},
				actionCreators: {},
				sliceMatchers: [],
			},
			d = {
				addCase(v, C) {
					const j = typeof v == "string" ? v : v.type;
					if (!j) throw new Error(kt(12));
					if (j in u.sliceCaseReducersByType) throw new Error(kt(13));
					return (u.sliceCaseReducersByType[j] = C), d;
				},
				addMatcher(v, C) {
					return u.sliceMatchers.push({ matcher: v, reducer: C }), d;
				},
				exposeAction(v, C) {
					return (u.actionCreators[v] = C), d;
				},
				exposeCaseReducer(v, C) {
					return (u.sliceCaseReducersByName[v] = C), d;
				},
			};
		l.forEach((v) => {
			const C = a[v],
				j = {
					reducerName: v,
					type: Mj(i, v),
					createNotation: typeof o.reducers == "function",
				};
			zj(C) ? Kj(j, C, d, t) : Bj(j, C, d);
		});
		function f() {
			const [v = {}, C = [], j = void 0] =
					typeof o.extraReducers == "function"
						? s0(o.extraReducers)
						: [o.extraReducers],
				E = { ...v, ...u.sliceCaseReducersByType };
			return Dj(o.initialState, (O) => {
				for (let R in E) O.addCase(R, E[R]);
				for (let R of u.sliceMatchers)
					O.addMatcher(R.matcher, R.reducer);
				for (let R of C) O.addMatcher(R.matcher, R.reducer);
				j && O.addDefaultCase(j);
			});
		}
		const h = (v) => v,
			m = new Map();
		let y;
		function w(v, C) {
			return y || (y = f()), y(v, C);
		}
		function S() {
			return y || (y = f()), y.getInitialState();
		}
		function g(v, C = !1) {
			function j(O) {
				let R = O[v];
				return typeof R > "u" && C && (R = S()), R;
			}
			function E(O = h) {
				const R = dm(m, C, { insert: () => new WeakMap() });
				return dm(R, O, {
					insert: () => {
						const D = {};
						for (const [N, L] of Object.entries(o.selectors ?? {}))
							D[N] = Fj(L, O, S, C);
						return D;
					},
				});
			}
			return {
				reducerPath: v,
				getSelectors: E,
				get selectors() {
					return E(j);
				},
				selectSlice: j,
			};
		}
		const x = {
			name: i,
			reducer: w,
			actions: u.actionCreators,
			caseReducers: u.sliceCaseReducersByName,
			getInitialState: S,
			...g(s),
			injectInto(v, { reducerPath: C, ...j } = {}) {
				const E = C ?? s;
				return (
					v.inject({ reducerPath: E, reducer: w }, j),
					{ ...x, ...g(E, !0) }
				);
			},
		};
		return x;
	};
}
function Fj(e, t, n, r) {
	function o(i, ...s) {
		let a = t(i);
		return typeof a > "u" && r && (a = n()), e(a, ...s);
	}
	return (o.unwrapped = e), o;
}
var Ci = $j();
function Uj() {
	function e(t, n) {
		return {
			_reducerDefinitionType: "asyncThunk",
			payloadCreator: t,
			...n,
		};
	}
	return (
		(e.withTypes = () => e),
		{
			reducer(t) {
				return Object.assign(
					{
						[t.name](...n) {
							return t(...n);
						},
					}[t.name],
					{ _reducerDefinitionType: "reducer" }
				);
			},
			preparedReducer(t, n) {
				return {
					_reducerDefinitionType: "reducerWithPrepare",
					prepare: t,
					reducer: n,
				};
			},
			asyncThunk: e,
		}
	);
}
function Bj({ type: e, reducerName: t, createNotation: n }, r, o) {
	let i, s;
	if ("reducer" in r) {
		if (n && !Hj(r)) throw new Error(kt(17));
		(i = r.reducer), (s = r.prepare);
	} else i = r;
	o.addCase(e, i)
		.exposeCaseReducer(t, i)
		.exposeAction(t, s ? di(e, s) : di(e));
}
function zj(e) {
	return e._reducerDefinitionType === "asyncThunk";
}
function Hj(e) {
	return e._reducerDefinitionType === "reducerWithPrepare";
}
function Kj({ type: e, reducerName: t }, n, r, o) {
	if (!o) throw new Error(kt(18));
	const {
			payloadCreator: i,
			fulfilled: s,
			pending: a,
			rejected: l,
			settled: u,
			options: d,
		} = n,
		f = o(e, i, d);
	r.exposeAction(t, f),
		s && r.addCase(f.fulfilled, s),
		a && r.addCase(f.pending, a),
		l && r.addCase(f.rejected, l),
		u && r.addMatcher(f.settled, u),
		r.exposeCaseReducer(t, {
			fulfilled: s || _a,
			pending: a || _a,
			rejected: l || _a,
			settled: u || _a,
		});
}
function _a() {}
var Wj = (e, t) => {
		if (typeof e != "function") throw new Error(kt(32));
	},
	tp = "listenerMiddleware",
	Qj = (e) => {
		let {
			type: t,
			actionCreator: n,
			matcher: r,
			predicate: o,
			effect: i,
		} = e;
		if (t) o = di(t).match;
		else if (n) (t = n.type), (o = n.match);
		else if (r) o = r;
		else if (!o) throw new Error(kt(21));
		return Wj(i), { predicate: o, type: t, effect: i };
	},
	Vj = Object.assign(
		(e) => {
			const { type: t, predicate: n, effect: r } = Qj(e);
			return {
				id: Ij(),
				effect: r,
				type: t,
				predicate: n,
				pending: new Set(),
				unsubscribe: () => {
					throw new Error(kt(22));
				},
			};
		},
		{ withTypes: () => Vj }
	),
	qj = Object.assign(di(`${tp}/add`), { withTypes: () => qj });
di(`${tp}/removeAll`);
var Gj = Object.assign(di(`${tp}/remove`), { withTypes: () => Gj });
function kt(e) {
	return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const Xj = { productsList: [] },
	a0 = Ci({
		name: "products",
		initialState: Xj,
		reducers: {
			setProductsData: (e, t) => {
				e.productsList = t.payload;
			},
		},
	}),
	{ setProductsData: l0 } = a0.actions,
	Jj = a0.reducer,
	Yj = { product: { reviews: [] } },
	u0 = Ci({
		name: "productDetails",
		initialState: Yj,
		reducers: {
			setProductDetails: (e, t) => {
				e.product = t.payload;
			},
		},
	}),
	{ setProductDetails: Zj } = u0.actions,
	eR = u0.reducer,
	tR = localStorage.getItem("cartItems")
		? JSON.parse(localStorage.getItem("cartItems"))
		: [],
	nR = localStorage.getItem("shippingAddress")
		? JSON.parse(localStorage.getItem("shippingAddress"))
		: {},
	rR = localStorage.getItem("paymentMethod")
		? JSON.parse(localStorage.getItem("paymentMethod"))
		: null,
	oR = { cartItems: tR, shippingAddress: nR, paymentMethod: rR },
	c0 = Ci({
		name: "cart",
		initialState: oR,
		reducers: {
			cartAddItem: (e, t) => {
				const n = t.payload,
					r = e.cartItems.find((i) => i.id === n._id),
					o = {
						id: n._id,
						name: n.name,
						image: n.image,
						price: n.price,
						countInStock: n.countInStock,
						qty: parseInt(n.qty),
					};
				r
					? (e.cartItems = e.cartItems.map((i) =>
							i.id === o.id ? o : i
					  ))
					: (e.cartItems = [...e.cartItems, o]),
					localStorage.setItem(
						"cartItems",
						JSON.stringify(e.cartItems)
					);
			},
			cartRemoveItem: (e, t) => {
				const n = t.payload;
				(e.cartItems = e.cartItems.filter((r) => r.id !== n)),
					localStorage.setItem(
						"cartItems",
						JSON.stringify(e.cartItems)
					);
			},
			setShippingAddress: (e, t) => {
				(e.shippingAddress = t.payload),
					localStorage.setItem(
						"shippingAddress",
						JSON.stringify(e.shippingAddress)
					);
			},
			savePaymentMethod: (e, t) => {
				(e.paymentMethod = t.payload),
					localStorage.setItem(
						"paymentMethod",
						JSON.stringify(e.paymentMethod)
					);
			},
			cartReset: (e, t) => {
				(e.cartItems = []), localStorage.removeItem("cartItems");
			},
		},
	}),
	{
		cartAddItem: fm,
		cartRemoveItem: iR,
		setShippingAddress: sR,
		savePaymentMethod: aR,
		cartReset: lR,
	} = c0.actions,
	uR = c0.reducer,
	cR = localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))
		: null,
	dR = { userInfo: cR, userList: [] },
	d0 = Ci({
		name: "userLogin",
		initialState: dR,
		reducers: {
			Login: (e, t) => {
				(e.userInfo = t.payload),
					localStorage.setItem(
						"userInfo",
						JSON.stringify(e.userInfo)
					);
			},
			Logout: (e) => {
				(e.userInfo = null), localStorage.removeItem("userInfo");
			},
			Register: (e, t) => {
				(e.userInfo = t.payload),
					localStorage.setItem(
						"userInfo",
						JSON.stringify(e.userInfo)
					);
			},
			getUserList: (e, t) => {
				e.userList = t.payload;
			},
			resetUserList: (e, t) => {
				e.userList = [];
			},
		},
	}),
	{
		Login: f0,
		Logout: fR,
		Register: pR,
		getUserList: hR,
		resetUserList: mR,
	} = d0.actions,
	vR = d0.reducer,
	yR = { user: null },
	p0 = Ci({
		name: "userDetails",
		initialState: yR,
		reducers: {
			setUserDetails: (e, t) => {
				e.user = t.payload;
			},
		},
	}),
	{ setUserDetails: Nd } = p0.actions,
	gR = p0.reducer,
	xR = localStorage.getItem("myOrders")
		? JSON.parse(localStorage.getItem("myOrders"))
		: {},
	wR = { order: {}, orderDetails: {}, myOrders: xR },
	h0 = Ci({
		name: "order",
		initialState: wR,
		reducers: {
			createOrder: (e, t) => {
				e.order = t.payload;
			},
			orderReset: (e, t) => {
				e.order = {};
			},
			getOrderDetails: (e, t) => {
				e.orderDetails = t.payload;
			},
			getMyOrders: (e, t) => {
				(e.myOrders = t.payload),
					localStorage.setItem(
						"myOrders",
						JSON.stringify(e.myOrders)
					);
			},
			resetMyOrders: (e) => {
				(e.myOrders = {}), localStorage.removeItem("myOrders");
			},
		},
	}),
	{
		createOrder: SR,
		orderReset: ER,
		getOrderDetails: CR,
		getMyOrders: jR,
		resetMyOrders: RR,
	} = h0.actions,
	OR = h0.reducer,
	bR = Tj({
		reducer: {
			productDetails: eR,
			products: Jj,
			cart: uR,
			userLogin: vR,
			userDetails: gR,
			order: OR,
		},
	});
function Td(e, t) {
	return (
		(Td = Object.setPrototypeOf
			? Object.setPrototypeOf.bind()
			: function (r, o) {
					return (r.__proto__ = o), r;
			  }),
		Td(e, t)
	);
}
function Oo(e, t) {
	(e.prototype = Object.create(t.prototype)),
		(e.prototype.constructor = e),
		Td(e, t);
}
var ji = (function () {
	function e() {
		this.listeners = [];
	}
	var t = e.prototype;
	return (
		(t.subscribe = function (r) {
			var o = this,
				i = r || function () {};
			return (
				this.listeners.push(i),
				this.onSubscribe(),
				function () {
					(o.listeners = o.listeners.filter(function (s) {
						return s !== i;
					})),
						o.onUnsubscribe();
				}
			);
		}),
		(t.hasListeners = function () {
			return this.listeners.length > 0;
		}),
		(t.onSubscribe = function () {}),
		(t.onUnsubscribe = function () {}),
		e
	);
})();
function ue() {
	return (
		(ue = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) &&
								(e[r] = n[r]);
					}
					return e;
			  }),
		ue.apply(this, arguments)
	);
}
var _l = typeof window > "u";
function ut() {}
function PR(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function _d(e) {
	return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Dl(e) {
	return Array.isArray(e) ? e : [e];
}
function m0(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0);
}
function Xa(e, t, n) {
	return ta(e)
		? typeof t == "function"
			? ue({}, n, { queryKey: e, queryFn: t })
			: ue({}, t, { queryKey: e })
		: e;
}
function kR(e, t, n) {
	return ta(e)
		? typeof t == "function"
			? ue({}, n, { mutationKey: e, mutationFn: t })
			: ue({}, t, { mutationKey: e })
		: typeof e == "function"
		? ue({}, t, { mutationFn: e })
		: ue({}, e);
}
function xr(e, t, n) {
	return ta(e) ? [ue({}, t, { queryKey: e }), n] : [e || {}, t];
}
function NR(e, t) {
	if ((e === !0 && t === !0) || (e == null && t == null)) return "all";
	if (e === !1 && t === !1) return "none";
	var n = e ?? !t;
	return n ? "active" : "inactive";
}
function pm(e, t) {
	var n = e.active,
		r = e.exact,
		o = e.fetching,
		i = e.inactive,
		s = e.predicate,
		a = e.queryKey,
		l = e.stale;
	if (ta(a)) {
		if (r) {
			if (t.queryHash !== np(a, t.options)) return !1;
		} else if (!Ll(t.queryKey, a)) return !1;
	}
	var u = NR(n, i);
	if (u === "none") return !1;
	if (u !== "all") {
		var d = t.isActive();
		if ((u === "active" && !d) || (u === "inactive" && d)) return !1;
	}
	return !(
		(typeof l == "boolean" && t.isStale() !== l) ||
		(typeof o == "boolean" && t.isFetching() !== o) ||
		(s && !s(t))
	);
}
function hm(e, t) {
	var n = e.exact,
		r = e.fetching,
		o = e.predicate,
		i = e.mutationKey;
	if (ta(i)) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (io(t.options.mutationKey) !== io(i)) return !1;
		} else if (!Ll(t.options.mutationKey, i)) return !1;
	}
	return !(
		(typeof r == "boolean" && (t.state.status === "loading") !== r) ||
		(o && !o(t))
	);
}
function np(e, t) {
	var n = (t == null ? void 0 : t.queryKeyHashFn) || io;
	return n(e);
}
function io(e) {
	var t = Dl(e);
	return TR(t);
}
function TR(e) {
	return JSON.stringify(e, function (t, n) {
		return Dd(n)
			? Object.keys(n)
					.sort()
					.reduce(function (r, o) {
						return (r[o] = n[o]), r;
					}, {})
			: n;
	});
}
function Ll(e, t) {
	return v0(Dl(e), Dl(t));
}
function v0(e, t) {
	return e === t
		? !0
		: typeof e != typeof t
		? !1
		: e && t && typeof e == "object" && typeof t == "object"
		? !Object.keys(t).some(function (n) {
				return !v0(e[n], t[n]);
		  })
		: !1;
}
function Il(e, t) {
	if (e === t) return e;
	var n = Array.isArray(e) && Array.isArray(t);
	if (n || (Dd(e) && Dd(t))) {
		for (
			var r = n ? e.length : Object.keys(e).length,
				o = n ? t : Object.keys(t),
				i = o.length,
				s = n ? [] : {},
				a = 0,
				l = 0;
			l < i;
			l++
		) {
			var u = n ? l : o[l];
			(s[u] = Il(e[u], t[u])), s[u] === e[u] && a++;
		}
		return r === i && a === r ? e : s;
	}
	return t;
}
function _R(e, t) {
	if ((e && !t) || (t && !e)) return !1;
	for (var n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
function Dd(e) {
	if (!mm(e)) return !1;
	var t = e.constructor;
	if (typeof t > "u") return !0;
	var n = t.prototype;
	return !(!mm(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function mm(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function ta(e) {
	return typeof e == "string" || Array.isArray(e);
}
function DR(e) {
	return new Promise(function (t) {
		setTimeout(t, e);
	});
}
function vm(e) {
	Promise.resolve()
		.then(e)
		.catch(function (t) {
			return setTimeout(function () {
				throw t;
			});
		});
}
function y0() {
	if (typeof AbortController == "function") return new AbortController();
}
var LR = (function (e) {
		Oo(t, e);
		function t() {
			var r;
			return (
				(r = e.call(this) || this),
				(r.setup = function (o) {
					var i;
					if (!_l && (i = window) != null && i.addEventListener) {
						var s = function () {
							return o();
						};
						return (
							window.addEventListener("visibilitychange", s, !1),
							window.addEventListener("focus", s, !1),
							function () {
								window.removeEventListener(
									"visibilitychange",
									s
								),
									window.removeEventListener("focus", s);
							}
						);
					}
				}),
				r
			);
		}
		var n = t.prototype;
		return (
			(n.onSubscribe = function () {
				this.cleanup || this.setEventListener(this.setup);
			}),
			(n.onUnsubscribe = function () {
				if (!this.hasListeners()) {
					var o;
					(o = this.cleanup) == null || o.call(this),
						(this.cleanup = void 0);
				}
			}),
			(n.setEventListener = function (o) {
				var i,
					s = this;
				(this.setup = o),
					(i = this.cleanup) == null || i.call(this),
					(this.cleanup = o(function (a) {
						typeof a == "boolean" ? s.setFocused(a) : s.onFocus();
					}));
			}),
			(n.setFocused = function (o) {
				(this.focused = o), o && this.onFocus();
			}),
			(n.onFocus = function () {
				this.listeners.forEach(function (o) {
					o();
				});
			}),
			(n.isFocused = function () {
				return typeof this.focused == "boolean"
					? this.focused
					: typeof document > "u"
					? !0
					: [void 0, "visible", "prerender"].includes(
							document.visibilityState
					  );
			}),
			t
		);
	})(ji),
	hs = new LR(),
	IR = (function (e) {
		Oo(t, e);
		function t() {
			var r;
			return (
				(r = e.call(this) || this),
				(r.setup = function (o) {
					var i;
					if (!_l && (i = window) != null && i.addEventListener) {
						var s = function () {
							return o();
						};
						return (
							window.addEventListener("online", s, !1),
							window.addEventListener("offline", s, !1),
							function () {
								window.removeEventListener("online", s),
									window.removeEventListener("offline", s);
							}
						);
					}
				}),
				r
			);
		}
		var n = t.prototype;
		return (
			(n.onSubscribe = function () {
				this.cleanup || this.setEventListener(this.setup);
			}),
			(n.onUnsubscribe = function () {
				if (!this.hasListeners()) {
					var o;
					(o = this.cleanup) == null || o.call(this),
						(this.cleanup = void 0);
				}
			}),
			(n.setEventListener = function (o) {
				var i,
					s = this;
				(this.setup = o),
					(i = this.cleanup) == null || i.call(this),
					(this.cleanup = o(function (a) {
						typeof a == "boolean" ? s.setOnline(a) : s.onOnline();
					}));
			}),
			(n.setOnline = function (o) {
				(this.online = o), o && this.onOnline();
			}),
			(n.onOnline = function () {
				this.listeners.forEach(function (o) {
					o();
				});
			}),
			(n.isOnline = function () {
				return typeof this.online == "boolean"
					? this.online
					: typeof navigator > "u" || typeof navigator.onLine > "u"
					? !0
					: navigator.onLine;
			}),
			t
		);
	})(ji),
	Ja = new IR();
function AR(e) {
	return Math.min(1e3 * Math.pow(2, e), 3e4);
}
function Al(e) {
	return typeof (e == null ? void 0 : e.cancel) == "function";
}
var g0 = function (t) {
	(this.revert = t == null ? void 0 : t.revert),
		(this.silent = t == null ? void 0 : t.silent);
};
function Ya(e) {
	return e instanceof g0;
}
var x0 = function (t) {
		var n = this,
			r = !1,
			o,
			i,
			s,
			a;
		(this.abort = t.abort),
			(this.cancel = function (h) {
				return o == null ? void 0 : o(h);
			}),
			(this.cancelRetry = function () {
				r = !0;
			}),
			(this.continueRetry = function () {
				r = !1;
			}),
			(this.continue = function () {
				return i == null ? void 0 : i();
			}),
			(this.failureCount = 0),
			(this.isPaused = !1),
			(this.isResolved = !1),
			(this.isTransportCancelable = !1),
			(this.promise = new Promise(function (h, m) {
				(s = h), (a = m);
			}));
		var l = function (m) {
				n.isResolved ||
					((n.isResolved = !0),
					t.onSuccess == null || t.onSuccess(m),
					i == null || i(),
					s(m));
			},
			u = function (m) {
				n.isResolved ||
					((n.isResolved = !0),
					t.onError == null || t.onError(m),
					i == null || i(),
					a(m));
			},
			d = function () {
				return new Promise(function (m) {
					(i = m),
						(n.isPaused = !0),
						t.onPause == null || t.onPause();
				}).then(function () {
					(i = void 0),
						(n.isPaused = !1),
						t.onContinue == null || t.onContinue();
				});
			},
			f = function h() {
				if (!n.isResolved) {
					var m;
					try {
						m = t.fn();
					} catch (y) {
						m = Promise.reject(y);
					}
					(o = function (w) {
						if (
							!n.isResolved &&
							(u(new g0(w)), n.abort == null || n.abort(), Al(m))
						)
							try {
								m.cancel();
							} catch {}
					}),
						(n.isTransportCancelable = Al(m)),
						Promise.resolve(m)
							.then(l)
							.catch(function (y) {
								var w, S;
								if (!n.isResolved) {
									var g = (w = t.retry) != null ? w : 3,
										x = (S = t.retryDelay) != null ? S : AR,
										v =
											typeof x == "function"
												? x(n.failureCount, y)
												: x,
										C =
											g === !0 ||
											(typeof g == "number" &&
												n.failureCount < g) ||
											(typeof g == "function" &&
												g(n.failureCount, y));
									if (r || !C) {
										u(y);
										return;
									}
									n.failureCount++,
										t.onFail == null ||
											t.onFail(n.failureCount, y),
										DR(v)
											.then(function () {
												if (
													!hs.isFocused() ||
													!Ja.isOnline()
												)
													return d();
											})
											.then(function () {
												r ? u(y) : h();
											});
								}
							});
				}
			};
		f();
	},
	MR = (function () {
		function e() {
			(this.queue = []),
				(this.transactions = 0),
				(this.notifyFn = function (n) {
					n();
				}),
				(this.batchNotifyFn = function (n) {
					n();
				});
		}
		var t = e.prototype;
		return (
			(t.batch = function (r) {
				var o;
				this.transactions++;
				try {
					o = r();
				} finally {
					this.transactions--, this.transactions || this.flush();
				}
				return o;
			}),
			(t.schedule = function (r) {
				var o = this;
				this.transactions
					? this.queue.push(r)
					: vm(function () {
							o.notifyFn(r);
					  });
			}),
			(t.batchCalls = function (r) {
				var o = this;
				return function () {
					for (
						var i = arguments.length, s = new Array(i), a = 0;
						a < i;
						a++
					)
						s[a] = arguments[a];
					o.schedule(function () {
						r.apply(void 0, s);
					});
				};
			}),
			(t.flush = function () {
				var r = this,
					o = this.queue;
				(this.queue = []),
					o.length &&
						vm(function () {
							r.batchNotifyFn(function () {
								o.forEach(function (i) {
									r.notifyFn(i);
								});
							});
						});
			}),
			(t.setNotifyFunction = function (r) {
				this.notifyFn = r;
			}),
			(t.setBatchNotifyFunction = function (r) {
				this.batchNotifyFn = r;
			}),
			e
		);
	})(),
	_e = new MR(),
	w0 = console;
function Ml() {
	return w0;
}
function $R(e) {
	w0 = e;
}
var FR = (function () {
		function e(n) {
			(this.abortSignalConsumed = !1),
				(this.hadObservers = !1),
				(this.defaultOptions = n.defaultOptions),
				this.setOptions(n.options),
				(this.observers = []),
				(this.cache = n.cache),
				(this.queryKey = n.queryKey),
				(this.queryHash = n.queryHash),
				(this.initialState =
					n.state || this.getDefaultState(this.options)),
				(this.state = this.initialState),
				(this.meta = n.meta),
				this.scheduleGc();
		}
		var t = e.prototype;
		return (
			(t.setOptions = function (r) {
				var o;
				(this.options = ue({}, this.defaultOptions, r)),
					(this.meta = r == null ? void 0 : r.meta),
					(this.cacheTime = Math.max(
						this.cacheTime || 0,
						(o = this.options.cacheTime) != null ? o : 5 * 60 * 1e3
					));
			}),
			(t.setDefaultOptions = function (r) {
				this.defaultOptions = r;
			}),
			(t.scheduleGc = function () {
				var r = this;
				this.clearGcTimeout(),
					_d(this.cacheTime) &&
						(this.gcTimeout = setTimeout(function () {
							r.optionalRemove();
						}, this.cacheTime));
			}),
			(t.clearGcTimeout = function () {
				this.gcTimeout &&
					(clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
			}),
			(t.optionalRemove = function () {
				this.observers.length ||
					(this.state.isFetching
						? this.hadObservers && this.scheduleGc()
						: this.cache.remove(this));
			}),
			(t.setData = function (r, o) {
				var i,
					s,
					a = this.state.data,
					l = PR(r, a);
				return (
					(i = (s = this.options).isDataEqual) != null &&
					i.call(s, a, l)
						? (l = a)
						: this.options.structuralSharing !== !1 &&
						  (l = Il(a, l)),
					this.dispatch({
						data: l,
						type: "success",
						dataUpdatedAt: o == null ? void 0 : o.updatedAt,
					}),
					l
				);
			}),
			(t.setState = function (r, o) {
				this.dispatch({
					type: "setState",
					state: r,
					setStateOptions: o,
				});
			}),
			(t.cancel = function (r) {
				var o,
					i = this.promise;
				return (
					(o = this.retryer) == null || o.cancel(r),
					i ? i.then(ut).catch(ut) : Promise.resolve()
				);
			}),
			(t.destroy = function () {
				this.clearGcTimeout(), this.cancel({ silent: !0 });
			}),
			(t.reset = function () {
				this.destroy(), this.setState(this.initialState);
			}),
			(t.isActive = function () {
				return this.observers.some(function (r) {
					return r.options.enabled !== !1;
				});
			}),
			(t.isFetching = function () {
				return this.state.isFetching;
			}),
			(t.isStale = function () {
				return (
					this.state.isInvalidated ||
					!this.state.dataUpdatedAt ||
					this.observers.some(function (r) {
						return r.getCurrentResult().isStale;
					})
				);
			}),
			(t.isStaleByTime = function (r) {
				return (
					r === void 0 && (r = 0),
					this.state.isInvalidated ||
						!this.state.dataUpdatedAt ||
						!m0(this.state.dataUpdatedAt, r)
				);
			}),
			(t.onFocus = function () {
				var r,
					o = this.observers.find(function (i) {
						return i.shouldFetchOnWindowFocus();
					});
				o && o.refetch(), (r = this.retryer) == null || r.continue();
			}),
			(t.onOnline = function () {
				var r,
					o = this.observers.find(function (i) {
						return i.shouldFetchOnReconnect();
					});
				o && o.refetch(), (r = this.retryer) == null || r.continue();
			}),
			(t.addObserver = function (r) {
				this.observers.indexOf(r) === -1 &&
					(this.observers.push(r),
					(this.hadObservers = !0),
					this.clearGcTimeout(),
					this.cache.notify({
						type: "observerAdded",
						query: this,
						observer: r,
					}));
			}),
			(t.removeObserver = function (r) {
				this.observers.indexOf(r) !== -1 &&
					((this.observers = this.observers.filter(function (o) {
						return o !== r;
					})),
					this.observers.length ||
						(this.retryer &&
							(this.retryer.isTransportCancelable ||
							this.abortSignalConsumed
								? this.retryer.cancel({ revert: !0 })
								: this.retryer.cancelRetry()),
						this.cacheTime
							? this.scheduleGc()
							: this.cache.remove(this)),
					this.cache.notify({
						type: "observerRemoved",
						query: this,
						observer: r,
					}));
			}),
			(t.getObserversCount = function () {
				return this.observers.length;
			}),
			(t.invalidate = function () {
				this.state.isInvalidated ||
					this.dispatch({ type: "invalidate" });
			}),
			(t.fetch = function (r, o) {
				var i = this,
					s,
					a,
					l;
				if (this.state.isFetching) {
					if (
						this.state.dataUpdatedAt &&
						o != null &&
						o.cancelRefetch
					)
						this.cancel({ silent: !0 });
					else if (this.promise) {
						var u;
						return (
							(u = this.retryer) == null || u.continueRetry(),
							this.promise
						);
					}
				}
				if ((r && this.setOptions(r), !this.options.queryFn)) {
					var d = this.observers.find(function (x) {
						return x.options.queryFn;
					});
					d && this.setOptions(d.options);
				}
				var f = Dl(this.queryKey),
					h = y0(),
					m = { queryKey: f, pageParam: void 0, meta: this.meta };
				Object.defineProperty(m, "signal", {
					enumerable: !0,
					get: function () {
						if (h) return (i.abortSignalConsumed = !0), h.signal;
					},
				});
				var y = function () {
						return i.options.queryFn
							? ((i.abortSignalConsumed = !1),
							  i.options.queryFn(m))
							: Promise.reject("Missing queryFn");
					},
					w = {
						fetchOptions: o,
						options: this.options,
						queryKey: f,
						state: this.state,
						fetchFn: y,
						meta: this.meta,
					};
				if ((s = this.options.behavior) != null && s.onFetch) {
					var S;
					(S = this.options.behavior) == null || S.onFetch(w);
				}
				if (
					((this.revertState = this.state),
					!this.state.isFetching ||
						this.state.fetchMeta !==
							((a = w.fetchOptions) == null ? void 0 : a.meta))
				) {
					var g;
					this.dispatch({
						type: "fetch",
						meta: (g = w.fetchOptions) == null ? void 0 : g.meta,
					});
				}
				return (
					(this.retryer = new x0({
						fn: w.fetchFn,
						abort:
							h == null || (l = h.abort) == null
								? void 0
								: l.bind(h),
						onSuccess: function (v) {
							i.setData(v),
								i.cache.config.onSuccess == null ||
									i.cache.config.onSuccess(v, i),
								i.cacheTime === 0 && i.optionalRemove();
						},
						onError: function (v) {
							(Ya(v) && v.silent) ||
								i.dispatch({ type: "error", error: v }),
								Ya(v) ||
									(i.cache.config.onError == null ||
										i.cache.config.onError(v, i),
									Ml().error(v)),
								i.cacheTime === 0 && i.optionalRemove();
						},
						onFail: function () {
							i.dispatch({ type: "failed" });
						},
						onPause: function () {
							i.dispatch({ type: "pause" });
						},
						onContinue: function () {
							i.dispatch({ type: "continue" });
						},
						retry: w.options.retry,
						retryDelay: w.options.retryDelay,
					})),
					(this.promise = this.retryer.promise),
					this.promise
				);
			}),
			(t.dispatch = function (r) {
				var o = this;
				(this.state = this.reducer(this.state, r)),
					_e.batch(function () {
						o.observers.forEach(function (i) {
							i.onQueryUpdate(r);
						}),
							o.cache.notify({
								query: o,
								type: "queryUpdated",
								action: r,
							});
					});
			}),
			(t.getDefaultState = function (r) {
				var o =
						typeof r.initialData == "function"
							? r.initialData()
							: r.initialData,
					i = typeof r.initialData < "u",
					s = i
						? typeof r.initialDataUpdatedAt == "function"
							? r.initialDataUpdatedAt()
							: r.initialDataUpdatedAt
						: 0,
					a = typeof o < "u";
				return {
					data: o,
					dataUpdateCount: 0,
					dataUpdatedAt: a ? s ?? Date.now() : 0,
					error: null,
					errorUpdateCount: 0,
					errorUpdatedAt: 0,
					fetchFailureCount: 0,
					fetchMeta: null,
					isFetching: !1,
					isInvalidated: !1,
					isPaused: !1,
					status: a ? "success" : "idle",
				};
			}),
			(t.reducer = function (r, o) {
				var i, s;
				switch (o.type) {
					case "failed":
						return ue({}, r, {
							fetchFailureCount: r.fetchFailureCount + 1,
						});
					case "pause":
						return ue({}, r, { isPaused: !0 });
					case "continue":
						return ue({}, r, { isPaused: !1 });
					case "fetch":
						return ue(
							{},
							r,
							{
								fetchFailureCount: 0,
								fetchMeta: (i = o.meta) != null ? i : null,
								isFetching: !0,
								isPaused: !1,
							},
							!r.dataUpdatedAt && {
								error: null,
								status: "loading",
							}
						);
					case "success":
						return ue({}, r, {
							data: o.data,
							dataUpdateCount: r.dataUpdateCount + 1,
							dataUpdatedAt:
								(s = o.dataUpdatedAt) != null ? s : Date.now(),
							error: null,
							fetchFailureCount: 0,
							isFetching: !1,
							isInvalidated: !1,
							isPaused: !1,
							status: "success",
						});
					case "error":
						var a = o.error;
						return Ya(a) && a.revert && this.revertState
							? ue({}, this.revertState)
							: ue({}, r, {
									error: a,
									errorUpdateCount: r.errorUpdateCount + 1,
									errorUpdatedAt: Date.now(),
									fetchFailureCount: r.fetchFailureCount + 1,
									isFetching: !1,
									isPaused: !1,
									status: "error",
							  });
					case "invalidate":
						return ue({}, r, { isInvalidated: !0 });
					case "setState":
						return ue({}, r, o.state);
					default:
						return r;
				}
			}),
			e
		);
	})(),
	UR = (function (e) {
		Oo(t, e);
		function t(r) {
			var o;
			return (
				(o = e.call(this) || this),
				(o.config = r || {}),
				(o.queries = []),
				(o.queriesMap = {}),
				o
			);
		}
		var n = t.prototype;
		return (
			(n.build = function (o, i, s) {
				var a,
					l = i.queryKey,
					u = (a = i.queryHash) != null ? a : np(l, i),
					d = this.get(u);
				return (
					d ||
						((d = new FR({
							cache: this,
							queryKey: l,
							queryHash: u,
							options: o.defaultQueryOptions(i),
							state: s,
							defaultOptions: o.getQueryDefaults(l),
							meta: i.meta,
						})),
						this.add(d)),
					d
				);
			}),
			(n.add = function (o) {
				this.queriesMap[o.queryHash] ||
					((this.queriesMap[o.queryHash] = o),
					this.queries.push(o),
					this.notify({ type: "queryAdded", query: o }));
			}),
			(n.remove = function (o) {
				var i = this.queriesMap[o.queryHash];
				i &&
					(o.destroy(),
					(this.queries = this.queries.filter(function (s) {
						return s !== o;
					})),
					i === o && delete this.queriesMap[o.queryHash],
					this.notify({ type: "queryRemoved", query: o }));
			}),
			(n.clear = function () {
				var o = this;
				_e.batch(function () {
					o.queries.forEach(function (i) {
						o.remove(i);
					});
				});
			}),
			(n.get = function (o) {
				return this.queriesMap[o];
			}),
			(n.getAll = function () {
				return this.queries;
			}),
			(n.find = function (o, i) {
				var s = xr(o, i),
					a = s[0];
				return (
					typeof a.exact > "u" && (a.exact = !0),
					this.queries.find(function (l) {
						return pm(a, l);
					})
				);
			}),
			(n.findAll = function (o, i) {
				var s = xr(o, i),
					a = s[0];
				return Object.keys(a).length > 0
					? this.queries.filter(function (l) {
							return pm(a, l);
					  })
					: this.queries;
			}),
			(n.notify = function (o) {
				var i = this;
				_e.batch(function () {
					i.listeners.forEach(function (s) {
						s(o);
					});
				});
			}),
			(n.onFocus = function () {
				var o = this;
				_e.batch(function () {
					o.queries.forEach(function (i) {
						i.onFocus();
					});
				});
			}),
			(n.onOnline = function () {
				var o = this;
				_e.batch(function () {
					o.queries.forEach(function (i) {
						i.onOnline();
					});
				});
			}),
			t
		);
	})(ji),
	BR = (function () {
		function e(n) {
			(this.options = ue({}, n.defaultOptions, n.options)),
				(this.mutationId = n.mutationId),
				(this.mutationCache = n.mutationCache),
				(this.observers = []),
				(this.state = n.state || S0()),
				(this.meta = n.meta);
		}
		var t = e.prototype;
		return (
			(t.setState = function (r) {
				this.dispatch({ type: "setState", state: r });
			}),
			(t.addObserver = function (r) {
				this.observers.indexOf(r) === -1 && this.observers.push(r);
			}),
			(t.removeObserver = function (r) {
				this.observers = this.observers.filter(function (o) {
					return o !== r;
				});
			}),
			(t.cancel = function () {
				return this.retryer
					? (this.retryer.cancel(),
					  this.retryer.promise.then(ut).catch(ut))
					: Promise.resolve();
			}),
			(t.continue = function () {
				return this.retryer
					? (this.retryer.continue(), this.retryer.promise)
					: this.execute();
			}),
			(t.execute = function () {
				var r = this,
					o,
					i = this.state.status === "loading",
					s = Promise.resolve();
				return (
					i ||
						(this.dispatch({
							type: "loading",
							variables: this.options.variables,
						}),
						(s = s
							.then(function () {
								r.mutationCache.config.onMutate == null ||
									r.mutationCache.config.onMutate(
										r.state.variables,
										r
									);
							})
							.then(function () {
								return r.options.onMutate == null
									? void 0
									: r.options.onMutate(r.state.variables);
							})
							.then(function (a) {
								a !== r.state.context &&
									r.dispatch({
										type: "loading",
										context: a,
										variables: r.state.variables,
									});
							}))),
					s
						.then(function () {
							return r.executeMutation();
						})
						.then(function (a) {
							(o = a),
								r.mutationCache.config.onSuccess == null ||
									r.mutationCache.config.onSuccess(
										o,
										r.state.variables,
										r.state.context,
										r
									);
						})
						.then(function () {
							return r.options.onSuccess == null
								? void 0
								: r.options.onSuccess(
										o,
										r.state.variables,
										r.state.context
								  );
						})
						.then(function () {
							return r.options.onSettled == null
								? void 0
								: r.options.onSettled(
										o,
										null,
										r.state.variables,
										r.state.context
								  );
						})
						.then(function () {
							return r.dispatch({ type: "success", data: o }), o;
						})
						.catch(function (a) {
							return (
								r.mutationCache.config.onError == null ||
									r.mutationCache.config.onError(
										a,
										r.state.variables,
										r.state.context,
										r
									),
								Ml().error(a),
								Promise.resolve()
									.then(function () {
										return r.options.onError == null
											? void 0
											: r.options.onError(
													a,
													r.state.variables,
													r.state.context
											  );
									})
									.then(function () {
										return r.options.onSettled == null
											? void 0
											: r.options.onSettled(
													void 0,
													a,
													r.state.variables,
													r.state.context
											  );
									})
									.then(function () {
										throw (
											(r.dispatch({
												type: "error",
												error: a,
											}),
											a)
										);
									})
							);
						})
				);
			}),
			(t.executeMutation = function () {
				var r = this,
					o;
				return (
					(this.retryer = new x0({
						fn: function () {
							return r.options.mutationFn
								? r.options.mutationFn(r.state.variables)
								: Promise.reject("No mutationFn found");
						},
						onFail: function () {
							r.dispatch({ type: "failed" });
						},
						onPause: function () {
							r.dispatch({ type: "pause" });
						},
						onContinue: function () {
							r.dispatch({ type: "continue" });
						},
						retry: (o = this.options.retry) != null ? o : 0,
						retryDelay: this.options.retryDelay,
					})),
					this.retryer.promise
				);
			}),
			(t.dispatch = function (r) {
				var o = this;
				(this.state = zR(this.state, r)),
					_e.batch(function () {
						o.observers.forEach(function (i) {
							i.onMutationUpdate(r);
						}),
							o.mutationCache.notify(o);
					});
			}),
			e
		);
	})();
function S0() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		isPaused: !1,
		status: "idle",
		variables: void 0,
	};
}
function zR(e, t) {
	switch (t.type) {
		case "failed":
			return ue({}, e, { failureCount: e.failureCount + 1 });
		case "pause":
			return ue({}, e, { isPaused: !0 });
		case "continue":
			return ue({}, e, { isPaused: !1 });
		case "loading":
			return ue({}, e, {
				context: t.context,
				data: void 0,
				error: null,
				isPaused: !1,
				status: "loading",
				variables: t.variables,
			});
		case "success":
			return ue({}, e, {
				data: t.data,
				error: null,
				status: "success",
				isPaused: !1,
			});
		case "error":
			return ue({}, e, {
				data: void 0,
				error: t.error,
				failureCount: e.failureCount + 1,
				isPaused: !1,
				status: "error",
			});
		case "setState":
			return ue({}, e, t.state);
		default:
			return e;
	}
}
var HR = (function (e) {
	Oo(t, e);
	function t(r) {
		var o;
		return (
			(o = e.call(this) || this),
			(o.config = r || {}),
			(o.mutations = []),
			(o.mutationId = 0),
			o
		);
	}
	var n = t.prototype;
	return (
		(n.build = function (o, i, s) {
			var a = new BR({
				mutationCache: this,
				mutationId: ++this.mutationId,
				options: o.defaultMutationOptions(i),
				state: s,
				defaultOptions: i.mutationKey
					? o.getMutationDefaults(i.mutationKey)
					: void 0,
				meta: i.meta,
			});
			return this.add(a), a;
		}),
		(n.add = function (o) {
			this.mutations.push(o), this.notify(o);
		}),
		(n.remove = function (o) {
			(this.mutations = this.mutations.filter(function (i) {
				return i !== o;
			})),
				o.cancel(),
				this.notify(o);
		}),
		(n.clear = function () {
			var o = this;
			_e.batch(function () {
				o.mutations.forEach(function (i) {
					o.remove(i);
				});
			});
		}),
		(n.getAll = function () {
			return this.mutations;
		}),
		(n.find = function (o) {
			return (
				typeof o.exact > "u" && (o.exact = !0),
				this.mutations.find(function (i) {
					return hm(o, i);
				})
			);
		}),
		(n.findAll = function (o) {
			return this.mutations.filter(function (i) {
				return hm(o, i);
			});
		}),
		(n.notify = function (o) {
			var i = this;
			_e.batch(function () {
				i.listeners.forEach(function (s) {
					s(o);
				});
			});
		}),
		(n.onFocus = function () {
			this.resumePausedMutations();
		}),
		(n.onOnline = function () {
			this.resumePausedMutations();
		}),
		(n.resumePausedMutations = function () {
			var o = this.mutations.filter(function (i) {
				return i.state.isPaused;
			});
			return _e.batch(function () {
				return o.reduce(function (i, s) {
					return i.then(function () {
						return s.continue().catch(ut);
					});
				}, Promise.resolve());
			});
		}),
		t
	);
})(ji);
function KR() {
	return {
		onFetch: function (t) {
			t.fetchFn = function () {
				var n,
					r,
					o,
					i,
					s,
					a,
					l =
						(n = t.fetchOptions) == null || (r = n.meta) == null
							? void 0
							: r.refetchPage,
					u =
						(o = t.fetchOptions) == null || (i = o.meta) == null
							? void 0
							: i.fetchMore,
					d = u == null ? void 0 : u.pageParam,
					f = (u == null ? void 0 : u.direction) === "forward",
					h = (u == null ? void 0 : u.direction) === "backward",
					m = ((s = t.state.data) == null ? void 0 : s.pages) || [],
					y =
						((a = t.state.data) == null ? void 0 : a.pageParams) ||
						[],
					w = y0(),
					S = w == null ? void 0 : w.signal,
					g = y,
					x = !1,
					v =
						t.options.queryFn ||
						function () {
							return Promise.reject("Missing queryFn");
						},
					C = function (J, oe, Y, K) {
						return (
							(g = K ? [oe].concat(g) : [].concat(g, [oe])),
							K ? [Y].concat(J) : [].concat(J, [Y])
						);
					},
					j = function (J, oe, Y, K) {
						if (x) return Promise.reject("Cancelled");
						if (typeof Y > "u" && !oe && J.length)
							return Promise.resolve(J);
						var T = {
								queryKey: t.queryKey,
								signal: S,
								pageParam: Y,
								meta: t.meta,
							},
							M = v(T),
							F = Promise.resolve(M).then(function (se) {
								return C(J, Y, se, K);
							});
						if (Al(M)) {
							var Q = F;
							Q.cancel = M.cancel;
						}
						return F;
					},
					E;
				if (!m.length) E = j([]);
				else if (f) {
					var O = typeof d < "u",
						R = O ? d : ym(t.options, m);
					E = j(m, O, R);
				} else if (h) {
					var D = typeof d < "u",
						N = D ? d : WR(t.options, m);
					E = j(m, D, N, !0);
				} else
					(function () {
						g = [];
						var B = typeof t.options.getNextPageParam > "u",
							J = l && m[0] ? l(m[0], 0, m) : !0;
						E = J
							? j([], B, y[0])
							: Promise.resolve(C([], y[0], m[0]));
						for (
							var oe = function (T) {
									E = E.then(function (M) {
										var F = l && m[T] ? l(m[T], T, m) : !0;
										if (F) {
											var Q = B ? y[T] : ym(t.options, M);
											return j(M, B, Q);
										}
										return Promise.resolve(
											C(M, y[T], m[T])
										);
									});
								},
								Y = 1;
							Y < m.length;
							Y++
						)
							oe(Y);
					})();
				var L = E.then(function (B) {
						return { pages: B, pageParams: g };
					}),
					$ = L;
				return (
					($.cancel = function () {
						(x = !0), w == null || w.abort(), Al(E) && E.cancel();
					}),
					L
				);
			};
		},
	};
}
function ym(e, t) {
	return e.getNextPageParam == null
		? void 0
		: e.getNextPageParam(t[t.length - 1], t);
}
function WR(e, t) {
	return e.getPreviousPageParam == null
		? void 0
		: e.getPreviousPageParam(t[0], t);
}
var QR = (function () {
		function e(n) {
			n === void 0 && (n = {}),
				(this.queryCache = n.queryCache || new UR()),
				(this.mutationCache = n.mutationCache || new HR()),
				(this.defaultOptions = n.defaultOptions || {}),
				(this.queryDefaults = []),
				(this.mutationDefaults = []);
		}
		var t = e.prototype;
		return (
			(t.mount = function () {
				var r = this;
				(this.unsubscribeFocus = hs.subscribe(function () {
					hs.isFocused() &&
						Ja.isOnline() &&
						(r.mutationCache.onFocus(), r.queryCache.onFocus());
				})),
					(this.unsubscribeOnline = Ja.subscribe(function () {
						hs.isFocused() &&
							Ja.isOnline() &&
							(r.mutationCache.onOnline(),
							r.queryCache.onOnline());
					}));
			}),
			(t.unmount = function () {
				var r, o;
				(r = this.unsubscribeFocus) == null || r.call(this),
					(o = this.unsubscribeOnline) == null || o.call(this);
			}),
			(t.isFetching = function (r, o) {
				var i = xr(r, o),
					s = i[0];
				return (s.fetching = !0), this.queryCache.findAll(s).length;
			}),
			(t.isMutating = function (r) {
				return this.mutationCache.findAll(ue({}, r, { fetching: !0 }))
					.length;
			}),
			(t.getQueryData = function (r, o) {
				var i;
				return (i = this.queryCache.find(r, o)) == null
					? void 0
					: i.state.data;
			}),
			(t.getQueriesData = function (r) {
				return this.getQueryCache()
					.findAll(r)
					.map(function (o) {
						var i = o.queryKey,
							s = o.state,
							a = s.data;
						return [i, a];
					});
			}),
			(t.setQueryData = function (r, o, i) {
				var s = Xa(r),
					a = this.defaultQueryOptions(s);
				return this.queryCache.build(this, a).setData(o, i);
			}),
			(t.setQueriesData = function (r, o, i) {
				var s = this;
				return _e.batch(function () {
					return s
						.getQueryCache()
						.findAll(r)
						.map(function (a) {
							var l = a.queryKey;
							return [l, s.setQueryData(l, o, i)];
						});
				});
			}),
			(t.getQueryState = function (r, o) {
				var i;
				return (i = this.queryCache.find(r, o)) == null
					? void 0
					: i.state;
			}),
			(t.removeQueries = function (r, o) {
				var i = xr(r, o),
					s = i[0],
					a = this.queryCache;
				_e.batch(function () {
					a.findAll(s).forEach(function (l) {
						a.remove(l);
					});
				});
			}),
			(t.resetQueries = function (r, o, i) {
				var s = this,
					a = xr(r, o, i),
					l = a[0],
					u = a[1],
					d = this.queryCache,
					f = ue({}, l, { active: !0 });
				return _e.batch(function () {
					return (
						d.findAll(l).forEach(function (h) {
							h.reset();
						}),
						s.refetchQueries(f, u)
					);
				});
			}),
			(t.cancelQueries = function (r, o, i) {
				var s = this,
					a = xr(r, o, i),
					l = a[0],
					u = a[1],
					d = u === void 0 ? {} : u;
				typeof d.revert > "u" && (d.revert = !0);
				var f = _e.batch(function () {
					return s.queryCache.findAll(l).map(function (h) {
						return h.cancel(d);
					});
				});
				return Promise.all(f).then(ut).catch(ut);
			}),
			(t.invalidateQueries = function (r, o, i) {
				var s,
					a,
					l,
					u = this,
					d = xr(r, o, i),
					f = d[0],
					h = d[1],
					m = ue({}, f, {
						active:
							(s =
								(a = f.refetchActive) != null ? a : f.active) !=
							null
								? s
								: !0,
						inactive: (l = f.refetchInactive) != null ? l : !1,
					});
				return _e.batch(function () {
					return (
						u.queryCache.findAll(f).forEach(function (y) {
							y.invalidate();
						}),
						u.refetchQueries(m, h)
					);
				});
			}),
			(t.refetchQueries = function (r, o, i) {
				var s = this,
					a = xr(r, o, i),
					l = a[0],
					u = a[1],
					d = _e.batch(function () {
						return s.queryCache.findAll(l).map(function (h) {
							return h.fetch(
								void 0,
								ue({}, u, {
									meta: {
										refetchPage:
											l == null ? void 0 : l.refetchPage,
									},
								})
							);
						});
					}),
					f = Promise.all(d).then(ut);
				return (u != null && u.throwOnError) || (f = f.catch(ut)), f;
			}),
			(t.fetchQuery = function (r, o, i) {
				var s = Xa(r, o, i),
					a = this.defaultQueryOptions(s);
				typeof a.retry > "u" && (a.retry = !1);
				var l = this.queryCache.build(this, a);
				return l.isStaleByTime(a.staleTime)
					? l.fetch(a)
					: Promise.resolve(l.state.data);
			}),
			(t.prefetchQuery = function (r, o, i) {
				return this.fetchQuery(r, o, i).then(ut).catch(ut);
			}),
			(t.fetchInfiniteQuery = function (r, o, i) {
				var s = Xa(r, o, i);
				return (s.behavior = KR()), this.fetchQuery(s);
			}),
			(t.prefetchInfiniteQuery = function (r, o, i) {
				return this.fetchInfiniteQuery(r, o, i).then(ut).catch(ut);
			}),
			(t.cancelMutations = function () {
				var r = this,
					o = _e.batch(function () {
						return r.mutationCache.getAll().map(function (i) {
							return i.cancel();
						});
					});
				return Promise.all(o).then(ut).catch(ut);
			}),
			(t.resumePausedMutations = function () {
				return this.getMutationCache().resumePausedMutations();
			}),
			(t.executeMutation = function (r) {
				return this.mutationCache.build(this, r).execute();
			}),
			(t.getQueryCache = function () {
				return this.queryCache;
			}),
			(t.getMutationCache = function () {
				return this.mutationCache;
			}),
			(t.getDefaultOptions = function () {
				return this.defaultOptions;
			}),
			(t.setDefaultOptions = function (r) {
				this.defaultOptions = r;
			}),
			(t.setQueryDefaults = function (r, o) {
				var i = this.queryDefaults.find(function (s) {
					return io(r) === io(s.queryKey);
				});
				i
					? (i.defaultOptions = o)
					: this.queryDefaults.push({
							queryKey: r,
							defaultOptions: o,
					  });
			}),
			(t.getQueryDefaults = function (r) {
				var o;
				return r
					? (o = this.queryDefaults.find(function (i) {
							return Ll(r, i.queryKey);
					  })) == null
						? void 0
						: o.defaultOptions
					: void 0;
			}),
			(t.setMutationDefaults = function (r, o) {
				var i = this.mutationDefaults.find(function (s) {
					return io(r) === io(s.mutationKey);
				});
				i
					? (i.defaultOptions = o)
					: this.mutationDefaults.push({
							mutationKey: r,
							defaultOptions: o,
					  });
			}),
			(t.getMutationDefaults = function (r) {
				var o;
				return r
					? (o = this.mutationDefaults.find(function (i) {
							return Ll(r, i.mutationKey);
					  })) == null
						? void 0
						: o.defaultOptions
					: void 0;
			}),
			(t.defaultQueryOptions = function (r) {
				if (r != null && r._defaulted) return r;
				var o = ue(
					{},
					this.defaultOptions.queries,
					this.getQueryDefaults(r == null ? void 0 : r.queryKey),
					r,
					{ _defaulted: !0 }
				);
				return (
					!o.queryHash &&
						o.queryKey &&
						(o.queryHash = np(o.queryKey, o)),
					o
				);
			}),
			(t.defaultQueryObserverOptions = function (r) {
				return this.defaultQueryOptions(r);
			}),
			(t.defaultMutationOptions = function (r) {
				return r != null && r._defaulted
					? r
					: ue(
							{},
							this.defaultOptions.mutations,
							this.getMutationDefaults(
								r == null ? void 0 : r.mutationKey
							),
							r,
							{ _defaulted: !0 }
					  );
			}),
			(t.clear = function () {
				this.queryCache.clear(), this.mutationCache.clear();
			}),
			e
		);
	})(),
	VR = (function (e) {
		Oo(t, e);
		function t(r, o) {
			var i;
			return (
				(i = e.call(this) || this),
				(i.client = r),
				(i.options = o),
				(i.trackedProps = []),
				(i.selectError = null),
				i.bindMethods(),
				i.setOptions(o),
				i
			);
		}
		var n = t.prototype;
		return (
			(n.bindMethods = function () {
				(this.remove = this.remove.bind(this)),
					(this.refetch = this.refetch.bind(this));
			}),
			(n.onSubscribe = function () {
				this.listeners.length === 1 &&
					(this.currentQuery.addObserver(this),
					gm(this.currentQuery, this.options) && this.executeFetch(),
					this.updateTimers());
			}),
			(n.onUnsubscribe = function () {
				this.listeners.length || this.destroy();
			}),
			(n.shouldFetchOnReconnect = function () {
				return Ld(
					this.currentQuery,
					this.options,
					this.options.refetchOnReconnect
				);
			}),
			(n.shouldFetchOnWindowFocus = function () {
				return Ld(
					this.currentQuery,
					this.options,
					this.options.refetchOnWindowFocus
				);
			}),
			(n.destroy = function () {
				(this.listeners = []),
					this.clearTimers(),
					this.currentQuery.removeObserver(this);
			}),
			(n.setOptions = function (o, i) {
				var s = this.options,
					a = this.currentQuery;
				if (
					((this.options =
						this.client.defaultQueryObserverOptions(o)),
					typeof this.options.enabled < "u" &&
						typeof this.options.enabled != "boolean")
				)
					throw new Error("Expected enabled to be a boolean");
				this.options.queryKey || (this.options.queryKey = s.queryKey),
					this.updateQuery();
				var l = this.hasListeners();
				l &&
					xm(this.currentQuery, a, this.options, s) &&
					this.executeFetch(),
					this.updateResult(i),
					l &&
						(this.currentQuery !== a ||
							this.options.enabled !== s.enabled ||
							this.options.staleTime !== s.staleTime) &&
						this.updateStaleTimeout();
				var u = this.computeRefetchInterval();
				l &&
					(this.currentQuery !== a ||
						this.options.enabled !== s.enabled ||
						u !== this.currentRefetchInterval) &&
					this.updateRefetchInterval(u);
			}),
			(n.getOptimisticResult = function (o) {
				var i = this.client.defaultQueryObserverOptions(o),
					s = this.client.getQueryCache().build(this.client, i);
				return this.createResult(s, i);
			}),
			(n.getCurrentResult = function () {
				return this.currentResult;
			}),
			(n.trackResult = function (o, i) {
				var s = this,
					a = {},
					l = function (d) {
						s.trackedProps.includes(d) || s.trackedProps.push(d);
					};
				return (
					Object.keys(o).forEach(function (u) {
						Object.defineProperty(a, u, {
							configurable: !1,
							enumerable: !0,
							get: function () {
								return l(u), o[u];
							},
						});
					}),
					(i.useErrorBoundary || i.suspense) && l("error"),
					a
				);
			}),
			(n.getNextResult = function (o) {
				var i = this;
				return new Promise(function (s, a) {
					var l = i.subscribe(function (u) {
						u.isFetching ||
							(l(),
							u.isError && o != null && o.throwOnError
								? a(u.error)
								: s(u));
					});
				});
			}),
			(n.getCurrentQuery = function () {
				return this.currentQuery;
			}),
			(n.remove = function () {
				this.client.getQueryCache().remove(this.currentQuery);
			}),
			(n.refetch = function (o) {
				return this.fetch(
					ue({}, o, {
						meta: {
							refetchPage: o == null ? void 0 : o.refetchPage,
						},
					})
				);
			}),
			(n.fetchOptimistic = function (o) {
				var i = this,
					s = this.client.defaultQueryObserverOptions(o),
					a = this.client.getQueryCache().build(this.client, s);
				return a.fetch().then(function () {
					return i.createResult(a, s);
				});
			}),
			(n.fetch = function (o) {
				var i = this;
				return this.executeFetch(o).then(function () {
					return i.updateResult(), i.currentResult;
				});
			}),
			(n.executeFetch = function (o) {
				this.updateQuery();
				var i = this.currentQuery.fetch(this.options, o);
				return (o != null && o.throwOnError) || (i = i.catch(ut)), i;
			}),
			(n.updateStaleTimeout = function () {
				var o = this;
				if (
					(this.clearStaleTimeout(),
					!(
						_l ||
						this.currentResult.isStale ||
						!_d(this.options.staleTime)
					))
				) {
					var i = m0(
							this.currentResult.dataUpdatedAt,
							this.options.staleTime
						),
						s = i + 1;
					this.staleTimeoutId = setTimeout(function () {
						o.currentResult.isStale || o.updateResult();
					}, s);
				}
			}),
			(n.computeRefetchInterval = function () {
				var o;
				return typeof this.options.refetchInterval == "function"
					? this.options.refetchInterval(
							this.currentResult.data,
							this.currentQuery
					  )
					: (o = this.options.refetchInterval) != null
					? o
					: !1;
			}),
			(n.updateRefetchInterval = function (o) {
				var i = this;
				this.clearRefetchInterval(),
					(this.currentRefetchInterval = o),
					!(
						_l ||
						this.options.enabled === !1 ||
						!_d(this.currentRefetchInterval) ||
						this.currentRefetchInterval === 0
					) &&
						(this.refetchIntervalId = setInterval(function () {
							(i.options.refetchIntervalInBackground ||
								hs.isFocused()) &&
								i.executeFetch();
						}, this.currentRefetchInterval));
			}),
			(n.updateTimers = function () {
				this.updateStaleTimeout(),
					this.updateRefetchInterval(this.computeRefetchInterval());
			}),
			(n.clearTimers = function () {
				this.clearStaleTimeout(), this.clearRefetchInterval();
			}),
			(n.clearStaleTimeout = function () {
				this.staleTimeoutId &&
					(clearTimeout(this.staleTimeoutId),
					(this.staleTimeoutId = void 0));
			}),
			(n.clearRefetchInterval = function () {
				this.refetchIntervalId &&
					(clearInterval(this.refetchIntervalId),
					(this.refetchIntervalId = void 0));
			}),
			(n.createResult = function (o, i) {
				var s = this.currentQuery,
					a = this.options,
					l = this.currentResult,
					u = this.currentResultState,
					d = this.currentResultOptions,
					f = o !== s,
					h = f ? o.state : this.currentQueryInitialState,
					m = f ? this.currentResult : this.previousQueryResult,
					y = o.state,
					w = y.dataUpdatedAt,
					S = y.error,
					g = y.errorUpdatedAt,
					x = y.isFetching,
					v = y.status,
					C = !1,
					j = !1,
					E;
				if (i.optimisticResults) {
					var O = this.hasListeners(),
						R = !O && gm(o, i),
						D = O && xm(o, s, i, a);
					(R || D) && ((x = !0), w || (v = "loading"));
				}
				if (
					i.keepPreviousData &&
					!y.dataUpdateCount &&
					m != null &&
					m.isSuccess &&
					v !== "error"
				)
					(E = m.data),
						(w = m.dataUpdatedAt),
						(v = m.status),
						(C = !0);
				else if (i.select && typeof y.data < "u")
					if (
						l &&
						y.data === (u == null ? void 0 : u.data) &&
						i.select === this.selectFn
					)
						E = this.selectResult;
					else
						try {
							(this.selectFn = i.select),
								(E = i.select(y.data)),
								i.structuralSharing !== !1 &&
									(E = Il(l == null ? void 0 : l.data, E)),
								(this.selectResult = E),
								(this.selectError = null);
						} catch ($) {
							Ml().error($), (this.selectError = $);
						}
				else E = y.data;
				if (
					typeof i.placeholderData < "u" &&
					typeof E > "u" &&
					(v === "loading" || v === "idle")
				) {
					var N;
					if (
						l != null &&
						l.isPlaceholderData &&
						i.placeholderData ===
							(d == null ? void 0 : d.placeholderData)
					)
						N = l.data;
					else if (
						((N =
							typeof i.placeholderData == "function"
								? i.placeholderData()
								: i.placeholderData),
						i.select && typeof N < "u")
					)
						try {
							(N = i.select(N)),
								i.structuralSharing !== !1 &&
									(N = Il(l == null ? void 0 : l.data, N)),
								(this.selectError = null);
						} catch ($) {
							Ml().error($), (this.selectError = $);
						}
					typeof N < "u" && ((v = "success"), (E = N), (j = !0));
				}
				this.selectError &&
					((S = this.selectError),
					(E = this.selectResult),
					(g = Date.now()),
					(v = "error"));
				var L = {
					status: v,
					isLoading: v === "loading",
					isSuccess: v === "success",
					isError: v === "error",
					isIdle: v === "idle",
					data: E,
					dataUpdatedAt: w,
					error: S,
					errorUpdatedAt: g,
					failureCount: y.fetchFailureCount,
					errorUpdateCount: y.errorUpdateCount,
					isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
					isFetchedAfterMount:
						y.dataUpdateCount > h.dataUpdateCount ||
						y.errorUpdateCount > h.errorUpdateCount,
					isFetching: x,
					isRefetching: x && v !== "loading",
					isLoadingError: v === "error" && y.dataUpdatedAt === 0,
					isPlaceholderData: j,
					isPreviousData: C,
					isRefetchError: v === "error" && y.dataUpdatedAt !== 0,
					isStale: rp(o, i),
					refetch: this.refetch,
					remove: this.remove,
				};
				return L;
			}),
			(n.shouldNotifyListeners = function (o, i) {
				if (!i) return !0;
				var s = this.options,
					a = s.notifyOnChangeProps,
					l = s.notifyOnChangePropsExclusions;
				if (
					(!a && !l) ||
					(a === "tracked" && !this.trackedProps.length)
				)
					return !0;
				var u = a === "tracked" ? this.trackedProps : a;
				return Object.keys(o).some(function (d) {
					var f = d,
						h = o[f] !== i[f],
						m =
							u == null
								? void 0
								: u.some(function (w) {
										return w === d;
								  }),
						y =
							l == null
								? void 0
								: l.some(function (w) {
										return w === d;
								  });
					return h && !y && (!u || m);
				});
			}),
			(n.updateResult = function (o) {
				var i = this.currentResult;
				if (
					((this.currentResult = this.createResult(
						this.currentQuery,
						this.options
					)),
					(this.currentResultState = this.currentQuery.state),
					(this.currentResultOptions = this.options),
					!_R(this.currentResult, i))
				) {
					var s = { cache: !0 };
					(o == null ? void 0 : o.listeners) !== !1 &&
						this.shouldNotifyListeners(this.currentResult, i) &&
						(s.listeners = !0),
						this.notify(ue({}, s, o));
				}
			}),
			(n.updateQuery = function () {
				var o = this.client
					.getQueryCache()
					.build(this.client, this.options);
				if (o !== this.currentQuery) {
					var i = this.currentQuery;
					(this.currentQuery = o),
						(this.currentQueryInitialState = o.state),
						(this.previousQueryResult = this.currentResult),
						this.hasListeners() &&
							(i == null || i.removeObserver(this),
							o.addObserver(this));
				}
			}),
			(n.onQueryUpdate = function (o) {
				var i = {};
				o.type === "success"
					? (i.onSuccess = !0)
					: o.type === "error" && !Ya(o.error) && (i.onError = !0),
					this.updateResult(i),
					this.hasListeners() && this.updateTimers();
			}),
			(n.notify = function (o) {
				var i = this;
				_e.batch(function () {
					o.onSuccess
						? (i.options.onSuccess == null ||
								i.options.onSuccess(i.currentResult.data),
						  i.options.onSettled == null ||
								i.options.onSettled(i.currentResult.data, null))
						: o.onError &&
						  (i.options.onError == null ||
								i.options.onError(i.currentResult.error),
						  i.options.onSettled == null ||
								i.options.onSettled(
									void 0,
									i.currentResult.error
								)),
						o.listeners &&
							i.listeners.forEach(function (s) {
								s(i.currentResult);
							}),
						o.cache &&
							i.client
								.getQueryCache()
								.notify({
									query: i.currentQuery,
									type: "observerResultsUpdated",
								});
				});
			}),
			t
		);
	})(ji);
function qR(e, t) {
	return (
		t.enabled !== !1 &&
		!e.state.dataUpdatedAt &&
		!(e.state.status === "error" && t.retryOnMount === !1)
	);
}
function gm(e, t) {
	return (
		qR(e, t) || (e.state.dataUpdatedAt > 0 && Ld(e, t, t.refetchOnMount))
	);
}
function Ld(e, t, n) {
	if (t.enabled !== !1) {
		var r = typeof n == "function" ? n(e) : n;
		return r === "always" || (r !== !1 && rp(e, t));
	}
	return !1;
}
function xm(e, t, n, r) {
	return (
		n.enabled !== !1 &&
		(e !== t || r.enabled === !1) &&
		(!n.suspense || e.state.status !== "error") &&
		rp(e, n)
	);
}
function rp(e, t) {
	return e.isStaleByTime(t.staleTime);
}
var GR = (function (e) {
		Oo(t, e);
		function t(r, o) {
			var i;
			return (
				(i = e.call(this) || this),
				(i.client = r),
				i.setOptions(o),
				i.bindMethods(),
				i.updateResult(),
				i
			);
		}
		var n = t.prototype;
		return (
			(n.bindMethods = function () {
				(this.mutate = this.mutate.bind(this)),
					(this.reset = this.reset.bind(this));
			}),
			(n.setOptions = function (o) {
				this.options = this.client.defaultMutationOptions(o);
			}),
			(n.onUnsubscribe = function () {
				if (!this.listeners.length) {
					var o;
					(o = this.currentMutation) == null ||
						o.removeObserver(this);
				}
			}),
			(n.onMutationUpdate = function (o) {
				this.updateResult();
				var i = { listeners: !0 };
				o.type === "success"
					? (i.onSuccess = !0)
					: o.type === "error" && (i.onError = !0),
					this.notify(i);
			}),
			(n.getCurrentResult = function () {
				return this.currentResult;
			}),
			(n.reset = function () {
				(this.currentMutation = void 0),
					this.updateResult(),
					this.notify({ listeners: !0 });
			}),
			(n.mutate = function (o, i) {
				return (
					(this.mutateOptions = i),
					this.currentMutation &&
						this.currentMutation.removeObserver(this),
					(this.currentMutation = this.client
						.getMutationCache()
						.build(
							this.client,
							ue({}, this.options, {
								variables:
									typeof o < "u" ? o : this.options.variables,
							})
						)),
					this.currentMutation.addObserver(this),
					this.currentMutation.execute()
				);
			}),
			(n.updateResult = function () {
				var o = this.currentMutation
						? this.currentMutation.state
						: S0(),
					i = ue({}, o, {
						isLoading: o.status === "loading",
						isSuccess: o.status === "success",
						isError: o.status === "error",
						isIdle: o.status === "idle",
						mutate: this.mutate,
						reset: this.reset,
					});
				this.currentResult = i;
			}),
			(n.notify = function (o) {
				var i = this;
				_e.batch(function () {
					i.mutateOptions &&
						(o.onSuccess
							? (i.mutateOptions.onSuccess == null ||
									i.mutateOptions.onSuccess(
										i.currentResult.data,
										i.currentResult.variables,
										i.currentResult.context
									),
							  i.mutateOptions.onSettled == null ||
									i.mutateOptions.onSettled(
										i.currentResult.data,
										null,
										i.currentResult.variables,
										i.currentResult.context
									))
							: o.onError &&
							  (i.mutateOptions.onError == null ||
									i.mutateOptions.onError(
										i.currentResult.error,
										i.currentResult.variables,
										i.currentResult.context
									),
							  i.mutateOptions.onSettled == null ||
									i.mutateOptions.onSettled(
										void 0,
										i.currentResult.error,
										i.currentResult.variables,
										i.currentResult.context
									))),
						o.listeners &&
							i.listeners.forEach(function (s) {
								s(i.currentResult);
							});
				});
			}),
			t
		);
	})(ji),
	XR = Rr.unstable_batchedUpdates;
_e.setBatchNotifyFunction(XR);
var JR = console;
$R(JR);
var wm = ie.createContext(void 0),
	E0 = ie.createContext(!1);
function C0(e) {
	return e && typeof window < "u"
		? (window.ReactQueryClientContext ||
				(window.ReactQueryClientContext = wm),
		  window.ReactQueryClientContext)
		: wm;
}
var j0 = function () {
		var t = ie.useContext(C0(ie.useContext(E0)));
		if (!t)
			throw new Error(
				"No QueryClient set, use QueryClientProvider to set one"
			);
		return t;
	},
	YR = function (t) {
		var n = t.client,
			r = t.contextSharing,
			o = r === void 0 ? !1 : r,
			i = t.children;
		ie.useEffect(
			function () {
				return (
					n.mount(),
					function () {
						n.unmount();
					}
				);
			},
			[n]
		);
		var s = C0(o);
		return ie.createElement(
			E0.Provider,
			{ value: o },
			ie.createElement(s.Provider, { value: n }, i)
		);
	};
function ZR() {
	var e = !1;
	return {
		clearReset: function () {
			e = !1;
		},
		reset: function () {
			e = !0;
		},
		isReset: function () {
			return e;
		},
	};
}
var eO = ie.createContext(ZR()),
	tO = function () {
		return ie.useContext(eO);
	};
function R0(e, t, n) {
	return typeof t == "function"
		? t.apply(void 0, n)
		: typeof t == "boolean"
		? t
		: !!e;
}
function un(e, t, n) {
	var r = ie.useRef(!1),
		o = ie.useState(0),
		i = o[1],
		s = kR(e, t, n),
		a = j0(),
		l = ie.useRef();
	l.current ? l.current.setOptions(s) : (l.current = new GR(a, s));
	var u = l.current.getCurrentResult();
	ie.useEffect(function () {
		r.current = !0;
		var f = l.current.subscribe(
			_e.batchCalls(function () {
				r.current &&
					i(function (h) {
						return h + 1;
					});
			})
		);
		return function () {
			(r.current = !1), f();
		};
	}, []);
	var d = ie.useCallback(function (f, h) {
		l.current.mutate(f, h).catch(ut);
	}, []);
	if (u.error && R0(void 0, l.current.options.useErrorBoundary, [u.error]))
		throw u.error;
	return ue({}, u, { mutate: d, mutateAsync: u.mutate });
}
function nO(e, t) {
	var n = ie.useRef(!1),
		r = ie.useState(0),
		o = r[1],
		i = j0(),
		s = tO(),
		a = i.defaultQueryObserverOptions(e);
	(a.optimisticResults = !0),
		a.onError && (a.onError = _e.batchCalls(a.onError)),
		a.onSuccess && (a.onSuccess = _e.batchCalls(a.onSuccess)),
		a.onSettled && (a.onSettled = _e.batchCalls(a.onSettled)),
		a.suspense &&
			(typeof a.staleTime != "number" && (a.staleTime = 1e3),
			a.cacheTime === 0 && (a.cacheTime = 1)),
		(a.suspense || a.useErrorBoundary) &&
			(s.isReset() || (a.retryOnMount = !1));
	var l = ie.useState(function () {
			return new t(i, a);
		}),
		u = l[0],
		d = u.getOptimisticResult(a);
	if (
		(ie.useEffect(
			function () {
				(n.current = !0), s.clearReset();
				var f = u.subscribe(
					_e.batchCalls(function () {
						n.current &&
							o(function (h) {
								return h + 1;
							});
					})
				);
				return (
					u.updateResult(),
					function () {
						(n.current = !1), f();
					}
				);
			},
			[s, u]
		),
		ie.useEffect(
			function () {
				u.setOptions(a, { listeners: !1 });
			},
			[a, u]
		),
		a.suspense && d.isLoading)
	)
		throw u
			.fetchOptimistic(a)
			.then(function (f) {
				var h = f.data;
				a.onSuccess == null || a.onSuccess(h),
					a.onSettled == null || a.onSettled(h, null);
			})
			.catch(function (f) {
				s.clearReset(),
					a.onError == null || a.onError(f),
					a.onSettled == null || a.onSettled(void 0, f);
			});
	if (
		d.isError &&
		!s.isReset() &&
		!d.isFetching &&
		R0(a.suspense, a.useErrorBoundary, [d.error, u.getCurrentQuery()])
	)
		throw d.error;
	return a.notifyOnChangeProps === "tracked" && (d = u.trackResult(d, a)), d;
}
function cn(e, t, n) {
	var r = Xa(e, t, n);
	return nO(r, VR);
}
var O0 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
	(function () {
		var t = {}.hasOwnProperty;
		function n() {
			for (var i = "", s = 0; s < arguments.length; s++) {
				var a = arguments[s];
				a && (i = o(i, r(a)));
			}
			return i;
		}
		function r(i) {
			if (typeof i == "string" || typeof i == "number") return i;
			if (typeof i != "object") return "";
			if (Array.isArray(i)) return n.apply(null, i);
			if (
				i.toString !== Object.prototype.toString &&
				!i.toString.toString().includes("[native code]")
			)
				return i.toString();
			var s = "";
			for (var a in i) t.call(i, a) && i[a] && (s = o(s, a));
			return s;
		}
		function o(i, s) {
			return s ? (i ? i + " " + s : i + s) : i;
		}
		e.exports
			? ((n.default = n), (e.exports = n))
			: (window.classNames = n);
	})();
})(O0);
var rO = O0.exports;
const z = qs(rO);
function b0(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		o,
		i;
	for (i = 0; i < r.length; i++)
		(o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
	return n;
}
function Sm(e) {
	return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function oO(e) {
	var t = iO(e, "string");
	return typeof t == "symbol" ? t : String(t);
}
function iO(e, t) {
	if (typeof e != "object" || e === null) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function sO(e, t, n) {
	var r = p.useRef(e !== void 0),
		o = p.useState(t),
		i = o[0],
		s = o[1],
		a = e !== void 0,
		l = r.current;
	return (
		(r.current = a),
		!a && l && i !== t && s(t),
		[
			a ? e : i,
			p.useCallback(
				function (u) {
					for (
						var d = arguments.length,
							f = new Array(d > 1 ? d - 1 : 0),
							h = 1;
						h < d;
						h++
					)
						f[h - 1] = arguments[h];
					n && n.apply(void 0, [u].concat(f)), s(u);
				},
				[n]
			),
		]
	);
}
function Ri(e, t) {
	return Object.keys(t).reduce(function (n, r) {
		var o,
			i = n,
			s = i[Sm(r)],
			a = i[r],
			l = b0(i, [Sm(r), r].map(oO)),
			u = t[r],
			d = sO(a, s, e[u]),
			f = d[0],
			h = d[1];
		return ue({}, l, ((o = {}), (o[r] = f), (o[u] = h), o));
	}, e);
}
const aO = ["xxl", "xl", "lg", "md", "sm", "xs"],
	lO = "xs",
	pu = p.createContext({ prefixes: {}, breakpoints: aO, minBreakpoint: lO });
function V(e, t) {
	const { prefixes: n } = p.useContext(pu);
	return e || n[t] || t;
}
function P0() {
	const { breakpoints: e } = p.useContext(pu);
	return e;
}
function k0() {
	const { minBreakpoint: e } = p.useContext(pu);
	return e;
}
function N0() {
	const { dir: e } = p.useContext(pu);
	return e === "rtl";
}
function hu(e) {
	return (e && e.ownerDocument) || document;
}
function uO(e) {
	var t = hu(e);
	return (t && t.defaultView) || window;
}
function cO(e, t) {
	return uO(e).getComputedStyle(e, t);
}
var dO = /([A-Z])/g;
function fO(e) {
	return e.replace(dO, "-$1").toLowerCase();
}
var pO = /^ms-/;
function Da(e) {
	return fO(e).replace(pO, "-ms-");
}
var hO =
	/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function mO(e) {
	return !!(e && hO.test(e));
}
function nr(e, t) {
	var n = "",
		r = "";
	if (typeof t == "string")
		return e.style.getPropertyValue(Da(t)) || cO(e).getPropertyValue(Da(t));
	Object.keys(t).forEach(function (o) {
		var i = t[o];
		!i && i !== 0
			? e.style.removeProperty(Da(o))
			: mO(o)
			? (r += o + "(" + i + ") ")
			: (n += Da(o) + ": " + i + ";");
	}),
		r && (n += "transform: " + r + ";"),
		(e.style.cssText += ";" + n);
}
var T0 = { exports: {} },
	vO = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
	yO = vO,
	gO = yO;
function _0() {}
function D0() {}
D0.resetWarningCache = _0;
var xO = function () {
	function e(r, o, i, s, a, l) {
		if (l !== gO) {
			var u = new Error(
				"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
			);
			throw ((u.name = "Invariant Violation"), u);
		}
	}
	e.isRequired = e;
	function t() {
		return e;
	}
	var n = {
		array: e,
		bigint: e,
		bool: e,
		func: e,
		number: e,
		object: e,
		string: e,
		symbol: e,
		any: e,
		arrayOf: t,
		element: e,
		elementType: e,
		instanceOf: t,
		node: e,
		objectOf: t,
		oneOf: t,
		oneOfType: t,
		shape: t,
		exact: t,
		checkPropTypes: D0,
		resetWarningCache: _0,
	};
	return (n.PropTypes = n), n;
};
T0.exports = xO();
var L0 = T0.exports;
const jt = qs(L0),
	Em = { disabled: !1 },
	I0 = ie.createContext(null);
var wO = function (t) {
		return t.scrollTop;
	},
	os = "unmounted",
	wr = "exited",
	jn = "entering",
	Yn = "entered",
	Us = "exiting",
	fr = (function (e) {
		Oo(t, e);
		function t(r, o) {
			var i;
			i = e.call(this, r, o) || this;
			var s = o,
				a = s && !s.isMounting ? r.enter : r.appear,
				l;
			return (
				(i.appearStatus = null),
				r.in
					? a
						? ((l = wr), (i.appearStatus = jn))
						: (l = Yn)
					: r.unmountOnExit || r.mountOnEnter
					? (l = os)
					: (l = wr),
				(i.state = { status: l }),
				(i.nextCallback = null),
				i
			);
		}
		t.getDerivedStateFromProps = function (o, i) {
			var s = o.in;
			return s && i.status === os ? { status: wr } : null;
		};
		var n = t.prototype;
		return (
			(n.componentDidMount = function () {
				this.updateStatus(!0, this.appearStatus);
			}),
			(n.componentDidUpdate = function (o) {
				var i = null;
				if (o !== this.props) {
					var s = this.state.status;
					this.props.in
						? s !== jn && s !== Yn && (i = jn)
						: (s === jn || s === Yn) && (i = Us);
				}
				this.updateStatus(!1, i);
			}),
			(n.componentWillUnmount = function () {
				this.cancelNextCallback();
			}),
			(n.getTimeouts = function () {
				var o = this.props.timeout,
					i,
					s,
					a;
				return (
					(i = s = a = o),
					o != null &&
						typeof o != "number" &&
						((i = o.exit),
						(s = o.enter),
						(a = o.appear !== void 0 ? o.appear : s)),
					{ exit: i, enter: s, appear: a }
				);
			}),
			(n.updateStatus = function (o, i) {
				if ((o === void 0 && (o = !1), i !== null))
					if ((this.cancelNextCallback(), i === jn)) {
						if (
							this.props.unmountOnExit ||
							this.props.mountOnEnter
						) {
							var s = this.props.nodeRef
								? this.props.nodeRef.current
								: Rr.findDOMNode(this);
							s && wO(s);
						}
						this.performEnter(o);
					} else this.performExit();
				else
					this.props.unmountOnExit &&
						this.state.status === wr &&
						this.setState({ status: os });
			}),
			(n.performEnter = function (o) {
				var i = this,
					s = this.props.enter,
					a = this.context ? this.context.isMounting : o,
					l = this.props.nodeRef ? [a] : [Rr.findDOMNode(this), a],
					u = l[0],
					d = l[1],
					f = this.getTimeouts(),
					h = a ? f.appear : f.enter;
				if ((!o && !s) || Em.disabled) {
					this.safeSetState({ status: Yn }, function () {
						i.props.onEntered(u);
					});
					return;
				}
				this.props.onEnter(u, d),
					this.safeSetState({ status: jn }, function () {
						i.props.onEntering(u, d),
							i.onTransitionEnd(h, function () {
								i.safeSetState({ status: Yn }, function () {
									i.props.onEntered(u, d);
								});
							});
					});
			}),
			(n.performExit = function () {
				var o = this,
					i = this.props.exit,
					s = this.getTimeouts(),
					a = this.props.nodeRef ? void 0 : Rr.findDOMNode(this);
				if (!i || Em.disabled) {
					this.safeSetState({ status: wr }, function () {
						o.props.onExited(a);
					});
					return;
				}
				this.props.onExit(a),
					this.safeSetState({ status: Us }, function () {
						o.props.onExiting(a),
							o.onTransitionEnd(s.exit, function () {
								o.safeSetState({ status: wr }, function () {
									o.props.onExited(a);
								});
							});
					});
			}),
			(n.cancelNextCallback = function () {
				this.nextCallback !== null &&
					(this.nextCallback.cancel(), (this.nextCallback = null));
			}),
			(n.safeSetState = function (o, i) {
				(i = this.setNextCallback(i)), this.setState(o, i);
			}),
			(n.setNextCallback = function (o) {
				var i = this,
					s = !0;
				return (
					(this.nextCallback = function (a) {
						s && ((s = !1), (i.nextCallback = null), o(a));
					}),
					(this.nextCallback.cancel = function () {
						s = !1;
					}),
					this.nextCallback
				);
			}),
			(n.onTransitionEnd = function (o, i) {
				this.setNextCallback(i);
				var s = this.props.nodeRef
						? this.props.nodeRef.current
						: Rr.findDOMNode(this),
					a = o == null && !this.props.addEndListener;
				if (!s || a) {
					setTimeout(this.nextCallback, 0);
					return;
				}
				if (this.props.addEndListener) {
					var l = this.props.nodeRef
							? [this.nextCallback]
							: [s, this.nextCallback],
						u = l[0],
						d = l[1];
					this.props.addEndListener(u, d);
				}
				o != null && setTimeout(this.nextCallback, o);
			}),
			(n.render = function () {
				var o = this.state.status;
				if (o === os) return null;
				var i = this.props,
					s = i.children;
				i.in,
					i.mountOnEnter,
					i.unmountOnExit,
					i.appear,
					i.enter,
					i.exit,
					i.timeout,
					i.addEndListener,
					i.onEnter,
					i.onEntering,
					i.onEntered,
					i.onExit,
					i.onExiting,
					i.onExited,
					i.nodeRef;
				var a = b0(i, [
					"children",
					"in",
					"mountOnEnter",
					"unmountOnExit",
					"appear",
					"enter",
					"exit",
					"timeout",
					"addEndListener",
					"onEnter",
					"onEntering",
					"onEntered",
					"onExit",
					"onExiting",
					"onExited",
					"nodeRef",
				]);
				return ie.createElement(
					I0.Provider,
					{ value: null },
					typeof s == "function"
						? s(o, a)
						: ie.cloneElement(ie.Children.only(s), a)
				);
			}),
			t
		);
	})(ie.Component);
fr.contextType = I0;
fr.propTypes = {};
function Io() {}
fr.defaultProps = {
	in: !1,
	mountOnEnter: !1,
	unmountOnExit: !1,
	appear: !1,
	enter: !0,
	exit: !0,
	onEnter: Io,
	onEntering: Io,
	onEntered: Io,
	onExit: Io,
	onExiting: Io,
	onExited: Io,
};
fr.UNMOUNTED = os;
fr.EXITED = wr;
fr.ENTERING = jn;
fr.ENTERED = Yn;
fr.EXITING = Us;
const SO = fr,
	mu = !!(
		typeof window < "u" &&
		window.document &&
		window.document.createElement
	);
var Id = !1,
	Ad = !1;
try {
	var hc = {
		get passive() {
			return (Id = !0);
		},
		get once() {
			return (Ad = Id = !0);
		},
	};
	mu &&
		(window.addEventListener("test", hc, hc),
		window.removeEventListener("test", hc, !0));
} catch {}
function A0(e, t, n, r) {
	if (r && typeof r != "boolean" && !Ad) {
		var o = r.once,
			i = r.capture,
			s = n;
		!Ad &&
			o &&
			((s =
				n.__once ||
				function a(l) {
					this.removeEventListener(t, a, i), n.call(this, l);
				}),
			(n.__once = s)),
			e.addEventListener(t, s, Id ? r : i);
	}
	e.addEventListener(t, n, r);
}
function EO(e, t, n, r) {
	var o = r && typeof r != "boolean" ? r.capture : r;
	e.removeEventListener(t, n, o),
		n.__once && e.removeEventListener(t, n.__once, o);
}
function Or(e, t, n, r) {
	return (
		A0(e, t, n, r),
		function () {
			EO(e, t, n, r);
		}
	);
}
function CO(e, t, n, r) {
	if ((n === void 0 && (n = !1), r === void 0 && (r = !0), e)) {
		var o = document.createEvent("HTMLEvents");
		o.initEvent(t, n, r), e.dispatchEvent(o);
	}
}
function jO(e) {
	var t = nr(e, "transitionDuration") || "",
		n = t.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(t) * n;
}
function RO(e, t, n) {
	n === void 0 && (n = 5);
	var r = !1,
		o = setTimeout(function () {
			r || CO(e, "transitionend", !0);
		}, t + n),
		i = Or(
			e,
			"transitionend",
			function () {
				r = !0;
			},
			{ once: !0 }
		);
	return function () {
		clearTimeout(o), i();
	};
}
function OO(e, t, n, r) {
	n == null && (n = jO(e) || 0);
	var o = RO(e, n, r),
		i = Or(e, "transitionend", t);
	return function () {
		o(), i();
	};
}
function Cm(e, t) {
	const n = nr(e, t) || "",
		r = n.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(n) * r;
}
function vu(e, t) {
	const n = Cm(e, "transitionDuration"),
		r = Cm(e, "transitionDelay"),
		o = OO(
			e,
			(i) => {
				i.target === e && (o(), t(i));
			},
			n + r
		);
}
function Qi(...e) {
	return e
		.filter((t) => t != null)
		.reduce((t, n) => {
			if (typeof n != "function")
				throw new Error(
					"Invalid Argument Type, must only provide functions, undefined, or null."
				);
			return t === null
				? n
				: function (...o) {
						t.apply(this, o), n.apply(this, o);
				  };
		}, null);
}
function op(e) {
	e.offsetHeight;
}
const jm = (e) =>
	!e || typeof e == "function"
		? e
		: (t) => {
				e.current = t;
		  };
function bO(e, t) {
	const n = jm(e),
		r = jm(t);
	return (o) => {
		n && n(o), r && r(o);
	};
}
function Oi(e, t) {
	return p.useMemo(() => bO(e, t), [e, t]);
}
function PO(e) {
	return e && "setState" in e ? Rr.findDOMNode(e) : e ?? null;
}
const kO = ie.forwardRef(
		(
			{
				onEnter: e,
				onEntering: t,
				onEntered: n,
				onExit: r,
				onExiting: o,
				onExited: i,
				addEndListener: s,
				children: a,
				childRef: l,
				...u
			},
			d
		) => {
			const f = p.useRef(null),
				h = Oi(f, l),
				m = (E) => {
					h(PO(E));
				},
				y = (E) => (O) => {
					E && f.current && E(f.current, O);
				},
				w = p.useCallback(y(e), [e]),
				S = p.useCallback(y(t), [t]),
				g = p.useCallback(y(n), [n]),
				x = p.useCallback(y(r), [r]),
				v = p.useCallback(y(o), [o]),
				C = p.useCallback(y(i), [i]),
				j = p.useCallback(y(s), [s]);
			return c.jsx(SO, {
				ref: d,
				...u,
				onEnter: w,
				onEntered: g,
				onEntering: S,
				onExit: x,
				onExited: C,
				onExiting: v,
				addEndListener: j,
				nodeRef: f,
				children:
					typeof a == "function"
						? (E, O) => a(E, { ...O, ref: m })
						: ie.cloneElement(a, { ref: m }),
			});
		}
	),
	yu = kO,
	NO = {
		height: ["marginTop", "marginBottom"],
		width: ["marginLeft", "marginRight"],
	};
function TO(e, t) {
	const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
		r = t[n],
		o = NO[e];
	return r + parseInt(nr(t, o[0]), 10) + parseInt(nr(t, o[1]), 10);
}
const _O = {
		[wr]: "collapse",
		[Us]: "collapsing",
		[jn]: "collapsing",
		[Yn]: "collapse show",
	},
	DO = ie.forwardRef(
		(
			{
				onEnter: e,
				onEntering: t,
				onEntered: n,
				onExit: r,
				onExiting: o,
				className: i,
				children: s,
				dimension: a = "height",
				in: l = !1,
				timeout: u = 300,
				mountOnEnter: d = !1,
				unmountOnExit: f = !1,
				appear: h = !1,
				getDimensionValue: m = TO,
				...y
			},
			w
		) => {
			const S = typeof a == "function" ? a() : a,
				g = p.useMemo(
					() =>
						Qi((E) => {
							E.style[S] = "0";
						}, e),
					[S, e]
				),
				x = p.useMemo(
					() =>
						Qi((E) => {
							const O = `scroll${S[0].toUpperCase()}${S.slice(
								1
							)}`;
							E.style[S] = `${E[O]}px`;
						}, t),
					[S, t]
				),
				v = p.useMemo(
					() =>
						Qi((E) => {
							E.style[S] = null;
						}, n),
					[S, n]
				),
				C = p.useMemo(
					() =>
						Qi((E) => {
							(E.style[S] = `${m(S, E)}px`), op(E);
						}, r),
					[r, m, S]
				),
				j = p.useMemo(
					() =>
						Qi((E) => {
							E.style[S] = null;
						}, o),
					[S, o]
				);
			return c.jsx(yu, {
				ref: w,
				addEndListener: vu,
				...y,
				"aria-expanded": y.role ? l : null,
				onEnter: g,
				onEntering: x,
				onEntered: v,
				onExit: C,
				onExiting: j,
				childRef: s.ref,
				in: l,
				timeout: u,
				mountOnEnter: d,
				unmountOnExit: f,
				appear: h,
				children: (E, O) =>
					ie.cloneElement(s, {
						...O,
						className: z(
							i,
							s.props.className,
							_O[E],
							S === "width" && "collapse-horizontal"
						),
					}),
			});
		}
	),
	LO = DO;
function M0(e) {
	const t = p.useRef(e);
	return (
		p.useEffect(() => {
			t.current = e;
		}, [e]),
		t
	);
}
function Le(e) {
	const t = M0(e);
	return p.useCallback(
		function (...n) {
			return t.current && t.current(...n);
		},
		[t]
	);
}
const gu = (e) =>
		p.forwardRef((t, n) =>
			c.jsx("div", { ...t, ref: n, className: z(t.className, e) })
		),
	$0 = gu("h4");
$0.displayName = "DivStyledAsH4";
const F0 = p.forwardRef(
	({ className: e, bsPrefix: t, as: n = $0, ...r }, o) => (
		(t = V(t, "alert-heading")),
		c.jsx(n, { ref: o, className: z(e, t), ...r })
	)
);
F0.displayName = "AlertHeading";
const IO = F0;
function AO() {
	return p.useState(null);
}
function MO(e, t, n, r = !1) {
	const o = Le(n);
	p.useEffect(() => {
		const i = typeof e == "function" ? e() : e;
		return (
			i.addEventListener(t, o, r), () => i.removeEventListener(t, o, r)
		);
	}, [e]);
}
function ip() {
	const e = p.useRef(!0),
		t = p.useRef(() => e.current);
	return (
		p.useEffect(
			() => (
				(e.current = !0),
				() => {
					e.current = !1;
				}
			),
			[]
		),
		t.current
	);
}
function U0(e) {
	const t = p.useRef(null);
	return (
		p.useEffect(() => {
			t.current = e;
		}),
		t.current
	);
}
const $O =
		typeof global < "u" &&
		global.navigator &&
		global.navigator.product === "ReactNative",
	FO = typeof document < "u",
	$l = FO || $O ? p.useLayoutEffect : p.useEffect,
	UO = ["as", "disabled"];
function BO(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		o,
		i;
	for (i = 0; i < r.length; i++)
		(o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
	return n;
}
function zO(e) {
	return !e || e.trim() === "#";
}
function sp({
	tagName: e,
	disabled: t,
	href: n,
	target: r,
	rel: o,
	role: i,
	onClick: s,
	tabIndex: a = 0,
	type: l,
}) {
	e || (n != null || r != null || o != null ? (e = "a") : (e = "button"));
	const u = { tagName: e };
	if (e === "button") return [{ type: l || "button", disabled: t }, u];
	const d = (h) => {
			if (((t || (e === "a" && zO(n))) && h.preventDefault(), t)) {
				h.stopPropagation();
				return;
			}
			s == null || s(h);
		},
		f = (h) => {
			h.key === " " && (h.preventDefault(), d(h));
		};
	return (
		e === "a" && (n || (n = "#"), t && (n = void 0)),
		[
			{
				role: i ?? "button",
				disabled: void 0,
				tabIndex: t ? void 0 : a,
				href: n,
				target: e === "a" ? r : void 0,
				"aria-disabled": t || void 0,
				rel: e === "a" ? o : void 0,
				onClick: d,
				onKeyDown: f,
			},
			u,
		]
	);
}
const ap = p.forwardRef((e, t) => {
	let { as: n, disabled: r } = e,
		o = BO(e, UO);
	const [i, { tagName: s }] = sp(
		Object.assign({ tagName: n, disabled: r }, o)
	);
	return c.jsx(s, Object.assign({}, o, i, { ref: t }));
});
ap.displayName = "Button";
const HO = ["onKeyDown"];
function KO(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		o,
		i;
	for (i = 0; i < r.length; i++)
		(o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
	return n;
}
function WO(e) {
	return !e || e.trim() === "#";
}
const B0 = p.forwardRef((e, t) => {
	let { onKeyDown: n } = e,
		r = KO(e, HO);
	const [o] = sp(Object.assign({ tagName: "a" }, r)),
		i = Le((s) => {
			o.onKeyDown(s), n == null || n(s);
		});
	return WO(r.href) || r.role === "button"
		? c.jsx("a", Object.assign({ ref: t }, r, o, { onKeyDown: i }))
		: c.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
B0.displayName = "Anchor";
const fi = B0,
	z0 = p.forwardRef(
		({ className: e, bsPrefix: t, as: n = fi, ...r }, o) => (
			(t = V(t, "alert-link")),
			c.jsx(n, { ref: o, className: z(e, t), ...r })
		)
	);
z0.displayName = "AlertLink";
const QO = z0,
	VO = { [jn]: "show", [Yn]: "show" },
	H0 = p.forwardRef(
		(
			{
				className: e,
				children: t,
				transitionClasses: n = {},
				onEnter: r,
				...o
			},
			i
		) => {
			const s = {
					in: !1,
					timeout: 300,
					mountOnEnter: !1,
					unmountOnExit: !1,
					appear: !1,
					...o,
				},
				a = p.useCallback(
					(l, u) => {
						op(l), r == null || r(l, u);
					},
					[r]
				);
			return c.jsx(yu, {
				ref: i,
				addEndListener: vu,
				...s,
				onEnter: a,
				childRef: t.ref,
				children: (l, u) =>
					p.cloneElement(t, {
						...u,
						className: z("fade", e, t.props.className, VO[l], n[l]),
					}),
			});
		}
	);
H0.displayName = "Fade";
const Md = H0,
	qO = {
		"aria-label": jt.string,
		onClick: jt.func,
		variant: jt.oneOf(["white"]),
	},
	lp = p.forwardRef(
		({ className: e, variant: t, "aria-label": n = "Close", ...r }, o) =>
			c.jsx("button", {
				ref: o,
				type: "button",
				className: z("btn-close", t && `btn-close-${t}`, e),
				"aria-label": n,
				...r,
			})
	);
lp.displayName = "CloseButton";
lp.propTypes = qO;
const K0 = lp,
	W0 = p.forwardRef((e, t) => {
		const {
				bsPrefix: n,
				show: r = !0,
				closeLabel: o = "Close alert",
				closeVariant: i,
				className: s,
				children: a,
				variant: l = "primary",
				onClose: u,
				dismissible: d,
				transition: f = Md,
				...h
			} = Ri(e, { show: "onClose" }),
			m = V(n, "alert"),
			y = Le((g) => {
				u && u(!1, g);
			}),
			w = f === !0 ? Md : f,
			S = c.jsxs("div", {
				role: "alert",
				...(w ? void 0 : h),
				ref: t,
				className: z(s, m, l && `${m}-${l}`, d && `${m}-dismissible`),
				children: [
					d && c.jsx(K0, { onClick: y, "aria-label": o, variant: i }),
					a,
				],
			});
		return w
			? c.jsx(w, {
					unmountOnExit: !0,
					...h,
					ref: void 0,
					in: r,
					children: S,
			  })
			: r
			? S
			: null;
	});
W0.displayName = "Alert";
const GO = Object.assign(W0, { Link: QO, Heading: IO }),
	Q0 = p.forwardRef(
		(
			{
				as: e,
				bsPrefix: t,
				variant: n = "primary",
				size: r,
				active: o = !1,
				disabled: i = !1,
				className: s,
				...a
			},
			l
		) => {
			const u = V(t, "btn"),
				[d, { tagName: f }] = sp({ tagName: e, disabled: i, ...a }),
				h = f;
			return c.jsx(h, {
				...d,
				...a,
				ref: l,
				disabled: i,
				className: z(
					s,
					u,
					o && "active",
					n && `${u}-${n}`,
					r && `${u}-${r}`,
					a.href && i && "disabled"
				),
			});
		}
	);
Q0.displayName = "Button";
const Ue = Q0,
	V0 = p.forwardRef(
		({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (
			(t = V(t, "card-body")),
			c.jsx(n, { ref: o, className: z(e, t), ...r })
		)
	);
V0.displayName = "CardBody";
const q0 = V0,
	G0 = p.forwardRef(
		({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (
			(t = V(t, "card-footer")),
			c.jsx(n, { ref: o, className: z(e, t), ...r })
		)
	);
G0.displayName = "CardFooter";
const XO = G0,
	X0 = p.createContext(null);
X0.displayName = "CardHeaderContext";
const J0 = X0,
	Y0 = p.forwardRef(
		({ bsPrefix: e, className: t, as: n = "div", ...r }, o) => {
			const i = V(e, "card-header"),
				s = p.useMemo(() => ({ cardHeaderBsPrefix: i }), [i]);
			return c.jsx(J0.Provider, {
				value: s,
				children: c.jsx(n, { ref: o, ...r, className: z(t, i) }),
			});
		}
	);
Y0.displayName = "CardHeader";
const JO = Y0,
	Z0 = p.forwardRef(
		({ bsPrefix: e, className: t, variant: n, as: r = "img", ...o }, i) => {
			const s = V(e, "card-img");
			return c.jsx(r, {
				ref: i,
				className: z(n ? `${s}-${n}` : s, t),
				...o,
			});
		}
	);
Z0.displayName = "CardImg";
const YO = Z0,
	ex = p.forwardRef(
		({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (
			(t = V(t, "card-img-overlay")),
			c.jsx(n, { ref: o, className: z(e, t), ...r })
		)
	);
ex.displayName = "CardImgOverlay";
const ZO = ex,
	tx = p.forwardRef(
		({ className: e, bsPrefix: t, as: n = "a", ...r }, o) => (
			(t = V(t, "card-link")),
			c.jsx(n, { ref: o, className: z(e, t), ...r })
		)
	);
tx.displayName = "CardLink";
const eb = tx,
	tb = gu("h6"),
	nx = p.forwardRef(
		({ className: e, bsPrefix: t, as: n = tb, ...r }, o) => (
			(t = V(t, "card-subtitle")),
			c.jsx(n, { ref: o, className: z(e, t), ...r })
		)
	);
nx.displayName = "CardSubtitle";
const nb = nx,
	rx = p.forwardRef(
		({ className: e, bsPrefix: t, as: n = "p", ...r }, o) => (
			(t = V(t, "card-text")),
			c.jsx(n, { ref: o, className: z(e, t), ...r })
		)
	);
rx.displayName = "CardText";
const rb = rx,
	ob = gu("h5"),
	ox = p.forwardRef(
		({ className: e, bsPrefix: t, as: n = ob, ...r }, o) => (
			(t = V(t, "card-title")),
			c.jsx(n, { ref: o, className: z(e, t), ...r })
		)
	);
ox.displayName = "CardTitle";
const ib = ox,
	ix = p.forwardRef(
		(
			{
				bsPrefix: e,
				className: t,
				bg: n,
				text: r,
				border: o,
				body: i = !1,
				children: s,
				as: a = "div",
				...l
			},
			u
		) => {
			const d = V(e, "card");
			return c.jsx(a, {
				ref: u,
				...l,
				className: z(
					t,
					d,
					n && `bg-${n}`,
					r && `text-${r}`,
					o && `border-${o}`
				),
				children: i ? c.jsx(q0, { children: s }) : s,
			});
		}
	);
ix.displayName = "Card";
const An = Object.assign(ix, {
	Img: YO,
	Title: ib,
	Subtitle: nb,
	Body: q0,
	Link: eb,
	Text: rb,
	Header: JO,
	Footer: XO,
	ImgOverlay: ZO,
});
function sb(e, t) {
	const n = p.useRef(!0);
	p.useEffect(() => {
		if (n.current) {
			n.current = !1;
			return;
		}
		return e();
	}, t);
}
function ab(e) {
	const t = p.useRef(e);
	return (t.current = e), t;
}
function sx(e) {
	const t = ab(e);
	p.useEffect(() => () => t.current(), []);
}
const $d = 2 ** 31 - 1;
function ax(e, t, n) {
	const r = n - Date.now();
	e.current = r <= $d ? setTimeout(t, r) : setTimeout(() => ax(e, t, n), $d);
}
function lb() {
	const e = ip(),
		t = p.useRef();
	return (
		sx(() => clearTimeout(t.current)),
		p.useMemo(() => {
			const n = () => clearTimeout(t.current);
			function r(o, i = 0) {
				e() &&
					(n(),
					i <= $d
						? (t.current = setTimeout(o, i))
						: ax(t, o, Date.now() + i));
			}
			return { set: r, clear: n, handleRef: t };
		}, [])
	);
}
const lx = p.forwardRef(
	({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (
		(t = V(t, "carousel-caption")),
		c.jsx(n, { ref: o, className: z(e, t), ...r })
	)
);
lx.displayName = "CarouselCaption";
const ub = lx,
	ux = p.forwardRef(
		({ as: e = "div", bsPrefix: t, className: n, ...r }, o) => {
			const i = z(n, V(t, "carousel-item"));
			return c.jsx(e, { ref: o, ...r, className: i });
		}
	);
ux.displayName = "CarouselItem";
const cb = ux;
function Rm(e, t) {
	let n = 0;
	return p.Children.map(e, (r) => (p.isValidElement(r) ? t(r, n++) : r));
}
function db(e, t) {
	let n = 0;
	p.Children.forEach(e, (r) => {
		p.isValidElement(r) && t(r, n++);
	});
}
function fb(e, t) {
	return p.Children.toArray(e).some(
		(n) => p.isValidElement(n) && n.type === t
	);
}
const pb = 40;
function hb(e) {
	if (!e || !e.style || !e.parentNode || !e.parentNode.style) return !1;
	const t = getComputedStyle(e);
	return (
		t.display !== "none" &&
		t.visibility !== "hidden" &&
		getComputedStyle(e.parentNode).display !== "none"
	);
}
const cx = p.forwardRef(({ defaultActiveIndex: e = 0, ...t }, n) => {
	const {
			as: r = "div",
			bsPrefix: o,
			slide: i = !0,
			fade: s = !1,
			controls: a = !0,
			indicators: l = !0,
			indicatorLabels: u = [],
			activeIndex: d,
			onSelect: f,
			onSlide: h,
			onSlid: m,
			interval: y = 5e3,
			keyboard: w = !0,
			onKeyDown: S,
			pause: g = "hover",
			onMouseOver: x,
			onMouseOut: v,
			wrap: C = !0,
			touch: j = !0,
			onTouchStart: E,
			onTouchMove: O,
			onTouchEnd: R,
			prevIcon: D = c.jsx("span", {
				"aria-hidden": "true",
				className: "carousel-control-prev-icon",
			}),
			prevLabel: N = "Previous",
			nextIcon: L = c.jsx("span", {
				"aria-hidden": "true",
				className: "carousel-control-next-icon",
			}),
			nextLabel: $ = "Next",
			variant: B,
			className: J,
			children: oe,
			...Y
		} = Ri({ defaultActiveIndex: e, ...t }, { activeIndex: "onSelect" }),
		K = V(o, "carousel"),
		T = N0(),
		M = p.useRef(null),
		[F, Q] = p.useState("next"),
		[se, Ee] = p.useState(!1),
		[fe, ce] = p.useState(!1),
		[re, nt] = p.useState(d || 0);
	p.useEffect(() => {
		!fe &&
			d !== re &&
			(M.current ? Q(M.current) : Q((d || 0) > re ? "next" : "prev"),
			i && ce(!0),
			nt(d || 0));
	}, [d, fe, re, i]),
		p.useEffect(() => {
			M.current && (M.current = null);
		});
	let qe = 0,
		Gt;
	db(oe, (te, Se) => {
		++qe, Se === d && (Gt = te.props.interval);
	});
	const Nn = M0(Gt),
		xe = p.useCallback(
			(te) => {
				if (fe) return;
				let Se = re - 1;
				if (Se < 0) {
					if (!C) return;
					Se = qe - 1;
				}
				(M.current = "prev"), f == null || f(Se, te);
			},
			[fe, re, f, C, qe]
		),
		Be = Le((te) => {
			if (fe) return;
			let Se = re + 1;
			if (Se >= qe) {
				if (!C) return;
				Se = 0;
			}
			(M.current = "next"), f == null || f(Se, te);
		}),
		At = p.useRef();
	p.useImperativeHandle(n, () => ({
		element: At.current,
		prev: xe,
		next: Be,
	}));
	const mn = Le(() => {
			!document.hidden && hb(At.current) && (T ? xe() : Be());
		}),
		le = F === "next" ? "start" : "end";
	sb(() => {
		i || (h == null || h(re, le), m == null || m(re, le));
	}, [re]);
	const Qn = `${K}-item-${F}`,
		Tn = `${K}-item-${le}`,
		Ii = p.useCallback(
			(te) => {
				op(te), h == null || h(re, le);
			},
			[h, re, le]
		),
		Ai = p.useCallback(() => {
			ce(!1), m == null || m(re, le);
		}, [m, re, le]),
		vn = p.useCallback(
			(te) => {
				if (w && !/input|textarea/i.test(te.target.tagName))
					switch (te.key) {
						case "ArrowLeft":
							te.preventDefault(), T ? Be(te) : xe(te);
							return;
						case "ArrowRight":
							te.preventDefault(), T ? xe(te) : Be(te);
							return;
					}
				S == null || S(te);
			},
			[w, S, xe, Be, T]
		),
		Xt = p.useCallback(
			(te) => {
				g === "hover" && Ee(!0), x == null || x(te);
			},
			[g, x]
		),
		Gr = p.useCallback(
			(te) => {
				Ee(!1), v == null || v(te);
			},
			[v]
		),
		Vn = p.useRef(0),
		rt = p.useRef(0),
		yn = lb(),
		Xr = p.useCallback(
			(te) => {
				(Vn.current = te.touches[0].clientX),
					(rt.current = 0),
					g === "hover" && Ee(!0),
					E == null || E(te);
			},
			[g, E]
		),
		qn = p.useCallback(
			(te) => {
				te.touches && te.touches.length > 1
					? (rt.current = 0)
					: (rt.current = te.touches[0].clientX - Vn.current),
					O == null || O(te);
			},
			[O]
		),
		ko = p.useCallback(
			(te) => {
				if (j) {
					const Se = rt.current;
					Math.abs(Se) > pb && (Se > 0 ? xe(te) : Be(te));
				}
				g === "hover" &&
					yn.set(() => {
						Ee(!1);
					}, y || void 0),
					R == null || R(te);
			},
			[j, g, xe, Be, yn, y, R]
		),
		gn = y != null && !se && !fe,
		No = p.useRef();
	p.useEffect(() => {
		var te, Se;
		if (!gn) return;
		const Jt = T ? xe : Be;
		return (
			(No.current = window.setInterval(
				document.visibilityState ? mn : Jt,
				(te = (Se = Nn.current) != null ? Se : y) != null ? te : void 0
			)),
			() => {
				No.current !== null && clearInterval(No.current);
			}
		);
	}, [gn, xe, Be, Nn, y, mn, T]);
	const Mi = p.useMemo(
		() =>
			l &&
			Array.from({ length: qe }, (te, Se) => (Jt) => {
				f == null || f(Se, Jt);
			}),
		[l, qe, f]
	);
	return c.jsxs(r, {
		ref: At,
		...Y,
		onKeyDown: vn,
		onMouseOver: Xt,
		onMouseOut: Gr,
		onTouchStart: Xr,
		onTouchMove: qn,
		onTouchEnd: ko,
		className: z(J, K, i && "slide", s && `${K}-fade`, B && `${K}-${B}`),
		children: [
			l &&
				c.jsx("div", {
					className: `${K}-indicators`,
					children: Rm(oe, (te, Se) =>
						c.jsx(
							"button",
							{
								type: "button",
								"data-bs-target": "",
								"aria-label":
									u != null && u.length
										? u[Se]
										: `Slide ${Se + 1}`,
								className: Se === re ? "active" : void 0,
								onClick: Mi ? Mi[Se] : void 0,
								"aria-current": Se === re,
							},
							Se
						)
					),
				}),
			c.jsx("div", {
				className: `${K}-inner`,
				children: Rm(oe, (te, Se) => {
					const Jt = Se === re;
					return i
						? c.jsx(yu, {
								in: Jt,
								onEnter: Jt ? Ii : void 0,
								onEntered: Jt ? Ai : void 0,
								addEndListener: vu,
								children: (_n, da) =>
									p.cloneElement(te, {
										...da,
										className: z(
											te.props.className,
											Jt && _n !== "entered" && Qn,
											(_n === "entered" ||
												_n === "exiting") &&
												"active",
											(_n === "entering" ||
												_n === "exiting") &&
												Tn
										),
									}),
						  })
						: p.cloneElement(te, {
								className: z(
									te.props.className,
									Jt && "active"
								),
						  });
				}),
			}),
			a &&
				c.jsxs(c.Fragment, {
					children: [
						(C || d !== 0) &&
							c.jsxs(fi, {
								className: `${K}-control-prev`,
								onClick: xe,
								children: [
									D,
									N &&
										c.jsx("span", {
											className: "visually-hidden",
											children: N,
										}),
								],
							}),
						(C || d !== qe - 1) &&
							c.jsxs(fi, {
								className: `${K}-control-next`,
								onClick: Be,
								children: [
									L,
									$ &&
										c.jsx("span", {
											className: "visually-hidden",
											children: $,
										}),
								],
							}),
					],
				}),
		],
	});
});
cx.displayName = "Carousel";
const mc = Object.assign(cx, { Caption: ub, Item: cb });
function mb({ as: e, bsPrefix: t, className: n, ...r }) {
	t = V(t, "col");
	const o = P0(),
		i = k0(),
		s = [],
		a = [];
	return (
		o.forEach((l) => {
			const u = r[l];
			delete r[l];
			let d, f, h;
			typeof u == "object" && u != null
				? ({ span: d, offset: f, order: h } = u)
				: (d = u);
			const m = l !== i ? `-${l}` : "";
			d && s.push(d === !0 ? `${t}${m}` : `${t}${m}-${d}`),
				h != null && a.push(`order${m}-${h}`),
				f != null && a.push(`offset${m}-${f}`);
		}),
		[
			{ ...r, className: z(n, ...s, ...a) },
			{ as: e, bsPrefix: t, spans: s },
		]
	);
}
const dx = p.forwardRef((e, t) => {
	const [{ className: n, ...r }, { as: o = "div", bsPrefix: i, spans: s }] =
		mb(e);
	return c.jsx(o, { ...r, ref: t, className: z(n, !s.length && i) });
});
dx.displayName = "Col";
const q = dx,
	fx = p.forwardRef(
		(
			{ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...o },
			i
		) => {
			const s = V(e, "container"),
				a = typeof t == "string" ? `-${t}` : "-fluid";
			return c.jsx(n, {
				ref: i,
				...o,
				className: z(r, t ? `${s}${a}` : s),
			});
		}
	);
fx.displayName = "Container";
const xu = fx;
var vb = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Jn(e, t) {
	return vb(e.querySelectorAll(t));
}
function yb(e, t, n) {
	const r = p.useRef(e !== void 0),
		[o, i] = p.useState(t),
		s = e !== void 0,
		a = r.current;
	return (
		(r.current = s),
		!s && a && o !== t && i(t),
		[
			s ? e : o,
			p.useCallback(
				(...l) => {
					const [u, ...d] = l;
					let f = n == null ? void 0 : n(u, ...d);
					return i(u), f;
				},
				[n]
			),
		]
	);
}
function px() {
	const [, e] = p.useReducer((t) => !t, !1);
	return e;
}
const gb = p.createContext(null),
	wu = gb;
var Om = Object.prototype.hasOwnProperty;
function bm(e, t, n) {
	for (n of e.keys()) if (ms(n, t)) return n;
}
function ms(e, t) {
	var n, r, o;
	if (e === t) return !0;
	if (e && t && (n = e.constructor) === t.constructor) {
		if (n === Date) return e.getTime() === t.getTime();
		if (n === RegExp) return e.toString() === t.toString();
		if (n === Array) {
			if ((r = e.length) === t.length) for (; r-- && ms(e[r], t[r]); );
			return r === -1;
		}
		if (n === Set) {
			if (e.size !== t.size) return !1;
			for (r of e)
				if (
					((o = r),
					(o && typeof o == "object" && ((o = bm(t, o)), !o)) ||
						!t.has(o))
				)
					return !1;
			return !0;
		}
		if (n === Map) {
			if (e.size !== t.size) return !1;
			for (r of e)
				if (
					((o = r[0]),
					(o && typeof o == "object" && ((o = bm(t, o)), !o)) ||
						!ms(r[1], t.get(o)))
				)
					return !1;
			return !0;
		}
		if (n === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
		else if (n === DataView) {
			if ((r = e.byteLength) === t.byteLength)
				for (; r-- && e.getInt8(r) === t.getInt8(r); );
			return r === -1;
		}
		if (ArrayBuffer.isView(e)) {
			if ((r = e.byteLength) === t.byteLength)
				for (; r-- && e[r] === t[r]; );
			return r === -1;
		}
		if (!n || typeof e == "object") {
			r = 0;
			for (n in e)
				if (
					(Om.call(e, n) && ++r && !Om.call(t, n)) ||
					!(n in t) ||
					!ms(e[n], t[n])
				)
					return !1;
			return Object.keys(t).length === r;
		}
	}
	return e !== e && t !== t;
}
function xb(e) {
	const t = ip();
	return [
		e[0],
		p.useCallback(
			(n) => {
				if (t()) return e[1](n);
			},
			[t, e[1]]
		),
	];
}
var Nt = "top",
	dn = "bottom",
	fn = "right",
	Tt = "left",
	up = "auto",
	na = [Nt, dn, fn, Tt],
	pi = "start",
	Bs = "end",
	wb = "clippingParents",
	hx = "viewport",
	Vi = "popper",
	Sb = "reference",
	Pm = na.reduce(function (e, t) {
		return e.concat([t + "-" + pi, t + "-" + Bs]);
	}, []),
	mx = [].concat(na, [up]).reduce(function (e, t) {
		return e.concat([t, t + "-" + pi, t + "-" + Bs]);
	}, []),
	Eb = "beforeRead",
	Cb = "read",
	jb = "afterRead",
	Rb = "beforeMain",
	Ob = "main",
	bb = "afterMain",
	Pb = "beforeWrite",
	kb = "write",
	Nb = "afterWrite",
	Tb = [Eb, Cb, jb, Rb, Ob, bb, Pb, kb, Nb];
function Bn(e) {
	return e.split("-")[0];
}
function Kt(e) {
	if (e == null) return window;
	if (e.toString() !== "[object Window]") {
		var t = e.ownerDocument;
		return (t && t.defaultView) || window;
	}
	return e;
}
function So(e) {
	var t = Kt(e).Element;
	return e instanceof t || e instanceof Element;
}
function zn(e) {
	var t = Kt(e).HTMLElement;
	return e instanceof t || e instanceof HTMLElement;
}
function cp(e) {
	if (typeof ShadowRoot > "u") return !1;
	var t = Kt(e).ShadowRoot;
	return e instanceof t || e instanceof ShadowRoot;
}
var ho = Math.max,
	Fl = Math.min,
	hi = Math.round;
function Fd() {
	var e = navigator.userAgentData;
	return e != null && e.brands && Array.isArray(e.brands)
		? e.brands
				.map(function (t) {
					return t.brand + "/" + t.version;
				})
				.join(" ")
		: navigator.userAgent;
}
function vx() {
	return !/^((?!chrome|android).)*safari/i.test(Fd());
}
function mi(e, t, n) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	var r = e.getBoundingClientRect(),
		o = 1,
		i = 1;
	t &&
		zn(e) &&
		((o = (e.offsetWidth > 0 && hi(r.width) / e.offsetWidth) || 1),
		(i = (e.offsetHeight > 0 && hi(r.height) / e.offsetHeight) || 1));
	var s = So(e) ? Kt(e) : window,
		a = s.visualViewport,
		l = !vx() && n,
		u = (r.left + (l && a ? a.offsetLeft : 0)) / o,
		d = (r.top + (l && a ? a.offsetTop : 0)) / i,
		f = r.width / o,
		h = r.height / i;
	return {
		width: f,
		height: h,
		top: d,
		right: u + f,
		bottom: d + h,
		left: u,
		x: u,
		y: d,
	};
}
function dp(e) {
	var t = mi(e),
		n = e.offsetWidth,
		r = e.offsetHeight;
	return (
		Math.abs(t.width - n) <= 1 && (n = t.width),
		Math.abs(t.height - r) <= 1 && (r = t.height),
		{ x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
	);
}
function yx(e, t) {
	var n = t.getRootNode && t.getRootNode();
	if (e.contains(t)) return !0;
	if (n && cp(n)) {
		var r = t;
		do {
			if (r && e.isSameNode(r)) return !0;
			r = r.parentNode || r.host;
		} while (r);
	}
	return !1;
}
function Ur(e) {
	return e ? (e.nodeName || "").toLowerCase() : null;
}
function ur(e) {
	return Kt(e).getComputedStyle(e);
}
function _b(e) {
	return ["table", "td", "th"].indexOf(Ur(e)) >= 0;
}
function Qr(e) {
	return ((So(e) ? e.ownerDocument : e.document) || window.document)
		.documentElement;
}
function Su(e) {
	return Ur(e) === "html"
		? e
		: e.assignedSlot || e.parentNode || (cp(e) ? e.host : null) || Qr(e);
}
function km(e) {
	return !zn(e) || ur(e).position === "fixed" ? null : e.offsetParent;
}
function Db(e) {
	var t = /firefox/i.test(Fd()),
		n = /Trident/i.test(Fd());
	if (n && zn(e)) {
		var r = ur(e);
		if (r.position === "fixed") return null;
	}
	var o = Su(e);
	for (
		cp(o) && (o = o.host);
		zn(o) && ["html", "body"].indexOf(Ur(o)) < 0;

	) {
		var i = ur(o);
		if (
			i.transform !== "none" ||
			i.perspective !== "none" ||
			i.contain === "paint" ||
			["transform", "perspective"].indexOf(i.willChange) !== -1 ||
			(t && i.willChange === "filter") ||
			(t && i.filter && i.filter !== "none")
		)
			return o;
		o = o.parentNode;
	}
	return null;
}
function ra(e) {
	for (var t = Kt(e), n = km(e); n && _b(n) && ur(n).position === "static"; )
		n = km(n);
	return n &&
		(Ur(n) === "html" || (Ur(n) === "body" && ur(n).position === "static"))
		? t
		: n || Db(e) || t;
}
function fp(e) {
	return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function vs(e, t, n) {
	return ho(e, Fl(t, n));
}
function Lb(e, t, n) {
	var r = vs(e, t, n);
	return r > n ? n : r;
}
function gx() {
	return { top: 0, right: 0, bottom: 0, left: 0 };
}
function xx(e) {
	return Object.assign({}, gx(), e);
}
function wx(e, t) {
	return t.reduce(function (n, r) {
		return (n[r] = e), n;
	}, {});
}
var Ib = function (t, n) {
	return (
		(t =
			typeof t == "function"
				? t(Object.assign({}, n.rects, { placement: n.placement }))
				: t),
		xx(typeof t != "number" ? t : wx(t, na))
	);
};
function Ab(e) {
	var t,
		n = e.state,
		r = e.name,
		o = e.options,
		i = n.elements.arrow,
		s = n.modifiersData.popperOffsets,
		a = Bn(n.placement),
		l = fp(a),
		u = [Tt, fn].indexOf(a) >= 0,
		d = u ? "height" : "width";
	if (!(!i || !s)) {
		var f = Ib(o.padding, n),
			h = dp(i),
			m = l === "y" ? Nt : Tt,
			y = l === "y" ? dn : fn,
			w =
				n.rects.reference[d] +
				n.rects.reference[l] -
				s[l] -
				n.rects.popper[d],
			S = s[l] - n.rects.reference[l],
			g = ra(i),
			x = g ? (l === "y" ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
			v = w / 2 - S / 2,
			C = f[m],
			j = x - h[d] - f[y],
			E = x / 2 - h[d] / 2 + v,
			O = vs(C, E, j),
			R = l;
		n.modifiersData[r] =
			((t = {}), (t[R] = O), (t.centerOffset = O - E), t);
	}
}
function Mb(e) {
	var t = e.state,
		n = e.options,
		r = n.element,
		o = r === void 0 ? "[data-popper-arrow]" : r;
	o != null &&
		((typeof o == "string" &&
			((o = t.elements.popper.querySelector(o)), !o)) ||
			(yx(t.elements.popper, o) && (t.elements.arrow = o)));
}
const $b = {
	name: "arrow",
	enabled: !0,
	phase: "main",
	fn: Ab,
	effect: Mb,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"],
};
function vi(e) {
	return e.split("-")[1];
}
var Fb = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Ub(e, t) {
	var n = e.x,
		r = e.y,
		o = t.devicePixelRatio || 1;
	return { x: hi(n * o) / o || 0, y: hi(r * o) / o || 0 };
}
function Nm(e) {
	var t,
		n = e.popper,
		r = e.popperRect,
		o = e.placement,
		i = e.variation,
		s = e.offsets,
		a = e.position,
		l = e.gpuAcceleration,
		u = e.adaptive,
		d = e.roundOffsets,
		f = e.isFixed,
		h = s.x,
		m = h === void 0 ? 0 : h,
		y = s.y,
		w = y === void 0 ? 0 : y,
		S = typeof d == "function" ? d({ x: m, y: w }) : { x: m, y: w };
	(m = S.x), (w = S.y);
	var g = s.hasOwnProperty("x"),
		x = s.hasOwnProperty("y"),
		v = Tt,
		C = Nt,
		j = window;
	if (u) {
		var E = ra(n),
			O = "clientHeight",
			R = "clientWidth";
		if (
			(E === Kt(n) &&
				((E = Qr(n)),
				ur(E).position !== "static" &&
					a === "absolute" &&
					((O = "scrollHeight"), (R = "scrollWidth"))),
			(E = E),
			o === Nt || ((o === Tt || o === fn) && i === Bs))
		) {
			C = dn;
			var D =
				f && E === j && j.visualViewport
					? j.visualViewport.height
					: E[O];
			(w -= D - r.height), (w *= l ? 1 : -1);
		}
		if (o === Tt || ((o === Nt || o === dn) && i === Bs)) {
			v = fn;
			var N =
				f && E === j && j.visualViewport
					? j.visualViewport.width
					: E[R];
			(m -= N - r.width), (m *= l ? 1 : -1);
		}
	}
	var L = Object.assign({ position: a }, u && Fb),
		$ = d === !0 ? Ub({ x: m, y: w }, Kt(n)) : { x: m, y: w };
	if (((m = $.x), (w = $.y), l)) {
		var B;
		return Object.assign(
			{},
			L,
			((B = {}),
			(B[C] = x ? "0" : ""),
			(B[v] = g ? "0" : ""),
			(B.transform =
				(j.devicePixelRatio || 1) <= 1
					? "translate(" + m + "px, " + w + "px)"
					: "translate3d(" + m + "px, " + w + "px, 0)"),
			B)
		);
	}
	return Object.assign(
		{},
		L,
		((t = {}),
		(t[C] = x ? w + "px" : ""),
		(t[v] = g ? m + "px" : ""),
		(t.transform = ""),
		t)
	);
}
function Bb(e) {
	var t = e.state,
		n = e.options,
		r = n.gpuAcceleration,
		o = r === void 0 ? !0 : r,
		i = n.adaptive,
		s = i === void 0 ? !0 : i,
		a = n.roundOffsets,
		l = a === void 0 ? !0 : a,
		u = {
			placement: Bn(t.placement),
			variation: vi(t.placement),
			popper: t.elements.popper,
			popperRect: t.rects.popper,
			gpuAcceleration: o,
			isFixed: t.options.strategy === "fixed",
		};
	t.modifiersData.popperOffsets != null &&
		(t.styles.popper = Object.assign(
			{},
			t.styles.popper,
			Nm(
				Object.assign({}, u, {
					offsets: t.modifiersData.popperOffsets,
					position: t.options.strategy,
					adaptive: s,
					roundOffsets: l,
				})
			)
		)),
		t.modifiersData.arrow != null &&
			(t.styles.arrow = Object.assign(
				{},
				t.styles.arrow,
				Nm(
					Object.assign({}, u, {
						offsets: t.modifiersData.arrow,
						position: "absolute",
						adaptive: !1,
						roundOffsets: l,
					})
				)
			)),
		(t.attributes.popper = Object.assign({}, t.attributes.popper, {
			"data-popper-placement": t.placement,
		}));
}
const zb = {
	name: "computeStyles",
	enabled: !0,
	phase: "beforeWrite",
	fn: Bb,
	data: {},
};
var La = { passive: !0 };
function Hb(e) {
	var t = e.state,
		n = e.instance,
		r = e.options,
		o = r.scroll,
		i = o === void 0 ? !0 : o,
		s = r.resize,
		a = s === void 0 ? !0 : s,
		l = Kt(t.elements.popper),
		u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
	return (
		i &&
			u.forEach(function (d) {
				d.addEventListener("scroll", n.update, La);
			}),
		a && l.addEventListener("resize", n.update, La),
		function () {
			i &&
				u.forEach(function (d) {
					d.removeEventListener("scroll", n.update, La);
				}),
				a && l.removeEventListener("resize", n.update, La);
		}
	);
}
const Kb = {
	name: "eventListeners",
	enabled: !0,
	phase: "write",
	fn: function () {},
	effect: Hb,
	data: {},
};
var Wb = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Za(e) {
	return e.replace(/left|right|bottom|top/g, function (t) {
		return Wb[t];
	});
}
var Qb = { start: "end", end: "start" };
function Tm(e) {
	return e.replace(/start|end/g, function (t) {
		return Qb[t];
	});
}
function pp(e) {
	var t = Kt(e),
		n = t.pageXOffset,
		r = t.pageYOffset;
	return { scrollLeft: n, scrollTop: r };
}
function hp(e) {
	return mi(Qr(e)).left + pp(e).scrollLeft;
}
function Vb(e, t) {
	var n = Kt(e),
		r = Qr(e),
		o = n.visualViewport,
		i = r.clientWidth,
		s = r.clientHeight,
		a = 0,
		l = 0;
	if (o) {
		(i = o.width), (s = o.height);
		var u = vx();
		(u || (!u && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
	}
	return { width: i, height: s, x: a + hp(e), y: l };
}
function qb(e) {
	var t,
		n = Qr(e),
		r = pp(e),
		o = (t = e.ownerDocument) == null ? void 0 : t.body,
		i = ho(
			n.scrollWidth,
			n.clientWidth,
			o ? o.scrollWidth : 0,
			o ? o.clientWidth : 0
		),
		s = ho(
			n.scrollHeight,
			n.clientHeight,
			o ? o.scrollHeight : 0,
			o ? o.clientHeight : 0
		),
		a = -r.scrollLeft + hp(e),
		l = -r.scrollTop;
	return (
		ur(o || n).direction === "rtl" &&
			(a += ho(n.clientWidth, o ? o.clientWidth : 0) - i),
		{ width: i, height: s, x: a, y: l }
	);
}
function mp(e) {
	var t = ur(e),
		n = t.overflow,
		r = t.overflowX,
		o = t.overflowY;
	return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Sx(e) {
	return ["html", "body", "#document"].indexOf(Ur(e)) >= 0
		? e.ownerDocument.body
		: zn(e) && mp(e)
		? e
		: Sx(Su(e));
}
function ys(e, t) {
	var n;
	t === void 0 && (t = []);
	var r = Sx(e),
		o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
		i = Kt(r),
		s = o ? [i].concat(i.visualViewport || [], mp(r) ? r : []) : r,
		a = t.concat(s);
	return o ? a : a.concat(ys(Su(s)));
}
function Ud(e) {
	return Object.assign({}, e, {
		left: e.x,
		top: e.y,
		right: e.x + e.width,
		bottom: e.y + e.height,
	});
}
function Gb(e, t) {
	var n = mi(e, !1, t === "fixed");
	return (
		(n.top = n.top + e.clientTop),
		(n.left = n.left + e.clientLeft),
		(n.bottom = n.top + e.clientHeight),
		(n.right = n.left + e.clientWidth),
		(n.width = e.clientWidth),
		(n.height = e.clientHeight),
		(n.x = n.left),
		(n.y = n.top),
		n
	);
}
function _m(e, t, n) {
	return t === hx ? Ud(Vb(e, n)) : So(t) ? Gb(t, n) : Ud(qb(Qr(e)));
}
function Xb(e) {
	var t = ys(Su(e)),
		n = ["absolute", "fixed"].indexOf(ur(e).position) >= 0,
		r = n && zn(e) ? ra(e) : e;
	return So(r)
		? t.filter(function (o) {
				return So(o) && yx(o, r) && Ur(o) !== "body";
		  })
		: [];
}
function Jb(e, t, n, r) {
	var o = t === "clippingParents" ? Xb(e) : [].concat(t),
		i = [].concat(o, [n]),
		s = i[0],
		a = i.reduce(function (l, u) {
			var d = _m(e, u, r);
			return (
				(l.top = ho(d.top, l.top)),
				(l.right = Fl(d.right, l.right)),
				(l.bottom = Fl(d.bottom, l.bottom)),
				(l.left = ho(d.left, l.left)),
				l
			);
		}, _m(e, s, r));
	return (
		(a.width = a.right - a.left),
		(a.height = a.bottom - a.top),
		(a.x = a.left),
		(a.y = a.top),
		a
	);
}
function Ex(e) {
	var t = e.reference,
		n = e.element,
		r = e.placement,
		o = r ? Bn(r) : null,
		i = r ? vi(r) : null,
		s = t.x + t.width / 2 - n.width / 2,
		a = t.y + t.height / 2 - n.height / 2,
		l;
	switch (o) {
		case Nt:
			l = { x: s, y: t.y - n.height };
			break;
		case dn:
			l = { x: s, y: t.y + t.height };
			break;
		case fn:
			l = { x: t.x + t.width, y: a };
			break;
		case Tt:
			l = { x: t.x - n.width, y: a };
			break;
		default:
			l = { x: t.x, y: t.y };
	}
	var u = o ? fp(o) : null;
	if (u != null) {
		var d = u === "y" ? "height" : "width";
		switch (i) {
			case pi:
				l[u] = l[u] - (t[d] / 2 - n[d] / 2);
				break;
			case Bs:
				l[u] = l[u] + (t[d] / 2 - n[d] / 2);
				break;
		}
	}
	return l;
}
function zs(e, t) {
	t === void 0 && (t = {});
	var n = t,
		r = n.placement,
		o = r === void 0 ? e.placement : r,
		i = n.strategy,
		s = i === void 0 ? e.strategy : i,
		a = n.boundary,
		l = a === void 0 ? wb : a,
		u = n.rootBoundary,
		d = u === void 0 ? hx : u,
		f = n.elementContext,
		h = f === void 0 ? Vi : f,
		m = n.altBoundary,
		y = m === void 0 ? !1 : m,
		w = n.padding,
		S = w === void 0 ? 0 : w,
		g = xx(typeof S != "number" ? S : wx(S, na)),
		x = h === Vi ? Sb : Vi,
		v = e.rects.popper,
		C = e.elements[y ? x : h],
		j = Jb(So(C) ? C : C.contextElement || Qr(e.elements.popper), l, d, s),
		E = mi(e.elements.reference),
		O = Ex({
			reference: E,
			element: v,
			strategy: "absolute",
			placement: o,
		}),
		R = Ud(Object.assign({}, v, O)),
		D = h === Vi ? R : E,
		N = {
			top: j.top - D.top + g.top,
			bottom: D.bottom - j.bottom + g.bottom,
			left: j.left - D.left + g.left,
			right: D.right - j.right + g.right,
		},
		L = e.modifiersData.offset;
	if (h === Vi && L) {
		var $ = L[o];
		Object.keys(N).forEach(function (B) {
			var J = [fn, dn].indexOf(B) >= 0 ? 1 : -1,
				oe = [Nt, dn].indexOf(B) >= 0 ? "y" : "x";
			N[B] += $[oe] * J;
		});
	}
	return N;
}
function Yb(e, t) {
	t === void 0 && (t = {});
	var n = t,
		r = n.placement,
		o = n.boundary,
		i = n.rootBoundary,
		s = n.padding,
		a = n.flipVariations,
		l = n.allowedAutoPlacements,
		u = l === void 0 ? mx : l,
		d = vi(r),
		f = d
			? a
				? Pm
				: Pm.filter(function (y) {
						return vi(y) === d;
				  })
			: na,
		h = f.filter(function (y) {
			return u.indexOf(y) >= 0;
		});
	h.length === 0 && (h = f);
	var m = h.reduce(function (y, w) {
		return (
			(y[w] = zs(e, {
				placement: w,
				boundary: o,
				rootBoundary: i,
				padding: s,
			})[Bn(w)]),
			y
		);
	}, {});
	return Object.keys(m).sort(function (y, w) {
		return m[y] - m[w];
	});
}
function Zb(e) {
	if (Bn(e) === up) return [];
	var t = Za(e);
	return [Tm(e), t, Tm(t)];
}
function eP(e) {
	var t = e.state,
		n = e.options,
		r = e.name;
	if (!t.modifiersData[r]._skip) {
		for (
			var o = n.mainAxis,
				i = o === void 0 ? !0 : o,
				s = n.altAxis,
				a = s === void 0 ? !0 : s,
				l = n.fallbackPlacements,
				u = n.padding,
				d = n.boundary,
				f = n.rootBoundary,
				h = n.altBoundary,
				m = n.flipVariations,
				y = m === void 0 ? !0 : m,
				w = n.allowedAutoPlacements,
				S = t.options.placement,
				g = Bn(S),
				x = g === S,
				v = l || (x || !y ? [Za(S)] : Zb(S)),
				C = [S].concat(v).reduce(function (fe, ce) {
					return fe.concat(
						Bn(ce) === up
							? Yb(t, {
									placement: ce,
									boundary: d,
									rootBoundary: f,
									padding: u,
									flipVariations: y,
									allowedAutoPlacements: w,
							  })
							: ce
					);
				}, []),
				j = t.rects.reference,
				E = t.rects.popper,
				O = new Map(),
				R = !0,
				D = C[0],
				N = 0;
			N < C.length;
			N++
		) {
			var L = C[N],
				$ = Bn(L),
				B = vi(L) === pi,
				J = [Nt, dn].indexOf($) >= 0,
				oe = J ? "width" : "height",
				Y = zs(t, {
					placement: L,
					boundary: d,
					rootBoundary: f,
					altBoundary: h,
					padding: u,
				}),
				K = J ? (B ? fn : Tt) : B ? dn : Nt;
			j[oe] > E[oe] && (K = Za(K));
			var T = Za(K),
				M = [];
			if (
				(i && M.push(Y[$] <= 0),
				a && M.push(Y[K] <= 0, Y[T] <= 0),
				M.every(function (fe) {
					return fe;
				}))
			) {
				(D = L), (R = !1);
				break;
			}
			O.set(L, M);
		}
		if (R)
			for (
				var F = y ? 3 : 1,
					Q = function (ce) {
						var re = C.find(function (nt) {
							var qe = O.get(nt);
							if (qe)
								return qe.slice(0, ce).every(function (Gt) {
									return Gt;
								});
						});
						if (re) return (D = re), "break";
					},
					se = F;
				se > 0;
				se--
			) {
				var Ee = Q(se);
				if (Ee === "break") break;
			}
		t.placement !== D &&
			((t.modifiersData[r]._skip = !0),
			(t.placement = D),
			(t.reset = !0));
	}
}
const tP = {
	name: "flip",
	enabled: !0,
	phase: "main",
	fn: eP,
	requiresIfExists: ["offset"],
	data: { _skip: !1 },
};
function Dm(e, t, n) {
	return (
		n === void 0 && (n = { x: 0, y: 0 }),
		{
			top: e.top - t.height - n.y,
			right: e.right - t.width + n.x,
			bottom: e.bottom - t.height + n.y,
			left: e.left - t.width - n.x,
		}
	);
}
function Lm(e) {
	return [Nt, fn, dn, Tt].some(function (t) {
		return e[t] >= 0;
	});
}
function nP(e) {
	var t = e.state,
		n = e.name,
		r = t.rects.reference,
		o = t.rects.popper,
		i = t.modifiersData.preventOverflow,
		s = zs(t, { elementContext: "reference" }),
		a = zs(t, { altBoundary: !0 }),
		l = Dm(s, r),
		u = Dm(a, o, i),
		d = Lm(l),
		f = Lm(u);
	(t.modifiersData[n] = {
		referenceClippingOffsets: l,
		popperEscapeOffsets: u,
		isReferenceHidden: d,
		hasPopperEscaped: f,
	}),
		(t.attributes.popper = Object.assign({}, t.attributes.popper, {
			"data-popper-reference-hidden": d,
			"data-popper-escaped": f,
		}));
}
const rP = {
	name: "hide",
	enabled: !0,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: nP,
};
function oP(e, t, n) {
	var r = Bn(e),
		o = [Tt, Nt].indexOf(r) >= 0 ? -1 : 1,
		i =
			typeof n == "function"
				? n(Object.assign({}, t, { placement: e }))
				: n,
		s = i[0],
		a = i[1];
	return (
		(s = s || 0),
		(a = (a || 0) * o),
		[Tt, fn].indexOf(r) >= 0 ? { x: a, y: s } : { x: s, y: a }
	);
}
function iP(e) {
	var t = e.state,
		n = e.options,
		r = e.name,
		o = n.offset,
		i = o === void 0 ? [0, 0] : o,
		s = mx.reduce(function (d, f) {
			return (d[f] = oP(f, t.rects, i)), d;
		}, {}),
		a = s[t.placement],
		l = a.x,
		u = a.y;
	t.modifiersData.popperOffsets != null &&
		((t.modifiersData.popperOffsets.x += l),
		(t.modifiersData.popperOffsets.y += u)),
		(t.modifiersData[r] = s);
}
const sP = {
	name: "offset",
	enabled: !0,
	phase: "main",
	requires: ["popperOffsets"],
	fn: iP,
};
function aP(e) {
	var t = e.state,
		n = e.name;
	t.modifiersData[n] = Ex({
		reference: t.rects.reference,
		element: t.rects.popper,
		strategy: "absolute",
		placement: t.placement,
	});
}
const lP = {
	name: "popperOffsets",
	enabled: !0,
	phase: "read",
	fn: aP,
	data: {},
};
function uP(e) {
	return e === "x" ? "y" : "x";
}
function cP(e) {
	var t = e.state,
		n = e.options,
		r = e.name,
		o = n.mainAxis,
		i = o === void 0 ? !0 : o,
		s = n.altAxis,
		a = s === void 0 ? !1 : s,
		l = n.boundary,
		u = n.rootBoundary,
		d = n.altBoundary,
		f = n.padding,
		h = n.tether,
		m = h === void 0 ? !0 : h,
		y = n.tetherOffset,
		w = y === void 0 ? 0 : y,
		S = zs(t, { boundary: l, rootBoundary: u, padding: f, altBoundary: d }),
		g = Bn(t.placement),
		x = vi(t.placement),
		v = !x,
		C = fp(g),
		j = uP(C),
		E = t.modifiersData.popperOffsets,
		O = t.rects.reference,
		R = t.rects.popper,
		D =
			typeof w == "function"
				? w(Object.assign({}, t.rects, { placement: t.placement }))
				: w,
		N =
			typeof D == "number"
				? { mainAxis: D, altAxis: D }
				: Object.assign({ mainAxis: 0, altAxis: 0 }, D),
		L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
		$ = { x: 0, y: 0 };
	if (E) {
		if (i) {
			var B,
				J = C === "y" ? Nt : Tt,
				oe = C === "y" ? dn : fn,
				Y = C === "y" ? "height" : "width",
				K = E[C],
				T = K + S[J],
				M = K - S[oe],
				F = m ? -R[Y] / 2 : 0,
				Q = x === pi ? O[Y] : R[Y],
				se = x === pi ? -R[Y] : -O[Y],
				Ee = t.elements.arrow,
				fe = m && Ee ? dp(Ee) : { width: 0, height: 0 },
				ce = t.modifiersData["arrow#persistent"]
					? t.modifiersData["arrow#persistent"].padding
					: gx(),
				re = ce[J],
				nt = ce[oe],
				qe = vs(0, O[Y], fe[Y]),
				Gt = v
					? O[Y] / 2 - F - qe - re - N.mainAxis
					: Q - qe - re - N.mainAxis,
				Nn = v
					? -O[Y] / 2 + F + qe + nt + N.mainAxis
					: se + qe + nt + N.mainAxis,
				xe = t.elements.arrow && ra(t.elements.arrow),
				Be = xe
					? C === "y"
						? xe.clientTop || 0
						: xe.clientLeft || 0
					: 0,
				At = (B = L == null ? void 0 : L[C]) != null ? B : 0,
				mn = K + Gt - At - Be,
				le = K + Nn - At,
				Qn = vs(m ? Fl(T, mn) : T, K, m ? ho(M, le) : M);
			(E[C] = Qn), ($[C] = Qn - K);
		}
		if (a) {
			var Tn,
				Ii = C === "x" ? Nt : Tt,
				Ai = C === "x" ? dn : fn,
				vn = E[j],
				Xt = j === "y" ? "height" : "width",
				Gr = vn + S[Ii],
				Vn = vn - S[Ai],
				rt = [Nt, Tt].indexOf(g) !== -1,
				yn = (Tn = L == null ? void 0 : L[j]) != null ? Tn : 0,
				Xr = rt ? Gr : vn - O[Xt] - R[Xt] - yn + N.altAxis,
				qn = rt ? vn + O[Xt] + R[Xt] - yn - N.altAxis : Vn,
				ko =
					m && rt ? Lb(Xr, vn, qn) : vs(m ? Xr : Gr, vn, m ? qn : Vn);
			(E[j] = ko), ($[j] = ko - vn);
		}
		t.modifiersData[r] = $;
	}
}
const dP = {
	name: "preventOverflow",
	enabled: !0,
	phase: "main",
	fn: cP,
	requiresIfExists: ["offset"],
};
function fP(e) {
	return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function pP(e) {
	return e === Kt(e) || !zn(e) ? pp(e) : fP(e);
}
function hP(e) {
	var t = e.getBoundingClientRect(),
		n = hi(t.width) / e.offsetWidth || 1,
		r = hi(t.height) / e.offsetHeight || 1;
	return n !== 1 || r !== 1;
}
function mP(e, t, n) {
	n === void 0 && (n = !1);
	var r = zn(t),
		o = zn(t) && hP(t),
		i = Qr(t),
		s = mi(e, o, n),
		a = { scrollLeft: 0, scrollTop: 0 },
		l = { x: 0, y: 0 };
	return (
		(r || (!r && !n)) &&
			((Ur(t) !== "body" || mp(i)) && (a = pP(t)),
			zn(t)
				? ((l = mi(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
				: i && (l.x = hp(i))),
		{
			x: s.left + a.scrollLeft - l.x,
			y: s.top + a.scrollTop - l.y,
			width: s.width,
			height: s.height,
		}
	);
}
function vP(e) {
	var t = new Map(),
		n = new Set(),
		r = [];
	e.forEach(function (i) {
		t.set(i.name, i);
	});
	function o(i) {
		n.add(i.name);
		var s = [].concat(i.requires || [], i.requiresIfExists || []);
		s.forEach(function (a) {
			if (!n.has(a)) {
				var l = t.get(a);
				l && o(l);
			}
		}),
			r.push(i);
	}
	return (
		e.forEach(function (i) {
			n.has(i.name) || o(i);
		}),
		r
	);
}
function yP(e) {
	var t = vP(e);
	return Tb.reduce(function (n, r) {
		return n.concat(
			t.filter(function (o) {
				return o.phase === r;
			})
		);
	}, []);
}
function gP(e) {
	var t;
	return function () {
		return (
			t ||
				(t = new Promise(function (n) {
					Promise.resolve().then(function () {
						(t = void 0), n(e());
					});
				})),
			t
		);
	};
}
function xP(e) {
	var t = e.reduce(function (n, r) {
		var o = n[r.name];
		return (
			(n[r.name] = o
				? Object.assign({}, o, r, {
						options: Object.assign({}, o.options, r.options),
						data: Object.assign({}, o.data, r.data),
				  })
				: r),
			n
		);
	}, {});
	return Object.keys(t).map(function (n) {
		return t[n];
	});
}
var Im = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Am() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
		t[n] = arguments[n];
	return !t.some(function (r) {
		return !(r && typeof r.getBoundingClientRect == "function");
	});
}
function wP(e) {
	e === void 0 && (e = {});
	var t = e,
		n = t.defaultModifiers,
		r = n === void 0 ? [] : n,
		o = t.defaultOptions,
		i = o === void 0 ? Im : o;
	return function (a, l, u) {
		u === void 0 && (u = i);
		var d = {
				placement: "bottom",
				orderedModifiers: [],
				options: Object.assign({}, Im, i),
				modifiersData: {},
				elements: { reference: a, popper: l },
				attributes: {},
				styles: {},
			},
			f = [],
			h = !1,
			m = {
				state: d,
				setOptions: function (g) {
					var x = typeof g == "function" ? g(d.options) : g;
					w(),
						(d.options = Object.assign({}, i, d.options, x)),
						(d.scrollParents = {
							reference: So(a)
								? ys(a)
								: a.contextElement
								? ys(a.contextElement)
								: [],
							popper: ys(l),
						});
					var v = yP(xP([].concat(r, d.options.modifiers)));
					return (
						(d.orderedModifiers = v.filter(function (C) {
							return C.enabled;
						})),
						y(),
						m.update()
					);
				},
				forceUpdate: function () {
					if (!h) {
						var g = d.elements,
							x = g.reference,
							v = g.popper;
						if (Am(x, v)) {
							(d.rects = {
								reference: mP(
									x,
									ra(v),
									d.options.strategy === "fixed"
								),
								popper: dp(v),
							}),
								(d.reset = !1),
								(d.placement = d.options.placement),
								d.orderedModifiers.forEach(function (N) {
									return (d.modifiersData[N.name] =
										Object.assign({}, N.data));
								});
							for (
								var C = 0;
								C < d.orderedModifiers.length;
								C++
							) {
								if (d.reset === !0) {
									(d.reset = !1), (C = -1);
									continue;
								}
								var j = d.orderedModifiers[C],
									E = j.fn,
									O = j.options,
									R = O === void 0 ? {} : O,
									D = j.name;
								typeof E == "function" &&
									(d =
										E({
											state: d,
											options: R,
											name: D,
											instance: m,
										}) || d);
							}
						}
					}
				},
				update: gP(function () {
					return new Promise(function (S) {
						m.forceUpdate(), S(d);
					});
				}),
				destroy: function () {
					w(), (h = !0);
				},
			};
		if (!Am(a, l)) return m;
		m.setOptions(u).then(function (S) {
			!h && u.onFirstUpdate && u.onFirstUpdate(S);
		});
		function y() {
			d.orderedModifiers.forEach(function (S) {
				var g = S.name,
					x = S.options,
					v = x === void 0 ? {} : x,
					C = S.effect;
				if (typeof C == "function") {
					var j = C({ state: d, name: g, instance: m, options: v }),
						E = function () {};
					f.push(j || E);
				}
			});
		}
		function w() {
			f.forEach(function (S) {
				return S();
			}),
				(f = []);
		}
		return m;
	};
}
const SP = wP({ defaultModifiers: [rP, lP, zb, Kb, sP, tP, dP, $b] }),
	EP = ["enabled", "placement", "strategy", "modifiers"];
function CP(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		o,
		i;
	for (i = 0; i < r.length; i++)
		(o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
	return n;
}
const jP = {
		name: "applyStyles",
		enabled: !1,
		phase: "afterWrite",
		fn: () => {},
	},
	RP = {
		name: "ariaDescribedBy",
		enabled: !0,
		phase: "afterWrite",
		effect:
			({ state: e }) =>
			() => {
				const { reference: t, popper: n } = e.elements;
				if ("removeAttribute" in t) {
					const r = (t.getAttribute("aria-describedby") || "")
						.split(",")
						.filter((o) => o.trim() !== n.id);
					r.length
						? t.setAttribute("aria-describedby", r.join(","))
						: t.removeAttribute("aria-describedby");
				}
			},
		fn: ({ state: e }) => {
			var t;
			const { popper: n, reference: r } = e.elements,
				o =
					(t = n.getAttribute("role")) == null
						? void 0
						: t.toLowerCase();
			if (n.id && o === "tooltip" && "setAttribute" in r) {
				const i = r.getAttribute("aria-describedby");
				if (i && i.split(",").indexOf(n.id) !== -1) return;
				r.setAttribute("aria-describedby", i ? `${i},${n.id}` : n.id);
			}
		},
	},
	OP = [];
function bP(e, t, n = {}) {
	let {
			enabled: r = !0,
			placement: o = "bottom",
			strategy: i = "absolute",
			modifiers: s = OP,
		} = n,
		a = CP(n, EP);
	const l = p.useRef(s),
		u = p.useRef(),
		d = p.useCallback(() => {
			var S;
			(S = u.current) == null || S.update();
		}, []),
		f = p.useCallback(() => {
			var S;
			(S = u.current) == null || S.forceUpdate();
		}, []),
		[h, m] = xb(
			p.useState({
				placement: o,
				update: d,
				forceUpdate: f,
				attributes: {},
				styles: { popper: {}, arrow: {} },
			})
		),
		y = p.useMemo(
			() => ({
				name: "updateStateModifier",
				enabled: !0,
				phase: "write",
				requires: ["computeStyles"],
				fn: ({ state: S }) => {
					const g = {},
						x = {};
					Object.keys(S.elements).forEach((v) => {
						(g[v] = S.styles[v]), (x[v] = S.attributes[v]);
					}),
						m({
							state: S,
							styles: g,
							attributes: x,
							update: d,
							forceUpdate: f,
							placement: S.placement,
						});
				},
			}),
			[d, f, m]
		),
		w = p.useMemo(
			() => (ms(l.current, s) || (l.current = s), l.current),
			[s]
		);
	return (
		p.useEffect(() => {
			!u.current ||
				!r ||
				u.current.setOptions({
					placement: o,
					strategy: i,
					modifiers: [...w, y, jP],
				});
		}, [i, o, y, r, w]),
		p.useEffect(() => {
			if (!(!r || e == null || t == null))
				return (
					(u.current = SP(
						e,
						t,
						Object.assign({}, a, {
							placement: o,
							strategy: i,
							modifiers: [...w, RP, y],
						})
					)),
					() => {
						u.current != null &&
							(u.current.destroy(),
							(u.current = void 0),
							m((S) =>
								Object.assign({}, S, {
									attributes: {},
									styles: { popper: {} },
								})
							));
					}
				);
		}, [r, e, t]),
		h
	);
}
function Ul(e, t) {
	if (e.contains) return e.contains(t);
	if (e.compareDocumentPosition)
		return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var PP = function () {},
	kP = PP;
const NP = qs(kP),
	Mm = () => {};
function TP(e) {
	return e.button === 0;
}
function _P(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const vc = (e) => e && ("current" in e ? e.current : e),
	$m = { click: "mousedown", mouseup: "mousedown", pointerup: "pointerdown" };
function DP(e, t = Mm, { disabled: n, clickTrigger: r = "click" } = {}) {
	const o = p.useRef(!1),
		i = p.useRef(!1),
		s = p.useCallback(
			(u) => {
				const d = vc(e);
				NP(
					!!d,
					"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"
				),
					(o.current =
						!d ||
						_P(u) ||
						!TP(u) ||
						!!Ul(d, u.target) ||
						i.current),
					(i.current = !1);
			},
			[e]
		),
		a = Le((u) => {
			const d = vc(e);
			d && Ul(d, u.target) && (i.current = !0);
		}),
		l = Le((u) => {
			o.current || t(u);
		});
	p.useEffect(() => {
		var u, d;
		if (n || e == null) return;
		const f = hu(vc(e)),
			h = f.defaultView || window;
		let m =
				(u = h.event) != null
					? u
					: (d = h.parent) == null
					? void 0
					: d.event,
			y = null;
		$m[r] && (y = Or(f, $m[r], a, !0));
		const w = Or(f, r, s, !0),
			S = Or(f, r, (x) => {
				if (x === m) {
					m = void 0;
					return;
				}
				l(x);
			});
		let g = [];
		return (
			"ontouchstart" in f.documentElement &&
				(g = [].slice
					.call(f.body.children)
					.map((x) => Or(x, "mousemove", Mm))),
			() => {
				y == null || y(), w(), S(), g.forEach((x) => x());
			}
		);
	}, [e, n, r, s, a, l]);
}
function LP(e) {
	const t = {};
	return Array.isArray(e)
		? (e == null ||
				e.forEach((n) => {
					t[n.name] = n;
				}),
		  t)
		: e || t;
}
function IP(e = {}) {
	return Array.isArray(e)
		? e
		: Object.keys(e).map((t) => ((e[t].name = t), e[t]));
}
function AP({
	enabled: e,
	enableEvents: t,
	placement: n,
	flip: r,
	offset: o,
	fixed: i,
	containerPadding: s,
	arrowElement: a,
	popperConfig: l = {},
}) {
	var u, d, f, h, m;
	const y = LP(l.modifiers);
	return Object.assign({}, l, {
		placement: n,
		enabled: e,
		strategy: i ? "fixed" : l.strategy,
		modifiers: IP(
			Object.assign({}, y, {
				eventListeners: {
					enabled: t,
					options:
						(u = y.eventListeners) == null ? void 0 : u.options,
				},
				preventOverflow: Object.assign({}, y.preventOverflow, {
					options: s
						? Object.assign(
								{ padding: s },
								(d = y.preventOverflow) == null
									? void 0
									: d.options
						  )
						: (f = y.preventOverflow) == null
						? void 0
						: f.options,
				}),
				offset: {
					options: Object.assign(
						{ offset: o },
						(h = y.offset) == null ? void 0 : h.options
					),
				},
				arrow: Object.assign({}, y.arrow, {
					enabled: !!a,
					options: Object.assign(
						{},
						(m = y.arrow) == null ? void 0 : m.options,
						{ element: a }
					),
				}),
				flip: Object.assign({ enabled: !!r }, y.flip),
			})
		),
	});
}
const MP = ["children"];
function $P(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		o,
		i;
	for (i = 0; i < r.length; i++)
		(o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
	return n;
}
const FP = () => {};
function Cx(e = {}) {
	const t = p.useContext(wu),
		[n, r] = AO(),
		o = p.useRef(!1),
		{
			flip: i,
			offset: s,
			rootCloseEvent: a,
			fixed: l = !1,
			placement: u,
			popperConfig: d = {},
			enableEventListeners: f = !0,
			usePopper: h = !!t,
		} = e,
		m = (t == null ? void 0 : t.show) == null ? !!e.show : t.show;
	m && !o.current && (o.current = !0);
	const y = (E) => {
			t == null || t.toggle(!1, E);
		},
		{
			placement: w,
			setMenu: S,
			menuElement: g,
			toggleElement: x,
		} = t || {},
		v = bP(
			x,
			g,
			AP({
				placement: u || w || "bottom-start",
				enabled: h,
				enableEvents: f ?? m,
				offset: s,
				flip: i,
				fixed: l,
				arrowElement: n,
				popperConfig: d,
			})
		),
		C = Object.assign(
			{ ref: S || FP, "aria-labelledby": x == null ? void 0 : x.id },
			v.attributes.popper,
			{ style: v.styles.popper }
		),
		j = {
			show: m,
			placement: w,
			hasShown: o.current,
			toggle: t == null ? void 0 : t.toggle,
			popper: h ? v : null,
			arrowProps: h
				? Object.assign({ ref: r }, v.attributes.arrow, {
						style: v.styles.arrow,
				  })
				: {},
		};
	return DP(g, y, { clickTrigger: a, disabled: !m }), [C, j];
}
const UP = { usePopper: !0 };
function vp(e) {
	let { children: t } = e,
		n = $P(e, MP);
	const [r, o] = Cx(n);
	return c.jsx(c.Fragment, { children: t(r, o) });
}
vp.displayName = "DropdownMenu";
vp.defaultProps = UP;
const Bl = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
	jx = ie.createContext(Bl),
	BP = ie.createContext(!1);
let zP = !!(
		typeof window < "u" &&
		window.document &&
		window.document.createElement
	),
	yc = new WeakMap();
function HP(e = !1) {
	let t = p.useContext(jx),
		n = p.useRef(null);
	if (n.current === null && !e) {
		var r, o;
		let i =
			(o = ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ===
				null ||
			o === void 0 ||
			(r = o.ReactCurrentOwner) === null ||
			r === void 0
				? void 0
				: r.current;
		if (i) {
			let s = yc.get(i);
			s == null
				? yc.set(i, { id: t.current, state: i.memoizedState })
				: i.memoizedState !== s.state &&
				  ((t.current = s.id), yc.delete(i));
		}
		n.current = ++t.current;
	}
	return n.current;
}
function KP(e) {
	let t = p.useContext(jx);
	t === Bl &&
		!zP &&
		console.warn(
			"When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."
		);
	let n = HP(!!e),
		r = `react-aria${t.prefix}`;
	return e || `${r}-${n}`;
}
function WP(e) {
	let t = ie.useId(),
		[n] = p.useState(XP()),
		r = n ? "react-aria" : `react-aria${Bl.prefix}`;
	return e || `${r}-${t}`;
}
const QP = typeof ie.useId == "function" ? WP : KP;
function VP() {
	return !1;
}
function qP() {
	return !0;
}
function GP(e) {
	return () => {};
}
function XP() {
	return typeof ie.useSyncExternalStore == "function"
		? ie.useSyncExternalStore(GP, VP, qP)
		: p.useContext(BP);
}
const Rx = (e) => {
		var t;
		return (
			((t = e.getAttribute("role")) == null
				? void 0
				: t.toLowerCase()) === "menu"
		);
	},
	Fm = () => {};
function Ox() {
	const e = QP(),
		{
			show: t = !1,
			toggle: n = Fm,
			setToggle: r,
			menuElement: o,
		} = p.useContext(wu) || {},
		i = p.useCallback(
			(a) => {
				n(!t, a);
			},
			[t, n]
		),
		s = { id: e, ref: r || Fm, onClick: i, "aria-expanded": !!t };
	return o && Rx(o) && (s["aria-haspopup"] = !0), [s, { show: t, toggle: n }];
}
function bx({ children: e }) {
	const [t, n] = Ox();
	return c.jsx(c.Fragment, { children: e(t, n) });
}
bx.displayName = "DropdownToggle";
const JP = p.createContext(null),
	yi = (e, t = null) => (e != null ? String(e) : t || null),
	Eo = JP,
	Px = p.createContext(null);
Px.displayName = "NavContext";
const yp = Px,
	YP = "data-rr-ui-",
	ZP = "rrUi";
function bi(e) {
	return `${YP}${e}`;
}
function ek(e) {
	return `${ZP}${e}`;
}
const tk = ["eventKey", "disabled", "onClick", "active", "as"];
function nk(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		o,
		i;
	for (i = 0; i < r.length; i++)
		(o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
	return n;
}
function kx({ key: e, href: t, active: n, disabled: r, onClick: o }) {
	const i = p.useContext(Eo),
		s = p.useContext(yp),
		{ activeKey: a } = s || {},
		l = yi(e, t),
		u = n == null && e != null ? yi(a) === l : n;
	return [
		{
			onClick: Le((f) => {
				r ||
					(o == null || o(f),
					i && !f.isPropagationStopped() && i(l, f));
			}),
			"aria-disabled": r || void 0,
			"aria-selected": u,
			[bi("dropdown-item")]: "",
		},
		{ isActive: u },
	];
}
const Nx = p.forwardRef((e, t) => {
	let { eventKey: n, disabled: r, onClick: o, active: i, as: s = ap } = e,
		a = nk(e, tk);
	const [l] = kx({
		key: n,
		href: a.href,
		disabled: r,
		onClick: o,
		active: i,
	});
	return c.jsx(s, Object.assign({}, a, { ref: t }, l));
});
Nx.displayName = "DropdownItem";
const Tx = p.createContext(mu ? window : void 0);
Tx.Provider;
function Eu() {
	return p.useContext(Tx);
}
function Um() {
	const e = px(),
		t = p.useRef(null),
		n = p.useCallback(
			(r) => {
				(t.current = r), e();
			},
			[e]
		);
	return [t, n];
}
function oa({
	defaultShow: e,
	show: t,
	onSelect: n,
	onToggle: r,
	itemSelector: o = `* [${bi("dropdown-item")}]`,
	focusFirstItemOnShow: i,
	placement: s = "bottom-start",
	children: a,
}) {
	const l = Eu(),
		[u, d] = yb(t, e, r),
		[f, h] = Um(),
		m = f.current,
		[y, w] = Um(),
		S = y.current,
		g = U0(u),
		x = p.useRef(null),
		v = p.useRef(!1),
		C = p.useContext(Eo),
		j = p.useCallback(
			(L, $, B = $ == null ? void 0 : $.type) => {
				d(L, { originalEvent: $, source: B });
			},
			[d]
		),
		E = Le((L, $) => {
			n == null || n(L, $),
				j(!1, $, "select"),
				$.isPropagationStopped() || C == null || C(L, $);
		}),
		O = p.useMemo(
			() => ({
				toggle: j,
				placement: s,
				show: u,
				menuElement: m,
				toggleElement: S,
				setMenu: h,
				setToggle: w,
			}),
			[j, s, u, m, S, h, w]
		);
	m && g && !u && (v.current = m.contains(m.ownerDocument.activeElement));
	const R = Le(() => {
			S && S.focus && S.focus();
		}),
		D = Le(() => {
			const L = x.current;
			let $ = i;
			if (
				($ == null &&
					($ = f.current && Rx(f.current) ? "keyboard" : !1),
				$ === !1 || ($ === "keyboard" && !/^key.+$/.test(L)))
			)
				return;
			const B = Jn(f.current, o)[0];
			B && B.focus && B.focus();
		});
	p.useEffect(() => {
		u ? D() : v.current && ((v.current = !1), R());
	}, [u, v, R, D]),
		p.useEffect(() => {
			x.current = null;
		});
	const N = (L, $) => {
		if (!f.current) return null;
		const B = Jn(f.current, o);
		let J = B.indexOf(L) + $;
		return (J = Math.max(0, Math.min(J, B.length))), B[J];
	};
	return (
		MO(
			p.useCallback(() => l.document, [l]),
			"keydown",
			(L) => {
				var $, B;
				const { key: J } = L,
					oe = L.target,
					Y = ($ = f.current) == null ? void 0 : $.contains(oe),
					K = (B = y.current) == null ? void 0 : B.contains(oe);
				if (
					(/input|textarea/i.test(oe.tagName) &&
						(J === " " ||
							(J !== "Escape" && Y) ||
							(J === "Escape" && oe.type === "search"))) ||
					(!Y && !K) ||
					(J === "Tab" && (!f.current || !u))
				)
					return;
				x.current = L.type;
				const M = { originalEvent: L, source: L.type };
				switch (J) {
					case "ArrowUp": {
						const F = N(oe, -1);
						F && F.focus && F.focus(), L.preventDefault();
						return;
					}
					case "ArrowDown":
						if ((L.preventDefault(), !u)) d(!0, M);
						else {
							const F = N(oe, 1);
							F && F.focus && F.focus();
						}
						return;
					case "Tab":
						A0(
							oe.ownerDocument,
							"keyup",
							(F) => {
								var Q;
								((F.key === "Tab" && !F.target) ||
									!(
										(Q = f.current) != null &&
										Q.contains(F.target)
									)) &&
									d(!1, M);
							},
							{ once: !0 }
						);
						break;
					case "Escape":
						J === "Escape" &&
							(L.preventDefault(), L.stopPropagation()),
							d(!1, M);
						break;
				}
			}
		),
		c.jsx(Eo.Provider, {
			value: E,
			children: c.jsx(wu.Provider, { value: O, children: a }),
		})
	);
}
oa.displayName = "Dropdown";
oa.Menu = vp;
oa.Toggle = bx;
oa.Item = Nx;
const _x = p.createContext({});
_x.displayName = "DropdownContext";
const Dx = _x,
	Lx = p.forwardRef(
		(
			{
				className: e,
				bsPrefix: t,
				as: n = "hr",
				role: r = "separator",
				...o
			},
			i
		) => (
			(t = V(t, "dropdown-divider")),
			c.jsx(n, { ref: i, className: z(e, t), role: r, ...o })
		)
	);
Lx.displayName = "DropdownDivider";
const rk = Lx,
	Ix = p.forwardRef(
		(
			{
				className: e,
				bsPrefix: t,
				as: n = "div",
				role: r = "heading",
				...o
			},
			i
		) => (
			(t = V(t, "dropdown-header")),
			c.jsx(n, { ref: i, className: z(e, t), role: r, ...o })
		)
	);
Ix.displayName = "DropdownHeader";
const ok = Ix,
	Ax = p.forwardRef(
		(
			{
				bsPrefix: e,
				className: t,
				eventKey: n,
				disabled: r = !1,
				onClick: o,
				active: i,
				as: s = fi,
				...a
			},
			l
		) => {
			const u = V(e, "dropdown-item"),
				[d, f] = kx({
					key: n,
					href: a.href,
					disabled: r,
					onClick: o,
					active: i,
				});
			return c.jsx(s, {
				...a,
				...d,
				ref: l,
				className: z(t, u, f.isActive && "active", r && "disabled"),
			});
		}
	);
Ax.displayName = "DropdownItem";
const ik = Ax,
	Mx = p.forwardRef(
		({ className: e, bsPrefix: t, as: n = "span", ...r }, o) => (
			(t = V(t, "dropdown-item-text")),
			c.jsx(n, { ref: o, className: z(e, t), ...r })
		)
	);
Mx.displayName = "DropdownItemText";
const sk = Mx,
	$x = p.createContext(null);
$x.displayName = "InputGroupContext";
const Fx = $x,
	Ux = p.createContext(null);
Ux.displayName = "NavbarContext";
const bo = Ux;
function Bx(e, t) {
	return e;
}
function zx(e, t, n) {
	const r = n ? "top-end" : "top-start",
		o = n ? "top-start" : "top-end",
		i = n ? "bottom-end" : "bottom-start",
		s = n ? "bottom-start" : "bottom-end",
		a = n ? "right-start" : "left-start",
		l = n ? "right-end" : "left-end",
		u = n ? "left-start" : "right-start",
		d = n ? "left-end" : "right-end";
	let f = e ? s : i;
	return (
		t === "up"
			? (f = e ? o : r)
			: t === "end"
			? (f = e ? d : u)
			: t === "start"
			? (f = e ? l : a)
			: t === "down-centered"
			? (f = "bottom")
			: t === "up-centered" && (f = "top"),
		f
	);
}
const Hx = p.forwardRef(
	(
		{
			bsPrefix: e,
			className: t,
			align: n,
			rootCloseEvent: r,
			flip: o = !0,
			show: i,
			renderOnMount: s,
			as: a = "div",
			popperConfig: l,
			variant: u,
			...d
		},
		f
	) => {
		let h = !1;
		const m = p.useContext(bo),
			y = V(e, "dropdown-menu"),
			{ align: w, drop: S, isRTL: g } = p.useContext(Dx);
		n = n || w;
		const x = p.useContext(Fx),
			v = [];
		if (n)
			if (typeof n == "object") {
				const L = Object.keys(n);
				if (L.length) {
					const $ = L[0],
						B = n[$];
					(h = B === "start"), v.push(`${y}-${$}-${B}`);
				}
			} else n === "end" && (h = !0);
		const C = zx(h, S, g),
			[j, { hasShown: E, popper: O, show: R, toggle: D }] = Cx({
				flip: o,
				rootCloseEvent: r,
				show: i,
				usePopper: !m && v.length === 0,
				offset: [0, 2],
				popperConfig: l,
				placement: C,
			});
		if (
			((j.ref = Oi(Bx(f), j.ref)),
			$l(() => {
				R && (O == null || O.update());
			}, [R]),
			!E && !s && !x)
		)
			return null;
		typeof a != "string" &&
			((j.show = R),
			(j.close = () => (D == null ? void 0 : D(!1))),
			(j.align = n));
		let N = d.style;
		return (
			O != null &&
				O.placement &&
				((N = { ...d.style, ...j.style }),
				(d["x-placement"] = O.placement)),
			c.jsx(a, {
				...d,
				...j,
				style: N,
				...((v.length || m) && { "data-bs-popper": "static" }),
				className: z(
					t,
					y,
					R && "show",
					h && `${y}-end`,
					u && `${y}-${u}`,
					...v
				),
			})
		);
	}
);
Hx.displayName = "DropdownMenu";
const ak = Hx,
	Kx = p.forwardRef(
		(
			{
				bsPrefix: e,
				split: t,
				className: n,
				childBsPrefix: r,
				as: o = Ue,
				...i
			},
			s
		) => {
			const a = V(e, "dropdown-toggle"),
				l = p.useContext(wu);
			r !== void 0 && (i.bsPrefix = r);
			const [u] = Ox();
			return (
				(u.ref = Oi(u.ref, Bx(s))),
				c.jsx(o, {
					className: z(
						n,
						a,
						t && `${a}-split`,
						(l == null ? void 0 : l.show) && "show"
					),
					...u,
					...i,
				})
			);
		}
	);
Kx.displayName = "DropdownToggle";
const lk = Kx,
	Wx = p.forwardRef((e, t) => {
		const {
				bsPrefix: n,
				drop: r = "down",
				show: o,
				className: i,
				align: s = "start",
				onSelect: a,
				onToggle: l,
				focusFirstItemOnShow: u,
				as: d = "div",
				navbar: f,
				autoClose: h = !0,
				...m
			} = Ri(e, { show: "onToggle" }),
			y = p.useContext(Fx),
			w = V(n, "dropdown"),
			S = N0(),
			g = (O) =>
				h === !1
					? O === "click"
					: h === "inside"
					? O !== "rootClose"
					: h === "outside"
					? O !== "select"
					: !0,
			x = Le((O, R) => {
				var D, N;
				(!((D = R.originalEvent) == null || (N = D.target) == null) &&
					N.classList.contains("dropdown-toggle") &&
					R.source === "mousedown") ||
					(R.originalEvent.currentTarget === document &&
						(R.source !== "keydown" ||
							R.originalEvent.key === "Escape") &&
						(R.source = "rootClose"),
					g(R.source) && (l == null || l(O, R)));
			}),
			C = zx(s === "end", r, S),
			j = p.useMemo(() => ({ align: s, drop: r, isRTL: S }), [s, r, S]),
			E = {
				down: w,
				"down-centered": `${w}-center`,
				up: "dropup",
				"up-centered": "dropup-center dropup",
				end: "dropend",
				start: "dropstart",
			};
		return c.jsx(Dx.Provider, {
			value: j,
			children: c.jsx(oa, {
				placement: C,
				show: o,
				onSelect: a,
				onToggle: x,
				focusFirstItemOnShow: u,
				itemSelector: `.${w}-item:not(.disabled):not(:disabled)`,
				children: y
					? m.children
					: c.jsx(d, {
							...m,
							ref: t,
							className: z(i, o && "show", E[r]),
					  }),
			}),
		});
	});
Wx.displayName = "Dropdown";
const so = Object.assign(Wx, {
	Toggle: lk,
	Menu: ak,
	Item: ik,
	ItemText: sk,
	Divider: rk,
	Header: ok,
});
jt.string, jt.bool, jt.bool, jt.bool, jt.bool;
const Qx = p.forwardRef(
	(
		{
			bsPrefix: e,
			className: t,
			fluid: n = !1,
			rounded: r = !1,
			roundedCircle: o = !1,
			thumbnail: i = !1,
			...s
		},
		a
	) => (
		(e = V(e, "img")),
		c.jsx("img", {
			ref: a,
			...s,
			className: z(
				t,
				n && `${e}-fluid`,
				r && "rounded",
				o && "rounded-circle",
				i && `${e}-thumbnail`
			),
		})
	)
);
Qx.displayName = "Image";
const ia = Qx,
	uk = { type: jt.string, tooltip: jt.bool, as: jt.elementType },
	gp = p.forwardRef(
		(
			{
				as: e = "div",
				className: t,
				type: n = "valid",
				tooltip: r = !1,
				...o
			},
			i
		) =>
			c.jsx(e, {
				...o,
				ref: i,
				className: z(t, `${n}-${r ? "tooltip" : "feedback"}`),
			})
	);
gp.displayName = "Feedback";
gp.propTypes = uk;
const Vx = gp,
	ck = p.createContext({}),
	cr = ck,
	qx = p.forwardRef(
		(
			{
				id: e,
				bsPrefix: t,
				className: n,
				type: r = "checkbox",
				isValid: o = !1,
				isInvalid: i = !1,
				as: s = "input",
				...a
			},
			l
		) => {
			const { controlId: u } = p.useContext(cr);
			return (
				(t = V(t, "form-check-input")),
				c.jsx(s, {
					...a,
					ref: l,
					type: r,
					id: e || u,
					className: z(n, t, o && "is-valid", i && "is-invalid"),
				})
			);
		}
	);
qx.displayName = "FormCheckInput";
const Gx = qx,
	Xx = p.forwardRef(({ bsPrefix: e, className: t, htmlFor: n, ...r }, o) => {
		const { controlId: i } = p.useContext(cr);
		return (
			(e = V(e, "form-check-label")),
			c.jsx("label", {
				...r,
				ref: o,
				htmlFor: n || i,
				className: z(t, e),
			})
		);
	});
Xx.displayName = "FormCheckLabel";
const Bd = Xx,
	Jx = p.forwardRef(
		(
			{
				id: e,
				bsPrefix: t,
				bsSwitchPrefix: n,
				inline: r = !1,
				reverse: o = !1,
				disabled: i = !1,
				isValid: s = !1,
				isInvalid: a = !1,
				feedbackTooltip: l = !1,
				feedback: u,
				feedbackType: d,
				className: f,
				style: h,
				title: m = "",
				type: y = "checkbox",
				label: w,
				children: S,
				as: g = "input",
				...x
			},
			v
		) => {
			(t = V(t, "form-check")), (n = V(n, "form-switch"));
			const { controlId: C } = p.useContext(cr),
				j = p.useMemo(() => ({ controlId: e || C }), [C, e]),
				E = (!S && w != null && w !== !1) || fb(S, Bd),
				O = c.jsx(Gx, {
					...x,
					type: y === "switch" ? "checkbox" : y,
					ref: v,
					isValid: s,
					isInvalid: a,
					disabled: i,
					as: g,
				});
			return c.jsx(cr.Provider, {
				value: j,
				children: c.jsx("div", {
					style: h,
					className: z(
						f,
						E && t,
						r && `${t}-inline`,
						o && `${t}-reverse`,
						y === "switch" && n
					),
					children:
						S ||
						c.jsxs(c.Fragment, {
							children: [
								O,
								E && c.jsx(Bd, { title: m, children: w }),
								u &&
									c.jsx(Vx, {
										type: d,
										tooltip: l,
										children: u,
									}),
							],
						}),
				}),
			});
		}
	);
Jx.displayName = "FormCheck";
const zl = Object.assign(Jx, { Input: Gx, Label: Bd }),
	Yx = p.forwardRef(
		(
			{
				bsPrefix: e,
				type: t,
				size: n,
				htmlSize: r,
				id: o,
				className: i,
				isValid: s = !1,
				isInvalid: a = !1,
				plaintext: l,
				readOnly: u,
				as: d = "input",
				...f
			},
			h
		) => {
			const { controlId: m } = p.useContext(cr);
			return (
				(e = V(e, "form-control")),
				c.jsx(d, {
					...f,
					type: t,
					size: r,
					ref: h,
					readOnly: u,
					id: o || m,
					className: z(
						i,
						l ? `${e}-plaintext` : e,
						n && `${e}-${n}`,
						t === "color" && `${e}-color`,
						s && "is-valid",
						a && "is-invalid"
					),
				})
			);
		}
	);
Yx.displayName = "FormControl";
const dk = Object.assign(Yx, { Feedback: Vx }),
	Zx = p.forwardRef(
		({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (
			(t = V(t, "form-floating")),
			c.jsx(n, { ref: o, className: z(e, t), ...r })
		)
	);
Zx.displayName = "FormFloating";
const fk = Zx,
	ew = p.forwardRef(({ controlId: e, as: t = "div", ...n }, r) => {
		const o = p.useMemo(() => ({ controlId: e }), [e]);
		return c.jsx(cr.Provider, {
			value: o,
			children: c.jsx(t, { ...n, ref: r }),
		});
	});
ew.displayName = "FormGroup";
const tw = ew,
	nw = p.forwardRef(
		(
			{
				as: e = "label",
				bsPrefix: t,
				column: n = !1,
				visuallyHidden: r = !1,
				className: o,
				htmlFor: i,
				...s
			},
			a
		) => {
			const { controlId: l } = p.useContext(cr);
			t = V(t, "form-label");
			let u = "col-form-label";
			typeof n == "string" && (u = `${u} ${u}-${n}`);
			const d = z(o, t, r && "visually-hidden", n && u);
			return (
				(i = i || l),
				n
					? c.jsx(q, {
							ref: a,
							as: "label",
							className: d,
							htmlFor: i,
							...s,
					  })
					: c.jsx(e, { ref: a, className: d, htmlFor: i, ...s })
			);
		}
	);
nw.displayName = "FormLabel";
const pk = nw,
	rw = p.forwardRef(({ bsPrefix: e, className: t, id: n, ...r }, o) => {
		const { controlId: i } = p.useContext(cr);
		return (
			(e = V(e, "form-range")),
			c.jsx("input", {
				...r,
				type: "range",
				ref: o,
				className: z(t, e),
				id: n || i,
			})
		);
	});
rw.displayName = "FormRange";
const hk = rw,
	ow = p.forwardRef(
		(
			{
				bsPrefix: e,
				size: t,
				htmlSize: n,
				className: r,
				isValid: o = !1,
				isInvalid: i = !1,
				id: s,
				...a
			},
			l
		) => {
			const { controlId: u } = p.useContext(cr);
			return (
				(e = V(e, "form-select")),
				c.jsx("select", {
					...a,
					size: n,
					ref: l,
					className: z(
						r,
						e,
						t && `${e}-${t}`,
						o && "is-valid",
						i && "is-invalid"
					),
					id: s || u,
				})
			);
		}
	);
ow.displayName = "FormSelect";
const mk = ow,
	iw = p.forwardRef(
		({ bsPrefix: e, className: t, as: n = "small", muted: r, ...o }, i) => (
			(e = V(e, "form-text")),
			c.jsx(n, { ...o, ref: i, className: z(t, e, r && "text-muted") })
		)
	);
iw.displayName = "FormText";
const vk = iw,
	sw = p.forwardRef((e, t) => c.jsx(zl, { ...e, ref: t, type: "switch" }));
sw.displayName = "Switch";
const yk = Object.assign(sw, { Input: zl.Input, Label: zl.Label }),
	aw = p.forwardRef(
		(
			{
				bsPrefix: e,
				className: t,
				children: n,
				controlId: r,
				label: o,
				...i
			},
			s
		) => (
			(e = V(e, "form-floating")),
			c.jsxs(tw, {
				ref: s,
				className: z(t, e),
				controlId: r,
				...i,
				children: [n, c.jsx("label", { htmlFor: r, children: o })],
			})
		)
	);
aw.displayName = "FloatingLabel";
const gk = aw,
	xk = { _ref: jt.any, validated: jt.bool, as: jt.elementType },
	xp = p.forwardRef(
		({ className: e, validated: t, as: n = "form", ...r }, o) =>
			c.jsx(n, { ...r, ref: o, className: z(e, t && "was-validated") })
	);
xp.displayName = "Form";
xp.propTypes = xk;
const I = Object.assign(xp, {
		Group: tw,
		Control: dk,
		Floating: fk,
		Check: zl,
		Switch: yk,
		Label: pk,
		Text: vk,
		Range: hk,
		Select: mk,
		FloatingLabel: gk,
	}),
	wk = p.createContext(null),
	lw = wk,
	Sk = ["as", "active", "eventKey"];
function Ek(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		o,
		i;
	for (i = 0; i < r.length; i++)
		(o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
	return n;
}
function wp({ key: e, onClick: t, active: n, id: r, role: o, disabled: i }) {
	const s = p.useContext(Eo),
		a = p.useContext(yp),
		l = p.useContext(lw);
	let u = n;
	const d = { role: o };
	if (a) {
		!o && a.role === "tablist" && (d.role = "tab");
		const f = a.getControllerId(e ?? null),
			h = a.getControlledId(e ?? null);
		(d[bi("event-key")] = e),
			(d.id = f || r),
			(u = n == null && e != null ? a.activeKey === e : n),
			(u ||
				(!(l != null && l.unmountOnExit) &&
					!(l != null && l.mountOnEnter))) &&
				(d["aria-controls"] = h);
	}
	return (
		d.role === "tab" &&
			((d["aria-selected"] = u),
			u || (d.tabIndex = -1),
			i && ((d.tabIndex = -1), (d["aria-disabled"] = !0))),
		(d.onClick = Le((f) => {
			i ||
				(t == null || t(f),
				e != null && s && !f.isPropagationStopped() && s(e, f));
		})),
		[d, { isActive: u }]
	);
}
const uw = p.forwardRef((e, t) => {
	let { as: n = ap, active: r, eventKey: o } = e,
		i = Ek(e, Sk);
	const [s, a] = wp(Object.assign({ key: yi(o, i.href), active: r }, i));
	return (
		(s[bi("active")] = a.isActive),
		c.jsx(n, Object.assign({}, i, s, { ref: t }))
	);
});
uw.displayName = "NavItem";
const Ck = uw,
	jk = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function Rk(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		o,
		i;
	for (i = 0; i < r.length; i++)
		(o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
	return n;
}
const Bm = () => {},
	zm = bi("event-key"),
	cw = p.forwardRef((e, t) => {
		let {
				as: n = "div",
				onSelect: r,
				activeKey: o,
				role: i,
				onKeyDown: s,
			} = e,
			a = Rk(e, jk);
		const l = px(),
			u = p.useRef(!1),
			d = p.useContext(Eo),
			f = p.useContext(lw);
		let h, m;
		f &&
			((i = i || "tablist"),
			(o = f.activeKey),
			(h = f.getControlledId),
			(m = f.getControllerId));
		const y = p.useRef(null),
			w = (v) => {
				const C = y.current;
				if (!C) return null;
				const j = Jn(C, `[${zm}]:not([aria-disabled=true])`),
					E = C.querySelector("[aria-selected=true]");
				if (!E || E !== document.activeElement) return null;
				const O = j.indexOf(E);
				if (O === -1) return null;
				let R = O + v;
				return (
					R >= j.length && (R = 0), R < 0 && (R = j.length - 1), j[R]
				);
			},
			S = (v, C) => {
				v != null && (r == null || r(v, C), d == null || d(v, C));
			},
			g = (v) => {
				if ((s == null || s(v), !f)) return;
				let C;
				switch (v.key) {
					case "ArrowLeft":
					case "ArrowUp":
						C = w(-1);
						break;
					case "ArrowRight":
					case "ArrowDown":
						C = w(1);
						break;
					default:
						return;
				}
				C &&
					(v.preventDefault(),
					S(C.dataset[ek("EventKey")] || null, v),
					(u.current = !0),
					l());
			};
		p.useEffect(() => {
			if (y.current && u.current) {
				const v = y.current.querySelector(
					`[${zm}][aria-selected=true]`
				);
				v == null || v.focus();
			}
			u.current = !1;
		});
		const x = Oi(t, y);
		return c.jsx(Eo.Provider, {
			value: S,
			children: c.jsx(yp.Provider, {
				value: {
					role: i,
					activeKey: yi(o),
					getControlledId: h || Bm,
					getControllerId: m || Bm,
				},
				children: c.jsx(
					n,
					Object.assign({}, a, { onKeyDown: g, ref: x, role: i })
				),
			}),
		});
	});
cw.displayName = "Nav";
const dw = Object.assign(cw, { Item: Ck }),
	fw = p.forwardRef(
		(
			{
				bsPrefix: e,
				active: t,
				disabled: n,
				eventKey: r,
				className: o,
				variant: i,
				action: s,
				as: a,
				...l
			},
			u
		) => {
			e = V(e, "list-group-item");
			const [d, f] = wp({ key: yi(r, l.href), active: t, ...l }),
				h = Le((y) => {
					if (n) {
						y.preventDefault(), y.stopPropagation();
						return;
					}
					d.onClick(y);
				});
			n &&
				l.tabIndex === void 0 &&
				((l.tabIndex = -1), (l["aria-disabled"] = !0));
			const m = a || (s ? (l.href ? "a" : "button") : "div");
			return c.jsx(m, {
				ref: u,
				...l,
				...d,
				onClick: h,
				className: z(
					o,
					e,
					f.isActive && "active",
					n && "disabled",
					i && `${e}-${i}`,
					s && `${e}-action`
				),
			});
		}
	);
fw.displayName = "ListGroupItem";
const Ok = fw,
	pw = p.forwardRef((e, t) => {
		const {
				className: n,
				bsPrefix: r,
				variant: o,
				horizontal: i,
				numbered: s,
				as: a = "div",
				...l
			} = Ri(e, { activeKey: "onSelect" }),
			u = V(r, "list-group");
		let d;
		return (
			i && (d = i === !0 ? "horizontal" : `horizontal-${i}`),
			c.jsx(dw, {
				ref: t,
				...l,
				as: a,
				className: z(
					n,
					u,
					o && `${u}-${o}`,
					d && `${u}-${d}`,
					s && `${u}-numbered`
				),
			})
		);
	});
pw.displayName = "ListGroup";
const ee = Object.assign(pw, { Item: Ok });
function gc(e) {
	e === void 0 && (e = hu());
	try {
		var t = e.activeElement;
		return !t || !t.nodeName ? null : t;
	} catch {
		return e.body;
	}
}
function bk(e = document) {
	const t = e.defaultView;
	return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const Hm = bi("modal-open");
class Pk {
	constructor({
		ownerDocument: t,
		handleContainerOverflow: n = !0,
		isRTL: r = !1,
	} = {}) {
		(this.handleContainerOverflow = n),
			(this.isRTL = r),
			(this.modals = []),
			(this.ownerDocument = t);
	}
	getScrollbarWidth() {
		return bk(this.ownerDocument);
	}
	getElement() {
		return (this.ownerDocument || document).body;
	}
	setModalAttributes(t) {}
	removeModalAttributes(t) {}
	setContainerStyle(t) {
		const n = { overflow: "hidden" },
			r = this.isRTL ? "paddingLeft" : "paddingRight",
			o = this.getElement();
		(t.style = { overflow: o.style.overflow, [r]: o.style[r] }),
			t.scrollBarWidth &&
				(n[r] = `${
					parseInt(nr(o, r) || "0", 10) + t.scrollBarWidth
				}px`),
			o.setAttribute(Hm, ""),
			nr(o, n);
	}
	reset() {
		[...this.modals].forEach((t) => this.remove(t));
	}
	removeContainerStyle(t) {
		const n = this.getElement();
		n.removeAttribute(Hm), Object.assign(n.style, t.style);
	}
	add(t) {
		let n = this.modals.indexOf(t);
		return (
			n !== -1 ||
				((n = this.modals.length),
				this.modals.push(t),
				this.setModalAttributes(t),
				n !== 0) ||
				((this.state = {
					scrollBarWidth: this.getScrollbarWidth(),
					style: {},
				}),
				this.handleContainerOverflow &&
					this.setContainerStyle(this.state)),
			n
		);
	}
	remove(t) {
		const n = this.modals.indexOf(t);
		n !== -1 &&
			(this.modals.splice(n, 1),
			!this.modals.length &&
				this.handleContainerOverflow &&
				this.removeContainerStyle(this.state),
			this.removeModalAttributes(t));
	}
	isTopModal(t) {
		return (
			!!this.modals.length && this.modals[this.modals.length - 1] === t
		);
	}
}
const Sp = Pk,
	xc = (e, t) =>
		mu
			? e == null
				? (t || hu()).body
				: (typeof e == "function" && (e = e()),
				  e && "current" in e && (e = e.current),
				  e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
			: null;
function kk(e, t) {
	const n = Eu(),
		[r, o] = p.useState(() => xc(e, n == null ? void 0 : n.document));
	if (!r) {
		const i = xc(e);
		i && o(i);
	}
	return (
		p.useEffect(() => {
			t && r && t(r);
		}, [t, r]),
		p.useEffect(() => {
			const i = xc(e);
			i !== r && o(i);
		}, [e, r]),
		r
	);
}
function Nk({
	children: e,
	in: t,
	onExited: n,
	mountOnEnter: r,
	unmountOnExit: o,
}) {
	const i = p.useRef(null),
		s = p.useRef(t),
		a = Le(n);
	p.useEffect(() => {
		t ? (s.current = !0) : a(i.current);
	}, [t, a]);
	const l = Oi(i, e.ref),
		u = p.cloneElement(e, { ref: l });
	return t ? u : o || (!s.current && r) ? null : u;
}
function Tk({ in: e, onTransition: t }) {
	const n = p.useRef(null),
		r = p.useRef(!0),
		o = Le(t);
	return (
		$l(() => {
			if (!n.current) return;
			let i = !1;
			return (
				o({
					in: e,
					element: n.current,
					initial: r.current,
					isStale: () => i,
				}),
				() => {
					i = !0;
				}
			);
		}, [e, o]),
		$l(
			() => (
				(r.current = !1),
				() => {
					r.current = !0;
				}
			),
			[]
		),
		n
	);
}
function _k({ children: e, in: t, onExited: n, onEntered: r, transition: o }) {
	const [i, s] = p.useState(!t);
	t && i && s(!1);
	const a = Tk({
			in: !!t,
			onTransition: (u) => {
				const d = () => {
					u.isStale() ||
						(u.in
							? r == null || r(u.element, u.initial)
							: (s(!0), n == null || n(u.element)));
				};
				Promise.resolve(o(u)).then(d, (f) => {
					throw (u.in || s(!0), f);
				});
			},
		}),
		l = Oi(a, e.ref);
	return i && !t ? null : p.cloneElement(e, { ref: l });
}
function Km(e, t, n) {
	return e
		? c.jsx(e, Object.assign({}, n))
		: t
		? c.jsx(_k, Object.assign({}, n, { transition: t }))
		: c.jsx(Nk, Object.assign({}, n));
}
function Dk(e) {
	return e.code === "Escape" || e.keyCode === 27;
}
const Lk = [
	"show",
	"role",
	"className",
	"style",
	"children",
	"backdrop",
	"keyboard",
	"onBackdropClick",
	"onEscapeKeyDown",
	"transition",
	"runTransition",
	"backdropTransition",
	"runBackdropTransition",
	"autoFocus",
	"enforceFocus",
	"restoreFocus",
	"restoreFocusOptions",
	"renderDialog",
	"renderBackdrop",
	"manager",
	"container",
	"onShow",
	"onHide",
	"onExit",
	"onExited",
	"onExiting",
	"onEnter",
	"onEntering",
	"onEntered",
];
function Ik(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		o,
		i;
	for (i = 0; i < r.length; i++)
		(o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
	return n;
}
let wc;
function Ak(e) {
	return (
		wc || (wc = new Sp({ ownerDocument: e == null ? void 0 : e.document })),
		wc
	);
}
function Mk(e) {
	const t = Eu(),
		n = e || Ak(t),
		r = p.useRef({ dialog: null, backdrop: null });
	return Object.assign(r.current, {
		add: () => n.add(r.current),
		remove: () => n.remove(r.current),
		isTopModal: () => n.isTopModal(r.current),
		setDialogRef: p.useCallback((o) => {
			r.current.dialog = o;
		}, []),
		setBackdropRef: p.useCallback((o) => {
			r.current.backdrop = o;
		}, []),
	});
}
const hw = p.forwardRef((e, t) => {
	let {
			show: n = !1,
			role: r = "dialog",
			className: o,
			style: i,
			children: s,
			backdrop: a = !0,
			keyboard: l = !0,
			onBackdropClick: u,
			onEscapeKeyDown: d,
			transition: f,
			runTransition: h,
			backdropTransition: m,
			runBackdropTransition: y,
			autoFocus: w = !0,
			enforceFocus: S = !0,
			restoreFocus: g = !0,
			restoreFocusOptions: x,
			renderDialog: v,
			renderBackdrop: C = (le) => c.jsx("div", Object.assign({}, le)),
			manager: j,
			container: E,
			onShow: O,
			onHide: R = () => {},
			onExit: D,
			onExited: N,
			onExiting: L,
			onEnter: $,
			onEntering: B,
			onEntered: J,
		} = e,
		oe = Ik(e, Lk);
	const Y = Eu(),
		K = kk(E),
		T = Mk(j),
		M = ip(),
		F = U0(n),
		[Q, se] = p.useState(!n),
		Ee = p.useRef(null);
	p.useImperativeHandle(t, () => T, [T]),
		mu && !F && n && (Ee.current = gc(Y == null ? void 0 : Y.document)),
		n && Q && se(!1);
	const fe = Le(() => {
			if (
				(T.add(),
				(Nn.current = Or(document, "keydown", qe)),
				(Gt.current = Or(document, "focus", () => setTimeout(re), !0)),
				O && O(),
				w)
			) {
				var le, Qn;
				const Tn = gc(
					(le =
						(Qn = T.dialog) == null ? void 0 : Qn.ownerDocument) !=
						null
						? le
						: Y == null
						? void 0
						: Y.document
				);
				T.dialog &&
					Tn &&
					!Ul(T.dialog, Tn) &&
					((Ee.current = Tn), T.dialog.focus());
			}
		}),
		ce = Le(() => {
			if (
				(T.remove(),
				Nn.current == null || Nn.current(),
				Gt.current == null || Gt.current(),
				g)
			) {
				var le;
				(le = Ee.current) == null || le.focus == null || le.focus(x),
					(Ee.current = null);
			}
		});
	p.useEffect(() => {
		!n || !K || fe();
	}, [n, K, fe]),
		p.useEffect(() => {
			Q && ce();
		}, [Q, ce]),
		sx(() => {
			ce();
		});
	const re = Le(() => {
			if (!S || !M() || !T.isTopModal()) return;
			const le = gc(Y == null ? void 0 : Y.document);
			T.dialog && le && !Ul(T.dialog, le) && T.dialog.focus();
		}),
		nt = Le((le) => {
			le.target === le.currentTarget &&
				(u == null || u(le), a === !0 && R());
		}),
		qe = Le((le) => {
			l &&
				Dk(le) &&
				T.isTopModal() &&
				(d == null || d(le), le.defaultPrevented || R());
		}),
		Gt = p.useRef(),
		Nn = p.useRef(),
		xe = (...le) => {
			se(!0), N == null || N(...le);
		};
	if (!K) return null;
	const Be = Object.assign(
		{
			role: r,
			ref: T.setDialogRef,
			"aria-modal": r === "dialog" ? !0 : void 0,
		},
		oe,
		{ style: i, className: o, tabIndex: -1 }
	);
	let At = v
		? v(Be)
		: c.jsx(
				"div",
				Object.assign({}, Be, {
					children: p.cloneElement(s, { role: "document" }),
				})
		  );
	At = Km(f, h, {
		unmountOnExit: !0,
		mountOnEnter: !0,
		appear: !0,
		in: !!n,
		onExit: D,
		onExiting: L,
		onExited: xe,
		onEnter: $,
		onEntering: B,
		onEntered: J,
		children: At,
	});
	let mn = null;
	return (
		a &&
			((mn = C({ ref: T.setBackdropRef, onClick: nt })),
			(mn = Km(m, y, {
				in: !!n,
				appear: !0,
				mountOnEnter: !0,
				unmountOnExit: !0,
				children: mn,
			}))),
		c.jsx(c.Fragment, {
			children: Rr.createPortal(
				c.jsxs(c.Fragment, { children: [mn, At] }),
				K
			),
		})
	);
});
hw.displayName = "Modal";
const $k = Object.assign(hw, { Manager: Sp });
function Fk(e, t) {
	return e.classList
		? !!t && e.classList.contains(t)
		: (" " + (e.className.baseVal || e.className) + " ").indexOf(
				" " + t + " "
		  ) !== -1;
}
function Uk(e, t) {
	e.classList
		? e.classList.add(t)
		: Fk(e, t) ||
		  (typeof e.className == "string"
				? (e.className = e.className + " " + t)
				: e.setAttribute(
						"class",
						((e.className && e.className.baseVal) || "") + " " + t
				  ));
}
function Wm(e, t) {
	return e
		.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
		.replace(/\s+/g, " ")
		.replace(/^\s*|\s*$/g, "");
}
function Bk(e, t) {
	e.classList
		? e.classList.remove(t)
		: typeof e.className == "string"
		? (e.className = Wm(e.className, t))
		: e.setAttribute(
				"class",
				Wm((e.className && e.className.baseVal) || "", t)
		  );
}
const Ao = {
	FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
	STICKY_CONTENT: ".sticky-top",
	NAVBAR_TOGGLER: ".navbar-toggler",
};
class mw extends Sp {
	adjustAndStore(t, n, r) {
		const o = n.style[t];
		(n.dataset[t] = o), nr(n, { [t]: `${parseFloat(nr(n, t)) + r}px` });
	}
	restore(t, n) {
		const r = n.dataset[t];
		r !== void 0 && (delete n.dataset[t], nr(n, { [t]: r }));
	}
	setContainerStyle(t) {
		super.setContainerStyle(t);
		const n = this.getElement();
		if ((Uk(n, "modal-open"), !t.scrollBarWidth)) return;
		const r = this.isRTL ? "paddingLeft" : "paddingRight",
			o = this.isRTL ? "marginLeft" : "marginRight";
		Jn(n, Ao.FIXED_CONTENT).forEach((i) =>
			this.adjustAndStore(r, i, t.scrollBarWidth)
		),
			Jn(n, Ao.STICKY_CONTENT).forEach((i) =>
				this.adjustAndStore(o, i, -t.scrollBarWidth)
			),
			Jn(n, Ao.NAVBAR_TOGGLER).forEach((i) =>
				this.adjustAndStore(o, i, t.scrollBarWidth)
			);
	}
	removeContainerStyle(t) {
		super.removeContainerStyle(t);
		const n = this.getElement();
		Bk(n, "modal-open");
		const r = this.isRTL ? "paddingLeft" : "paddingRight",
			o = this.isRTL ? "marginLeft" : "marginRight";
		Jn(n, Ao.FIXED_CONTENT).forEach((i) => this.restore(r, i)),
			Jn(n, Ao.STICKY_CONTENT).forEach((i) => this.restore(o, i)),
			Jn(n, Ao.NAVBAR_TOGGLER).forEach((i) => this.restore(o, i));
	}
}
let Sc;
function zk(e) {
	return Sc || (Sc = new mw(e)), Sc;
}
const Hk = p.createContext({ onHide() {} }),
	vw = Hk,
	Kk = p.forwardRef(
		(
			{
				closeLabel: e = "Close",
				closeVariant: t,
				closeButton: n = !1,
				onHide: r,
				children: o,
				...i
			},
			s
		) => {
			const a = p.useContext(vw),
				l = Le(() => {
					a == null || a.onHide(), r == null || r();
				});
			return c.jsxs("div", {
				ref: s,
				...i,
				children: [
					o,
					n && c.jsx(K0, { "aria-label": e, variant: t, onClick: l }),
				],
			});
		}
	),
	Wk = Kk;
var Qm = { exports: {} },
	zd = { exports: {} };
(function (e, t) {
	Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
	function n(r) {
		function o(s, a, l, u, d, f) {
			var h = u || "<<anonymous>>",
				m = f || l;
			if (a[l] == null)
				return s
					? new Error(
							"Required " +
								d +
								" `" +
								m +
								"` was not specified " +
								("in `" + h + "`.")
					  )
					: null;
			for (
				var y = arguments.length, w = Array(y > 6 ? y - 6 : 0), S = 6;
				S < y;
				S++
			)
				w[S - 6] = arguments[S];
			return r.apply(void 0, [a, l, h, d, m].concat(w));
		}
		var i = o.bind(null, !1);
		return (i.isRequired = o.bind(null, !0)), i;
	}
	e.exports = t.default;
})(zd, zd.exports);
var Qk = zd.exports;
(function (e, t) {
	Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
	var n = Qk,
		r = o(n);
	function o(s) {
		return s && s.__esModule ? s : { default: s };
	}
	function i() {
		for (var s = arguments.length, a = Array(s), l = 0; l < s; l++)
			a[l] = arguments[l];
		function u() {
			for (var d = arguments.length, f = Array(d), h = 0; h < d; h++)
				f[h] = arguments[h];
			var m = null;
			return (
				a.forEach(function (y) {
					if (m == null) {
						var w = y.apply(void 0, f);
						w != null && (m = w);
					}
				}),
				m
			);
		}
		return (0, r.default)(u);
	}
	e.exports = t.default;
})(Qm, Qm.exports);
const yw = p.forwardRef(
	({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (
		(t = V(t, "nav-item")), c.jsx(n, { ref: o, className: z(e, t), ...r })
	)
);
yw.displayName = "NavItem";
const Vk = yw,
	gw = p.forwardRef(
		(
			{
				bsPrefix: e,
				className: t,
				as: n = fi,
				active: r,
				eventKey: o,
				disabled: i = !1,
				...s
			},
			a
		) => {
			e = V(e, "nav-link");
			const [l, u] = wp({
				key: yi(o, s.href),
				active: r,
				disabled: i,
				...s,
			});
			return c.jsx(n, {
				...s,
				...l,
				ref: a,
				disabled: i,
				className: z(t, e, i && "disabled", u.isActive && "active"),
			});
		}
	);
gw.displayName = "NavLink";
const xw = gw,
	ww = p.forwardRef((e, t) => {
		const {
				as: n = "div",
				bsPrefix: r,
				variant: o,
				fill: i = !1,
				justify: s = !1,
				navbar: a,
				navbarScroll: l,
				className: u,
				activeKey: d,
				...f
			} = Ri(e, { activeKey: "onSelect" }),
			h = V(r, "nav");
		let m,
			y,
			w = !1;
		const S = p.useContext(bo),
			g = p.useContext(J0);
		return (
			S
				? ((m = S.bsPrefix), (w = a ?? !0))
				: g && ({ cardHeaderBsPrefix: y } = g),
			c.jsx(dw, {
				as: n,
				ref: t,
				activeKey: d,
				className: z(u, {
					[h]: !w,
					[`${m}-nav`]: w,
					[`${m}-nav-scroll`]: w && l,
					[`${y}-${o}`]: !!y,
					[`${h}-${o}`]: !!o,
					[`${h}-fill`]: i,
					[`${h}-justified`]: s,
				}),
				...f,
			})
		);
	});
ww.displayName = "Nav";
const at = Object.assign(ww, { Item: Vk, Link: xw }),
	Sw = p.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, o) => {
		e = V(e, "navbar-brand");
		const i = n || (r.href ? "a" : "span");
		return c.jsx(i, { ...r, ref: o, className: z(t, e) });
	});
Sw.displayName = "NavbarBrand";
const qk = Sw,
	Ew = p.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
		t = V(t, "navbar-collapse");
		const o = p.useContext(bo);
		return c.jsx(LO, {
			in: !!(o && o.expanded),
			...n,
			children: c.jsx("div", { ref: r, className: t, children: e }),
		});
	});
Ew.displayName = "NavbarCollapse";
const Gk = Ew,
	Cw = p.forwardRef(
		(
			{
				bsPrefix: e,
				className: t,
				children: n,
				label: r = "Toggle navigation",
				as: o = "button",
				onClick: i,
				...s
			},
			a
		) => {
			e = V(e, "navbar-toggler");
			const { onToggle: l, expanded: u } = p.useContext(bo) || {},
				d = Le((f) => {
					i && i(f), l && l();
				});
			return (
				o === "button" && (s.type = "button"),
				c.jsx(o, {
					...s,
					ref: a,
					onClick: d,
					"aria-label": r,
					className: z(t, e, !u && "collapsed"),
					children: n || c.jsx("span", { className: `${e}-icon` }),
				})
			);
		}
	);
Cw.displayName = "NavbarToggle";
const Xk = Cw,
	Hd = new WeakMap(),
	Vm = (e, t) => {
		if (!e || !t) return;
		const n = Hd.get(t) || new Map();
		Hd.set(t, n);
		let r = n.get(e);
		return (
			r || ((r = t.matchMedia(e)), (r.refCount = 0), n.set(r.media, r)), r
		);
	};
function Jk(e, t = typeof window > "u" ? void 0 : window) {
	const n = Vm(e, t),
		[r, o] = p.useState(() => (n ? n.matches : !1));
	return (
		$l(() => {
			let i = Vm(e, t);
			if (!i) return o(!1);
			let s = Hd.get(t);
			const a = () => {
				o(i.matches);
			};
			return (
				i.refCount++,
				i.addListener(a),
				a(),
				() => {
					i.removeListener(a),
						i.refCount--,
						i.refCount <= 0 && (s == null || s.delete(i.media)),
						(i = void 0);
				}
			);
		}, [e]),
		r
	);
}
function Yk(e) {
	const t = Object.keys(e);
	function n(a, l) {
		return a === l ? l : a ? `${a} and ${l}` : l;
	}
	function r(a) {
		return t[Math.min(t.indexOf(a) + 1, t.length - 1)];
	}
	function o(a) {
		const l = r(a);
		let u = e[l];
		return (
			typeof u == "number"
				? (u = `${u - 0.2}px`)
				: (u = `calc(${u} - 0.2px)`),
			`(max-width: ${u})`
		);
	}
	function i(a) {
		let l = e[a];
		return typeof l == "number" && (l = `${l}px`), `(min-width: ${l})`;
	}
	function s(a, l, u) {
		let d;
		typeof a == "object"
			? ((d = a), (u = l), (l = !0))
			: ((l = l || !0), (d = { [a]: l }));
		let f = p.useMemo(
			() =>
				Object.entries(d).reduce(
					(h, [m, y]) => (
						(y === "up" || y === !0) && (h = n(h, i(m))),
						(y === "down" || y === !0) && (h = n(h, o(m))),
						h
					),
					""
				),
			[JSON.stringify(d)]
		);
		return Jk(f, u);
	}
	return s;
}
const Zk = Yk({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }),
	jw = p.forwardRef(
		({ className: e, bsPrefix: t, as: n = "div", ...r }, o) => (
			(t = V(t, "offcanvas-body")),
			c.jsx(n, { ref: o, className: z(e, t), ...r })
		)
	);
jw.displayName = "OffcanvasBody";
const eN = jw,
	tN = { [jn]: "show", [Yn]: "show" },
	Rw = p.forwardRef(
		(
			{
				bsPrefix: e,
				className: t,
				children: n,
				in: r = !1,
				mountOnEnter: o = !1,
				unmountOnExit: i = !1,
				appear: s = !1,
				...a
			},
			l
		) => (
			(e = V(e, "offcanvas")),
			c.jsx(yu, {
				ref: l,
				addEndListener: vu,
				in: r,
				mountOnEnter: o,
				unmountOnExit: i,
				appear: s,
				...a,
				childRef: n.ref,
				children: (u, d) =>
					p.cloneElement(n, {
						...d,
						className: z(
							t,
							n.props.className,
							(u === jn || u === Us) && `${e}-toggling`,
							tN[u]
						),
					}),
			})
		)
	);
Rw.displayName = "OffcanvasToggling";
const nN = Rw,
	Ow = p.forwardRef(
		(
			{
				bsPrefix: e,
				className: t,
				closeLabel: n = "Close",
				closeButton: r = !1,
				...o
			},
			i
		) => (
			(e = V(e, "offcanvas-header")),
			c.jsx(Wk, {
				ref: i,
				...o,
				className: z(t, e),
				closeLabel: n,
				closeButton: r,
			})
		)
	);
Ow.displayName = "OffcanvasHeader";
const rN = Ow,
	oN = gu("h5"),
	bw = p.forwardRef(
		({ className: e, bsPrefix: t, as: n = oN, ...r }, o) => (
			(t = V(t, "offcanvas-title")),
			c.jsx(n, { ref: o, className: z(e, t), ...r })
		)
	);
bw.displayName = "OffcanvasTitle";
const iN = bw;
function sN(e) {
	return c.jsx(nN, { ...e });
}
function aN(e) {
	return c.jsx(Md, { ...e });
}
const Pw = p.forwardRef(
	(
		{
			bsPrefix: e,
			className: t,
			children: n,
			"aria-labelledby": r,
			placement: o = "start",
			responsive: i,
			show: s = !1,
			backdrop: a = !0,
			keyboard: l = !0,
			scroll: u = !1,
			onEscapeKeyDown: d,
			onShow: f,
			onHide: h,
			container: m,
			autoFocus: y = !0,
			enforceFocus: w = !0,
			restoreFocus: S = !0,
			restoreFocusOptions: g,
			onEntered: x,
			onExit: v,
			onExiting: C,
			onEnter: j,
			onEntering: E,
			onExited: O,
			backdropClassName: R,
			manager: D,
			renderStaticNode: N = !1,
			...L
		},
		$
	) => {
		const B = p.useRef();
		e = V(e, "offcanvas");
		const { onToggle: J } = p.useContext(bo) || {},
			[oe, Y] = p.useState(!1),
			K = Zk(i || "xs", "up");
		p.useEffect(() => {
			Y(i ? s && !K : s);
		}, [s, i, K]);
		const T = Le(() => {
				J == null || J(), h == null || h();
			}),
			M = p.useMemo(() => ({ onHide: T }), [T]);
		function F() {
			return (
				D ||
				(u
					? (B.current ||
							(B.current = new mw({
								handleContainerOverflow: !1,
							})),
					  B.current)
					: zk())
			);
		}
		const Q = (ce, ...re) => {
				ce && (ce.style.visibility = "visible"),
					j == null || j(ce, ...re);
			},
			se = (ce, ...re) => {
				ce && (ce.style.visibility = ""), O == null || O(...re);
			},
			Ee = p.useCallback(
				(ce) =>
					c.jsx("div", { ...ce, className: z(`${e}-backdrop`, R) }),
				[R, e]
			),
			fe = (ce) =>
				c.jsx("div", {
					...ce,
					...L,
					className: z(t, i ? `${e}-${i}` : e, `${e}-${o}`),
					"aria-labelledby": r,
					children: n,
				});
		return c.jsxs(c.Fragment, {
			children: [
				!oe && (i || N) && fe({}),
				c.jsx(vw.Provider, {
					value: M,
					children: c.jsx($k, {
						show: oe,
						ref: $,
						backdrop: a,
						container: m,
						keyboard: l,
						autoFocus: y,
						enforceFocus: w && !u,
						restoreFocus: S,
						restoreFocusOptions: g,
						onEscapeKeyDown: d,
						onShow: f,
						onHide: T,
						onEnter: Q,
						onEntering: E,
						onEntered: x,
						onExit: v,
						onExiting: C,
						onExited: se,
						manager: F(),
						transition: sN,
						backdropTransition: aN,
						renderBackdrop: Ee,
						renderDialog: fe,
					}),
				}),
			],
		});
	}
);
Pw.displayName = "Offcanvas";
const lN = Object.assign(Pw, { Body: eN, Header: rN, Title: iN }),
	kw = p.forwardRef((e, t) => {
		const n = p.useContext(bo);
		return c.jsx(lN, {
			ref: t,
			show: !!(n != null && n.expanded),
			...e,
			renderStaticNode: !0,
		});
	});
kw.displayName = "NavbarOffcanvas";
const uN = kw,
	Nw = p.forwardRef(
		({ className: e, bsPrefix: t, as: n = "span", ...r }, o) => (
			(t = V(t, "navbar-text")),
			c.jsx(n, { ref: o, className: z(e, t), ...r })
		)
	);
Nw.displayName = "NavbarText";
const cN = Nw,
	Tw = p.forwardRef((e, t) => {
		const {
				bsPrefix: n,
				expand: r = !0,
				variant: o = "light",
				bg: i,
				fixed: s,
				sticky: a,
				className: l,
				as: u = "nav",
				expanded: d,
				onToggle: f,
				onSelect: h,
				collapseOnSelect: m = !1,
				...y
			} = Ri(e, { expanded: "onToggle" }),
			w = V(n, "navbar"),
			S = p.useCallback(
				(...v) => {
					h == null || h(...v), m && d && (f == null || f(!1));
				},
				[h, m, d, f]
			);
		y.role === void 0 && u !== "nav" && (y.role = "navigation");
		let g = `${w}-expand`;
		typeof r == "string" && (g = `${g}-${r}`);
		const x = p.useMemo(
			() => ({
				onToggle: () => (f == null ? void 0 : f(!d)),
				bsPrefix: w,
				expanded: !!d,
				expand: r,
			}),
			[w, d, r, f]
		);
		return c.jsx(bo.Provider, {
			value: x,
			children: c.jsx(Eo.Provider, {
				value: S,
				children: c.jsx(u, {
					ref: t,
					...y,
					className: z(
						l,
						w,
						r && g,
						o && `${w}-${o}`,
						i && `bg-${i}`,
						a && `sticky-${a}`,
						s && `fixed-${s}`
					),
				}),
			}),
		});
	});
Tw.displayName = "Navbar";
const Ia = Object.assign(Tw, {
		Brand: qk,
		Collapse: Gk,
		Offcanvas: uN,
		Text: cN,
		Toggle: Xk,
	}),
	_w = p.forwardRef(
		(
			{
				id: e,
				title: t,
				children: n,
				bsPrefix: r,
				className: o,
				rootCloseEvent: i,
				menuRole: s,
				disabled: a,
				active: l,
				renderMenuOnMount: u,
				menuVariant: d,
				...f
			},
			h
		) => {
			const m = V(void 0, "nav-item");
			return c.jsxs(so, {
				ref: h,
				...f,
				className: z(o, m),
				children: [
					c.jsx(so.Toggle, {
						id: e,
						eventKey: null,
						active: l,
						disabled: a,
						childBsPrefix: r,
						as: xw,
						children: t,
					}),
					c.jsx(so.Menu, {
						role: s,
						renderOnMount: u,
						rootCloseEvent: i,
						variant: d,
						children: n,
					}),
				],
			});
		}
	);
_w.displayName = "NavDropdown";
const Yr = Object.assign(_w, {
		Item: so.Item,
		ItemText: so.ItemText,
		Divider: so.Divider,
		Header: so.Header,
	}),
	Ep = p.forwardRef(
		(
			{
				active: e = !1,
				disabled: t = !1,
				className: n,
				style: r,
				activeLabel: o = "(current)",
				children: i,
				linkStyle: s,
				linkClassName: a,
				as: l = fi,
				...u
			},
			d
		) => {
			const f = e || t ? "span" : l;
			return c.jsx("li", {
				ref: d,
				style: r,
				className: z(n, "page-item", { active: e, disabled: t }),
				children: c.jsxs(f, {
					className: z("page-link", a),
					style: s,
					...u,
					children: [
						i,
						e &&
							o &&
							c.jsx("span", {
								className: "visually-hidden",
								children: o,
							}),
					],
				}),
			});
		}
	);
Ep.displayName = "PageItem";
const dN = Ep;
function sa(e, t, n = e) {
	const r = p.forwardRef(({ children: o, ...i }, s) =>
		c.jsxs(Ep, {
			...i,
			ref: s,
			children: [
				c.jsx("span", { "aria-hidden": "true", children: o || t }),
				c.jsx("span", { className: "visually-hidden", children: n }),
			],
		})
	);
	return (r.displayName = e), r;
}
const fN = sa("First", "«"),
	pN = sa("Prev", "‹", "Previous"),
	hN = sa("Ellipsis", "…", "More"),
	mN = sa("Next", "›"),
	vN = sa("Last", "»"),
	Dw = p.forwardRef(({ bsPrefix: e, className: t, size: n, ...r }, o) => {
		const i = V(e, "pagination");
		return c.jsx("ul", {
			ref: o,
			...r,
			className: z(t, i, n && `${i}-${n}`),
		});
	});
Dw.displayName = "Pagination";
const qm = Object.assign(Dw, {
		First: fN,
		Prev: pN,
		Ellipsis: hN,
		Item: dN,
		Next: mN,
		Last: vN,
	}),
	Lw = p.forwardRef(
		({ bsPrefix: e, className: t, as: n = "div", ...r }, o) => {
			const i = V(e, "row"),
				s = P0(),
				a = k0(),
				l = `${i}-cols`,
				u = [];
			return (
				s.forEach((d) => {
					const f = r[d];
					delete r[d];
					let h;
					f != null && typeof f == "object"
						? ({ cols: h } = f)
						: (h = f);
					const m = d !== a ? `-${d}` : "";
					h != null && u.push(`${l}${m}-${h}`);
				}),
				c.jsx(n, { ref: o, ...r, className: z(t, i, ...u) })
			);
		}
	);
Lw.displayName = "Row";
const Oe = Lw,
	Iw = p.forwardRef(
		(
			{
				bsPrefix: e,
				variant: t,
				animation: n = "border",
				size: r,
				as: o = "div",
				className: i,
				...s
			},
			a
		) => {
			e = V(e, "spinner");
			const l = `${e}-${n}`;
			return c.jsx(o, {
				ref: a,
				...s,
				className: z(i, l, r && `${l}-${r}`, t && `text-${t}`),
			});
		}
	);
Iw.displayName = "Spinner";
const yN = Iw,
	gN = p.forwardRef(
		(
			{
				bsPrefix: e,
				className: t,
				striped: n,
				bordered: r,
				borderless: o,
				hover: i,
				size: s,
				variant: a,
				responsive: l,
				...u
			},
			d
		) => {
			const f = V(e, "table"),
				h = z(
					t,
					f,
					a && `${f}-${a}`,
					s && `${f}-${s}`,
					n &&
						`${f}-${
							typeof n == "string" ? `striped-${n}` : "striped"
						}`,
					r && `${f}-bordered`,
					o && `${f}-borderless`,
					i && `${f}-hover`
				),
				m = c.jsx("table", { ...u, className: h, ref: d });
			if (l) {
				let y = `${f}-responsive`;
				return (
					typeof l == "string" && (y = `${y}-${l}`),
					c.jsx("div", { className: y, children: m })
				);
			}
			return m;
		}
	),
	Cu = gN;
/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Te() {
	return (
		(Te = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) &&
								(e[r] = n[r]);
					}
					return e;
			  }),
		Te.apply(this, arguments)
	);
}
var Re;
(function (e) {
	(e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Re || (Re = {}));
const Gm = "popstate";
function Aw(e) {
	e === void 0 && (e = {});
	let { initialEntries: t = ["/"], initialIndex: n, v5Compat: r = !1 } = e,
		o;
	o = t.map((m, y) =>
		d(
			m,
			typeof m == "string" ? null : m.state,
			y === 0 ? "default" : void 0
		)
	);
	let i = l(n ?? o.length - 1),
		s = Re.Pop,
		a = null;
	function l(m) {
		return Math.min(Math.max(m, 0), o.length - 1);
	}
	function u() {
		return o[i];
	}
	function d(m, y, w) {
		y === void 0 && (y = null);
		let S = Co(o ? u().pathname : "/", m, y, w);
		return (
			Kn(
				S.pathname.charAt(0) === "/",
				"relative pathnames are not supported in memory history: " +
					JSON.stringify(m)
			),
			S
		);
	}
	function f(m) {
		return typeof m == "string" ? m : kn(m);
	}
	return {
		get index() {
			return i;
		},
		get action() {
			return s;
		},
		get location() {
			return u();
		},
		createHref: f,
		createURL(m) {
			return new URL(f(m), "http://localhost");
		},
		encodeLocation(m) {
			let y = typeof m == "string" ? pn(m) : m;
			return {
				pathname: y.pathname || "",
				search: y.search || "",
				hash: y.hash || "",
			};
		},
		push(m, y) {
			s = Re.Push;
			let w = d(m, y);
			(i += 1),
				o.splice(i, o.length, w),
				r && a && a({ action: s, location: w, delta: 1 });
		},
		replace(m, y) {
			s = Re.Replace;
			let w = d(m, y);
			(o[i] = w), r && a && a({ action: s, location: w, delta: 0 });
		},
		go(m) {
			s = Re.Pop;
			let y = l(i + m),
				w = o[y];
			(i = y), a && a({ action: s, location: w, delta: m });
		},
		listen(m) {
			return (
				(a = m),
				() => {
					a = null;
				}
			);
		},
	};
}
function Mw(e) {
	e === void 0 && (e = {});
	function t(r, o) {
		let { pathname: i, search: s, hash: a } = r.location;
		return Co(
			"",
			{ pathname: i, search: s, hash: a },
			(o.state && o.state.usr) || null,
			(o.state && o.state.key) || "default"
		);
	}
	function n(r, o) {
		return typeof o == "string" ? o : kn(o);
	}
	return Fw(t, n, null, e);
}
function $w(e) {
	e === void 0 && (e = {});
	function t(o, i) {
		let {
			pathname: s = "/",
			search: a = "",
			hash: l = "",
		} = pn(o.location.hash.substr(1));
		return (
			!s.startsWith("/") && !s.startsWith(".") && (s = "/" + s),
			Co(
				"",
				{ pathname: s, search: a, hash: l },
				(i.state && i.state.usr) || null,
				(i.state && i.state.key) || "default"
			)
		);
	}
	function n(o, i) {
		let s = o.document.querySelector("base"),
			a = "";
		if (s && s.getAttribute("href")) {
			let l = o.location.href,
				u = l.indexOf("#");
			a = u === -1 ? l : l.slice(0, u);
		}
		return a + "#" + (typeof i == "string" ? i : kn(i));
	}
	function r(o, i) {
		Kn(
			o.pathname.charAt(0) === "/",
			"relative pathnames are not supported in hash history.push(" +
				JSON.stringify(i) +
				")"
		);
	}
	return Fw(t, n, r, e);
}
function X(e, t) {
	if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Kn(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function xN() {
	return Math.random().toString(36).substr(2, 8);
}
function Xm(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function Co(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		Te(
			{
				pathname: typeof e == "string" ? e : e.pathname,
				search: "",
				hash: "",
			},
			typeof t == "string" ? pn(t) : t,
			{ state: n, key: (t && t.key) || r || xN() }
		)
	);
}
function kn(e) {
	let { pathname: t = "/", search: n = "", hash: r = "" } = e;
	return (
		n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
		r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
		t
	);
}
function pn(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf("?");
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e);
	}
	return t;
}
function Fw(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: o = document.defaultView, v5Compat: i = !1 } = r,
		s = o.history,
		a = Re.Pop,
		l = null,
		u = d();
	u == null && ((u = 0), s.replaceState(Te({}, s.state, { idx: u }), ""));
	function d() {
		return (s.state || { idx: null }).idx;
	}
	function f() {
		a = Re.Pop;
		let S = d(),
			g = S == null ? null : S - u;
		(u = S), l && l({ action: a, location: w.location, delta: g });
	}
	function h(S, g) {
		a = Re.Push;
		let x = Co(w.location, S, g);
		n && n(x, S), (u = d() + 1);
		let v = Xm(x, u),
			C = w.createHref(x);
		try {
			s.pushState(v, "", C);
		} catch (j) {
			if (j instanceof DOMException && j.name === "DataCloneError")
				throw j;
			o.location.assign(C);
		}
		i && l && l({ action: a, location: w.location, delta: 1 });
	}
	function m(S, g) {
		a = Re.Replace;
		let x = Co(w.location, S, g);
		n && n(x, S), (u = d());
		let v = Xm(x, u),
			C = w.createHref(x);
		s.replaceState(v, "", C),
			i && l && l({ action: a, location: w.location, delta: 0 });
	}
	function y(S) {
		let g =
				o.location.origin !== "null"
					? o.location.origin
					: o.location.href,
			x = typeof S == "string" ? S : kn(S);
		return (
			X(
				g,
				"No window.location.(origin|href) available to create URL for href: " +
					x
			),
			new URL(x, g)
		);
	}
	let w = {
		get action() {
			return a;
		},
		get location() {
			return e(o, s);
		},
		listen(S) {
			if (l)
				throw new Error("A history only accepts one active listener");
			return (
				o.addEventListener(Gm, f),
				(l = S),
				() => {
					o.removeEventListener(Gm, f), (l = null);
				}
			);
		},
		createHref(S) {
			return t(o, S);
		},
		createURL: y,
		encodeLocation(S) {
			let g = y(S);
			return { pathname: g.pathname, search: g.search, hash: g.hash };
		},
		push: h,
		replace: m,
		go(S) {
			return s.go(S);
		},
	};
	return w;
}
var $e;
(function (e) {
	(e.data = "data"),
		(e.deferred = "deferred"),
		(e.redirect = "redirect"),
		(e.error = "error");
})($e || ($e = {}));
const wN = new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"children",
]);
function SN(e) {
	return e.index === !0;
}
function Kd(e, t, n, r) {
	return (
		n === void 0 && (n = []),
		r === void 0 && (r = {}),
		e.map((o, i) => {
			let s = [...n, i],
				a = typeof o.id == "string" ? o.id : s.join("-");
			if (
				(X(
					o.index !== !0 || !o.children,
					"Cannot specify children on an index route"
				),
				X(
					!r[a],
					'Found a route id collision on id "' +
						a +
						`".  Route id's must be globally unique within Data Router usages`
				),
				SN(o))
			) {
				let l = Te({}, o, t(o), { id: a });
				return (r[a] = l), l;
			} else {
				let l = Te({}, o, t(o), { id: a, children: void 0 });
				return (
					(r[a] = l),
					o.children && (l.children = Kd(o.children, t, s, r)),
					l
				);
			}
		})
	);
}
function ao(e, t, n) {
	n === void 0 && (n = "/");
	let r = typeof t == "string" ? pn(t) : t,
		o = Dt(r.pathname || "/", n);
	if (o == null) return null;
	let i = Bw(e);
	EN(i);
	let s = null;
	for (let a = 0; s == null && a < i.length; ++a) s = TN(i[a], LN(o));
	return s;
}
function Uw(e, t) {
	let { route: n, pathname: r, params: o } = e;
	return {
		id: n.id,
		pathname: r,
		params: o,
		data: t[n.id],
		handle: n.handle,
	};
}
function Bw(e, t, n, r) {
	t === void 0 && (t = []),
		n === void 0 && (n = []),
		r === void 0 && (r = "");
	let o = (i, s, a) => {
		let l = {
			relativePath: a === void 0 ? i.path || "" : a,
			caseSensitive: i.caseSensitive === !0,
			childrenIndex: s,
			route: i,
		};
		l.relativePath.startsWith("/") &&
			(X(
				l.relativePath.startsWith(r),
				'Absolute route path "' +
					l.relativePath +
					'" nested under path ' +
					('"' +
						r +
						'" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes."
			),
			(l.relativePath = l.relativePath.slice(r.length)));
		let u = Hn([r, l.relativePath]),
			d = n.concat(l);
		i.children &&
			i.children.length > 0 &&
			(X(
				i.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + u + '".')
			),
			Bw(i.children, t, d, u)),
			!(i.path == null && !i.index) &&
				t.push({ path: u, score: kN(u, i.index), routesMeta: d });
	};
	return (
		e.forEach((i, s) => {
			var a;
			if (i.path === "" || !((a = i.path) != null && a.includes("?")))
				o(i, s);
			else for (let l of zw(i.path)) o(i, s, l);
		}),
		t
	);
}
function zw(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t,
		o = n.endsWith("?"),
		i = n.replace(/\?$/, "");
	if (r.length === 0) return o ? [i, ""] : [i];
	let s = zw(r.join("/")),
		a = [];
	return (
		a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
		o && a.push(...s),
		a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
	);
}
function EN(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: NN(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const CN = /^:[\w-]+$/,
	jN = 3,
	RN = 2,
	ON = 1,
	bN = 10,
	PN = -2,
	Jm = (e) => e === "*";
function kN(e, t) {
	let n = e.split("/"),
		r = n.length;
	return (
		n.some(Jm) && (r += PN),
		t && (r += RN),
		n
			.filter((o) => !Jm(o))
			.reduce((o, i) => o + (CN.test(i) ? jN : i === "" ? ON : bN), r)
	);
}
function NN(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function TN(e, t) {
	let { routesMeta: n } = e,
		r = {},
		o = "/",
		i = [];
	for (let s = 0; s < n.length; ++s) {
		let a = n[s],
			l = s === n.length - 1,
			u = o === "/" ? t : t.slice(o.length) || "/",
			d = Hs(
				{
					path: a.relativePath,
					caseSensitive: a.caseSensitive,
					end: l,
				},
				u
			);
		if (!d) return null;
		Object.assign(r, d.params);
		let f = a.route;
		i.push({
			params: r,
			pathname: Hn([o, d.pathname]),
			pathnameBase: MN(Hn([o, d.pathnameBase])),
			route: f,
		}),
			d.pathnameBase !== "/" && (o = Hn([o, d.pathnameBase]));
	}
	return i;
}
function _N(e, t) {
	t === void 0 && (t = {});
	let n = e;
	n.endsWith("*") &&
		n !== "*" &&
		!n.endsWith("/*") &&
		(Kn(
			!1,
			'Route path "' +
				n +
				'" will be treated as if it were ' +
				('"' +
					n.replace(/\*$/, "/*") +
					'" because the `*` character must ') +
				"always follow a `/` in the pattern. To get rid of this warning, " +
				('please change the route path to "' +
					n.replace(/\*$/, "/*") +
					'".')
		),
		(n = n.replace(/\*$/, "/*")));
	const r = n.startsWith("/") ? "/" : "",
		o = (s) => (s == null ? "" : typeof s == "string" ? s : String(s)),
		i = n
			.split(/\/+/)
			.map((s, a, l) => {
				if (a === l.length - 1 && s === "*") return o(t["*"]);
				const d = s.match(/^:([\w-]+)(\??)$/);
				if (d) {
					const [, f, h] = d;
					let m = t[f];
					return (
						X(h === "?" || m != null, 'Missing ":' + f + '" param'),
						o(m)
					);
				}
				return s.replace(/\?$/g, "");
			})
			.filter((s) => !!s);
	return r + i.join("/");
}
function Hs(e, t) {
	typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = DN(e.path, e.caseSensitive, e.end),
		o = t.match(n);
	if (!o) return null;
	let i = o[0],
		s = i.replace(/(.)\/+$/, "$1"),
		a = o.slice(1);
	return {
		params: r.reduce((u, d, f) => {
			let { paramName: h, isOptional: m } = d;
			if (h === "*") {
				let w = a[f] || "";
				s = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1");
			}
			const y = a[f];
			return m && !y ? (u[h] = void 0) : (u[h] = IN(y || "", h)), u;
		}, {}),
		pathname: i,
		pathnameBase: s,
		pattern: e,
	};
}
function DN(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		Kn(
			e === "*" || !e.endsWith("*") || e.endsWith("/*"),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' +
					e.replace(/\*$/, "/*") +
					'" because the `*` character must ') +
				"always follow a `/` in the pattern. To get rid of this warning, " +
				('please change the route path to "' +
					e.replace(/\*$/, "/*") +
					'".')
		);
	let r = [],
		o =
			"^" +
			e
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(s, a, l) => (
						r.push({ paramName: a, isOptional: l != null }),
						l ? "/?([^\\/]+)?" : "/([^\\/]+)"
					)
				);
	return (
		e.endsWith("*")
			? (r.push({ paramName: "*" }),
			  (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: n
			? (o += "\\/*$")
			: e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
		[new RegExp(o, t ? void 0 : "i"), r]
	);
}
function LN(e) {
	try {
		return decodeURI(e);
	} catch (t) {
		return (
			Kn(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					("encoding (" + t + ").")
			),
			e
		);
	}
}
function IN(e, t) {
	try {
		return decodeURIComponent(e);
	} catch (n) {
		return (
			Kn(
				!1,
				'The value for the URL param "' +
					t +
					'" will not be decoded because' +
					(' the string "' +
						e +
						'" is a malformed URL segment. This is probably') +
					(" due to a bad percent encoding (" + n + ").")
			),
			e
		);
	}
}
function Dt(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function Hw(e, t) {
	t === void 0 && (t = "/");
	let {
		pathname: n,
		search: r = "",
		hash: o = "",
	} = typeof e == "string" ? pn(e) : e;
	return {
		pathname: n ? (n.startsWith("/") ? n : AN(n, t)) : t,
		search: $N(r),
		hash: FN(o),
	};
}
function AN(e, t) {
	let n = t.replace(/\/+$/, "").split("/");
	return (
		e.split("/").forEach((o) => {
			o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
		}),
		n.length > 1 ? n.join("/") : "/"
	);
}
function Ec(e, t, n, r) {
	return (
		"Cannot include a '" +
		e +
		"' character in a manually specified " +
		("`to." +
			t +
			"` field [" +
			JSON.stringify(r) +
			"].  Please separate it out to the ") +
		("`to." +
			n +
			"` field. Alternatively you may provide the full path as ") +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function Kw(e) {
	return e.filter(
		(t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
	);
}
function ju(e, t) {
	let n = Kw(e);
	return t
		? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
		: n.map((r) => r.pathnameBase);
}
function Ru(e, t, n, r) {
	r === void 0 && (r = !1);
	let o;
	typeof e == "string"
		? (o = pn(e))
		: ((o = Te({}, e)),
		  X(
				!o.pathname || !o.pathname.includes("?"),
				Ec("?", "pathname", "search", o)
		  ),
		  X(
				!o.pathname || !o.pathname.includes("#"),
				Ec("#", "pathname", "hash", o)
		  ),
		  X(
				!o.search || !o.search.includes("#"),
				Ec("#", "search", "hash", o)
		  ));
	let i = e === "" || o.pathname === "",
		s = i ? "/" : o.pathname,
		a;
	if (s == null) a = n;
	else {
		let f = t.length - 1;
		if (!r && s.startsWith("..")) {
			let h = s.split("/");
			for (; h[0] === ".."; ) h.shift(), (f -= 1);
			o.pathname = h.join("/");
		}
		a = f >= 0 ? t[f] : "/";
	}
	let l = Hw(o, a),
		u = s && s !== "/" && s.endsWith("/"),
		d = (i || s === ".") && n.endsWith("/");
	return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"), l;
}
const Hn = (e) => e.join("/").replace(/\/\/+/g, "/"),
	MN = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
	$N = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
	FN = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
	UN = function (t, n) {
		n === void 0 && (n = {});
		let r = typeof n == "number" ? { status: n } : n,
			o = new Headers(r.headers);
		return (
			o.has("Content-Type") ||
				o.set("Content-Type", "application/json; charset=utf-8"),
			new Response(JSON.stringify(t), Te({}, r, { headers: o }))
		);
	};
class Hl extends Error {}
class BN {
	constructor(t, n) {
		(this.pendingKeysSet = new Set()),
			(this.subscribers = new Set()),
			(this.deferredKeys = []),
			X(
				t && typeof t == "object" && !Array.isArray(t),
				"defer() only accepts plain objects"
			);
		let r;
		(this.abortPromise = new Promise((i, s) => (r = s))),
			(this.controller = new AbortController());
		let o = () => r(new Hl("Deferred data aborted"));
		(this.unlistenAbortSignal = () =>
			this.controller.signal.removeEventListener("abort", o)),
			this.controller.signal.addEventListener("abort", o),
			(this.data = Object.entries(t).reduce((i, s) => {
				let [a, l] = s;
				return Object.assign(i, { [a]: this.trackPromise(a, l) });
			}, {})),
			this.done && this.unlistenAbortSignal(),
			(this.init = n);
	}
	trackPromise(t, n) {
		if (!(n instanceof Promise)) return n;
		this.deferredKeys.push(t), this.pendingKeysSet.add(t);
		let r = Promise.race([n, this.abortPromise]).then(
			(o) => this.onSettle(r, t, void 0, o),
			(o) => this.onSettle(r, t, o)
		);
		return (
			r.catch(() => {}),
			Object.defineProperty(r, "_tracked", { get: () => !0 }),
			r
		);
	}
	onSettle(t, n, r, o) {
		if (this.controller.signal.aborted && r instanceof Hl)
			return (
				this.unlistenAbortSignal(),
				Object.defineProperty(t, "_error", { get: () => r }),
				Promise.reject(r)
			);
		if (
			(this.pendingKeysSet.delete(n),
			this.done && this.unlistenAbortSignal(),
			r === void 0 && o === void 0)
		) {
			let i = new Error(
				'Deferred data for key "' +
					n +
					'" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.'
			);
			return (
				Object.defineProperty(t, "_error", { get: () => i }),
				this.emit(!1, n),
				Promise.reject(i)
			);
		}
		return o === void 0
			? (Object.defineProperty(t, "_error", { get: () => r }),
			  this.emit(!1, n),
			  Promise.reject(r))
			: (Object.defineProperty(t, "_data", { get: () => o }),
			  this.emit(!1, n),
			  o);
	}
	emit(t, n) {
		this.subscribers.forEach((r) => r(t, n));
	}
	subscribe(t) {
		return this.subscribers.add(t), () => this.subscribers.delete(t);
	}
	cancel() {
		this.controller.abort(),
			this.pendingKeysSet.forEach((t, n) =>
				this.pendingKeysSet.delete(n)
			),
			this.emit(!0);
	}
	async resolveData(t) {
		let n = !1;
		if (!this.done) {
			let r = () => this.cancel();
			t.addEventListener("abort", r),
				(n = await new Promise((o) => {
					this.subscribe((i) => {
						t.removeEventListener("abort", r),
							(i || this.done) && o(i);
					});
				}));
		}
		return n;
	}
	get done() {
		return this.pendingKeysSet.size === 0;
	}
	get unwrappedData() {
		return (
			X(
				this.data !== null && this.done,
				"Can only unwrap data on initialized and settled deferreds"
			),
			Object.entries(this.data).reduce((t, n) => {
				let [r, o] = n;
				return Object.assign(t, { [r]: HN(o) });
			}, {})
		);
	}
	get pendingKeys() {
		return Array.from(this.pendingKeysSet);
	}
}
function zN(e) {
	return e instanceof Promise && e._tracked === !0;
}
function HN(e) {
	if (!zN(e)) return e;
	if (e._error) throw e._error;
	return e._data;
}
const KN = function (t, n) {
		n === void 0 && (n = {});
		let r = typeof n == "number" ? { status: n } : n;
		return new BN(t, r);
	},
	Ww = function (t, n) {
		n === void 0 && (n = 302);
		let r = n;
		typeof r == "number"
			? (r = { status: r })
			: typeof r.status > "u" && (r.status = 302);
		let o = new Headers(r.headers);
		return (
			o.set("Location", t), new Response(null, Te({}, r, { headers: o }))
		);
	},
	WN = (e, t) => {
		let n = Ww(e, t);
		return n.headers.set("X-Remix-Reload-Document", "true"), n;
	};
class Cp {
	constructor(t, n, r, o) {
		o === void 0 && (o = !1),
			(this.status = t),
			(this.statusText = n || ""),
			(this.internal = o),
			r instanceof Error
				? ((this.data = r.toString()), (this.error = r))
				: (this.data = r);
	}
}
function jp(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.internal == "boolean" &&
		"data" in e
	);
}
const Qw = ["post", "put", "patch", "delete"],
	QN = new Set(Qw),
	VN = ["get", ...Qw],
	qN = new Set(VN),
	GN = new Set([301, 302, 303, 307, 308]),
	XN = new Set([307, 308]),
	Cc = {
		state: "idle",
		location: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	Vw = {
		state: "idle",
		data: void 0,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
	},
	Mo = {
		state: "unblocked",
		proceed: void 0,
		reset: void 0,
		location: void 0,
	},
	qw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	JN = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
	Gw = "remix-router-transitions";
function Rp(e) {
	const t = e.window ? e.window : typeof window < "u" ? window : void 0,
		n =
			typeof t < "u" &&
			typeof t.document < "u" &&
			typeof t.document.createElement < "u",
		r = !n;
	X(
		e.routes.length > 0,
		"You must provide a non-empty routes array to createRouter"
	);
	let o;
	if (e.mapRouteProperties) o = e.mapRouteProperties;
	else if (e.detectErrorBoundary) {
		let b = e.detectErrorBoundary;
		o = (P) => ({ hasErrorBoundary: b(P) });
	} else o = JN;
	let i = {},
		s = Kd(e.routes, o, void 0, i),
		a,
		l = e.basename || "/",
		u = Te(
			{
				v7_fetcherPersist: !1,
				v7_normalizeFormMethod: !1,
				v7_partialHydration: !1,
				v7_prependBasename: !1,
				v7_relativeSplatPath: !1,
			},
			e.future
		),
		d = null,
		f = new Set(),
		h = null,
		m = null,
		y = null,
		w = e.hydrationData != null,
		S = ao(s, e.history.location, l),
		g = null;
	if (S == null) {
		let b = en(404, { pathname: e.history.location.pathname }),
			{ matches: P, route: k } = iv(s);
		(S = P), (g = { [k.id]: b });
	}
	let x,
		v = S.some((b) => b.route.lazy),
		C = S.some((b) => b.route.loader);
	if (v) x = !1;
	else if (!C) x = !0;
	else if (u.v7_partialHydration) {
		let b = e.hydrationData ? e.hydrationData.loaderData : null,
			P = e.hydrationData ? e.hydrationData.errors : null;
		x = S.every(
			(k) =>
				k.route.loader &&
				k.route.loader.hydrate !== !0 &&
				((b && b[k.route.id] !== void 0) ||
					(P && P[k.route.id] !== void 0))
		);
	} else x = e.hydrationData != null;
	let j,
		E = {
			historyAction: e.history.action,
			location: e.history.location,
			matches: S,
			initialized: x,
			navigation: Cc,
			restoreScrollPosition: e.hydrationData != null ? !1 : null,
			preventScrollReset: !1,
			revalidation: "idle",
			loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
			actionData: (e.hydrationData && e.hydrationData.actionData) || null,
			errors: (e.hydrationData && e.hydrationData.errors) || g,
			fetchers: new Map(),
			blockers: new Map(),
		},
		O = Re.Pop,
		R = !1,
		D,
		N = !1,
		L = new Map(),
		$ = null,
		B = !1,
		J = !1,
		oe = [],
		Y = [],
		K = new Map(),
		T = 0,
		M = -1,
		F = new Map(),
		Q = new Set(),
		se = new Map(),
		Ee = new Map(),
		fe = new Set(),
		ce = new Map(),
		re = new Map(),
		nt = !1;
	function qe() {
		if (
			((d = e.history.listen((b) => {
				let { action: P, location: k, delta: U } = b;
				if (nt) {
					nt = !1;
					return;
				}
				Kn(
					re.size === 0 || U != null,
					"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
				);
				let W = da({
					currentLocation: E.location,
					nextLocation: k,
					historyAction: P,
				});
				if (W && U != null) {
					(nt = !0),
						e.history.go(U * -1),
						_n(W, {
							state: "blocked",
							location: k,
							proceed() {
								_n(W, {
									state: "proceeding",
									proceed: void 0,
									reset: void 0,
									location: k,
								}),
									e.history.go(U);
							},
							reset() {
								let de = new Map(E.blockers);
								de.set(W, Mo), xe({ blockers: de });
							},
						});
					return;
				}
				return le(P, k);
			})),
			n)
		) {
			lT(t, L);
			let b = () => uT(t, L);
			t.addEventListener("pagehide", b),
				($ = () => t.removeEventListener("pagehide", b));
		}
		return (
			E.initialized || le(Re.Pop, E.location, { initialHydration: !0 }), j
		);
	}
	function Gt() {
		d && d(),
			$ && $(),
			f.clear(),
			D && D.abort(),
			E.fetchers.forEach((b, P) => qn(P)),
			E.blockers.forEach((b, P) => Jt(P));
	}
	function Nn(b) {
		return f.add(b), () => f.delete(b);
	}
	function xe(b, P) {
		P === void 0 && (P = {}), (E = Te({}, E, b));
		let k = [],
			U = [];
		u.v7_fetcherPersist &&
			E.fetchers.forEach((W, de) => {
				W.state === "idle" && (fe.has(de) ? U.push(de) : k.push(de));
			}),
			[...f].forEach((W) =>
				W(E, {
					deletedFetchers: U,
					unstable_viewTransitionOpts: P.viewTransitionOpts,
					unstable_flushSync: P.flushSync === !0,
				})
			),
			u.v7_fetcherPersist &&
				(k.forEach((W) => E.fetchers.delete(W)),
				U.forEach((W) => qn(W)));
	}
	function Be(b, P, k) {
		var U, W;
		let { flushSync: de } = k === void 0 ? {} : k,
			ne =
				E.actionData != null &&
				E.navigation.formMethod != null &&
				En(E.navigation.formMethod) &&
				E.navigation.state === "loading" &&
				((U = b.state) == null ? void 0 : U._isRedirect) !== !0,
			Z;
		P.actionData
			? Object.keys(P.actionData).length > 0
				? (Z = P.actionData)
				: (Z = null)
			: ne
			? (Z = E.actionData)
			: (Z = null);
		let G = P.loaderData
				? ov(E.loaderData, P.loaderData, P.matches || [], P.errors)
				: E.loaderData,
			he = E.blockers;
		he.size > 0 &&
			((he = new Map(he)), he.forEach((je, ot) => he.set(ot, Mo)));
		let Ye =
			R === !0 ||
			(E.navigation.formMethod != null &&
				En(E.navigation.formMethod) &&
				((W = b.state) == null ? void 0 : W._isRedirect) !== !0);
		a && ((s = a), (a = void 0)),
			B ||
				O === Re.Pop ||
				(O === Re.Push
					? e.history.push(b, b.state)
					: O === Re.Replace && e.history.replace(b, b.state));
		let ae;
		if (O === Re.Pop) {
			let je = L.get(E.location.pathname);
			je && je.has(b.pathname)
				? (ae = { currentLocation: E.location, nextLocation: b })
				: L.has(b.pathname) &&
				  (ae = { currentLocation: b, nextLocation: E.location });
		} else if (N) {
			let je = L.get(E.location.pathname);
			je
				? je.add(b.pathname)
				: ((je = new Set([b.pathname])),
				  L.set(E.location.pathname, je)),
				(ae = { currentLocation: E.location, nextLocation: b });
		}
		xe(
			Te({}, P, {
				actionData: Z,
				loaderData: G,
				historyAction: O,
				location: b,
				initialized: !0,
				navigation: Cc,
				revalidation: "idle",
				restoreScrollPosition: Hp(b, P.matches || E.matches),
				preventScrollReset: Ye,
				blockers: he,
			}),
			{ viewTransitionOpts: ae, flushSync: de === !0 }
		),
			(O = Re.Pop),
			(R = !1),
			(N = !1),
			(B = !1),
			(J = !1),
			(oe = []),
			(Y = []);
	}
	async function At(b, P) {
		if (typeof b == "number") {
			e.history.go(b);
			return;
		}
		let k = Wd(
				E.location,
				E.matches,
				l,
				u.v7_prependBasename,
				b,
				u.v7_relativeSplatPath,
				P == null ? void 0 : P.fromRouteId,
				P == null ? void 0 : P.relative
			),
			{
				path: U,
				submission: W,
				error: de,
			} = Ym(u.v7_normalizeFormMethod, !1, k, P),
			ne = E.location,
			Z = Co(E.location, U, P && P.state);
		Z = Te({}, Z, e.history.encodeLocation(Z));
		let G = P && P.replace != null ? P.replace : void 0,
			he = Re.Push;
		G === !0
			? (he = Re.Replace)
			: G === !1 ||
			  (W != null &&
					En(W.formMethod) &&
					W.formAction === E.location.pathname + E.location.search &&
					(he = Re.Replace));
		let Ye =
				P && "preventScrollReset" in P
					? P.preventScrollReset === !0
					: void 0,
			ae = (P && P.unstable_flushSync) === !0,
			je = da({
				currentLocation: ne,
				nextLocation: Z,
				historyAction: he,
			});
		if (je) {
			_n(je, {
				state: "blocked",
				location: Z,
				proceed() {
					_n(je, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: Z,
					}),
						At(b, P);
				},
				reset() {
					let ot = new Map(E.blockers);
					ot.set(je, Mo), xe({ blockers: ot });
				},
			});
			return;
		}
		return await le(he, Z, {
			submission: W,
			pendingError: de,
			preventScrollReset: Ye,
			replace: P && P.replace,
			enableViewTransition: P && P.unstable_viewTransition,
			flushSync: ae,
		});
	}
	function mn() {
		if (
			(Vn(),
			xe({ revalidation: "loading" }),
			E.navigation.state !== "submitting")
		) {
			if (E.navigation.state === "idle") {
				le(E.historyAction, E.location, {
					startUninterruptedRevalidation: !0,
				});
				return;
			}
			le(O || E.historyAction, E.navigation.location, {
				overrideNavigation: E.navigation,
			});
		}
	}
	async function le(b, P, k) {
		D && D.abort(),
			(D = null),
			(O = b),
			(B = (k && k.startUninterruptedRevalidation) === !0),
			YS(E.location, E.matches),
			(R = (k && k.preventScrollReset) === !0),
			(N = (k && k.enableViewTransition) === !0);
		let U = a || s,
			W = k && k.overrideNavigation,
			de = ao(U, P, l),
			ne = (k && k.flushSync) === !0;
		if (!de) {
			let ot = en(404, { pathname: P.pathname }),
				{ matches: Yt, route: Ze } = iv(U);
			Lu(),
				Be(
					P,
					{ matches: Yt, loaderData: {}, errors: { [Ze.id]: ot } },
					{ flushSync: ne }
				);
			return;
		}
		if (
			E.initialized &&
			!J &&
			nT(E.location, P) &&
			!(k && k.submission && En(k.submission.formMethod))
		) {
			Be(P, { matches: de }, { flushSync: ne });
			return;
		}
		D = new AbortController();
		let Z = Gi(e.history, P, D.signal, k && k.submission),
			G,
			he;
		if (k && k.pendingError) he = { [gs(de).route.id]: k.pendingError };
		else if (k && k.submission && En(k.submission.formMethod)) {
			let ot = await Qn(Z, P, k.submission, de, {
				replace: k.replace,
				flushSync: ne,
			});
			if (ot.shortCircuited) return;
			(G = ot.pendingActionData),
				(he = ot.pendingActionError),
				(W = jc(P, k.submission)),
				(ne = !1),
				(Z = new Request(Z.url, { signal: Z.signal }));
		}
		let {
			shortCircuited: Ye,
			loaderData: ae,
			errors: je,
		} = await Tn(
			Z,
			P,
			de,
			W,
			k && k.submission,
			k && k.fetcherSubmission,
			k && k.replace,
			k && k.initialHydration === !0,
			ne,
			G,
			he
		);
		Ye ||
			((D = null),
			Be(
				P,
				Te({ matches: de }, G ? { actionData: G } : {}, {
					loaderData: ae,
					errors: je,
				})
			));
	}
	async function Qn(b, P, k, U, W) {
		W === void 0 && (W = {}), Vn();
		let de = sT(P, k);
		xe({ navigation: de }, { flushSync: W.flushSync === !0 });
		let ne,
			Z = Vd(U, P);
		if (!Z.route.action && !Z.route.lazy)
			ne = {
				type: $e.error,
				error: en(405, {
					method: b.method,
					pathname: P.pathname,
					routeId: Z.route.id,
				}),
			};
		else if (
			((ne = await qi(
				"action",
				b,
				Z,
				U,
				i,
				o,
				l,
				u.v7_relativeSplatPath
			)),
			b.signal.aborted)
		)
			return { shortCircuited: !0 };
		if (uo(ne)) {
			let G;
			return (
				W && W.replace != null
					? (G = W.replace)
					: (G =
							ne.location ===
							E.location.pathname + E.location.search),
				await Xt(E, ne, { submission: k, replace: G }),
				{ shortCircuited: !0 }
			);
		}
		if (Xo(ne)) {
			let G = gs(U, Z.route.id);
			return (
				(W && W.replace) !== !0 && (O = Re.Push),
				{
					pendingActionData: {},
					pendingActionError: { [G.route.id]: ne.error },
				}
			);
		}
		if (lo(ne)) throw en(400, { type: "defer-action" });
		return { pendingActionData: { [Z.route.id]: ne.data } };
	}
	async function Tn(b, P, k, U, W, de, ne, Z, G, he, Ye) {
		let ae = U || jc(P, W),
			je = W || de || lv(ae),
			ot = a || s,
			[Yt, Ze] = Zm(
				e.history,
				E,
				k,
				je,
				P,
				u.v7_partialHydration && Z === !0,
				J,
				oe,
				Y,
				fe,
				se,
				Q,
				ot,
				l,
				he,
				Ye
			);
		if (
			(Lu(
				(Ce) =>
					!(k && k.some((Ne) => Ne.route.id === Ce)) ||
					(Yt && Yt.some((Ne) => Ne.route.id === Ce))
			),
			(M = ++T),
			Yt.length === 0 && Ze.length === 0)
		) {
			let Ce = Mi();
			return (
				Be(
					P,
					Te(
						{ matches: k, loaderData: {}, errors: Ye || null },
						he ? { actionData: he } : {},
						Ce ? { fetchers: new Map(E.fetchers) } : {}
					),
					{ flushSync: G }
				),
				{ shortCircuited: !0 }
			);
		}
		if (!B && (!u.v7_partialHydration || !Z)) {
			Ze.forEach((Ne) => {
				let Dn = E.fetchers.get(Ne.key),
					pa = Xi(void 0, Dn ? Dn.data : void 0);
				E.fetchers.set(Ne.key, pa);
			});
			let Ce = he || E.actionData;
			xe(
				Te(
					{ navigation: ae },
					Ce
						? Object.keys(Ce).length === 0
							? { actionData: null }
							: { actionData: Ce }
						: {},
					Ze.length > 0 ? { fetchers: new Map(E.fetchers) } : {}
				),
				{ flushSync: G }
			);
		}
		Ze.forEach((Ce) => {
			K.has(Ce.key) && gn(Ce.key),
				Ce.controller && K.set(Ce.key, Ce.controller);
		});
		let To = () => Ze.forEach((Ce) => gn(Ce.key));
		D && D.signal.addEventListener("abort", To);
		let {
			results: Iu,
			loaderResults: _o,
			fetcherResults: pr,
		} = await Gr(E.matches, k, Yt, Ze, b);
		if (b.signal.aborted) return { shortCircuited: !0 };
		D && D.signal.removeEventListener("abort", To),
			Ze.forEach((Ce) => K.delete(Ce.key));
		let Jr = sv(Iu);
		if (Jr) {
			if (Jr.idx >= Yt.length) {
				let Ce = Ze[Jr.idx - Yt.length].key;
				Q.add(Ce);
			}
			return (
				await Xt(E, Jr.result, { replace: ne }), { shortCircuited: !0 }
			);
		}
		let { loaderData: Au, errors: Mu } = rv(E, k, Yt, _o, Ye, Ze, pr, ce);
		ce.forEach((Ce, Ne) => {
			Ce.subscribe((Dn) => {
				(Dn || Ce.done) && ce.delete(Ne);
			});
		});
		let $u = Mi(),
			Do = te(M),
			fa = $u || Do || Ze.length > 0;
		return Te(
			{ loaderData: Au, errors: Mu },
			fa ? { fetchers: new Map(E.fetchers) } : {}
		);
	}
	function Ii(b, P, k, U) {
		if (r)
			throw new Error(
				"router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
			);
		K.has(b) && gn(b);
		let W = (U && U.unstable_flushSync) === !0,
			de = a || s,
			ne = Wd(
				E.location,
				E.matches,
				l,
				u.v7_prependBasename,
				k,
				u.v7_relativeSplatPath,
				P,
				U == null ? void 0 : U.relative
			),
			Z = ao(de, ne, l);
		if (!Z) {
			yn(b, P, en(404, { pathname: ne }), { flushSync: W });
			return;
		}
		let {
			path: G,
			submission: he,
			error: Ye,
		} = Ym(u.v7_normalizeFormMethod, !0, ne, U);
		if (Ye) {
			yn(b, P, Ye, { flushSync: W });
			return;
		}
		let ae = Vd(Z, G);
		if (
			((R = (U && U.preventScrollReset) === !0), he && En(he.formMethod))
		) {
			Ai(b, P, G, ae, Z, W, he);
			return;
		}
		se.set(b, { routeId: P, path: G }), vn(b, P, G, ae, Z, W, he);
	}
	async function Ai(b, P, k, U, W, de, ne) {
		if ((Vn(), se.delete(b), !U.route.action && !U.route.lazy)) {
			let Ne = en(405, {
				method: ne.formMethod,
				pathname: k,
				routeId: P,
			});
			yn(b, P, Ne, { flushSync: de });
			return;
		}
		let Z = E.fetchers.get(b);
		rt(b, aT(ne, Z), { flushSync: de });
		let G = new AbortController(),
			he = Gi(e.history, k, G.signal, ne);
		K.set(b, G);
		let Ye = T,
			ae = await qi("action", he, U, W, i, o, l, u.v7_relativeSplatPath);
		if (he.signal.aborted) {
			K.get(b) === G && K.delete(b);
			return;
		}
		if (u.v7_fetcherPersist && fe.has(b)) {
			if (uo(ae) || Xo(ae)) {
				rt(b, vr(void 0));
				return;
			}
		} else {
			if (uo(ae))
				if ((K.delete(b), M > Ye)) {
					rt(b, vr(void 0));
					return;
				} else
					return (
						Q.add(b),
						rt(b, Xi(ne)),
						Xt(E, ae, { fetcherSubmission: ne })
					);
			if (Xo(ae)) {
				yn(b, P, ae.error);
				return;
			}
		}
		if (lo(ae)) throw en(400, { type: "defer-action" });
		let je = E.navigation.location || E.location,
			ot = Gi(e.history, je, G.signal),
			Yt = a || s,
			Ze =
				E.navigation.state !== "idle"
					? ao(Yt, E.navigation.location, l)
					: E.matches;
		X(Ze, "Didn't find any matches after fetcher action");
		let To = ++T;
		F.set(b, To);
		let Iu = Xi(ne, ae.data);
		E.fetchers.set(b, Iu);
		let [_o, pr] = Zm(
			e.history,
			E,
			Ze,
			ne,
			je,
			!1,
			J,
			oe,
			Y,
			fe,
			se,
			Q,
			Yt,
			l,
			{ [U.route.id]: ae.data },
			void 0
		);
		pr
			.filter((Ne) => Ne.key !== b)
			.forEach((Ne) => {
				let Dn = Ne.key,
					pa = E.fetchers.get(Dn),
					eE = Xi(void 0, pa ? pa.data : void 0);
				E.fetchers.set(Dn, eE),
					K.has(Dn) && gn(Dn),
					Ne.controller && K.set(Dn, Ne.controller);
			}),
			xe({ fetchers: new Map(E.fetchers) });
		let Jr = () => pr.forEach((Ne) => gn(Ne.key));
		G.signal.addEventListener("abort", Jr);
		let {
			results: Au,
			loaderResults: Mu,
			fetcherResults: $u,
		} = await Gr(E.matches, Ze, _o, pr, ot);
		if (G.signal.aborted) return;
		G.signal.removeEventListener("abort", Jr),
			F.delete(b),
			K.delete(b),
			pr.forEach((Ne) => K.delete(Ne.key));
		let Do = sv(Au);
		if (Do) {
			if (Do.idx >= _o.length) {
				let Ne = pr[Do.idx - _o.length].key;
				Q.add(Ne);
			}
			return Xt(E, Do.result);
		}
		let { loaderData: fa, errors: Ce } = rv(
			E,
			E.matches,
			_o,
			Mu,
			void 0,
			pr,
			$u,
			ce
		);
		if (E.fetchers.has(b)) {
			let Ne = vr(ae.data);
			E.fetchers.set(b, Ne);
		}
		te(To),
			E.navigation.state === "loading" && To > M
				? (X(O, "Expected pending action"),
				  D && D.abort(),
				  Be(E.navigation.location, {
						matches: Ze,
						loaderData: fa,
						errors: Ce,
						fetchers: new Map(E.fetchers),
				  }))
				: (xe({
						errors: Ce,
						loaderData: ov(E.loaderData, fa, Ze, Ce),
						fetchers: new Map(E.fetchers),
				  }),
				  (J = !1));
	}
	async function vn(b, P, k, U, W, de, ne) {
		let Z = E.fetchers.get(b);
		rt(b, Xi(ne, Z ? Z.data : void 0), { flushSync: de });
		let G = new AbortController(),
			he = Gi(e.history, k, G.signal);
		K.set(b, G);
		let Ye = T,
			ae = await qi("loader", he, U, W, i, o, l, u.v7_relativeSplatPath);
		if (
			(lo(ae) && (ae = (await Yw(ae, he.signal, !0)) || ae),
			K.get(b) === G && K.delete(b),
			!he.signal.aborted)
		) {
			if (fe.has(b)) {
				rt(b, vr(void 0));
				return;
			}
			if (uo(ae))
				if (M > Ye) {
					rt(b, vr(void 0));
					return;
				} else {
					Q.add(b), await Xt(E, ae);
					return;
				}
			if (Xo(ae)) {
				yn(b, P, ae.error);
				return;
			}
			X(!lo(ae), "Unhandled fetcher deferred data"), rt(b, vr(ae.data));
		}
	}
	async function Xt(b, P, k) {
		let {
			submission: U,
			fetcherSubmission: W,
			replace: de,
		} = k === void 0 ? {} : k;
		P.revalidate && (J = !0);
		let ne = Co(b.location, P.location, { _isRedirect: !0 });
		if ((X(ne, "Expected a location on the redirect navigation"), n)) {
			let je = !1;
			if (P.reloadDocument) je = !0;
			else if (qw.test(P.location)) {
				const ot = e.history.createURL(P.location);
				je =
					ot.origin !== t.location.origin ||
					Dt(ot.pathname, l) == null;
			}
			if (je) {
				de
					? t.location.replace(P.location)
					: t.location.assign(P.location);
				return;
			}
		}
		D = null;
		let Z = de === !0 ? Re.Replace : Re.Push,
			{ formMethod: G, formAction: he, formEncType: Ye } = b.navigation;
		!U && !W && G && he && Ye && (U = lv(b.navigation));
		let ae = U || W;
		if (XN.has(P.status) && ae && En(ae.formMethod))
			await le(Z, ne, {
				submission: Te({}, ae, { formAction: P.location }),
				preventScrollReset: R,
			});
		else {
			let je = jc(ne, U);
			await le(Z, ne, {
				overrideNavigation: je,
				fetcherSubmission: W,
				preventScrollReset: R,
			});
		}
	}
	async function Gr(b, P, k, U, W) {
		let de = await Promise.all([
				...k.map((G) =>
					qi("loader", W, G, P, i, o, l, u.v7_relativeSplatPath)
				),
				...U.map((G) =>
					G.matches && G.match && G.controller
						? qi(
								"loader",
								Gi(e.history, G.path, G.controller.signal),
								G.match,
								G.matches,
								i,
								o,
								l,
								u.v7_relativeSplatPath
						  )
						: {
								type: $e.error,
								error: en(404, { pathname: G.path }),
						  }
				),
			]),
			ne = de.slice(0, k.length),
			Z = de.slice(k.length);
		return (
			await Promise.all([
				av(
					b,
					k,
					ne,
					ne.map(() => W.signal),
					!1,
					E.loaderData
				),
				av(
					b,
					U.map((G) => G.match),
					Z,
					U.map((G) => (G.controller ? G.controller.signal : null)),
					!0
				),
			]),
			{ results: de, loaderResults: ne, fetcherResults: Z }
		);
	}
	function Vn() {
		(J = !0),
			oe.push(...Lu()),
			se.forEach((b, P) => {
				K.has(P) && (Y.push(P), gn(P));
			});
	}
	function rt(b, P, k) {
		k === void 0 && (k = {}),
			E.fetchers.set(b, P),
			xe(
				{ fetchers: new Map(E.fetchers) },
				{ flushSync: (k && k.flushSync) === !0 }
			);
	}
	function yn(b, P, k, U) {
		U === void 0 && (U = {});
		let W = gs(E.matches, P);
		qn(b),
			xe(
				{ errors: { [W.route.id]: k }, fetchers: new Map(E.fetchers) },
				{ flushSync: (U && U.flushSync) === !0 }
			);
	}
	function Xr(b) {
		return (
			u.v7_fetcherPersist &&
				(Ee.set(b, (Ee.get(b) || 0) + 1), fe.has(b) && fe.delete(b)),
			E.fetchers.get(b) || Vw
		);
	}
	function qn(b) {
		let P = E.fetchers.get(b);
		K.has(b) && !(P && P.state === "loading" && F.has(b)) && gn(b),
			se.delete(b),
			F.delete(b),
			Q.delete(b),
			fe.delete(b),
			E.fetchers.delete(b);
	}
	function ko(b) {
		if (u.v7_fetcherPersist) {
			let P = (Ee.get(b) || 0) - 1;
			P <= 0 ? (Ee.delete(b), fe.add(b)) : Ee.set(b, P);
		} else qn(b);
		xe({ fetchers: new Map(E.fetchers) });
	}
	function gn(b) {
		let P = K.get(b);
		X(P, "Expected fetch controller: " + b), P.abort(), K.delete(b);
	}
	function No(b) {
		for (let P of b) {
			let k = Xr(P),
				U = vr(k.data);
			E.fetchers.set(P, U);
		}
	}
	function Mi() {
		let b = [],
			P = !1;
		for (let k of Q) {
			let U = E.fetchers.get(k);
			X(U, "Expected fetcher: " + k),
				U.state === "loading" && (Q.delete(k), b.push(k), (P = !0));
		}
		return No(b), P;
	}
	function te(b) {
		let P = [];
		for (let [k, U] of F)
			if (U < b) {
				let W = E.fetchers.get(k);
				X(W, "Expected fetcher: " + k),
					W.state === "loading" && (gn(k), F.delete(k), P.push(k));
			}
		return No(P), P.length > 0;
	}
	function Se(b, P) {
		let k = E.blockers.get(b) || Mo;
		return re.get(b) !== P && re.set(b, P), k;
	}
	function Jt(b) {
		E.blockers.delete(b), re.delete(b);
	}
	function _n(b, P) {
		let k = E.blockers.get(b) || Mo;
		X(
			(k.state === "unblocked" && P.state === "blocked") ||
				(k.state === "blocked" && P.state === "blocked") ||
				(k.state === "blocked" && P.state === "proceeding") ||
				(k.state === "blocked" && P.state === "unblocked") ||
				(k.state === "proceeding" && P.state === "unblocked"),
			"Invalid blocker state transition: " + k.state + " -> " + P.state
		);
		let U = new Map(E.blockers);
		U.set(b, P), xe({ blockers: U });
	}
	function da(b) {
		let { currentLocation: P, nextLocation: k, historyAction: U } = b;
		if (re.size === 0) return;
		re.size > 1 && Kn(!1, "A router only supports one blocker at a time");
		let W = Array.from(re.entries()),
			[de, ne] = W[W.length - 1],
			Z = E.blockers.get(de);
		if (
			!(Z && Z.state === "proceeding") &&
			ne({ currentLocation: P, nextLocation: k, historyAction: U })
		)
			return de;
	}
	function Lu(b) {
		let P = [];
		return (
			ce.forEach((k, U) => {
				(!b || b(U)) && (k.cancel(), P.push(U), ce.delete(U));
			}),
			P
		);
	}
	function JS(b, P, k) {
		if (((h = b), (y = P), (m = k || null), !w && E.navigation === Cc)) {
			w = !0;
			let U = Hp(E.location, E.matches);
			U != null && xe({ restoreScrollPosition: U });
		}
		return () => {
			(h = null), (y = null), (m = null);
		};
	}
	function zp(b, P) {
		return (
			(m &&
				m(
					b,
					P.map((U) => Uw(U, E.loaderData))
				)) ||
			b.key
		);
	}
	function YS(b, P) {
		if (h && y) {
			let k = zp(b, P);
			h[k] = y();
		}
	}
	function Hp(b, P) {
		if (h) {
			let k = zp(b, P),
				U = h[k];
			if (typeof U == "number") return U;
		}
		return null;
	}
	function ZS(b) {
		(i = {}), (a = Kd(b, o, void 0, i));
	}
	return (
		(j = {
			get basename() {
				return l;
			},
			get future() {
				return u;
			},
			get state() {
				return E;
			},
			get routes() {
				return s;
			},
			get window() {
				return t;
			},
			initialize: qe,
			subscribe: Nn,
			enableScrollRestoration: JS,
			navigate: At,
			fetch: Ii,
			revalidate: mn,
			createHref: (b) => e.history.createHref(b),
			encodeLocation: (b) => e.history.encodeLocation(b),
			getFetcher: Xr,
			deleteFetcher: ko,
			dispose: Gt,
			getBlocker: Se,
			deleteBlocker: Jt,
			_internalFetchControllers: K,
			_internalActiveDeferreds: ce,
			_internalSetRoutes: ZS,
		}),
		j
	);
}
function YN(e) {
	return (
		e != null &&
		(("formData" in e && e.formData != null) ||
			("body" in e && e.body !== void 0))
	);
}
function Wd(e, t, n, r, o, i, s, a) {
	let l, u;
	if (s) {
		l = [];
		for (let f of t)
			if ((l.push(f), f.route.id === s)) {
				u = f;
				break;
			}
	} else (l = t), (u = t[t.length - 1]);
	let d = Ru(
		o || ".",
		ju(l, i),
		Dt(e.pathname, n) || e.pathname,
		a === "path"
	);
	return (
		o == null && ((d.search = e.search), (d.hash = e.hash)),
		(o == null || o === "" || o === ".") &&
			u &&
			u.route.index &&
			!Op(d.search) &&
			(d.search = d.search
				? d.search.replace(/^\?/, "?index&")
				: "?index"),
		r &&
			n !== "/" &&
			(d.pathname = d.pathname === "/" ? n : Hn([n, d.pathname])),
		kn(d)
	);
}
function Ym(e, t, n, r) {
	if (!r || !YN(r)) return { path: n };
	if (r.formMethod && !iT(r.formMethod))
		return { path: n, error: en(405, { method: r.formMethod }) };
	let o = () => ({ path: n, error: en(400, { type: "invalid-body" }) }),
		i = r.formMethod || "get",
		s = e ? i.toUpperCase() : i.toLowerCase(),
		a = Jw(n);
	if (r.body !== void 0) {
		if (r.formEncType === "text/plain") {
			if (!En(s)) return o();
			let h =
				typeof r.body == "string"
					? r.body
					: r.body instanceof FormData ||
					  r.body instanceof URLSearchParams
					? Array.from(r.body.entries()).reduce((m, y) => {
							let [w, S] = y;
							return (
								"" +
								m +
								w +
								"=" +
								S +
								`
`
							);
					  }, "")
					: String(r.body);
			return {
				path: n,
				submission: {
					formMethod: s,
					formAction: a,
					formEncType: r.formEncType,
					formData: void 0,
					json: void 0,
					text: h,
				},
			};
		} else if (r.formEncType === "application/json") {
			if (!En(s)) return o();
			try {
				let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
				return {
					path: n,
					submission: {
						formMethod: s,
						formAction: a,
						formEncType: r.formEncType,
						formData: void 0,
						json: h,
						text: void 0,
					},
				};
			} catch {
				return o();
			}
		}
	}
	X(
		typeof FormData == "function",
		"FormData is not available in this environment"
	);
	let l, u;
	if (r.formData) (l = Qd(r.formData)), (u = r.formData);
	else if (r.body instanceof FormData) (l = Qd(r.body)), (u = r.body);
	else if (r.body instanceof URLSearchParams) (l = r.body), (u = nv(l));
	else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
	else
		try {
			(l = new URLSearchParams(r.body)), (u = nv(l));
		} catch {
			return o();
		}
	let d = {
		formMethod: s,
		formAction: a,
		formEncType:
			(r && r.formEncType) || "application/x-www-form-urlencoded",
		formData: u,
		json: void 0,
		text: void 0,
	};
	if (En(d.formMethod)) return { path: n, submission: d };
	let f = pn(n);
	return (
		t && f.search && Op(f.search) && l.append("index", ""),
		(f.search = "?" + l),
		{ path: kn(f), submission: d }
	);
}
function ZN(e, t) {
	let n = e;
	if (t) {
		let r = e.findIndex((o) => o.route.id === t);
		r >= 0 && (n = e.slice(0, r));
	}
	return n;
}
function Zm(e, t, n, r, o, i, s, a, l, u, d, f, h, m, y, w) {
	let S = w ? Object.values(w)[0] : y ? Object.values(y)[0] : void 0,
		g = e.createURL(t.location),
		x = e.createURL(o),
		v = w ? Object.keys(w)[0] : void 0,
		j = ZN(n, v).filter((O, R) => {
			let { route: D } = O;
			if (D.lazy) return !0;
			if (D.loader == null) return !1;
			if (i)
				return D.loader.hydrate
					? !0
					: t.loaderData[D.id] === void 0 &&
							(!t.errors || t.errors[D.id] === void 0);
			if (
				eT(t.loaderData, t.matches[R], O) ||
				a.some(($) => $ === O.route.id)
			)
				return !0;
			let N = t.matches[R],
				L = O;
			return ev(
				O,
				Te(
					{
						currentUrl: g,
						currentParams: N.params,
						nextUrl: x,
						nextParams: L.params,
					},
					r,
					{
						actionResult: S,
						defaultShouldRevalidate:
							s ||
							g.pathname + g.search === x.pathname + x.search ||
							g.search !== x.search ||
							Xw(N, L),
					}
				)
			);
		}),
		E = [];
	return (
		d.forEach((O, R) => {
			if (i || !n.some((B) => B.route.id === O.routeId) || u.has(R))
				return;
			let D = ao(h, O.path, m);
			if (!D) {
				E.push({
					key: R,
					routeId: O.routeId,
					path: O.path,
					matches: null,
					match: null,
					controller: null,
				});
				return;
			}
			let N = t.fetchers.get(R),
				L = Vd(D, O.path),
				$ = !1;
			f.has(R)
				? ($ = !1)
				: l.includes(R)
				? ($ = !0)
				: N && N.state !== "idle" && N.data === void 0
				? ($ = s)
				: ($ = ev(
						L,
						Te(
							{
								currentUrl: g,
								currentParams:
									t.matches[t.matches.length - 1].params,
								nextUrl: x,
								nextParams: n[n.length - 1].params,
							},
							r,
							{ actionResult: S, defaultShouldRevalidate: s }
						)
				  )),
				$ &&
					E.push({
						key: R,
						routeId: O.routeId,
						path: O.path,
						matches: D,
						match: L,
						controller: new AbortController(),
					});
		}),
		[j, E]
	);
}
function eT(e, t, n) {
	let r = !t || n.route.id !== t.route.id,
		o = e[n.route.id] === void 0;
	return r || o;
}
function Xw(e, t) {
	let n = e.route.path;
	return (
		e.pathname !== t.pathname ||
		(n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
	);
}
function ev(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == "boolean") return n;
	}
	return t.defaultShouldRevalidate;
}
async function tv(e, t, n) {
	if (!e.lazy) return;
	let r = await e.lazy();
	if (!e.lazy) return;
	let o = n[e.id];
	X(o, "No route found in manifest");
	let i = {};
	for (let s in r) {
		let l = o[s] !== void 0 && s !== "hasErrorBoundary";
		Kn(
			!l,
			'Route "' +
				o.id +
				'" has a static property "' +
				s +
				'" defined but its lazy function is also returning a value for this property. ' +
				('The lazy route property "' + s + '" will be ignored.')
		),
			!l && !wN.has(s) && (i[s] = r[s]);
	}
	Object.assign(o, i), Object.assign(o, Te({}, t(o), { lazy: void 0 }));
}
async function qi(e, t, n, r, o, i, s, a, l) {
	l === void 0 && (l = {});
	let u,
		d,
		f,
		h = (w) => {
			let S,
				g = new Promise((x, v) => (S = v));
			return (
				(f = () => S()),
				t.signal.addEventListener("abort", f),
				Promise.race([
					w({
						request: t,
						params: n.params,
						context: l.requestContext,
					}),
					g,
				])
			);
		};
	try {
		let w = n.route[e];
		if (n.route.lazy)
			if (w) {
				let S,
					g = await Promise.all([
						h(w).catch((x) => {
							S = x;
						}),
						tv(n.route, i, o),
					]);
				if (S) throw S;
				d = g[0];
			} else if ((await tv(n.route, i, o), (w = n.route[e]), w))
				d = await h(w);
			else if (e === "action") {
				let S = new URL(t.url),
					g = S.pathname + S.search;
				throw en(405, {
					method: t.method,
					pathname: g,
					routeId: n.route.id,
				});
			} else return { type: $e.data, data: void 0 };
		else if (w) d = await h(w);
		else {
			let S = new URL(t.url),
				g = S.pathname + S.search;
			throw en(404, { pathname: g });
		}
		X(
			d !== void 0,
			"You defined " +
				(e === "action" ? "an action" : "a loader") +
				" for route " +
				('"' +
					n.route.id +
					"\" but didn't return anything from your `" +
					e +
					"` ") +
				"function. Please return a value or `null`."
		);
	} catch (w) {
		(u = $e.error), (d = w);
	} finally {
		f && t.signal.removeEventListener("abort", f);
	}
	if (oT(d)) {
		let w = d.status;
		if (GN.has(w)) {
			let g = d.headers.get("Location");
			if (
				(X(
					g,
					"Redirects returned/thrown from loaders/actions must have a Location header"
				),
				!qw.test(g))
			)
				g = Wd(
					new URL(t.url),
					r.slice(0, r.indexOf(n) + 1),
					s,
					!0,
					g,
					a
				);
			else if (!l.isStaticRequest) {
				let x = new URL(t.url),
					v = g.startsWith("//")
						? new URL(x.protocol + g)
						: new URL(g),
					C = Dt(v.pathname, s) != null;
				v.origin === x.origin &&
					C &&
					(g = v.pathname + v.search + v.hash);
			}
			if (l.isStaticRequest) throw (d.headers.set("Location", g), d);
			return {
				type: $e.redirect,
				status: w,
				location: g,
				revalidate: d.headers.get("X-Remix-Revalidate") !== null,
				reloadDocument:
					d.headers.get("X-Remix-Reload-Document") !== null,
			};
		}
		if (l.isRouteRequest)
			throw { type: u === $e.error ? $e.error : $e.data, response: d };
		let S;
		try {
			let g = d.headers.get("Content-Type");
			g && /\bapplication\/json\b/.test(g)
				? d.body == null
					? (S = null)
					: (S = await d.json())
				: (S = await d.text());
		} catch (g) {
			return { type: $e.error, error: g };
		}
		return u === $e.error
			? { type: u, error: new Cp(w, d.statusText, S), headers: d.headers }
			: {
					type: $e.data,
					data: S,
					statusCode: d.status,
					headers: d.headers,
			  };
	}
	if (u === $e.error) return { type: u, error: d };
	if (rT(d)) {
		var m, y;
		return {
			type: $e.deferred,
			deferredData: d,
			statusCode: (m = d.init) == null ? void 0 : m.status,
			headers:
				((y = d.init) == null ? void 0 : y.headers) &&
				new Headers(d.init.headers),
		};
	}
	return { type: $e.data, data: d };
}
function Gi(e, t, n, r) {
	let o = e.createURL(Jw(t)).toString(),
		i = { signal: n };
	if (r && En(r.formMethod)) {
		let { formMethod: s, formEncType: a } = r;
		(i.method = s.toUpperCase()),
			a === "application/json"
				? ((i.headers = new Headers({ "Content-Type": a })),
				  (i.body = JSON.stringify(r.json)))
				: a === "text/plain"
				? (i.body = r.text)
				: a === "application/x-www-form-urlencoded" && r.formData
				? (i.body = Qd(r.formData))
				: (i.body = r.formData);
	}
	return new Request(o, i);
}
function Qd(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries())
		t.append(n, typeof r == "string" ? r : r.name);
	return t;
}
function nv(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function tT(e, t, n, r, o) {
	let i = {},
		s = null,
		a,
		l = !1,
		u = {};
	return (
		n.forEach((d, f) => {
			let h = t[f].route.id;
			if (
				(X(
					!uo(d),
					"Cannot handle redirect results in processLoaderData"
				),
				Xo(d))
			) {
				let m = gs(e, h),
					y = d.error;
				r && ((y = Object.values(r)[0]), (r = void 0)),
					(s = s || {}),
					s[m.route.id] == null && (s[m.route.id] = y),
					(i[h] = void 0),
					l || ((l = !0), (a = jp(d.error) ? d.error.status : 500)),
					d.headers && (u[h] = d.headers);
			} else
				lo(d)
					? (o.set(h, d.deferredData), (i[h] = d.deferredData.data))
					: (i[h] = d.data),
					d.statusCode != null &&
						d.statusCode !== 200 &&
						!l &&
						(a = d.statusCode),
					d.headers && (u[h] = d.headers);
		}),
		r && ((s = r), (i[Object.keys(r)[0]] = void 0)),
		{ loaderData: i, errors: s, statusCode: a || 200, loaderHeaders: u }
	);
}
function rv(e, t, n, r, o, i, s, a) {
	let { loaderData: l, errors: u } = tT(t, n, r, o, a);
	for (let d = 0; d < i.length; d++) {
		let { key: f, match: h, controller: m } = i[d];
		X(
			s !== void 0 && s[d] !== void 0,
			"Did not find corresponding fetcher result"
		);
		let y = s[d];
		if (!(m && m.signal.aborted))
			if (Xo(y)) {
				let w = gs(e.matches, h == null ? void 0 : h.route.id);
				(u && u[w.route.id]) ||
					(u = Te({}, u, { [w.route.id]: y.error })),
					e.fetchers.delete(f);
			} else if (uo(y)) X(!1, "Unhandled fetcher revalidation redirect");
			else if (lo(y)) X(!1, "Unhandled fetcher deferred data");
			else {
				let w = vr(y.data);
				e.fetchers.set(f, w);
			}
	}
	return { loaderData: l, errors: u };
}
function ov(e, t, n, r) {
	let o = Te({}, t);
	for (let i of n) {
		let s = i.route.id;
		if (
			(t.hasOwnProperty(s)
				? t[s] !== void 0 && (o[s] = t[s])
				: e[s] !== void 0 && i.route.loader && (o[s] = e[s]),
			r && r.hasOwnProperty(s))
		)
			break;
	}
	return o;
}
function gs(e, t) {
	return (
		(t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
			.reverse()
			.find((r) => r.route.hasErrorBoundary === !0) || e[0]
	);
}
function iv(e) {
	let t =
		e.length === 1
			? e[0]
			: e.find((n) => n.index || !n.path || n.path === "/") || {
					id: "__shim-error-route__",
			  };
	return {
		matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
		route: t,
	};
}
function en(e, t) {
	let { pathname: n, routeId: r, method: o, type: i } = t === void 0 ? {} : t,
		s = "Unknown Server Error",
		a = "Unknown @remix-run/router error";
	return (
		e === 400
			? ((s = "Bad Request"),
			  o && n && r
					? (a =
							"You made a " +
							o +
							' request to "' +
							n +
							'" but ' +
							('did not provide a `loader` for route "' +
								r +
								'", ') +
							"so there is no way to handle the request.")
					: i === "defer-action"
					? (a = "defer() is not supported in actions")
					: i === "invalid-body" &&
					  (a = "Unable to encode submission body"))
			: e === 403
			? ((s = "Forbidden"),
			  (a = 'Route "' + r + '" does not match URL "' + n + '"'))
			: e === 404
			? ((s = "Not Found"), (a = 'No route matches URL "' + n + '"'))
			: e === 405 &&
			  ((s = "Method Not Allowed"),
			  o && n && r
					? (a =
							"You made a " +
							o.toUpperCase() +
							' request to "' +
							n +
							'" but ' +
							('did not provide an `action` for route "' +
								r +
								'", ') +
							"so there is no way to handle the request.")
					: o &&
					  (a = 'Invalid request method "' + o.toUpperCase() + '"')),
		new Cp(e || 500, s, new Error(a), !0)
	);
}
function sv(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (uo(n)) return { result: n, idx: t };
	}
}
function Jw(e) {
	let t = typeof e == "string" ? pn(e) : e;
	return kn(Te({}, t, { hash: "" }));
}
function nT(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search
		? !1
		: e.hash === ""
		? t.hash !== ""
		: e.hash === t.hash
		? !0
		: t.hash !== "";
}
function lo(e) {
	return e.type === $e.deferred;
}
function Xo(e) {
	return e.type === $e.error;
}
function uo(e) {
	return (e && e.type) === $e.redirect;
}
function rT(e) {
	let t = e;
	return (
		t &&
		typeof t == "object" &&
		typeof t.data == "object" &&
		typeof t.subscribe == "function" &&
		typeof t.cancel == "function" &&
		typeof t.resolveData == "function"
	);
}
function oT(e) {
	return (
		e != null &&
		typeof e.status == "number" &&
		typeof e.statusText == "string" &&
		typeof e.headers == "object" &&
		typeof e.body < "u"
	);
}
function iT(e) {
	return qN.has(e.toLowerCase());
}
function En(e) {
	return QN.has(e.toLowerCase());
}
async function av(e, t, n, r, o, i) {
	for (let s = 0; s < n.length; s++) {
		let a = n[s],
			l = t[s];
		if (!l) continue;
		let u = e.find((f) => f.route.id === l.route.id),
			d = u != null && !Xw(u, l) && (i && i[l.route.id]) !== void 0;
		if (lo(a) && (o || d)) {
			let f = r[s];
			X(
				f,
				"Expected an AbortSignal for revalidating fetcher deferred result"
			),
				await Yw(a, f, o).then((h) => {
					h && (n[s] = h || n[s]);
				});
		}
	}
}
async function Yw(e, t, n) {
	if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
		if (n)
			try {
				return { type: $e.data, data: e.deferredData.unwrappedData };
			} catch (o) {
				return { type: $e.error, error: o };
			}
		return { type: $e.data, data: e.deferredData.data };
	}
}
function Op(e) {
	return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Vd(e, t) {
	let n = typeof t == "string" ? pn(t).search : t.search;
	if (e[e.length - 1].route.index && Op(n || "")) return e[e.length - 1];
	let r = Kw(e);
	return r[r.length - 1];
}
function lv(e) {
	let {
		formMethod: t,
		formAction: n,
		formEncType: r,
		text: o,
		formData: i,
		json: s,
	} = e;
	if (!(!t || !n || !r)) {
		if (o != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: void 0,
				text: o,
			};
		if (i != null)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: i,
				json: void 0,
				text: void 0,
			};
		if (s !== void 0)
			return {
				formMethod: t,
				formAction: n,
				formEncType: r,
				formData: void 0,
				json: s,
				text: void 0,
			};
	}
}
function jc(e, t) {
	return t
		? {
				state: "loading",
				location: e,
				formMethod: t.formMethod,
				formAction: t.formAction,
				formEncType: t.formEncType,
				formData: t.formData,
				json: t.json,
				text: t.text,
		  }
		: {
				state: "loading",
				location: e,
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
		  };
}
function sT(e, t) {
	return {
		state: "submitting",
		location: e,
		formMethod: t.formMethod,
		formAction: t.formAction,
		formEncType: t.formEncType,
		formData: t.formData,
		json: t.json,
		text: t.text,
	};
}
function Xi(e, t) {
	return e
		? {
				state: "loading",
				formMethod: e.formMethod,
				formAction: e.formAction,
				formEncType: e.formEncType,
				formData: e.formData,
				json: e.json,
				text: e.text,
				data: t,
		  }
		: {
				state: "loading",
				formMethod: void 0,
				formAction: void 0,
				formEncType: void 0,
				formData: void 0,
				json: void 0,
				text: void 0,
				data: t,
		  };
}
function aT(e, t) {
	return {
		state: "submitting",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t ? t.data : void 0,
	};
}
function vr(e) {
	return {
		state: "idle",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: e,
	};
}
function lT(e, t) {
	try {
		let n = e.sessionStorage.getItem(Gw);
		if (n) {
			let r = JSON.parse(n);
			for (let [o, i] of Object.entries(r || {}))
				i && Array.isArray(i) && t.set(o, new Set(i || []));
		}
	} catch {}
}
function uT(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [r, o] of t) n[r] = [...o];
		try {
			e.sessionStorage.setItem(Gw, JSON.stringify(n));
		} catch (r) {
			Kn(
				!1,
				"Failed to save applied view transitions in sessionStorage (" +
					r +
					")."
			);
		}
	}
}
/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Br() {
	return (
		(Br = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) &&
								(e[r] = n[r]);
					}
					return e;
			  }),
		Br.apply(this, arguments)
	);
}
const Pi = p.createContext(null),
	aa = p.createContext(null),
	Kl = p.createContext(null),
	Vt = p.createContext(null),
	ki = p.createContext(null),
	qt = p.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	Zw = p.createContext(null);
function eS(e, t) {
	let { relative: n } = t === void 0 ? {} : t;
	Vr() || X(!1);
	let { basename: r, navigator: o } = p.useContext(Vt),
		{ hash: i, pathname: s, search: a } = Ti(e, { relative: n }),
		l = s;
	return (
		r !== "/" && (l = s === "/" ? r : Hn([r, s])),
		o.createHref({ pathname: l, search: a, hash: i })
	);
}
function Vr() {
	return p.useContext(ki) != null;
}
function hn() {
	return Vr() || X(!1), p.useContext(ki).location;
}
function cT() {
	return p.useContext(ki).navigationType;
}
function dT(e) {
	Vr() || X(!1);
	let { pathname: t } = hn();
	return p.useMemo(() => Hs(e, t), [t, e]);
}
function tS(e) {
	p.useContext(Vt).static || p.useLayoutEffect(e);
}
function Ve() {
	let { isDataRoute: e } = p.useContext(qt);
	return e ? RT() : fT();
}
function fT() {
	Vr() || X(!1);
	let e = p.useContext(Pi),
		{ basename: t, future: n, navigator: r } = p.useContext(Vt),
		{ matches: o } = p.useContext(qt),
		{ pathname: i } = hn(),
		s = JSON.stringify(ju(o, n.v7_relativeSplatPath)),
		a = p.useRef(!1);
	return (
		tS(() => {
			a.current = !0;
		}),
		p.useCallback(
			function (u, d) {
				if ((d === void 0 && (d = {}), !a.current)) return;
				if (typeof u == "number") {
					r.go(u);
					return;
				}
				let f = Ru(u, JSON.parse(s), i, d.relative === "path");
				e == null &&
					t !== "/" &&
					(f.pathname = f.pathname === "/" ? t : Hn([t, f.pathname])),
					(d.replace ? r.replace : r.push)(f, d.state, d);
			},
			[t, r, s, i, e]
		)
	);
}
const nS = p.createContext(null);
function pT() {
	return p.useContext(nS);
}
function rS(e) {
	let t = p.useContext(qt).outlet;
	return t && p.createElement(nS.Provider, { value: e }, t);
}
function Ni() {
	let { matches: e } = p.useContext(qt),
		t = e[e.length - 1];
	return t ? t.params : {};
}
function Ti(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ future: r } = p.useContext(Vt),
		{ matches: o } = p.useContext(qt),
		{ pathname: i } = hn(),
		s = JSON.stringify(ju(o, r.v7_relativeSplatPath));
	return p.useMemo(() => Ru(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function oS(e, t) {
	return iS(e, t);
}
function iS(e, t, n, r) {
	Vr() || X(!1);
	let { navigator: o } = p.useContext(Vt),
		{ matches: i } = p.useContext(qt),
		s = i[i.length - 1],
		a = s ? s.params : {};
	s && s.pathname;
	let l = s ? s.pathnameBase : "/";
	s && s.route;
	let u = hn(),
		d;
	if (t) {
		var f;
		let S = typeof t == "string" ? pn(t) : t;
		l === "/" || ((f = S.pathname) != null && f.startsWith(l)) || X(!1),
			(d = S);
	} else d = u;
	let h = d.pathname || "/",
		m = l === "/" ? h : h.slice(l.length) || "/",
		y = ao(e, { pathname: m }),
		w = sS(
			y &&
				y.map((S) =>
					Object.assign({}, S, {
						params: Object.assign({}, a, S.params),
						pathname: Hn([
							l,
							o.encodeLocation
								? o.encodeLocation(S.pathname).pathname
								: S.pathname,
						]),
						pathnameBase:
							S.pathnameBase === "/"
								? l
								: Hn([
										l,
										o.encodeLocation
											? o.encodeLocation(S.pathnameBase)
													.pathname
											: S.pathnameBase,
								  ]),
					})
				),
			i,
			n,
			r
		);
	return t && w
		? p.createElement(
				ki.Provider,
				{
					value: {
						location: Br(
							{
								pathname: "/",
								search: "",
								hash: "",
								state: null,
								key: "default",
							},
							d
						),
						navigationType: Re.Pop,
					},
				},
				w
		  )
		: w;
}
function hT() {
	let e = cS(),
		t = jp(e)
			? e.status + " " + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
	return p.createElement(
		p.Fragment,
		null,
		p.createElement("h2", null, "Unexpected Application Error!"),
		p.createElement("h3", { style: { fontStyle: "italic" } }, t),
		n ? p.createElement("pre", { style: o }, n) : null,
		null
	);
}
const mT = p.createElement(hT, null);
class vT extends p.Component {
	constructor(t) {
		super(t),
			(this.state = {
				location: t.location,
				revalidation: t.revalidation,
				error: t.error,
			});
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ||
			(n.revalidation !== "idle" && t.revalidation === "idle")
			? {
					error: t.error,
					location: t.location,
					revalidation: t.revalidation,
			  }
			: {
					error: t.error !== void 0 ? t.error : n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
			  };
	}
	componentDidCatch(t, n) {
		console.error(
			"React Router caught the following error during render",
			t,
			n
		);
	}
	render() {
		return this.state.error !== void 0
			? p.createElement(
					qt.Provider,
					{ value: this.props.routeContext },
					p.createElement(Zw.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function yT(e) {
	let { routeContext: t, match: n, children: r } = e,
		o = p.useContext(Pi);
	return (
		o &&
			o.static &&
			o.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(o.staticContext._deepestRenderedBoundaryId = n.route.id),
		p.createElement(qt.Provider, { value: t }, r)
	);
}
function sS(e, t, n, r) {
	var o;
	if (
		(t === void 0 && (t = []),
		n === void 0 && (n = null),
		r === void 0 && (r = null),
		e == null)
	) {
		var i;
		if ((i = n) != null && i.errors) e = n.matches;
		else return null;
	}
	let s = e,
		a = (o = n) == null ? void 0 : o.errors;
	if (a != null) {
		let d = s.findIndex(
			(f) => f.route.id && (a == null ? void 0 : a[f.route.id])
		);
		d >= 0 || X(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
	}
	let l = !1,
		u = -1;
	if (n && r && r.v7_partialHydration)
		for (let d = 0; d < s.length; d++) {
			let f = s[d];
			if (
				((f.route.HydrateFallback || f.route.hydrateFallbackElement) &&
					(u = d),
				f.route.id)
			) {
				let { loaderData: h, errors: m } = n,
					y =
						f.route.loader &&
						h[f.route.id] === void 0 &&
						(!m || m[f.route.id] === void 0);
				if (f.route.lazy || y) {
					(l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
					break;
				}
			}
		}
	return s.reduceRight((d, f, h) => {
		let m,
			y = !1,
			w = null,
			S = null;
		n &&
			((m = a && f.route.id ? a[f.route.id] : void 0),
			(w = f.route.errorElement || mT),
			l &&
				(u < 0 && h === 0
					? (OT("route-fallback", !1), (y = !0), (S = null))
					: u === h &&
					  ((y = !0),
					  (S = f.route.hydrateFallbackElement || null))));
		let g = t.concat(s.slice(0, h + 1)),
			x = () => {
				let v;
				return (
					m
						? (v = w)
						: y
						? (v = S)
						: f.route.Component
						? (v = p.createElement(f.route.Component, null))
						: f.route.element
						? (v = f.route.element)
						: (v = d),
					p.createElement(yT, {
						match: f,
						routeContext: {
							outlet: d,
							matches: g,
							isDataRoute: n != null,
						},
						children: v,
					})
				);
			};
		return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
			? p.createElement(vT, {
					location: n.location,
					revalidation: n.revalidation,
					component: w,
					error: m,
					children: x(),
					routeContext: { outlet: null, matches: g, isDataRoute: !0 },
			  })
			: x();
	}, null);
}
var Ou = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			e
		);
	})(Ou || {}),
	Lt = (function (e) {
		return (
			(e.UseBlocker = "useBlocker"),
			(e.UseLoaderData = "useLoaderData"),
			(e.UseActionData = "useActionData"),
			(e.UseRouteError = "useRouteError"),
			(e.UseNavigation = "useNavigation"),
			(e.UseRouteLoaderData = "useRouteLoaderData"),
			(e.UseMatches = "useMatches"),
			(e.UseRevalidator = "useRevalidator"),
			(e.UseNavigateStable = "useNavigate"),
			(e.UseRouteId = "useRouteId"),
			e
		);
	})(Lt || {});
function bp(e) {
	let t = p.useContext(Pi);
	return t || X(!1), t;
}
function qr(e) {
	let t = p.useContext(aa);
	return t || X(!1), t;
}
function gT(e) {
	let t = p.useContext(qt);
	return t || X(!1), t;
}
function la(e) {
	let t = gT(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || X(!1), n.route.id;
}
function aS() {
	return la(Lt.UseRouteId);
}
function lS() {
	return qr(Lt.UseNavigation).navigation;
}
function xT() {
	let e = bp(Ou.UseRevalidator),
		t = qr(Lt.UseRevalidator);
	return p.useMemo(
		() => ({ revalidate: e.router.revalidate, state: t.revalidation }),
		[e.router.revalidate, t.revalidation]
	);
}
function uS() {
	let { matches: e, loaderData: t } = qr(Lt.UseMatches);
	return p.useMemo(() => e.map((n) => Uw(n, t)), [e, t]);
}
function wT() {
	let e = qr(Lt.UseLoaderData),
		t = la(Lt.UseLoaderData);
	if (e.errors && e.errors[t] != null) {
		console.error(
			"You cannot `useLoaderData` in an errorElement (routeId: " + t + ")"
		);
		return;
	}
	return e.loaderData[t];
}
function ST(e) {
	return qr(Lt.UseRouteLoaderData).loaderData[e];
}
function ET() {
	let e = qr(Lt.UseActionData),
		t = la(Lt.UseLoaderData);
	return e.actionData ? e.actionData[t] : void 0;
}
function cS() {
	var e;
	let t = p.useContext(Zw),
		n = qr(Lt.UseRouteError),
		r = la(Lt.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function dS() {
	let e = p.useContext(Kl);
	return e == null ? void 0 : e._data;
}
function CT() {
	let e = p.useContext(Kl);
	return e == null ? void 0 : e._error;
}
let jT = 0;
function fS(e) {
	let { router: t, basename: n } = bp(Ou.UseBlocker),
		r = qr(Lt.UseBlocker),
		[o, i] = p.useState(""),
		s = p.useCallback(
			(a) => {
				if (typeof e != "function") return !!e;
				if (n === "/") return e(a);
				let {
					currentLocation: l,
					nextLocation: u,
					historyAction: d,
				} = a;
				return e({
					currentLocation: Br({}, l, {
						pathname: Dt(l.pathname, n) || l.pathname,
					}),
					nextLocation: Br({}, u, {
						pathname: Dt(u.pathname, n) || u.pathname,
					}),
					historyAction: d,
				});
			},
			[n, e]
		);
	return (
		p.useEffect(() => {
			let a = String(++jT);
			return i(a), () => t.deleteBlocker(a);
		}, [t]),
		p.useEffect(() => {
			o !== "" && t.getBlocker(o, s);
		}, [t, o, s]),
		o && r.blockers.has(o) ? r.blockers.get(o) : Mo
	);
}
function RT() {
	let { router: e } = bp(Ou.UseNavigateStable),
		t = la(Lt.UseNavigateStable),
		n = p.useRef(!1);
	return (
		tS(() => {
			n.current = !0;
		}),
		p.useCallback(
			function (o, i) {
				i === void 0 && (i = {}),
					n.current &&
						(typeof o == "number"
							? e.navigate(o)
							: e.navigate(o, Br({ fromRouteId: t }, i)));
			},
			[e, t]
		)
	);
}
const uv = {};
function OT(e, t, n) {
	!t && !uv[e] && (uv[e] = !0);
}
const bT = "startTransition",
	cv = xs[bT];
function PT(e) {
	let {
			basename: t,
			children: n,
			initialEntries: r,
			initialIndex: o,
			future: i,
		} = e,
		s = p.useRef();
	s.current == null &&
		(s.current = Aw({ initialEntries: r, initialIndex: o, v5Compat: !0 }));
	let a = s.current,
		[l, u] = p.useState({ action: a.action, location: a.location }),
		{ v7_startTransition: d } = i || {},
		f = p.useCallback(
			(h) => {
				d && cv ? cv(() => u(h)) : u(h);
			},
			[u, d]
		);
	return (
		p.useLayoutEffect(() => a.listen(f), [a, f]),
		p.createElement(_i, {
			basename: t,
			children: n,
			location: l.location,
			navigationType: l.action,
			navigator: a,
			future: i,
		})
	);
}
function kT(e) {
	let { to: t, replace: n, state: r, relative: o } = e;
	Vr() || X(!1);
	let { future: i, static: s } = p.useContext(Vt),
		{ matches: a } = p.useContext(qt),
		{ pathname: l } = hn(),
		u = Ve(),
		d = Ru(t, ju(a, i.v7_relativeSplatPath), l, o === "path"),
		f = JSON.stringify(d);
	return (
		p.useEffect(
			() => u(JSON.parse(f), { replace: n, state: r, relative: o }),
			[u, f, o, n, r]
		),
		null
	);
}
function NT(e) {
	return rS(e.context);
}
function it(e) {
	X(!1);
}
function _i(e) {
	let {
		basename: t = "/",
		children: n = null,
		location: r,
		navigationType: o = Re.Pop,
		navigator: i,
		static: s = !1,
		future: a,
	} = e;
	Vr() && X(!1);
	let l = t.replace(/^\/*/, "/"),
		u = p.useMemo(
			() => ({
				basename: l,
				navigator: i,
				static: s,
				future: Br({ v7_relativeSplatPath: !1 }, a),
			}),
			[l, a, i, s]
		);
	typeof r == "string" && (r = pn(r));
	let {
			pathname: d = "/",
			search: f = "",
			hash: h = "",
			state: m = null,
			key: y = "default",
		} = r,
		w = p.useMemo(() => {
			let S = Dt(d, l);
			return S == null
				? null
				: {
						location: {
							pathname: S,
							search: f,
							hash: h,
							state: m,
							key: y,
						},
						navigationType: o,
				  };
		}, [l, d, f, h, m, y, o]);
	return w == null
		? null
		: p.createElement(
				Vt.Provider,
				{ value: u },
				p.createElement(ki.Provider, { children: n, value: w })
		  );
}
function pS(e) {
	let { children: t, location: n } = e;
	return oS(Ks(t), n);
}
function TT(e) {
	let { children: t, errorElement: n, resolve: r } = e;
	return p.createElement(
		DT,
		{ resolve: r, errorElement: n },
		p.createElement(LT, null, t)
	);
}
var Zt = (function (e) {
	return (
		(e[(e.pending = 0)] = "pending"),
		(e[(e.success = 1)] = "success"),
		(e[(e.error = 2)] = "error"),
		e
	);
})(Zt || {});
const _T = new Promise(() => {});
class DT extends p.Component {
	constructor(t) {
		super(t), (this.state = { error: null });
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	componentDidCatch(t, n) {
		console.error("<Await> caught the following error during render", t, n);
	}
	render() {
		let { children: t, errorElement: n, resolve: r } = this.props,
			o = null,
			i = Zt.pending;
		if (!(r instanceof Promise))
			(i = Zt.success),
				(o = Promise.resolve()),
				Object.defineProperty(o, "_tracked", { get: () => !0 }),
				Object.defineProperty(o, "_data", { get: () => r });
		else if (this.state.error) {
			i = Zt.error;
			let s = this.state.error;
			(o = Promise.reject().catch(() => {})),
				Object.defineProperty(o, "_tracked", { get: () => !0 }),
				Object.defineProperty(o, "_error", { get: () => s });
		} else
			r._tracked
				? ((o = r),
				  (i =
						o._error !== void 0
							? Zt.error
							: o._data !== void 0
							? Zt.success
							: Zt.pending))
				: ((i = Zt.pending),
				  Object.defineProperty(r, "_tracked", { get: () => !0 }),
				  (o = r.then(
						(s) =>
							Object.defineProperty(r, "_data", { get: () => s }),
						(s) =>
							Object.defineProperty(r, "_error", { get: () => s })
				  )));
		if (i === Zt.error && o._error instanceof Hl) throw _T;
		if (i === Zt.error && !n) throw o._error;
		if (i === Zt.error)
			return p.createElement(Kl.Provider, { value: o, children: n });
		if (i === Zt.success)
			return p.createElement(Kl.Provider, { value: o, children: t });
		throw o;
	}
}
function LT(e) {
	let { children: t } = e,
		n = dS(),
		r = typeof t == "function" ? t(n) : t;
	return p.createElement(p.Fragment, null, r);
}
function Ks(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return (
		p.Children.forEach(e, (r, o) => {
			if (!p.isValidElement(r)) return;
			let i = [...t, o];
			if (r.type === p.Fragment) {
				n.push.apply(n, Ks(r.props.children, i));
				return;
			}
			r.type !== it && X(!1),
				!r.props.index || !r.props.children || X(!1);
			let s = {
				id: r.props.id || i.join("-"),
				caseSensitive: r.props.caseSensitive,
				element: r.props.element,
				Component: r.props.Component,
				index: r.props.index,
				path: r.props.path,
				loader: r.props.loader,
				action: r.props.action,
				errorElement: r.props.errorElement,
				ErrorBoundary: r.props.ErrorBoundary,
				hasErrorBoundary:
					r.props.ErrorBoundary != null ||
					r.props.errorElement != null,
				shouldRevalidate: r.props.shouldRevalidate,
				handle: r.props.handle,
				lazy: r.props.lazy,
			};
			r.props.children && (s.children = Ks(r.props.children, i)),
				n.push(s);
		}),
		n
	);
}
function IT(e) {
	return sS(e);
}
function Pp(e) {
	let t = {
		hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
	};
	return (
		e.Component &&
			Object.assign(t, {
				element: p.createElement(e.Component),
				Component: void 0,
			}),
		e.HydrateFallback &&
			Object.assign(t, {
				hydrateFallbackElement: p.createElement(e.HydrateFallback),
				HydrateFallback: void 0,
			}),
		e.ErrorBoundary &&
			Object.assign(t, {
				errorElement: p.createElement(e.ErrorBoundary),
				ErrorBoundary: void 0,
			}),
		t
	);
}
function AT(e, t) {
	return Rp({
		basename: t == null ? void 0 : t.basename,
		future: Br({}, t == null ? void 0 : t.future, {
			v7_prependBasename: !0,
		}),
		history: Aw({
			initialEntries: t == null ? void 0 : t.initialEntries,
			initialIndex: t == null ? void 0 : t.initialIndex,
		}),
		hydrationData: t == null ? void 0 : t.hydrationData,
		routes: e,
		mapRouteProperties: Pp,
	}).initialize();
}
/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _t() {
	return (
		(_t = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) &&
								(e[r] = n[r]);
					}
					return e;
			  }),
		_t.apply(this, arguments)
	);
}
function kp(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		o,
		i;
	for (i = 0; i < r.length; i++)
		(o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
	return n;
}
const el = "get",
	Rc = "application/x-www-form-urlencoded";
function bu(e) {
	return e != null && typeof e.tagName == "string";
}
function MT(e) {
	return bu(e) && e.tagName.toLowerCase() === "button";
}
function $T(e) {
	return bu(e) && e.tagName.toLowerCase() === "form";
}
function FT(e) {
	return bu(e) && e.tagName.toLowerCase() === "input";
}
function UT(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function BT(e, t) {
	return e.button === 0 && (!t || t === "_self") && !UT(e);
}
function Wl(e) {
	return (
		e === void 0 && (e = ""),
		new URLSearchParams(
			typeof e == "string" ||
			Array.isArray(e) ||
			e instanceof URLSearchParams
				? e
				: Object.keys(e).reduce((t, n) => {
						let r = e[n];
						return t.concat(
							Array.isArray(r) ? r.map((o) => [n, o]) : [[n, r]]
						);
				  }, [])
		)
	);
}
function zT(e, t) {
	let n = Wl(e);
	return (
		t &&
			t.forEach((r, o) => {
				n.has(o) ||
					t.getAll(o).forEach((i) => {
						n.append(o, i);
					});
			}),
		n
	);
}
let Aa = null;
function HT() {
	if (Aa === null)
		try {
			new FormData(document.createElement("form"), 0), (Aa = !1);
		} catch {
			Aa = !0;
		}
	return Aa;
}
const KT = new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain",
]);
function Oc(e) {
	return e != null && !KT.has(e) ? null : e;
}
function WT(e, t) {
	let n, r, o, i, s;
	if ($T(e)) {
		let a = e.getAttribute("action");
		(r = a ? Dt(a, t) : null),
			(n = e.getAttribute("method") || el),
			(o = Oc(e.getAttribute("enctype")) || Rc),
			(i = new FormData(e));
	} else if (
		MT(e) ||
		(FT(e) && (e.type === "submit" || e.type === "image"))
	) {
		let a = e.form;
		if (a == null)
			throw new Error(
				'Cannot submit a <button> or <input type="submit"> without a <form>'
			);
		let l = e.getAttribute("formaction") || a.getAttribute("action");
		if (
			((r = l ? Dt(l, t) : null),
			(n =
				e.getAttribute("formmethod") || a.getAttribute("method") || el),
			(o =
				Oc(e.getAttribute("formenctype")) ||
				Oc(a.getAttribute("enctype")) ||
				Rc),
			(i = new FormData(a, e)),
			!HT())
		) {
			let { name: u, type: d, value: f } = e;
			if (d === "image") {
				let h = u ? u + "." : "";
				i.append(h + "x", "0"), i.append(h + "y", "0");
			} else u && i.append(u, f);
		}
	} else {
		if (bu(e))
			throw new Error(
				'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
			);
		(n = el), (r = null), (o = Rc), (s = e);
	}
	return (
		i && o === "text/plain" && ((s = i), (i = void 0)),
		{ action: r, method: n.toLowerCase(), encType: o, formData: i, body: s }
	);
}
const QT = [
		"onClick",
		"relative",
		"reloadDocument",
		"replace",
		"state",
		"target",
		"to",
		"preventScrollReset",
		"unstable_viewTransition",
	],
	VT = [
		"aria-current",
		"caseSensitive",
		"className",
		"end",
		"style",
		"to",
		"unstable_viewTransition",
		"children",
	],
	qT = [
		"fetcherKey",
		"navigate",
		"reloadDocument",
		"replace",
		"state",
		"method",
		"action",
		"onSubmit",
		"relative",
		"preventScrollReset",
		"unstable_viewTransition",
	],
	GT = "6";
try {
	window.__reactRouterVersion = GT;
} catch {}
function XT(e, t) {
	return Rp({
		basename: t == null ? void 0 : t.basename,
		future: _t({}, t == null ? void 0 : t.future, {
			v7_prependBasename: !0,
		}),
		history: Mw({ window: t == null ? void 0 : t.window }),
		hydrationData: (t == null ? void 0 : t.hydrationData) || hS(),
		routes: e,
		mapRouteProperties: Pp,
		window: t == null ? void 0 : t.window,
	}).initialize();
}
function JT(e, t) {
	return Rp({
		basename: t == null ? void 0 : t.basename,
		future: _t({}, t == null ? void 0 : t.future, {
			v7_prependBasename: !0,
		}),
		history: $w({ window: t == null ? void 0 : t.window }),
		hydrationData: (t == null ? void 0 : t.hydrationData) || hS(),
		routes: e,
		mapRouteProperties: Pp,
		window: t == null ? void 0 : t.window,
	}).initialize();
}
function hS() {
	var e;
	let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
	return t && t.errors && (t = _t({}, t, { errors: YT(t.errors) })), t;
}
function YT(e) {
	if (!e) return null;
	let t = Object.entries(e),
		n = {};
	for (let [r, o] of t)
		if (o && o.__type === "RouteErrorResponse")
			n[r] = new Cp(o.status, o.statusText, o.data, o.internal === !0);
		else if (o && o.__type === "Error") {
			if (o.__subType) {
				let i = window[o.__subType];
				if (typeof i == "function")
					try {
						let s = new i(o.message);
						(s.stack = ""), (n[r] = s);
					} catch {}
			}
			if (n[r] == null) {
				let i = new Error(o.message);
				(i.stack = ""), (n[r] = i);
			}
		} else n[r] = o;
	return n;
}
const Np = p.createContext({ isTransitioning: !1 }),
	Tp = p.createContext(new Map()),
	ZT = "startTransition",
	zr = xs[ZT],
	e_ = "flushSync",
	dv = O1[e_],
	t_ = "useId",
	fv = xs[t_];
function n_(e) {
	zr ? zr(e) : e();
}
function Ji(e) {
	dv ? dv(e) : e();
}
class r_ {
	constructor() {
		(this.status = "pending"),
			(this.promise = new Promise((t, n) => {
				(this.resolve = (r) => {
					this.status === "pending" &&
						((this.status = "resolved"), t(r));
				}),
					(this.reject = (r) => {
						this.status === "pending" &&
							((this.status = "rejected"), n(r));
					});
			}));
	}
}
function o_(e) {
	let { fallbackElement: t, router: n, future: r } = e,
		[o, i] = p.useState(n.state),
		[s, a] = p.useState(),
		[l, u] = p.useState({ isTransitioning: !1 }),
		[d, f] = p.useState(),
		[h, m] = p.useState(),
		[y, w] = p.useState(),
		S = p.useRef(new Map()),
		{ v7_startTransition: g } = r || {},
		x = p.useCallback(
			(O) => {
				g ? n_(O) : O();
			},
			[g]
		),
		v = p.useCallback(
			(O, R) => {
				let {
					deletedFetchers: D,
					unstable_flushSync: N,
					unstable_viewTransitionOpts: L,
				} = R;
				D.forEach((B) => S.current.delete(B)),
					O.fetchers.forEach((B, J) => {
						B.data !== void 0 && S.current.set(J, B.data);
					});
				let $ =
					n.window == null ||
					typeof n.window.document.startViewTransition != "function";
				if (!L || $) {
					N ? Ji(() => i(O)) : x(() => i(O));
					return;
				}
				if (N) {
					Ji(() => {
						h && (d && d.resolve(), h.skipTransition()),
							u({
								isTransitioning: !0,
								flushSync: !0,
								currentLocation: L.currentLocation,
								nextLocation: L.nextLocation,
							});
					});
					let B = n.window.document.startViewTransition(() => {
						Ji(() => i(O));
					});
					B.finished.finally(() => {
						Ji(() => {
							f(void 0),
								m(void 0),
								a(void 0),
								u({ isTransitioning: !1 });
						});
					}),
						Ji(() => m(B));
					return;
				}
				h
					? (d && d.resolve(),
					  h.skipTransition(),
					  w({
							state: O,
							currentLocation: L.currentLocation,
							nextLocation: L.nextLocation,
					  }))
					: (a(O),
					  u({
							isTransitioning: !0,
							flushSync: !1,
							currentLocation: L.currentLocation,
							nextLocation: L.nextLocation,
					  }));
			},
			[n.window, h, d, S, x]
		);
	p.useLayoutEffect(() => n.subscribe(v), [n, v]),
		p.useEffect(() => {
			l.isTransitioning && !l.flushSync && f(new r_());
		}, [l]),
		p.useEffect(() => {
			if (d && s && n.window) {
				let O = s,
					R = d.promise,
					D = n.window.document.startViewTransition(async () => {
						x(() => i(O)), await R;
					});
				D.finished.finally(() => {
					f(void 0), m(void 0), a(void 0), u({ isTransitioning: !1 });
				}),
					m(D);
			}
		}, [x, s, d, n.window]),
		p.useEffect(() => {
			d && s && o.location.key === s.location.key && d.resolve();
		}, [d, h, o.location, s]),
		p.useEffect(() => {
			!l.isTransitioning &&
				y &&
				(a(y.state),
				u({
					isTransitioning: !0,
					flushSync: !1,
					currentLocation: y.currentLocation,
					nextLocation: y.nextLocation,
				}),
				w(void 0));
		}, [l.isTransitioning, y]),
		p.useEffect(() => {}, []);
	let C = p.useMemo(
			() => ({
				createHref: n.createHref,
				encodeLocation: n.encodeLocation,
				go: (O) => n.navigate(O),
				push: (O, R, D) =>
					n.navigate(O, {
						state: R,
						preventScrollReset:
							D == null ? void 0 : D.preventScrollReset,
					}),
				replace: (O, R, D) =>
					n.navigate(O, {
						replace: !0,
						state: R,
						preventScrollReset:
							D == null ? void 0 : D.preventScrollReset,
					}),
			}),
			[n]
		),
		j = n.basename || "/",
		E = p.useMemo(
			() => ({ router: n, navigator: C, static: !1, basename: j }),
			[n, C, j]
		);
	return p.createElement(
		p.Fragment,
		null,
		p.createElement(
			Pi.Provider,
			{ value: E },
			p.createElement(
				aa.Provider,
				{ value: o },
				p.createElement(
					Tp.Provider,
					{ value: S.current },
					p.createElement(
						Np.Provider,
						{ value: l },
						p.createElement(
							_i,
							{
								basename: j,
								location: o.location,
								navigationType: o.historyAction,
								navigator: C,
								future: {
									v7_relativeSplatPath:
										n.future.v7_relativeSplatPath,
								},
							},
							o.initialized || n.future.v7_partialHydration
								? p.createElement(i_, {
										routes: n.routes,
										future: n.future,
										state: o,
								  })
								: t
						)
					)
				)
			)
		),
		null
	);
}
function i_(e) {
	let { routes: t, future: n, state: r } = e;
	return iS(t, void 0, r, n);
}
function s_(e) {
	let { basename: t, children: n, future: r, window: o } = e,
		i = p.useRef();
	i.current == null && (i.current = Mw({ window: o, v5Compat: !0 }));
	let s = i.current,
		[a, l] = p.useState({ action: s.action, location: s.location }),
		{ v7_startTransition: u } = r || {},
		d = p.useCallback(
			(f) => {
				u && zr ? zr(() => l(f)) : l(f);
			},
			[l, u]
		);
	return (
		p.useLayoutEffect(() => s.listen(d), [s, d]),
		p.createElement(_i, {
			basename: t,
			children: n,
			location: a.location,
			navigationType: a.action,
			navigator: s,
			future: r,
		})
	);
}
function mS(e) {
	let { basename: t, children: n, future: r, window: o } = e,
		i = p.useRef();
	i.current == null && (i.current = $w({ window: o, v5Compat: !0 }));
	let s = i.current,
		[a, l] = p.useState({ action: s.action, location: s.location }),
		{ v7_startTransition: u } = r || {},
		d = p.useCallback(
			(f) => {
				u && zr ? zr(() => l(f)) : l(f);
			},
			[l, u]
		);
	return (
		p.useLayoutEffect(() => s.listen(d), [s, d]),
		p.createElement(_i, {
			basename: t,
			children: n,
			location: a.location,
			navigationType: a.action,
			navigator: s,
			future: r,
		})
	);
}
function a_(e) {
	let { basename: t, children: n, future: r, history: o } = e,
		[i, s] = p.useState({ action: o.action, location: o.location }),
		{ v7_startTransition: a } = r || {},
		l = p.useCallback(
			(u) => {
				a && zr ? zr(() => s(u)) : s(u);
			},
			[s, a]
		);
	return (
		p.useLayoutEffect(() => o.listen(l), [o, l]),
		p.createElement(_i, {
			basename: t,
			children: n,
			location: i.location,
			navigationType: i.action,
			navigator: o,
			future: r,
		})
	);
}
const l_ =
		typeof window < "u" &&
		typeof window.document < "u" &&
		typeof window.document.createElement < "u",
	u_ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	xt = p.forwardRef(function (t, n) {
		let {
				onClick: r,
				relative: o,
				reloadDocument: i,
				replace: s,
				state: a,
				target: l,
				to: u,
				preventScrollReset: d,
				unstable_viewTransition: f,
			} = t,
			h = kp(t, QT),
			{ basename: m } = p.useContext(Vt),
			y,
			w = !1;
		if (typeof u == "string" && u_.test(u) && ((y = u), l_))
			try {
				let v = new URL(window.location.href),
					C = u.startsWith("//")
						? new URL(v.protocol + u)
						: new URL(u),
					j = Dt(C.pathname, m);
				C.origin === v.origin && j != null
					? (u = j + C.search + C.hash)
					: (w = !0);
			} catch {}
		let S = eS(u, { relative: o }),
			g = yS(u, {
				replace: s,
				state: a,
				target: l,
				preventScrollReset: d,
				relative: o,
				unstable_viewTransition: f,
			});
		function x(v) {
			r && r(v), v.defaultPrevented || g(v);
		}
		return p.createElement(
			"a",
			_t({}, h, {
				href: y || S,
				onClick: w || i ? r : x,
				ref: n,
				target: l,
			})
		);
	}),
	c_ = p.forwardRef(function (t, n) {
		let {
				"aria-current": r = "page",
				caseSensitive: o = !1,
				className: i = "",
				end: s = !1,
				style: a,
				to: l,
				unstable_viewTransition: u,
				children: d,
			} = t,
			f = kp(t, VT),
			h = Ti(l, { relative: f.relative }),
			m = hn(),
			y = p.useContext(aa),
			{ navigator: w, basename: S } = p.useContext(Vt),
			g = y != null && SS(h) && u === !0,
			x = w.encodeLocation ? w.encodeLocation(h).pathname : h.pathname,
			v = m.pathname,
			C =
				y && y.navigation && y.navigation.location
					? y.navigation.location.pathname
					: null;
		o ||
			((v = v.toLowerCase()),
			(C = C ? C.toLowerCase() : null),
			(x = x.toLowerCase())),
			C && S && (C = Dt(C, S) || C);
		const j = x !== "/" && x.endsWith("/") ? x.length - 1 : x.length;
		let E = v === x || (!s && v.startsWith(x) && v.charAt(j) === "/"),
			O =
				C != null &&
				(C === x ||
					(!s && C.startsWith(x) && C.charAt(x.length) === "/")),
			R = { isActive: E, isPending: O, isTransitioning: g },
			D = E ? r : void 0,
			N;
		typeof i == "function"
			? (N = i(R))
			: (N = [
					i,
					E ? "active" : null,
					O ? "pending" : null,
					g ? "transitioning" : null,
			  ]
					.filter(Boolean)
					.join(" "));
		let L = typeof a == "function" ? a(R) : a;
		return p.createElement(
			xt,
			_t({}, f, {
				"aria-current": D,
				className: N,
				ref: n,
				style: L,
				to: l,
				unstable_viewTransition: u,
			}),
			typeof d == "function" ? d(R) : d
		);
	}),
	vS = p.forwardRef((e, t) => {
		let {
				fetcherKey: n,
				navigate: r,
				reloadDocument: o,
				replace: i,
				state: s,
				method: a = el,
				action: l,
				onSubmit: u,
				relative: d,
				preventScrollReset: f,
				unstable_viewTransition: h,
			} = e,
			m = kp(e, qT),
			y = Dp(),
			w = xS(l, { relative: d }),
			S = a.toLowerCase() === "get" ? "get" : "post",
			g = (x) => {
				if ((u && u(x), x.defaultPrevented)) return;
				x.preventDefault();
				let v = x.nativeEvent.submitter,
					C =
						(v == null ? void 0 : v.getAttribute("formmethod")) ||
						a;
				y(v || x.currentTarget, {
					fetcherKey: n,
					method: C,
					navigate: r,
					replace: i,
					state: s,
					relative: d,
					preventScrollReset: f,
					unstable_viewTransition: h,
				});
			};
		return p.createElement(
			"form",
			_t({ ref: t, method: S, action: w, onSubmit: o ? u : g }, m)
		);
	});
function d_(e) {
	let { getKey: t, storageKey: n } = e;
	return wS({ getKey: t, storageKey: n }), null;
}
var gi;
(function (e) {
	(e.UseScrollRestoration = "useScrollRestoration"),
		(e.UseSubmit = "useSubmit"),
		(e.UseSubmitFetcher = "useSubmitFetcher"),
		(e.UseFetcher = "useFetcher"),
		(e.useViewTransitionState = "useViewTransitionState");
})(gi || (gi = {}));
var Ws;
(function (e) {
	(e.UseFetcher = "useFetcher"),
		(e.UseFetchers = "useFetchers"),
		(e.UseScrollRestoration = "useScrollRestoration");
})(Ws || (Ws = {}));
function Pu(e) {
	let t = p.useContext(Pi);
	return t || X(!1), t;
}
function _p(e) {
	let t = p.useContext(aa);
	return t || X(!1), t;
}
function yS(e, t) {
	let {
			target: n,
			replace: r,
			state: o,
			preventScrollReset: i,
			relative: s,
			unstable_viewTransition: a,
		} = t === void 0 ? {} : t,
		l = Ve(),
		u = hn(),
		d = Ti(e, { relative: s });
	return p.useCallback(
		(f) => {
			if (BT(f, n)) {
				f.preventDefault();
				let h = r !== void 0 ? r : kn(u) === kn(d);
				l(e, {
					replace: h,
					state: o,
					preventScrollReset: i,
					relative: s,
					unstable_viewTransition: a,
				});
			}
		},
		[u, l, d, r, o, n, e, i, s, a]
	);
}
function Po(e) {
	let t = p.useRef(Wl(e)),
		n = p.useRef(!1),
		r = hn(),
		o = p.useMemo(
			() => zT(r.search, n.current ? null : t.current),
			[r.search]
		),
		i = Ve(),
		s = p.useCallback(
			(a, l) => {
				const u = Wl(typeof a == "function" ? a(o) : a);
				(n.current = !0), i("?" + u, l);
			},
			[i, o]
		);
	return [o, s];
}
function f_() {
	if (typeof document > "u")
		throw new Error(
			"You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead."
		);
}
let p_ = 0,
	gS = () => "__" + String(++p_) + "__";
function Dp() {
	let { router: e } = Pu(gi.UseSubmit),
		{ basename: t } = p.useContext(Vt),
		n = aS();
	return p.useCallback(
		function (r, o) {
			o === void 0 && (o = {}), f_();
			let {
				action: i,
				method: s,
				encType: a,
				formData: l,
				body: u,
			} = WT(r, t);
			if (o.navigate === !1) {
				let d = o.fetcherKey || gS();
				e.fetch(d, n, o.action || i, {
					preventScrollReset: o.preventScrollReset,
					formData: l,
					body: u,
					formMethod: o.method || s,
					formEncType: o.encType || a,
					unstable_flushSync: o.unstable_flushSync,
				});
			} else
				e.navigate(o.action || i, {
					preventScrollReset: o.preventScrollReset,
					formData: l,
					body: u,
					formMethod: o.method || s,
					formEncType: o.encType || a,
					replace: o.replace,
					state: o.state,
					fromRouteId: n,
					unstable_flushSync: o.unstable_flushSync,
					unstable_viewTransition: o.unstable_viewTransition,
				});
		},
		[e, t, n]
	);
}
function xS(e, t) {
	let { relative: n } = t === void 0 ? {} : t,
		{ basename: r } = p.useContext(Vt),
		o = p.useContext(qt);
	o || X(!1);
	let [i] = o.matches.slice(-1),
		s = _t({}, Ti(e || ".", { relative: n })),
		a = hn();
	if (e == null) {
		s.search = a.search;
		let l = new URLSearchParams(s.search);
		l.has("index") &&
			l.get("index") === "" &&
			(l.delete("index"),
			(s.search = l.toString() ? "?" + l.toString() : ""));
	}
	return (
		(!e || e === ".") &&
			i.route.index &&
			(s.search = s.search
				? s.search.replace(/^\?/, "?index&")
				: "?index"),
		r !== "/" &&
			(s.pathname = s.pathname === "/" ? r : Hn([r, s.pathname])),
		kn(s)
	);
}
function h_(e) {
	var t;
	let { key: n } = e === void 0 ? {} : e,
		{ router: r } = Pu(gi.UseFetcher),
		o = _p(Ws.UseFetcher),
		i = p.useContext(Tp),
		s = p.useContext(qt),
		a = (t = s.matches[s.matches.length - 1]) == null ? void 0 : t.route.id;
	i || X(!1), s || X(!1), a == null && X(!1);
	let l = fv ? fv() : "",
		[u, d] = p.useState(n || l);
	n && n !== u ? d(n) : u || d(gS()),
		p.useEffect(
			() => (
				r.getFetcher(u),
				() => {
					r.deleteFetcher(u);
				}
			),
			[r, u]
		);
	let f = p.useCallback(
			(x, v) => {
				a || X(!1), r.fetch(u, a, x, v);
			},
			[u, a, r]
		),
		h = Dp(),
		m = p.useCallback(
			(x, v) => {
				h(x, _t({}, v, { navigate: !1, fetcherKey: u }));
			},
			[u, h]
		),
		y = p.useMemo(
			() =>
				p.forwardRef((v, C) =>
					p.createElement(
						vS,
						_t({}, v, { navigate: !1, fetcherKey: u, ref: C })
					)
				),
			[u]
		),
		w = o.fetchers.get(u) || Vw,
		S = i.get(u);
	return p.useMemo(
		() => _t({ Form: y, submit: m, load: f }, w, { data: S }),
		[y, m, f, w, S]
	);
}
function m_() {
	let e = _p(Ws.UseFetchers);
	return Array.from(e.fetchers.entries()).map((t) => {
		let [n, r] = t;
		return _t({}, r, { key: n });
	});
}
const pv = "react-router-scroll-positions";
let Ma = {};
function wS(e) {
	let { getKey: t, storageKey: n } = e === void 0 ? {} : e,
		{ router: r } = Pu(gi.UseScrollRestoration),
		{ restoreScrollPosition: o, preventScrollReset: i } = _p(
			Ws.UseScrollRestoration
		),
		{ basename: s } = p.useContext(Vt),
		a = hn(),
		l = uS(),
		u = lS();
	p.useEffect(
		() => (
			(window.history.scrollRestoration = "manual"),
			() => {
				window.history.scrollRestoration = "auto";
			}
		),
		[]
	),
		y_(
			p.useCallback(() => {
				if (u.state === "idle") {
					let d = (t ? t(a, l) : null) || a.key;
					Ma[d] = window.scrollY;
				}
				try {
					sessionStorage.setItem(n || pv, JSON.stringify(Ma));
				} catch {}
				window.history.scrollRestoration = "auto";
			}, [n, t, u.state, a, l])
		),
		typeof document < "u" &&
			(p.useLayoutEffect(() => {
				try {
					let d = sessionStorage.getItem(n || pv);
					d && (Ma = JSON.parse(d));
				} catch {}
			}, [n]),
			p.useLayoutEffect(() => {
				let d =
						t && s !== "/"
							? (h, m) =>
									t(
										_t({}, h, {
											pathname:
												Dt(h.pathname, s) || h.pathname,
										}),
										m
									)
							: t,
					f =
						r == null
							? void 0
							: r.enableScrollRestoration(
									Ma,
									() => window.scrollY,
									d
							  );
				return () => f && f();
			}, [r, s, t]),
			p.useLayoutEffect(() => {
				if (o !== !1) {
					if (typeof o == "number") {
						window.scrollTo(0, o);
						return;
					}
					if (a.hash) {
						let d = document.getElementById(
							decodeURIComponent(a.hash.slice(1))
						);
						if (d) {
							d.scrollIntoView();
							return;
						}
					}
					i !== !0 && window.scrollTo(0, 0);
				}
			}, [a, o, i]));
}
function v_(e, t) {
	let { capture: n } = t || {};
	p.useEffect(() => {
		let r = n != null ? { capture: n } : void 0;
		return (
			window.addEventListener("beforeunload", e, r),
			() => {
				window.removeEventListener("beforeunload", e, r);
			}
		);
	}, [e, n]);
}
function y_(e, t) {
	let { capture: n } = t || {};
	p.useEffect(() => {
		let r = n != null ? { capture: n } : void 0;
		return (
			window.addEventListener("pagehide", e, r),
			() => {
				window.removeEventListener("pagehide", e, r);
			}
		);
	}, [e, n]);
}
function g_(e) {
	let { when: t, message: n } = e,
		r = fS(t);
	p.useEffect(() => {
		r.state === "blocked" &&
			(window.confirm(n) ? setTimeout(r.proceed, 0) : r.reset());
	}, [r, n]),
		p.useEffect(() => {
			r.state === "blocked" && !t && r.reset();
		}, [r, t]);
}
function SS(e, t) {
	t === void 0 && (t = {});
	let n = p.useContext(Np);
	n == null && X(!1);
	let { basename: r } = Pu(gi.useViewTransitionState),
		o = Ti(e, { relative: t.relative });
	if (!n.isTransitioning) return !1;
	let i = Dt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
		s = Dt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
	return Hs(o.pathname, s) != null || Hs(o.pathname, i) != null;
}
const x_ = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			AbortedDeferredError: Hl,
			Await: TT,
			BrowserRouter: s_,
			Form: vS,
			HashRouter: mS,
			Link: xt,
			MemoryRouter: PT,
			NavLink: c_,
			Navigate: kT,
			get NavigationType() {
				return Re;
			},
			Outlet: NT,
			Route: it,
			Router: _i,
			RouterProvider: o_,
			Routes: pS,
			ScrollRestoration: d_,
			UNSAFE_DataRouterContext: Pi,
			UNSAFE_DataRouterStateContext: aa,
			UNSAFE_FetchersContext: Tp,
			UNSAFE_LocationContext: ki,
			UNSAFE_NavigationContext: Vt,
			UNSAFE_RouteContext: qt,
			UNSAFE_ViewTransitionContext: Np,
			UNSAFE_useRouteId: aS,
			UNSAFE_useScrollRestoration: wS,
			createBrowserRouter: XT,
			createHashRouter: JT,
			createMemoryRouter: AT,
			createPath: kn,
			createRoutesFromChildren: Ks,
			createRoutesFromElements: Ks,
			createSearchParams: Wl,
			defer: KN,
			generatePath: _N,
			isRouteErrorResponse: jp,
			json: UN,
			matchPath: Hs,
			matchRoutes: ao,
			parsePath: pn,
			redirect: Ww,
			redirectDocument: WN,
			renderMatches: IT,
			resolvePath: Hw,
			unstable_HistoryRouter: a_,
			unstable_usePrompt: g_,
			unstable_useViewTransitionState: SS,
			useActionData: ET,
			useAsyncError: CT,
			useAsyncValue: dS,
			useBeforeUnload: v_,
			useBlocker: fS,
			useFetcher: h_,
			useFetchers: m_,
			useFormAction: xS,
			useHref: eS,
			useInRouterContext: Vr,
			useLinkClickHandler: yS,
			useLoaderData: wT,
			useLocation: hn,
			useMatch: dT,
			useMatches: uS,
			useNavigate: Ve,
			useNavigation: lS,
			useNavigationType: cT,
			useOutlet: rS,
			useOutletContext: pT,
			useParams: Ni,
			useResolvedPath: Ti,
			useRevalidator: xT,
			useRouteError: cS,
			useRouteLoaderData: ST,
			useRoutes: oS,
			useSearchParams: Po,
			useSubmit: Dp,
		},
		Symbol.toStringTag,
		{ value: "Module" }
	)
);
var ct = {},
	ES = {};
const w_ = tE(x_);
(function (e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
	var t = i(p),
		n = i(L0),
		r = w_,
		o = [
			"children",
			"onClick",
			"replace",
			"to",
			"state",
			"activeClassName",
			"className",
			"activeStyle",
			"style",
			"isActive",
		];
	function i(w) {
		return w && w.__esModule ? w : { default: w };
	}
	function s(w, S) {
		var g = Object.keys(w);
		if (Object.getOwnPropertySymbols) {
			var x = Object.getOwnPropertySymbols(w);
			S &&
				(x = x.filter(function (v) {
					return Object.getOwnPropertyDescriptor(w, v).enumerable;
				})),
				g.push.apply(g, x);
		}
		return g;
	}
	function a(w) {
		for (var S = 1; S < arguments.length; S++) {
			var g = arguments[S] != null ? arguments[S] : {};
			S % 2
				? s(Object(g), !0).forEach(function (x) {
						l(w, x, g[x]);
				  })
				: Object.getOwnPropertyDescriptors
				? Object.defineProperties(
						w,
						Object.getOwnPropertyDescriptors(g)
				  )
				: s(Object(g)).forEach(function (x) {
						Object.defineProperty(
							w,
							x,
							Object.getOwnPropertyDescriptor(g, x)
						);
				  });
		}
		return w;
	}
	function l(w, S, g) {
		return (
			S in w
				? Object.defineProperty(w, S, {
						value: g,
						enumerable: !0,
						configurable: !0,
						writable: !0,
				  })
				: (w[S] = g),
			w
		);
	}
	function u(w) {
		"@babel/helpers - typeof";
		return (
			(u =
				typeof Symbol == "function" &&
				typeof Symbol.iterator == "symbol"
					? function (S) {
							return typeof S;
					  }
					: function (S) {
							return S &&
								typeof Symbol == "function" &&
								S.constructor === Symbol &&
								S !== Symbol.prototype
								? "symbol"
								: typeof S;
					  }),
			u(w)
		);
	}
	function d(w, S) {
		if (w == null) return {};
		var g = f(w, S),
			x,
			v;
		if (Object.getOwnPropertySymbols) {
			var C = Object.getOwnPropertySymbols(w);
			for (v = 0; v < C.length; v++)
				(x = C[v]),
					!(S.indexOf(x) >= 0) &&
						Object.prototype.propertyIsEnumerable.call(w, x) &&
						(g[x] = w[x]);
		}
		return g;
	}
	function f(w, S) {
		if (w == null) return {};
		var g = {},
			x = Object.keys(w),
			v,
			C;
		for (C = 0; C < x.length; C++)
			(v = x[C]), !(S.indexOf(v) >= 0) && (g[v] = w[v]);
		return g;
	}
	var h = function (S) {
			return !!(S.metaKey || S.altKey || S.ctrlKey || S.shiftKey);
		},
		m = function (S) {
			var g = S.children,
				x = S.onClick,
				v = S.replace,
				C = S.to,
				j = S.state,
				E = S.activeClassName,
				O = S.className,
				R = S.activeStyle,
				D = S.style,
				N = S.isActive,
				L = d(S, o),
				$ = u(C) === "object" ? C.pathname || "" : C,
				B = (0, r.useNavigate)(),
				J = (0, r.useHref)(typeof C == "string" ? { pathname: C } : C),
				oe = (0, r.useMatch)($),
				Y = (0, r.useLocation)(),
				K = t.default.Children.only(g),
				T = !!(N ? (typeof N == "function" ? N(oe, Y) : N) : oe),
				M = function (Q) {
					g.props.onClick && g.props.onClick(Q),
						x && x(Q),
						!Q.defaultPrevented &&
							Q.button === 0 &&
							!h(Q) &&
							(Q.preventDefault(),
							B(C, { replace: v, state: j }));
				};
			return t.default.cloneElement(
				K,
				a(
					a({}, L),
					{},
					{
						className: [O, K.props.className, T ? E : null]
							.join(" ")
							.trim(),
						style: T ? a(a({}, D), R) : D,
						href: J,
						onClick: M,
					}
				)
			);
		};
	(m.propTypes = {
		children: n.default.element.isRequired,
		onClick: n.default.func,
		replace: n.default.bool,
		to: n.default.oneOfType([n.default.string, n.default.object])
			.isRequired,
		state: n.default.object,
		className: n.default.string,
		activeClassName: n.default.string,
		style: n.default.objectOf(
			n.default.oneOfType([n.default.string, n.default.number])
		),
		activeStyle: n.default.objectOf(
			n.default.oneOfType([n.default.string, n.default.number])
		),
		isActive: n.default.oneOfType([n.default.func, n.default.bool]),
	}),
		(m.defaultProps = {
			replace: !1,
			activeClassName: "active",
			onClick: null,
			className: null,
			style: null,
			activeStyle: null,
			isActive: null,
		});
	var y = m;
	e.default = y;
})(ES);
(function (e) {
	Object.defineProperty(e, "__esModule", { value: !0 }),
		Object.defineProperty(e, "LinkContainer", {
			enumerable: !0,
			get: function () {
				return t.default;
			},
		});
	var t = n(ES);
	function n(r) {
		return r && r.__esModule ? r : { default: r };
	}
})(ct);
function S_() {
	const [e, t] = p.useState(""),
		n = Ve(),
		r = hn();
	function o(i) {
		i.preventDefault(), n(e ? `/?keyword=${e}&page=1` : r.pathname);
	}
	return c.jsxs(I, {
		onSubmit: o,
		className: "d-flex",
		children: [
			c.jsx(I.Control, {
				type: "text",
				name: "q",
				value: e,
				onChange: (i) => t(i.target.value),
				className: "mr-sm-2 ml-sm-5",
				style: { color: "black" },
			}),
			c.jsx(Ue, {
				type: "submit",
				variant: "outline-success",
				className: "p-2 px-4 mx-3",
				children: "Submit",
			}),
		],
	});
}
function E_() {
	const { userInfo: e } = Je((r) => r.userLogin),
		t = It();
	function n() {
		t(Nd(null)), t(mR()), t(fR()), t(RR());
	}
	return c.jsx("header", {
		children: c.jsx(Ia, {
			expand: "lg",
			className: "bg-body-tertiary",
			"data-bs-theme": "dark",
			collapseOnSelect: !0,
			children: c.jsxs(xu, {
				children: [
					c.jsx(ct.LinkContainer, {
						to: "/",
						children: c.jsx(Ia.Brand, { children: "ProShop" }),
					}),
					c.jsx(Ia.Toggle, { "aria-controls": "basic-navbar-nav" }),
					c.jsxs(Ia.Collapse, {
						id: "basic-navbar-nav",
						children: [
							c.jsx(S_, {}),
							c.jsxs(at, {
								style: { marginLeft: "auto" },
								children: [
									" ",
									c.jsx(ct.LinkContainer, {
										to: "/cart",
										children: c.jsxs(at.Link, {
											children: [
												c.jsx("i", {
													className:
														"fas fa-shopping-cart",
												}),
												"Cart",
											],
										}),
									}),
									e
										? c.jsxs(Yr, {
												title: e.name,
												children: [
													c.jsx(ct.LinkContainer, {
														to: "/profile",
														children: c.jsx(
															Yr.Item,
															{
																children:
																	"Profile",
															}
														),
													}),
													c.jsx(Yr.Item, {
														onClick: n,
														children: "Logout",
													}),
												],
										  })
										: c.jsxs(c.Fragment, {
												children: [
													c.jsx(ct.LinkContainer, {
														to: "/login",
														children: c.jsxs(
															at.Link,
															{
																children: [
																	c.jsx("i", {
																		className:
																			"fas fa-user",
																	}),
																	"Login",
																],
															}
														),
													}),
													c.jsx(ct.LinkContainer, {
														to: "/register",
														children: c.jsxs(
															at.Link,
															{
																children: [
																	c.jsx(
																		"i",
																		{}
																	),
																	"Register",
																],
															}
														),
													}),
												],
										  }),
									e &&
										e.isAdmin &&
										c.jsxs(Yr, {
											title: "Admin",
											id: "adminmenu",
											children: [
												c.jsx(ct.LinkContainer, {
													to: "/admin/userlist",
													children: c.jsx(Yr.Item, {
														children: "Users",
													}),
												}),
												c.jsx(ct.LinkContainer, {
													to: "/admin/productlist",
													children: c.jsx(Yr.Item, {
														children: "Products",
													}),
												}),
												c.jsx(ct.LinkContainer, {
													to: "/admin/orderlist",
													children: c.jsx(Yr.Item, {
														children: "Orders",
													}),
												}),
											],
										}),
								],
							}),
						],
					}),
				],
			}),
		}),
	});
}
function C_() {
	return c.jsx("footer", {
		children: c.jsx(xu, {
			children: c.jsx(Oe, {
				children: c.jsx(q, {
					className: "text-center py-3",
					children: "Copyright © ProShop",
				}),
			}),
		}),
	});
}
function qd({ value: e, text: t, color: n }) {
	const r = [];
	if (e !== void 0)
		for (let o = 1; o <= 5; o++)
			o <= e
				? r.push(
						c.jsx(
							"i",
							{ className: "fas fa-star", style: { color: n } },
							o
						)
				  )
				: o - 0.5 == e
				? r.push(
						c.jsx(
							"i",
							{
								className: "fas fa-star-half-alt",
								style: { color: n },
							},
							o
						)
				  )
				: r.push(
						c.jsx(
							"i",
							{ className: "far fa-star", style: { color: n } },
							o
						)
				  );
	return c.jsxs("div", {
		className: "rating",
		children: [
			c.jsx("span", { children: r }),
			c.jsx("span", { children: t && t }),
		],
	});
}
function CS(e, t) {
	return function () {
		return e.apply(t, arguments);
	};
}
const { toString: j_ } = Object.prototype,
	{ getPrototypeOf: Lp } = Object,
	ku = ((e) => (t) => {
		const n = j_.call(t);
		return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
	})(Object.create(null)),
	Wn = (e) => ((e = e.toLowerCase()), (t) => ku(t) === e),
	Nu = (e) => (t) => typeof t === e,
	{ isArray: Di } = Array,
	Qs = Nu("undefined");
function R_(e) {
	return (
		e !== null &&
		!Qs(e) &&
		e.constructor !== null &&
		!Qs(e.constructor) &&
		sn(e.constructor.isBuffer) &&
		e.constructor.isBuffer(e)
	);
}
const jS = Wn("ArrayBuffer");
function O_(e) {
	let t;
	return (
		typeof ArrayBuffer < "u" && ArrayBuffer.isView
			? (t = ArrayBuffer.isView(e))
			: (t = e && e.buffer && jS(e.buffer)),
		t
	);
}
const b_ = Nu("string"),
	sn = Nu("function"),
	RS = Nu("number"),
	Tu = (e) => e !== null && typeof e == "object",
	P_ = (e) => e === !0 || e === !1,
	tl = (e) => {
		if (ku(e) !== "object") return !1;
		const t = Lp(e);
		return (
			(t === null ||
				t === Object.prototype ||
				Object.getPrototypeOf(t) === null) &&
			!(Symbol.toStringTag in e) &&
			!(Symbol.iterator in e)
		);
	},
	k_ = Wn("Date"),
	N_ = Wn("File"),
	T_ = Wn("Blob"),
	__ = Wn("FileList"),
	D_ = (e) => Tu(e) && sn(e.pipe),
	L_ = (e) => {
		let t;
		return (
			e &&
			((typeof FormData == "function" && e instanceof FormData) ||
				(sn(e.append) &&
					((t = ku(e)) === "formdata" ||
						(t === "object" &&
							sn(e.toString) &&
							e.toString() === "[object FormData]"))))
		);
	},
	I_ = Wn("URLSearchParams"),
	A_ = (e) =>
		e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ua(e, t, { allOwnKeys: n = !1 } = {}) {
	if (e === null || typeof e > "u") return;
	let r, o;
	if ((typeof e != "object" && (e = [e]), Di(e)))
		for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
	else {
		const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
			s = i.length;
		let a;
		for (r = 0; r < s; r++) (a = i[r]), t.call(null, e[a], a, e);
	}
}
function OS(e, t) {
	t = t.toLowerCase();
	const n = Object.keys(e);
	let r = n.length,
		o;
	for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
	return null;
}
const bS =
		typeof globalThis < "u"
			? globalThis
			: typeof self < "u"
			? self
			: typeof window < "u"
			? window
			: global,
	PS = (e) => !Qs(e) && e !== bS;
function Gd() {
	const { caseless: e } = (PS(this) && this) || {},
		t = {},
		n = (r, o) => {
			const i = (e && OS(t, o)) || o;
			tl(t[i]) && tl(r)
				? (t[i] = Gd(t[i], r))
				: tl(r)
				? (t[i] = Gd({}, r))
				: Di(r)
				? (t[i] = r.slice())
				: (t[i] = r);
		};
	for (let r = 0, o = arguments.length; r < o; r++)
		arguments[r] && ua(arguments[r], n);
	return t;
}
const M_ = (e, t, n, { allOwnKeys: r } = {}) => (
		ua(
			t,
			(o, i) => {
				n && sn(o) ? (e[i] = CS(o, n)) : (e[i] = o);
			},
			{ allOwnKeys: r }
		),
		e
	),
	$_ = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
	F_ = (e, t, n, r) => {
		(e.prototype = Object.create(t.prototype, r)),
			(e.prototype.constructor = e),
			Object.defineProperty(e, "super", { value: t.prototype }),
			n && Object.assign(e.prototype, n);
	},
	U_ = (e, t, n, r) => {
		let o, i, s;
		const a = {};
		if (((t = t || {}), e == null)) return t;
		do {
			for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
				(s = o[i]),
					(!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
			e = n !== !1 && Lp(e);
		} while (e && (!n || n(e, t)) && e !== Object.prototype);
		return t;
	},
	B_ = (e, t, n) => {
		(e = String(e)),
			(n === void 0 || n > e.length) && (n = e.length),
			(n -= t.length);
		const r = e.indexOf(t, n);
		return r !== -1 && r === n;
	},
	z_ = (e) => {
		if (!e) return null;
		if (Di(e)) return e;
		let t = e.length;
		if (!RS(t)) return null;
		const n = new Array(t);
		for (; t-- > 0; ) n[t] = e[t];
		return n;
	},
	H_ = (
		(e) => (t) =>
			e && t instanceof e
	)(typeof Uint8Array < "u" && Lp(Uint8Array)),
	K_ = (e, t) => {
		const r = (e && e[Symbol.iterator]).call(e);
		let o;
		for (; (o = r.next()) && !o.done; ) {
			const i = o.value;
			t.call(e, i[0], i[1]);
		}
	},
	W_ = (e, t) => {
		let n;
		const r = [];
		for (; (n = e.exec(t)) !== null; ) r.push(n);
		return r;
	},
	Q_ = Wn("HTMLFormElement"),
	V_ = (e) =>
		e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
			return r.toUpperCase() + o;
		}),
	hv = (
		({ hasOwnProperty: e }) =>
		(t, n) =>
			e.call(t, n)
	)(Object.prototype),
	q_ = Wn("RegExp"),
	kS = (e, t) => {
		const n = Object.getOwnPropertyDescriptors(e),
			r = {};
		ua(n, (o, i) => {
			let s;
			(s = t(o, i, e)) !== !1 && (r[i] = s || o);
		}),
			Object.defineProperties(e, r);
	},
	G_ = (e) => {
		kS(e, (t, n) => {
			if (sn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
				return !1;
			const r = e[n];
			if (sn(r)) {
				if (((t.enumerable = !1), "writable" in t)) {
					t.writable = !1;
					return;
				}
				t.set ||
					(t.set = () => {
						throw Error(
							"Can not rewrite read-only method '" + n + "'"
						);
					});
			}
		});
	},
	X_ = (e, t) => {
		const n = {},
			r = (o) => {
				o.forEach((i) => {
					n[i] = !0;
				});
			};
		return Di(e) ? r(e) : r(String(e).split(t)), n;
	},
	J_ = () => {},
	Y_ = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
	bc = "abcdefghijklmnopqrstuvwxyz",
	mv = "0123456789",
	NS = { DIGIT: mv, ALPHA: bc, ALPHA_DIGIT: bc + bc.toUpperCase() + mv },
	Z_ = (e = 16, t = NS.ALPHA_DIGIT) => {
		let n = "";
		const { length: r } = t;
		for (; e--; ) n += t[(Math.random() * r) | 0];
		return n;
	};
function eD(e) {
	return !!(
		e &&
		sn(e.append) &&
		e[Symbol.toStringTag] === "FormData" &&
		e[Symbol.iterator]
	);
}
const tD = (e) => {
		const t = new Array(10),
			n = (r, o) => {
				if (Tu(r)) {
					if (t.indexOf(r) >= 0) return;
					if (!("toJSON" in r)) {
						t[o] = r;
						const i = Di(r) ? [] : {};
						return (
							ua(r, (s, a) => {
								const l = n(s, o + 1);
								!Qs(l) && (i[a] = l);
							}),
							(t[o] = void 0),
							i
						);
					}
				}
				return r;
			};
		return n(e, 0);
	},
	nD = Wn("AsyncFunction"),
	rD = (e) => e && (Tu(e) || sn(e)) && sn(e.then) && sn(e.catch),
	_ = {
		isArray: Di,
		isArrayBuffer: jS,
		isBuffer: R_,
		isFormData: L_,
		isArrayBufferView: O_,
		isString: b_,
		isNumber: RS,
		isBoolean: P_,
		isObject: Tu,
		isPlainObject: tl,
		isUndefined: Qs,
		isDate: k_,
		isFile: N_,
		isBlob: T_,
		isRegExp: q_,
		isFunction: sn,
		isStream: D_,
		isURLSearchParams: I_,
		isTypedArray: H_,
		isFileList: __,
		forEach: ua,
		merge: Gd,
		extend: M_,
		trim: A_,
		stripBOM: $_,
		inherits: F_,
		toFlatObject: U_,
		kindOf: ku,
		kindOfTest: Wn,
		endsWith: B_,
		toArray: z_,
		forEachEntry: K_,
		matchAll: W_,
		isHTMLForm: Q_,
		hasOwnProperty: hv,
		hasOwnProp: hv,
		reduceDescriptors: kS,
		freezeMethods: G_,
		toObjectSet: X_,
		toCamelCase: V_,
		noop: J_,
		toFiniteNumber: Y_,
		findKey: OS,
		global: bS,
		isContextDefined: PS,
		ALPHABET: NS,
		generateString: Z_,
		isSpecCompliantForm: eD,
		toJSONObject: tD,
		isAsyncFn: nD,
		isThenable: rD,
	};
function me(e, t, n, r, o) {
	Error.call(this),
		Error.captureStackTrace
			? Error.captureStackTrace(this, this.constructor)
			: (this.stack = new Error().stack),
		(this.message = e),
		(this.name = "AxiosError"),
		t && (this.code = t),
		n && (this.config = n),
		r && (this.request = r),
		o && (this.response = o);
}
_.inherits(me, Error, {
	toJSON: function () {
		return {
			message: this.message,
			name: this.name,
			description: this.description,
			number: this.number,
			fileName: this.fileName,
			lineNumber: this.lineNumber,
			columnNumber: this.columnNumber,
			stack: this.stack,
			config: _.toJSONObject(this.config),
			code: this.code,
			status:
				this.response && this.response.status
					? this.response.status
					: null,
		};
	},
});
const TS = me.prototype,
	_S = {};
[
	"ERR_BAD_OPTION_VALUE",
	"ERR_BAD_OPTION",
	"ECONNABORTED",
	"ETIMEDOUT",
	"ERR_NETWORK",
	"ERR_FR_TOO_MANY_REDIRECTS",
	"ERR_DEPRECATED",
	"ERR_BAD_RESPONSE",
	"ERR_BAD_REQUEST",
	"ERR_CANCELED",
	"ERR_NOT_SUPPORT",
	"ERR_INVALID_URL",
].forEach((e) => {
	_S[e] = { value: e };
});
Object.defineProperties(me, _S);
Object.defineProperty(TS, "isAxiosError", { value: !0 });
me.from = (e, t, n, r, o, i) => {
	const s = Object.create(TS);
	return (
		_.toFlatObject(
			e,
			s,
			function (l) {
				return l !== Error.prototype;
			},
			(a) => a !== "isAxiosError"
		),
		me.call(s, e.message, t, n, r, o),
		(s.cause = e),
		(s.name = e.name),
		i && Object.assign(s, i),
		s
	);
};
const oD = null;
function Xd(e) {
	return _.isPlainObject(e) || _.isArray(e);
}
function DS(e) {
	return _.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function vv(e, t, n) {
	return e
		? e
				.concat(t)
				.map(function (o, i) {
					return (o = DS(o)), !n && i ? "[" + o + "]" : o;
				})
				.join(n ? "." : "")
		: t;
}
function iD(e) {
	return _.isArray(e) && !e.some(Xd);
}
const sD = _.toFlatObject(_, {}, null, function (t) {
	return /^is[A-Z]/.test(t);
});
function _u(e, t, n) {
	if (!_.isObject(e)) throw new TypeError("target must be an object");
	(t = t || new FormData()),
		(n = _.toFlatObject(
			n,
			{ metaTokens: !0, dots: !1, indexes: !1 },
			!1,
			function (w, S) {
				return !_.isUndefined(S[w]);
			}
		));
	const r = n.metaTokens,
		o = n.visitor || d,
		i = n.dots,
		s = n.indexes,
		l = (n.Blob || (typeof Blob < "u" && Blob)) && _.isSpecCompliantForm(t);
	if (!_.isFunction(o)) throw new TypeError("visitor must be a function");
	function u(y) {
		if (y === null) return "";
		if (_.isDate(y)) return y.toISOString();
		if (!l && _.isBlob(y))
			throw new me("Blob is not supported. Use a Buffer instead.");
		return _.isArrayBuffer(y) || _.isTypedArray(y)
			? l && typeof Blob == "function"
				? new Blob([y])
				: Buffer.from(y)
			: y;
	}
	function d(y, w, S) {
		let g = y;
		if (y && !S && typeof y == "object") {
			if (_.endsWith(w, "{}"))
				(w = r ? w : w.slice(0, -2)), (y = JSON.stringify(y));
			else if (
				(_.isArray(y) && iD(y)) ||
				((_.isFileList(y) || _.endsWith(w, "[]")) && (g = _.toArray(y)))
			)
				return (
					(w = DS(w)),
					g.forEach(function (v, C) {
						!(_.isUndefined(v) || v === null) &&
							t.append(
								s === !0
									? vv([w], C, i)
									: s === null
									? w
									: w + "[]",
								u(v)
							);
					}),
					!1
				);
		}
		return Xd(y) ? !0 : (t.append(vv(S, w, i), u(y)), !1);
	}
	const f = [],
		h = Object.assign(sD, {
			defaultVisitor: d,
			convertValue: u,
			isVisitable: Xd,
		});
	function m(y, w) {
		if (!_.isUndefined(y)) {
			if (f.indexOf(y) !== -1)
				throw Error("Circular reference detected in " + w.join("."));
			f.push(y),
				_.forEach(y, function (g, x) {
					(!(_.isUndefined(g) || g === null) &&
						o.call(t, g, _.isString(x) ? x.trim() : x, w, h)) ===
						!0 && m(g, w ? w.concat(x) : [x]);
				}),
				f.pop();
		}
	}
	if (!_.isObject(e)) throw new TypeError("data must be an object");
	return m(e), t;
}
function yv(e) {
	const t = {
		"!": "%21",
		"'": "%27",
		"(": "%28",
		")": "%29",
		"~": "%7E",
		"%20": "+",
		"%00": "\0",
	};
	return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
		return t[r];
	});
}
function Ip(e, t) {
	(this._pairs = []), e && _u(e, this, t);
}
const LS = Ip.prototype;
LS.append = function (t, n) {
	this._pairs.push([t, n]);
};
LS.toString = function (t) {
	const n = t
		? function (r) {
				return t.call(this, r, yv);
		  }
		: yv;
	return this._pairs
		.map(function (o) {
			return n(o[0]) + "=" + n(o[1]);
		}, "")
		.join("&");
};
function aD(e) {
	return encodeURIComponent(e)
		.replace(/%3A/gi, ":")
		.replace(/%24/g, "$")
		.replace(/%2C/gi, ",")
		.replace(/%20/g, "+")
		.replace(/%5B/gi, "[")
		.replace(/%5D/gi, "]");
}
function IS(e, t, n) {
	if (!t) return e;
	const r = (n && n.encode) || aD,
		o = n && n.serialize;
	let i;
	if (
		(o
			? (i = o(t, n))
			: (i = _.isURLSearchParams(t)
					? t.toString()
					: new Ip(t, n).toString(r)),
		i)
	) {
		const s = e.indexOf("#");
		s !== -1 && (e = e.slice(0, s)),
			(e += (e.indexOf("?") === -1 ? "?" : "&") + i);
	}
	return e;
}
class gv {
	constructor() {
		this.handlers = [];
	}
	use(t, n, r) {
		return (
			this.handlers.push({
				fulfilled: t,
				rejected: n,
				synchronous: r ? r.synchronous : !1,
				runWhen: r ? r.runWhen : null,
			}),
			this.handlers.length - 1
		);
	}
	eject(t) {
		this.handlers[t] && (this.handlers[t] = null);
	}
	clear() {
		this.handlers && (this.handlers = []);
	}
	forEach(t) {
		_.forEach(this.handlers, function (r) {
			r !== null && t(r);
		});
	}
}
const AS = {
		silentJSONParsing: !0,
		forcedJSONParsing: !0,
		clarifyTimeoutError: !1,
	},
	lD = typeof URLSearchParams < "u" ? URLSearchParams : Ip,
	uD = typeof FormData < "u" ? FormData : null,
	cD = typeof Blob < "u" ? Blob : null,
	dD = {
		isBrowser: !0,
		classes: { URLSearchParams: lD, FormData: uD, Blob: cD },
		protocols: ["http", "https", "file", "blob", "url", "data"],
	},
	MS = typeof window < "u" && typeof document < "u",
	fD = ((e) => MS && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
		typeof navigator < "u" && navigator.product
	),
	pD =
		typeof WorkerGlobalScope < "u" &&
		self instanceof WorkerGlobalScope &&
		typeof self.importScripts == "function",
	hD = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				hasBrowserEnv: MS,
				hasStandardBrowserEnv: fD,
				hasStandardBrowserWebWorkerEnv: pD,
			},
			Symbol.toStringTag,
			{ value: "Module" }
		)
	),
	$n = { ...hD, ...dD };
function mD(e, t) {
	return _u(
		e,
		new $n.classes.URLSearchParams(),
		Object.assign(
			{
				visitor: function (n, r, o, i) {
					return $n.isNode && _.isBuffer(n)
						? (this.append(r, n.toString("base64")), !1)
						: i.defaultVisitor.apply(this, arguments);
				},
			},
			t
		)
	);
}
function vD(e) {
	return _.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
		t[0] === "[]" ? "" : t[1] || t[0]
	);
}
function yD(e) {
	const t = {},
		n = Object.keys(e);
	let r;
	const o = n.length;
	let i;
	for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
	return t;
}
function $S(e) {
	function t(n, r, o, i) {
		let s = n[i++];
		if (s === "__proto__") return !0;
		const a = Number.isFinite(+s),
			l = i >= n.length;
		return (
			(s = !s && _.isArray(o) ? o.length : s),
			l
				? (_.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !a)
				: ((!o[s] || !_.isObject(o[s])) && (o[s] = []),
				  t(n, r, o[s], i) && _.isArray(o[s]) && (o[s] = yD(o[s])),
				  !a)
		);
	}
	if (_.isFormData(e) && _.isFunction(e.entries)) {
		const n = {};
		return (
			_.forEachEntry(e, (r, o) => {
				t(vD(r), o, n, 0);
			}),
			n
		);
	}
	return null;
}
function gD(e, t, n) {
	if (_.isString(e))
		try {
			return (t || JSON.parse)(e), _.trim(e);
		} catch (r) {
			if (r.name !== "SyntaxError") throw r;
		}
	return (n || JSON.stringify)(e);
}
const Ap = {
	transitional: AS,
	adapter: ["xhr", "http"],
	transformRequest: [
		function (t, n) {
			const r = n.getContentType() || "",
				o = r.indexOf("application/json") > -1,
				i = _.isObject(t);
			if (
				(i && _.isHTMLForm(t) && (t = new FormData(t)), _.isFormData(t))
			)
				return o ? JSON.stringify($S(t)) : t;
			if (
				_.isArrayBuffer(t) ||
				_.isBuffer(t) ||
				_.isStream(t) ||
				_.isFile(t) ||
				_.isBlob(t)
			)
				return t;
			if (_.isArrayBufferView(t)) return t.buffer;
			if (_.isURLSearchParams(t))
				return (
					n.setContentType(
						"application/x-www-form-urlencoded;charset=utf-8",
						!1
					),
					t.toString()
				);
			let a;
			if (i) {
				if (r.indexOf("application/x-www-form-urlencoded") > -1)
					return mD(t, this.formSerializer).toString();
				if (
					(a = _.isFileList(t)) ||
					r.indexOf("multipart/form-data") > -1
				) {
					const l = this.env && this.env.FormData;
					return _u(
						a ? { "files[]": t } : t,
						l && new l(),
						this.formSerializer
					);
				}
			}
			return i || o
				? (n.setContentType("application/json", !1), gD(t))
				: t;
		},
	],
	transformResponse: [
		function (t) {
			const n = this.transitional || Ap.transitional,
				r = n && n.forcedJSONParsing,
				o = this.responseType === "json";
			if (t && _.isString(t) && ((r && !this.responseType) || o)) {
				const s = !(n && n.silentJSONParsing) && o;
				try {
					return JSON.parse(t);
				} catch (a) {
					if (s)
						throw a.name === "SyntaxError"
							? me.from(
									a,
									me.ERR_BAD_RESPONSE,
									this,
									null,
									this.response
							  )
							: a;
				}
			}
			return t;
		},
	],
	timeout: 0,
	xsrfCookieName: "XSRF-TOKEN",
	xsrfHeaderName: "X-XSRF-TOKEN",
	maxContentLength: -1,
	maxBodyLength: -1,
	env: { FormData: $n.classes.FormData, Blob: $n.classes.Blob },
	validateStatus: function (t) {
		return t >= 200 && t < 300;
	},
	headers: {
		common: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": void 0,
		},
	},
};
_.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
	Ap.headers[e] = {};
});
const Mp = Ap,
	xD = _.toObjectSet([
		"age",
		"authorization",
		"content-length",
		"content-type",
		"etag",
		"expires",
		"from",
		"host",
		"if-modified-since",
		"if-unmodified-since",
		"last-modified",
		"location",
		"max-forwards",
		"proxy-authorization",
		"referer",
		"retry-after",
		"user-agent",
	]),
	wD = (e) => {
		const t = {};
		let n, r, o;
		return (
			e &&
				e
					.split(
						`
`
					)
					.forEach(function (s) {
						(o = s.indexOf(":")),
							(n = s.substring(0, o).trim().toLowerCase()),
							(r = s.substring(o + 1).trim()),
							!(!n || (t[n] && xD[n])) &&
								(n === "set-cookie"
									? t[n]
										? t[n].push(r)
										: (t[n] = [r])
									: (t[n] = t[n] ? t[n] + ", " + r : r));
					}),
			t
		);
	},
	xv = Symbol("internals");
function Yi(e) {
	return e && String(e).trim().toLowerCase();
}
function nl(e) {
	return e === !1 || e == null ? e : _.isArray(e) ? e.map(nl) : String(e);
}
function SD(e) {
	const t = Object.create(null),
		n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
	let r;
	for (; (r = n.exec(e)); ) t[r[1]] = r[2];
	return t;
}
const ED = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Pc(e, t, n, r, o) {
	if (_.isFunction(r)) return r.call(this, t, n);
	if ((o && (t = n), !!_.isString(t))) {
		if (_.isString(r)) return t.indexOf(r) !== -1;
		if (_.isRegExp(r)) return r.test(t);
	}
}
function CD(e) {
	return e
		.trim()
		.toLowerCase()
		.replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function jD(e, t) {
	const n = _.toCamelCase(" " + t);
	["get", "set", "has"].forEach((r) => {
		Object.defineProperty(e, r + n, {
			value: function (o, i, s) {
				return this[r].call(this, t, o, i, s);
			},
			configurable: !0,
		});
	});
}
class Du {
	constructor(t) {
		t && this.set(t);
	}
	set(t, n, r) {
		const o = this;
		function i(a, l, u) {
			const d = Yi(l);
			if (!d) throw new Error("header name must be a non-empty string");
			const f = _.findKey(o, d);
			(!f ||
				o[f] === void 0 ||
				u === !0 ||
				(u === void 0 && o[f] !== !1)) &&
				(o[f || l] = nl(a));
		}
		const s = (a, l) => _.forEach(a, (u, d) => i(u, d, l));
		return (
			_.isPlainObject(t) || t instanceof this.constructor
				? s(t, n)
				: _.isString(t) && (t = t.trim()) && !ED(t)
				? s(wD(t), n)
				: t != null && i(n, t, r),
			this
		);
	}
	get(t, n) {
		if (((t = Yi(t)), t)) {
			const r = _.findKey(this, t);
			if (r) {
				const o = this[r];
				if (!n) return o;
				if (n === !0) return SD(o);
				if (_.isFunction(n)) return n.call(this, o, r);
				if (_.isRegExp(n)) return n.exec(o);
				throw new TypeError("parser must be boolean|regexp|function");
			}
		}
	}
	has(t, n) {
		if (((t = Yi(t)), t)) {
			const r = _.findKey(this, t);
			return !!(
				r &&
				this[r] !== void 0 &&
				(!n || Pc(this, this[r], r, n))
			);
		}
		return !1;
	}
	delete(t, n) {
		const r = this;
		let o = !1;
		function i(s) {
			if (((s = Yi(s)), s)) {
				const a = _.findKey(r, s);
				a && (!n || Pc(r, r[a], a, n)) && (delete r[a], (o = !0));
			}
		}
		return _.isArray(t) ? t.forEach(i) : i(t), o;
	}
	clear(t) {
		const n = Object.keys(this);
		let r = n.length,
			o = !1;
		for (; r--; ) {
			const i = n[r];
			(!t || Pc(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
		}
		return o;
	}
	normalize(t) {
		const n = this,
			r = {};
		return (
			_.forEach(this, (o, i) => {
				const s = _.findKey(r, i);
				if (s) {
					(n[s] = nl(o)), delete n[i];
					return;
				}
				const a = t ? CD(i) : String(i).trim();
				a !== i && delete n[i], (n[a] = nl(o)), (r[a] = !0);
			}),
			this
		);
	}
	concat(...t) {
		return this.constructor.concat(this, ...t);
	}
	toJSON(t) {
		const n = Object.create(null);
		return (
			_.forEach(this, (r, o) => {
				r != null &&
					r !== !1 &&
					(n[o] = t && _.isArray(r) ? r.join(", ") : r);
			}),
			n
		);
	}
	[Symbol.iterator]() {
		return Object.entries(this.toJSON())[Symbol.iterator]();
	}
	toString() {
		return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n)
			.join(`
`);
	}
	get [Symbol.toStringTag]() {
		return "AxiosHeaders";
	}
	static from(t) {
		return t instanceof this ? t : new this(t);
	}
	static concat(t, ...n) {
		const r = new this(t);
		return n.forEach((o) => r.set(o)), r;
	}
	static accessor(t) {
		const r = (this[xv] = this[xv] = { accessors: {} }).accessors,
			o = this.prototype;
		function i(s) {
			const a = Yi(s);
			r[a] || (jD(o, s), (r[a] = !0));
		}
		return _.isArray(t) ? t.forEach(i) : i(t), this;
	}
}
Du.accessor([
	"Content-Type",
	"Content-Length",
	"Accept",
	"Accept-Encoding",
	"User-Agent",
	"Authorization",
]);
_.reduceDescriptors(Du.prototype, ({ value: e }, t) => {
	let n = t[0].toUpperCase() + t.slice(1);
	return {
		get: () => e,
		set(r) {
			this[n] = r;
		},
	};
});
_.freezeMethods(Du);
const rr = Du;
function kc(e, t) {
	const n = this || Mp,
		r = t || n,
		o = rr.from(r.headers);
	let i = r.data;
	return (
		_.forEach(e, function (a) {
			i = a.call(n, i, o.normalize(), t ? t.status : void 0);
		}),
		o.normalize(),
		i
	);
}
function FS(e) {
	return !!(e && e.__CANCEL__);
}
function ca(e, t, n) {
	me.call(this, e ?? "canceled", me.ERR_CANCELED, t, n),
		(this.name = "CanceledError");
}
_.inherits(ca, me, { __CANCEL__: !0 });
function RD(e, t, n) {
	const r = n.config.validateStatus;
	!n.status || !r || r(n.status)
		? e(n)
		: t(
				new me(
					"Request failed with status code " + n.status,
					[me.ERR_BAD_REQUEST, me.ERR_BAD_RESPONSE][
						Math.floor(n.status / 100) - 4
					],
					n.config,
					n.request,
					n
				)
		  );
}
const OD = $n.hasStandardBrowserEnv
	? {
			write(e, t, n, r, o, i) {
				const s = [e + "=" + encodeURIComponent(t)];
				_.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
					_.isString(r) && s.push("path=" + r),
					_.isString(o) && s.push("domain=" + o),
					i === !0 && s.push("secure"),
					(document.cookie = s.join("; "));
			},
			read(e) {
				const t = document.cookie.match(
					new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
				);
				return t ? decodeURIComponent(t[3]) : null;
			},
			remove(e) {
				this.write(e, "", Date.now() - 864e5);
			},
	  }
	: {
			write() {},
			read() {
				return null;
			},
			remove() {},
	  };
function bD(e) {
	return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function PD(e, t) {
	return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function US(e, t) {
	return e && !bD(t) ? PD(e, t) : t;
}
const kD = $n.hasStandardBrowserEnv
	? (function () {
			const t = /(msie|trident)/i.test(navigator.userAgent),
				n = document.createElement("a");
			let r;
			function o(i) {
				let s = i;
				return (
					t && (n.setAttribute("href", s), (s = n.href)),
					n.setAttribute("href", s),
					{
						href: n.href,
						protocol: n.protocol
							? n.protocol.replace(/:$/, "")
							: "",
						host: n.host,
						search: n.search ? n.search.replace(/^\?/, "") : "",
						hash: n.hash ? n.hash.replace(/^#/, "") : "",
						hostname: n.hostname,
						port: n.port,
						pathname:
							n.pathname.charAt(0) === "/"
								? n.pathname
								: "/" + n.pathname,
					}
				);
			}
			return (
				(r = o(window.location.href)),
				function (s) {
					const a = _.isString(s) ? o(s) : s;
					return a.protocol === r.protocol && a.host === r.host;
				}
			);
	  })()
	: (function () {
			return function () {
				return !0;
			};
	  })();
function ND(e) {
	const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
	return (t && t[1]) || "";
}
function TD(e, t) {
	e = e || 10;
	const n = new Array(e),
		r = new Array(e);
	let o = 0,
		i = 0,
		s;
	return (
		(t = t !== void 0 ? t : 1e3),
		function (l) {
			const u = Date.now(),
				d = r[i];
			s || (s = u), (n[o] = l), (r[o] = u);
			let f = i,
				h = 0;
			for (; f !== o; ) (h += n[f++]), (f = f % e);
			if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t))
				return;
			const m = d && u - d;
			return m ? Math.round((h * 1e3) / m) : void 0;
		}
	);
}
function wv(e, t) {
	let n = 0;
	const r = TD(50, 250);
	return (o) => {
		const i = o.loaded,
			s = o.lengthComputable ? o.total : void 0,
			a = i - n,
			l = r(a),
			u = i <= s;
		n = i;
		const d = {
			loaded: i,
			total: s,
			progress: s ? i / s : void 0,
			bytes: a,
			rate: l || void 0,
			estimated: l && s && u ? (s - i) / l : void 0,
			event: o,
		};
		(d[t ? "download" : "upload"] = !0), e(d);
	};
}
const _D = typeof XMLHttpRequest < "u",
	DD =
		_D &&
		function (e) {
			return new Promise(function (n, r) {
				let o = e.data;
				const i = rr.from(e.headers).normalize();
				let { responseType: s, withXSRFToken: a } = e,
					l;
				function u() {
					e.cancelToken && e.cancelToken.unsubscribe(l),
						e.signal && e.signal.removeEventListener("abort", l);
				}
				let d;
				if (_.isFormData(o)) {
					if (
						$n.hasStandardBrowserEnv ||
						$n.hasStandardBrowserWebWorkerEnv
					)
						i.setContentType(!1);
					else if ((d = i.getContentType()) !== !1) {
						const [w, ...S] = d
							? d
									.split(";")
									.map((g) => g.trim())
									.filter(Boolean)
							: [];
						i.setContentType(
							[w || "multipart/form-data", ...S].join("; ")
						);
					}
				}
				let f = new XMLHttpRequest();
				if (e.auth) {
					const w = e.auth.username || "",
						S = e.auth.password
							? unescape(encodeURIComponent(e.auth.password))
							: "";
					i.set("Authorization", "Basic " + btoa(w + ":" + S));
				}
				const h = US(e.baseURL, e.url);
				f.open(
					e.method.toUpperCase(),
					IS(h, e.params, e.paramsSerializer),
					!0
				),
					(f.timeout = e.timeout);
				function m() {
					if (!f) return;
					const w = rr.from(
							"getAllResponseHeaders" in f &&
								f.getAllResponseHeaders()
						),
						g = {
							data:
								!s || s === "text" || s === "json"
									? f.responseText
									: f.response,
							status: f.status,
							statusText: f.statusText,
							headers: w,
							config: e,
							request: f,
						};
					RD(
						function (v) {
							n(v), u();
						},
						function (v) {
							r(v), u();
						},
						g
					),
						(f = null);
				}
				if (
					("onloadend" in f
						? (f.onloadend = m)
						: (f.onreadystatechange = function () {
								!f ||
									f.readyState !== 4 ||
									(f.status === 0 &&
										!(
											f.responseURL &&
											f.responseURL.indexOf("file:") === 0
										)) ||
									setTimeout(m);
						  }),
					(f.onabort = function () {
						f &&
							(r(
								new me("Request aborted", me.ECONNABORTED, e, f)
							),
							(f = null));
					}),
					(f.onerror = function () {
						r(new me("Network Error", me.ERR_NETWORK, e, f)),
							(f = null);
					}),
					(f.ontimeout = function () {
						let S = e.timeout
							? "timeout of " + e.timeout + "ms exceeded"
							: "timeout exceeded";
						const g = e.transitional || AS;
						e.timeoutErrorMessage && (S = e.timeoutErrorMessage),
							r(
								new me(
									S,
									g.clarifyTimeoutError
										? me.ETIMEDOUT
										: me.ECONNABORTED,
									e,
									f
								)
							),
							(f = null);
					}),
					$n.hasStandardBrowserEnv &&
						(a && _.isFunction(a) && (a = a(e)),
						a || (a !== !1 && kD(h))))
				) {
					const w =
						e.xsrfHeaderName &&
						e.xsrfCookieName &&
						OD.read(e.xsrfCookieName);
					w && i.set(e.xsrfHeaderName, w);
				}
				o === void 0 && i.setContentType(null),
					"setRequestHeader" in f &&
						_.forEach(i.toJSON(), function (S, g) {
							f.setRequestHeader(g, S);
						}),
					_.isUndefined(e.withCredentials) ||
						(f.withCredentials = !!e.withCredentials),
					s && s !== "json" && (f.responseType = e.responseType),
					typeof e.onDownloadProgress == "function" &&
						f.addEventListener(
							"progress",
							wv(e.onDownloadProgress, !0)
						),
					typeof e.onUploadProgress == "function" &&
						f.upload &&
						f.upload.addEventListener(
							"progress",
							wv(e.onUploadProgress)
						),
					(e.cancelToken || e.signal) &&
						((l = (w) => {
							f &&
								(r(!w || w.type ? new ca(null, e, f) : w),
								f.abort(),
								(f = null));
						}),
						e.cancelToken && e.cancelToken.subscribe(l),
						e.signal &&
							(e.signal.aborted
								? l()
								: e.signal.addEventListener("abort", l)));
				const y = ND(h);
				if (y && $n.protocols.indexOf(y) === -1) {
					r(
						new me(
							"Unsupported protocol " + y + ":",
							me.ERR_BAD_REQUEST,
							e
						)
					);
					return;
				}
				f.send(o || null);
			});
		},
	Jd = { http: oD, xhr: DD };
_.forEach(Jd, (e, t) => {
	if (e) {
		try {
			Object.defineProperty(e, "name", { value: t });
		} catch {}
		Object.defineProperty(e, "adapterName", { value: t });
	}
});
const Sv = (e) => `- ${e}`,
	LD = (e) => _.isFunction(e) || e === null || e === !1,
	BS = {
		getAdapter: (e) => {
			e = _.isArray(e) ? e : [e];
			const { length: t } = e;
			let n, r;
			const o = {};
			for (let i = 0; i < t; i++) {
				n = e[i];
				let s;
				if (
					((r = n),
					!LD(n) &&
						((r = Jd[(s = String(n)).toLowerCase()]), r === void 0))
				)
					throw new me(`Unknown adapter '${s}'`);
				if (r) break;
				o[s || "#" + i] = r;
			}
			if (!r) {
				const i = Object.entries(o).map(
					([a, l]) =>
						`adapter ${a} ` +
						(l === !1
							? "is not supported by the environment"
							: "is not available in the build")
				);
				let s = t
					? i.length > 1
						? `since :
` +
						  i.map(Sv).join(`
`)
						: " " + Sv(i[0])
					: "as no adapter specified";
				throw new me(
					"There is no suitable adapter to dispatch the request " + s,
					"ERR_NOT_SUPPORT"
				);
			}
			return r;
		},
		adapters: Jd,
	};
function Nc(e) {
	if (
		(e.cancelToken && e.cancelToken.throwIfRequested(),
		e.signal && e.signal.aborted)
	)
		throw new ca(null, e);
}
function Ev(e) {
	return (
		Nc(e),
		(e.headers = rr.from(e.headers)),
		(e.data = kc.call(e, e.transformRequest)),
		["post", "put", "patch"].indexOf(e.method) !== -1 &&
			e.headers.setContentType("application/x-www-form-urlencoded", !1),
		BS.getAdapter(e.adapter || Mp.adapter)(e).then(
			function (r) {
				return (
					Nc(e),
					(r.data = kc.call(e, e.transformResponse, r)),
					(r.headers = rr.from(r.headers)),
					r
				);
			},
			function (r) {
				return (
					FS(r) ||
						(Nc(e),
						r &&
							r.response &&
							((r.response.data = kc.call(
								e,
								e.transformResponse,
								r.response
							)),
							(r.response.headers = rr.from(
								r.response.headers
							)))),
					Promise.reject(r)
				);
			}
		)
	);
}
const Cv = (e) => (e instanceof rr ? e.toJSON() : e);
function xi(e, t) {
	t = t || {};
	const n = {};
	function r(u, d, f) {
		return _.isPlainObject(u) && _.isPlainObject(d)
			? _.merge.call({ caseless: f }, u, d)
			: _.isPlainObject(d)
			? _.merge({}, d)
			: _.isArray(d)
			? d.slice()
			: d;
	}
	function o(u, d, f) {
		if (_.isUndefined(d)) {
			if (!_.isUndefined(u)) return r(void 0, u, f);
		} else return r(u, d, f);
	}
	function i(u, d) {
		if (!_.isUndefined(d)) return r(void 0, d);
	}
	function s(u, d) {
		if (_.isUndefined(d)) {
			if (!_.isUndefined(u)) return r(void 0, u);
		} else return r(void 0, d);
	}
	function a(u, d, f) {
		if (f in t) return r(u, d);
		if (f in e) return r(void 0, u);
	}
	const l = {
		url: i,
		method: i,
		data: i,
		baseURL: s,
		transformRequest: s,
		transformResponse: s,
		paramsSerializer: s,
		timeout: s,
		timeoutMessage: s,
		withCredentials: s,
		withXSRFToken: s,
		adapter: s,
		responseType: s,
		xsrfCookieName: s,
		xsrfHeaderName: s,
		onUploadProgress: s,
		onDownloadProgress: s,
		decompress: s,
		maxContentLength: s,
		maxBodyLength: s,
		beforeRedirect: s,
		transport: s,
		httpAgent: s,
		httpsAgent: s,
		cancelToken: s,
		socketPath: s,
		responseEncoding: s,
		validateStatus: a,
		headers: (u, d) => o(Cv(u), Cv(d), !0),
	};
	return (
		_.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
			const f = l[d] || o,
				h = f(e[d], t[d], d);
			(_.isUndefined(h) && f !== a) || (n[d] = h);
		}),
		n
	);
}
const zS = "1.6.7",
	$p = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
	(e, t) => {
		$p[e] = function (r) {
			return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
		};
	}
);
const jv = {};
$p.transitional = function (t, n, r) {
	function o(i, s) {
		return (
			"[Axios v" +
			zS +
			"] Transitional option '" +
			i +
			"'" +
			s +
			(r ? ". " + r : "")
		);
	}
	return (i, s, a) => {
		if (t === !1)
			throw new me(
				o(s, " has been removed" + (n ? " in " + n : "")),
				me.ERR_DEPRECATED
			);
		return (
			n &&
				!jv[s] &&
				((jv[s] = !0),
				console.warn(
					o(
						s,
						" has been deprecated since v" +
							n +
							" and will be removed in the near future"
					)
				)),
			t ? t(i, s, a) : !0
		);
	};
};
function ID(e, t, n) {
	if (typeof e != "object")
		throw new me("options must be an object", me.ERR_BAD_OPTION_VALUE);
	const r = Object.keys(e);
	let o = r.length;
	for (; o-- > 0; ) {
		const i = r[o],
			s = t[i];
		if (s) {
			const a = e[i],
				l = a === void 0 || s(a, i, e);
			if (l !== !0)
				throw new me(
					"option " + i + " must be " + l,
					me.ERR_BAD_OPTION_VALUE
				);
			continue;
		}
		if (n !== !0) throw new me("Unknown option " + i, me.ERR_BAD_OPTION);
	}
}
const Yd = { assertOptions: ID, validators: $p },
	mr = Yd.validators;
class Ql {
	constructor(t) {
		(this.defaults = t),
			(this.interceptors = { request: new gv(), response: new gv() });
	}
	async request(t, n) {
		try {
			return await this._request(t, n);
		} catch (r) {
			if (r instanceof Error) {
				let o;
				Error.captureStackTrace
					? Error.captureStackTrace((o = {}))
					: (o = new Error());
				const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
				r.stack
					? i &&
					  !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
					  (r.stack +=
							`
` + i)
					: (r.stack = i);
			}
			throw r;
		}
	}
	_request(t, n) {
		typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
			(n = xi(this.defaults, n));
		const { transitional: r, paramsSerializer: o, headers: i } = n;
		r !== void 0 &&
			Yd.assertOptions(
				r,
				{
					silentJSONParsing: mr.transitional(mr.boolean),
					forcedJSONParsing: mr.transitional(mr.boolean),
					clarifyTimeoutError: mr.transitional(mr.boolean),
				},
				!1
			),
			o != null &&
				(_.isFunction(o)
					? (n.paramsSerializer = { serialize: o })
					: Yd.assertOptions(
							o,
							{ encode: mr.function, serialize: mr.function },
							!0
					  )),
			(n.method = (
				n.method ||
				this.defaults.method ||
				"get"
			).toLowerCase());
		let s = i && _.merge(i.common, i[n.method]);
		i &&
			_.forEach(
				["delete", "get", "head", "post", "put", "patch", "common"],
				(y) => {
					delete i[y];
				}
			),
			(n.headers = rr.concat(s, i));
		const a = [];
		let l = !0;
		this.interceptors.request.forEach(function (w) {
			(typeof w.runWhen == "function" && w.runWhen(n) === !1) ||
				((l = l && w.synchronous), a.unshift(w.fulfilled, w.rejected));
		});
		const u = [];
		this.interceptors.response.forEach(function (w) {
			u.push(w.fulfilled, w.rejected);
		});
		let d,
			f = 0,
			h;
		if (!l) {
			const y = [Ev.bind(this), void 0];
			for (
				y.unshift.apply(y, a),
					y.push.apply(y, u),
					h = y.length,
					d = Promise.resolve(n);
				f < h;

			)
				d = d.then(y[f++], y[f++]);
			return d;
		}
		h = a.length;
		let m = n;
		for (f = 0; f < h; ) {
			const y = a[f++],
				w = a[f++];
			try {
				m = y(m);
			} catch (S) {
				w.call(this, S);
				break;
			}
		}
		try {
			d = Ev.call(this, m);
		} catch (y) {
			return Promise.reject(y);
		}
		for (f = 0, h = u.length; f < h; ) d = d.then(u[f++], u[f++]);
		return d;
	}
	getUri(t) {
		t = xi(this.defaults, t);
		const n = US(t.baseURL, t.url);
		return IS(n, t.params, t.paramsSerializer);
	}
}
_.forEach(["delete", "get", "head", "options"], function (t) {
	Ql.prototype[t] = function (n, r) {
		return this.request(
			xi(r || {}, { method: t, url: n, data: (r || {}).data })
		);
	};
});
_.forEach(["post", "put", "patch"], function (t) {
	function n(r) {
		return function (i, s, a) {
			return this.request(
				xi(a || {}, {
					method: t,
					headers: r ? { "Content-Type": "multipart/form-data" } : {},
					url: i,
					data: s,
				})
			);
		};
	}
	(Ql.prototype[t] = n()), (Ql.prototype[t + "Form"] = n(!0));
});
const rl = Ql;
class Fp {
	constructor(t) {
		if (typeof t != "function")
			throw new TypeError("executor must be a function.");
		let n;
		this.promise = new Promise(function (i) {
			n = i;
		});
		const r = this;
		this.promise.then((o) => {
			if (!r._listeners) return;
			let i = r._listeners.length;
			for (; i-- > 0; ) r._listeners[i](o);
			r._listeners = null;
		}),
			(this.promise.then = (o) => {
				let i;
				const s = new Promise((a) => {
					r.subscribe(a), (i = a);
				}).then(o);
				return (
					(s.cancel = function () {
						r.unsubscribe(i);
					}),
					s
				);
			}),
			t(function (i, s, a) {
				r.reason || ((r.reason = new ca(i, s, a)), n(r.reason));
			});
	}
	throwIfRequested() {
		if (this.reason) throw this.reason;
	}
	subscribe(t) {
		if (this.reason) {
			t(this.reason);
			return;
		}
		this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
	}
	unsubscribe(t) {
		if (!this._listeners) return;
		const n = this._listeners.indexOf(t);
		n !== -1 && this._listeners.splice(n, 1);
	}
	static source() {
		let t;
		return {
			token: new Fp(function (o) {
				t = o;
			}),
			cancel: t,
		};
	}
}
const AD = Fp;
function MD(e) {
	return function (n) {
		return e.apply(null, n);
	};
}
function $D(e) {
	return _.isObject(e) && e.isAxiosError === !0;
}
const Zd = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	EarlyHints: 103,
	Ok: 200,
	Created: 201,
	Accepted: 202,
	NonAuthoritativeInformation: 203,
	NoContent: 204,
	ResetContent: 205,
	PartialContent: 206,
	MultiStatus: 207,
	AlreadyReported: 208,
	ImUsed: 226,
	MultipleChoices: 300,
	MovedPermanently: 301,
	Found: 302,
	SeeOther: 303,
	NotModified: 304,
	UseProxy: 305,
	Unused: 306,
	TemporaryRedirect: 307,
	PermanentRedirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	PaymentRequired: 402,
	Forbidden: 403,
	NotFound: 404,
	MethodNotAllowed: 405,
	NotAcceptable: 406,
	ProxyAuthenticationRequired: 407,
	RequestTimeout: 408,
	Conflict: 409,
	Gone: 410,
	LengthRequired: 411,
	PreconditionFailed: 412,
	PayloadTooLarge: 413,
	UriTooLong: 414,
	UnsupportedMediaType: 415,
	RangeNotSatisfiable: 416,
	ExpectationFailed: 417,
	ImATeapot: 418,
	MisdirectedRequest: 421,
	UnprocessableEntity: 422,
	Locked: 423,
	FailedDependency: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	PreconditionRequired: 428,
	TooManyRequests: 429,
	RequestHeaderFieldsTooLarge: 431,
	UnavailableForLegalReasons: 451,
	InternalServerError: 500,
	NotImplemented: 501,
	BadGateway: 502,
	ServiceUnavailable: 503,
	GatewayTimeout: 504,
	HttpVersionNotSupported: 505,
	VariantAlsoNegotiates: 506,
	InsufficientStorage: 507,
	LoopDetected: 508,
	NotExtended: 510,
	NetworkAuthenticationRequired: 511,
};
Object.entries(Zd).forEach(([e, t]) => {
	Zd[t] = e;
});
const FD = Zd;
function HS(e) {
	const t = new rl(e),
		n = CS(rl.prototype.request, t);
	return (
		_.extend(n, rl.prototype, t, { allOwnKeys: !0 }),
		_.extend(n, t, null, { allOwnKeys: !0 }),
		(n.create = function (o) {
			return HS(xi(e, o));
		}),
		n
	);
}
const Qe = HS(Mp);
Qe.Axios = rl;
Qe.CanceledError = ca;
Qe.CancelToken = AD;
Qe.isCancel = FS;
Qe.VERSION = zS;
Qe.toFormData = _u;
Qe.AxiosError = me;
Qe.Cancel = Qe.CanceledError;
Qe.all = function (t) {
	return Promise.all(t);
};
Qe.spread = MD;
Qe.isAxiosError = $D;
Qe.mergeConfig = xi;
Qe.AxiosHeaders = rr;
Qe.formToJSON = (e) => $S(_.isHTMLForm(e) ? new FormData(e) : e);
Qe.getAdapter = BS.getAdapter;
Qe.HttpStatusCode = FD;
Qe.default = Qe;
const ge = Qe.create({ baseURL: "" });
function UD({ product: e }) {
	return c.jsxs(An, {
		className: "my-3 p-3 rounded",
		children: [
			c.jsx(xt, {
				to: `/product/${e._id}`,
				children: c.jsx(An.Img, {
					src: ge.defaults.baseURL.slice(0, -1) + e.image,
				}),
			}),
			c.jsxs(An.Body, {
				children: [
					c.jsx(xt, {
						to: `/product/${e._id}`,
						children: c.jsx(An.Title, {
							as: "div",
							children: c.jsx("strong", { children: e.name }),
						}),
					}),
					c.jsx(An.Text, {
						as: "div",
						children: c.jsx("div", {
							className: "my-3",
							children: c.jsx(qd, {
								value: e.rating,
								text: `${e.numReviews} reviews`,
								color: "#f8e825",
							}),
						}),
					}),
					c.jsxs(An.Text, { as: "h3", children: ["$", e.price] }),
				],
			}),
		],
	});
}
function He() {
	return c.jsx(yN, {
		animation: "border",
		role: "status",
		style: {
			height: "100px",
			width: "100px",
			margin: "auto",
			display: "block",
		},
		children: c.jsx("span", {
			className: "sr-only",
			children: "Loading...",
		}),
	});
}
function ve({ variant: e, children: t }) {
	return c.jsx(GO, { variant: e, children: t });
}
function KS({ pages: e, page: t, keyword: n = "", isAdmin: r = !1 }) {
	const o = Ve();
	function i(s) {
		o(
			r
				? `/admin/productlist/?page=${s + 1}`
				: `/?keyword=${n}&page=${s + 1}`
		);
	}
	return (
		e > 1 &&
		c.jsx(qm, {
			children: [...Array(e).keys()].map((s) =>
				c.jsxs(
					qm.Item,
					{
						onClick: () => i(s),
						active: s + 1 === Number(t),
						children: [s + 1, console.log("page: ", t)],
					},
					s + 1
				)
			),
		})
	);
}
function BD() {
	const {
		data: e,
		isLoading: t,
		error: n,
	} = cn(
		"productsTop",
		async () => (await ge.get("/api/products/top/")).data,
		{
			onError: (r) => {
				console.log("error getting top items", r);
			},
		}
	);
	return t
		? c.jsx(He, {})
		: n
		? c.jsx(ve, { variant: "danger", children: n.response.data.detail })
		: e
		? c.jsx(mc, {
				pause: "hover",
				className: "bg-dark",
				children: e.map((r) =>
					c.jsx(
						mc.Item,
						{
							children: c.jsxs(xt, {
								to: `/product/${r._id}`,
								children: [
									c.jsx(ia, {
										src: r.image,
										alt: r.name,
										fluid: !0,
									}),
									c.jsx(mc.Caption, {
										className: "carousel.caption",
										children: c.jsxs("h4", {
											children: [
												r.name,
												" ($",
												r.price,
												")",
											],
										}),
									}),
								],
							}),
						},
						r._id
					)
				),
		  })
		: "";
}
function zD() {
	const e = It(),
		[t] = Po(),
		n = t.get("keyword"),
		r = t.get("page"),
		{
			data: o,
			isLoading: i,
			error: s,
			refetch: a,
		} = cn(
			"products",
			async () =>
				(await ge.get(`/api/products?keyword=${n}&page=${r}`)).data
		);
	return (
		p.useEffect(() => {
			o && e(l0(o.products)), a();
		}, [e, o, n, r]),
		c.jsxs("div", {
			children: [
				!n && c.jsx(BD, {}),
				c.jsx("h1", { children: "Latest Products" }),
				i
					? c.jsx(He, {})
					: s
					? c.jsx(ve, {
							variant: "danger",
							children: s.response.data.detail,
					  })
					: o.products
					? c.jsxs(c.Fragment, {
							children: [
								c.jsx(Oe, {
									children: o.products.map((l) =>
										c.jsx(
											q,
											{
												sm: 12,
												md: 6,
												lg: 4,
												xl: 3,
												children: c.jsx(UD, {
													product: l,
												}),
											},
											l._id
										)
									),
								}),
								c.jsx(KS, {
									pages: o.pages,
									page: o.page,
									keyword: n,
								}),
							],
					  })
					: "",
			],
		})
	);
}
function HD() {
	var g, x;
	const [e, t] = p.useState(1),
		[n, r] = p.useState(0),
		[o, i] = p.useState(""),
		{ id: s } = Ni(),
		a = Ve(),
		l = Je((v) => v.userLogin.userInfo),
		{
			data: u,
			isLoading: d,
			error: f,
			refetch: h,
		} = cn(
			"productDetails",
			async () => (await ge.get(`/api/products/${s}`)).data
		),
		m = It(),
		y = un(
			async () =>
				(
					await ge.post(
						`/api/products/${s}/reviews/`,
						{ rating: n, comment: o },
						{
							headers: {
								"Content-type": "application/json",
								Authorization: `Bearer ${l.token}`,
							},
						}
					)
				).data,
			{
				onSuccess: (v) => {
					h(), r(0), i("");
				},
				onError: (v) => {
					console.log("Review error", v.response.data.detail);
				},
			}
		);
	p.useEffect(() => {
		u && m(Zj(u));
	}, [m, s]);
	const w = () => {
		a(`/cart/${s}?qty=${e}`);
	};
	function S(v) {
		v.preventDefault(), y.mutate();
	}
	return c.jsxs("div", {
		children: [
			c.jsx(xt, {
				to: "/",
				className: "btn btn-light my-3",
				children: "Go Back",
			}),
			d
				? c.jsx(He, {})
				: f
				? c.jsx(ve, { variant: "danger", children: f })
				: u
				? c.jsxs(c.Fragment, {
						children: [
							c.jsxs(Oe, {
								children: [
									c.jsx(q, {
										md: 6,
										children: c.jsx(ia, {
											src:
												ge.defaults.baseURL.slice(
													0,
													-1
												) + u.image,
											alt: u == null ? void 0 : u.name,
											fluid: !0,
										}),
									}),
									c.jsx(q, {
										md: 3,
										children: c.jsxs(ee, {
											variant: "flush",
											children: [
												c.jsx(ee.Item, {
													children: c.jsx("h3", {
														children:
															u == null
																? void 0
																: u.name,
													}),
												}),
												c.jsx(ee.Item, {
													children: c.jsx(qd, {
														value:
															u == null
																? void 0
																: u.rating,
														text: `${
															u == null
																? void 0
																: u.numReviews
														} reviews`,
														color: "#f8e825",
													}),
												}),
												c.jsxs(ee.Item, {
													children: [
														"Price: $",
														u == null
															? void 0
															: u.price,
													],
												}),
												c.jsxs(ee.Item, {
													children: [
														"Description: ",
														u == null
															? void 0
															: u.description,
													],
												}),
											],
										}),
									}),
									c.jsx(q, {
										md: 3,
										children: c.jsx(An, {
											children: c.jsxs(ee, {
												variant: "flush",
												children: [
													c.jsx(ee.Item, {
														children: c.jsxs(Oe, {
															children: [
																c.jsx(q, {
																	children:
																		"Price: ",
																}),
																c.jsx(q, {
																	children:
																		c.jsxs(
																			"strong",
																			{
																				children:
																					[
																						"$",
																						u ==
																						null
																							? void 0
																							: u.price,
																					],
																			}
																		),
																}),
															],
														}),
													}),
													c.jsx(ee.Item, {
														children: c.jsxs(Oe, {
															children: [
																c.jsx(q, {
																	children:
																		"Status: ",
																}),
																c.jsx(q, {
																	children:
																		u &&
																		u.countInStock >
																			0
																			? "In Stock"
																			: "Out of Stock",
																}),
															],
														}),
													}),
													u &&
														u.countInStock > 0 &&
														c.jsx(ee.Item, {
															children: c.jsxs(
																Oe,
																{
																	children: [
																		c.jsx(
																			q,
																			{
																				children:
																					"Qty",
																			}
																		),
																		c.jsx(
																			q,
																			{
																				xs: "auto",
																				className:
																					"my-1",
																				children:
																					c.jsx(
																						I.Select,
																						{
																							size: "sm",
																							value: e,
																							onChange:
																								(
																									v
																								) =>
																									t(
																										Number(
																											v
																												.target
																												.value
																										)
																									),
																							children:
																								[
																									...Array(
																										u.countInStock
																									).keys(),
																								].map(
																									(
																										v
																									) =>
																										c.jsx(
																											"option",
																											{
																												value:
																													v +
																													1,
																												children:
																													v +
																													1,
																											},
																											v +
																												1
																										)
																								),
																						}
																					),
																			}
																		),
																	],
																}
															),
														}),
													c.jsx(ee.Item, {
														className: "d-grid",
														children: c.jsx(Ue, {
															onClick: w,
															variant: "primary",
															disabled:
																(u == null
																	? void 0
																	: u.countInStock) <=
																0,
															type: "button",
															children:
																"Add to Cart",
														}),
													}),
												],
											}),
										}),
									}),
								],
							}),
							c.jsx(Oe, {
								children: c.jsxs(q, {
									md: 6,
									children: [
										c.jsx("h4", { children: "Reviews" }),
										((g = u.reviews) == null
											? void 0
											: g.length) === 0 &&
											c.jsx(ve, {
												variant: "info",
												children: "No Reviews",
											}),
										c.jsxs(ee, {
											variant: "flush",
											children: [
												(x = u.reviews) == null
													? void 0
													: x.map((v) =>
															c.jsxs(
																ee.Item,
																{
																	children: [
																		c.jsx(
																			"strong",
																			{
																				children:
																					v.name,
																			}
																		),
																		c.jsx(
																			qd,
																			{
																				value: v.rating,
																				color: "#f8e825",
																			}
																		),
																		c.jsx(
																			"p",
																			{
																				children:
																					v.createdAt.substring(
																						0,
																						10
																					),
																			}
																		),
																		c.jsx(
																			"p",
																			{
																				children:
																					v.comment,
																			}
																		),
																	],
																},
																v._id
															)
													  ),
												c.jsxs(ee.Item, {
													children: [
														c.jsx("h4", {
															children:
																"Write a review",
														}),
														y.isLoading &&
															c.jsx(He, {}),
														y.isSuccess &&
															c.jsx(ve, {
																variant:
																	"success",
																children:
																	"Review Submitted",
															}),
														y.error &&
															c.jsx(ve, {
																variant:
																	"danger",
																children:
																	y.error
																		.response
																		.data
																		.detail,
															}),
														l
															? c.jsxs(I, {
																	onSubmit: S,
																	children: [
																		c.jsxs(
																			I.Group,
																			{
																				controlId:
																					"rating",
																				children:
																					[
																						c.jsx(
																							I.Label,
																							{
																								children:
																									"Rating",
																							}
																						),
																						c.jsxs(
																							I.Control,
																							{
																								as: "select",
																								value: n,
																								onChange:
																									(
																										v
																									) =>
																										r(
																											v
																												.target
																												.value
																										),
																								children:
																									[
																										c.jsx(
																											"option",
																											{
																												value: "",
																												children:
																													"Select...",
																											}
																										),
																										c.jsx(
																											"option",
																											{
																												value: "1",
																												children:
																													"1 - Poor",
																											}
																										),
																										c.jsx(
																											"option",
																											{
																												value: "2",
																												children:
																													"2 - Fair",
																											}
																										),
																										c.jsx(
																											"option",
																											{
																												value: "3",
																												children:
																													"3 - Good",
																											}
																										),
																										c.jsx(
																											"option",
																											{
																												value: "4",
																												children:
																													"4 - Very Good",
																											}
																										),
																										c.jsx(
																											"option",
																											{
																												value: "5",
																												children:
																													"5 - Excellent",
																											}
																										),
																									],
																							}
																						),
																					],
																			}
																		),
																		c.jsxs(
																			I.Group,
																			{
																				controlId:
																					"comment",
																				children:
																					[
																						c.jsx(
																							I.Label,
																							{
																								children:
																									"Review",
																							}
																						),
																						c.jsx(
																							I.Control,
																							{
																								as: "textarea",
																								rows: "5",
																								value: o,
																								onChange:
																									(
																										v
																									) =>
																										i(
																											v
																												.target
																												.value
																										),
																								children:
																									"Rei",
																							}
																						),
																					],
																			}
																		),
																		c.jsx(
																			Ue,
																			{
																				disabled:
																					y.isLoading,
																				type: "submit",
																				variant:
																					"primary",
																				children:
																					"Submit",
																			}
																		),
																	],
															  })
															: c.jsxs(ve, {
																	variant:
																		"info",
																	children: [
																		"Please",
																		" ",
																		c.jsx(
																			xt,
																			{
																				to: "/login",
																				children:
																					"login",
																			}
																		),
																		" to write a review",
																	],
															  }),
													],
												}),
											],
										}),
									],
								}),
							}),
						],
				  })
				: "",
		],
	});
}
function KD() {
	const e = It(),
		{ id: t } = Ni(),
		[n] = Po(),
		r = n.get("qty"),
		o = Ve(),
		{
			data: i,
			isLoading: s,
			error: a,
		} = cn("productDetails", async () => {
			if (t) return (await ge.get(`/api/products/${t}`)).data;
		});
	p.useEffect(() => {
		if (i && r) {
			const m = { ...i, qty: r };
			e(fm(m));
		}
	}, [e, t, r]);
	const l = Je((m) => m.cart),
		{ cartItems: u } = l;
	function d(m, y, w) {
		const S = { ...m, qty: y, _id: w };
		e(fm(S));
	}
	const f = (m) => {
			e(iR(m));
		},
		h = () => {
			o("/login?redirect=shipping");
		};
	return c.jsxs(Oe, {
		children: [
			c.jsxs(q, {
				md: 8,
				children: [
					c.jsx("h1", { children: "Shopping Cart" }),
					s
						? c.jsx(He, {})
						: a
						? c.jsx(ve, { variant: "danger", children: a })
						: u.length === 0
						? c.jsxs(ve, {
								variant: "info",
								children: [
									"Your cart is empty ",
									c.jsx(xt, { to: "/", children: "Go Back" }),
								],
						  })
						: c.jsx(ee, {
								variant: "flush",
								children: u.map((m) =>
									c.jsx(
										ee.Item,
										{
											children: c.jsxs(Oe, {
												children: [
													c.jsx(q, {
														md: 2,
														children: c.jsx(ia, {
															src:
																ge.defaults.baseURL.slice(
																	0,
																	-1
																) + m.image,
															alt: m.name,
															fluid: !0,
															rounded: !0,
														}),
													}),
													c.jsx(q, {
														md: 3,
														children: c.jsx(xt, {
															to: `/product/${m.id}`,
															children: m.name,
														}),
													}),
													c.jsxs(q, {
														md: 2,
														children: [
															"$",
															m.price,
														],
													}),
													c.jsx(q, {
														md: 3,
														children: c.jsx(
															I.Select,
															{
																size: "sm",
																value: m.qty,
																onChange: (y) =>
																	d(
																		m,
																		Number(
																			y
																				.target
																				.value
																		),
																		m.id
																	),
																children: [
																	...Array(
																		m.countInStock
																	).keys(),
																].map((y) =>
																	c.jsx(
																		"option",
																		{
																			value:
																				y +
																				1,
																			children:
																				y +
																				1,
																		},
																		y + 1
																	)
																),
															}
														),
													}),
													c.jsx(q, {
														children: c.jsx(Ue, {
															type: "button",
															variant: "light",
															onClick: () =>
																f(m.id),
															children: c.jsx(
																"i",
																{
																	className:
																		"fas fa-trash",
																}
															),
														}),
													}),
												],
											}),
										},
										m.id
									)
								),
						  }),
				],
			}),
			c.jsx(q, {
				md: 4,
				children: c.jsx(An, {
					children: c.jsxs(ee, {
						variant: "flush",
						children: [
							c.jsxs(ee.Item, {
								children: [
									c.jsxs("h2", {
										children: [
											"Subtotal(",
											u.reduce((m, y) => m + y.qty, 0),
											") Items",
										],
									}),
									"$",
									u
										.reduce(
											(m, y) => m + y.qty * y.price,
											0
										)
										.toFixed(2),
								],
							}),
							c.jsx(ee.Item, {
								className: "d-grid",
								children: c.jsx(Ue, {
									type: "button",
									variant: "primary",
									disabled: u.length === 0,
									onClick: h,
									children: "Proceed To Checkout",
								}),
							}),
						],
					}),
				}),
			}),
		],
	});
}
function Li({ children: e }) {
	return c.jsx(xu, {
		children: c.jsx(Oe, {
			className: "justify-content-md-center",
			children: c.jsx(q, { xs: 12, md: 6, children: e }),
		}),
	});
}
function WD() {
	const [e, t] = p.useState(""),
		[n, r] = p.useState(""),
		o = It(),
		[i] = Po(),
		s = i.has("redirect") ? `/${i.get("redirect")}` : "/",
		a = Ve(),
		l = { headers: { "Content-type": "application/json" } },
		{ userInfo: u } = Je((m) => m.userLogin),
		d = un(
			async () =>
				(
					await ge.post(
						"/api/users/login/",
						{ username: e, password: n },
						l
					)
				).data,
			{
				onSuccess: (m) => {
					o(f0(m));
				},
				onError: (m) => {
					console.log("Login error", m.response.data.detail);
				},
			}
		),
		{ error: f } = d;
	function h(m) {
		m.preventDefault(), d.mutate();
	}
	return (
		p.useEffect(() => {
			u && a(s);
		}, [d]),
		c.jsxs(Li, {
			children: [
				c.jsx("h1", { children: "Sign In" }),
				f &&
					c.jsx(ve, {
						variant: "danger",
						children: f.response.data.detail,
					}),
				d.isLoading && c.jsx(He, {}),
				c.jsxs(I, {
					onSubmit: h,
					children: [
						c.jsxs(I.Group, {
							controlId: "email",
							children: [
								c.jsx(I.Label, { children: "Email Address" }),
								c.jsx(I.Control, {
									required: !0,
									type: "email",
									placeholder: "Enter Email",
									value: e,
									onChange: (m) => t(m.target.value),
								}),
							],
						}),
						c.jsxs(I.Group, {
							controlId: "password",
							children: [
								c.jsx(I.Label, { children: "Password" }),
								c.jsx(I.Control, {
									required: !0,
									type: "password",
									placeholder: "Enter Password",
									value: n,
									onChange: (m) => r(m.target.value),
								}),
							],
						}),
						c.jsx(Ue, {
							type: "submit",
							className: "my-3",
							children: "Sign In",
						}),
					],
				}),
				c.jsx(Oe, {
					className: "py-3",
					children: c.jsxs(q, {
						children: [
							"New Customer?",
							" ",
							c.jsx(xt, {
								to: s ? `/register?redirect=${s}` : "/register",
								children: "Register",
							}),
						],
					}),
				}),
			],
		})
	);
}
function QD() {
	const [e, t] = p.useState(""),
		[n, r] = p.useState(""),
		[o, i] = p.useState(""),
		[s, a] = p.useState(""),
		[l, u] = p.useState(""),
		[d] = Po(),
		f = d.has("redirect") ? d.get("redirect") : "/",
		h = It(),
		m = Ve(),
		y = { headers: { "Content-type": "application/json" } },
		{ userInfo: w } = Je((v) => v.userLogin),
		S = un(
			async () =>
				(
					await ge.post(
						"/api/users/register/",
						{ name: e, email: n, password: o },
						y
					)
				).data,
			{
				onSuccess: (v) => {
					h(pR(v));
				},
				onError: (v) => {
					console.log("Login error", v.response.data.detail);
				},
			}
		),
		{ error: g } = S;
	function x(v) {
		v.preventDefault(), o != s ? u("Passwords do not match") : S.mutate();
	}
	return (
		p.useEffect(() => {
			w && m("/");
		}, [S]),
		c.jsxs(Li, {
			children: [
				c.jsx("h1", { children: "Register" }),
				g &&
					c.jsx(ve, {
						variant: "danger",
						children: g.response.data.detail,
					}),
				S.isLoading && c.jsx(He, {}),
				c.jsxs(I, {
					onSubmit: x,
					children: [
						c.jsxs(I.Group, {
							controlId: "name",
							children: [
								c.jsx(I.Label, { children: "Username" }),
								c.jsx(I.Control, {
									required: !0,
									type: "name",
									placeholder: "Enter Your Name",
									value: e,
									onChange: (v) => t(v.target.value),
								}),
							],
						}),
						c.jsxs(I.Group, {
							controlId: "email",
							children: [
								c.jsx(I.Label, { children: "Email Address" }),
								c.jsx(I.Control, {
									required: !0,
									type: "email",
									placeholder: "Enter Email",
									value: n,
									onChange: (v) => r(v.target.value),
								}),
							],
						}),
						c.jsxs(I.Group, {
							controlId: "password",
							children: [
								c.jsx(I.Label, { children: "Password" }),
								c.jsx(I.Control, {
									required: !0,
									type: "password",
									placeholder: "Enter Password",
									value: o,
									onChange: (v) => i(v.target.value),
								}),
							],
						}),
						c.jsxs(I.Group, {
							controlId: "passwordConfirm",
							children: [
								c.jsx(I.Label, {
									children: "Confirm Password",
								}),
								c.jsx(I.Control, {
									required: !0,
									type: "password",
									placeholder: "Confirm Password",
									value: s,
									onChange: (v) => a(v.target.value),
								}),
							],
						}),
						l ? c.jsx(ve, { variant: "danger", children: l }) : "",
						c.jsx(Ue, {
							type: "submit",
							className: "my-3",
							children: "Register",
						}),
					],
				}),
				c.jsx(Oe, {
					className: "py-3",
					children: c.jsxs(q, {
						children: [
							"Already Have an Account?",
							" ",
							c.jsx(xt, {
								to: f ? `/login?redirect=${f}` : "/login",
								children: "Sign In",
							}),
						],
					}),
				}),
			],
		})
	);
}
function VD() {
	const [e, t] = p.useState(""),
		[n, r] = p.useState(""),
		[o, i] = p.useState(""),
		[s, a] = p.useState(""),
		[l, u] = p.useState("");
	Po();
	const d = Ve(),
		f = It(),
		h = Je((j) => j.userLogin.userInfo),
		m = Je((j) => j.userDetails.user),
		y = Je((j) => j.order.myOrders),
		{ error: w, isLoading: S } = cn(
			"profile",
			async () =>
				(
					await ge.get("/api/users/profile/", {
						headers: {
							"Content-type": "application/json",
							Authorization: `Bearer ${h.token}`,
						},
					})
				).data,
			{
				onSuccess: (j) => {
					f(Nd(j));
				},
				onError: (j) => {
					console.log("Login error", j.response.data.detail);
				},
			}
		),
		{ error: g, isLoading: x } = cn(
			"myorders",
			async () =>
				(
					await ge.get("/api/orders/myorders/", {
						headers: {
							"Content-type": "application/json",
							Authorization: `Bearer ${h.token}`,
						},
					})
				).data,
			{
				onSuccess: (j) => {
					f(jR(j));
				},
				onError: (j) => {
					console.log("error getting myOrders: ", j);
				},
			}
		),
		v = un(
			async () =>
				(
					await ge.put(
						"/api/users/profile/update/",
						{ name: e, email: n, password: o },
						{
							headers: {
								"Content-type": "application/json",
								Authorization: `Bearer ${h.token}`,
							},
						}
					)
				).data,
			{
				onSuccess: (j) => {
					f(f0(j)), f(Nd(j));
				},
				onError: (j) => {
					console.log("Login error", j.response.data.detail);
				},
			}
		);
	p.useEffect(() => {
		h ? m && (t(m.name), r(m.email)) : d("/");
	}, [m]);
	function C(j) {
		j.preventDefault(),
			o != s ? u("Passwords do not match") : (u(""), v.mutate());
	}
	return c.jsxs(Oe, {
		children: [
			c.jsxs(q, {
				md: 3,
				children: [
					c.jsx("h2", { children: "User Profile" }),
					w &&
						c.jsx(ve, {
							variant: "danger",
							children: w.response.data.detail,
						}),
					S && c.jsx(He, {}),
					c.jsxs(I, {
						onSubmit: C,
						children: [
							c.jsxs(I.Group, {
								controlId: "name",
								children: [
									c.jsx(I.Label, { children: "Username" }),
									c.jsx(I.Control, {
										required: !0,
										type: "name",
										placeholder: "Enter Your Name",
										value: e,
										onChange: (j) => t(j.target.value),
									}),
								],
							}),
							c.jsxs(I.Group, {
								controlId: "email",
								children: [
									c.jsx(I.Label, {
										children: "Email Address",
									}),
									c.jsx(I.Control, {
										required: !0,
										type: "email",
										placeholder: "Enter Email",
										value: n,
										onChange: (j) => r(j.target.value),
									}),
								],
							}),
							c.jsxs(I.Group, {
								controlId: "password",
								children: [
									c.jsx(I.Label, { children: "Password" }),
									c.jsx(I.Control, {
										type: "password",
										placeholder: "Enter Password",
										value: o,
										onChange: (j) => i(j.target.value),
									}),
								],
							}),
							c.jsxs(I.Group, {
								controlId: "passwordConfirm",
								children: [
									c.jsx(I.Label, {
										children: "Confirm Password",
									}),
									c.jsx(I.Control, {
										type: "password",
										placeholder: "Confirm Password",
										value: s,
										onChange: (j) => a(j.target.value),
									}),
								],
							}),
							l
								? c.jsx(ve, { variant: "danger", children: l })
								: "",
							c.jsx(Ue, {
								type: "submit",
								className: "my-3",
								children: "Update",
							}),
						],
					}),
				],
			}),
			c.jsxs(q, {
				md: 9,
				children: [
					c.jsx("h2", { children: "My Orders" }),
					x
						? c.jsx(He, {})
						: g
						? c.jsx(ve, {
								variant: "danger",
								children: g.response.data.detail,
						  })
						: c.jsxs(Cu, {
								striped: !0,
								responsive: !0,
								className: "table-sm",
								children: [
									c.jsx("thead", {
										children: c.jsxs("tr", {
											children: [
												c.jsx("th", { children: "ID" }),
												c.jsx("th", {
													children: "Date",
												}),
												c.jsx("th", {
													children: "Total",
												}),
												c.jsx("th", {
													children: "Paid",
												}),
												c.jsx("th", {
													children: "Delivered",
												}),
												c.jsx("th", {}),
											],
										}),
									}),
									c.jsx("tbody", {
										children: y.map((j) => {
											var E;
											return c.jsxs(
												"tr",
												{
													children: [
														c.jsx("td", {
															children: j._id,
														}),
														c.jsx("td", {
															children:
																j.createdAt.substring(
																	0,
																	10
																),
														}),
														c.jsxs("td", {
															children: [
																"$",
																j.totalPrice,
															],
														}),
														c.jsx("td", {
															children: j.isPaid
																? c.jsx("div", {
																		style: {
																			color: "green",
																		},
																		children:
																			(E =
																				j.paidAt) ==
																			null
																				? void 0
																				: E.substring(
																						0,
																						10
																				  ),
																  })
																: c.jsx("i", {
																		className:
																			"fas fa-times",
																		style: {
																			color: "red",
																		},
																  }),
														}),
														c.jsx("td", {
															children: c.jsx(
																ct.LinkContainer,
																{
																	to: `/order/${j._id}`,
																	children:
																		c.jsx(
																			Ue,
																			{
																				className:
																					"btn-sm",
																				children:
																					"Details",
																			}
																		),
																}
															),
														}),
													],
												},
												j._id
											);
										}),
									}),
								],
						  }),
				],
			}),
		],
	});
}
function Up({ step1: e, step2: t, step3: n, step4: r }) {
	return c.jsxs(at, {
		className: "justify-content-center mb-4",
		children: [
			c.jsx(at.Item, {
				children: e
					? c.jsx(ct.LinkContainer, {
							to: "/login",
							children: c.jsx(at.Link, { children: "Login" }),
					  })
					: c.jsx(at.Link, { disabled: !0, children: "Login" }),
			}),
			c.jsx(at.Item, {
				children: t
					? c.jsx(ct.LinkContainer, {
							to: "/shipping",
							children: c.jsx(at.Link, { children: "Shipping" }),
					  })
					: c.jsx(at.Link, { disabled: !0, children: "Shipping" }),
			}),
			c.jsx(at.Item, {
				children: n
					? c.jsx(ct.LinkContainer, {
							to: "/payment",
							children: c.jsx(at.Link, { children: "Payment" }),
					  })
					: c.jsx(at.Link, { disabled: !0, children: "Payment" }),
			}),
			c.jsx(at.Item, {
				children: r
					? c.jsx(ct.LinkContainer, {
							to: "/placeorder",
							children: c.jsx(at.Link, {
								children: "Place Order",
							}),
					  })
					: c.jsx(at.Link, { disabled: !0, children: "Place Order" }),
			}),
		],
	});
}
function qD() {
	const e = Je((h) => h.cart.shippingAddress),
		[t, n] = p.useState(e.address),
		[r, o] = p.useState(e.city),
		[i, s] = p.useState(e.postalCode),
		[a, l] = p.useState(e.country),
		u = Ve(),
		d = It();
	function f(h) {
		h.preventDefault(),
			d(sR({ address: t, city: r, postalCode: i, country: a })),
			u("/payment");
	}
	return c.jsxs(Li, {
		children: [
			c.jsx(Up, { step1: !0, step2: !0 }),
			c.jsx("h1", { children: "Shipping" }),
			c.jsxs(I, {
				onSubmit: f,
				children: [
					c.jsxs(I.Group, {
						controlId: "address",
						children: [
							c.jsx(I.Label, { children: "Address" }),
							c.jsx(I.Control, {
								required: !0,
								type: "text",
								placeholder: "Enter address",
								value: t || "",
								onChange: (h) => n(h.target.value),
							}),
						],
					}),
					c.jsxs(I.Group, {
						controlId: "city",
						children: [
							c.jsx(I.Label, { children: "City" }),
							c.jsx(I.Control, {
								required: !0,
								type: "text",
								placeholder: "Enter city",
								value: r || "",
								onChange: (h) => o(h.target.value),
							}),
						],
					}),
					c.jsxs(I.Group, {
						controlId: "postalCode",
						children: [
							c.jsx(I.Label, { children: "Postal Code" }),
							c.jsx(I.Control, {
								required: !0,
								type: "text",
								placeholder: "Enter postal code",
								value: i || "",
								onChange: (h) => s(h.target.value),
							}),
						],
					}),
					c.jsxs(I.Group, {
						controlId: "country",
						children: [
							c.jsx(I.Label, { children: "Country" }),
							c.jsx(I.Control, {
								required: !0,
								type: "text",
								placeholder: "Enter country",
								value: a || "",
								onChange: (h) => l(h.target.value),
							}),
						],
					}),
					c.jsx(Ue, {
						type: "submit",
						className: "my-3",
						children: "Continue",
					}),
				],
			}),
		],
	});
}
function GD() {
	const e = Je((s) => s.cart.shippingAddress),
		t = Ve(),
		n = It(),
		[r, o] = p.useState("PayPal");
	e.address || t("/shipping");
	function i(s) {
		s.preventDefault, n(aR(r)), t("/placeorder");
	}
	return c.jsxs(Li, {
		children: [
			c.jsx(Up, { step1: !0, step2: !0, step3: !0 }),
			c.jsxs(I, {
				onSubmit: i,
				children: [
					c.jsxs(I.Group, {
						children: [
							c.jsx(I.Label, {
								as: "legend",
								children: "Select Method",
							}),
							c.jsx(q, {
								children: c.jsx(I.Check, {
									checked: !0,
									type: "radio",
									label: "PayPal or Credit Card",
									id: "paypal",
									name: "paymentMethod",
									onChange: (s) => o(s.target.value),
								}),
							}),
						],
					}),
					c.jsx(Ue, {
						type: "submit",
						className: "my-3",
						children: "Continue",
					}),
				],
			}),
		],
	});
}
function XD() {
	const e = Je((l) => l.cart),
		t = [...e.cartItems];
	(t.itemsPrice = t.reduce((l, u) => l + u.price * u.qty, 0).toFixed(2)),
		(t.shippingPrice = (t.itemsPrice > 100 ? 0 : 10).toFixed(2)),
		(t.taxPrice = Number(t.itemsPrice * 0.082).toFixed(2)),
		(t.totalPrice = (
			Number(t.itemsPrice) +
			Number(t.shippingPrice) +
			Number(t.taxPrice)
		).toFixed(2));
	const n = Ve(),
		r = Je((l) => l.userLogin.userInfo),
		o = It(),
		i = un(
			async () =>
				(
					await ge.post(
						"/api/orders/add/",
						{
							orderItems: e.cartItems,
							shippingAddress: e.shippingAddress,
							paymentMethod: e.paymentMethod,
							itemsPrice: t.itemsPrice,
							shippingPrice: t.shippingPrice,
							taxPrice: t.taxPrice,
							totalPrice: t.totalPrice,
						},
						{
							headers: {
								"Content-type": "application/json",
								Authorization: `Bearer ${r.token}`,
							},
						}
					)
				).data,
			{
				onSuccess: (l) => {
					o(SR(l)), o(ER()), o(lR()), n(`/order/${l._id}`);
				},
				onError: (l) => {
					console.log("Login error", l.response.data.detail);
				},
			}
		),
		{ error: s } = i;
	function a() {
		i.mutate(), console.log("placeOrder");
	}
	return c.jsxs("div", {
		children: [
			c.jsx(Up, { step1: !0, step2: !0, step3: !0, step4: !0 }),
			c.jsxs(Oe, {
				children: [
					c.jsx(q, {
						md: 8,
						children: c.jsxs(ee, {
							variant: "flush",
							children: [
								c.jsxs(ee.Item, {
									children: [
										c.jsx("h2", { children: "Shipping" }),
										c.jsxs("p", {
											children: [
												c.jsx("strong", {
													children: "Shipping: ",
												}),
												e.shippingAddress.address,
												",",
												" ",
												e.shippingAddress.city,
												",",
												" ",
												e.shippingAddress.postalCode,
												",",
												" ",
												e.shippingAddress.country,
											],
										}),
									],
								}),
								c.jsxs(ee.Item, {
									children: [
										c.jsx("h2", {
											children: "Payment Method",
										}),
										c.jsxs("p", {
											children: [
												c.jsx("strong", {
													children: "Method ",
												}),
												e.paymentMethod,
											],
										}),
									],
								}),
								c.jsxs(ee.Item, {
									children: [
										c.jsx("h2", {
											children: "Order Items",
										}),
										e.cartItems.length === 0
											? c.jsx(ve, {
													variant: "info",
													children:
														"Your Cart is Empty",
											  })
											: c.jsx(ee, {
													variant: "flush",
													children: e.cartItems.map(
														(l, u) =>
															c.jsx(
																ee.Item,
																{
																	children:
																		c.jsxs(
																			Oe,
																			{
																				children:
																					[
																						c.jsx(
																							q,
																							{
																								md: 2,
																								children:
																									c.jsx(
																										ia,
																										{
																											src:
																												ge.defaults.baseURL.slice(
																													0,
																													-1
																												) +
																												l.image,
																											alt: l.name,
																											fluid: !0,
																											rounded:
																												!0,
																										}
																									),
																							}
																						),
																						c.jsx(
																							q,
																							{
																								children:
																									c.jsx(
																										xt,
																										{
																											to: `/product/${l.id}`,
																											children:
																												l.name,
																										}
																									),
																							}
																						),
																						c.jsxs(
																							q,
																							{
																								md: 4,
																								children:
																									[
																										l.qty,
																										" X $",
																										l.price,
																										" = $",
																										(
																											l.qty *
																											l.price
																										).toFixed(
																											2
																										),
																									],
																							}
																						),
																					],
																			}
																		),
																},
																u
															)
													),
											  }),
									],
								}),
							],
						}),
					}),
					c.jsx(q, {
						md: 4,
						children: c.jsx(An, {
							children: c.jsxs(ee, {
								variant: "flush",
								children: [
									c.jsx(ee.Item, {
										children: c.jsx("h2", {
											children: "Order Summary",
										}),
									}),
									c.jsx(ee.Item, {
										children: c.jsxs(Oe, {
											children: [
												c.jsx(q, {
													children: "Items: ",
												}),
												c.jsxs(q, {
													children: [
														"$",
														t.itemsPrice,
													],
												}),
											],
										}),
									}),
									c.jsx(ee.Item, {
										children: c.jsxs(Oe, {
											children: [
												c.jsx(q, {
													children: "Shipping: ",
												}),
												c.jsxs(q, {
													children: [
														"$",
														t.shippingPrice,
													],
												}),
											],
										}),
									}),
									c.jsx(ee.Item, {
										children: c.jsxs(Oe, {
											children: [
												c.jsx(q, { children: "Tax: " }),
												c.jsxs(q, {
													children: ["$", t.taxPrice],
												}),
											],
										}),
									}),
									c.jsx(ee.Item, {
										children: c.jsxs(Oe, {
											children: [
												c.jsx(q, {
													children: "Total: ",
												}),
												c.jsxs(q, {
													children: [
														"$",
														t.totalPrice,
													],
												}),
											],
										}),
									}),
									c.jsx(ee.Item, {
										children:
											s &&
											c.jsx(ve, {
												variant: "danger",
												children:
													s.response.data.detail,
											}),
									}),
									c.jsx(ee.Item, {
										className: "d-grid",
										children: c.jsx(Ue, {
											type: "button",
											variant: "primary",
											disabled: e.cartItems.length === 0,
											onClick: a,
											children: "Place Order",
										}),
									}),
								],
							}),
						}),
					}),
				],
			}),
		],
	});
}
/*!
 * react-paypal-js v8.2.0 (2024-03-20T19:43:57.524Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Et;
(function (e) {
	(e.INITIAL = "initial"),
		(e.PENDING = "pending"),
		(e.REJECTED = "rejected"),
		(e.RESOLVED = "resolved");
})(Et || (Et = {}));
var Ir;
(function (e) {
	(e.LOADING_STATUS = "setLoadingStatus"),
		(e.RESET_OPTIONS = "resetOptions"),
		(e.SET_BRAINTREE_INSTANCE = "braintreeInstance");
})(Ir || (Ir = {}));
var Rv;
(function (e) {
	(e.NUMBER = "number"),
		(e.CVV = "cvv"),
		(e.EXPIRATION_DATE = "expirationDate"),
		(e.EXPIRATION_MONTH = "expirationMonth"),
		(e.EXPIRATION_YEAR = "expirationYear"),
		(e.POSTAL_CODE = "postalCode");
})(Rv || (Rv = {}));
var Ke = function () {
	return (
		(Ke =
			Object.assign ||
			function (t) {
				for (var n, r = 1, o = arguments.length; r < o; r++) {
					n = arguments[r];
					for (var i in n)
						Object.prototype.hasOwnProperty.call(n, i) &&
							(t[i] = n[i]);
				}
				return t;
			}),
		Ke.apply(this, arguments)
	);
};
function WS(e, t) {
	var n = {};
	for (var r in e)
		Object.prototype.hasOwnProperty.call(e, r) &&
			t.indexOf(r) < 0 &&
			(n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
			t.indexOf(r[o]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
				(n[r[o]] = e[r[o]]);
	return n;
}
function Ov(e, t, n) {
	if (n || arguments.length === 2)
		for (var r = 0, o = t.length, i; r < o; r++)
			(i || !(r in t)) &&
				(i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
	return e.concat(i || Array.prototype.slice.call(t));
}
var Vs = "data-react-paypal-script-id",
	co = {
		DATA_CLIENT_TOKEN: "dataClientToken",
		DATA_JS_SDK_LIBRARY: "dataJsSdkLibrary",
		DATA_LIBRARY_VALUE: "react-paypal-js",
		DATA_NAMESPACE: "dataNamespace",
		DATA_SDK_INTEGRATION_SOURCE: "dataSdkIntegrationSource",
		DATA_USER_ID_TOKEN: "dataUserIdToken",
	},
	JD = "Failed to load the PayPal JS SDK script.",
	QS = "paypal",
	YD = "usePayPalScriptReducer must be used within a PayPalScriptProvider";
function ZD(e) {
	return e === void 0 && (e = QS), window[e];
}
function eL(e) {
	for (var t = "", n = 0; n < e.length; n++) {
		var r = e[n].charCodeAt(0) * n;
		e[n + 1] && (r += e[n + 1].charCodeAt(0) * (n - 1)),
			(t += String.fromCharCode(97 + (Math.abs(r) % 26)));
	}
	return t;
}
function tL(e) {
	var t = e.reactComponentName,
		n = e.sdkComponentKey,
		r = e.sdkRequestedComponents,
		o = r === void 0 ? "" : r,
		i = e.sdkDataNamespace,
		s = i === void 0 ? QS : i,
		a = n.charAt(0).toUpperCase().concat(n.substring(1)),
		l = "Unable to render <"
			.concat(t, " /> because window.")
			.concat(s, ".")
			.concat(a, " is undefined."),
		u = typeof o == "string" ? o : o.join(",");
	if (!u.includes(n)) {
		var d = [u, n].filter(Boolean).join();
		l +=
			`
To fix the issue, add '`.concat(
				n,
				"' to the list of components passed to the parent PayPalScriptProvider:"
			) +
			"\n`<PayPalScriptProvider options={{ components: '".concat(
				d,
				"'}}>`."
			);
	}
	return l;
}
function VS(e) {
	var t = e,
		n = Vs;
	t[n];
	var r = WS(t, [n + ""]);
	return "react-paypal-js-".concat(eL(JSON.stringify(r)));
}
function nL(e) {
	var t = self.document.querySelector(
		"script[".concat(Vs, '="').concat(e, '"]')
	);
	t != null && t.parentNode && t.parentNode.removeChild(t);
}
function rL(e, t) {
	var n, r;
	switch (t.type) {
		case Ir.LOADING_STATUS:
			return typeof t.value == "object"
				? Ke(Ke({}, e), {
						loadingStatus: t.value.state,
						loadingStatusErrorMessage: t.value.message,
				  })
				: Ke(Ke({}, e), { loadingStatus: t.value });
		case Ir.RESET_OPTIONS:
			return (
				nL(e.options[Vs]),
				Ke(Ke({}, e), {
					loadingStatus: Et.PENDING,
					options: Ke(
						Ke(
							((n = {}),
							(n[co.DATA_SDK_INTEGRATION_SOURCE] =
								co.DATA_LIBRARY_VALUE),
							n),
							t.value
						),
						((r = {}), (r[Vs] = "".concat(VS(t.value))), r)
					),
				})
			);
		case Ir.SET_BRAINTREE_INSTANCE:
			return Ke(Ke({}, e), { braintreePayPalCheckoutInstance: t.value });
		default:
			return e;
	}
}
var qS = p.createContext(null);
function oL(e) {
	if (
		typeof (e == null ? void 0 : e.dispatch) == "function" &&
		e.dispatch.length !== 0
	)
		return e;
	throw new Error(YD);
}
function iL() {
	var e = oL(p.useContext(qS)),
		t = Ke(Ke({}, e), {
			isInitial: e.loadingStatus === Et.INITIAL,
			isPending: e.loadingStatus === Et.PENDING,
			isResolved: e.loadingStatus === Et.RESOLVED,
			isRejected: e.loadingStatus === Et.REJECTED,
		});
	return [t, e.dispatch];
}
p.createContext({});
var Bp = function (e) {
	var t = e.className,
		n = t === void 0 ? "" : t,
		r = e.disabled,
		o = r === void 0 ? !1 : r,
		i = e.children,
		s = e.forceReRender,
		a = s === void 0 ? [] : s,
		l = WS(e, ["className", "disabled", "children", "forceReRender"]),
		u = o ? { opacity: 0.38 } : {},
		d = ""
			.concat(n, " ")
			.concat(o ? "paypal-buttons-disabled" : "")
			.trim(),
		f = p.useRef(null),
		h = p.useRef(null),
		m = iL()[0],
		y = m.isResolved,
		w = m.options,
		S = p.useState(null),
		g = S[0],
		x = S[1],
		v = p.useState(!0),
		C = v[0],
		j = v[1],
		E = p.useState(null),
		O = E[1];
	function R() {
		h.current !== null && h.current.close().catch(function () {});
	}
	return (
		p.useEffect(function () {
			if (y === !1) return R;
			var D = ZD(w.dataNamespace);
			if (D === void 0 || D.Buttons === void 0)
				return (
					O(function () {
						throw new Error(
							tL({
								reactComponentName: Bp.displayName,
								sdkComponentKey: "buttons",
								sdkRequestedComponents: w.components,
								sdkDataNamespace: w[co.DATA_NAMESPACE],
							})
						);
					}),
					R
				);
			var N = function (L, $) {
				x($), typeof l.onInit == "function" && l.onInit(L, $);
			};
			try {
				h.current = D.Buttons(Ke(Ke({}, l), { onInit: N }));
			} catch (L) {
				return O(function () {
					throw new Error(
						"Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(
							L
						)
					);
				});
			}
			return h.current.isEligible() === !1
				? (j(!1), R)
				: (f.current &&
						h.current.render(f.current).catch(function (L) {
							f.current === null ||
								f.current.children.length === 0 ||
								O(function () {
									throw new Error(
										"Failed to render <PayPalButtons /> component. ".concat(
											L
										)
									);
								});
						}),
				  R);
		}, Ov(Ov([y], a, !0), [l.fundingSource], !1)),
		p.useEffect(
			function () {
				g !== null &&
					(o === !0
						? g.disable().catch(function () {})
						: g.enable().catch(function () {}));
			},
			[o, g]
		),
		ie.createElement(
			ie.Fragment,
			null,
			C ? ie.createElement("div", { ref: f, style: u, className: d }) : i
		)
	);
};
Bp.displayName = "PayPalButtons";
function sL(e, t) {
	var n = document.querySelector('script[src="'.concat(e, '"]'));
	if (n === null) return null;
	var r = GS(e, t),
		o = n.cloneNode();
	if (
		(delete o.dataset.uidAuto,
		Object.keys(o.dataset).length !== Object.keys(r.dataset).length)
	)
		return null;
	var i = !0;
	return (
		Object.keys(o.dataset).forEach(function (s) {
			o.dataset[s] !== r.dataset[s] && (i = !1);
		}),
		i ? n : null
	);
}
function aL(e) {
	var t = e.url,
		n = e.attributes,
		r = e.onSuccess,
		o = e.onError,
		i = GS(t, n);
	(i.onerror = o),
		(i.onload = r),
		document.head.insertBefore(i, document.head.firstElementChild);
}
function lL(e) {
	var t = "https://www.paypal.com/sdk/js";
	e.sdkBaseUrl && ((t = e.sdkBaseUrl), delete e.sdkBaseUrl);
	var n = e,
		r = Object.keys(n)
			.filter(function (s) {
				return typeof n[s] < "u" && n[s] !== null && n[s] !== "";
			})
			.reduce(
				function (s, a) {
					var l = n[a].toString();
					return (
						(a = uL(a)),
						a.substring(0, 4) === "data" || a === "crossorigin"
							? (s.attributes[a] = l)
							: (s.queryParams[a] = l),
						s
					);
				},
				{ queryParams: {}, attributes: {} }
			),
		o = r.queryParams,
		i = r.attributes;
	return (
		o["merchant-id"] &&
			o["merchant-id"].indexOf(",") !== -1 &&
			((i["data-merchant-id"] = o["merchant-id"]),
			(o["merchant-id"] = "*")),
		{ url: "".concat(t, "?").concat(cL(o)), attributes: i }
	);
}
function uL(e) {
	var t = function (n, r) {
		return (r ? "-" : "") + n.toLowerCase();
	};
	return e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, t);
}
function cL(e) {
	var t = "";
	return (
		Object.keys(e).forEach(function (n) {
			t.length !== 0 && (t += "&"), (t += n + "=" + e[n]);
		}),
		t
	);
}
function GS(e, t) {
	t === void 0 && (t = {});
	var n = document.createElement("script");
	return (
		(n.src = e),
		Object.keys(t).forEach(function (r) {
			n.setAttribute(r, t[r]),
				r === "data-csp-nonce" &&
					n.setAttribute("nonce", t["data-csp-nonce"]);
		}),
		n
	);
}
function dL(e, t) {
	if ((t === void 0 && (t = Promise), XS(e, t), typeof document > "u"))
		return t.resolve(null);
	var n = lL(e),
		r = n.url,
		o = n.attributes,
		i = o["data-namespace"] || "paypal",
		s = bv(i);
	return (
		o["data-js-sdk-library"] || (o["data-js-sdk-library"] = "paypal-js"),
		sL(r, o) && s
			? t.resolve(s)
			: fL({ url: r, attributes: o }, t).then(function () {
					var a = bv(i);
					if (a) return a;
					throw new Error(
						"The window.".concat(
							i,
							" global variable is not available."
						)
					);
			  })
	);
}
function fL(e, t) {
	t === void 0 && (t = Promise), XS(e, t);
	var n = e.url,
		r = e.attributes;
	if (typeof n != "string" || n.length === 0) throw new Error("Invalid url.");
	if (typeof r < "u" && typeof r != "object")
		throw new Error("Expected attributes to be an object.");
	return new t(function (o, i) {
		if (typeof document > "u") return o();
		aL({
			url: n,
			attributes: r,
			onSuccess: function () {
				return o();
			},
			onError: function () {
				var s = new Error(
					'The script "'.concat(
						n,
						'" failed to load. Check the HTTP status code and response body in DevTools to learn more.'
					)
				);
				return i(s);
			},
		});
	});
}
function bv(e) {
	return window[e];
}
function XS(e, t) {
	if (typeof e != "object" || e === null)
		throw new Error("Expected an options object.");
	if (typeof t < "u" && typeof t != "function")
		throw new Error("Expected PromisePonyfill to be a function.");
}
var pL = function (e) {
	var t,
		n = e.options,
		r = n === void 0 ? { clientId: "test" } : n,
		o = e.children,
		i = e.deferLoading,
		s = i === void 0 ? !1 : i,
		a = p.useReducer(rL, {
			options: Ke(
				Ke({}, r),
				((t = {}),
				(t[co.DATA_JS_SDK_LIBRARY] = co.DATA_LIBRARY_VALUE),
				(t[co.DATA_SDK_INTEGRATION_SOURCE] = co.DATA_LIBRARY_VALUE),
				(t[Vs] = "".concat(VS(r))),
				t)
			),
			loadingStatus: s ? Et.INITIAL : Et.PENDING,
		}),
		l = a[0],
		u = a[1];
	return (
		p.useEffect(
			function () {
				if (s === !1 && l.loadingStatus === Et.INITIAL)
					return u({ type: Ir.LOADING_STATUS, value: Et.PENDING });
				if (l.loadingStatus === Et.PENDING) {
					var d = !0;
					return (
						dL(l.options)
							.then(function () {
								d &&
									u({
										type: Ir.LOADING_STATUS,
										value: Et.RESOLVED,
									});
							})
							.catch(function (f) {
								console.error("".concat(JD, " ").concat(f)),
									d &&
										u({
											type: Ir.LOADING_STATUS,
											value: {
												state: Et.REJECTED,
												message: String(f),
											},
										});
							}),
						function () {
							d = !1;
						}
					);
				}
			},
			[l.options, s, l.loadingStatus]
		),
		ie.createElement(
			qS.Provider,
			{ value: Ke(Ke({}, l), { dispatch: u }) },
			o
		)
	);
};
function hL() {
	var w, S;
	const e = It(),
		t = Ve(),
		n = Je((g) => g.userLogin.userInfo),
		{ id: r } = Ni(),
		[o, i] = p.useState(),
		{
			isLoading: s,
			error: a,
			refetch: l,
		} = cn(
			"productDetails",
			async () =>
				(
					await ge.get(`/api/orders/${r}/`, {
						headers: {
							"Content-type": "application/json",
							Authorization: `Bearer ${n.token}`,
						},
					})
				).data,
			{
				onSuccess: (g) => {
					(g.itemsPrice = g.orderItems
						.reduce((x, v) => x + v.price * v.qty, 0)
						.toFixed(2)),
						i(g),
						e(CR(g));
				},
			}
		),
		u = un(
			async () =>
				(
					await ge.put(
						`/api/orders/${r}/pay/`,
						{},
						{
							headers: {
								"Content-type": "application/json",
								Authorization: `Bearer ${n.token}`,
							},
						}
					)
				).data,
			{
				onSuccess: (g) => {
					l();
				},
			}
		),
		d = un(
			async () =>
				(
					await ge.put(
						`/api/orders/${r}/deliver/`,
						{},
						{
							headers: {
								"Content-type": "application/json",
								Authorization: `Bearer ${n.token}`,
							},
						}
					)
				).data,
			{
				onSuccess: (g) => {
					l();
				},
			}
		),
		{ isLoading: f } = d;
	function h(g, x) {
		return x.order.create({
			purchase_units: [{ amount: { value: o.totalPrice } }],
		});
	}
	function m(g, x) {
		return x.order
			.capture()
			.then((v) => {
				u.mutate();
			})
			.catch((v) => {
				console.log(v);
			});
	}
	function y() {
		d.mutate();
	}
	return (
		p.useEffect(() => {
			n || t("/login");
		}, [n]),
		c.jsx(c.Fragment, {
			children: s
				? c.jsx(He, {})
				: a
				? c.jsx(ve, {
						variant: "danger",
						children: a.response.data.detail,
				  })
				: o
				? c.jsxs(c.Fragment, {
						children: [
							c.jsxs("h1", { children: ["Order: ", o._id] }),
							c.jsxs(Oe, {
								children: [
									c.jsx(q, {
										md: 8,
										children: c.jsxs(ee, {
											variant: "flush",
											children: [
												c.jsxs(ee.Item, {
													children: [
														c.jsx("h2", {
															children:
																"Shipping Address",
														}),
														c.jsxs("p", {
															children: [
																c.jsx(
																	"strong",
																	{
																		children:
																			"Name: ",
																	}
																),
																o.user.name,
															],
														}),
														c.jsxs("p", {
															children: [
																c.jsx(
																	"strong",
																	{
																		children:
																			"Email: ",
																	}
																),
																c.jsx("a", {
																	href: `mailto:${o.user.email}`,
																	children:
																		o.user
																			.email,
																}),
															],
														}),
														c.jsxs("p", {
															children: [
																c.jsx(
																	"strong",
																	{
																		children:
																			"Shipping: ",
																	}
																),
																o
																	.shippingAddress
																	.address,
																",",
																" ",
																o
																	.shippingAddress
																	.city,
																",",
																" ",
																o
																	.shippingAddress
																	.postalCode,
																",",
																" ",
																o
																	.shippingAddress
																	.country,
															],
														}),
														o.isDelivered
															? c.jsxs(ve, {
																	variant:
																		"success",
																	children: [
																		"Delivered on:",
																		" ",
																		(w =
																			o.deliveredAt) ==
																		null
																			? void 0
																			: w.substring(
																					0,
																					10
																			  ),
																	],
															  })
															: c.jsx(ve, {
																	variant:
																		"warning",
																	children:
																		"Not Delivered",
															  }),
													],
												}),
												c.jsxs(ee.Item, {
													children: [
														c.jsx("h2", {
															children:
																"Payment Method",
														}),
														c.jsxs("p", {
															children: [
																c.jsx(
																	"strong",
																	{
																		children:
																			"Method ",
																	}
																),
																o.paymentMethod,
															],
														}),
														o.isPaid
															? c.jsxs(ve, {
																	variant:
																		"success",
																	children: [
																		"Paid on:",
																		" ",
																		(S =
																			o.paidAt) ==
																		null
																			? void 0
																			: S.substring(
																					0,
																					10
																			  ),
																	],
															  })
															: c.jsx(ve, {
																	variant:
																		"warning",
																	children:
																		"Not Paid",
															  }),
													],
												}),
												c.jsxs(ee.Item, {
													children: [
														c.jsx("h2", {
															children:
																"Order Items",
														}),
														o.orderItems.length ===
														0
															? c.jsx(ve, {
																	variant:
																		"info",
																	children:
																		"Your order is Empty",
															  })
															: c.jsx(ee, {
																	variant:
																		"flush",
																	children:
																		o.orderItems.map(
																			(
																				g,
																				x
																			) =>
																				c.jsx(
																					ee.Item,
																					{
																						children:
																							c.jsxs(
																								Oe,
																								{
																									children:
																										[
																											c.jsx(
																												q,
																												{
																													md: 2,
																													children:
																														c.jsx(
																															ia,
																															{
																																src:
																																	ge.defaults.baseURL.slice(
																																		0,
																																		-1
																																	) +
																																	g.image,
																																alt: g.name,
																																fluid: !0,
																																rounded:
																																	!0,
																															}
																														),
																												}
																											),
																											c.jsx(
																												q,
																												{
																													children:
																														c.jsx(
																															xt,
																															{
																																to: `/product/${g.id}`,
																																children:
																																	g.name,
																															}
																														),
																												}
																											),
																											c.jsxs(
																												q,
																												{
																													md: 4,
																													children:
																														[
																															g.qty,
																															" X $",
																															g.price,
																															" = $",
																															(
																																g.qty *
																																g.price
																															).toFixed(
																																2
																															),
																														],
																												}
																											),
																										],
																								}
																							),
																					},
																					x
																				)
																		),
															  }),
													],
												}),
											],
										}),
									}),
									c.jsx(q, {
										md: 4,
										children: c.jsx(An, {
											children: c.jsxs(ee, {
												variant: "flush",
												children: [
													c.jsx(ee.Item, {
														children: c.jsx("h2", {
															children:
																"Order Summary",
														}),
													}),
													c.jsx(ee.Item, {
														children: c.jsxs(Oe, {
															children: [
																c.jsx(q, {
																	children:
																		"Items: ",
																}),
																c.jsxs(q, {
																	children: [
																		"$",
																		o.itemsPrice,
																	],
																}),
															],
														}),
													}),
													c.jsx(ee.Item, {
														children: c.jsxs(Oe, {
															children: [
																c.jsx(q, {
																	children:
																		"Shipping: ",
																}),
																c.jsxs(q, {
																	children: [
																		"$",
																		o.shippingPrice,
																	],
																}),
															],
														}),
													}),
													c.jsx(ee.Item, {
														children: c.jsxs(Oe, {
															children: [
																c.jsx(q, {
																	children:
																		"Tax: ",
																}),
																c.jsxs(q, {
																	children: [
																		"$",
																		o.taxPrice,
																	],
																}),
															],
														}),
													}),
													c.jsx(ee.Item, {
														children: c.jsxs(Oe, {
															children: [
																c.jsx(q, {
																	children:
																		"Total: ",
																}),
																c.jsxs(q, {
																	children: [
																		"$",
																		o.totalPrice,
																	],
																}),
															],
														}),
													}),
													a &&
														c.jsx(ee.Item, {
															children: c.jsx(
																ve,
																{
																	variant:
																		"danger",
																	children:
																		a
																			.response
																			.data
																			.detail,
																}
															),
														}),
													!o.isPaid &&
														c.jsx(ee.Item, {
															children: c.jsx(
																pL,
																{
																	options: {
																		clientId:
																			"ATnw-Lq2GXW48MU2SGG2bJD6_S0LcATzZJI4CzShqpMP_SiTdiUbOXFLfxE0CvPObqvMoHN6SMbwSGx6",
																	},
																	children:
																		c.jsx(
																			Bp,
																			{
																				createOrder:
																					(
																						g,
																						x
																					) =>
																						h(
																							g,
																							x
																						),
																				onApprove:
																					(
																						g,
																						x
																					) =>
																						m(
																							g,
																							x
																						),
																				onError:
																					(
																						g
																					) => {
																						console.log(
																							g
																						);
																					},
																			}
																		),
																}
															),
														}),
													f && c.jsx(He, {}),
													n &&
														n.isAdmin &&
														o.isPaid &&
														!o.isDelivered &&
														c.jsx(ee.Item, {
															className: "d-grid",
															children: c.jsx(
																Ue,
																{
																	type: "button",
																	onClick: y,
																	children:
																		"Mark as Delivered",
																}
															),
														}),
												],
											}),
										}),
									}),
								],
							}),
						],
				  })
				: "",
		})
	);
}
function mL() {
	const e = It(),
		t = Je((f) => f.userLogin.userList),
		n = Ve(),
		r = Je((f) => f.userLogin.userInfo),
		{
			error: o,
			isLoading: i,
			refetch: s,
		} = cn(
			"userList",
			async () =>
				(
					await ge.get("/api/users/", {
						headers: {
							"Content-type": "application/json",
							Authorization: `Bearer ${r.token}`,
						},
					})
				).data,
			{
				onSuccess: (f) => {
					e(hR(f));
				},
				onError: (f) => {
					console.log("error getting users: ", f);
				},
			}
		),
		[a, l] = p.useState(),
		u = un(
			async () =>
				(
					await ge.delete(`/api/users/delete/${a}/`, {
						headers: {
							"Content-type": "application/json",
							Authorization: `Bearer ${r.token}`,
						},
					})
				).data,
			{
				onSuccess: (f) => {
					console.log("User delted succesfully", f), l(null), s();
				},
				onError: (f) => {
					console.log("user deletion error", f);
				},
			}
		);
	p.useEffect(() => {
		(!r || !r.isAdmin) && n("/login"), a && u.mutate();
	}, [r, a]);
	function d(f) {
		window.confirm("Are you sure you want to delete this user?") && l(f);
	}
	return c.jsxs(c.Fragment, {
		children: [
			c.jsx("h2", { children: "Users" }),
			i
				? c.jsx(He, {})
				: o
				? c.jsx(ve, {
						variant: "danger",
						children: o.response.data.detail,
				  })
				: c.jsxs(Cu, {
						striped: !0,
						bordered: !0,
						responsive: !0,
						hover: !0,
						className: "table-sm",
						children: [
							c.jsx("thead", {
								children: c.jsxs("tr", {
									children: [
										c.jsx("th", { children: "ID" }),
										c.jsx("th", { children: "Name" }),
										c.jsx("th", { children: "Email" }),
										c.jsx("th", { children: "Admin" }),
										c.jsx("th", {}),
									],
								}),
							}),
							c.jsx("tbody", {
								children: t.map((f) =>
									c.jsxs(
										"tr",
										{
											children: [
												c.jsx("td", {
													children: f._id,
												}),
												c.jsx("td", {
													children: f.name,
												}),
												c.jsx("td", {
													children: f.email,
												}),
												c.jsx("td", {
													children: f.isAdmin
														? c.jsx("i", {
																className:
																	"fas fa-check",
																style: {
																	color: "green",
																},
														  })
														: c.jsx("i", {
																className:
																	"fas fa-xmark",
																style: {
																	color: "red",
																},
														  }),
												}),
												c.jsxs("td", {
													className: "text-end",
													children: [
														c.jsx(
															ct.LinkContainer,
															{
																to: `/admin/user/${f._id}/edit`,
																children: c.jsx(
																	Ue,
																	{
																		variant:
																			"dark",
																		className:
																			"btn-sm",
																		children:
																			c.jsx(
																				"i",
																				{
																					className:
																						"fas fa-edit",
																				}
																			),
																	}
																),
															}
														),
														c.jsx(Ue, {
															variant: "danger",
															className:
																"btn-sm mx-3",
															onClick: () =>
																d(f._id),
															children: c.jsx(
																"i",
																{
																	className:
																		"fas fa-trash",
																}
															),
														}),
													],
												}),
											],
										},
										f._id
									)
								),
							}),
						],
				  }),
		],
	});
}
function vL() {
	const [e, t] = p.useState(""),
		[n, r] = p.useState(""),
		[o, i] = p.useState(!1),
		{ id: s } = Ni(),
		a = Ve(),
		{ userInfo: l } = Je((m) => m.userLogin),
		{ error: u, isLoading: d } = cn(
			"user",
			async () =>
				(
					await ge.get(`/api/users/${s}/`, {
						headers: {
							"Content-type": "application/json",
							Authorization: `Bearer ${l.token}`,
						},
					})
				).data,
			{
				onSuccess: (m) => {
					t(m.name), r(m.email), i(!!m.isAdmin);
				},
				onError: (m) => {
					console.log("Error getting user: ", m);
				},
			}
		),
		f = un(
			async () =>
				(
					await ge.put(
						`/api/users/update/${s}/`,
						{ name: e, email: n, isAdmin: o },
						{
							headers: {
								"Content-type": "application/json",
								Authorization: `Bearer ${l.token}`,
							},
						}
					)
				).data,
			{
				onSuccess: (m) => {
					a("/admin/userlist");
				},
				onError: (m) => {
					console.log("User update error", m.response.data.detail);
				},
			}
		);
	function h(m) {
		m.preventDefault(), f.mutate();
	}
	return c.jsxs(c.Fragment, {
		children: [
			c.jsx(xt, { to: "/admin/userlist", children: "Go Back" }),
			c.jsxs(Li, {
				children: [
					c.jsx("h1", { children: "Edit User" }),
					f.isLoading && c.jsx(He, {}),
					f.error &&
						c.jsx(ve, {
							variant: "danger",
							children: f.error.response.data.detail,
						}),
					u
						? c.jsx(ve, {
								variant: "danger",
								children: error.response.data.detail,
						  })
						: d
						? c.jsx(He, {})
						: c.jsxs(I, {
								onSubmit: h,
								children: [
									c.jsxs(I.Group, {
										controlId: "name",
										children: [
											c.jsx(I.Label, {
												children: "Username",
											}),
											c.jsx(I.Control, {
												type: "name",
												placeholder: "Enter Name",
												value: e,
												onChange: (m) =>
													t(m.target.value),
											}),
										],
									}),
									c.jsxs(I.Group, {
										controlId: "email",
										children: [
											c.jsx(I.Label, {
												children: "Email Address",
											}),
											c.jsx(I.Control, {
												type: "email",
												placeholder: "Enter Email",
												value: n,
												onChange: (m) =>
													r(m.target.value),
											}),
										],
									}),
									c.jsxs(I.Group, {
										controlId: "isadmin",
										children: [
											c.jsx(I.Label, {
												children: "Admin",
											}),
											c.jsx(I.Check, {
												type: "checkbox",
												lable: "Is Admin",
												checked: o,
												onChange: (m) =>
													i(m.target.checked),
											}),
										],
									}),
									c.jsx(Ue, {
										type: "submit",
										className: "my-3",
										children: "Update",
									}),
								],
						  }),
				],
			}),
		],
	});
}
function yL() {
	const e = It(),
		t = Ve(),
		[n] = Po(),
		r = n.get("page"),
		o = Je((w) => w.userLogin.userInfo),
		[i, s] = p.useState(),
		{
			data: a,
			error: l,
			isLoading: u,
			refetch: d,
		} = cn(
			"proudctList",
			async () =>
				(
					await ge.get(`/api/products?page=${r}`, {
						headers: { "Content-type": "application/json" },
					})
				).data,
			{
				onSuccess: (w) => {
					e(l0(w.products));
				},
				onError: (w) => {
					console.log("error getting products: ", w);
				},
			}
		),
		f = un(
			async () =>
				(
					await ge.delete(`/api/products/delete/${i}/`, {
						headers: {
							"Content-type": "application/json",
							Authorization: `Bearer ${o.token}`,
						},
					})
				).data,
			{
				onSuccess: (w) => {
					console.log("User deleted succesfully", w), s(null), d();
				},
				onError: (w) => {
					console.log("user deletion error", w);
				},
			}
		);
	p.useEffect(() => {
		(!o || !o.isAdmin) && t("/login"), i && f.mutate(), d();
	}, [o, i, r]);
	function h(w) {
		window.confirm("Are you sure you want to delete this product?") && s(w);
	}
	const m = un(
		async () =>
			(
				await ge.post(
					"/api/products/create/",
					{},
					{
						headers: {
							"Content-type": "application/json",
							Authorization: `Bearer ${o.token}`,
						},
					}
				)
			).data,
		{
			onSuccess: (w) => {
				t(`/admin/product/${w._id}/edit`), d();
			},
			onError: (w) => {
				console.log("Product Creation error", w);
			},
		}
	);
	function y(w) {
		m.mutate();
	}
	return c.jsxs(c.Fragment, {
		children: [
			c.jsxs(Oe, {
				className: "align-items-center",
				children: [
					c.jsx(q, {
						children: c.jsx("h1", { children: "Products" }),
					}),
					c.jsx(q, {
						className: "text-end",
						children: c.jsxs(Ue, {
							className: "my-3",
							onClick: y,
							children: [
								c.jsx("i", { className: "fas fa-plus" }),
								" Create Product",
							],
						}),
					}),
				],
			}),
			f.isLoading && c.jsx(He, {}),
			f.error &&
				c.jsx(ve, {
					variant: "danger",
					children: f.error.response.data.detail,
				}),
			m.isLoading && c.jsx(He, {}),
			m.error &&
				c.jsx(ve, {
					variant: "danger",
					children: m.error.response.data.detail,
				}),
			u
				? c.jsx(He, {})
				: l
				? c.jsx(ve, {
						variant: "danger",
						children: l.response.data.detail,
				  })
				: c.jsxs(c.Fragment, {
						children: [
							c.jsxs(Cu, {
								striped: !0,
								bordered: !0,
								responsive: !0,
								hover: !0,
								className: "table-sm",
								children: [
									c.jsx("thead", {
										children: c.jsxs("tr", {
											children: [
												c.jsx("th", { children: "ID" }),
												c.jsx("th", {
													children: "Name",
												}),
												c.jsx("th", {
													children: "Price",
												}),
												c.jsx("th", {
													children: "Category",
												}),
												c.jsx("th", {
													children: "Brand",
												}),
												c.jsx("th", {}),
											],
										}),
									}),
									c.jsx("tbody", {
										children: a.products.map((w) =>
											c.jsxs(
												"tr",
												{
													children: [
														c.jsx("td", {
															children: w._id,
														}),
														c.jsx("td", {
															children: w.name,
														}),
														c.jsxs("td", {
															children: [
																"$",
																w.price,
															],
														}),
														c.jsx("td", {
															children:
																w.category,
														}),
														c.jsx("td", {
															children: w.brand,
														}),
														c.jsxs("td", {
															className:
																"text-end",
															children: [
																c.jsx(
																	ct.LinkContainer,
																	{
																		to: `/admin/product/${w._id}/edit`,
																		children:
																			c.jsx(
																				Ue,
																				{
																					variant:
																						"dark",
																					className:
																						"btn-sm",
																					children:
																						c.jsx(
																							"i",
																							{
																								className:
																									"fas fa-edit",
																							}
																						),
																				}
																			),
																	}
																),
																c.jsx(Ue, {
																	variant:
																		"danger",
																	className:
																		"btn-sm mx-3",
																	onClick:
																		() =>
																			h(
																				w._id
																			),
																	children:
																		c.jsx(
																			"i",
																			{
																				className:
																					"fas fa-trash",
																			}
																		),
																}),
															],
														}),
													],
												},
												w._id
											)
										),
									}),
								],
							}),
							c.jsx(KS, {
								pages: a.pages,
								page: a.page,
								isAdmin: !0,
							}),
						],
				  }),
		],
	});
}
function gL() {
	const [e, t] = p.useState(""),
		[n, r] = p.useState(0),
		[o, i] = p.useState(""),
		[s, a] = p.useState(""),
		[l, u] = p.useState(0),
		[d, f] = p.useState(""),
		[h, m] = p.useState(""),
		[y, w] = p.useState(!1),
		{ id: S } = Ni(),
		g = Ve(),
		{ userInfo: x } = Je((R) => R.userLogin),
		{ error: v, isLoading: C } = cn(
			"product",
			async () =>
				(
					await ge.get(`/api/products/${S}/`, {
						headers: {
							"Content-type": "application/json",
							Authorization: `Bearer ${x.token}`,
						},
					})
				).data,
			{
				onSuccess: (R) => {
					t(R.name),
						r(R.price),
						i(R.image),
						a(R.brand),
						u(R.countInStock),
						f(R.category),
						m(R.description);
				},
				onError: (R) => {
					console.log("Error getting user: ", R);
				},
			}
		),
		j = un(
			async () =>
				(
					await ge.put(
						`/api/products/update/${S}/`,
						{
							name: e,
							price: n,
							brand: s,
							countInStock: l,
							category: d,
							description: h,
						},
						{
							headers: {
								"Content-type": "application/json",
								Authorization: `Bearer ${x.token}`,
							},
						}
					)
				).data,
			{
				onSuccess: (R) => {
					console.log(R), g("/admin/productlist");
				},
				onError: (R) => {
					console.log("User update error", R.response.data.detail);
				},
			}
		);
	function E(R) {
		R.preventDefault(), j.mutate();
	}
	async function O(R) {
		console.log(R);
		const D = R.target.files[0],
			N = new FormData();
		console.log(ge.defaults.baseURL),
			N.append("image", D),
			N.append("product_id", S),
			w(!0);
		try {
			const L = { headers: { "Content-Type": "multipart/form-data" } },
				{ data: $ } = await ge.post("api/products/upload/", N, L);
			i($), w(!1);
		} catch {
			w(!1);
		}
	}
	return (
		p.useEffect(() => {
			(!x || !x.isAdmin) && g("/login");
		}, [x]),
		c.jsxs(c.Fragment, {
			children: [
				c.jsx(xt, { to: "/admin/productlist", children: "Go Back" }),
				c.jsxs(Li, {
					children: [
						c.jsx("h1", { children: "Edit Product" }),
						j.isLoading && c.jsx(He, {}),
						j.error &&
							c.jsx(ve, {
								variant: "danger",
								children: j.error.response.data.detail,
							}),
						v
							? c.jsx(ve, {
									variant: "danger",
									children: error.response.data.detail,
							  })
							: C
							? c.jsx(He, {})
							: c.jsxs(I, {
									onSubmit: E,
									children: [
										c.jsxs(I.Group, {
											controlId: "name",
											children: [
												c.jsx(I.Label, {
													children: "Name of Product",
												}),
												c.jsx(I.Control, {
													type: "name",
													placeholder:
														"Enter Product Name",
													value: e,
													onChange: (R) =>
														t(R.target.value),
												}),
											],
										}),
										c.jsxs(I.Group, {
											controlId: "price",
											children: [
												c.jsx(I.Label, {
													children: " Price",
												}),
												c.jsx(I.Control, {
													type: "number",
													placeholder: "Enter Price",
													value: n,
													onChange: (R) =>
														r(R.target.value),
												}),
											],
										}),
										c.jsxs(I.Group, {
											controlId: "image",
											children: [
												c.jsx(I.Label, {
													children: "Image",
												}),
												c.jsx(I.Control, {
													type: "text",
													placeholder: "Enter image",
													value: o,
													onChange: (R) =>
														i(R.target.value),
												}),
												c.jsx(I.Control, {
													type: "file",
													onChange: O,
												}),
												y && c.jsx(He, {}),
											],
										}),
										c.jsxs(I.Group, {
											controlId: "brand",
											children: [
												c.jsx(I.Label, {
													children: "Brand",
												}),
												c.jsx(I.Control, {
													type: "text",
													placeholder: "Enter Brand",
													value: s,
													onChange: (R) =>
														a(R.target.value),
												}),
											],
										}),
										c.jsxs(I.Group, {
											controlId: "countinstock",
											children: [
												c.jsx(I.Label, {
													children: "Count In Stock",
												}),
												c.jsx(I.Control, {
													type: "number",
													placeholder:
														"Enter Count in stock",
													value: l,
													onChange: (R) =>
														u(R.target.value),
												}),
											],
										}),
										c.jsxs(I.Group, {
											controlId: "category",
											children: [
												c.jsx(I.Label, {
													children: "Category",
												}),
												c.jsx(I.Control, {
													type: "text",
													placeholder:
														"Enter Category",
													value: d,
													onChange: (R) =>
														f(R.target.value),
												}),
											],
										}),
										c.jsxs(I.Group, {
											controlId: "description",
											children: [
												c.jsx(I.Label, {
													children: "Description",
												}),
												c.jsx(I.Control, {
													type: "text",
													placeholder:
														"Enter Description",
													value: h,
													onChange: (R) =>
														m(R.target.value),
												}),
											],
										}),
										c.jsx(Ue, {
											type: "submit",
											className: "my-3",
											children: "Update",
										}),
									],
							  }),
					],
				}),
			],
		})
	);
}
function xL() {
	It();
	const [e, t] = p.useState(),
		n = Ve(),
		r = Je((a) => a.userLogin.userInfo),
		{
			error: o,
			isLoading: i,
			refetch: s,
		} = cn(
			"userList",
			async () =>
				(
					await ge.get("/api/orders/", {
						headers: {
							"Content-type": "application/json",
							Authorization: `Bearer ${r.token}`,
						},
					})
				).data,
			{
				onSuccess: (a) => {
					t(a);
				},
				onError: (a) => {
					console.log("error getting orders: ", a);
				},
			}
		);
	return (
		p.useState(),
		p.useEffect(() => {
			(!r || !r.isAdmin) && n("/login");
		}, [r]),
		c.jsxs(c.Fragment, {
			children: [
				c.jsx("h2", { children: "Orders" }),
				i
					? c.jsx(He, {})
					: o
					? c.jsx(ve, {
							variant: "danger",
							children: o.response.data.detail,
					  })
					: e
					? c.jsxs(Cu, {
							striped: !0,
							bordered: !0,
							responsive: !0,
							hover: !0,
							className: "table-sm",
							children: [
								c.jsx("thead", {
									children: c.jsxs("tr", {
										children: [
											c.jsx("th", { children: "ID" }),
											c.jsx("th", { children: "User" }),
											c.jsx("th", { children: "Date" }),
											c.jsx("th", { children: "Total" }),
											c.jsx("th", { children: "Paid" }),
											c.jsx("th", {
												children: "Delivered",
											}),
											c.jsx("th", {}),
										],
									}),
								}),
								c.jsx("tbody", {
									children: e.map((a) => {
										var l, u;
										return c.jsxs(
											"tr",
											{
												children: [
													c.jsx("td", {
														children: a._id,
													}),
													c.jsx("td", {
														children:
															a.user &&
															a.user.name,
													}),
													c.jsx("td", {
														children:
															a.createdAt.substring(
																0,
																10
															),
													}),
													c.jsxs("td", {
														children: [
															"$",
															a.totalPrice,
														],
													}),
													c.jsx("td", {
														children: a.isPaid
															? c.jsx("div", {
																	style: {
																		color: "green",
																	},
																	children:
																		(l =
																			a.paidAt) ==
																		null
																			? void 0
																			: l.substring(
																					0,
																					10
																			  ),
															  })
															: c.jsx("i", {
																	className:
																		"fas fa-times",
																	style: {
																		color: "red",
																	},
															  }),
													}),
													c.jsx("td", {
														children: a.isDelivered
															? c.jsx("div", {
																	style: {
																		color: "green",
																	},
																	children:
																		(u =
																			a.deliveredAt) ==
																		null
																			? void 0
																			: u.substring(
																					0,
																					10
																			  ),
															  })
															: c.jsx("i", {
																	className:
																		"fas fa-times",
																	style: {
																		color: "red",
																	},
															  }),
													}),
													c.jsx("td", {
														children: c.jsx(
															ct.LinkContainer,
															{
																to: `/order/${a._id}`,
																children: c.jsx(
																	Ue,
																	{
																		className:
																			"btn-sm",
																		children:
																			"Details",
																	}
																),
															}
														),
													}),
												],
											},
											a._id
										);
									}),
								}),
							],
					  })
					: "",
			],
		})
	);
}
function wL() {
	return c.jsxs(mS, {
		children: [
			c.jsx(E_, {}),
			c.jsx("main", {
				className: "py-3",
				children: c.jsx(xu, {
					children: c.jsxs(pS, {
						children: [
							c.jsx(it, { path: "/", element: c.jsx(zD, {}) }),
							c.jsx(it, {
								path: "/product/:id",
								element: c.jsx(HD, {}),
							}),
							c.jsx(it, {
								path: "/cart/:id?",
								element: c.jsx(KD, {}),
							}),
							c.jsx(it, {
								path: "/login",
								element: c.jsx(WD, {}),
							}),
							c.jsx(it, {
								path: "/register",
								element: c.jsx(QD, {}),
							}),
							c.jsx(it, {
								path: "/profile",
								element: c.jsx(VD, {}),
							}),
							c.jsx(it, {
								path: "/shipping",
								element: c.jsx(qD, {}),
							}),
							c.jsx(it, {
								path: "/payment",
								element: c.jsx(GD, {}),
							}),
							c.jsx(it, {
								path: "/placeorder",
								element: c.jsx(XD, {}),
							}),
							c.jsx(it, {
								path: "/order/:id?",
								element: c.jsx(hL, {}),
							}),
							c.jsx(it, {
								path: "/admin/userlist",
								element: c.jsx(mL, {}),
							}),
							c.jsx(it, {
								path: "/admin/user/:id?/edit",
								element: c.jsx(vL, {}),
							}),
							c.jsx(it, {
								path: "/admin/productlist",
								element: c.jsx(yL, {}),
							}),
							c.jsx(it, {
								path: "/admin/product/:id?/edit",
								element: c.jsx(gL, {}),
							}),
							c.jsx(it, {
								path: "/admin/orderlist/",
								element: c.jsx(xL, {}),
							}),
						],
					}),
				}),
			}),
			c.jsx(C_, {}),
		],
	});
}
const SL = new QR();
Tc.createRoot(document.getElementById("root")).render(
	c.jsx(Q1, {
		store: bR,
		children: c.jsx(YR, { client: SL, children: c.jsx(wL, {}) }),
	})
);
