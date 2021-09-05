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