import type { CountryOptionType, OTTProviderType } from "../types/common";

export const FILTER_CONSTANTS = {
	SORT: "sort_by",
	WHERE_TO_WATCH: "watch_region",
	LANGUAGES: "Languages",
	YEARS: "Years",
};

 
export const SORTING_PAYLOAD_KEYS = {
    POPULARITY_DESC: "popularity.desc",
    POPULARITY_ASC: "popularity.asc",
    RATING_DESC: "vote_average.desc",
    RATING_ASC: "vote_average.asc",
    RELEASE_DATE_DESC: "primary_release_date.desc",
    RELEASE_DATE_ASC: "primary_release_date.asc",
    TITLE_ASC: "title.asc",
    TITLE_DESC: "title.desc",
    ORIGINAL_TITLE_DESC: "original_title.desc",
    ORIGINAL_TITLE_ASC: "original_title.asc",
    REVENUE_DESC: "revenue.desc",
    REVENUE_ASC: "revenue.asc",
    VOTE_COUNT_DESC: "vote_count.desc",
    VOTE_COUNT_ASC: "vote_count.asc",
} as const;

export const SORT_BY_OPTIONS = [
	{
		label: "Popularity Descending",
		value: SORTING_PAYLOAD_KEYS.POPULARITY_DESC,
	},
	{
		label: "Popularity Ascending",
		value: SORTING_PAYLOAD_KEYS.POPULARITY_ASC,
	},
	{
		label: "Rating Descending",
		value: SORTING_PAYLOAD_KEYS.RATING_DESC,
	},
	{
		label: "Rating Ascending",
		value: SORTING_PAYLOAD_KEYS.RATING_ASC,
	},	
	{
		label: "Release Date Descending",
		value: SORTING_PAYLOAD_KEYS.RELEASE_DATE_DESC,
	},
	{
		label: "Release Date Ascending",
		value: SORTING_PAYLOAD_KEYS.RELEASE_DATE_ASC,
	},
	{
		label: "Title (A-Z)",
		value: SORTING_PAYLOAD_KEYS.TITLE_ASC,
	},
	{
		label: "Title (Z-A)",
		value: SORTING_PAYLOAD_KEYS.TITLE_DESC,
	},
];

