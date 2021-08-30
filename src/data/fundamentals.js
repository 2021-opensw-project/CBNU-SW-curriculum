export const fundamentalsCollection = {
	name: "Fundamentals",
	areas: [
		{
			name: "HTML",
			skills: [
				{
					name: "Syntax",
					description: {
						text: "Learn the basics of HTML and get comfortable with it's syntax and main concepts.",
						links: [
							["MDN - HTML Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"],
							["MDN - Introduction to HTML", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"],
							["Codecademy - Learn HTML", "https://www.codecademy.com/learn/learn-html"],
						]
					},
					skills: [
						{
							name: "Basic Tags",
							description: {
								text: "Get familiar with the basic HTML tags",
								links: [
									["MDN - HTML elements reference", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"],
									["Tutorialspoint - Basic HTML tags", "https://www.tutorialspoint.com/html/html_basic_tags.htm"],
									["Elated - First 10 HTML tags", "https://www.elated.com/first-10-html-tags/"],
									["W3Schools - HTML tags", "https://www.w3schools.com/tags/ref_byfunc.asp"]
								]
							},
						},
					]
				},
				{
					name: "Forms",
					description: {
						text: "Learn how to design efficient forms, validating them effectively and keeping the user informed along the way.",
						links: [
							["MDN - HTML forms", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms"],
							["Google Web - Forms", "https://developers.google.com/web/fundamentals/design-and-ux/input/forms/"],
							["W3Schools - Forms", "https://www.w3schools.com/html/html_forms.asp"],
						]
					}
				},
				{
					name: "SEO",
					description: {
						text: "Learn how to make your content search-friendly.",
						links: [
							["web.dev - Discoverable", "https://web.dev/discoverable"],
							["Google Search - Get Started", "https://developers.google.com/search/docs/guides/get-started"],
							["Google Search - SEO basics", "https://developers.google.com/search/docs/guides/javascript-seo-basics"],
							["web.dev - SEO audits", "https://web.dev/lighthouse-seo"]
						]
					},
					skills: [
						{
							name: "Discoverable Content",
							description: {
								text: "Learn how to structure your HTML in a way that provides a rich experience when sharing it online.",
								links: [
									["Google Web - Social Discovery", "https://developers.google.com/web/fundamentals/discovery/social-discovery"],
									["Google Search - Search Features", "https://developers.google.com/search/docs/guides/search-features"],
									["Google Search - Structured Data", "https://developers.google.com/search/docs/guides/intro-structured-data"],
									["web.dev - Easily discoverable", "https://web.dev/discoverable"]
								]
							}
						}
					]
				},
				{
					name: "Svg",
					description: {
						text: "Learn how to work with SVG files to make graphics look crisp across all screen resolutions.",
						links: [
							["MDN - Adding vector graphics to the Web", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web"],
							["SVG on the web", "https://svgontheweb.com/"],
						]
					}
				},
				{
					name: "Best Practices",
					description: {
						text: "Learn the best practices of writing HTML.",
						links: [
							["MDN - HTML guidelines", "https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/HTML"],
							["W3Schools - HTML Coding Conventions", "https://www.w3schools.com/html/html5_syntax.asp"]
						]
					}
				}
			]
		},
		{
			name: "2학년",
			skills: [
				{
					name: "2학년",
					skills: [
						{
							name: "1학기",
							skills: [
								{
											name: "자료구조",
											description: {
												text: "반드시 알아야 하는 자료구조인 array, stacks, queues, linked lists, tree, graphs, heaps, B tree 등에 대해 다룹니다. 또한 중요한 정렬 알고리즘에 대해서도 공부할 것입니다.",
												links: [
													["위키백과 - 자료 구조", "https://ko.wikipedia.org/wiki/자료_구조"],
												]
											},
											
										},
										{
											name: "컴퓨터구조",
											description: {
												text: "개인 컴퓨터, 서버, 임베디드 기기에 쓰이는 일반적인 컴퓨터의 구조적 기능에 대해 알아봅니다. 파이프라이닝의 기본에 대한 이해, 캐시 메모리 계층, 메모리 시스템, 스토리지, I/O 시스템에 대해 알게 될 것입니다."
											}
										},
										{
											name: "소프트웨어실전영어",
											description: {
												text: "운영체제, 컴퓨터 구조, 자료구조, 프로그래밍 언어, 네트워크 같은 컴퓨터 사이언스와 관련된 영어 표현과 개념을 배웁니다. 또한 소프트웨어 주제에 대해 영어로 소통하는 방법에 대해 연습합니다."
											}
										},
										{
											name: "객체지향프로그래밍",
											description: {
												text: "객체지향 프로그래밍 언어인 C++의 이론과 실습을 통해 객체 지향 프로그래밍 실력을 발전시킵니다.",
												links: [
													["위키백과 - 객체 지향 프로그래밍", "https://ko.wikipedia.org/wiki/객체_지향_프로그래밍"]
												]
											}
										},
										{
											name: "선형대수학",
											description: {
												text: "매트릭스 이론과 선형 대수학 및 컴퓨터 사이언스에서 유용한 주제들에 대해 다룹니다. 선형대수학의 기본 개념과 여러 분야에서의 사용에 대해 이해하는 것이 학습 목표입니다.",
												links: [
													["위키백과 - 선형대수학", "https://ko.wikipedia.org/wiki/선형대수학"]
												]
											}
										},
										{
											name: "미래설계구현",
											description: {
												text: "인턴쉽과 회사의 비즈니스 목적에 대해 이해합니다. 취업을 위해 자기소개서를 쓰는 법과 면접 준비, 실무 기술을 익힙니다."
											}
										},
										{
											name: "오픈소스기초프로젝트",
											description: {
												text: "유명한 오픈소스 언어 중 하나인 파이썬에 대해 배우고 파이썬 프로젝트를 설계합니다. 프로젝트 관리를 위해 오픈소스 툴인 GitHub에 대해 다룹니다.",
												links: [
													["위키백과 - 오픈 소스", "https://ko.wikipedia.org/wiki/오픈_소스"]
												]
											}
										}
							]
						},
						{
							name: "2학기",
							skills: [
										{
											name: "알고리즘",
											description: {
												text: "알고리즘을 분석하고 설계할 수 있는 기본적인 기술에 대해 소개합니다. Divide and Conquer, Dynamic Programming, Greedy Approach, Backtracking, Branch and Bound 등에 대해 다룹니다.",
												links: [
													["위키백과 - 알고리즘", "https://ko.wikipedia.org/wiki/알고리즘"]
												]
											}
										},
										{
											name: "프로그래밍언어론",
											description: {
												text: "프로그래밍 언어의 기본 개념과 설계 원칙에 대해 배웁니다. 다양한 언어와 다양한 개념을 사용해 프로그래밍합니다. Syntax, Semantics, Scopes, Control flow 등에 대해 다룹니다.",
												links: [
													["위키백과 - 프로그래밍 언어", "https://ko.wikipedia.org/wiki/프로그래밍_언어"]
												]
											}
										},
										{
											name: "시스템프로그래밍",
											description: {
												text: "어셈블리 프로그래밍을 통해 컴퓨터 시스템의 저수준 개념을 다룹니다. 또한 어떻게 컴퓨터가 어플리케이션을 구동하고 정보를 저장하는지에 대해 배웁니다.",
												links: [
													["위키백과 - 어셈블리어", "https://ko.wikipedia.org/wiki/어셈블리어"]
												]
											}
										},
										{
											name: "창업탐색",
											description: {
												text: "자신만의 스타트업을 구상해보는 것이 목적입니다. 필요한 정보를 수집하고 시장 조사를 수행하며, 비즈니스 모델을 구현합니다."
											}
										},
										{
											name: "오픈소스개발프로젝트",
											description: {
												text: "Java 언어를 배우고 Java 프로젝트를 설계합니다. GitHub과 Stackoverflow 같은 오픈소스 툴을 다루고 프로젝트 관리와 트러블 슈팅에 해당 툴을 사용합니다.",
												links: [
													["위키백과 - 자바", "https://ko.wikipedia.org/wiki/자바_(프로그래밍_언어)"],
													["위키백과 - 깃허브", "https://ko.wikipedia.org/wiki/깃허브"],
													["위키백과 - 스택 오버플로", "https://ko.wikipedia.org/wiki/스택_오버플로_(웹사이트)"],
												]
											}
										},
										{
											name: "확률및통계",
											description: {
												text: "확률과 통계의 기본과 엔지니어링 및 컴퓨터 사이언스를 위한 통계에 대해 다룹니다. 일상생활의 문제해결을 위해 확률 이론을 적용하는 법을 배웁니다."
											}
										},
										{
											name: "컴퓨터그래픽스",
											description: {
												text: "geometric modeling, rendering, animation 등의 컴퓨터 그래픽스의 기본 주제들을 다룹니다. ThreeJS를 사용해 그래픽스 프로그래밍 기술을 배웁니다.",
												links: [
													["위키백과 - 컴퓨터 그래픽스", "https://ko.wikipedia.org/wiki/컴퓨터_그래픽스"],
													["위키백과 - Three.js", "https://ko.wikipedia.org/wiki/Three.js"]
												]
											}
										}
									]
								}
					]
				},
			]
		},
		{
			name: "Javascript",
			skills: [
				{
					name: "Syntax",
					description: {
						text: "Learn the basics of Javascript and get comfortable with it's syntax and main concepts.",
						links: [
							["MDN - Javascript First Steps", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps"],
							["MDN - Javascript Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"],
							["MDN - Javascript Building Blocks", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks"],
							/* ["You might not need jQuery", "http://youmightnotneedjquery.com/"],*/
						]
					},
					skills: [
						{
							name: "Spread",
							description: {
								text: "Learn how the spread syntax can help you when working with arrays.",
								links: [
									["MDN - Spread syntax", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"],
									["Freecodecamp - An introduction to Spread syntax", "https://www.freecodecamp.org/news/an-introduction-to-spread-syntax-in-javascript-fba39595922c/"],
									["Object rest and spread properties", "https://v8.dev/features/object-rest-spread"],
								]
							},
						},
						{
							name: "Destructuring",
							description: {
								text: "Learn how destructuring can help you when working with objects.",
								links: [
									["MDN - Destructuring assignment", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"],
									["MDN - ES6 In Depth: Destructuring", "https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/"],
									["javascript.info - Destructuring assignment", "https://javascript.info/destructuring-assignment"],
								]
							},
						}
					]
				},
				{
					name: "DOM",
					description: {
						text: "Learn how the HTML is represented as objects that comprise the structure and content of a document.",
						links: [
							["MDN - DOM Introduction", "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"],
							["Freecodecamp - What's the DOM", "https://www.freecodecamp.org/news/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d/"],
							["Introduction to the DOM", "https://learn.co/lessons/introduction-to-the-dom"],
							["htmldom.dev", "https://htmldom.dev/"],
						]
					},
					skills: [
						{
							name: "DOM Manipulation",
							description: {
								text: "Learn how to query HTML elements through Javascript and manipulate them.",
								links: [
									["MDN - Locating DOM elements using selectors", "https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors"],
									["Supercharged - querySelector", "https://www.youtube.com/watch?v=s0vg_H9hBuU"],
								]
							}
						},
					]
				},
				{
					name: "Events",
					description: {
						text: "Learn how to dispatch and listen for events.",
						links: [
							["MDN - Introduction to events", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"],
							["MDN - Creating and triggering events", "https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events"],
							["Event Bubbling and Event Capturing in JavaScript", "https://medium.com/@vsvaibhav2016/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e"],
							["Freecodecamp - A simplified explanation of event propagation", "https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/"],
							["JavaScript Events Explained", "https://flaviocopes.com/javascript-events/"],
							["MDN - addEventListener()", "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"],
							["MDN - removeEventListener(", "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener"],
							["Event order", "https://www.quirksmode.org/js/events_order.html"],
						]
					}
				},
				{
					name: "Objects",
					description: {
						text: "Learn how to create and use objects.",
						links: [
							["MDN - Introducing JavaScript objects", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects"],
							["MDN - Working with objects", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"],
							["javascript.info - Objects", "https://javascript.info/object"],
							["MDN - this", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"],
							["W3Schools - The JavaScript this Keyword", "https://www.w3schools.com/js/js_this.asp"],
							["MDN - bind()", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"],
							["MDN - new operator", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new"],
							["MDN - new.target", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target"],
							["Data Structures: Objects and Arrays", "https://scotch.io/courses/10-need-to-know-javascript-concepts/data-structures-objects-and-arrays"],
						]
					},
					skills: [
						{
							name: "Prototype",
							description: {
								text: "Learn how to extend objects and functions through its prototype.",
								links: [
									["The prototype chain", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"],
									["Prototypes in JavaScript", "https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b"],
									["dev.to - JavaScript Visualized: Prototypal Inheritance", "https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co"],
								]
							},
							skills: [
								{
									name: "Classes",
									description: {
										text: "Learn how to define and use classes. Get somewhat comfortable with some of the object oriented concepts such as inheritence and encapsulation.",
										links: [
											["MDN - Classes", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"],
											["Medium - ES6 Classes", "https://medium.com/@luke_smaki/javascript-es6-classes-8a34b0a6720a"],
											["MDN - Inheritance", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance"],
											["MDN - Object Oriented Programming", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS"],
											["MDN - super", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super"],
										]
									}
								}
							]
						}
					]
				},
				{
					name: "Regex",
					description: {
						text: "Learn how to use regex to extract information from strings.",
						links: [
							["MDN - Regular Expressions", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"],
							["javascript.info - Regular expressions", "https://javascript.info/regular-expressions"],
							["MDN - RegExp", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"],
						]
					}
				},
				{
					name: "Template Literals",
					description: {
						text: "Learn how template literals and tagged templates and help you manipulate strings.",
						links: [
							["MDN - Template literals", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"],
							["MDN - ES6 In Depth: Template strings", "https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/"],
							["Google Devs - Getting Literal With ES6 Template Strings", "https://developers.google.com/web/updates/2015/01/ES6-Template-Strings"],
						]
					}
				},
				{
					name: "Promises",
					description: {
						text: "Learn how to use promises and what asynchronous code means.",
						links: [
							["Google Devs - JavaScript Promises: an Introduction", "https://developers.google.com/web/fundamentals/primers/promises"],
							["MDN - Promise", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"],
							["Master the JavaScript Interview: What is a Promise?", "https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261"],
						]
					},
					skills: [
						{
							name: "Callbacks",
							description: {
								text: "Learn how to use callbacks and why they are not always a good idea.",
								links: [
									["MDN - Callback function", "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function"],
									["JavaScript: What the heck is a Callback?", "https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced"],
									["javascript.info - Callbacks", "https://javascript.info/callbacks"],
								]
							}
						},
						{
							name: "Async/await",
							description: {
								text: "Learn how to use the async and await keywords to make it easier to write asynchronous code.",
								links: [
									["MDN - async function", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"],
									["Google Devs - Async functions", "https://developers.google.com/web/fundamentals/primers/async-functions"],
									["javascript.info - Async/await", "https://javascript.info/async-await"],
								]
							}
						},
						{
							name: "Fetch",
							description: {
								text: "Learn how to use the fetch API to fetch data.",
								links: [
									["Google Devs - Introduction to fetch", "https://developers.google.com/web/updates/2015/03/introduction-to-fetch"],
									["Google Devs - Networking", "https://developers.google.com/training/certification/mobile-web-specialist/study-guide/networking"],
									["Freecodecamp - Fetch practical guide", "https://www.freecodecamp.org/news/a-practical-es6-guide-on-how-to-perform-http-requests-using-the-fetch-api-594c3d91a547/"],
									["MDN - CORS", "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"],
									["Alligator - Fetch API", "https://alligator.io/js/fetch-api/"],
									["Supercharged - Fetch", "https://www.youtube.com/watch?v=GiI77ya60yk"],
									["Codelabs - Fetch ", "https://codelabs.developers.google.com/codelabs/pwa-fetch/index.html?index=..%2F..dev-pwa-training#0"]
								]
							}
						},
					]
				},
				{
					name: "Web Animations",
					description: {
						text: "Learn how to use web animations to animate elements in the DOM.",
						links: [
							["Google Devs - Animations", "https://developers.google.com/web/fundamentals/design-and-ux/animations"],
							["MDN - Using The Web Animations API", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API"],
							["CSS Tricks - CSS Animations vs Web Animations API", "https://css-tricks.com/css-animations-vs-web-animations-api/"],
						]
					}
				},
				{
					name: "Modules",
					description: {
						text: "Learn how to modularize your code into ES6 modules using the export and import keywords.",
						links: [
							["MDN - Export", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"],
							["MDN - Import", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"],
							["V8 - Modules", "https://v8.dev/features/modules"],
							["Freecodecamp - A Practical guide to ES6 modules", "https://www.freecodecamp.org/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/"],
						]
					}
				},
				{
					name: "Intl",
					description: {
						text: "Learn how to localize your website using the Intl API.",
						links: [
							["MDN - Intl", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"],
							["MDN - Date Time Format", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"],
							["New Intl APIs in JavaScript", "https://blog.bitsrc.io/new-intl-apis-in-javascript-c50dc89d2cf3"],
						]
					}
				},
				{
					name: "Canvas",
					description: {
						text: "Learn how to paint graphics onto a canvas.",
						links: [
							["MDN - Canvas tutorial", "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial"],
							["MDN - Canvas API", "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"],
							["CSS Tricks - Manipulating Pixels Using Canvas", "https://css-tricks.com/manipulating-pixels-using-canvas/"],
						]
					}
				},
				{
					name: "Documentation",
					description: {
						text: "Learn how to create good documentation and why it is important.",
						links: [
							["Getting Started with JSDoc", "https://jsdoc.app/about-getting-started.html"],
							["A beginner’s guide to writing documentation", "https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/"],
							["Write Good Documentation", "https://hackernoon.com/write-good-documentation-6caffb9082b4"],
							["The power of jsDoc", "https://dev.to/gmartigny/the-power-of-jsdoc-272d"],
							["Document your Javascript code with JSDoc", "https://dev.to/paulasantamaria/document-your-javascript-code-with-jsdoc-2fbf"],
						]
					},
				},
				{
					name: "Best Practices",
					description: {
						text: "Learn the best practices of writing Javascript.",
						links: [
							["MDN - JavaScript guidelines", "https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/JavaScript"],
							["Airbnb - JavaScript Style Guide", "https://github.com/airbnb/javascript"],
							["Principles of Writing Consistent, Idiomatic JavaScript", "https://github.com/rwaldron/idiomatic.js/"],
							["5 JavaScript Style Guides", "https://codeburst.io/5-javascript-style-guides-including-airbnb-github-google-88cbc6b2b7aa"],
							["JavaScript Style Guide and Coding Conventions", "https://www.w3schools.com/js/js_conventions.asp"],
						]
					}
				}
			]
		},
		{
			name: "The Browser",
			skills: [
				{
					name: "Standardization",
					description: {
						text: "Learn why web standards are important and how new specifications are standardised.",
						links: [
							["Wikipedia - Web Standards", "https://en.wikipedia.org/wiki/Web_standards"],
							["What Are Web Standards?", "https://www.elcom.com.au/resources/blog/web-standards"],
							["A Comprehensive Explanation of Web Standards", "https://robertnyman.com/2007/05/21/what-are-web-standards-a-comprehensive-explanation-of-what-is-comprised-in-the-term/"],
						]
					},
					skills: [
						{
							name: "W3C",
							description: {
								text: "Learn what W3C are doing and how they are moving the web forward.",
								links: [
									["W3C - About", "https://www.w3.org/standards/about.html"],
									["W3C - Standards", "https://www.w3.org/standards/"],
									["W3C - Process", "http://webdiy.org/w3c/"],
									["Web Standards Guide", "https://www.smashingmagazine.com/2019/01/web-standards-guide/"],
									["W3C - Groups", "https://www.w3.org/community/groups/"],
									["The W3C At Twenty-Five", "https://www.smashingmagazine.com/2019/10/happy-birthday-w3c/"],
								]
							}
						},
						{
							name: "TC39",
							description: {
								text: "Learn what TC39 are doing and how they are moving the web forward.",
								links: [
									["The TC39 process for ECMAScript features", "https://2ality.com/2015/11/tc39-process.html"],
									["Github - TC39", "https://github.com/tc39"],
									["Ecma International - Programme of work", "https://www.ecma-international.org/memento/tc39.htm"],
									["Wikipedia - Ecma International", "https://en.wikipedia.org/wiki/Ecma_International"],
								]
							},
						},
						{
							name: "WHATWG",
							description: {
								text: "Learn what WHATWG are doing and how they are moving the web forward.",
								links: [
									["WHATWG - FAQ", "https://whatwg.org/faq"],
									["WHATWG - Standards", "https://spec.whatwg.org/"],
									["MDN - WHATWG", "https://developer.mozilla.org/en-US/docs/Glossary/WHATWG"],
									["W3C vs. WHATWG HTML5 Specs", "https://dzone.com/articles/w3c-vs-whatwg-html5-specs"],
									["WHATWG - HTML", "https://html.spec.whatwg.org/"],
									["Wikipedia - WHATWG", "https://en.wikipedia.org/wiki/WHATWG"],
								]
							}
						},
						{
							name: "Specifications",
							description: {
								text: "Learn how to read specifications developed by the standards committees.",
								links: [
									["How to Read the ECMAScript Specification", "https://timothygu.me/es-howto/"],
									["How to Read W3C Specs", "https://alistapart.com/article/readspec/"],
									["Learning CSS by reading specs", "https://www.chenhuijing.com/blog/learning-css-by-reading-specifications/"],
									["Understanding the CSS Specifications", "https://www.w3.org/Style/CSS/read.en.html"],
								]
							},
						}
					]
				},
				{
					name: "Browser Engines",
					description: {
						text: "Learn what a browser engine is and get an overview of the browser landscape and market share.",
						links: [
								["Medium - Browser Engines", "https://medium.com/@jonbiro/browser-engines-chromium-v8-blink-gecko-webkit-98d6b0490968"],
								["Wikipedia - Comparison", "https://en.wikipedia.org/wiki/Comparison_of_browser_engines"],
								["HTML5 Rocks - How Browsers Work", "https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/"],
								["Demystifying Browsers", "https://textslashplain.com/2020/02/09/demystifying-browsers/"],
						]
					},
					skills: [
						{
							name: "Webkit",
							description: {
								text: "Learn about the Webkit browser engine.",
								links: [
									["Webkit", "https://webkit.org/"]
								]
							}
						},
						{
							name: "Blink",
							description: {
								text: "Learn about the Blink browser engine.",
								links: [
									["Blink", "https://en.wikipedia.org/wiki/Blink_(browser_engine)"],
								]
							}
						},
						{
							name: "Gecko",
							description: {
								text: "Learn about the Gecko browser engine.",
								links: [
									["Gecko", "https://en.wikipedia.org/wiki/Gecko_(software)"]
								]
							}
						}
					]
				},
				{
					name: "HTTP",
					description: {
						text: "Learn how data is distributed through the HTTP protocol.",
						links: [
							["MDN - HTTP", "https://developer.mozilla.org/en-US/docs/Web/HTTP"],
							["MDN - HTTP Glossary", "https://developer.mozilla.org/en-US/docs/Glossary/HTTP"],
							["MDN - An overview of HTTP", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"],
							["Wikipedia - Hypertext Transfer Protocol", "https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol"],
						]
					}
				},
				{
					name: "The Internet",
					description: {
						text: "Learn the basics of how the internet works.",
						links: [
							["MDN - How does the Internet work?", "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work"],
							["Youtube - How the Internet Works in 5 Minutes", "https://www.youtube.com/watch?v=7_LPdttKXPc"],
							["Explain That Stuff - Internet", "https://www.explainthatstuff.com/internet.html"],
							["Stanford - How Does the Internet Work?", "https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm"],
							["How the Internet Works", "https://blog.hubspot.com/marketing/how-the-internet-works"],
						]
					}
				},
				{
					name: "Polyfills",
					description: {
						text: "Learn how it is possible to use polyfills to increase the browser support for your website.",
						links: [
							["MDN - Polyfill", "https://developer.mozilla.org/en-US/docs/Glossary/Polyfill"],
							["Introduction To Polyfills & Their Usage", "https://medium.com/beginners-guide-to-mobile-web-development/introduction-to-polyfills-their-usage-9cd6db4b1923"],
							["W3C - Polyfills and the evolution of the Web", "https://www.w3.org/2001/tag/doc/polyfills/"],
							["Can I use", "http://caniuse.com/"],
						]
					}
				},
				{
					name: "Debugging",
					description: {
						text: "Learn about the basics concepts of debugging.",
						links: [
							["Google Devs - Inspect and Edit Pages and Styles", "https://developers.google.com/web/tools/chrome-devtools/inspect-styles/"],
							["MDN - Cross browser testing", "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing"],
							["5 things to remember for better debugging of your code", "https://medium.com/dev-bits/5-things-to-remember-for-better-debugging-of-your-code-94b9bc3fb3df"],
						]
					},
					skills: [
						{
							name: "Developer console",
							description: {
								text: "Learn how to use the developer console to debug your code.",
								links: [
									["MDN - Console", "https://developer.mozilla.org/en-US/docs/Web/API/Console"],
									["Google Devs - Console API Reference", "https://developers.google.com/web/tools/chrome-devtools/console/api"],
									["Google Devs - Get Started with Chrome DevTools", "https://developers.google.com/web/tools/chrome-devtools/javascript"],
									["Google Devs - Console Utilities API Reference", "https://developers.google.com/web/tools/chrome-devtools/console/utilities"],
									["MDN - Debugging CSS", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS"],
									["MDN - Debugging HTML", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML"],
									["javascript.info - Debugging in Chrome", "https://javascript.info/debugging-chrome"],
									["14 JavaScript debugging tips", "https://raygun.com/javascript-debugging-tips"],
									["The definitive guide to debugging JavaScript", "https://flaviocopes.com/javascript-debugging/"],
									["Youtube - Chrome DevTools 101", "https://www.youtube.com/watch?v=H0XScE08hy8"],
									["Chrome Devs - Quickly monitor events", "https://developers.google.com/web/updates/2015/05/quickly-monitor-events-from-the-console-panel"],
									["Youtube - 14 Must Know Chrome Dev Tools Tricks", "https://www.youtube.com/watch?v=xkzDaKwinA8"]
								]
							},
							/*skills: [
								{
									name: "Console API",
									description: {
										text: "Learn how to use the console API.",
										links: [
											["MDN - Console", "https://developer.mozilla.org/en-US/docs/Web/API/Console"],
											["Google Devs - Console API Reference", "https://developers.google.com/web/tools/chrome-devtools/console/api"],
										]
									}
								}
							]*/
						},
						/*{
							name: "Breakpoints",
							description: {
								text: "Learn how to add breakpoints to your code.",
								links: [
									["Google Devs - How To Pause Your Code", "https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints"],
									["Debugging Javascript Like a Pro", "https://blog.bitsrc.io/debugging-javascript-like-a-pro-a2e0f6c53c2e"],
								]
							}
						}*/
					]
				}
			]
		}
	]
}