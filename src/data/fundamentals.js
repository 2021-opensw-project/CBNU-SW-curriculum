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
			name: "3학년",
      skills: [
        {
          name: "3학년",
          skills: [
            {
              name: "1학기",
              skills: [
                {
                  name: "운영체제",
                  description: {
                    text: "운영체제, 특히 다중 프로그래밍 시분할 시스템, 비동기 병행프로세서의 기본개념을 다룬다. 스케쥴링, 메모리 관리 정보의 고유 및 보호 등의 개념을 습득한다.",
                  },
                },
                {
                  name: "객체지향 설계",
                  description: {
                    text: "객체지향 개발 방법에 의하여 소프트웨어를 분석하고 설계하기 위한 기본 개념의 이해 및 기법들을 대하여 학습하고, 프로젝트를 통한 문제 분석 및 설계 과정을 진행한다.",
                  },
                },
                {
                  name: "오픈소스 웹소프트웨어",
                  description: {
                    text: "오픈 소스 프로그래밍 언어인 자바를 이용하여 실생활에 적용 가능한 소프트웨어를 개발하고, 이러한 개발과정에서 프로그램의 역할과 프로그램 코드의 체계적인 개발에 대한 중요성을 이해한다.",
                  },
                },
                {
                  name: "컴파일러",
                  description: {
                    text: "최신 컴파일러를 중심으로 어휘분석, 파싱 및 코드생성 등 일련의 컴파일 과정을 학습한다. 특히 컴퓨터 프로그래밍 언어가 가지고 있는 다양한 특징들을 컴파일 단계에서 어떻게 구현되는 가를 학습한다.",
                  },
                },
                {
                  name: "컴퓨터 네트워크",
                  description: {
                    text: "네트워크의 기본 개념과 네트워크의 구조, TCP/IP 프로토콜 구조, 네트워크, 전송 및 응용 계층 프로토콜들에 관련한 기술 및 원리에 대해 인터넷을 중심으로 학습한다.",
                  },
                },
                {
                  name: "창업기획",
                  description: {
                    text: "4차 산업 혁명과 관련된 기술 동향을 파악하고 창업에 관련된 전문 역량을 키운다. 초청강연과 창업에 관한 다양한 활동를 통하여 전공 역량을 강화하고 도전 의식을 함양한다.",
                  },
                },
                {
                  name: "오픈소스 전문프로젝트",
                  description: {
                    text: "소프트웨어 개발이 단순한 코딩 작업만이 아니라, 분석 및 설계 과정을 거쳐 개발되어야 함을 이해하고, 오픈 소스 툴을 사용하여 웹과 앱에서 실행되는 어플리케이션을 개발하는 기술을 학습한다.",
                  },
                },
              ],
            },
            {
              name: "2학기",
              skills: [
                {
                  name: "소프트웨어공학",
                  description: {
                    text: "소프트웨어 공학에 대한 기본적인 개념의 이해와 소프트웨어 개발 과정에서 품질을 향상시키기 위해 요구되는 공학적 활동에 대하여 학습하고, 주어진 문제의 소프트웨어 개발을 위한 프로젝트를 진행한다.",
                  },
                },
                {
                  name: "산학프로젝트(종합설계)",
                  description: {
                    text: "산업체(가족회사)의 멘토 또는 취업 선배(멘토)와의 연계를 통해 산업체가 수행하고 있는 프로젝트를 이해하고, 산업체에서 프로젝트 수행에 따른 문제점과 이에 대한 해결 방안을 멘토와 함께 해결함으로써, 현장의 실전을 이해한다",
                  },
                },
                {
                  name: "펌웨어프로그래밍",
                  description: {
                    text: "마이크로컴퓨터 시스템의 하드웨어 구성 요소를 이해하고, 마이크로프로세서 실습 장비를 사용하여 하드웨어를 제어하기 위한 시스템 시작 코드 해석, 인터럽트 및 타이머 제어 프로그래밍, 입출력 디바이스 제어를 위한 펌웨어 프로그래밍 기술을 습득한다.",
                  },
                },
                {
                  name: "창업설계",
                  description: {
                    text: "4차 산업 혁명과 관련된 기술 동향을 파악하고 창업에 관련된 실무 경험을 수행한다. 초청 강연과 창업에 관한 다양한 활동를 통하여 전공 역량을 강화하고 도전 의식을 함양한다.",
                  },
                },
                {
                  name: "정보보호",
                  description: {
                    text: "정보보호 기초 이론 학습과 네트워크 보안 및 시스템 보안의 기본 개념을 이해하고 안전한 정보 시스템 구축 및 안전한 네트워크 서비스를 제공할 수 있는 방법을 습득한다.",
                  },
                },
                {
                  name: "인공지능",
                  description: {
                    text: "인공지능의 성공적인 적용분야 및 목표를 살펴보고, 대표적인 지능적인 문제 해결 기법들, 지식표현 방법 및 추론, 지식기반 시스템, 자연어처리, 컴퓨터 비전, 지능로봇 등에 대해서 학습한다.",
                  },
                },
                {
                  name: "데이터베이스시스템",
                  description: {
                    text: "이 과목에서는 데이터베이스의 기본 개념과 개체-관계(E-R) 다이어그램, 관계형 데이터 모델 및 SQL 문의 사용, 데이터베이스 설계, 데이터베이스 보안 등은 물론 DBMS 구조와 그 기능을 공부한다. 아울러 실제 응용에서 시스템 개발과 웹의 연동 방법 등을 학습한다.",
                  },
                },
              ],
            },
          ],
        },
      ],