export const COUNTRY_OPTIONS: Array<CountryOptionType> = [
	{
		name: "Albania",
		countryCode: "AL",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/AL-c484c009f5ea9fea49556008d43190384ef8f7276a8248e0fb47fbe532a2c834.png",
	},
	{
		name: "Algeria",
		countryCode: "DZ",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/DZ-ac97f91e52d33c3c5e5481c62a1a0c53a3726133d233e934ecb805931ddbe0f8.png",
	},
	{
		name: "Andorra",
		countryCode: "AD",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/AD-94531c9fa3fc7b91a70b53dde5badcb0ad8f66dfbd466862689bf67029c37157.png",
	},
	{
		name: "Angola",
		countryCode: "AO",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/AO-adcfe12b9c19dad22213163af00f45c2eac0bf0ea8f93a649b90922affceac3b.png",
	},
	{
		name: "Antigua & Barbuda",
		countryCode: "AG",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/AG-11a801f43f4190c71c56fe8fb948cd3d5bf5b3b5bed0713cf5fe284a0af97a0a.png",
	},
	{
		name: "Argentina",
		countryCode: "AR",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/AR-af53c8037def87d38995d642d93f899f5e4922ca62843dde5b5cc361771c3bf0.png",
	},
	{
		name: "Australia",
		countryCode: "AU",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/AU-987875cfcb3626621074bb52ae1c72b43d15f51801aa8271888a32e25395b844.png",
	},
	{
		name: "Austria",
		countryCode: "AT",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/AT-1ca78073a82e2b8ad5093a822e70521cca2bccff557ded1d5707f26c62620755.png",
	},
	{
		name: "Azerbaijan",
		countryCode: "AZ",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/AZ-01aaccc6b81f819171d125e19920419b304d9044bac002e159a586f64b5842ee.png",
	},
	{
		name: "Bahamas",
		countryCode: "BS",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/BS-85a403d8bd000c47e97becfea0a71f897da12a107a9d00a1f5f7308639174771.png",
	},
	{
		name: "Bahrain",
		countryCode: "BH",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/BH-5b206cea0074e9da028316b643168f0d3061d17dabd6cc328eb70999090844d9.png",
	},
	{
		name: "Barbados",
		countryCode: "BB",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/BB-ae56b0f3d593c89338f9595e63e0313cc67915842dd7a25cb115e84dfb8f13c0.png",
	},
	{
		name: "Belarus",
		countryCode: "BY",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/BY-2fbf6f41adba999379b228ca8ec668f4b88e5b6e98a42f343a848a5a6a936a6f.png",
	},
	{
		name: "Belgium",
		countryCode: "BE",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/BE-cc3358e59c409a83da1607f9bae3cd79c63cf28db983355863b68382ba097008.png",
	},
	{
		name: "Belize",
		countryCode: "BZ",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/BZ-9f6b1f3a1d62fc44dcf8364fcc6ec60d90d58cdc792cdd7a5a160a436b6f75ea.png",
	},
	{
		name: "Bermuda",
		countryCode: "BM",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/BM-b8cce80d1fb6f16c6695175a9a27c91ce1e2081b8caa0eb8e25f560accd51eeb.png",
	},
	{
		name: "Bolivia",
		countryCode: "BO",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/BO-8a539e324deac4c650ec2ba28f6c9e63787899d469adcc98350f8654325b3484.png",
	},
	{
		name: "Bosnia & Herzegovina",
		countryCode: "BA",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/BA-2b8cd0b97c50f0ef1ee435d3dab26bf39adcc26710ef7979651f31c2079a97eb.png",
	},
	{
		name: "Brazil",
		countryCode: "BR",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/BR-9860aa017ee236029feb86e4a2f57a14d38d21a27798f7a4a533778a6ea6c06a.png",
	},
	{
		name: "Bulgaria",
		countryCode: "BG",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/BG-fb1949b0d995a0d9e254faab192a63d4e297df59fbc59b3dd83812d074a9f78a.png",
	},
	{
		name: "Burkina Faso",
		countryCode: "BF",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/BF-7b994176305c409a49c641371fc236144f36b4c48d8323eb182aa6d4c3c264d7.png",
	},
	{
		name: "Cameroon",
		countryCode: "CM",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/CM-c4744344b87f516c37bd237530ad1e6f6d9f7c2b952cee3090d230dfea58141b.png",
	},
	{
		name: "Canada",
		countryCode: "CA",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/CA-38886a65a797a310778fb80880452089fe6970c466646eb1ad487cc08fc5f224.png",
	},
	{
		name: "Cape Verde",
		countryCode: "CV",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/CV-94453955d292ac01173e408676438abf5962d6299a27f692c0b98db8c7ff1649.png",
	},
	{
		name: "Chad",
		countryCode: "TD",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/TD-e78af2a96b82de49a58408626beed79f18f1bfd38c628a5c28a1d706b6eac96f.png",
	},
	{
		name: "Chile",
		countryCode: "CL",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/CL-b3ba3b4e958dc55a4732734d667f47a1703501a7baa19939d57912e9d8d9b50f.png",
	},
	{
		name: "Colombia",
		countryCode: "CO",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/CO-4ca65d222eddfe12f55aa2e04628fc0336f028124ec7c93712c8a46fa300a0a4.png",
	},
	{
		name: "Costa Rica",
		countryCode: "CR",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/CR-79f73010236e5d5ea1fbbfc099d9939b1a21542b237924f47eee49cdac09f97d.png",
	},
	{
		name: "Croatia",
		countryCode: "HR",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/HR-0309597f6d84308b671d1257a4dc98235ba6d519b00369e8f38102148da01ca2.png",
	},
	{
		name: "Cuba",
		countryCode: "CU",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/CU-f74d5b99e74f181ef220cbbb4c0cd355e8bd2109b2633d22eddbe04d3fd41297.png",
	},
	{
		name: "Cyprus",
		countryCode: "CY",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/CY-62b59c23afab8a6857d40b70c6d75364eb3d313e8e9b37cbe6a821c08e1dce88.png",
	},
	{
		name: "Czech Republic",
		countryCode: "CZ",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/CZ-91dd5d92623653d7c7d1dbaf80f635092a5672d1d7d05d8c448595f1672578e1.png",
	},
	{
		name: "Côte d’Ivoire",
		countryCode: "CI",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/CI-7b2b4fd0cabbd349d78e53fff2a92be6bbc792ab9146103e551ddc1e1b76a87e.png",
	},
	{
		name: "Democratic Republic of the Congo (Kinshasa)",
		countryCode: "CD",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/CD-2017b88dc780a0c6c6a6b53fbf9348dfcc5fc64443053c507c86440d46bd4553.png",
	},
	{
		name: "Denmark",
		countryCode: "DK",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/DK-fd8b7ed6b65fc796dab2c998bb9bf0c6151ebfa188ad939243a56c5089df696a.png",
	},
	{
		name: "Dominican Republic",
		countryCode: "DO",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/DO-eaf6f96469144edd422defd288375a3b1c4749c9547b808141ca77a3603b2f39.png",
	},
	{
		name: "Ecuador",
		countryCode: "EC",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/EC-385020285cbde4247c16e9bf8b9a344254dc3468cd4af49b5a56589f3f667720.png",
	},
	{
		name: "Egypt",
		countryCode: "EG",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/EG-644cde0f5c69c3ce1bb26552d9a264fec82c0fca9eb6de7b10bdefc2124eaf9c.png",
	},
	{
		name: "El Salvador",
		countryCode: "SV",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/SV-9c4c269a41fb7dd95126286d6f9687e38daef6c7c934d156007b0e77c800992c.png",
	},
	{
		name: "Equatorial Guinea",
		countryCode: "GQ",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/GQ-3d090bef72ac89f8ee2f13582e92c9a814f6b520ab76d2c64364bc53f9a685f2.png",
	},
	{
		name: "Estonia",
		countryCode: "EE",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/EE-aafc24f97bf432fa3530d2bdd689839058cac586c65e7017df4040837ed2c322.png",
	},
	{
		name: "Fiji",
		countryCode: "FJ",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/FJ-c47ade8f59b2ebf45fa768da8ce666ac1d9e288debb799bf0a7f0cebe8dc4ea0.png",
	},
	{
		name: "Finland",
		countryCode: "FI",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/FI-c3bae4a5062e7a52e200d813b69753ff09734a07071dd50150b4731d1721b251.png",
	},
	{
		name: "France",
		countryCode: "FR",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/FR-45e57f71db90cee6ebd54ed7bb28cc7fdcbd2f4592ade4998f2bc6458d997b3f.png",
	},
	{
		name: "French Guiana",
		countryCode: "GF",
		flagUrl: "https://www.themoviedb.org/assets/2/flags_v2/48/GF.png",
	},
	{
		name: "French Polynesia",
		countryCode: "PF",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/PF-c8cc1dfad5919b53e682f40c5f52e8ac980495d3569abc4274db3e70983c2ab2.png",
	},
	{
		name: "Germany",
		countryCode: "DE",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/DE-1877858abee51cabe053ceb7d0561f538597c5c1aca56ba25319abba343a9ca0.png",
	},
	{
		name: "Ghana",
		countryCode: "GH",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/GH-9e150153f83eda9ac96ad891fc1cd389c6b95c1d93624b6748dc07643435ff76.png",
	},
	{
		name: "Gibraltar",
		countryCode: "GI",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/GI-853c0a2d90c05396d71d2be131aeacbba220bd89dda75220f37af5d420839da3.png",
	},
	{
		name: "Greece",
		countryCode: "GR",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/GR-6b6b3ee799e88c48a6e9326783dc220715e91d783520b7bf3e7d45703bbf3310.png",
	},
	{
		name: "Guadeloupe",
		countryCode: "GP",
		flagUrl: "https://www.themoviedb.org/assets/2/flags_v2/48/GP.png",
	},
	{
		name: "Guatemala",
		countryCode: "GT",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/GT-d4015e353a17fb8f3772cd76aaec3e32371a411354d4cf2a78a433ca1155e4a7.png",
	},
	{
		name: "Guernsey",
		countryCode: "GG",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/GG-6f10a1e88ff85ecbf2cbbff606d93aee9ff42be83aa43654bb6b4f31f5e5c05e.png",
	},
	{
		name: "Guyana",
		countryCode: "GY",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/GY-1e263417ddb9bde9cba8f0c6a8c864f034158ee3bcb95d20008be8de9479927d.png",
	},
	{
		name: "Honduras",
		countryCode: "HN",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/HN-be747559f4010cc7716ca84ee23655c08c5e9e77c15e6715f60a48b1114c2101.png",
	},
	{
		name: "Hong Kong SAR China",
		countryCode: "HK",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/HK-1c08823e81a30327188a562d32fe5c34582d1a37dac52a4cc0fe08e02a0dc949.png",
	},
	{
		name: "Hungary",
		countryCode: "HU",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/HU-623b538d2d51a467de0dcad45401dc55f5228ae6325f7b6ec934527cd5d568ae.png",
	},
	{
		name: "Iceland",
		countryCode: "IS",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/IS-956d3ab99501ec75bf663e4bb20c762e7a690b2d7c558a6b0bf62d0dc21df118.png",
	},
	{
		name: "India",
		countryCode: "IN",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/IN-5b73f4605171eaa60539e5d69a85bebe7b800f5ee6f94f24dafecaa0d47209fd.png",
	},
	{
		name: "Indonesia",
		countryCode: "ID",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/ID-ccecfd8d6955ec585cc23addeff613af78f182f20f520d263bfc682b95cf4b16.png",
	},
	{
		name: "Iraq",
		countryCode: "IQ",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/IQ-ba90e1c8592943baec42857c18c8397069f2e86ddcfd5c39368a28d24f8590cd.png",
	},
	{
		name: "Ireland",
		countryCode: "IE",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/IE-0d036291e102322c836051481b5f76bc64df1d147138be9dbbfe3dbf56aba128.png",
	},
	{
		name: "Israel",
		countryCode: "IL",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/IL-1805f916b282a2536ccff3ac02c23f586baf3b2646dc4822be2d9fbd76d709f5.png",
	},
	{
		name: "Italy",
		countryCode: "IT",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/IT-e1a18e2f092f368e800469ae610c25137573e555cd4984a03c74d1ef04579822.png",
	},
	{
		name: "Jamaica",
		countryCode: "JM",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/JM-09cc0a9df714371df6ef87827bd9b1c930cae70afbe9a8ea386bb24170b992eb.png",
	},
	{
		name: "Japan",
		countryCode: "JP",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/JP-094ae25e6726ba8c9eaece21da437f5236662d9419c198310d30e0960acebe1c.png",
	},
	{
		name: "Jordan",
		countryCode: "JO",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/JO-b7ff4e2625b0399bfcb9004a92edcedf362ec95debcf4be92fcbf7e3abe8a53a.png",
	},
	{
		name: "Kenya",
		countryCode: "KE",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/KE-248ba156a39dfa8bb91a0480ebdeb53848951e0d44ca826b48d9ca8c597d661a.png",
	},
	{
		name: "Kosovo",
		countryCode: "XK",
		flagUrl: "https://www.themoviedb.org/assets/2/flags_v2/48/XK.png",
	},
	{
		name: "Kuwait",
		countryCode: "KW",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/KW-b2c90760fb9780db0fa7b6e20d8aba8788bafbd28974796f6d575f8cac96149e.png",
	},
	{
		name: "Latvia",
		countryCode: "LV",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/LV-ba2030c39ecd68e7313d46aa1fd56025394ec39af6190a8e531d0c1a3d8c90eb.png",
	},
	{
		name: "Lebanon",
		countryCode: "LB",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/LB-5a70f5231e7ebc3c3cda430db5ce00ab5f93e01099cffcd84c202eb43484f770.png",
	},
	{
		name: "Libya",
		countryCode: "LY",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/LY-ca7444014487f1fb5f3f9fb16d3614a78ecf9decdd9034e0ea44d08251cd8fc8.png",
	},
	{
		name: "Liechtenstein",
		countryCode: "LI",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/LI-e65ac0f79a6985ed6d049f51b08bed17b8d3495e9a4721ac2696fbaad27538e0.png",
	},
	{
		name: "Lithuania",
		countryCode: "LT",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/LT-85614c5fd7332fbf27b2bf9160944295f6067a6793dda105068a431e6f8e1252.png",
	},
	{
		name: "Luxembourg",
		countryCode: "LU",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/LU-47556c387b7cf5c9704b91b0254fe0c35d0b3a260dd03b76720f99cea83d19b2.png",
	},
	{
		name: "Macedonia",
		countryCode: "MK",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/MK-9dc26b38ea3b90342e05a57f523c9d3c21d1cfe00f2a42a672f67438ec234a81.png",
	},
	{
		name: "Madagascar",
		countryCode: "MG",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/MG-aaf1e6f710c5e0cb87797663a60cc7b74105610790681eaf64f7604ce07d3395.png",
	},
	{
		name: "Malawi",
		countryCode: "MW",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/MW-abebe4606446991796c4702e7c9febfd378e89c772012a8387b43b9bb8f871f2.png",
	},
	{
		name: "Malaysia",
		countryCode: "MY",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/MY-ab75bb0362b542f155ef53047806213086c302c5622a39c6f4f628b65935b11f.png",
	},
	{
		name: "Mali",
		countryCode: "ML",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/ML-f0e93cdaf10e5a932e2efec45a43219ee4810624b8d51282ddb42dfc42779b44.png",
	},
	{
		name: "Malta",
		countryCode: "MT",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/MT-1f603f129e9a2d5f1ffbbda82d93daa6a5ba7099881445e33c5fd5469d92e393.png",
	},
	{
		name: "Mauritius",
		countryCode: "MU",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/MU-47f2ab2370a5a3017ad0ee0bc10109cf209bc9ccbd0cec16ecc73beb8f9b0522.png",
	},
	{
		name: "Mexico",
		countryCode: "MX",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/MX-6e1feed2ded1b9d724497ba082957828cffe11b6cbe53c9914f837b5fd7d914e.png",
	},
	{
		name: "Moldova",
		countryCode: "MD",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/MD-30609306e91e950a46992136c3981696433c751314af9949f05cc37b31852cd6.png",
	},
	{
		name: "Monaco",
		countryCode: "MC",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/MC-ccecfd8d6955ec585cc23addeff613af78f182f20f520d263bfc682b95cf4b16.png",
	},
	{
		name: "Montenegro",
		countryCode: "ME",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/ME-c32fb96a12839144785b0344c4512cfcb764cbbfcd6ae938a3d31368d6b8975c.png",
	},
	{
		name: "Morocco",
		countryCode: "MA",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/MA-772de74a482c46f684fae12f294a154c275c5c03da40d6c8538778dca2ef3e40.png",
	},
	{
		name: "Mozambique",
		countryCode: "MZ",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/MZ-f6ab155a82813ff1ebea3d1c0273bd87ed49b0387cb24cd10979c0858e252247.png",
	},
	{
		name: "Netherlands",
		countryCode: "NL",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/NL-6f692817fdb935d856a9c976703fd7f4e1b656442bfcc1739a8643ba6a122a97.png",
	},
	{
		name: "New Zealand",
		countryCode: "NZ",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/NZ-55035bfdecb1f546e7d0f47515368c222cb5d781260ba283c268ec47c822d51b.png",
	},
	{
		name: "Nicaragua",
		countryCode: "NI",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/NI-768301e483e5cc69a81aa964953eaf7c21067ae51e03ba9752799513fa15e291.png",
	},
	{
		name: "Niger",
		countryCode: "NE",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/NE-da0768c15183c9e4e4eefbf28da2d8150ab52ce8e4c247ccb4eb2a56fc519c27.png",
	},
	{
		name: "Nigeria",
		countryCode: "NG",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/NG-65215f0ccbe9011892bcf48e1bee64a33ad36a5cbd6302cdf8e5574fdb83b45a.png",
	},
	{
		name: "Norway",
		countryCode: "NO",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/NO-5190735f3735ed2a927a33177baf3125ce201263a704da930e526dee5a4352d8.png",
	},
	{
		name: "Oman",
		countryCode: "OM",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/OM-2abae9aa2241f0baa7f3a9b0b11eb3f547e3a121274092763f6a2751ac9cf749.png",
	},
	{
		name: "Pakistan",
		countryCode: "PK",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/PK-fb2ba362fdb5d40bb4ea17b843a26ec88cf1e14d853c3343b0ced99df29308d8.png",
	},
	{
		name: "Palestinian Territories",
		countryCode: "PS",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/PS-10ba8e52835a8ad4eae22eeb7cbde333d7f658202d9dedf11f8eece2d1fd8a98.png",
	},
	{
		name: "Panama",
		countryCode: "PA",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/PA-10a6b756c09c2c9431c9a1d185dc3e91f2bcb24f229845964a14a2676acc39ca.png",
	},
	{
		name: "Papua New Guinea",
		countryCode: "PG",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/PG-ac85ce197ff8d0e108d95bf5867169df8fff6448c12999e0f0c0e12617cfd65f.png",
	},
	{
		name: "Paraguay",
		countryCode: "PY",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/PY-f09678417172f5a98e9d2b28cfd9d5a854a4c12f4f33d3cc59454cf011567b7e.png",
	},
	{
		name: "Peru",
		countryCode: "PE",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/PE-c12deb68829f455243b9d7aba016b8047676581473e73c579e2f3220a1033f9a.png",
	},
	{
		name: "Philippines",
		countryCode: "PH",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/PH-e184176368c0703af1e2d0d68daafc9134ff5ae913b22a08ac6dd58c0a18915d.png",
	},
	{
		name: "Poland",
		countryCode: "PL",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/PL-2c59201663e243a6301c363498eb34ec164bbce57521c1d29eef0121a5459b78.png",
	},
	{
		name: "Portugal",
		countryCode: "PT",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/PT-a02b40637d0de02097b2322c3117c80575be518c1669f0f28c69cfce0d20a826.png",
	},
	{
		name: "Qatar",
		countryCode: "QA",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/QA-fc40ef1f53643e1eed33ab62e906590d2fd7dc453d6b7a940b65083f7c109327.png",
	},
	{
		name: "Romania",
		countryCode: "RO",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/RO-4098a7242007d38c3d0968bb58320ac70714d47fcdd064d76443c08087e9eb71.png",
	},
	{
		name: "Russia",
		countryCode: "RU",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/RU-44aaee85b78b6bd07f861e4927f147f4ca8b00dc8766fd20ecc88aa612d06fcd.png",
	},
	{
		name: "San Marino",
		countryCode: "SM",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/SM-53be820dc298703a9ff0eaf29d58f3efe409f3301b5d70ec9e44b92f511a97ba.png",
	},
	{
		name: "Saudi Arabia",
		countryCode: "SA",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/SA-35ecfd4b56472c32a76a7b0e2966cb830f31ee340b831b2df66ab74c08e7d2a8.png",
	},
	{
		name: "Senegal",
		countryCode: "SN",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/SN-ebdd6ed9e88e9cc10b87802a32a10383d5f5f445b075df702f447d6c8c07b374.png",
	},
	{
		name: "Serbia",
		countryCode: "RS",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/RS-e9a417f8d7dd2a210c364b8fd45983122f5cba5a4aa34e3cfc72d6293e07f4ef.png",
	},
	{
		name: "Seychelles",
		countryCode: "SC",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/SC-d95787218bb380c15485e54fc33151df26fba297ae3a2f6a72fa832a21804390.png",
	},
	{
		name: "Singapore",
		countryCode: "SG",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/SG-327ee0325d7fc6424fdee9487353eac1ccea73db53298dfae0dd0c48231b3baa.png",
	},
	{
		name: "Slovakia",
		countryCode: "SK",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/SK-5f70f0ff53ab2b4c3cc3f97c8081d387e4b76144bc2906f7f61302f0580dd844.png",
	},
	{
		name: "Slovenia",
		countryCode: "SI",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/SI-fe61c691870ff961b61978367c0b1b434ca62631619f9151ba8998a3abcb91a8.png",
	},
	{
		name: "South Africa",
		countryCode: "ZA",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/ZA-4e8b8c43d8dd2f9cbb77d5d353fd98c5844f922eb227ad3478eb37af8329f8c4.png",
	},
	{
		name: "South Korea",
		countryCode: "KR",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/KR-42af849ebe299438948216ee9270f194b5358cac2e5604773fc07bb66802af14.png",
	},
	{
		name: "Spain",
		countryCode: "ES",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/ES-ef578e78363c45694fb713a7c8d6ceddf7f23e294c30d9bba1c7547f61ba42b2.png",
	},
	{
		name: "St. Lucia",
		countryCode: "LC",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/LC-9a50a30f97cd78250e67a8e2cf579f86ad27a031c5f39d8522f56edcc8b919c2.png",
	},
	{
		name: "Sweden",
		countryCode: "SE",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/SE-5a97536c4c12f83fe02794f9aa3eb82b47ead7677217d0954a8cef22ac57233f.png",
	},
	{
		name: "Switzerland",
		countryCode: "CH",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/CH-5b64386f84ee6594a68b5dfc248a88892ab38178c1682702689d82c66ba8e20a.png",
	},
	{
		name: "Taiwan",
		countryCode: "TW",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/TW-47fec93073999a2397c91426ed10a4ded3ddfe3345fe1016401e053a8541ce2d.png",
	},
	{
		name: "Tanzania",
		countryCode: "TZ",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/TZ-34a76401d61899319a1dbc580e7563bc9d54c8dac619694b94e7b750e03effa2.png",
	},
	{
		name: "Thailand",
		countryCode: "TH",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/TH-a7f1ca882f8d0c6a7b532c8c4d9ac056505a97dc5dd33e8d7b82b1312d4c348b.png",
	},
	{
		name: "Trinidad & Tobago",
		countryCode: "TT",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/TT-328bfa8f9d72edcd00009d360bbdb2b21a47e81ed89ee4a8d8b7ebf33f0922f4.png",
	},
	{
		name: "Tunisia",
		countryCode: "TN",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/TN-934ff25d61ede4b7b169faaf04358ce194aa6e701c2a40321a681edd1e601004.png",
	},
	{
		name: "Turkey",
		countryCode: "TR",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/TR-dde9ebaa44f6027c50ab4ebe6372c3f1656f12c7db00cdec8a447cb785fee93a.png",
	},
	{
		name: "Turks & Caicos Islands",
		countryCode: "TC",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/TC-4261bc2ddda415a1253dece799fe4409c98a1030e27fc09e5240a88412230853.png",
	},
	{
		name: "Uganda",
		countryCode: "UG",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/UG-2591667e374ef615c19ad3c2e333a5858701292eaa2827afb26a6825326df8fa.png",
	},
	{
		name: "Ukraine",
		countryCode: "UA",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/UA-69f9221eb0890805f4c36d35d3ff68267a1158b5411a02fa4d852ff5632f3b4f.png",
	},
	{
		name: "United Arab Emirates",
		countryCode: "AE",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/AE-afa064bc388b2f8fdf243b697018ac3759c0a4bd80854e18f69d1eb7d2f445d1.png",
	},
	{
		name: "United Kingdom",
		countryCode: "GB",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/GB-d20d3c377f9a6cd80339dd457b5ced7c2bbdd62197d8ef99085ec104fd1f7709.png",
	},
	{
		name: "United States",
		countryCode: "US",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/US-fc54af6e5c8237200d49fd6a49061fffeb8a7217bb9000acd1c02039b65b22ba.png",
	},
	{
		name: "Uruguay",
		countryCode: "UY",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/UY-82c74dfa146618466b26f344ae35b9434f3c2c35786da10166f25a96f8981b2e.png",
	},
	{
		name: "Vatican City",
		countryCode: "VA",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/VA-80c9075f05740778759c170248360b4271964b93e3fc0ccfb25fde4b2438d73b.png",
	},
	{
		name: "Venezuela",
		countryCode: "VE",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/VE-e7d4498591a5d5797b902e380aeee6715e1ae131f7b28588b0203673ede2ed99.png",
	},
	{
		name: "Yemen",
		countryCode: "YE",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/YE-2737540e3c61b1397cc4a354336dee4bbf1ab7468a3b8e2ced2d8b0c83092ef3.png",
	},
	{
		name: "Zambia",
		countryCode: "ZM",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/ZM-4ea15bfa09722cb6b6e32cc5818b06ad37fa2199b32b5d0f997fbf03b776f672.png",
	},
	{
		name: "Zimbabwe",
		countryCode: "ZW",
		flagUrl:
			"https://www.themoviedb.org/assets/2/flags_v2/48/ZW-176e6c0f9ed6108aac542cb2d31a90a2bb6114d456019de853903649360d910f.png",
	},
];

