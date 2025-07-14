(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/vote/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VotePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$VoteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/VoteContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const candidates = [
    "Tami Suastuti",
    "Intan Oka Apriliani",
    "Merthi Utami"
];
function VotePage() {
    _s();
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCandidate, setSelectedCandidate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(candidates[0]);
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [transactionId, setTransactionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { castVote } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$VoteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVote"])();
    // Connect to MetaMask wallet
    const connectWallet = async ()=>{
        if (typeof window.ethereum === "undefined") {
            alert("MetaMask is not installed. Please install it to vote.");
            return;
        }
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            setAccount(accounts[0]);
            setStatusMessage(null);
            setTransactionId(null);
        } catch (error) {
            console.error("Wallet connection failed:", error);
            setStatusMessage("Failed to connect wallet.");
        }
    };
    // Cast vote and update context
    const handleCastVote = ()=>{
        if (!account) {
            setStatusMessage("Please connect your wallet first.");
            return;
        }
        castVote(selectedCandidate);
        const mockTxId = `tx-${Math.random().toString(36).substr(2, 9)}`;
        setTransactionId(mockTxId);
        setStatusMessage(`You have voted for ${selectedCandidate}. Thank you! Your transaction ID is ${mockTxId}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-xl mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Sistem E-voting ketua HMTI 2025 -2026 berbasis smart contract"
            }, void 0, false, {
                fileName: "[project]/src/app/vote/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            !account ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: connectWallet,
                className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",
                children: "Connect MetaMask Wallet"
            }, void 0, false, {
                fileName: "[project]/src/app/vote/page.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2",
                        children: [
                            "Connected Wallet: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: account
                            }, void 0, false, {
                                fileName: "[project]/src/app/vote/page.tsx",
                                lineNumber: 57,
                                columnNumber: 49
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/vote/page.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "candidate",
                        className: "block mb-1 font-semibold",
                        children: "Choose Candidate:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/vote/page.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "candidate",
                        value: selectedCandidate,
                        onChange: (e)=>setSelectedCandidate(e.target.value),
                        className: "w-full border border-gray-300 rounded px-3 py-2",
                        children: candidates.map((candidate)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: candidate,
                                children: candidate
                            }, candidate, false, {
                                fileName: "[project]/src/app/vote/page.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/vote/page.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCastVote,
                        className: "mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition",
                        children: "Cast Vote"
                    }, void 0, false, {
                        fileName: "[project]/src/app/vote/page.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/vote/page.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this),
            statusMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 p-3 bg-green-100 text-green-800 rounded whitespace-pre-wrap",
                children: statusMessage
            }, void 0, false, {
                fileName: "[project]/src/app/vote/page.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this),
            transactionId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 p-3 bg-gray-100 text-gray-800 rounded font-mono break-all",
                children: [
                    "Transaction ID: ",
                    transactionId
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/vote/page.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/vote/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(VotePage, "+Nk/gJMijy8wGM+V8wavSBPMKsQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$VoteContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVote"]
    ];
});
_c = VotePage;
var _c;
__turbopack_context__.k.register(_c, "VotePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_vote_page_tsx_11b87f07._.js.map