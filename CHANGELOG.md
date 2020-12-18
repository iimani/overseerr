# [1.9.0](https://github.com/sct/overseerr/compare/v1.8.0...v1.9.0) (2020-12-18)


### Features

* api key regeneration ([6beac73](https://github.com/sct/overseerr/commit/6beac736efcf7b9102e02e43b75d91a9a158cd22))
* **api:** add movie keyword search ([f88c4a6](https://github.com/sct/overseerr/commit/f88c4a6d4a49f8f3451ba6c85153677f33b7f5f6))
* **frontend:** add studio/networks to movie/tv details ([4b6ad8a](https://github.com/sct/overseerr/commit/4b6ad8a3871957db4192b603abf38404250cea5d)), closes [#370](https://github.com/sct/overseerr/issues/370)
* **frontend:** added user deletion to the user list ([727fa06](https://github.com/sct/overseerr/commit/727fa06c18febb2a97ca219cc6bf0277ff462acd)), closes [#348](https://github.com/sct/overseerr/issues/348)
* **holiday:** special seasonal slider added to discover :) ([908f635](https://github.com/sct/overseerr/commit/908f63557ca03a1da8b16809ffa2c3acd782d94e))
* allow to listen server on specific host interface ([#381](https://github.com/sct/overseerr/issues/381)) ([086183b](https://github.com/sct/overseerr/commit/086183b5636aa8d075d01fe59492c3eab0d1345b)), closes [#273](https://github.com/sct/overseerr/issues/273)
* anime profile support ([#384](https://github.com/sct/overseerr/issues/384)) ([0972f40](https://github.com/sct/overseerr/commit/0972f40a4e1fb3b5f02b07ae46b997d71aab9bfb)), closes [#266](https://github.com/sct/overseerr/issues/266)

# [1.8.0](https://github.com/sct/overseerr/compare/v1.7.0...v1.8.0) (2020-12-17)


### Features

* **lang:** translations update from Weblate ([#336](https://github.com/sct/overseerr/issues/336)) ([ee84f74](https://github.com/sct/overseerr/commit/ee84f74f8a3558875b41daa539f42d00b949898a))

# [1.7.0](https://github.com/sct/overseerr/compare/v1.6.0...v1.7.0) (2020-12-17)


### Bug Fixes

* **email:** do not pass auth object to transport if no auth data present ([d5eb4d8](https://github.com/sct/overseerr/commit/d5eb4d8d438a159266b2de66b6bcdd9440a0c8ef)), closes [#312](https://github.com/sct/overseerr/issues/312)
* **frontend:** add http/https prefix to hostname fields for plex/radarr/sonarr ([ce0266f](https://github.com/sct/overseerr/commit/ce0266f74ea3979b291ff962271a928682892788)), closes [#357](https://github.com/sct/overseerr/issues/357)
* **frontend:** clarify that radarr/sonnarr servers must be tested before profiles/folders appear ([fc12ab8](https://github.com/sct/overseerr/commit/fc12ab84d9482eb3a11f117f8cab6fd48a9401cd)), closes [#326](https://github.com/sct/overseerr/issues/326) [#328](https://github.com/sct/overseerr/issues/328)
* **frontend:** correctly show an unauthorized error when a user fails to login ([18925de](https://github.com/sct/overseerr/commit/18925decafdac518f52a354c594cc378d2529022)), closes [#322](https://github.com/sct/overseerr/issues/322)
* **frontend:** fix tv shows failing to open when firstAirDate is undefined ([c21fa5b](https://github.com/sct/overseerr/commit/c21fa5b5350abdd8e03c077fde7246fa398e176e)), closes [#347](https://github.com/sct/overseerr/issues/347)
* **frontend:** make minimum availability required for Radarr servers ([2fe53ec](https://github.com/sct/overseerr/commit/2fe53ec5a8534e75c7d0cef31a8b46065111e0a7)), closes [#345](https://github.com/sct/overseerr/issues/345)
* **plex-sync:** bundle duplicate ratingKeys to speed up recently added sync ([67146c3](https://github.com/sct/overseerr/commit/67146c33ef7f28d520ba2c50b32673d43f4525c8)), closes [#360](https://github.com/sct/overseerr/issues/360)
* **sonarr.ts, mediarequest.ts:** add missing seasonFolder option ([#358](https://github.com/sct/overseerr/issues/358)) ([e9c899c](https://github.com/sct/overseerr/commit/e9c899ce419d149dde2ad9a0f7d5a2f2545b3ebf))


### Features

* **frontend:** show alert when there are no default radarr/sonarr servers ([0d088e0](https://github.com/sct/overseerr/commit/0d088e085e68d39455fda21d1fd08ebcaef2c06b)), closes [#344](https://github.com/sct/overseerr/issues/344)

# [1.6.0](https://github.com/sct/overseerr/compare/v1.5.0...v1.6.0) (2020-12-16)


### Bug Fixes

* **api:** accept the api key to perform actions on the api with X-API-Key header ([33f8831](https://github.com/sct/overseerr/commit/33f8831e880dc7fd3f69d951246cada5c6c0ffe7))
* **api:** filter out libraries that do not have any metadata agent or are not movie/show ([01c179f](https://github.com/sct/overseerr/commit/01c179f762e686a1e5a3d4dab3a5bea53425b575))
* **api:** only run recently added sync on enabled libraries ([e08fa35](https://github.com/sct/overseerr/commit/e08fa35548bb8644afa8df3124e6f9cc3a2c8f4a)), closes [#259](https://github.com/sct/overseerr/issues/259)
* **api:** set plex libraries to disabled if the name changes ([675060b](https://github.com/sct/overseerr/commit/675060bcdf23acbfd4de2900a65f95e74f4966a5)), closes [#324](https://github.com/sct/overseerr/issues/324)
* **frontend:** adds a tip to plex setup to clarify that syncing runs in the background ([df4ac83](https://github.com/sct/overseerr/commit/df4ac8361f82971ee845f3be217408a9123a0bf3)), closes [#325](https://github.com/sct/overseerr/issues/325)
* **frontend:** aligned movie and tv details ([#331](https://github.com/sct/overseerr/issues/331)) ([db0a5c4](https://github.com/sct/overseerr/commit/db0a5c44f678e76eee7f5582381016306d1f46a2))
* **frontend:** close sidebar when clicking outside ([#333](https://github.com/sct/overseerr/issues/333)) ([6d7907e](https://github.com/sct/overseerr/commit/6d7907e844a909993d185759d660632f55aeaa35))
* spelling mistake on the word 'requested' fixed ([#319](https://github.com/sct/overseerr/issues/319)) ([961d110](https://github.com/sct/overseerr/commit/961d1107208069a6fc820a1ba97ffda7336677cb))


### Features

* add version to startup logs ([2948f93](https://github.com/sct/overseerr/commit/2948f9360eb484d1d6c0740a840135ca97e7240a))
* **frontend:** temporary logs page to clear up confusion about it 404ing ([d9788c4](https://github.com/sct/overseerr/commit/d9788c4aa9f87e2eda3f7e3f1adc985f16039552)), closes [#272](https://github.com/sct/overseerr/issues/272)
* **lang:** add support for Spanish language ([6cd2049](https://github.com/sct/overseerr/commit/6cd20491d2a0ceb995c4744eeb92a6e2f57a4893))
* **lang:** Translations update from Weblate ([#291](https://github.com/sct/overseerr/issues/291)) ([fddbb3c](https://github.com/sct/overseerr/commit/fddbb3cdfe3d50b2835c248556139c769dc2b805))

# [1.5.0](https://github.com/sct/overseerr/compare/v1.4.0...v1.5.0) (2020-12-15)


### Bug Fixes

* **api:** require package.json directly so typescript doesnt compile it into dist folder ([b9faa64](https://github.com/sct/overseerr/commit/b9faa6486b35aa865019aa8af9d307531054bc1d))
* **frontend:** add validation for Radarr/Sonarr server name ([b5988f9](https://github.com/sct/overseerr/commit/b5988f9a5ff274e97f208c2726abe76c22c858ee))
* **frontend:** only show alpha notice to admins ([ff61895](https://github.com/sct/overseerr/commit/ff618956b5d9cf933d867ea979b612c3d8a6f30b))
* add support for ssl when connecting to plex ([3ba09d0](https://github.com/sct/overseerr/commit/3ba09d07eb0367c41603cd55e7ff41c66fb641c4)), closes [#275](https://github.com/sct/overseerr/issues/275)
* **services:** improve logging for when Radarr movie already exists ([#285](https://github.com/sct/overseerr/issues/285)) ([f998873](https://github.com/sct/overseerr/commit/f998873fc5669a547901f2733c9c785d744d27ca)), closes [#260](https://github.com/sct/overseerr/issues/260)


### Features

* **lang:** add i18n strings for new about page ([900827b](https://github.com/sct/overseerr/commit/900827be97845688e4bea72a8c5d9611a3e9d069))
* about page initial version ([3f2a04c](https://github.com/sct/overseerr/commit/3f2a04c881bf06b73a952181fa463af84454b0dd))

# [1.4.0](https://github.com/sct/overseerr/compare/v1.3.2...v1.4.0) (2020-12-15)


### Bug Fixes

* changing parameter name to use correct 'port' [#276](https://github.com/sct/overseerr/issues/276) ([#277](https://github.com/sct/overseerr/issues/277)) ([6d08b10](https://github.com/sct/overseerr/commit/6d08b108200177ca3068c852e60a0df75ce2232a))
* **services:** include radarr/sonarr baseUrl when adding media ([78af1a3](https://github.com/sct/overseerr/commit/78af1a3e6d00a5645a05e7bf3cf56a59439b6cc9))


### Features

* **lang:** Translations update from Weblate ([#240](https://github.com/sct/overseerr/issues/240)) ([e17c637](https://github.com/sct/overseerr/commit/e17c63748362b6a480693e003ef5eec614dcec43))

## [1.3.2](https://github.com/sct/overseerr/compare/v1.3.1...v1.3.2) (2020-12-14)


### Bug Fixes

* **frontend:** convert plex port to a number before posting to the api ([8cb05c4](https://github.com/sct/overseerr/commit/8cb05c413a15a4b74e37ece5e24367d115995b32))
* **frontend:** converts email smtp port to a number before posting to the api ([2098a2d](https://github.com/sct/overseerr/commit/2098a2d3d2981fd2ae54392aec3ef81327f2858e)), closes [#251](https://github.com/sct/overseerr/issues/251)
* **frontend:** encode special characters in search input to prevent crashing router ([15013d6](https://github.com/sct/overseerr/commit/15013d6c5dbff15704c7c30d261d68a265e7f2d7)), closes [#252](https://github.com/sct/overseerr/issues/252)
* **plex sync:** catch errors that occur during processMovie ([edbbccf](https://github.com/sct/overseerr/commit/edbbccf3ae623430294f1a5c3fd2728dbd42e555)), closes [#244](https://github.com/sct/overseerr/issues/244) [#246](https://github.com/sct/overseerr/issues/246) [#250](https://github.com/sct/overseerr/issues/250)
* **services:** improve logging for adding movies to Radarr ([6c1ee83](https://github.com/sct/overseerr/commit/6c1ee830a183f89bb1fe96a181a7d61684e23b22))
* **services:** radarr/sonarr will use the correct default server ([0658b79](https://github.com/sct/overseerr/commit/0658b7943e1ab25816db9da34d4c9ea808d9203d))

## [1.3.1](https://github.com/sct/overseerr/compare/v1.3.0...v1.3.1) (2020-12-14)


### Bug Fixes

* **frontend:** also convert activeProfileId to a number for radarr/sonarr submissions ([7bf924f](https://github.com/sct/overseerr/commit/7bf924f7e94a0e0834f41b4ec067ed277c652766))
* **frontend:** also convert ports to numbers when saving radarr/sonarr servers ([c53dc3b](https://github.com/sct/overseerr/commit/c53dc3b15da522c6e6ab76bbc9d15008a8a9fb9d))
* **frontend:** new radarr/sonarr ports will be converted to a number before posting ([92c9001](https://github.com/sct/overseerr/commit/92c9001c9d1f2cbd272a5897ea1157d2cadbce2d))

# [1.3.0](https://github.com/sct/overseerr/compare/v1.2.0...v1.3.0) (2020-12-14)


### Bug Fixes

* **api:** correctly generate clientId on first startup ([5f09e83](https://github.com/sct/overseerr/commit/5f09e83ed870336638d3e9d94fcf55ead928e737))


### Features

* **frontend:** add full cast page for movies and series ([051f1b3](https://github.com/sct/overseerr/commit/051f1b3e899bf749e632743e5c8d45a02b621998))
* **lang:** translated using Weblate (Dutch) ([1ab3a4b](https://github.com/sct/overseerr/commit/1ab3a4b80a081d7e4a201f1290cd270ed5b38ac7))
* **lang:** translated using Weblate (English) ([0949c9b](https://github.com/sct/overseerr/commit/0949c9b334b3a4b6c342517a157a9e2b7596f2f0))
* **lang:** translated using Weblate (French) ([f943701](https://github.com/sct/overseerr/commit/f943701e13c7f0de5a711302597858cc898b16e2))
* **lang:** translated using Weblate (French) ([30d04ce](https://github.com/sct/overseerr/commit/30d04ce35adc21070cce37ab10384154afda191b))
* **lang:** translated using Weblate (German) ([7bf9add](https://github.com/sct/overseerr/commit/7bf9addd13a707aac23b64ef3f1733e491d40a4e))
* **lang:** translated using Weblate (German) ([b6e60a4](https://github.com/sct/overseerr/commit/b6e60a412b30907aea751a4cf1ce0cc8230f9814))
* **lang:** translated using Weblate (Japanese) ([08e968f](https://github.com/sct/overseerr/commit/08e968fd0097ec7b2a65de064ed5b07e7c49ef39))
* **lang:** translated using Weblate (Norwegian Bokmål) ([83efb0e](https://github.com/sct/overseerr/commit/83efb0e3d4d96b6a2d2ebdd85d36c9d78c1717b2))
* **lang:** translated using Weblate (Russian) ([0d8e0d0](https://github.com/sct/overseerr/commit/0d8e0d0352f72fdb65ee8f054371eae08c39fe33))

# [1.2.0](https://github.com/sct/overseerr/compare/v1.1.0...v1.2.0) (2020-12-11)


### Bug Fixes

* **frontend:** person cards now show correctly in ListView's ([ccb9855](https://github.com/sct/overseerr/commit/ccb98553f104c1aebd33796b7090cc9bbe964bd7))
* **frontend:** properly remove site overlay when closing modals ([3fa7ff9](https://github.com/sct/overseerr/commit/3fa7ff9858d14d132151f3329164d55d74638f53))
* **frontend:** switch to using Transition component for modals ([b16fbaf](https://github.com/sct/overseerr/commit/b16fbafa1f3d5e105c0a4ba6f1d66aa064019636)), closes [#220](https://github.com/sct/overseerr/issues/220)
* fix missing personid in Discover ([d8060af](https://github.com/sct/overseerr/commit/d8060afe02574337f51b88cab0a0f824976ac721))
* missing personId in ListView component ([6502feb](https://github.com/sct/overseerr/commit/6502feb1a5be3c6daab33230814fe74632c87f7e))
* **frontend:** update overflow issues with seasons + email ([#217](https://github.com/sct/overseerr/issues/217)) ([2d0afb2](https://github.com/sct/overseerr/commit/2d0afb29d37798a626e3f182571ccce43d80063c)), closes [#216](https://github.com/sct/overseerr/issues/216)
* **lang:** fix missing i18n string for agent enabled in email notification page ([42788ad](https://github.com/sct/overseerr/commit/42788adb75f7d23e68327688b1c542dd047e9609))


### Features

* **lang:** update language files ([8cd067b](https://github.com/sct/overseerr/commit/8cd067b6e9df1a3c8f4056789436a31177703986))
* person details page ([d6eb3ae](https://github.com/sct/overseerr/commit/d6eb3ae64ef46bd62145010d3029e272676487c3))
* **lang:** add nb-NO and de language support to app ([d38b28d](https://github.com/sct/overseerr/commit/d38b28d2061b38366989ff412957a5dee5766c6f))
* **lang:** add support for dutch language ([df94db0](https://github.com/sct/overseerr/commit/df94db050bf68a925118e0ce865d27178b702f9e))
* **lang:** add support for russian languge ([8d8e750](https://github.com/sct/overseerr/commit/8d8e7509826514eebc859374d2e1ab212cc442d1))
* **lang:** added translation using Weblate (Russian) ([887f5dd](https://github.com/sct/overseerr/commit/887f5dd487b61676029652d99cbc5b40213aa22e))
* **lang:** translated using Weblate (French) ([30a8934](https://github.com/sct/overseerr/commit/30a8934626fa2d47e95b5925d7e4227a0d0aa728))
* **lang:** translated using Weblate (German) ([44dbb74](https://github.com/sct/overseerr/commit/44dbb745b6216ce19fab4740520785c6414cf367))
* **lang:** translated using Weblate (Japanese) ([a494507](https://github.com/sct/overseerr/commit/a494507dfeafb0cfd2bd66fb01138522e0e80737))
* **lang:** translated using Weblate (Russian) ([86cadb8](https://github.com/sct/overseerr/commit/86cadb8283fcab8745b4c09f8429fd9e46708813))
* **lang:** translations update from Weblate ([#201](https://github.com/sct/overseerr/issues/201)) ([b0c663b](https://github.com/sct/overseerr/commit/b0c663baccd994e234b4d41d86486c3af4906344))

# [1.1.0](https://github.com/sct/overseerr/compare/v1.0.0...v1.1.0) (2020-12-08)


### Bug Fixes

* fix a few misc unused imports and useless assignments/conditionals ([8e6daf7](https://github.com/sct/overseerr/commit/8e6daf7bd271ce5bebf4a00f5bb1144bd6b60aa5))
* **frontend:** dont show delete button in request list for users without correct permission ([83fde46](https://github.com/sct/overseerr/commit/83fde46a59c6f1910806a6106b5526b8adbc386c))
* **frontend:** push updated i18n locale files ([b4002d7](https://github.com/sct/overseerr/commit/b4002d71323a04e7991198cedc263660e872df8d))


### Features

* generate real api key ([a839370](https://github.com/sct/overseerr/commit/a8393707fec85a9262af5ba8c03d205190b2235b))
* **frontend:** add i18n strings for request list and request item ([6c4022f](https://github.com/sct/overseerr/commit/6c4022fb236583ad20d4c4c6693c1339e165b4af))
* **frontend:** initial version of the requests page (no filtering/sorting) ([1ba027b](https://github.com/sct/overseerr/commit/1ba027b4357e078c3f177d9d07208049f0c1ce65))
* **frontend:** only load request/tmdb cards when in the browser view ([2d51efd](https://github.com/sct/overseerr/commit/2d51efd71612ec969b83c62d6aa0dac6df9391a3))

# 1.0.0 (2020-12-06)


### Bug Fixes

* **api:** fix scheduling for plex full sync (maybe) ([7287a6a](https://github.com/sct/overseerr/commit/7287a6a95703b23acc0c4f6eb3beb9ec2295e33f))
* **frontend:** always show request modal option for tv ([2b46268](https://github.com/sct/overseerr/commit/2b462688243531b4be620a942f59defd4e0534d0))
* **frontend:** canceled movie request should set parent movie status back to unknown ([#198](https://github.com/sct/overseerr/issues/198)) ([139871f](https://github.com/sct/overseerr/commit/139871f218812a15f742aa66408db12704e0b9b5))
* **frontend:** close request modals when complete ([85ae499](https://github.com/sct/overseerr/commit/85ae4998f0ba8d4869b9b244f2c440b9df1310d2))
* **frontend:** dont show runtime if there is no runtime data ([e0c39ae](https://github.com/sct/overseerr/commit/e0c39aeca119b822f2a54ff05a97f91780ddd052))
* **frontend:** fix missing data for request modal title i18n ([a56fd16](https://github.com/sct/overseerr/commit/a56fd16ab6638d4649fe9f8b9d75e7cae7742f73))
* **frontend:** fix missing import for ReactNode type in Slider ([b26a234](https://github.com/sct/overseerr/commit/b26a2347e7b0f7ff8720a204d9faefd501ba886c))
* **frontend:** fix modal design and rename some text for adding servers ([46d99b0](https://github.com/sct/overseerr/commit/46d99b02b1c992c7b8dde2150217ed9ce326b7a5))
* **frontend:** fix opening popups on safari ([364d9d1](https://github.com/sct/overseerr/commit/364d9d105ca3690fcd5f635485d7c025353bb9f1))
* **frontend:** fix request card placeholder sizes for mobile ([ef62c67](https://github.com/sct/overseerr/commit/ef62c67480ed52d753ea6db8205f035b2e9da272))
* **frontend:** show a badge on requestcard for partially available status ([59056c4](https://github.com/sct/overseerr/commit/59056c44f942a37df536ff947b5faccc27f32246))
* dont cross import SyncStatus type ([e032e38](https://github.com/sct/overseerr/commit/e032e385a5253d215490255c676f42ee48f39428))
* fix type import from server side crashing build process ([89be56d](https://github.com/sct/overseerr/commit/89be56d8403ebc60c411e7cb357593edd9c79bb2))
* **frontend:** fix title detail background image to be centered ([b92f64f](https://github.com/sct/overseerr/commit/b92f64fa6e167bc89168d8f5c0f2eb12efa0b6f0))
* **frontend:** fixed similar/recommendations showing when empty ([#180](https://github.com/sct/overseerr/issues/180)) ([a3ca9b4](https://github.com/sct/overseerr/commit/a3ca9b40c552e6cc5effc2f57f7562ff6f723e42))
* **frontend:** have tvDetail use the new RequestModal ([6aca826](https://github.com/sct/overseerr/commit/6aca82607b97d4a4ad74e2ea843d52fba4689e6a))
* **frontend:** reinitalize plex form after data loads ([97e3036](https://github.com/sct/overseerr/commit/97e30367fb5d2d27efc42c1d76b0d051b6f1da76))
* **frontend:** remove requestId from tilecard request modal component ([61b6152](https://github.com/sct/overseerr/commit/61b6152e8915c99585b944756a61d33b8c8a0307))
* **frontend:** run initial props for children components after getting the user ([fdf9f38](https://github.com/sct/overseerr/commit/fdf9f38776b6d4c08b3505c03b354639cebb011f))
* **frontend:** when there were no results in the list view, it would call fetch more infinitely ([c0ce87b](https://github.com/sct/overseerr/commit/c0ce87b6f65bf0ab1301c7ca61090d779709529f))
* fixed an issue with eslint-prettier on windows ([#32](https://github.com/sct/overseerr/issues/32)) ([b673ea1](https://github.com/sct/overseerr/commit/b673ea1b18ca0f432996bb9e4e5d148af0247170))
* fixes next.js build to not include server files ([de8ee9b](https://github.com/sct/overseerr/commit/de8ee9ba85e0160b0b472cab44f92c01796efec8))


### Features

* add migration for delete cascades on season requests/seasons ([c688cf6](https://github.com/sct/overseerr/commit/c688cf60c710f0cf0b2da5ba6b0c18a2d137e7f9))
* **api:** email notification agent ([0962392](https://github.com/sct/overseerr/commit/0962392e3930c7fdcb3164b9143cc8faca38bdfa))
* **frontend:** add french language file ([cd6d8a8](https://github.com/sct/overseerr/commit/cd6d8a8216e7ae183b046d26cd22f3c1dc1d2b35))
* **frontend:** add translatable strings for request card ([0d2f360](https://github.com/sct/overseerr/commit/0d2f360c22cd9bb50ae04f00a25e5fcc6c21bcdd))
* **frontend:** added more localized strings ([659a601](https://github.com/sct/overseerr/commit/659a6018777718f7a90141307678d8dadcfd77f8))
* actually include email templates in built server files ([a28a8b3](https://github.com/sct/overseerr/commit/a28a8b37b0afc79583e4a7191a91f73ff6d3adad))
* add application url config to main settings ui ([a359672](https://github.com/sct/overseerr/commit/a359672ebafffef742858814f0faa918e0341aa3))
* add filtering for requests api ([cb9ae25](https://github.com/sct/overseerr/commit/cb9ae25d94f21e97113dfea3ca45c7002089e344))
* add trending to discover page ([ff8b9d8](https://github.com/sct/overseerr/commit/ff8b9d8e7ed228a153c2da4d237f7a4f99a79321))
* force setup if app is not initialized ([a99705f](https://github.com/sct/overseerr/commit/a99705f6a5674b436ae28cbc558f4ee6e99ac910))
* initial user list (no edit/delete yet) and job schedules ([24a0423](https://github.com/sct/overseerr/commit/24a0423f3b14303cfb0e83aef6e9e3bb273c5ba9))
* manage series slideover added (and approve/decline/delete hooked up) ([236c4e5](https://github.com/sct/overseerr/commit/236c4e5e6126d2424a4badc08b7f7e6d1d70f401))
* media delete option in manage media slideover ([250f484](https://github.com/sct/overseerr/commit/250f48492c95d74e40d95d3f026d2952157bc6e1))
* other email notifications for approved/available ([0d73d88](https://github.com/sct/overseerr/commit/0d73d88f35b03e993f305873dc72672003c7d9e5))
* radarr edit/create modal/backend functionality ([c4ac357](https://github.com/sct/overseerr/commit/c4ac357ef4cdd7a2c610260db46a4f0c325cd785))
* season creation migration ([978f92a](https://github.com/sct/overseerr/commit/978f92a1c589ac404a3cb1103a68a8a5ffb0dd7d))
* sonarr edit/delete modal ([3204326](https://github.com/sct/overseerr/commit/320432657e6ccf4d255238098e03590f28267bdb))
* throw 404 when movie/tv show doesnt exist ([0601b44](https://github.com/sct/overseerr/commit/0601b446873e2eaf042044dd6a995b713586b0cc))
* **api:** sonarr api wrapper / send to sonarr ([9385592](https://github.com/sct/overseerr/commit/9385592362eeba1dba05c5aa8fc7a2de1d054d74))
* **frontend:** add header styling to movie/tv recommendation and similar list views ([f5f2545](https://github.com/sct/overseerr/commit/f5f2545520a43daa23e1276d24ff60d794ebbc6e))
* **frontend:** add links to detail pages from new request card ([6ad3384](https://github.com/sct/overseerr/commit/6ad3384a78f7bcb03f409cce8b35cc61d634d6b2))
* **frontend:** new design for request card ([93738e1](https://github.com/sct/overseerr/commit/93738e154c41fd11d5c6cf3d35573daf54ead471))
* **frontend:** update favicon ([886389a](https://github.com/sct/overseerr/commit/886389a361da54c616da3bdfeee9a85e9d12bcf3))
* notification framework ([d8e542e](https://github.com/sct/overseerr/commit/d8e542e5fe2ed76dcb20fb6dfc5f59430cd4245d))
* notifications for media_available and media_approved ([a6c5e65](https://github.com/sct/overseerr/commit/a6c5e65bbfc196545471e99fe2e5b7194f9dd387))
* rotten tomatoes scores on movie/tv details pages ([1694f60](https://github.com/sct/overseerr/commit/1694f60e8aa475ceeb7f170a783ec0ba70bd4bce))
* upcoming movies on discover ([67290dd](https://github.com/sct/overseerr/commit/67290dd502571a22dcf8559ac07f42e855275bd0))
* upcoming/trending list views and larger title cards ([94eaaf9](https://github.com/sct/overseerr/commit/94eaaf96b4302a832c52ccb72009b3593452c779))
* upgrade tailwindcss to 2.0.1 ([fb5c791](https://github.com/sct/overseerr/commit/fb5c791b0b6b7593a472bf01713999a001f92dc7))
* user edit functionality (managing permissions) ([185ac26](https://github.com/sct/overseerr/commit/185ac2648fd21c4bf9692ac5ac055e9c740065ca))
* **api:** plex tv sync and recently added sync ([1390cc1](https://github.com/sct/overseerr/commit/1390cc1f130bb3975996e84b12ac833f55f2f753))
* **frontend:** allow permission check for showing nav items ([0b239f0](https://github.com/sct/overseerr/commit/0b239f0bdfb1394897bce5c50b0d112abfbb4ad7))
* **frontend:** alpha notice ([33da7e9](https://github.com/sct/overseerr/commit/33da7e9df3a2546b0f208bd3b1d1f268e343cead))
* **frontend:** buttonWithDropdown component added (no hookups yet) ([4975841](https://github.com/sct/overseerr/commit/4975841b5d4ba4ed1ba8cacaa5a063eeb3b8c311))
* **frontend:** cancel movie request modal ([1f9cbbf](https://github.com/sct/overseerr/commit/1f9cbbfdf1ac98e54de5b8777c52c7bfc69c7e20))
* **frontend:** improved settings menu design for mobile ([16221a4](https://github.com/sct/overseerr/commit/16221a46a7d57c77f53aa0186263aa27267d9863))
* **frontend:** initial Settings design ([8742da0](https://github.com/sct/overseerr/commit/8742da0ebb92d2f78309a998de0f67e788e14376))
* **frontend:** plex library scan ([1bc3f7b](https://github.com/sct/overseerr/commit/1bc3f7be4b07211563a1e254c28ce51e1bc337a2))
* **frontend:** plex settings page ([47714b6](https://github.com/sct/overseerr/commit/47714b698cf4351c1ee38bdf0b672d9f0baed03a))
* **frontend:** radarr delete modal ([877a518](https://github.com/sct/overseerr/commit/877a5184158fb4aa371fa2ea2107032543c9aa37))
* **frontend:** recently added on discover ([06dc606](https://github.com/sct/overseerr/commit/06dc606bcfeb50b7be1c35ac180c10738bade458))
* **frontend:** slideover initial work ([14b9cb6](https://github.com/sct/overseerr/commit/14b9cb610c0dcfef939ebec328f371e1cdfb689d))
* tv request modal status hookup ([5f8114f](https://github.com/sct/overseerr/commit/5f8114f730b067eb710704952824057e7b5b8fbf))
* **.editorconfig:** add .editorconfig ([b982066](https://github.com/sct/overseerr/commit/b982066327525156f8dd0d32818d3fe7cb28f9c8))
* **api:** add external ids to movie/tv response ([4aa7431](https://github.com/sct/overseerr/commit/4aa74319e0adcc19041239e57a00bc40fb127826))
* **api:** add movie details endpoint ([b176148](https://github.com/sct/overseerr/commit/b1761484cb2861329763d51a868f37dd3098760d))
* **api:** add tmdb discover api wrapper ([#67](https://github.com/sct/overseerr/issues/67)) ([839448f](https://github.com/sct/overseerr/commit/839448fcc8cc14ea83092af82e2ba3d0d92c9b73))
* **api:** allow plex logins from users who have access to the server ([5147140](https://github.com/sct/overseerr/commit/514714071dfe4be04e607fe6412f5b3f0ef74dd4))
* **api:** decouple media requests from media info ([8577db1](https://github.com/sct/overseerr/commit/8577db1be16f099d92c6649bbfb15f15e09a2f73))
* **api:** discover endpoint for movie/tv ([#73](https://github.com/sct/overseerr/issues/73)) ([258bb93](https://github.com/sct/overseerr/commit/258bb93be2acc2ca32eaaefb617a5c326c5943ba))
* **api:** initial implementation of the auth system ([#30](https://github.com/sct/overseerr/issues/30)) ([5343f35](https://github.com/sct/overseerr/commit/5343f35e5b572fe366a8712b24bd735de30e6170))
* **api:** plex Sync (Movies) ([1be8b18](https://github.com/sct/overseerr/commit/1be8b183617c3a44ab8d4454a64b43dfe1d877fe))
* **api:** public settings route ([#57](https://github.com/sct/overseerr/issues/57)) ([c0166e7](https://github.com/sct/overseerr/commit/c0166e7ecb5df110a4167f33338ed6406bf47f41))
* **api:** radarr api wrapper / send to radarr when requests approved ([#93](https://github.com/sct/overseerr/issues/93)) ([48d62c3](https://github.com/sct/overseerr/commit/48d62c3178488d0d51831155ddd35cc31867db2b))
* **api:** request api ([#80](https://github.com/sct/overseerr/issues/80)) ([f4c2c47](https://github.com/sct/overseerr/commit/f4c2c47e569e7faea7f99664966cb98b321ce952))
* **api:** tmdb api wrapper / multi search route ([#62](https://github.com/sct/overseerr/issues/62)) ([c702c17](https://github.com/sct/overseerr/commit/c702c17cee00a52b23f685206e2d5d0c2eddf5a2))
* **api:** tmdb trending api wrapper ([#68](https://github.com/sct/overseerr/issues/68)) ([ba34e54](https://github.com/sct/overseerr/commit/ba34e54d77d142d211df58d6ce9f53b6e673e004))
* **api:** tv details endpoint ([a3beeed](https://github.com/sct/overseerr/commit/a3beeede7e72e99c7595673a27e38611ca4bb0cd))
* **api:** validate plex when settings are saved ([8f6247d](https://github.com/sct/overseerr/commit/8f6247d82160704a3cfb76262696957b27641e87))
* **api-user:** add basic User Entity and basic routing to fetch all users ([d902ef7](https://github.com/sct/overseerr/commit/d902ef72770712f2f71f33c09bca9ba99a30fc64))
* **components/plexloginbutton:** added PlexLoginButton ([0abf743](https://github.com/sct/overseerr/commit/0abf743b17c664b58da18bdbf176f4a55ddc4179))
* **extensions.json:** added recommended extensions for VSCode ([5dc9b51](https://github.com/sct/overseerr/commit/5dc9b510b8049516ad889c9d76a2f84daa0d2718))
* **frontend:** add cancel request modal for titlecards ([f22f8c5](https://github.com/sct/overseerr/commit/f22f8c5d734be5cc0b1dcca869458a7321cd43a2))
* **frontend:** approve/decline request well added to movie detail ([8f21358](https://github.com/sct/overseerr/commit/8f21358f797ed55923d90ba43acf1126856e9dfd))
* **frontend:** basic discover page (only movies) ([#74](https://github.com/sct/overseerr/issues/74)) ([bbfe349](https://github.com/sct/overseerr/commit/bbfe349b52d308620796b37aaf986a0ed1ff0006))
* **frontend:** design updates for responsive titlecards ([31809d9](https://github.com/sct/overseerr/commit/31809d952c8bafde3f63e2c1d952cc013149940e))
* **frontend:** discover tv/movies full page ([be0003a](https://github.com/sct/overseerr/commit/be0003a85dc4e91799e85019aeb1110bd524a026))
* **frontend:** initial search functionality ([#78](https://github.com/sct/overseerr/issues/78)) ([342d1a3](https://github.com/sct/overseerr/commit/342d1a3c75b32b172a51ca7d82fdfde8510abedf))
* **frontend:** loading spinner ([de84658](https://github.com/sct/overseerr/commit/de84658b48985e24b0f92a1690387f6d59d0bc16))
* **frontend:** logo updates ([5a43ec5](https://github.com/sct/overseerr/commit/5a43ec5405855deb244e8085484a9d2b743caba6))
* **frontend:** modal component and basic request hookup ([#91](https://github.com/sct/overseerr/issues/91)) ([626099a](https://github.com/sct/overseerr/commit/626099a2c98fb30d0cb53d8ccf79a6bf75a00059))
* **frontend:** new dashboard concept ([#82](https://github.com/sct/overseerr/issues/82)) ([eae38bb](https://github.com/sct/overseerr/commit/eae38bb9ec8588856f319387d2f262d7ee3f7e9c))
* **frontend:** refresh indicator for titlecards / toasts ([4638fae](https://github.com/sct/overseerr/commit/4638fae336edc62a539796b3f55277a238683603))
* **frontend:** request card / recent requests ([371e433](https://github.com/sct/overseerr/commit/371e43356d2c057e52368c32ffe2af1744311d91))
* **frontend:** title detail (movie) initial version ([73ce24a](https://github.com/sct/overseerr/commit/73ce24a37bda3713e8cedc44e1ed065bdbc4ee4f))
* **frontend/api:** beginning of new request modal ([2bf7e10](https://github.com/sct/overseerr/commit/2bf7e10e32718b36799be2feb0a7f9ff54d85744))
* **frontend/api:** cast included with movie request and cast list on detail page ([04252f8](https://github.com/sct/overseerr/commit/04252f88bbdf51949923586feda582f86ac668ce))
* **frontend/api:** i18n support ([9131254](https://github.com/sct/overseerr/commit/9131254f3371f12a17de44b6fa8f9bfb0e5c002e))
* **frontend/api:** movie recommendations/similar request and frontend detail page update ([6398e36](https://github.com/sct/overseerr/commit/6398e3645a1e4ddbb9de9f4fda0a0659b4cac4d0))
* **frontend/api:** tv details page ([02cbb5b](https://github.com/sct/overseerr/commit/02cbb5b030a3af5d62ab6c4cafdd4d800b4f61f4))
* **frontend/api:** tv request modal (no status. only request) ([608b966](https://github.com/sct/overseerr/commit/608b96600a926adf16331b36e77789afa5d67069))
* logout route/sign out button ([#54](https://github.com/sct/overseerr/issues/54)) ([cb9098f](https://github.com/sct/overseerr/commit/cb9098f457f79b71734959fd924b6c72ca77d61d))
* user avatars from plex ([#53](https://github.com/sct/overseerr/issues/53)) ([e6349c1](https://github.com/sct/overseerr/commit/e6349c13a0eb0489289aa7663fcc64fa7d2906e6))
* **layout:** created Layout component ([1f497e8](https://github.com/sct/overseerr/commit/1f497e8913146ceb9748d667e638141b2ca4612a))
* **login component/route:** add: Login Component and Route ([6e47be2](https://github.com/sct/overseerr/commit/6e47be2fa865bcd51582ce30ebee6fd820c5f9dd))
* **login route conditional:** on login route, do not display layout ([7d179ae](https://github.com/sct/overseerr/commit/7d179ae3b42d8ffae5e1b6e266038793260f1bbe))
* **pass pageprops to loginpage:** pass page props to loginPage ([1597188](https://github.com/sct/overseerr/commit/159718891fb363001c650ac8b7e1446a1520ce4a))
* **plex/utils:** added Plex OAuth class ([72f9624](https://github.com/sct/overseerr/commit/72f9624f1db721fe0324b7be9f0f811d2ae02389))
* bootstrap the basic app structure ([89a6017](https://github.com/sct/overseerr/commit/89a6017c7f6f7637fe249ac0d667a652f44e02bb))