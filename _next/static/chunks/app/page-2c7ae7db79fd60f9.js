(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        3795: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 1927)), Promise.resolve().then(s.bind(s, 8133)), Promise.resolve().then(s.bind(s, 6408)), Promise.resolve().then(s.bind(s, 2198)), Promise.resolve().then(s.bind(s, 5215)), Promise.resolve().then(s.bind(s, 5097)), Promise.resolve().then(s.bind(s, 9336)), Promise.resolve().then(s.t.bind(s, 8173, 23))
        },
        1927: function(e, t, s) {
            "use strict";
            s.d(t, {
                default: function() {
                    return v
                }
            });
            var n = s(7437),
                a = s(2265),
                l = s(6298),
                i = s(6648),
                c = s(5215),
                r = s(5137),
                o = s(1976),
                x = e => {
                    let {
                        children: t,
                        className: s
                    } = e, l = (0, a.useRef)(null), [i, x] = (0, a.useState)("0% 100%");
                    (0, a.useEffect)(() => {
                        let e = () => {
                                if (l.current) {
                                    let {
                                        scrollLeft: e,
                                        scrollWidth: t,
                                        clientWidth: s
                                    } = l.current;
                                    x("".concat(e / (t - s) * 100, "% 100%"))
                                }
                            },
                            t = l.current;
                        return t && (t.addEventListener("scroll", e), e()), () => {
                            t && t.removeEventListener("scroll", e)
                        }
                    }, []);
                    let d = e => {
                        let t = l.current;
                        if (t) {
                            let s = .75 * t.clientWidth;
                            t.scrollBy({
                                left: "left" === e ? -(s + 16) : s + 16,
                                behavior: "smooth"
                            })
                        }
                    };
                    return (0, n.jsxs)("div", {
                        className: "".concat(s, " relative w-full"),
                        children: [(0, n.jsxs)("div", {
                            className: "flex items-center justify-end xl:hidden gap-2 mb-4",
                            children: [(0, n.jsx)(c.default, {
                                onClick: () => d("left"),
                                className: "rounded-full !p-2",
                                children: (0, n.jsx)(r.Z, {
                                    className: "w-6 h-6"
                                })
                            }), (0, n.jsx)(c.default, {
                                onClick: () => d("right"),
                                className: "rounded-full !p-2",
                                children: (0, n.jsx)(o.Z, {
                                    className: "w-6 h-6"
                                })
                            })]
                        }), (0, n.jsx)("div", {
                            className: "relative",
                            children: (0, n.jsx)("div", {
                                ref: l,
                                className: "grid grid-flow-col overflow-x-auto space-x-4 pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4",
                                style: {
                                    maskImage: "linear-gradient(to right, transparent, black calc(1rem), black calc(100% - 1rem), transparent)",
                                    maskSize: "100% 100%",
                                    maskPosition: i
                                },
                                children: t
                            })
                        })]
                    })
                },
                d = s(8916),
                m = s(7138),
                h = s(2468),
                p = s(6884),
                u = e => {
                    let {
                        children: t,
                        className: s
                    } = e, [l, i] = (0, a.useState)(!1);
                    return (0, n.jsxs)("div", {
                        className: "bg-secondary rounded-2xl py-3.5 px-6 drop-shadow-custom text-xl sm:text-2xl flex items-center gap-2 ".concat(s),
                        children: [(0, n.jsx)("span", {
                            className: "overflow-x-auto whitespace-nowrap text-ellipsis",
                            children: t
                        }), l ? (0, n.jsx)(h.Z, {
                            className: "text-green-500"
                        }) : (0, n.jsx)(p.Z, {
                            className: "cursor-pointer",
                            onClick: () => {
                                "string" == typeof t && navigator.clipboard.writeText(t).then(() => {
                                    i(!0), setTimeout(() => i(!1), 2e3)
                                })
                            }
                        })]
                    })
                },
                f = s(9805),
                g = s(7476),
                j = s(5539);
            let w = [{
                title: "Create a Metamask Wallet",
                description: (0, n.jsxs)("span", {
                    children: ["Visit", " ", (0, n.jsx)(m.default, {
                        href: "https://metamask.io",
                        target: "_blank",
                        className: "underline",
                        children: "metamask.io"
                    }), " ", "and follow the simple steps to create a new account with the Metamask app or browser extension."]
                })
            }, {
                title: "Fund Your Wallet with $SOL",
                description: "In the Metamask app, tap the 'BUY' button to purchase Ethereum ($SOL) directly. Alternatively, you can deposit $SOL from your preferred crypto exchange into your Metamask wallet."
            }, {
                title: "Swap $SOL for Toroemon Coin",
                description: "In your Metamask wallet, tap the 'SWAP' icon and paste the $TOROEMON Coin token address. Swap your $SOL for $TOREMON"
            }, {
                title: "Welcome to the Toroemon Community!",
                description: "Congratulations you are now a Toroemon holder!"
            }];
            var v = () => {
                let e = (0, f._)(),
                    t = a.useRef(null),
                    s = (0, g.Y)(t, {
                        once: !0
                    });
                return (0, a.useEffect)(() => {
                    s && e.start({
                        x: 0,
                        opacity: 1
                    })
                }, [s, e]), (0, n.jsxs)("section", {
                    className: "w-full py-32",
                    id: "how-to-buy",
                    children: [(0, n.jsx)("div", {
                        className: "px-4 sm:px-12",
                        children: (0, n.jsxs)("div", {
                            className: "relative  flex flex-col gap-6 justify-center max-w-6xl items-center mx-auto",
                            children: [(0, n.jsxs)("div", {
                                className: "absolute top-16 w-screen h-full flex flex-col items-center z-0",
                                children: [(0, n.jsx)(i.default, {
                                    src: "/images/crack.png",
                                    alt: "Crack",
                                    width: 2e3,
                                    height: 300,
                                    className: "max-sm:max-w-[1000px] sm:min-w-[2000px] 2xl:min-w-[3000px] h-fit -mx-2"
                                }), (0, n.jsx)("div", {
                                    className: "bg-gradient-to-b from-[#A07096] to-[#F39F84] w-screen h-full -mt-2"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "relative z-10 w-full",
                                children: [(0, n.jsx)(i.default, {
                                    src: "/vid/toroemon_walk.gif",
                                    alt: "Toroemon Walking",
                                    width: 400,
                                    height: 400,
                                    className: "absolute -top-64 sm:-top-60 -left-48 sm:-left-48 max-w-[550px] sm:max-w-[700px] object-contain"
                                }), (0, n.jsx)(l.Z, {
                                    className: "mb-16 w-fit mx-auto",
                                    children: "How to Buy"
                                }), (0, n.jsx)(j.E.div, {
                                    ref: t,
                                    initial: {
                                        x: "100%",
                                        opacity: 0
                                    },
                                    animate: e,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 20
                                    },
                                    className: "w-full",
                                    children: (0, n.jsx)(x, {
                                        children: w.map((e, t) => (0, n.jsxs)(d.Z, {
                                            className: "flex flex-col items-center gap-4 min-w-64",
                                            children: [(0, n.jsx)("span", {
                                                className: "border-4 border-foreground bg-background rounded-full w-16 h-16 flex items-center justify-center text-4xl font-falsoBold",
                                                children: t + 1
                                            }), (0, n.jsxs)("div", {
                                                className: "flex flex-col gap-2",
                                                children: [(0, n.jsx)("h3", {
                                                    className: "text-2xl font-falsoBold text-center leading-none",
                                                    children: e.title
                                                }), (0, n.jsx)("p", {
                                                    className: "text-center text-sm",
                                                    children: e.description
                                                }), 3 === t && (0, n.jsxs)("div", {
                                                    className: "flex flex-col items-center justify-center gap-4 mt-2",
                                                    children: [(0, n.jsxs)("a", {
                                                        href: "https://t.me/toroemoncatsol",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "flex  items-center cursor-pointer hover:opacity-80",
                                                        children: [(0, n.jsx)("span", {
                                                            className: "mr-2",
                                                            children: "Join us now on Telegram"
                                                        }), (0, n.jsx)("div", {
                                                            className: "bg-background rounded-xl flex-none drop-shadow-custom flex items-center justify-center",
                                                            children: (0, n.jsx)(i.default, {
                                                                src: "/icons/tg.png",
                                                                alt: "Telegram",
                                                                width: 24,
                                                                height: 24
                                                            })
                                                        })]
                                                    }), (0, n.jsxs)("a", {
                                                        href: "https://x.com/Toroemonthecat",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "flex  items-center cursor-pointer hover:opacity-80",
                                                        children: [(0, n.jsx)("span", {
                                                            className: "mr-2",
                                                            children: "Follow us on X"
                                                        }), (0, n.jsx)("div", {
                                                            className: "bg-background rounded-xl flex-none drop-shadow-custom flex items-center justify-center",
                                                            children: (0, n.jsx)(i.default, {
                                                                src: "/icons/x.png",
                                                                alt: "X",
                                                                width: 24,
                                                                height: 24
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })]
                                        }, t))
                                    })
                                }), (0, n.jsx)(u, {
                                    className: "w-full sm:w-fit mx-auto",
                                    children: "0x0000000000000000000000000"
                                })]
                            })]
                        })
                    }), (0, n.jsx)("div", {
                        className: "w-full h-fit flex justify-center mt-16",
                        children: (0, n.jsxs)("video", {
                            autoPlay: !0,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: "min-w-[1500px]  z-10 object-cover object-top pointer-events-none",
                            children: [(0, n.jsx)("source", {
                                src: "/vid/toroemon-count.mp4",
                                type: "video/mp4"
                            }), "Your browser does not support the video tag."]
                        })
                    })]
                })
            }
        },
        8133: function(e, t, s) {
            "use strict";
            var n = s(7437),
                a = s(2265),
                l = s(6298),
                i = s(6648),
                c = s(7476),
                r = s(9805),
                o = s(5539);
            let x = [],
                d = e => {
                    let {
                        exchange: t
                    } = e, s = a.useRef(null), l = (0, c.Y)(s, {
                        once: !0
                    }), x = (0, r._)();
                    return a.useEffect(() => {
                        l && x.start("visible")
                    }, [l, x]), (0, n.jsx)(o.E.a, {
                        href: t.link,
                        className: "flex-none max-sm:max-w-[calc(50%-16px)]",
                        ref: s,
                        variants: {
                            hidden: {
                                opacity: 0,
                                scale: .8
                            },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                rotate: [0, -5, 5, -5, 0],
                                transition: {
                                    duration: .5,
                                    ease: "easeInOut"
                                }
                            }
                        },
                        initial: "hidden",
                        animate: x,
                        children: (0, n.jsx)(i.default, {
                            src: t.src,
                            alt: t.alt,
                            width: 200,
                            height: 100,
                            className: ""
                        })
                    })
                };
            t.default = () => (0, n.jsx)("section", {
                className: "w-full px-4 sm:px-12",
                id: "exchanges",
                children: (0, n.jsxs)("div", {
                    className: "relative z-10 flex flex-col gap-6 justify-center items-center max-w-5xl mx-auto",
                    children: [(0, n.jsx)(i.default, {
                        src: "/images/land.png",
                        alt: "Land",
                        width: 2e3,
                        height: 300,
                        className: "min-w-[1500px] absolute -top-40 sm:-top-32 z-0 h-fit -mx-2 -mt-16"
                    }), (0, n.jsxs)("div", {
                        className: "flex max-sm:flex-col gap-16 items-center max-w-4xl z-10",
                        children: [(0, n.jsx)("div", {
                            className: "max-sm:flex max-sm:flex-wrap max-sm:justify-center max-sm:items-center sm:grid grid-cols-2 gap-4 h-fit flex-none",
                            children: x.map((e, t) => (0, n.jsx)(d, {
                                exchange: e
                            }, t))
                        }), (0, n.jsx)(i.default, {
                            src: "/images/screenshot.png",
                            alt: "Swap screenshot",
                            width: 320,
                            height: 530,
                            className: ""
                        })]
                    })]
                })
            })
        },
        6408: function(e, t, s) {
            "use strict";
            s.d(t, {
                default: function() {
                    return m
                }
            });
            var n = s(7437),
                a = s(6648),
                l = s(2265),
                i = s(8916),
                c = s(5097),
                r = e => {
                    let {
                        imageSrc: t,
                        videoSrc: s
                    } = e, i = (0, l.useRef)(null);
                    return (0, l.useEffect)(() => {
                        i.current && (i.current.addEventListener("loadeddata", e => {
                            console.log("Video loaded", e)
                        }), i.current.addEventListener("error", e => {
                            console.log("Video error", e)
                        }), i.current.src = s, i.current.style.opacity = "1")
                    }, []), (0, n.jsxs)("div", {
                        className: "w-full",
                        children: [(0, n.jsxs)("div", {
                            className: "relative w-full min-h-[calc(100%-144px)] flex justify-center overflow-hidden",
                            children: [(0, n.jsx)(a.default, {
                                src: t,
                                alt: "Background Thumbnail",
                                priority: !0,
                                width: 1500,
                                height: 1e3,
                                className: "min-h-full w-full object-cover object-top transition-opacity duration-300 opacity-100"
                            }), (0, n.jsx)("video", {
                                ref: i,
                                autoPlay: !0,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                className: "absolute top-[3px] left-0 w-full h-full object-cover object-top transition-opacity duration-300 opacity-0 pointer-events-none",
                                children: "Your browser does not support the video tag."
                            })]
                        }), (0, n.jsx)("div", {
                            className: "h-36 w-full bg-gradient-to-b from-tertiary to-background"
                        })]
                    })
                },
                o = s(5539),
                x = s(5215);
            let d = [{
                href: "https://t.me/toroemoncatsol",
                icon: "/icons/tg.png",
                alt: "Telegram Icon"
            }, {
                href: "https://x.com/Toroemonthecat",
                icon: "/icons/x.png",
                alt: "X Icon"
            }, {
                href: "https://dexscreener.com/ethereum/0x00000000000000000000000",
                icon: "/icons/dt.png",
                alt: "DexTools Icon"
            }];
            var m = () => (0, n.jsxs)("div", {
                className: "relative min-h-screen w-full flex justify-center max-sm:mb-24",
                children: [(0, n.jsx)("div", {
                }), (0, n.jsx)(r, {
                    imageSrc: "/vid/toroemon-hero.png",
                    videoSrc: "/vid/toroemon-hero.mp4"
                }), (0, n.jsxs)("div", {
                    className: "absolute top-0 w-full h-full 2xl:h-screen px-4 sm:px-6",
                    children: [(0, n.jsxs)("div", {
                        className: "relative pt-36 sm:pt-56 max-w-7xl mx-auto w-full flex flex-col items-center",
                        children: [(0, n.jsx)(a.default, {
                            src: "/logos/Toroemon2.svg",
                            alt: "Toroemon Text Logo",
                            width: 500,
                            height: 100,
                            className: "w-[500px] object-contain"
                        }), (0, n.jsx)("p", {
                            className: "text-6xl text-center text-neutral -mt-2",
                            children: "Doraemon's brother"
                        }), (0, n.jsx)("div", {
                            className: "flex flex-wrap sm:flex-col gap-4 justify-center pt-64 sm:pt-0 sm:absolute sm:left-0 px-10 lg:px-0",
                            children: d.map((e, t) => (0, n.jsx)(o.E.div, {
                                initial: {
                                    x: -200,
                                    opacity: 0
                                },
                                animate: {
                                    x: 0,
                                    opacity: 1
                                },
                                transition: {
                                    delay: .2 + .1 * t
                                },
                                className: "",
                                children: (0, n.jsx)(c.default, { ...e
                                })
                            }, t))
                        })]
                    }), (0, n.jsx)("div", {
                        className: "sm:absolute bottom-8 inset-x-0 pt-7 w-full flex justify-center",
                        children: (0, n.jsx)("div", {
                            className: "flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl sm:mx-28",
                            children: (0, n.jsxs)("div", {
                                className: "grid grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 w-full sm:w-auto max-w-xl",
                                children: [(0, n.jsx)(o.E.div, {
                                    initial: {
                                        y: 200
                                    },
                                    animate: {
                                        y: 0
                                    },
                                    transition: {
                                        delay: .2
                                    },
                                    className: "",
                                    children: (0, n.jsxs)(i.Z, {
                                        className: "flex flex-col items-center font-falsoBold ",
                                        children: [(0, n.jsx)("span", {
                                            className: "text-2xl sm:text-4xl",
                                            children: "20k+"
                                        }), (0, n.jsx)("span", {
                                            className: "text-sm sm:text-base",
                                            children: "Holders"
                                        })]
                                    })
                                }), (0, n.jsx)(o.E.div, {
                                    initial: {
                                        y: 200
                                    },
                                    animate: {
                                        y: 0
                                    },
                                    transition: {
                                        delay: .3
                                    },
                                    className: "",
                                    children: (0, n.jsxs)(i.Z, {
                                        className: "flex flex-col items-center font-falsoBold",
                                        children: [(0, n.jsx)("span", {
                                            className: "text-2xl sm:text-4xl",
                                            children: "10k+"
                                        }), (0, n.jsx)("span", {
                                            className: "text-[9px] sm:text-base max-w-16 sm:max-w-full sm:whitespace-nowrap text-center",
                                            children: "Telegram Frens"
                                        })]
                                    })
                                }), " ", (0, n.jsx)(o.E.div, {
                                    initial: {
                                        y: 200
                                    },
                                    animate: {
                                        y: 0
                                    },
                                    transition: {
                                        delay: .3
                                    },
                                    className: "",
                                    children: (0, n.jsxs)(i.Z, {
                                        className: "flex flex-col items-center font-falsoBold",
                                        children: [(0, n.jsx)("span", {
                                            className: "text-2xl sm:text-4xl",
                                            children: "16k+"
                                        }), (0, n.jsx)("span", {
                                            className: "text-[10px] sm:text-base max-w-16 sm:max-w-full sm:whitespace-nowrap text-center",
                                            children: "Twitter Frens"
                                        })]
                                    })
                                }), (0, n.jsx)(o.E.div, {
                                    initial: {
                                        y: 200
                                    },
                                    animate: {
                                        y: 0
                                    },
                                    transition: {
                                        delay: .4
                                    },
                                    className: "col-span-3 lg:col-span-1",
                                    children: (0, n.jsxs)(i.Z, {
                                        className: "flex flex-col items-center font-falsoBold",
                                        children: [(0, n.jsx)("span", {
                                            className: "text-2xl sm:text-4xl",
                                            children: "20+"
                                        }), (0, n.jsx)("span", {
                                            className: "text-sm sm:text-base",
                                            children: "Integrations"
                                        })]
                                    })
                                })]
                            })
                        })
                    })]
                })]
            })
        },
        2198: function(e, t, s) {
            "use strict";
            var n = s(7437);
            s(2265);
            var a = s(6298),
                l = s(6648),
                i = s(8916),
                c = s(5539);
            let r = e => {
                let {
                    src: t,
                    alt: s
                } = e;
                return (0, n.jsx)(c.E.div, {
                    animate: {
                        rotateY: 360
                    },
                    transition: {
                        duration: 2,
                        repeat: 1 / 0,
                        ease: "linear"
                    },
                    children: (0, n.jsx)(l.default, {
                        src: t,
                        alt: s,
                        width: 72,
                        height: 72,
                        className: "w-16 h-16"
                    })
                })
            };
            t.default = () => (0, n.jsx)("section", {
                className: "w-full py-32 px-4 sm:px-12",
                id: "tokenomics",
                children: (0, n.jsxs)("div", {
                    className: "relative flex flex-col gap-6 justify-center items-center max-w-7xl mx-auto",
                    children: [(0, n.jsx)(a.Z, {
                        className: "z-10",
                        children: "Tokenomics"
                    }), (0, n.jsx)(l.default, {
                        src: "/vid/toroemon-nail.png",
                        alt: "Toroemon Logo",
                        width: 400,
                        height: 400,
                        className: "absolute blur-3xl w-full top-24 right-0 z-0 min-w-[1000px] h-full object-cover object-top transition-opacity duration-300 opacity-100 pointer-events-none"
                    }), (0, n.jsxs)("div", {
                        className: "flex flex-col sm:flex-row items-center justify-end max-w-6xl mt-96 sm:mt-24 w-full sm:pr-24",
                        children: [(0, n.jsx)("div", {
                            className: "w-16",
                            children: (0, n.jsxs)("video", {
                                autoPlay: !0,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                className: "absolute rounded-[55px] top-32 sm:top-24 left-0 z-0 sm:max-w-[758px] object-contain object-top transition-opacity duration-300 opacity-100 pointer-events-none",
                                children: [(0, n.jsx)("source", {
                                    src: "/vid/toroemon-nail.mp4",
                                    type: "video/mp4"
                                }), "Your browser does not support the video tag."]
                            })
                        }), (0, n.jsxs)("div", {
                            className: "relative grid grid-cols-2 gap-4 h-fit w-full sm:w-auto flex-none font-falsoBold",
                            children: [(0, n.jsx)("div", {
                                className: "col-span-2",
                                children: (0, n.jsx)(i.Z, {
                                    children: (0, n.jsxs)("div", {
                                        className: "flex flex-col gap-2 items-center",
                                        children: [(0, n.jsx)(r, {
                                            src: "/icons/money.png",
                                            alt: "Toroemon Money"
                                        }), (0, n.jsxs)("div", {
                                            className: "flex flex-col items-center gap-2",
                                            children: [(0, n.jsx)("span", {
                                                className: "text-xl font-falsoBold",
                                                children: "Total Supply"
                                            }), (0, n.jsx)("span", {
                                                className: "text-3xl sm:text-5xl",
                                                children: "6,900,850,626,973"
                                            })]
                                        })]
                                    })
                                })
                            }), (0, n.jsx)(i.Z, {
                                children: (0, n.jsxs)("div", {
                                    className: "flex flex-col gap-2 items-center",
                                    children: [(0, n.jsx)(r, {
                                        src: "/icons/burn.png",
                                        alt: "Toroemon Burn"
                                    }), (0, n.jsxs)("div", {
                                        className: "flex flex-col items-center gap-2",
                                        children: [(0, n.jsx)("span", {
                                            className: "text-xl ",
                                            children: "Liquidity"
                                        }), (0, n.jsx)("span", {
                                            className: "text-3xl sm:text-5xl",
                                            children: "Burnt"
                                        })]
                                    })]
                                })
                            }), (0, n.jsx)(i.Z, {
                                children: (0, n.jsxs)("div", {
                                    className: "flex flex-col gap-2 items-center",
                                    children: [(0, n.jsx)(r, {
                                        src: "/icons/ethereum.png",
                                        alt: "Ethereum"
                                    }), (0, n.jsxs)("div", {
                                        className: "flex flex-col items-center gap-2",
                                        children: [(0, n.jsx)("span", {
                                            className: "text-xl font-falsoBold",
                                            children: "Network"
                                        }), (0, n.jsx)("span", {
                                            className: "text-3xl sm:text-5xl",
                                            children: "Ethereum"
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })]
                })
            })
        },
        8916: function(e, t, s) {
            "use strict";
            var n = s(7437);
            s(2265), t.Z = e => {
                let {
                    children: t,
                    className: s,
                    colSpan: a
                } = e;
                return (0, n.jsx)("div", {
                    className: "bg-secondary rounded-lg flex justify-center border-2 border-foreground drop-shadow-custom ".concat(a ? "col-span-".concat(a) : "", " "),
                    children: (0, n.jsx)("div", {
                        className: "p-4 sm:p-6 ".concat(s),
                        children: t
                    })
                })
            }
        },
        5215: function(e, t, s) {
            "use strict";
            var n = s(7437),
                a = s(7138);
            s(2265);
            var l = s(5539);
            t.default = e => {
                let {
                    onClick: t,
                    children: s,
                    disabled: i = !1,
                    variant: c = "primary",
                    className: r = "",
                    href: o = "",
                    size: x = "lg"
                } = e, d = "\n    ".concat("font-falsoBold whitespace-nowrap flex-none drop-shadow-custom h-fit flex items-center justify-center", "\n    ").concat({
                    primary: "bg-background text-neutral"
                }[c], "\n    ").concat(i ? "opacity-50 cursor-not-allowed pointer-events-none" : "", "\n    ").concat({
                    sm: "text-lg py-3 px-4 rounded-xl",
                    md: "text-xl py-3 px-4 rounded-2xl",
                    lg: "text-2xl py-4 px-5 rounded-2xl"
                }[x], "\n    ").concat(r, "\n  ").trim(), m = {
                    y: -4
                };
                return "" === o ? (0, n.jsx)(l.E.button, {
                    onClick: t,
                    disabled: i,
                    className: d,
                    whileHover: m,
                    children: s
                }) : (0, n.jsx)(l.E.div, {
                    whileHover: m,
                    className: d,
                    children: (0, n.jsx)(a.default, {
                        target: "`_blank",
                        href: o,
                        children: s
                    })
                })
            }
        },
        5097: function(e, t, s) {
            "use strict";
            var n = s(7437),
                a = s(7138);
            s(2265);
            var l = s(6648),
                i = s(5539);
            t.default = e => {
                let {
                    className: t = "",
                    href: s,
                    size: c = "lg",
                    icon: r,
                    alt: o
                } = e, x = "\n    ".concat("bg-background flex-none drop-shadow-custom flex items-center justify-center", "\n    ").concat({
                    lg: "p-1.5 rounded-2xl"
                }[c], "\n    ").concat(t, "\n  ").trim();
                return (0, n.jsx)(i.E.div, {
                    whileHover: {
                        y: -4
                    },
                    children: (0, n.jsx)(a.default, {
                        href: s,
                        className: x,
                        target: "_blank",
                        children: (0, n.jsx)(l.default, {
                            src: r,
                            alt: o,
                            width: 50,
                            height: 50,
                            className: "w-12 h-12 rounded-xl object-contain overflow-hidden"
                        })
                    })
                })
            }
        },
        6298: function(e, t, s) {
            "use strict";
            var n = s(7437);
            s(2265), t.Z = e => {
                let {
                    children: t,
                    className: s
                } = e;
                return (0, n.jsx)("div", {
                    className: "bg-secondary rounded-[30px] py-6 sm:py-11 px-10 sm:px-16 flex justify-center drop-shadow-customTitle whitespace-nowrap font-falsoBold text-5xl sm:text-7xl ".concat(s),
                    children: (0, n.jsx)("h2", {
                        children: t
                    })
                })
            }
        },
        9336: function(e, t, s) {
            "use strict";
            s.d(t, {
                default: function() {
                    return r
                }
            });
            var n = s(7437),
                a = s(5282),
                l = s(3377),
                i = s(5539),
                c = s(2265);

            function r(e) {
                let {
                    text: t,
                    delay: s = 0,
                    duration: r = 2,
                    className: o
                } = e, [x, d] = (0, c.useState)(""), [m, h] = (0, c.useState)(!1), p = (0, a.c)(0);
                return (0, c.useEffect)(() => (0, l.j)(p, t.length, {
                    type: "tween",
                    duration: r,
                    ease: "easeInOut",
                    delay: s,
                    onUpdate: e => {
                        d(t.slice(0, Math.round(e)))
                    },
                    onComplete: () => {
                        h(!0)
                    }
                }).stop, [p, t, r, s]), (0, n.jsxs)(i.E.span, {
                    className: "inline-block whitespace-pre-line ".concat(o),
                    children: [x, !m && (0, n.jsx)(i.E.span, {
                        className: "inline-block h-4 w-[1px] ml-0.5 bg-current",
                        animate: {
                            opacity: [0, 0, 1, 1]
                        },
                        transition: {
                            repeat: 1 / 0,
                            duration: .8,
                            ease: "linear",
                            times: [0, .5, .5, 1]
                        }
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [173, 149, 971, 23, 744], function() {
            return e(e.s = 3795)
        }), _N_E = e.O()
    }
]);