export const OTT_PROVIDERS: Array<OTTProviderType> = [
	{
		name: "Netflix",
		id: 8,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg",
		type: "both",
	},
	{
		name: "Amazon Prime Video",
		id: 119,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/pvske1MyAoymrs5bguRfVqYiM9a.jpg",
		type: "both",
	},
	{
		name: "Apple TV",
		id: 350,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/mcbz1LgtErU9p4UdbZ0rG6RTWHX.jpg",
		type: "both",
	},
	{
		name: "JioHotstar",
		id: 2336,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/kVqjgpcwvDJOhCupjcLzwwtOp52.jpg",
		type: "both",
	},
	{
		name: "Crunchyroll",
		id: 283,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/fzN5Jok5Ig1eJ7gyNGoMhnLSCfh.jpg",
		type: "both",
	},
	{
		name: "Zee5",
		id: 232,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/gP67NRy1ShUJilrzMsbOmEmdmcv.jpg",
		type: "both",
	},
	{
		name: "MUBI",
		id: 11,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/x570VpH2C9EKDf1riP83rYc5dnL.jpg",
		type: "both",
	},
	{
		name: "Sony Liv",
		id: 237,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/3973zlBbBXdXxaWqRWzGG2GYxbT.jpg",
		type: "both",
	},
	{
		name: "YouTube",
		id: 192,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/pTnn5JwWr4p3pG8H6VrpiQo7Vs0.jpg",
		type: "both",
	},
	{
		name: "Netflix Kids",
		id: 175,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/kwVegvKCinXTPuzZmYT1J3i1HJz.jpg",
		type: "both",
	},
	{
		name: "Sun Nxt",
		id: 309,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/6KEQzITx2RrCAQt5Nw9WrL1OI8z.jpg",
		type: "both",
	},
	{
		name: "Hoichoi",
		id: 315,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/u7dwMceEbjxd1N3TLEUBILSK2x6.jpg",
		type: "both",
	},
	{
		name: "Tubi TV",
		id: 73,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/zLYr7OPvpskMA4S79E3vlCi71iC.jpg",
		type: "both",
	},
	{
		name: "Hungama Play",
		id: 437,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/pMTVKAUyjMb0xdMnHqfNj73MGH6.jpg",
		type: "both",
	},
	{
		name: "Curiosity Stream",
		id: 190,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/oR1aNm1Qu9jQBkW4VrGPWhqbC3P.jpg",
		type: "both",
	},
	{
		name: "EPIC ON",
		id: 476,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/ymlo2k6RlX0zF5Te1AYwXRQ7Pra.jpg",
		type: "both",
	},
	{
		name: "DOCSVILLE",
		id: 475,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/5zqbck5mo8PuVbGu2ngBUdn5Yga.jpg",
		type: "both",
	},
	{
		name: "Tata Play",
		id: 502,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/5VLMQDq6LWfftQCl7sYrtTseXRA.jpg",
		type: "both",
	},
	{
		name: "Discovery+",
		id: 510,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/eMTnWwNVtThkjvQA6zwxaoJG9NE.jpg",
		type: "both",
	},
	{
		name: "ManoramaMax",
		id: 482,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/tFkqZYsDhNe6hJCx50Aw6oma24w.jpg",
		type: "both",
	},
	{
		name: "MX Player",
		id: 515,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/ayHY6wKxvCKj2PU8eRPFxnPc6B0.jpg",
		type: "both",
	},
	{
		name: "aha",
		id: 532,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/8WerMI8XcZXqPpkHTZNtzMzousF.jpg",
		type: "both",
	},
	{
		name: "Plex",
		id: 538,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/vLZKlXUNDcZR7ilvfY9Wr9k80FZ.jpg",
		type: "both",
	},
	{
		name: "WOW Presents Plus",
		id: 546,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/6dET59jNU0ADysghEjl8Unuc7Ca.jpg",
		type: "both",
	},
	{
		name: "Magellan TV",
		id: 551,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/mSH24WQcRDJ2fsL5iucXqqRnSRb.jpg",
		type: "both",
	},
	{
		name: "Lionsgate Play",
		id: 561,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/e2hCUg2Z3sJ6yWF9NLU24SIKeWa.jpg",
		type: "both",
	},
	{
		name: "Dekkoo",
		id: 444,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/x6nRFzF32hCzMHaVM4RHRo7lsgS.jpg",
		type: "both",
	},
	{
		name: "VI movies and tv",
		id: 614,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/9YJY5OwsIPMoX3xC3TdtZVbKBpE.jpg",
		type: "both",
	},
	{
		name: "Cultpix",
		id: 692,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/uauVx3dGWt0GICqdMCBYJObd3Mo.jpg",
		type: "both",
	},
	{
		name: "FilmBox+",
		id: 701,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/fbveJTcro9Xw2KuPIIoPPePHiwy.jpg",
		type: "both",
	},
	{
		name: "Amazon MX Player",
		id: 1898,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/yfIWD2zJNHla5RD4xjQNzvKMEwP.jpg",
		type: "both",
	},
	{
		name: "AD tv",
		id: 1958,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/mK8nfCXfwoAa6cAkHUSKCkLEIKK.jpg",
		type: "both",
	},
	{
		name: "Shahid VIP",
		id: 1715,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/7qZED0kLBtiV8mLRNBtW4PQCAqW.jpg",
		type: "both",
	},
	{
		name: "Lionsgate Play Apple TV Channel",
		id: 2053,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/p8i1zUcZYQ7qU6RrGvGbDItvcx4.jpg",
		type: "both",
	},
	{
		name: "Eros Now Select Apple TV Channel",
		id: 2059,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/cqgeSQHqKEkfcmsiy7GoCnf1Q2I.jpg",
		type: "both",
	},
	{
		name: "Lionsgate Play Amazon Channel",
		id: 2074,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/yVbjPWEbsStanRAxwKMDARVOvsn.jpg",
		type: "both",
	},
	{
		name: "Crunchyroll Amazon Channel",
		id: 1968,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/pgjz7bzfBq4nFDu8JJDLBoUVAX8.jpg",
		type: "both",
	},
	{
		name: "Hoichoi Amazon Channel",
		id: 2176,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/8ipK9EjNHvcPM22SgqKdA8wZjal.jpg",
		type: "both",
	},
	{
		name: "ManoramaMAX Amazon Channel",
		id: 2177,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/fY2J5CojsKC52LO2K8P5AQAH2UT.jpg",
		type: "both",
	},
	{
		name: "Chaupal Amazon Channel",
		id: 2178,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/sOikKxPVWnwUqa46nt8SwrQ53ui.jpg",
		type: "both",
	},
	{
		name: "BBC Kids Amazon Channel",
		id: 2179,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/vAlwpM4ey2gRvgWmg5mHrjOAIU4.jpg",
		type: "both",
	},
	{
		name: "Sony Pictures Amazon Channel",
		id: 2180,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/i7FaDWpD2xoIWB5lyF191cykfck.jpg",
		type: "both",
	},
	{
		name: "Vrott Amazon Channel",
		id: 2181,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/3LH55fdW1UrjDITGZcJlQT4wRqB.jpg",
		type: "both",
	},
	{
		name: "Anime Times Amazon Channel",
		id: 2182,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/p2fVhnzr0znG2KnVLmH9bjj7F0S.jpg",
		type: "both",
	},
	{
		name: "BBC Player Amazon Channel",
		id: 285,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/jhhFTFVWjKVi2JjDYoqoI4dHsmL.jpg",
		type: "both",
	},
	{
		name: "MUBI Amazon Channel",
		id: 201,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/a4IDLKjvP5gvq7tNlg2Xw5YyEkI.jpg",
		type: "both",
	},
	{
		name: "Discovery+ Amazon Channel",
		id: 584,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/lgudHqEtTOzkMWlpTjU1oUyoUSZ.jpg",
		type: "tv_only",
	},
	{
		name: "CuriosityStream Amazon Channel",
		id: 603,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/tLbUhvK1RcA5I4JHndxf5dprkE7.jpg",
		type: "both",
	},
	{
		name: "DocuBay Amazon Channel",
		id: 604,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/91oRDZySWtw60ei006uQ45gmjXD.jpg",
		type: "both",
	},
	{
		name: "Iwonder Amazon Channel",
		id: 2169,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/3sOfrPDIomU45q0EN4Z9jQ3OfeG.jpg",
		type: "both",
	},
	{
		name: "JustWatch TV",
		id: 2285,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/g2IaWyo6jCY0rIFjb4qgZ0bSmm3.jpg",
		type: "both",
	},
	{
		name: "Apple TV Amazon Channel",
		id: 2243,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/mHrYMgnZIp6lgW2aXg7ix9zGOnA.jpg",
		type: "both",
	},
	{
		name: "FOUND TV",
		id: 2478,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/mD3KV7olfMJOBxJqKKPjvNrpVJF.jpg",
		type: "both",
	},
	{
		name: "Channel K Amazon Channel",
		id: 2491,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/pQvLERAjzSc9XfrRppJQLoMKMPH.jpg",
		type: "both",
	},
	{
		name: "Amazon Prime Video with Ads",
		id: 2100,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/8aBqoNeGGr0oSA85iopgNZUOTOc.jpg",
		type: "both",
	},
	{
		name: "Plex Channel",
		id: 2077,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/27WMfRN7pQE3j5Khm8fPM7vYyLV.jpg",
		type: "both",
	},
	{
		name: "MGM Plus Amazon Channel",
		id: 2141,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/efu1Cqc63XrPBoreYnf2mn0Nizj.jpg",
		type: "both",
	},
	{
		name: "KableOne",
		id: 2603,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/nOE9GjiyF5UhUVRJ2yGSzdCh0ec.jpg",
		type: "both",
	},
	{
		name: "CN Rewind Amazon Channel",
		id: 2612,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/oWXIJEGI3Z31FB78JYiAc1Kwb5f.jpg",
		type: "tv_only",
	},
	{
		name: "Animax Amazon Channel",
		id: 2613,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/8ms2NcDEuYi6cfFpRLPiU7aOIqs.jpg",
		type: "tv_only",
	},
	{
		name: "CaixaForum+",
		id: 2620,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/9pRY14ZWkDCRzQBuASRnYJ1KZwQ.jpg",
		type: "both",
	},
	{
		name: "Artify",
		id: 2685,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/rQqxsXq63XsDY8xcabqBWU5WWbw.jpg",
		type: "both",
	},
	{
		name: "Apple TV Store",
		id: 2,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/SPnB1qiCkYfirS2it3hZORwGVn.jpg",
		type: "movie_only",
	},
	{
		name: "Google Play Movies",
		id: 3,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg",
		type: "movie_only",
	},
	{
		name: "ShemarooMe",
		id: 474,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/ec3kgfQ6YXbT3AFRh8bkQZQFLb2.jpg",
		type: "movie_only",
	},
	{
		name: "BroadwayHD",
		id: 554,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/6IYZ4NjwPikxN7J9cfSmuyeHeMm.jpg",
		type: "movie_only",
	},
	{
		name: "Filmzie",
		id: 559,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/eUBxtrqO26wAJfYOZJOzhQEo3mm.jpg",
		type: "movie_only",
	},
	{
		name: "MovieSaints",
		id: 562,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/9vMVMnVnWwxt0TkCazKLYW1zuqY.jpg",
		type: "movie_only",
	},
	{
		name: "True Story",
		id: 567,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/aRPDQvVcpeY07sjI6lAALMCL0ti.jpg",
		type: "movie_only",
	},
	{
		name: "DocAlliance Films",
		id: 569,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/vbXJBJVv3u3YWt6ml0l0ldDblXT.jpg",
		type: "movie_only",
	},
	{
		name: "Eventive",
		id: 677,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/fwx5Ed64TkfWiRH1SOSkc4781Ts.jpg",
		type: "movie_only",
	},
	{
		name: "ShortsTV Amazon Channel",
		id: 688,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/2nFBw1zMzN1AujFaCsmsgSKWdfS.jpg",
		type: "movie_only",
	},
	{
		name: "Amazon Video",
		id: 10,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/qR6FKvnPBx2O37FDg8PNM7efwF3.jpg",
		type: "movie_only",
	},
	{
		name: "Takflix",
		id: 1771,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/ed0vz5bryWIhQB5sHiuGvHKnHHn.jpg",
		type: "movie_only",
	},
	{
		name: "Bookmyshow",
		id: 124,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/hAKPOEwWdjE9evzxByVdF8QUMH3.jpg",
		type: "movie_only",
	},
	{
		name: "Jolt Film",
		id: 2330,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/sBTV0rN8JUhF4G3uIceinWtQ3gi.jpg",
		type: "movie_only",
	},
	{
		name: "Stupid Co",
		id: 2479,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/xghkVW88ucmejNkk7DEFGZh8dvs.jpg",
		type: "movie_only",
	},
	{
		name: "NFDC Amazon Channel",
		id: 2530,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/jZpSkGmmuFwzK5hy9gRJlYrXatF.jpg",
		type: "movie_only",
	},
	{
		name: "Bloodstream",
		id: 2555,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/qlsnWCrmcisQH5JnEDxPV2v2vlb.jpg",
		type: "movie_only",
	},
	{
		name: "MovieMe",
		id: 2565,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/zODyP8gGRnp3Gd23FhXhQwIpLie.jpg",
		type: "movie_only",
	},
	{
		name: "Stingray Amazon Channel",
		id: 2158,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/eUOFD3Vr0BSV6IfBzUEYLozFXNk.jpg",
		type: "movie_only",
	},
	{
		name: "NammaFlix Amazon Channel",
		id: 2185,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/8WPLg0mQQUdzWZw7xDaM0POmwfO.jpg",
		type: "movie_only",
	},
	{
		name: "GuideDoc",
		id: 100,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/eKVmLFHW5PeNhuR7Nedd8OIxW2M.jpg",
		type: "movie_only",
	},
	{
		name: "Artiflix",
		id: 2623,
		imgUrl:
			"https://media.themoviedb.org/t/p/original/5MsbQCp7FpYr3INLpeKDLJrlDh8.jpg",
		type: "movie_only",
	},
];
