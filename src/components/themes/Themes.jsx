"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkBlue = exports.lightTheme = exports.ThemeTypes = void 0;
var ThemeTypes;
(function (ThemeTypes) {
    ThemeTypes["Light"] = "light";
    ThemeTypes["DarkBlue"] = "darkblue";
})(ThemeTypes = exports.ThemeTypes || (exports.ThemeTypes = {}));
var Raleway = "'Raleway', sans-serif";
var Hind = "Hind', sans-serif";
var Montserrat = "'Montserrat', sans-serif";
var commonTheme = {
    typography: {
        h1: {
            fontFamily: Raleway
        },
        h2: {
            fontFamily: Raleway
        },
        h3: {
            fontFamily: Raleway
        },
        h4: {
            fontFamily: Hind
        },
        h5: {
            fontFamily: Hind
        },
        h6: {
            fontFamily: Hind
        },
        body1: {
            fontFamily: Montserrat
        },
        body2: {
            fontFamily: Hind
        }
    }
};
exports.lightTheme = __assign(__assign({}, commonTheme), { palette: {
        type: "light",
        background: {
            default: "#e7e4e4"
        }
    } });
exports.darkBlue = __assign(__assign({}, commonTheme), { palette: {
        type: "dark",
        background: {
            default: "#2b3a42"
        }
    } });
