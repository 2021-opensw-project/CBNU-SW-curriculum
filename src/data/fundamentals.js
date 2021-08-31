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
			name: "CSS",
			skills: [
				{
					name: "Syntax",
					description: {
						text: "Learn the basics of CSS and get comfortable with it's syntax and main concepts.",
						links: [
							["MDN - CSS Basics", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics"],
							["W3Schools - CSS Tutorial", "https://www.w3schools.com/css/default.asp"],
							["Supercharged - CSS Selectors", "https://www.youtube.com/watch?v=IKho_xDKaLw"],
							["MDN - CSS first steps", "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps"],
							["MDN - CSS building blocks", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks"],
							["MDN - CSS values and units", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"],
							["MDN - CSS Syntax", "https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax"],
						]
					}
				},
				{
					name: "Selectors",
					description: {
						text: "Learn about CSS selectors and how to effeciently target DOM elements.",
						links: [
							["MDN - CSS selectors", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors"],
							["MDN - All selectors", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"],
							["CSS Tricks - Child and Sibling Selectors", "https://css-tricks.com/child-and-sibling-selectors/"],
							["CSS Tricks - All Selectors", "https://css-tricks.com/almanac/selectors/"],
							["W3Schools - CSS Combinators", "https://www.w3schools.com/css/css_combinators.asp"]
						]
					},
					skills: [
						{
							name: "Specificity",
							description: {
								text: "Learn what specificity means and how to use it when writing CSS.",
								links: [
									["MDN - Specificity", "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"],
									["MDN - Cascade and inheritance", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance"],
									["dev.to - CSS Specificity", "https://dev.to/emmawedekind/css-specificity-1kca"],
									["Specificity Calculator", "https://specificity.keegan.st/"],
									["W3Schools - CSS Specificity", "https://www.w3schools.com/css/css_specificity.asp"]
								]
							},
						},
						{
							name: "Pseudo Selectors",
							description: {
								text: "Learn how to use pseudo selectors.",
								links: [
									["MDN - Pseudo-classes", "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"],
									["CSS Tricks - Meet the Pseudo Class Selectors", "https://css-tricks.com/pseudo-class-selectors/"],
									["When do the :hover, :focus, and :active pseudo-classes apply?", "https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/"],
									["W3Schools - CSS Pseudo-elements", "https://www.w3schools.com/css/css_pseudo_elements.asp"],
									["W3Schools - CSS Pseudo-classes", "https://www.w3schools.com/css/css_pseudo_classes.asp"],
								]
							},
						},
					]
				},
				{
					name: "Box Model",
					description: {
						text: "Learn what the CSS box model means.",
						links: [
							["MDN - Introduction to the CSS basic box model", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model"],
							["MDN - The box model", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model"],
							["CSS Tricks - Inheriting box-sizing", "https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/"],
						]
					},
					skills: [
						{
							name: "Margin Collapsing",
							description: {
								text: "Learn about margin collapsing.",
								links: [
									["MDN - Mastering margin collapsing", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing"],
									["Margin Collapse in CSS: What, Why, and How", "https://medium.com/@joseph0crick/margin-collapse-in-css-what-why-and-how-328c10e37ca0"],
									["CSS Tricks - What You Should Know About Collapsing Margins", "https://css-tricks.com/what-you-should-know-about-collapsing-margins/"],
									["What's the Deal with Collapsible Margins?", "https://bitsofco.de/collapsible-margins/"],
									["What’s the Deal with Margin Collapse?", "https://jonathan-harrell.com/whats-the-deal-with-margin-collapse/"],
								]
							},
						}
					]
				},
				/*{
					name: "Overflow",
					description: {
						text: "Learn about what happens when there is too much content to be contained comfortably inside a box and how to manage it.",
						links: [
							["MDN - Overflowing content", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content"],
							["W3Schools - CSS Layout: Overflow", "https://www.w3schools.com/css/css_overflow.asp"],
							["Overflow In CSS", "https://ishadeed.com/article/overflow-css/"]
						]
					},
				},*/
				{
					name: "Colors",
					description: {
						text: "Learn the different ways you can define colors in CSS.",
						links: [
							["MDN - Color", "https://developer.mozilla.org/en-US/docs/Web/CSS/color"],
							["MDN - <color>", "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"],
							["W3Schools - CSS Colors", "https://www.w3schools.com/css/css_colors.asp"],
						]
					},
				},
				{
					name: "Calc",
					description: {
						text: "Learn how to use the CSS calc function.",
						links: [
							["MDN - Calc", "https://developer.mozilla.org/en-US/docs/Web/CSS/calc"],
							["CSS Tricks - A Couple of Use Cases for Calc()", "https://css-tricks.com/a-couple-of-use-cases-for-calc/"],
						]
					},
				},
				{
					name: "Layout",
					description: {
						text: "Learn the different layout types for web.",
						links: [
							["Chrome Dev - Basic Layout", "https://developers.google.com/training/certification/mobile-web-specialist/study-guide/basic-layout"],
							["W3Schools - CSS Website Layout", "https://www.w3schools.com/css/css_website_layout.asp"],
							["MDN - Document and website structure", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"],
							["MDN - CSS layout", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout"],
						]
					},
					skills: [
						{
							name: "Flex",
							description: {
								text: "Learn how to create layouts using flexbox.",
								links: [
									["MDN - Flexbox", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"],
									["A Complete Guide to Flexbox", "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"],
									["MDN - Flexbox", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"],
									["Flexbox Froggy", "https://flexboxfroggy.com/"],
									["Flexbox Defense", "http://flexboxdefense.com"],
								]
							},
						},
						{
							name: "Grid",
							description: {
								text: "Learn how to create layouts using CSS Grid.",
								links: [
									["MDN - Grids", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids"],
									["A Complete Guide to CSS Grid", "https://css-tricks.com/snippets/css/complete-guide-grid/"],
									["MDN - CSS Grid", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"],
									["CSS Grid Garden", "https://cssgridgarden.com/"],
									["Supercharged - CSS Grids", "https://www.youtube.com/watch?v=AqwPrR7hklE"]
								]
							},
						}
					]
				},
				{
					name: "Transforms",
					description: {
						text: "Learn the different ways to transform elements through CSS.",
						links: [
							["MDN - transform", "https://developer.mozilla.org/en-US/docs/Web/CSS/transform"],
							["CSS Tricks - Transform", "https://css-tricks.com/almanac/properties/t/transform/"],
						]
					},
					skills: [
						{
							name: "Animations",
							description: {
								text: "Learn how to animate elements through CSS using keyframes.",
								links: [
									["MDN - Using CSS animations", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations"],
									["CSS Tricks - Animation", "https://css-tricks.com/almanac/properties/a/animation/"],
								]
							},
						}
					]
				},
				{
					name: "Responsive Design",
					description: {
						text: "Learn how to make your website responsive so it works across different screen sizes.",
						links: [
							["MDN - Responsive design", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"],
							["Responsive Web Design Fundamentals by Google", "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"],
							["Google Dev - Responsive Design", "https://developers.google.com/web/fundamentals/design-and-ux/responsive"],
							["Google Dev - UX Patterns", "https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns"],
							["Google Dev - Responsive Content", "https://developers.google.com/web/fundamentals/design-and-ux/responsive/content"],
							["Codelabs - Responsive Design", "https://codelabs.developers.google.com/codelabs/pwa-responsive-design/index.html?index=..%2F..dev-pwa-training#0"],
						]
					},
					skills: [
						{
							name: "Media Queries",
							description: {
								text: "Learn how use media queries to build responsive layout.",
								links: [
									["CSS Tricks - CSS Media Queries & Using Available Space", "https://css-tricks.com/css-media-queries/"],
									["MDN - Using media queries", "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"],
									["MDN - Using Media Queries for Accessibility", "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility"],
								]
							},
						},
						{
							name: "Relative Units",
							description: {
								text: "Learn how to use relative units for properties such as font sizes and spacing.",
								links: [
									["MDN - Sizing items in CSS", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS"],
									["MDN - CSS values and units", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"],
									["The CSS Workshop - Relative Units", "https://thecssworkshop.com/lessons/relative-units"],
									["CSS Tricks - Fun with Viewport Units", "https://css-tricks.com/fun-viewport-units/"],
									["dev.to - 15 CSS Relative units", "https://dev.to/bytegasm/15-css-relative-units-how-many-do-you-know-em-rem-ex-cap-ch-ic-6m"],
								]
							},
						},
						{
							name: "Images",
							description: {
								text: "Learn how to make images responsive, always showing the best possible version for the screen size.",
								links: [
									["Google Devs - Responsive Images", "https://developers.google.com/web/fundamentals/design-and-ux/responsive/images"],
									["MDN - Responsive Images", "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"],
								]
							}
						}
					]
				},
				{
					name: "CSS Variables",
					description: {
						text: "Learn how to define and use CSS variables.",
						links: [
							["MDN - Using CSS custom properties", "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"],
							["Google Devs - CSS Variables: Why Should You Care?", "https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care"],
							["dev.to - CSS Quickies: CSS Variables", "https://dev.to/lampewebdev/css-quickies-css-variables-or-how-you-create-a-white-dark-theme-easily-1i0i"],
							["CSS Variables explained with 5 examples", "https://codeburst.io/css-variables-explained-with-5-examples-84adaffaa5bd"],
						]
					}
				},
				{
					name: "Best Practices",
					description: {
						text: "Learn the best practices of writing CSS.",
						links: [
							["MDN - CSS guidelines", "https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS"],
							["MDN - Organizing your CSS", "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing"],
							["Speckyboy - Good and bad CSS practices", "https://speckyboy.com/good-bad-css-practices/"],
						]
					}
				}
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
			name: "4학년",
			skills: [
				{
					name: "4학년",
					description: {
						text: "충북대학교 소프트웨어학과 4학년 커리큘럼입니다.",
						links: [
							["충북대학교 - 소프트웨어학과", "https://software.cbnu.ac.kr/"],
							["교과목개요", "https://software.cbnu.ac.kr/include/contents.php?pgID=ID12415887601"],
							["표준이수모형", "https://software.cbnu.ac.kr/bbs/bbs.php?task=view&db=data02&no=5048&page=1&search=&searchKey=&category=&pgID=ID13304171142"],
						]
					},
					skills: [
						{
							name: "1학기",
							description: {
								text: "4학년 1학기 과정입니다.",
							
							},
							skills: [
								{
									name: "캡스톤디자인",
									description: {
										text: "컴퓨터과학의 기본 이론을 바탕으로 팀을 구성하여 주제를 선정하고, 프로젝트 진행 방법을 계획하여, 최종 결과물을 도출하기까지의 프로세스를 체계적으로 준수하면서 팀 기반의 프로젝트 수행을 경험한다.",
	
										links: [
											["네이버 지식백과 - 캡스톤디자인", "https://terms.naver.com/entry.naver?docId=2066542&cid=50305&categoryId=50305"],
										]
									}
								},
								{
									name: "임베디드시스템",
									description: {
									text: "ARM기반 임베디드 시스템의 구조 및 시스템 소프트웨어 동작에 대해 학습하고, 리눅스 포팅, 부트로더, 디바이스 드라이버 작성 등의 실습 프로젝트를 수행한다.",
									links: [
											["위키백과 - 임베디드시스템", "https://ko.wikipedia.org/wiki/%EC%9E%84%EB%B2%A0%EB%94%94%EB%93%9C_%EC%8B%9C%EC%8A%A4%ED%85%9C"],
											["네이버 지식백과 - 임베디드 운영체제란", "https://terms.naver.com/entry.naver?docId=3432666&cid=58458&categoryId=58458"],
											]
											},
								},
											
								{
									name: "영상처리",
									description: {
										text: "디지털 영상처리에 대한 기본적인 지식과 함께 관련 분야에의 응용에 대한 기술을 심화한다. 그리고 최근의 영상처리이론과 연구결과를 접함으로써 선진 기술들에 대한 이해의 폭을 넓힌다.",
										links: [
												["위키백과 - 영상처리", "https://ko.wikipedia.org/wiki/%EC%98%81%EC%83%81_%EC%B2%98%EB%A6%AC"],
												["위키백과 - 컴퓨터비전", "https://ko.wikipedia.org/wiki/%EC%BB%B4%ED%93%A8%ED%84%B0_%EB%B9%84%EC%A0%84"],
												]
												}
								},
								{
									name: "빅데이터시스템설계",
									description: {
										text: "빅데이터시스템에서 데이터 전처리와 플랫폼, 그리고 정형 및 비정형의 빅데이터 수집, 저장, 분석과 탐색, 공유, 전파, 시각화, 질의, 갱신 등의 방법에 대한 이론과 실무를 학습한다.",
										links: [
												["위키백과 - 빅데이터", "https://ko.wikipedia.org/wiki/%EB%B9%85_%EB%8D%B0%EC%9D%B4%ED%84%B0"],
												]
												},
								},
															
								{
									name: "기계학습",
									description: {
										text: "데이터로부터 패턴을 추천하는 기계학습에 대한 핵심적인 원리를 소개한다. 지도학습, 비지도학습, 강화학습의 기본 개념을 소개하며, 주요 기계학습 알고리즘과 딥러닝 기법을 다룬다.",
										links: [
												["위키백과 - 기계학습", "https://ko.wikipedia.org/wiki/%EA%B8%B0%EA%B3%84_%ED%95%99%EC%8A%B5"],
												["네이버 지식백과 - 머신러닝", "https://terms.naver.com/entry.naver?docId=3386834&cid=58369&categoryId=58369"],
												]
												}
								},
								{
									name: "컴퓨터교재연구",
									description: {
									text: "(교직이수 대상과목) 컴퓨터 교과지도에 필요한 능력을 배양하고 컴퓨터와 그 응용에 관하여 지식을 습득하게 하며 기초적인 프로그래밍 실무를 익힐 수 있는 교재를 연구한다.",
									links: []
												},
								},
								{
									name: "창업산학세미나1",
									description: {
									text: "산업체와 학교의 교류를 통한 기업가 정신, 최신 IT기술 동향 및 산업체의 경영철학과 경영방법을 습득한다.",
									links: [
											["충북대 전자정보대학 - 전정대소식", "https://blog.naver.com/cbnuece/221253000358"],
						
											]
											},
								},
											
							
							]
						},
						{
							name: "2학기",
							description: {
								text: "4학년 2학기 과정입니다.",
								links: [
									
								]
							},
							skills: [
								{
									name: "창업파일럿프로젝트",
									description: {
										text: "산업체와 학교의 교류를 통한 최신 IT기술 동향 및 산업체의 경영철학과 경영방법을 습득한다.",
										links: [
											
										]
									}
								},
								{
									name: "정보검색",
									description: {
										text: "정보 표현 및 저장 방법, 문헌 질의와 매칭과정, 텍스트 분석, 정보검색 검색효과 측정, 효과성 향상기법 등을 포함한 대량 정보의 조직적인 저장, 관리, 검색, 마이닝 기법에 대한 이론과 방법을 학습한다.",
										links: [
												["위키백과 - 정보검색", "https://ko.wikipedia.org/wiki/%EC%A0%95%EB%B3%B4_%EA%B2%80%EC%83%89"],
												
												]
											}
								},
								{
										name: "자연어처리",
										description: {
												text: "사람이 사용하는 언어를 컴퓨터가 이해하여 지능적으로 처리하기 위한 다양한 알고리즘을 학습한다. ",
												links: [
														["위키백과 - 자연어처리", "https://ko.wikipedia.org/wiki/%EC%9E%90%EC%97%B0%EC%96%B4_%EC%B2%98%EB%A6%AC"],
															
														]
													}
								},
								{
										name: "빅데이터분석시각화",
										description: {
											text: "이 강좌에서 수집된 데이터를 보다 쉽게 이해할 수 있도록 시각화는 대표적인 방법을 공부한다. 공부할 시각화 기법으로는 시간 시각화, 연계 시각화, 비교시각화, 분포시각화, 공간시각화 등이 있다.",
											links: [
													["위키백과 - 데이터시각화", "https://ko.wikipedia.org/wiki/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%8B%9C%EA%B0%81%ED%99%94"],
													["네이버 지식백과 - 빅데이터 분석기술", "https://terms.naver.com/entry.naver?docId=3331553&cid=57613&categoryId=57613"],
													]
													},
								},
													
								{
										name: "창업산학세미나2",
										description: {
												text: "산업체와 학교의 교류를 통한 기업가 정신, 최신 IT기술 동향 및 산업체의 경영철학과 경영방법을 습득한다.",
												links: [
														["충북대 전자정보대학 - 전정대소식", "https://blog.naver.com/cbnuece/221253000358"],
														]
															}
								},
								{
										name: "컴퓨터교육론",
										description: {
											text: "(교직이수 대상과목) 컴퓨터에 관한 교육과 컴퓨터를 이용한 교육의 이론과 실제를 학습한다. 컴퓨터 교과의 역사적 배경, 컴퓨터 교과교육의 목표, 중·고등학교 교육과정의 분석 등 중등과정의 정보·컴퓨터 교육의 전반에 관하여 학습한다.",
											links: [
																	
																	
																	]
												},
								},
													
												
								{
										name: "클라우드컴퓨팅",
										description: {
											text: "본 수업은 클라우드에 대한 상세한 개념과 IaaS, PaaS, SaaS, BPaaS과 같은 다양한 클라우드 서비스 모델에 대해 다룬다. 학생들은 Amazon Elastic Cloud, Microsoft’s Azure, Google App Engine을 활용한 프로젝트를 통해서 실질적인 경험을 얻을 수 있다.",
											links: [
													["위키백과 - 클라우드컴퓨팅", "https://ko.wikipedia.org/wiki/%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%EC%BB%B4%ED%93%A8%ED%8C%85"],
													["네이버 지식백과 - 클라우드컴퓨팅 기술", "https://ko.wikipedia.org/wiki/%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%EC%BB%B4%ED%93%A8%ED%8C%85"],
															
													]
													}
								},
											
															
								
							]
						}
					]
				}
			]
		}

	]
}