name: "3학년",
      skills: [
        {
          name: "3학년",
          skills: [
            {
              name: "1학기",
              skills: [
                {
                  name: "운영체제",
                  description: {
                    text: "운영체제, 특히 다중 프로그래밍 시분할 시스템, 비동기 병행프로세서의 기본개념을 다룬다. 스케쥴링, 메모리 관리 정보의 고유 및 보호 등의 개념을 습득한다.",
                  },
                },
                {
                  name: "객체지향 설계",
                  description: {
                    text: "객체지향 개발 방법에 의하여 소프트웨어를 분석하고 설계하기 위한 기본 개념의 이해 및 기법들을 대하여 학습하고, 프로젝트를 통한 문제 분석 및 설계 과정을 진행한다.",
                  },
                },
                {
                  name: "오픈소스 웹소프트웨어",
                  description: {
                    text: "오픈 소스 프로그래밍 언어인 자바를 이용하여 실생활에 적용 가능한 소프트웨어를 개발하고, 이러한 개발과정에서 프로그램의 역할과 프로그램 코드의 체계적인 개발에 대한 중요성을 이해한다.",
                  },
                },
                {
                  name: "컴파일러",
                  description: {
                    text: "최신 컴파일러를 중심으로 어휘분석, 파싱 및 코드생성 등 일련의 컴파일 과정을 학습한다. 특히 컴퓨터 프로그래밍 언어가 가지고 있는 다양한 특징들을 컴파일 단계에서 어떻게 구현되는 가를 학습한다.",
                  },
                },
                {
                  name: "컴퓨터 네트워크",
                  description: {
                    text: "네트워크의 기본 개념과 네트워크의 구조, TCP/IP 프로토콜 구조, 네트워크, 전송 및 응용 계층 프로토콜들에 관련한 기술 및 원리에 대해 인터넷을 중심으로 학습한다.",
                  },
                },
                {
                  name: "창업기획",
                  description: {
                    text: "4차 산업 혁명과 관련된 기술 동향을 파악하고 창업에 관련된 전문 역량을 키운다. 초청강연과 창업에 관한 다양한 활동를 통하여 전공 역량을 강화하고 도전 의식을 함양한다.",
                  },
                },
                {
                  name: "오픈소스 전문프로젝트",
                  description: {
                    text: "소프트웨어 개발이 단순한 코딩 작업만이 아니라, 분석 및 설계 과정을 거쳐 개발되어야 함을 이해하고, 오픈 소스 툴을 사용하여 웹과 앱에서 실행되는 어플리케이션을 개발하는 기술을 학습한다.",
                  },
                },
              ],
            },
            {
              name: "2학기",
              skills: [
                {
                  name: "소프트웨어공학",
                  description: {
                    text: "소프트웨어 공학에 대한 기본적인 개념의 이해와 소프트웨어 개발 과정에서 품질을 향상시키기 위해 요구되는 공학적 활동에 대하여 학습하고, 주어진 문제의 소프트웨어 개발을 위한 프로젝트를 진행한다.",
                  },
                },
                {
                  name: "산학프로젝트(종합설계)",
                  description: {
                    text: "산업체(가족회사)의 멘토 또는 취업 선배(멘토)와의 연계를 통해 산업체가 수행하고 있는 프로젝트를 이해하고, 산업체에서 프로젝트 수행에 따른 문제점과 이에 대한 해결 방안을 멘토와 함께 해결함으로써, 현장의 실전을 이해한다",
                  },
                },
                {
                  name: "펌웨어프로그래밍",
                  description: {
                    text: "마이크로컴퓨터 시스템의 하드웨어 구성 요소를 이해하고, 마이크로프로세서 실습 장비를 사용하여 하드웨어를 제어하기 위한 시스템 시작 코드 해석, 인터럽트 및 타이머 제어 프로그래밍, 입출력 디바이스 제어를 위한 펌웨어 프로그래밍 기술을 습득한다.",
                  },
                },
                {
                  name: "창업설계",
                  description: {
                    text: "4차 산업 혁명과 관련된 기술 동향을 파악하고 창업에 관련된 실무 경험을 수행한다. 초청 강연과 창업에 관한 다양한 활동를 통하여 전공 역량을 강화하고 도전 의식을 함양한다.",
                  },
                },
                {
                  name: "정보보호",
                  description: {
                    text: "정보보호 기초 이론 학습과 네트워크 보안 및 시스템 보안의 기본 개념을 이해하고 안전한 정보 시스템 구축 및 안전한 네트워크 서비스를 제공할 수 있는 방법을 습득한다.",
                  },
                },
                {
                  name: "인공지능",
                  description: {
                    text: "인공지능의 성공적인 적용분야 및 목표를 살펴보고, 대표적인 지능적인 문제 해결 기법들, 지식표현 방법 및 추론, 지식기반 시스템, 자연어처리, 컴퓨터 비전, 지능로봇 등에 대해서 학습한다.",
                  },
                },
                {
                  name: "데이터베이스시스템",
                  description: {
                    text: "이 과목에서는 데이터베이스의 기본 개념과 개체-관계(E-R) 다이어그램, 관계형 데이터 모델 및 SQL 문의 사용, 데이터베이스 설계, 데이터베이스 보안 등은 물론 DBMS 구조와 그 기능을 공부한다. 아울러 실제 응용에서 시스템 개발과 웹의 연동 방법 등을 학습한다.",
                  },
                },
              ],
            },
          ],
        },
      ],

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