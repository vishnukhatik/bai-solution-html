(window.webpackJsonp = window.webpackJsonp || []).push([
	[47, 7, 54, 57], {
		1322: function(t, e, n) {
			var content = n(1325);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, n(12).default)("30855962", content, !0, {
				sourceMap: !1
			})
		},
		1324: function(t, e, n) {
			"use strict";
			var o = n(1322);
			n.n(o).a
		},
		1325: function(t, e, n) {
			(e = n(11)(!1)).push([t.i, ".subServiceContentHeader h2[data-v-48433488]{text-transform:capitalize;margin-bottom:2rem}.subServiceContentHeader h4[data-v-48433488]{color:#7c7c7c;width:70%;margin:auto auto 3rem;font-size:1.2rem}.subServiceContentHeader[data-v-48433488]{text-align:center}.uiSubContentCardTitle[data-v-48433488]{color:#006ada;font-size:2rem;font-weight:600;line-height:2.5rem;text-transform:capitalize}.uiSubContentCardText[data-v-48433488]{padding-top:10px;font-size:18px;color:#000;font-weight:500}.uiSubContentImg[data-v-48433488]{width:100%;height:auto;text-align:center}.uiSubContentImg img[data-v-48433488]{width:77%;height:auto}.uiSubContentCard .row[data-v-48433488]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.uiSubContentCardBody[data-v-48433488]{padding:4px 20px 4px 100px}.uiSubContentCard[data-v-48433488]:hover{-webkit-box-shadow:0 2px 3px rgba(0,0,0,.2);box-shadow:0 2px 3px rgba(0,0,0,.2)}@media screen and (max-width:560px){.uiSubContentCardBody[data-v-48433488]{padding-left:20px;text-align:center}.uiSubContentCard[data-v-48433488]{margin-bottom:1.5rem}.subServiceContent[data-v-48433488]{margin-top:3rem}.subServiceContentHeader h4[data-v-48433488]{width:90%}}", ""]), t.exports = e
		},
		1326: function(t, e, n) {
			"use strict";
			n.r(e);
			var o = {
					props: ["color", "subService"],
					data: function() {
						return {}
					}
				},
				r = (n(1324), n(9)),
				component = Object(r.a)(o, (function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", [n("section", {
						staticClass: "subServiceContent"
					}, [n("b-container", {
						staticClass: "subServiceContentHeader"
					}, [n("h2", [t._v(t._s(t.subService.title))]), t._v(" "), n("h4", [t._v(t._s(t.subService.desc))])]), t._v(" "), n("b-container", [n("section", {
						staticClass: "uiSubContentCardWrapper"
					}, [n("b-container", [n("b-row", t._l(t.subService.contents, (function(e, o) {
						return n("b-col", {
							key: o,
							attrs: {
								md: "12"
							}
						}, [n("b-container", {
							staticClass: "uiSubContentCard"
						}, [n("b-row", {
							attrs: {
								"no-gutters": ""
							}
						}, [n("b-col", {
							attrs: {
								md: "8"
							}
						}, [n("div", {
							staticClass: "uiSubContentCardBody"
						}, [n("div", {
							staticClass: "uiSubContentCardTitle",
							style: {
								color: t.color
							}
						}, [t._v(t._s(e.title))]), t._v(" "), n("div", {
							staticClass: "uiSubContentCardText",
							class: {
								uiSubContentCardCaption: e.hasOwnProperty("points")
							}
						}, [n("p", [t._v(t._s(e.content))])]), t._v(" "), e.hasOwnProperty("desc") ? n("div", {
							staticClass: "uiSubContentCardText uiSubContentCardDesc",
							style: {
								color: "#595959",
								paddingTop: "0"
							}
						}, [n("p", [t._v(t._s(e.desc))])]) : t._e(), t._v(" "), e.hasOwnProperty("points") ? n("div", {
							staticClass: "uiSubContentCardPoints"
						}, [n("b-row", [n("b-col", {
							class: {
								"col-md-12": e.points.col2.length <= 0
							},
							attrs: {
								md: "6"
							}
						}, [n("div", {
							staticClass: "uiSubContentCardPointsColumn"
						}, t._l(e.points.col1, (function(e, i) {
							return n("div", {
								key: i,
								staticClass: "uiSubContentCardPoint"
							}, [n("span", {
								staticClass: "pointsCheck"
							}, [n("i", {
								staticClass: "fas fa-check"
							})]), t._v("\n                                " + t._s(e) + "\n                              ")])
						})), 0)]), t._v(" "), e.points.col2.length ? n("b-col", {
							attrs: {
								md: "6"
							}
						}, [n("div", {
							staticClass: "uiSubContentCardPointsColumn"
						}, t._l(e.points.col2, (function(e, i) {
							return n("div", {
								key: i,
								staticClass: "uiSubContentCardPoint"
							}, [n("span", {
								staticClass: "pointsCheck"
							}, [n("i", {
								staticClass: "fas fa-check"
							})]), t._v("\n                                " + t._s(e) + "\n                              ")])
						})), 0)]) : t._e()], 1)], 1) : t._e()])]), t._v(" "), n("b-col", {
							attrs: {
								md: "4"
							}
						}, [n("div", {
							directives: [{
								name: "lazy-container",
								rawName: "v-lazy-container",
								value: {
									selector: "img"
								},
								expression: "{ selector: 'img'}"
							}],
							staticClass: "uiSubContentImg"
						}, [n("img", {
							attrs: {
								"data-src": t.$getImgUrl(e.image),
								alt: "isometric"
							}
						})])])], 1)], 1)], 1)
					})), 1)], 1)], 1)])], 1)])
				}), [], !1, null, "48433488", null);
			e.default = component.exports
		},
		1329: function(t, e, n) {
			var content = n(1359);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, n(12).default)("89c31cc4", content, !0, {
				sourceMap: !1
			})
		},
		1332: function(t, e, n) {
			var content = n(1365);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, n(12).default)("287a84bc", content, !0, {
				sourceMap: !1
			})
		},
		1341: function(t, e, n) {
			var content = n(1485);
			"string" == typeof content && (content = [
				[t.i, content, ""]
			]), content.locals && (t.exports = content.locals);
			(0, n(12).default)("ce9e8100", content, !0, {
				sourceMap: !1
			})
		},
		1358: function(t, e, n) {
			"use strict";
			var o = n(1329);
			n.n(o).a
		},
		1359: function(t, e, n) {
			(e = n(11)(!1)).push([t.i, "#stats[data-v-87f89168]{display:none!important}", ""]), t.exports = e
		},
		1364: function(t, e, n) {
			"use strict";
			var o = n(1332);
			n.n(o).a
		},
		1365: function(t, e, n) {
			(e = n(11)(!1)).push([t.i, ".view-section-container[data-v-297c29d5]{padding:0 30px}.view-section-container .case-study-image-div[data-v-297c29d5]{position:relative;z-index:1;width:100%;height:100%}.view-section-container .case-study-image-div img[data-v-297c29d5]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.view-section-container .case-study-right-container[data-v-297c29d5]{padding:20px;position:relative}.case-study-right-container p[data-v-297c29d5]{text-transform:uppercase;letter-spacing:3px;font-size:20px;font-weight:600;color:#006ada}.case-study-right-container h2[data-v-297c29d5]{text-transform:uppercase;font-size:39px;letter-spacing:7px;font-weight:600;color:#000;margin-bottom:26px;text-align:left}.site_button_wrapper .text-div[data-v-297c29d5]{display:inline-block}.site_button_wrapper .text-div p[data-v-297c29d5]{color:#000;font-size:18px;margin:0;-webkit-transform:translateY(-5px);transform:translateY(-5px)}.case-study-view-arrow[data-v-297c29d5]{padding:0 15px;border:1px solid #000}.section_sub_title[data-v-297c29d5]{font-size:22px;color:#aaa}@media (max-width:560px){.recentWorksSwiperWrapper[data-v-297c29d5]{margin:4rem 0!important}}", ""]), t.exports = e
		},
		1367: function(t, e, n) {
			"use strict";
			n.r(e);
			n(97);
			var o, r, c, d, l, m, h, v, f, y, w, body, S, C, i = 0,
				x = 0,
				k = 2 * Math.PI,
				_ = {},
				z = [],
				E = {
					data: function() {
						return {
							addMouseEvent: null
						}
					},
					mounted: function() {
						this.onDocumentReady(), this.animate()
					},
					methods: {
						onDocumentReady: function() {
							(body = document.querySelector("#dtbg")).style.cssText = "margin: 0; overflow: hidden;", d = document.createElement("div"), body.appendChild(d), m = window.innerHeight, m / 2, h = window.innerWidth, h / 2, v = 75, f = h / m, y = 1, w = 1e4, S = 750, this.rendererer()
						},
						rendererer: function(t) {
							(o = new THREE.PerspectiveCamera(v, f, y, w)).position.z = S, o.position.y = -1300, r = new THREE.Scene, _ = {
								color: 13421772,
								program: function(t) {
									t.beginPath(), t.arc(0, 0, .5, 0, k, !0), t.fill()
								}
							}, C = new THREE.SpriteCanvasMaterial(_);
							for(var e = 0; e < 50; e++)
								for(var n = 0; n < 50; n++)(l = z[i++] = new THREE.Sprite(C)).position.x = 100 * e - 2500, l.position.z = 100 * n - 2500, r.add(l);
							(c = new THREE.CanvasRenderer).setClearColor(14490949, 1), c.setPixelRatio(window.devicePixelRatio), c.setSize(h, m), d.appendChild(c.domElement), t && t()
						},
						animate: function() {
							requestAnimationFrame(this.animate), this.update()
						},
						update: function() {
							o.position.x += .05 * (-400 - o.position.x), o.position.y += .05 * (325 - o.position.y), o.lookAt(r.position), i = 0;
							for(var t = 0; t < 50; t++)
								for(var e = 0; e < 50; e++)(l = z[i++]).position.y = 50 * Math.sin(.1 * (t + x)) + 50 * Math.sin(.3 * (e + x)), l.scale.x = l.scale.y = 4 * (Math.sin(.1 * (t + x)) + 1) + 4 * (Math.sin(.3 * (e + x)) + 1), r.add(l);
							c.render(r, o), x += .1
						}
					},
					destroyed: function() {
						document.removeEventListener("mousemove", this.addMouseEvent)
					}
				},
				A = (n(1358), n(9)),
				component = Object(A.a)(E, (function() {
					var t = this.$createElement;
					return(this._self._c || t)("div", {
						staticClass: "h-100",
						staticStyle: {
							width: "100%",
							height: "100%",
							opacity: "0.5"
						},
						attrs: {
							id: "dtbg"
						}
					})
				}), [], !1, null, "87f89168", null);
			e.default = component.exports
		},
		1373: function(t, e, n) {
			"use strict";
			var o = {
					components: {
						Button: n(62).a
					},
					data: function() {
						return {
							caseStudy: {
								digitalInformation: {
									title: "Digital Transformation",
									content: "Increased Customer Engagement For Fashion Houses",
									image: "Increased customer engament for fashion houses.png",
									url: "fashion"
								},
								uiUxDesign: {
									title: "UI/UX & Design Thinking",
									content: "Seamless & agile CRM Portal for Leisure Line",
									url: "hospitality",
									image: "Seamless and agile CRM.png"
								},
								mobileEngineering: {
									title: "Mobile Engineering",
									content: "One-touch application for transport facility",
									url: "transport",
									image: "One touch application for transport.png"
								},
								webTechnology: {
									title: "Web Technology Development",
									content: "Multiple Customizable Services For Finance Powerhouse",
									url: "finance",
									image: "Multiple customisable - thumbnail.png"
								},
								innovation: {
									title: "Innovation",
									content: "Riveting Shopping Experience With Chatbot",
									url: "retail",
									image: "Reviting shopping experience with chat bot-thumbnail.png"
								},
								enterpriseApplication: {
									title: "Enterprise Application Development",
									content: "Inception of Brand Establishment for Educational Institute",
									url: "education",
									image: "Multiple customisable - thumbnail.png"
								},
								healthCareDigitalTransformation: {
									title: "Digital Transformation",
									content: "Business Enhancement For Healthcare Systems",
									url: "healthcare",
									image: "business-enhancement-for-healthcare.jpg"
								},
								teleCommunicationEnterpriseApp: {
									title: "Enterprise Application Development",
									content: "Connecting millions with customer insights",
									url: "telecom",
									image: "Connection-millions-with.jpg"
								}
							}
						}
					},
					computed: {
						caseStudyServices: function() {
							return "digitaltransformation" == this.$route.params.service ? this.caseStudy.digitalInformation : "uiuxdesign" == this.$route.params.service ? this.caseStudy.uiUxDesign : "mobileengineering" == this.$route.params.service ? this.caseStudy.mobileEngineering : "webtechnology" == this.$route.params.service ? this.caseStudy.webTechnology : "innovation" == this.$route.params.service ? this.caseStudy.innovation : "enterpriseapplications" == this.$route.params.service ? this.caseStudy.enterpriseApplication : "healthcare" == this.$route.params.service ? this.caseStudy.healthCareDigitalTransformation : "telecom" == this.$route.params.service ? this.caseStudy.teleCommunicationEnterpriseApp : void 0
						}
					},
					mounted: function() {
						setTimeout((function() {
							var t = document.getElementById("titleScene3");
							new Parallax(t)
						}), 100)
					}
				},
				r = (n(1364), n(9)),
				component = Object(r.a)(o, (function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", [n("section", {
						staticClass: "recentWorksSwiperWrapper"
					}, [n("b-container", {
						attrs: {
							fluid: ""
						}
					}, [n("h2", {
						staticClass: "wow fade-in-bottom"
					}, [t._v("Recent Work")]), t._v(" "), n("div", {
						staticClass: "sectionFadedTitle wow fade-in-bottom",
						attrs: {
							"data-relative-input": "true",
							id: "titleScene3",
							"data-wow-delay": "0.5s",
							"data-wow-offset": "250"
						}
					}, [n("h3", {
						staticClass: "h1",
						attrs: {
							"data-depth": "-0.1"
						}
					}, [t._v("Work")])]), t._v(" "), n("div", {
						staticClass: "view-section-container"
					}, [n("b-row", [n("b-col", {
						attrs: {
							md: "12"
						}
					}, [n("div", {
						staticClass: "container case-studies-container"
					}, [n("b-row", {
						attrs: {
							"align-h": "center",
							"align-v": "center"
						}
					}, [n("b-col", {
						attrs: {
							md: "7"
						}
					}, [n("div", {
						directives: [{
							name: "lazy-container",
							rawName: "v-lazy-container",
							value: {
								selector: "img"
							},
							expression: "{ selector: 'img' }"
						}],
						staticClass: "case-study-image-div"
					}, [n("img", {
						attrs: {
							"data-src": t.$getImgUrl(t.caseStudyServices.image),
							alt: t.caseStudyServices.title
						}
					})])]), t._v(" "), n("b-col", {
						attrs: {
							md: "5"
						}
					}, [n("div", {
						staticClass: "case-study-right-container wow fade-in-left"
					}, [n("div", {
						staticClass: "media-blue-gradient"
					}), t._v(" "), n("p", [t._v(t._s(t.caseStudyServices.title))]), t._v(" "), n("h2", [t._v(t._s(t.caseStudyServices.content))]), t._v(" "), n("nuxt-link", {
						staticClass: "myLink",
						attrs: {
							to: {
								name: "casestudy-id",
								params: {
									id: "" + t.caseStudyServices.url.trim()
								}
							}
						}
					}, [n("Button", {
						staticClass: "wow fade-in-bottom",
						attrs: {
							"data-wow-delay": "0.1s",
							buttonText: "Case Study",
							color: "#006ada"
						}
					})], 1)], 1)])], 1)], 1)])], 1)], 1)])], 1)])
				}), [], !1, null, "297c29d5", null);
			e.a = component.exports
		},
		1377: function(t, e, n) {
			"use strict";
			n.r(e);
			var o = {
					props: ["title"],
					components: {
						Background: n(1367).default
					}
				},
				r = (n(1484), n(9)),
				component = Object(r.a)(o, (function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n("div", [n("section", {
						staticClass: "serviceBannerWrapper"
					}, [n("div", {
						staticClass: "bannerOverlay"
					}), t._v(" "), n("div", {
						staticStyle: {
							position: "absolute",
							top: "0",
							left: "0",
							width: "100%",
							height: "100%"
						}
					}, [n("Background")], 1), t._v(" "), n("b-container", {
						staticClass: "h-100"
					}, [n("b-row", {
						staticClass: "h-100",
						attrs: {
							"align-v": "center"
						}
					}, [n("b-col", {
						attrs: {
							md: "12",
							"data-relative-input": "true",
							id: "bannerScene"
						}
					}, [n("h3", {
						staticClass: "d-inline-block wow fade-in-bottom",
						attrs: {
							"data-depth": "-0.1",
							"data-wow-delay": "0.9s"
						}
					}, [n("div", [t._v("Digital Transformation")])]), t._v(" "), n("br"), t._v(" "), n("h1", {
						staticClass: "d-inline-block wow fade-in-bottom",
						attrs: {
							"data-depth": "0.2",
							"data-wow-delay": "1.3s"
						}
					}, [n("div", {
						staticClass: "d-inline-block"
					}, [t._v("\n              " + t._s(t.title) + "\n            ")])])])], 1)], 1)], 1)])
				}), [], !1, null, "056a121a", null);
			e.default = component.exports
		},
		1484: function(t, e, n) {
			"use strict";
			var o = n(1341);
			n.n(o).a
		},
		1485: function(t, e, n) {
			(e = n(11)(!1)).push([t.i, '.serviceBannerWrapper[data-v-056a121a]{position:relative;z-index:3;width:100%;min-height:620px;height:100vh;background-size:cover;background-position:50%;background-color:hsla(0,0%,98%,.7);background-blend-mode:overlay;text-shadow:0 0 15px rgba(0,0,0,.3)}.serviceBannerWrapper h1[data-v-056a121a]{width:70%!important;font-size:4rem;font-weight:900;color:#fff;text-transform:uppercase}.serviceBannerWrapper h1 span[data-v-056a121a]{font-weight:900;text-transform:lowercase}.serviceBannerWrapper h3[data-v-056a121a]{font-size:1.5rem;color:#fff;text-transform:uppercase}.bannerOverlay[data-v-056a121a]{position:absolute;top:0;left:0;width:100%;height:100%;background:-webkit-gradient(linear,left top,left bottom,from(#fff),color-stop(50%,hsla(0,0%,100%,0)),color-stop(50%,hsla(0,0%,100%,0)),to(#fff));background:linear-gradient(180deg,#fff 0,hsla(0,0%,100%,0) 50%,hsla(0,0%,100%,0) 0,#fff);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=0)}.bannerLogoWrapper[data-v-056a121a]{position:absolute;top:0;right:0;bottom:0;width:50%;z-index:-1;height:210px}.bannerLogoWrapper img[data-v-056a121a]{-webkit-transform:translateY(-25%);transform:translateY(-25%)}', ""]), t.exports = e
		},
		1820: function(t, e, n) {
			"use strict";
			n.r(e);
			n(16);
			var o = n(1377),
				r = n(1326),
				c = n(1373),
				d = {
					jsonld: function() {
						return {
							"@context": "https://schema.org/",
							"@type": "Product",
							name: this.computeSubService.seo.schema.name,
							image: this.computeSubService.seo.image,
							description: this.computeSubService.seo.schema.description,
							aggregateRating: {
								"@type": "AggregateRating",
								ratingValue: "5",
								bestRating: "5",
								worstRating: "1",
								ratingCount: "50"
							}
						}
					},
					head: function() {
						return {
							title: this.computeSubService.seo.title,
							meta: [{
								hid: "description",
								name: "description",
								content: this.computeSubService.seo.description
							}, {
								hid: "keywords",
								name: "keywords",
								keywords: this.computeSubService.seo.keywords
							}, {
								hid: "og:description",
								name: "og:description",
								property: "og:description",
								content: this.computeSubService.seo.description
							}, {
								hid: "og:title",
								name: "og:title",
								property: "og:title",
								content: this.computeSubService.seo.title
							}, {
								hid: "og:image",
								name: "og:image",
								property: "og:image",
								content: this.computeSubService.seo.image
							}, {
								hid: "twitter:card",
								name: "twitter:card",
								content: "summary_large_image"
							}, {
								hid: "twitter:title",
								name: "twitter:title",
								content: this.computeSubService.seo.title
							}, {
								hid: "twitter:description",
								name: "twitter:description",
								content: this.computeSubService.seo.description
							}, {
								hid: "twitter:image",
								name: "twitter:image",
								content: this.computeSubService.seo.twitterImage
							}]
						}
					},
					components: {
						Banner: o.default,
						ServiceCaseStudy: c.a,
						SubServiceContent: r.default
					},
					data: function() {
						return {
							techEcosystem: {
								name: "technology & ecosystem audit",
								title: "Unify your approach",
								desc: "Audit technology strategy promotes greater consisency and repeatability, which are part of the fabric in delivering a digital audit. We uncover insights and observations that can add value for a seamless integration of suites to enrich experiences.",
								contents: [{
									image: "icons dt-5 - dmaic.png",
									title: "DMAIC",
									content: "Formalize and implement 6 sigma methodology for expert acquaintance."
								}, {
									image: "icons dt-2 - security.png",
									title: "Security",
									content: "Systematic examination and verification of network security for potent control and testing."
								}, {
									image: "icons dt-3 - infrastructure scalability.png",
									title: "Infrastructure Scalability",
									content: "Handle changing environment and ecosystem advancements."
								}],
								seo: {
									title: "doodleblue innovations | Technology & ecosystem audit Services | India, USA",
									description: "doodleblue offers a digital audit to uncover insights and observations that can add value for a seamless integration of suites to enrich experiments",
									keywords: "digital transformation technologies, technology audit services, technology eco system audit",
									image: "".concat(n(382)),
									twitterImage: "https://doodlebluebytes.com/social-share-images/services/digitaltransformation/doodleblue-TechandecoSystem.png",
									schema: {
										name: "Technology & Ecosystem Audit Services",
										description: "We uncover insights and observations that can add value for a seamless integration of suites to enrich experiences.Audit technology strategy promotes greater consistency and repeatability , which are part of the fabric in delivering a digital audit.Systematic examination and verification of network security for potent control and testing."
									}
								}
							},
							digitalStrategy: {
								name: "digital strategy",
								title: "Leverage digital assets for optimization",
								desc: "Achieve visibility and sustain with comprehensive and innovative methods to reach your business goals. Our digital strategy team takes a customized approach to create a detailed strategy that delivers desired results.",
								contents: [{
									image: "icons dt-13 - comptetive intelligence.png",
									title: "Competitive Intelligence",
									content: "Validate digital strategy by choosing right metrics, tools and expertise to develop new initiatives to enhance competitive position."
								}, {
									image: "icons dt-4 - brand auditing.png",
									title: "Brand Auditing",
									content: "Examine and investigate company’s intangible asset by comprehensive approach, bespoke methods and actionable recommendations."
								}, {
									image: "icons dt-8 - marketing goal setting.png",
									title: "Marketing Goal Setting",
									content: "Take current trends into account built on unyielding market research to harness complete digital potential."
								}],
								seo: {
									title: "doodleblue innovations | Digital-strategy Services | India, USA",
									description: "Our Digital strategy team takes a customized approach to create a detailed strategy that delivers desired results.",
									keywords: "digital strategy, digital advertising, digital transformation strategy, digital strategy company, digital strategy consulting companies",
									image: "".concat(n(373)),
									twitterImage: "https://doodlebluebytes.com/social-share-images/services/digitaltransformation/doodleblue-DigitalStrategy.png",
									schema: {
										name: "Digital Strategy Services",
										description: "Achieve visibility and sustain with comprehensive and innovative methods to reach your business goals.Validate digital strategy by choosing the right metrics, tools and expertise to develop new initiatives to enhance competitive position. Our digital strategy team takes a customized approach to create a detailed strategy that delivers desired results."
									}
								}
							},
							digitalMarketing: {
								name: "digital marketing",
								title: "A conglomerate digital landscape to bring ROI",
								desc: "Our digital marketing services provides compelling startegies that build a strong connection between brands and their potential customers which is uniquely optimized by our adroit professionals such that it provides greater brand loyalty.",
								contents: [{
									image: "icons dt-11 - seo.png",
									title: "SEO",
									content: "Enhance optimization organically",
									points: {
										col1: ["Website Audit", "Competitor Analysis", "Keyword Analysis"],
										col2: ["On-page Optimization", "Off-page Optimization", "Reporting"]
									}
								}, {
									image: "icons dt-12 - sem.png",
									title: "SEM",
									content: "Amplify your brand",
									points: {
										col1: ["Google Adwords", "Youtube Ads", "Flipkart Ads", "Amazon Ads"],
										col2: ["Yahoo Ads", "Facebook Ads"]
									}
								}, {
									image: "icons dt-15 - smm.png",
									title: "SMM",
									content: "Build relationships",
									points: {
										col1: ["Paid Media ", "Owned Media", "Earned Media"],
										col2: ["Engagement", "Analytics", "Reporting"]
									}
								}, {
									image: "icons dt-14 - orm.png",
									title: "ORM",
									content: "Protect your digital identity",
									points: {
										col1: ["Build online presence", "Promote and generate positive reviews", "Gives strong search engine rankings"],
										col2: []
									}
								}, {
									image: "icons dt-10 - campaign outreach.png",
									title: "Campaign Outreach",
									content: "Comprehensive digital strategy",
									points: {
										col1: ["Email Strategy", "Newsletter Marketing", "Retargeting Mechanism"],
										col2: []
									}
								}, {
									image: "icons dt-7 - content strategy.png",
									title: "Content Strategy",
									content: "Fuel your brand and drive results",
									points: {
										col1: ["Tone of voice", "Evaluation of framework", "Keyword Analysis"],
										col2: ["Content pillars", "Content calendar"]
									}
								}],
								seo: {
									title: "doodleblue innovations | Digital marketing services | India, USA",
									description: "Our Digital marketing services provide compelling strategies that build a strong connection between brands and their potential customers through up to date market techniques",
									keywords: "digital marketing agency, internet marketing company, digital marketing company, internet marketing service, top digital marketing agencies, digital marketing services, online digital marketing company, online marketing companies, online marketing agency, digital marketing companies in india, digital marketing companies in chennai",
									image: "".concat(n(374)),
									twitterImage: "https://doodlebluebytes.com/social-share-images/services/digitaltransformation/doodleblue-Digital-Marketing.png",
									schema: {
										name: "Digital Marketing Services",
										description: "Our digital marketing services provides compelling strategies that build a strong connection between brands and their potential customers which is uniquely optimized by our adroit professionals such that it provides greater brand loyalty."
									}
								}
							},
							dataAnalytics: {
								name: "data analytics",
								title: "Decision science to optimize operation",
								desc: "Uncover relevant insights by reducing redundancies in data assets through our industry-specific and customizable ontology detection. We help optimize operations, guide empirical data-driven decisions and exploit data opportunities to maximize impact.",
								contents: [{
									image: "icons dt-13 - comptetive intelligence.png",
									title: "Data visualization",
									content: "Capacitate better insights and trends that help in identification of areas that need attention."
								}, {
									image: "icons dt-4 - brand auditing.png",
									title: "Business Intelligence",
									content: "Enable data driven decision-making for better outcomes and enhanced efficiency."
								}, {
									image: "icons dt-8 - marketing goal setting.png",
									title: "Big data",
									content: "Harness big data analytics to drive better business decisions, and understand customer behaviour and preference."
								}],
								seo: {
									title: "doodleblue innovations | Digital Analytics services | India, USA",
									description: "Our Digital Analytics services uncover relevant insights to optimize operations, guide empirical data-driven decisions and exploit data opportunities to maximize impact.",
									keywords: "data analysis, data analytics services, data visualization services, data analytics services in india, data analytics services in chennai",
									image: "".concat(n(372)),
									twitterImage: "https://doodlebluebytes.com/social-share-images/services/digitaltransformation/doodleblue-Data.png",
									schema: {
										name: "Data Analytics Services",
										description: "Uncover relevant insights by reducing redundancies in data assets through our industry-specific and customizable ontology detection.Harness big data analytics to drive better business decisions, and understand customer behavior and preference. We help optimize operations, guide empirical data-driven decisions and exploit data opportunities to maximize impact."
									}
								}
							}
						}
					},
					computed: {
						computeSubService: function() {
							switch(this.$route.params.subservice) {
								case "technology-ecosystem-audit":
									return this.techEcosystem;
								case "digital-strategy":
									return this.digitalStrategy;
								case "digital-marketing":
									return this.digitalMarketing;
								case "data-analytics":
								case "digital-analytics":
									return this.dataAnalytics;
								default:
									return this.$router.push({
										name: "pagenotfound"
									}), this.uxStrategy
							}
						}
					}
				},
				l = n(9),
				component = Object(l.a)(d, (function() {
					var t = this.$createElement,
						e = this._self._c || t;
					return e("div", [e("Banner", {
						attrs: {
							title: this.computeSubService.name
						}
					}), this._v(" "), e("SubServiceContent", {
						attrs: {
							subService: this.computeSubService,
							color: "rgb(221, 29, 69)"
						}
					}), this._v(" "), e("ServiceCaseStudy")], 1)
				}), [], !1, null, "b0d29edc", null);
			e.default = component.exports
		}
	}
]);