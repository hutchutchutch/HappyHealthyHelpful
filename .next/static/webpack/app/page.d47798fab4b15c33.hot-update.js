"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/DesignLifeModal/DesignLifeModal.tsx":
/*!********************************************************!*\
  !*** ./components/DesignLifeModal/DesignLifeModal.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DesignLifeModal: function() { return /* binding */ DesignLifeModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/dialog */ \"(app-pages-browser)/./components/ui/dialog.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _StepOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StepOne */ \"(app-pages-browser)/./components/DesignLifeModal/StepOne.tsx\");\n/* harmony import */ var _StepTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StepTwo */ \"(app-pages-browser)/./components/DesignLifeModal/StepTwo.tsx\");\n/* harmony import */ var _StepThree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StepThree */ \"(app-pages-browser)/./components/DesignLifeModal/StepThree.tsx\");\n/* __next_internal_client_entry_do_not_use__ DesignLifeModal auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction DesignLifeModal(param) {\n    let { isOpen, onClose } = param;\n    _s();\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [selectedPillars, setSelectedPillars] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [activities, setActivities] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleAddPillar = (pillar)=>{\n        if (!selectedPillars.includes(pillar)) {\n            setSelectedPillars([\n                ...selectedPillars,\n                pillar\n            ]);\n        }\n    };\n    const handleRemovePillar = (pillar)=>{\n        setSelectedPillars(selectedPillars.filter((p)=>p !== pillar));\n        const newCategories = {\n            ...categories\n        };\n        delete newCategories[pillar];\n        setCategories(newCategories);\n    };\n    const handleAddCategory = (pillar, category)=>{\n        setCategories((prev)=>({\n                ...prev,\n                [pillar]: [\n                    ...prev[pillar] || [],\n                    category\n                ]\n            }));\n    };\n    const handleRemoveCategory = (pillar, category)=>{\n        setCategories((prev)=>({\n                ...prev,\n                [pillar]: prev[pillar].filter((c)=>c !== category)\n            }));\n        const newActivities = {\n            ...activities\n        };\n        delete newActivities[category];\n        setActivities(newActivities);\n    };\n    const handleAddActivity = (category, activity)=>{\n        setActivities((prev)=>({\n                ...prev,\n                [category]: [\n                    ...prev[category] || [],\n                    activity\n                ]\n            }));\n    };\n    const handleRemoveActivity = (category, activity)=>{\n        setActivities((prev)=>({\n                ...prev,\n                [category]: prev[category].filter((a)=>a !== activity)\n            }));\n    };\n    const handleNext = ()=>{\n        setStep((prev)=>prev + 1);\n    };\n    const handleBack = ()=>{\n        setStep((prev)=>prev - 1);\n    };\n    const hasSelectedItems = ()=>{\n        if (step === 2) return Object.values(categories).some((cats)=>cats.length > 0);\n        if (step === 3) return Object.values(activities).some((acts)=>acts.length > 0);\n        return false;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n        open: isOpen,\n        onOpenChange: onClose,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n            className: \"flex flex-col bg-[#121212] border-white/20 text-white max-w-[80vw] w-[80vw] max-h-[85vh] p-0 gap-0 rounded-[32px] overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-6 overflow-y-auto\",\n                    children: [\n                        step === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StepOne__WEBPACK_IMPORTED_MODULE_4__.StepOne, {}, void 0, false, {\n                            fileName: \"/Users/hutch/Documents/projects/yakyak/case_study/hutchgpt/components/DesignLifeModal/DesignLifeModal.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this),\n                        step === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StepTwo__WEBPACK_IMPORTED_MODULE_5__.StepTwo, {\n                            pillars: selectedPillars,\n                            categories: categories,\n                            onAddCategory: handleAddCategory,\n                            onRemoveCategory: handleRemoveCategory\n                        }, void 0, false, {\n                            fileName: \"/Users/hutch/Documents/projects/yakyak/case_study/hutchgpt/components/DesignLifeModal/DesignLifeModal.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, this),\n                        step === 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StepThree__WEBPACK_IMPORTED_MODULE_6__.StepThree, {\n                            categories: categories,\n                            activities: activities,\n                            onAddActivity: handleAddActivity,\n                            onRemoveActivity: handleRemoveActivity\n                        }, void 0, false, {\n                            fileName: \"/Users/hutch/Documents/projects/yakyak/case_study/hutchgpt/components/DesignLifeModal/DesignLifeModal.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hutch/Documents/projects/yakyak/case_study/hutchgpt/components/DesignLifeModal/DesignLifeModal.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4 border-t border-white/10 mt-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end gap-3\",\n                        children: [\n                            step > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                variant: \"outline\",\n                                onClick: handleBack,\n                                className: \"w-24 bg-white/5 hover:bg-white/10 border-white/20 text-white rounded-[16px]\",\n                                children: \"Back\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hutch/Documents/projects/yakyak/case_study/hutchgpt/components/DesignLifeModal/DesignLifeModal.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 15\n                            }, this),\n                            (step === 1 || hasSelectedItems()) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                onClick: step === 3 ? ()=>{} : handleNext,\n                                className: \"w-24 gradient-shadow text-base rounded-[16px] bg-[#121212] hover:bg-[#1a1a1a] transition-colors animate-fadeIn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"gradient-text\",\n                                    children: step === 3 ? \"Generate\" : \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hutch/Documents/projects/yakyak/case_study/hutchgpt/components/DesignLifeModal/DesignLifeModal.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/hutch/Documents/projects/yakyak/case_study/hutchgpt/components/DesignLifeModal/DesignLifeModal.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hutch/Documents/projects/yakyak/case_study/hutchgpt/components/DesignLifeModal/DesignLifeModal.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/hutch/Documents/projects/yakyak/case_study/hutchgpt/components/DesignLifeModal/DesignLifeModal.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hutch/Documents/projects/yakyak/case_study/hutchgpt/components/DesignLifeModal/DesignLifeModal.tsx\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hutch/Documents/projects/yakyak/case_study/hutchgpt/components/DesignLifeModal/DesignLifeModal.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(DesignLifeModal, \"dZLM1sQ7y8OYtd/KsmQQor1SHlo=\");\n_c = DesignLifeModal;\nvar _c;\n$RefreshReg$(_c, \"DesignLifeModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRGVzaWduTGlmZU1vZGFsL0Rlc2lnbkxpZmVNb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFaUM7QUFDOEI7QUFDZjtBQUNaO0FBQ0E7QUFDSTtBQU9qQyxTQUFTTyxnQkFBZ0IsS0FBeUM7UUFBekMsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQXdCLEdBQXpDOztJQUM5QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDWSxpQkFBaUJDLG1CQUFtQixHQUFHYiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ25FLE1BQU0sQ0FBQ2MsWUFBWUMsY0FBYyxHQUFHZiwrQ0FBUUEsQ0FBMkIsQ0FBQztJQUN4RSxNQUFNLENBQUNnQixZQUFZQyxjQUFjLEdBQUdqQiwrQ0FBUUEsQ0FBMkIsQ0FBQztJQUV4RSxNQUFNa0Isa0JBQWtCLENBQUNDO1FBQ3ZCLElBQUksQ0FBQ1AsZ0JBQWdCUSxRQUFRLENBQUNELFNBQVM7WUFDckNOLG1CQUFtQjttQkFBSUQ7Z0JBQWlCTzthQUFPO1FBQ2pEO0lBQ0Y7SUFFQSxNQUFNRSxxQkFBcUIsQ0FBQ0Y7UUFDMUJOLG1CQUFtQkQsZ0JBQWdCVSxNQUFNLENBQUNDLENBQUFBLElBQUtBLE1BQU1KO1FBQ3JELE1BQU1LLGdCQUFnQjtZQUFFLEdBQUdWLFVBQVU7UUFBQztRQUN0QyxPQUFPVSxhQUFhLENBQUNMLE9BQU87UUFDNUJKLGNBQWNTO0lBQ2hCO0lBRUEsTUFBTUMsb0JBQW9CLENBQUNOLFFBQWdCTztRQUN6Q1gsY0FBY1ksQ0FBQUEsT0FBUztnQkFDckIsR0FBR0EsSUFBSTtnQkFDUCxDQUFDUixPQUFPLEVBQUU7dUJBQUtRLElBQUksQ0FBQ1IsT0FBTyxJQUFJLEVBQUU7b0JBQUdPO2lCQUFTO1lBQy9DO0lBQ0Y7SUFFQSxNQUFNRSx1QkFBdUIsQ0FBQ1QsUUFBZ0JPO1FBQzVDWCxjQUFjWSxDQUFBQSxPQUFTO2dCQUNyQixHQUFHQSxJQUFJO2dCQUNQLENBQUNSLE9BQU8sRUFBRVEsSUFBSSxDQUFDUixPQUFPLENBQUNHLE1BQU0sQ0FBQ08sQ0FBQUEsSUFBS0EsTUFBTUg7WUFDM0M7UUFDQSxNQUFNSSxnQkFBZ0I7WUFBRSxHQUFHZCxVQUFVO1FBQUM7UUFDdEMsT0FBT2MsYUFBYSxDQUFDSixTQUFTO1FBQzlCVCxjQUFjYTtJQUNoQjtJQUVBLE1BQU1DLG9CQUFvQixDQUFDTCxVQUFrQk07UUFDM0NmLGNBQWNVLENBQUFBLE9BQVM7Z0JBQ3JCLEdBQUdBLElBQUk7Z0JBQ1AsQ0FBQ0QsU0FBUyxFQUFFO3VCQUFLQyxJQUFJLENBQUNELFNBQVMsSUFBSSxFQUFFO29CQUFHTTtpQkFBUztZQUNuRDtJQUNGO0lBRUEsTUFBTUMsdUJBQXVCLENBQUNQLFVBQWtCTTtRQUM5Q2YsY0FBY1UsQ0FBQUEsT0FBUztnQkFDckIsR0FBR0EsSUFBSTtnQkFDUCxDQUFDRCxTQUFTLEVBQUVDLElBQUksQ0FBQ0QsU0FBUyxDQUFDSixNQUFNLENBQUNZLENBQUFBLElBQUtBLE1BQU1GO1lBQy9DO0lBQ0Y7SUFFQSxNQUFNRyxhQUFhO1FBQ2pCeEIsUUFBUWdCLENBQUFBLE9BQVFBLE9BQU87SUFDekI7SUFFQSxNQUFNUyxhQUFhO1FBQ2pCekIsUUFBUWdCLENBQUFBLE9BQVFBLE9BQU87SUFDekI7SUFFQSxNQUFNVSxtQkFBbUI7UUFDdkIsSUFBSTNCLFNBQVMsR0FBRyxPQUFPNEIsT0FBT0MsTUFBTSxDQUFDekIsWUFBWTBCLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsTUFBTSxHQUFHO1FBQzVFLElBQUloQyxTQUFTLEdBQUcsT0FBTzRCLE9BQU9DLE1BQU0sQ0FBQ3ZCLFlBQVl3QixJQUFJLENBQUNHLENBQUFBLE9BQVFBLEtBQUtELE1BQU0sR0FBRztRQUM1RSxPQUFPO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ3pDLHlEQUFNQTtRQUFDMkMsTUFBTXBDO1FBQVFxQyxjQUFjcEM7a0JBQ2xDLDRFQUFDUCxnRUFBYUE7WUFBQzRDLFdBQVU7OzhCQUN2Qiw4REFBQ0M7b0JBQUlELFdBQVU7O3dCQUNacEMsU0FBUyxtQkFDUiw4REFBQ04sNkNBQU9BOzs7Ozt3QkFHVE0sU0FBUyxtQkFDUiw4REFBQ0wsNkNBQU9BOzRCQUNOMkMsU0FBU3BDOzRCQUNURSxZQUFZQTs0QkFDWm1DLGVBQWV4Qjs0QkFDZnlCLGtCQUFrQnRCOzs7Ozs7d0JBR3JCbEIsU0FBUyxtQkFDUiw4REFBQ0osaURBQVNBOzRCQUNSUSxZQUFZQTs0QkFDWkUsWUFBWUE7NEJBQ1ptQyxlQUFlcEI7NEJBQ2ZxQixrQkFBa0JuQjs7Ozs7Ozs7Ozs7OzhCQUt4Qiw4REFBQ2M7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFJRCxXQUFVOzs0QkFDWnBDLE9BQU8sbUJBQ04sOERBQUNQLHlEQUFNQTtnQ0FDTGtELFNBQVE7Z0NBQ1JDLFNBQVNsQjtnQ0FDVFUsV0FBVTswQ0FDWDs7Ozs7OzRCQUlEcEMsQ0FBQUEsU0FBUyxLQUFLMkIsa0JBQWlCLG1CQUMvQiw4REFBQ2xDLHlEQUFNQTtnQ0FDTG1ELFNBQVM1QyxTQUFTLElBQUksS0FBTyxJQUFJeUI7Z0NBQ2pDVyxXQUFVOzBDQUVWLDRFQUFDUztvQ0FBS1QsV0FBVTs4Q0FDYnBDLFNBQVMsSUFBSSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTN0M7R0FwSGdCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Rlc2lnbkxpZmVNb2RhbC9EZXNpZ25MaWZlTW9kYWwudHN4PzM0MDgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEaWFsb2csIERpYWxvZ0NvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2RpYWxvZ1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IFN0ZXBPbmUgfSBmcm9tIFwiLi9TdGVwT25lXCI7XG5pbXBvcnQgeyBTdGVwVHdvIH0gZnJvbSBcIi4vU3RlcFR3b1wiO1xuaW1wb3J0IHsgU3RlcFRocmVlIH0gZnJvbSBcIi4vU3RlcFRocmVlXCI7XG5cbmludGVyZmFjZSBEZXNpZ25MaWZlTW9kYWxQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERlc2lnbkxpZmVNb2RhbCh7IGlzT3Blbiwgb25DbG9zZSB9OiBEZXNpZ25MaWZlTW9kYWxQcm9wcykge1xuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3NlbGVjdGVkUGlsbGFycywgc2V0U2VsZWN0ZWRQaWxsYXJzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPj4oe30pO1xuICBjb25zdCBbYWN0aXZpdGllcywgc2V0QWN0aXZpdGllc10gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4+KHt9KTtcblxuICBjb25zdCBoYW5kbGVBZGRQaWxsYXIgPSAocGlsbGFyOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkUGlsbGFycy5pbmNsdWRlcyhwaWxsYXIpKSB7XG4gICAgICBzZXRTZWxlY3RlZFBpbGxhcnMoWy4uLnNlbGVjdGVkUGlsbGFycywgcGlsbGFyXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZVBpbGxhciA9IChwaWxsYXI6IHN0cmluZykgPT4ge1xuICAgIHNldFNlbGVjdGVkUGlsbGFycyhzZWxlY3RlZFBpbGxhcnMuZmlsdGVyKHAgPT4gcCAhPT0gcGlsbGFyKSk7XG4gICAgY29uc3QgbmV3Q2F0ZWdvcmllcyA9IHsgLi4uY2F0ZWdvcmllcyB9O1xuICAgIGRlbGV0ZSBuZXdDYXRlZ29yaWVzW3BpbGxhcl07XG4gICAgc2V0Q2F0ZWdvcmllcyhuZXdDYXRlZ29yaWVzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRDYXRlZ29yeSA9IChwaWxsYXI6IHN0cmluZywgY2F0ZWdvcnk6IHN0cmluZykgPT4ge1xuICAgIHNldENhdGVnb3JpZXMocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtwaWxsYXJdOiBbLi4uKHByZXZbcGlsbGFyXSB8fCBbXSksIGNhdGVnb3J5XVxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZW1vdmVDYXRlZ29yeSA9IChwaWxsYXI6IHN0cmluZywgY2F0ZWdvcnk6IHN0cmluZykgPT4ge1xuICAgIHNldENhdGVnb3JpZXMocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtwaWxsYXJdOiBwcmV2W3BpbGxhcl0uZmlsdGVyKGMgPT4gYyAhPT0gY2F0ZWdvcnkpXG4gICAgfSkpO1xuICAgIGNvbnN0IG5ld0FjdGl2aXRpZXMgPSB7IC4uLmFjdGl2aXRpZXMgfTtcbiAgICBkZWxldGUgbmV3QWN0aXZpdGllc1tjYXRlZ29yeV07XG4gICAgc2V0QWN0aXZpdGllcyhuZXdBY3Rpdml0aWVzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRBY3Rpdml0eSA9IChjYXRlZ29yeTogc3RyaW5nLCBhY3Rpdml0eTogc3RyaW5nKSA9PiB7XG4gICAgc2V0QWN0aXZpdGllcyhwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgW2NhdGVnb3J5XTogWy4uLihwcmV2W2NhdGVnb3J5XSB8fCBbXSksIGFjdGl2aXR5XVxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZW1vdmVBY3Rpdml0eSA9IChjYXRlZ29yeTogc3RyaW5nLCBhY3Rpdml0eTogc3RyaW5nKSA9PiB7XG4gICAgc2V0QWN0aXZpdGllcyhwcmV2ID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgW2NhdGVnb3J5XTogcHJldltjYXRlZ29yeV0uZmlsdGVyKGEgPT4gYSAhPT0gYWN0aXZpdHkpXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgc2V0U3RlcChwcmV2ID0+IHByZXYgKyAxKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xuICAgIHNldFN0ZXAocHJldiA9PiBwcmV2IC0gMSk7XG4gIH07XG5cbiAgY29uc3QgaGFzU2VsZWN0ZWRJdGVtcyA9ICgpID0+IHtcbiAgICBpZiAoc3RlcCA9PT0gMikgcmV0dXJuIE9iamVjdC52YWx1ZXMoY2F0ZWdvcmllcykuc29tZShjYXRzID0+IGNhdHMubGVuZ3RoID4gMCk7XG4gICAgaWYgKHN0ZXAgPT09IDMpIHJldHVybiBPYmplY3QudmFsdWVzKGFjdGl2aXRpZXMpLnNvbWUoYWN0cyA9PiBhY3RzLmxlbmd0aCA+IDApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2cgb3Blbj17aXNPcGVufSBvbk9wZW5DaGFuZ2U9e29uQ2xvc2V9PlxuICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBiZy1bIzEyMTIxMl0gYm9yZGVyLXdoaXRlLzIwIHRleHQtd2hpdGUgbWF4LXctWzgwdnddIHctWzgwdnddIG1heC1oLVs4NXZoXSBwLTAgZ2FwLTAgcm91bmRlZC1bMzJweF0gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgIHtzdGVwID09PSAxICYmIChcbiAgICAgICAgICAgIDxTdGVwT25lXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3N0ZXAgPT09IDIgJiYgKFxuICAgICAgICAgICAgPFN0ZXBUd29cbiAgICAgICAgICAgICAgcGlsbGFycz17c2VsZWN0ZWRQaWxsYXJzfVxuICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuICAgICAgICAgICAgICBvbkFkZENhdGVnb3J5PXtoYW5kbGVBZGRDYXRlZ29yeX1cbiAgICAgICAgICAgICAgb25SZW1vdmVDYXRlZ29yeT17aGFuZGxlUmVtb3ZlQ2F0ZWdvcnl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3N0ZXAgPT09IDMgJiYgKFxuICAgICAgICAgICAgPFN0ZXBUaHJlZVxuICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuICAgICAgICAgICAgICBhY3Rpdml0aWVzPXthY3Rpdml0aWVzfVxuICAgICAgICAgICAgICBvbkFkZEFjdGl2aXR5PXtoYW5kbGVBZGRBY3Rpdml0eX1cbiAgICAgICAgICAgICAgb25SZW1vdmVBY3Rpdml0eT17aGFuZGxlUmVtb3ZlQWN0aXZpdHl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlci10IGJvcmRlci13aGl0ZS8xMCBtdC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC0zXCI+XG4gICAgICAgICAgICB7c3RlcCA+IDEgJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2t9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yNCBiZy13aGl0ZS81IGhvdmVyOmJnLXdoaXRlLzEwIGJvcmRlci13aGl0ZS8yMCB0ZXh0LXdoaXRlIHJvdW5kZWQtWzE2cHhdXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyhzdGVwID09PSAxIHx8IGhhc1NlbGVjdGVkSXRlbXMoKSkgJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17c3RlcCA9PT0gMyA/ICgpID0+IHt9IDogaGFuZGxlTmV4dH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTI0IGdyYWRpZW50LXNoYWRvdyB0ZXh0LWJhc2Ugcm91bmRlZC1bMTZweF0gYmctWyMxMjEyMTJdIGhvdmVyOmJnLVsjMWExYTFhXSB0cmFuc2l0aW9uLWNvbG9ycyBhbmltYXRlLWZhZGVJblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJncmFkaWVudC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICB7c3RlcCA9PT0gMyA/IFwiR2VuZXJhdGVcIiA6IFwiTmV4dFwifVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICA8L0RpYWxvZz5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJEaWFsb2ciLCJEaWFsb2dDb250ZW50IiwiQnV0dG9uIiwiU3RlcE9uZSIsIlN0ZXBUd28iLCJTdGVwVGhyZWUiLCJEZXNpZ25MaWZlTW9kYWwiLCJpc09wZW4iLCJvbkNsb3NlIiwic3RlcCIsInNldFN0ZXAiLCJzZWxlY3RlZFBpbGxhcnMiLCJzZXRTZWxlY3RlZFBpbGxhcnMiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImFjdGl2aXRpZXMiLCJzZXRBY3Rpdml0aWVzIiwiaGFuZGxlQWRkUGlsbGFyIiwicGlsbGFyIiwiaW5jbHVkZXMiLCJoYW5kbGVSZW1vdmVQaWxsYXIiLCJmaWx0ZXIiLCJwIiwibmV3Q2F0ZWdvcmllcyIsImhhbmRsZUFkZENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJwcmV2IiwiaGFuZGxlUmVtb3ZlQ2F0ZWdvcnkiLCJjIiwibmV3QWN0aXZpdGllcyIsImhhbmRsZUFkZEFjdGl2aXR5IiwiYWN0aXZpdHkiLCJoYW5kbGVSZW1vdmVBY3Rpdml0eSIsImEiLCJoYW5kbGVOZXh0IiwiaGFuZGxlQmFjayIsImhhc1NlbGVjdGVkSXRlbXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb21lIiwiY2F0cyIsImxlbmd0aCIsImFjdHMiLCJvcGVuIiwib25PcGVuQ2hhbmdlIiwiY2xhc3NOYW1lIiwiZGl2IiwicGlsbGFycyIsIm9uQWRkQ2F0ZWdvcnkiLCJvblJlbW92ZUNhdGVnb3J5Iiwib25BZGRBY3Rpdml0eSIsIm9uUmVtb3ZlQWN0aXZpdHkiLCJ2YXJpYW50Iiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/DesignLifeModal/DesignLifeModal.tsx\n"));

/***/ })

});