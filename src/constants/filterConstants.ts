import {
	type CountriesType,
	type DiscoverFiltersType,
	type LanguagesOptionsType,
} from "./../types/filters";

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

export const FILTERS_INITIAL_STATE: DiscoverFiltersType = {
	"air_date.gte": null,
	"air_date.lte": null,
	certification: null,
	certification_country: null,
	debug: null,
	"first_air_date.gte": null,
	"first_air_date.lte": null,
	include_adult: false,
	include_softcore: false,
	"latest_ceremony.gte": null,
	"latest_ceremony.lte": null,
	page: 1,
	"primary_release_date.gte": null,
	"primary_release_date.lte": null,
	region: null,
	"release_date.gte": null,
	"release_date.lte": null,
	show_me: "everything",
	sort_by: null,
	"vote_average.gte": 0,
	"vote_average.lte": 10,
	"vote_count.gte": 0,
	watch_region: "IN",
	with_genres: null,
	with_keywords: null,
	with_networks: null,
	with_origin_country: null,
	with_original_language: null,
	with_watch_monetization_types: null,
	with_watch_providers: null,
	with_release_type: null,
	"with_runtime.gte": 0,
	"with_runtime.lte": 400,
};

export const withMenuProps = (overrides: Record<string, string> = {}) => ({
    sx: {
        ...MENU_PAPER_PROPS.sx,
        ...overrides,
    },
});

export const MENU_PAPER_PROPS = {
	sx: {
		marginTop: "0.25rem",
		paddingTop: ".5rem",
		width: "378.641px",
		minWidth: "226px",
		height: "268px",
		display: "flex",
		flexDirection: "column",
		overflow: "hidden",
		"& .MuiList-root": {
			paddingTop: 0,
			paddingBottom: 0,
			display: "flex",
			flexDirection: "column",
			height: "100%",
		},
		border: ".8px solid #21252933",
		borderRadius: "0.375rem",
		boxShadow: "0px 6px 13px rgba(0, 0, 0, 0.125)",
	},
};

export const SELECT_STYLES = {
	borderRadius: "0.375rem",
	"& .MuiSelect-select": {
		padding: "8.5px 14px",
		fontSize: "14px",
	},
	"& .MuiOutlinedInput-root": {
		borderRadius: "0.375rem",
		fontSize: "14px",
	},
	"&:hover": {
		backgroundColor: "#F8F9FA",
		borderRadius: "0.375rem",
	},
	"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
		borderColor: "#01b3e460 !important",
	},
	"& .MuiAutocomplete-input": {
		cursor: "pointer",
	},
	"& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
		minHeight: "38px",
	},
	"&:hover .MuiOutlinedInput-notchedOutline": {
		borderColor: "#D3D3D4 !important",
	},
	"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
		borderColor: "#01b3e460 !important",
	},
	"& .MuiOutlinedInput-notchedOutline": {
		borderWidth: "1px !important",
	},
	"& .MuiSelect-icon": {
		transform: "none !important",
		pointerEvents: "none",
	},
};

export const COUNTRY_OPTIONS: Array<CountriesType> = [
	{
		flagUrl:
			"/assets/2/flags_v2/48/AF-fee2fed49179b0aa0ed33e1877b40541265d03e81af2af6b481f5b7cc2fe09e9.png",
		iso_3166_1: "AF",
		english_name: "Afghanistan",
		native_name: "Afghanistan",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/AL-c484c009f5ea9fea49556008d43190384ef8f7276a8248e0fb47fbe532a2c834.png",
		iso_3166_1: "AL",
		english_name: "Albania",
		native_name: "Albania",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/DZ-ac97f91e52d33c3c5e5481c62a1a0c53a3726133d233e934ecb805931ddbe0f8.png",
		iso_3166_1: "DZ",
		english_name: "Algeria",
		native_name: "Algeria",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/AS-0b50d18f52d21a395f6ca989f911e37eac4794798b8c4bc6372544137096b04a.png",
		iso_3166_1: "AS",
		english_name: "American Samoa",

		native_name: "American Samoa",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/AD-94531c9fa3fc7b91a70b53dde5badcb0ad8f66dfbd466862689bf67029c37157.png",
		iso_3166_1: "AD",
		english_name: "Andorra",
		native_name: "Andorra",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/AO-adcfe12b9c19dad22213163af00f45c2eac0bf0ea8f93a649b90922affceac3b.png",
		iso_3166_1: "AO",
		english_name: "Angola",
		native_name: "Angola",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/AI-d1410ca53fe50f700269567f150597e7867265daf76fdea9851da756606e7200.png",
		iso_3166_1: "AI",
		english_name: "Anguilla",
		native_name: "Anguilla",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/AQ-455bb7a203e58729d14ae10b41cfc1bdfc79ebea058b5a76b582c34cccfa1ff2.png",
		iso_3166_1: "AQ",
		english_name: "Antarctica",
		native_name: "Antarctica",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/AG-11a801f43f4190c71c56fe8fb948cd3d5bf5b3b5bed0713cf5fe284a0af97a0a.png",
		iso_3166_1: "AG",
		english_name: "Antigua and Barbuda",
		native_name: "Antigua \u0026 Barbuda",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/AR-af53c8037def87d38995d642d93f899f5e4922ca62843dde5b5cc361771c3bf0.png",
		iso_3166_1: "AR",
		english_name: "Argentina",
		native_name: "Argentina",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/AM-3323b203a23e8ec478ab8d5031ed4a4d4a4aaa21609befca06448751a02da6af.png",
		iso_3166_1: "AM",
		english_name: "Armenia",
		native_name: "Armenia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/AW-b60f9d57f3306da2aa8b8e77148820ccc3253cdb79b2f261dad35060e56e8c6a.png",
		iso_3166_1: "AW",
		english_name: "Aruba",
		native_name: "Aruba",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/AU-987875cfcb3626621074bb52ae1c72b43d15f51801aa8271888a32e25395b844.png",
		iso_3166_1: "AU",
		english_name: "Australia",
		native_name: "Australia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/AT-1ca78073a82e2b8ad5093a822e70521cca2bccff557ded1d5707f26c62620755.png",
		iso_3166_1: "AT",
		english_name: "Austria",
		native_name: "Austria",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/AZ-01aaccc6b81f819171d125e19920419b304d9044bac002e159a586f64b5842ee.png",
		iso_3166_1: "AZ",
		english_name: "Azerbaijan",
		native_name: "Azerbaijan",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BS-85a403d8bd000c47e97becfea0a71f897da12a107a9d00a1f5f7308639174771.png",
		iso_3166_1: "BS",
		english_name: "Bahamas",
		native_name: "Bahamas",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BH-5b206cea0074e9da028316b643168f0d3061d17dabd6cc328eb70999090844d9.png",
		iso_3166_1: "BH",
		english_name: "Bahrain",
		native_name: "Bahrain",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BD-d45e7082ee2623c89ba6ad6c4a14b6845ff3ed19a8d376d00bccd4b0323988dc.png",
		iso_3166_1: "BD",
		english_name: "Bangladesh",
		native_name: "Bangladesh",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BB-ae56b0f3d593c89338f9595e63e0313cc67915842dd7a25cb115e84dfb8f13c0.png",
		iso_3166_1: "BB",
		english_name: "Barbados",
		native_name: "Barbados",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BY-2fbf6f41adba999379b228ca8ec668f4b88e5b6e98a42f343a848a5a6a936a6f.png",
		iso_3166_1: "BY",
		english_name: "Belarus",
		native_name: "Belarus",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BE-cc3358e59c409a83da1607f9bae3cd79c63cf28db983355863b68382ba097008.png",
		iso_3166_1: "BE",
		english_name: "Belgium",
		native_name: "Belgium",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BZ-9f6b1f3a1d62fc44dcf8364fcc6ec60d90d58cdc792cdd7a5a160a436b6f75ea.png",
		iso_3166_1: "BZ",
		english_name: "Belize",
		native_name: "Belize",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BJ-17f546cfffbaa13922e39b6bd4d1367d3f4d20454700b73d3df2bdacf0c05e7f.png",
		iso_3166_1: "BJ",
		english_name: "Benin",
		native_name: "Benin",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BM-b8cce80d1fb6f16c6695175a9a27c91ce1e2081b8caa0eb8e25f560accd51eeb.png",
		iso_3166_1: "BM",
		english_name: "Bermuda",
		native_name: "Bermuda",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BT-5f67e987b142777ef34b70a65f89cb018e66c3d2159e1417f4c483f09d99734c.png",
		iso_3166_1: "BT",
		english_name: "Bhutan",
		native_name: "Bhutan",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BO-8a539e324deac4c650ec2ba28f6c9e63787899d469adcc98350f8654325b3484.png",
		iso_3166_1: "BO",
		english_name: "Bolivia",
		native_name: "Bolivia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BA-2b8cd0b97c50f0ef1ee435d3dab26bf39adcc26710ef7979651f31c2079a97eb.png",
		iso_3166_1: "BA",
		english_name: "Bosnia and Herzegovina",
		native_name: "Bosnia \u0026 Herzegovina",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BW-bc2b1b33510581cbcc348b5c809b4f2d921c93cd19eb244e1dd8a23603f3add3.png",
		iso_3166_1: "BW",
		english_name: "Botswana",
		native_name: "Botswana",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/BV.png",
		iso_3166_1: "BV",
		english_name: "Bouvet Island",

		native_name: "Bouvet Island",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BR-9860aa017ee236029feb86e4a2f57a14d38d21a27798f7a4a533778a6ea6c06a.png",
		iso_3166_1: "BR",
		english_name: "Brazil",
		native_name: "Brazil",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/IO.png",
		iso_3166_1: "IO",
		english_name: "British Indian Ocean Territory",
		native_name: "British Indian Ocean Territory",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/VG-baeb92a6e863d2f2404ba8261b3c58b28014b3e5d07996292dcace347b38b0f1.png",
		iso_3166_1: "VG",
		english_name: "British Virgin Islands",
		native_name: "British Virgin Islands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BN-dcd655ecabb88641df1fee54a0197a24e2a5ad77453c8c30fc01e91152906dc5.png",
		iso_3166_1: "BN",
		english_name: "Brunei Darussalam",
		native_name: "Brunei",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BG-fb1949b0d995a0d9e254faab192a63d4e297df59fbc59b3dd83812d074a9f78a.png",
		iso_3166_1: "BG",
		english_name: "Bulgaria",
		native_name: "Bulgaria",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BF-7b994176305c409a49c641371fc236144f36b4c48d8323eb182aa6d4c3c264d7.png",
		iso_3166_1: "BF",
		english_name: "Burkina Faso",

		native_name: "Burkina Faso",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/BU.png",
		iso_3166_1: "BU",
		english_name: "Burma",
		native_name: "Burma",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/BI-e3a19d001221d38fd28be074f8873f5bae2dac7cbdfbe1d9bc42dc8851bafc87.png",
		iso_3166_1: "BI",
		english_name: "Burundi",
		native_name: "Burundi",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/KH-4012a9f6e1d47523cc8294d16ba95401a1b691ab2eaa52c49df788c625c971ce.png",
		iso_3166_1: "KH",
		english_name: "Cambodia",
		native_name: "Cambodia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CM-c4744344b87f516c37bd237530ad1e6f6d9f7c2b952cee3090d230dfea58141b.png",
		iso_3166_1: "CM",
		english_name: "Cameroon",
		native_name: "Cameroon",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CA-38886a65a797a310778fb80880452089fe6970c466646eb1ad487cc08fc5f224.png",
		iso_3166_1: "CA",
		english_name: "Canada",
		native_name: "Canada",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CV-94453955d292ac01173e408676438abf5962d6299a27f692c0b98db8c7ff1649.png",
		iso_3166_1: "CV",
		english_name: "Cape Verde",

		native_name: "Cape Verde",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/KY-b85e6d8af146013cd446ccd28609e1bd9b63191caa2573e09f17f14874ec1013.png",
		iso_3166_1: "KY",
		english_name: "Cayman Islands",

		native_name: "Cayman Islands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CF-2b0a220005747bacfceec0853303825b210763fab3c1f931fb91bdbf264251f4.png",
		iso_3166_1: "CF",
		english_name: "Central African Republic",
		native_name: "Central African Republic",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TD-e78af2a96b82de49a58408626beed79f18f1bfd38c628a5c28a1d706b6eac96f.png",
		iso_3166_1: "TD",
		english_name: "Chad",
		native_name: "Chad",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CL-b3ba3b4e958dc55a4732734d667f47a1703501a7baa19939d57912e9d8d9b50f.png",
		iso_3166_1: "CL",
		english_name: "Chile",
		native_name: "Chile",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CN-18e8c871c786b31fb677eb25a14afa692a5fa0cb6feeb96cfe9d8a84adf209d7.png",
		iso_3166_1: "CN",
		english_name: "China",
		native_name: "China",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CX-273866c74c422b18d1bed6177f30ba209212f182e4a3a42468d29a4a8df1b088.png",
		iso_3166_1: "CX",
		english_name: "Christmas Island",
		native_name: "Christmas Island",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CC-59d157465e4a2f4812ab729210e65b2418326a99016727672715964118be290d.png",
		iso_3166_1: "CC",
		english_name: "Cocos  Islands",
		native_name: "Cocos (Keeling) Islands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CO-4ca65d222eddfe12f55aa2e04628fc0336f028124ec7c93712c8a46fa300a0a4.png",
		iso_3166_1: "CO",
		english_name: "Colombia",
		native_name: "Colombia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/KM-d28df89bfb1c4f6512dcf958bcece160ce1fbfd1dab8c38541ea5499c66ee08f.png",
		iso_3166_1: "KM",
		english_name: "Comoros",
		native_name: "Comoros",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CD-2017b88dc780a0c6c6a6b53fbf9348dfcc5fc64443053c507c86440d46bd4553.png",
		iso_3166_1: "CD",
		english_name: "Congo",
		native_name: "Democratic Republic of the Congo (Kinshasa)",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CG-54e9a6f88e7946453681ce933ca13bb0edc0dd92d7bb39fc5fc31b3989fe769f.png",
		iso_3166_1: "CG",
		english_name: "Congo",
		native_name: "Republic of the Congo (Brazzaville)",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CK-663ea0c7aa906663c473cd5fec30dfc824b364d28aaf76ffdd426a001ee95db2.png",
		iso_3166_1: "CK",
		english_name: "Cook Islands",
		native_name: "Cook Islands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CR-79f73010236e5d5ea1fbbfc099d9939b1a21542b237924f47eee49cdac09f97d.png",
		iso_3166_1: "CR",
		english_name: "Costa Rica",
		native_name: "Costa Rica",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CI-7b2b4fd0cabbd349d78e53fff2a92be6bbc792ab9146103e551ddc1e1b76a87e.png",
		iso_3166_1: "CI",
		english_name: "Cote D'Ivoire",
		native_name: "Côte d’Ivoire",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/HR-0309597f6d84308b671d1257a4dc98235ba6d519b00369e8f38102148da01ca2.png",
		iso_3166_1: "HR",
		english_name: "Croatia",
		native_name: "Croatia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CU-f74d5b99e74f181ef220cbbb4c0cd355e8bd2109b2633d22eddbe04d3fd41297.png",
		iso_3166_1: "CU",
		english_name: "Cuba",
		native_name: "Cuba",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CY-62b59c23afab8a6857d40b70c6d75364eb3d313e8e9b37cbe6a821c08e1dce88.png",
		iso_3166_1: "CY",
		english_name: "Cyprus",
		native_name: "Cyprus",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CZ-91dd5d92623653d7c7d1dbaf80f635092a5672d1d7d05d8c448595f1672578e1.png",
		iso_3166_1: "CZ",
		english_name: "Czech Republic",

		native_name: "Czech Republic",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/XC.png",
		iso_3166_1: "XC",
		english_name: "Czechoslovakia",
		native_name: "Czechoslovakia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/DK-fd8b7ed6b65fc796dab2c998bb9bf0c6151ebfa188ad939243a56c5089df696a.png",
		iso_3166_1: "DK",
		english_name: "Denmark",
		native_name: "Denmark",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/DJ-e8b988078b6694202379057c854efb666efc6d3a0a4db5199f2f65988345d429.png",
		iso_3166_1: "DJ",
		english_name: "Djibouti",
		native_name: "Djibouti",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/DM-812dbda4dd48973bffb198c8f8f11c8ca385c51391b68896a0c93e8c8084f055.png",
		iso_3166_1: "DM",
		english_name: "Dominica",
		native_name: "Dominica",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/DO-eaf6f96469144edd422defd288375a3b1c4749c9547b808141ca77a3603b2f39.png",
		iso_3166_1: "DO",
		english_name: "Dominican Republic",

		native_name: "Dominican Republic",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/XG.png",
		iso_3166_1: "XG",
		english_name: "East Germany",

		native_name: "East Germany",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/TP.png",
		iso_3166_1: "TP",
		english_name: "East Timor",

		native_name: "East Timor",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/EC-385020285cbde4247c16e9bf8b9a344254dc3468cd4af49b5a56589f3f667720.png",
		iso_3166_1: "EC",
		english_name: "Ecuador",
		native_name: "Ecuador",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/EG-644cde0f5c69c3ce1bb26552d9a264fec82c0fca9eb6de7b10bdefc2124eaf9c.png",
		iso_3166_1: "EG",
		english_name: "Egypt",
		native_name: "Egypt",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SV-9c4c269a41fb7dd95126286d6f9687e38daef6c7c934d156007b0e77c800992c.png",
		iso_3166_1: "SV",
		english_name: "El Salvador",

		native_name: "El Salvador",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GQ-3d090bef72ac89f8ee2f13582e92c9a814f6b520ab76d2c64364bc53f9a685f2.png",
		iso_3166_1: "GQ",
		english_name: "Equatorial Guinea",

		native_name: "Equatorial Guinea",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/ER-0526ab715271a4ffd96616908189e08a8e108f529aaecfd050994157c27d126a.png",
		iso_3166_1: "ER",
		english_name: "Eritrea",
		native_name: "Eritrea",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/EE-aafc24f97bf432fa3530d2bdd689839058cac586c65e7017df4040837ed2c322.png",
		iso_3166_1: "EE",
		english_name: "Estonia",
		native_name: "Estonia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/ET-ff6606e4c1054653d87470b6d9749843858b0cf1e2623ebe27639799c7c3ca43.png",
		iso_3166_1: "ET",
		english_name: "Ethiopia",
		native_name: "Ethiopia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/FO-64bfd8310dfb02cfd24c39f28b78d80b93c89022fdc6d7336000812849867f4c.png",
		iso_3166_1: "FO",
		english_name: "Faeroe Islands",

		native_name: "Faroe Islands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/FK-ebeaba038fc3df82eb5f35f3106c1db52a469c7cf36e2c47874d5a497138a980.png",
		iso_3166_1: "FK",
		english_name: "Falkland Islands",

		native_name: "Falkland Islands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/FJ-c47ade8f59b2ebf45fa768da8ce666ac1d9e288debb799bf0a7f0cebe8dc4ea0.png",
		iso_3166_1: "FJ",
		english_name: "Fiji",
		native_name: "Fiji",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/FI-c3bae4a5062e7a52e200d813b69753ff09734a07071dd50150b4731d1721b251.png",
		iso_3166_1: "FI",
		english_name: "Finland",
		native_name: "Finland",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/FR-45e57f71db90cee6ebd54ed7bb28cc7fdcbd2f4592ade4998f2bc6458d997b3f.png",
		iso_3166_1: "FR",
		english_name: "France",
		native_name: "France",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/GF.png",
		iso_3166_1: "GF",
		english_name: "French Guiana",

		native_name: "French Guiana",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/PF-c8cc1dfad5919b53e682f40c5f52e8ac980495d3569abc4274db3e70983c2ab2.png",
		iso_3166_1: "PF",
		english_name: "French Polynesia",

		native_name: "French Polynesia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TF-bf8161a0a80061808cbaa638f441e64d48064d9e5c399858f12c4759b0ed0b0e.png",
		iso_3166_1: "TF",
		english_name: "French Southern Territories",
		native_name: "French Southern Territories",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GA-187af19720287d126a4ec7396f8523ba5cb160af392049c601380423f3cdd1e0.png",
		iso_3166_1: "GA",
		english_name: "Gabon",
		native_name: "Gabon",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GM-9edd46630c2498c5b89a54e388a049df95fd6103663ce57d09c5cc62677b1a9d.png",
		iso_3166_1: "GM",
		english_name: "Gambia",
		native_name: "Gambia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GE-1094b10f027398d84f67604ca85bda1ba8648791d81384f878b0bef2b3256c1a.png",
		iso_3166_1: "GE",
		english_name: "Georgia",
		native_name: "Georgia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/DE-1877858abee51cabe053ceb7d0561f538597c5c1aca56ba25319abba343a9ca0.png",
		iso_3166_1: "DE",
		english_name: "Germany",
		native_name: "Germany",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GH-9e150153f83eda9ac96ad891fc1cd389c6b95c1d93624b6748dc07643435ff76.png",
		iso_3166_1: "GH",
		english_name: "Ghana",
		native_name: "Ghana",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GI-853c0a2d90c05396d71d2be131aeacbba220bd89dda75220f37af5d420839da3.png",
		iso_3166_1: "GI",
		english_name: "Gibraltar",
		native_name: "Gibraltar",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GR-6b6b3ee799e88c48a6e9326783dc220715e91d783520b7bf3e7d45703bbf3310.png",
		iso_3166_1: "GR",
		english_name: "Greece",
		native_name: "Greece",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GL-3808b2c7ea9025cdc6eea1be88a20d7736606eb6a402d853bf90e591637fccba.png",
		iso_3166_1: "GL",
		english_name: "Greenland",
		native_name: "Greenland",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GD-9e38b164aceffc6666299262d74046b4f90441f6e38ca5bf4512f6b9e8c17ef0.png",
		iso_3166_1: "GD",
		english_name: "Grenada",
		native_name: "Grenada",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/GP.png",
		iso_3166_1: "GP",
		english_name: "Guadaloupe",
		native_name: "Guadeloupe",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GU-b43086b68c81fa3957ae5c6c68237f4bf2ee709431cb952d30cf36f24caf3d50.png",
		iso_3166_1: "GU",
		english_name: "Guam",
		native_name: "Guam",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GT-d4015e353a17fb8f3772cd76aaec3e32371a411354d4cf2a78a433ca1155e4a7.png",
		iso_3166_1: "GT",
		english_name: "Guatemala",
		native_name: "Guatemala",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GN-f0f62dcd2be22295fcf71b24770087924d1d71d800f176fbdb6683d9697c5826.png",
		iso_3166_1: "GN",
		english_name: "Guinea",
		native_name: "Guinea",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GW-bf097a1923a94b9b57b5f074a07c72a4f429e4aa49ea9fce97d60103fa47df4f.png",
		iso_3166_1: "GW",
		english_name: "Guinea-Bissau",
		native_name: "Guinea-Bissau",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GY-1e263417ddb9bde9cba8f0c6a8c864f034158ee3bcb95d20008be8de9479927d.png",
		iso_3166_1: "GY",
		english_name: "Guyana",
		native_name: "Guyana",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/HT-b5d8c44bea2ce9508cdf202829b189cd2029fc0696405378d7cb6513019c693e.png",
		iso_3166_1: "HT",
		english_name: "Haiti",
		native_name: "Haiti",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/HM.png",
		iso_3166_1: "HM",
		english_name: "Heard and McDonald Islands",
		native_name: "Heard \u0026 McDonald Islands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/VA-80c9075f05740778759c170248360b4271964b93e3fc0ccfb25fde4b2438d73b.png",
		iso_3166_1: "VA",
		english_name: "Holy See",

		native_name: "Vatican City",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/HN-be747559f4010cc7716ca84ee23655c08c5e9e77c15e6715f60a48b1114c2101.png",
		iso_3166_1: "HN",
		english_name: "Honduras",
		native_name: "Honduras",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/HK-1c08823e81a30327188a562d32fe5c34582d1a37dac52a4cc0fe08e02a0dc949.png",
		iso_3166_1: "HK",
		english_name: "Hong Kong",
		native_name: "Hong Kong SAR China",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/HU-623b538d2d51a467de0dcad45401dc55f5228ae6325f7b6ec934527cd5d568ae.png",
		iso_3166_1: "HU",
		english_name: "Hungary",
		native_name: "Hungary",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/IS-956d3ab99501ec75bf663e4bb20c762e7a690b2d7c558a6b0bf62d0dc21df118.png",
		iso_3166_1: "IS",
		english_name: "Iceland",
		native_name: "Iceland",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/IN-5b73f4605171eaa60539e5d69a85bebe7b800f5ee6f94f24dafecaa0d47209fd.png",
		iso_3166_1: "IN",
		english_name: "India",
		native_name: "India",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/ID-ccecfd8d6955ec585cc23addeff613af78f182f20f520d263bfc682b95cf4b16.png",
		iso_3166_1: "ID",
		english_name: "Indonesia",
		native_name: "Indonesia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/IR-fc217802e9568e624aeef03d4f37dd60897fbc3bf5efbd28ff58829d44827e13.png",
		iso_3166_1: "IR",
		english_name: "Iran",
		native_name: "Iran",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/IQ-ba90e1c8592943baec42857c18c8397069f2e86ddcfd5c39368a28d24f8590cd.png",
		iso_3166_1: "IQ",
		english_name: "Iraq",
		native_name: "Iraq",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/IE-0d036291e102322c836051481b5f76bc64df1d147138be9dbbfe3dbf56aba128.png",
		iso_3166_1: "IE",
		english_name: "Ireland",
		native_name: "Ireland",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/IL-1805f916b282a2536ccff3ac02c23f586baf3b2646dc4822be2d9fbd76d709f5.png",
		iso_3166_1: "IL",
		english_name: "Israel",
		native_name: "Israel",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/IT-e1a18e2f092f368e800469ae610c25137573e555cd4984a03c74d1ef04579822.png",
		iso_3166_1: "IT",
		english_name: "Italy",
		native_name: "Italy",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/JM-09cc0a9df714371df6ef87827bd9b1c930cae70afbe9a8ea386bb24170b992eb.png",
		iso_3166_1: "JM",
		english_name: "Jamaica",
		native_name: "Jamaica",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/JP-094ae25e6726ba8c9eaece21da437f5236662d9419c198310d30e0960acebe1c.png",
		iso_3166_1: "JP",
		english_name: "Japan",
		native_name: "Japan",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/JO-b7ff4e2625b0399bfcb9004a92edcedf362ec95debcf4be92fcbf7e3abe8a53a.png",
		iso_3166_1: "JO",
		english_name: "Jordan",
		native_name: "Jordan",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/KZ-1832d76d0c8224b75707d389d0f51282ae0023bb8cdd8c23f239efeb09cb5023.png",
		iso_3166_1: "KZ",
		english_name: "Kazakhstan",
		native_name: "Kazakhstan",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/KE-248ba156a39dfa8bb91a0480ebdeb53848951e0d44ca826b48d9ca8c597d661a.png",
		iso_3166_1: "KE",
		english_name: "Kenya",
		native_name: "Kenya",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/KI-a00289df08aab36dad35fc51ecd82f558cfc7dfb2a49bd596cdfabba3d8e9cda.png",
		iso_3166_1: "KI",
		english_name: "Kiribati",
		native_name: "Kiribati",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/XK.png",
		iso_3166_1: "XK",
		english_name: "Kosovo",
		native_name: "Kosovo",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/KW-b2c90760fb9780db0fa7b6e20d8aba8788bafbd28974796f6d575f8cac96149e.png",
		iso_3166_1: "KW",
		english_name: "Kuwait",
		native_name: "Kuwait",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/KG-27cb7ccacab17924191b1fadfafc9e68d303ade18e2fad0e0741ce992a8aa8f3.png",
		iso_3166_1: "KG",
		english_name: "Kyrgyz Republic",
		native_name: "Kyrgyzstan",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/LA-64ef0e61c61db22f8371eafe939ab32e2ab3fb2c4b4c49e288030f051f624991.png",
		iso_3166_1: "LA",
		english_name: "Lao People's Democratic Republic",
		native_name: "Laos",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/LV-ba2030c39ecd68e7313d46aa1fd56025394ec39af6190a8e531d0c1a3d8c90eb.png",
		iso_3166_1: "LV",
		english_name: "Latvia",
		native_name: "Latvia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/LB-5a70f5231e7ebc3c3cda430db5ce00ab5f93e01099cffcd84c202eb43484f770.png",
		iso_3166_1: "LB",
		english_name: "Lebanon",
		native_name: "Lebanon",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/LS-a741e44ebac1039344e5e77893beabb987d5d0473708cc499893c1c8eb85cc7f.png",
		iso_3166_1: "LS",
		english_name: "Lesotho",
		native_name: "Lesotho",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/LR-ad945aaed548f947a24f5ae093f16b4993196a790500d59ab1bde43eda5d2e2a.png",
		iso_3166_1: "LR",
		english_name: "Liberia",
		native_name: "Liberia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/LY-ca7444014487f1fb5f3f9fb16d3614a78ecf9decdd9034e0ea44d08251cd8fc8.png",
		iso_3166_1: "LY",
		english_name: "Libyan Arab Jamahiriya",
		native_name: "Libya",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/LI-e65ac0f79a6985ed6d049f51b08bed17b8d3495e9a4721ac2696fbaad27538e0.png",
		iso_3166_1: "LI",
		english_name: "Liechtenstein",
		native_name: "Liechtenstein",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/LT-85614c5fd7332fbf27b2bf9160944295f6067a6793dda105068a431e6f8e1252.png",
		iso_3166_1: "LT",
		english_name: "Lithuania",
		native_name: "Lithuania",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/LU-47556c387b7cf5c9704b91b0254fe0c35d0b3a260dd03b76720f99cea83d19b2.png",
		iso_3166_1: "LU",
		english_name: "Luxembourg",
		native_name: "Luxembourg",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MO-161cfd86c18b0661b0a1208fc6448a3c029045fc4eb2fb6f181c0d9901067c69.png",
		iso_3166_1: "MO",
		english_name: "Macao",
		native_name: "Macau SAR China",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MK-9dc26b38ea3b90342e05a57f523c9d3c21d1cfe00f2a42a672f67438ec234a81.png",
		iso_3166_1: "MK",
		english_name: "Macedonia",
		native_name: "Macedonia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MG-aaf1e6f710c5e0cb87797663a60cc7b74105610790681eaf64f7604ce07d3395.png",
		iso_3166_1: "MG",
		english_name: "Madagascar",
		native_name: "Madagascar",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MW-abebe4606446991796c4702e7c9febfd378e89c772012a8387b43b9bb8f871f2.png",
		iso_3166_1: "MW",
		english_name: "Malawi",
		native_name: "Malawi",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MY-ab75bb0362b542f155ef53047806213086c302c5622a39c6f4f628b65935b11f.png",
		iso_3166_1: "MY",
		english_name: "Malaysia",
		native_name: "Malaysia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MV-f5aeb9017e19cad1366e33c0ff3e5fb13190ef415787ac0c92b43e1c890ddcce.png",
		iso_3166_1: "MV",
		english_name: "Maldives",
		native_name: "Maldives",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/ML-f0e93cdaf10e5a932e2efec45a43219ee4810624b8d51282ddb42dfc42779b44.png",
		iso_3166_1: "ML",
		english_name: "Mali",
		native_name: "Mali",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MT-1f603f129e9a2d5f1ffbbda82d93daa6a5ba7099881445e33c5fd5469d92e393.png",
		iso_3166_1: "MT",
		english_name: "Malta",
		native_name: "Malta",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MH-9bad7743173e4327b2e08dba7516d45d445102f09273c31f92ebf7d64d9353b8.png",
		iso_3166_1: "MH",
		english_name: "Marshall Islands",
		native_name: "Marshall Islands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MQ-a80cab91749c55cf747019adb5f5a2f1514c0e257ba30202a5f38552896d9621.png",
		iso_3166_1: "MQ",
		english_name: "Martinique",
		native_name: "Martinique",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MR-7796e2a354cff138c69b702dc4424bb978029c0cf47de603ee4bb12b00c1e6a5.png",
		iso_3166_1: "MR",
		english_name: "Mauritania",
		native_name: "Mauritania",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MU-47f2ab2370a5a3017ad0ee0bc10109cf209bc9ccbd0cec16ecc73beb8f9b0522.png",
		iso_3166_1: "MU",
		english_name: "Mauritius",
		native_name: "Mauritius",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/YT-047253ebba3af079c1bf85ae1fffc8a98c3f2e90b1a0cff64a3b5a762e5bce00.png",
		iso_3166_1: "YT",
		english_name: "Mayotte",
		native_name: "Mayotte",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MX-6e1feed2ded1b9d724497ba082957828cffe11b6cbe53c9914f837b5fd7d914e.png",
		iso_3166_1: "MX",
		english_name: "Mexico",
		native_name: "Mexico",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/FM-524ab631491571ff27b98c1b48d8b02a5e639fee5d3922f380c749d9185e6a26.png",
		iso_3166_1: "FM",
		english_name: "Micronesia",
		native_name: "Micronesia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MD-30609306e91e950a46992136c3981696433c751314af9949f05cc37b31852cd6.png",
		iso_3166_1: "MD",
		english_name: "Moldova",
		native_name: "Moldova",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MC-ccecfd8d6955ec585cc23addeff613af78f182f20f520d263bfc682b95cf4b16.png",
		iso_3166_1: "MC",
		english_name: "Monaco",
		native_name: "Monaco",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MN-4e5000e5104ea1211d50dd96eda093059c229be50081bfc191f9a73e6b72cdd4.png",
		iso_3166_1: "MN",
		english_name: "Mongolia",
		native_name: "Mongolia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/ME-c32fb96a12839144785b0344c4512cfcb764cbbfcd6ae938a3d31368d6b8975c.png",
		iso_3166_1: "ME",
		english_name: "Montenegro",
		native_name: "Montenegro",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MS-1f4d38d6dd633b03c17415fb14435a78778f6e893d4890b4d3d09c7a36a17217.png",
		iso_3166_1: "MS",
		english_name: "Montserrat",
		native_name: "Montserrat",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MA-772de74a482c46f684fae12f294a154c275c5c03da40d6c8538778dca2ef3e40.png",
		iso_3166_1: "MA",
		english_name: "Morocco",
		native_name: "Morocco",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MZ-f6ab155a82813ff1ebea3d1c0273bd87ed49b0387cb24cd10979c0858e252247.png",
		iso_3166_1: "MZ",
		english_name: "Mozambique",
		native_name: "Mozambique",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MM-382f560661e019e51a3698e4113cb308abb9e23ab3c194a610ee47ade0ec4b3d.png",
		iso_3166_1: "MM",
		english_name: "Myanmar",
		native_name: "Myanmar (Burma)",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/NA-6f1b39c4f600b11c063ac53f8f981888ae3cf745531edb5065d208b208a3defd.png",
		iso_3166_1: "NA",
		english_name: "Namibia",
		native_name: "Namibia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/NR-a5dc261cc94483a7f846f44fbf5dca4c14de8ea160a87987f474bb808a85ce3b.png",
		iso_3166_1: "NR",
		english_name: "Nauru",
		native_name: "Nauru",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/NP-7f9c99fb0e3836fff9a9e7ddaf011256e5737d1a647fa27610097918bd899676.png",
		iso_3166_1: "NP",
		english_name: "Nepal",
		native_name: "Nepal",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/NL-6f692817fdb935d856a9c976703fd7f4e1b656442bfcc1739a8643ba6a122a97.png",
		iso_3166_1: "NL",
		english_name: "Netherlands",
		native_name: "Netherlands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/AN-985135f1caddaeb02ea5b21c60f2904a5c2f9e622efb23f3a1d798f2b37d1ba5.png",
		iso_3166_1: "AN",
		english_name: "Netherlands Antilles",

		native_name: "Netherlands Antilles",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/NC-9cd4dbdf2be779b9434ca4509a582db746c34c705e8dbbaf5d2188098d4138a3.png",
		iso_3166_1: "NC",
		english_name: "New Caledonia",

		native_name: "New Caledonia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/NZ-55035bfdecb1f546e7d0f47515368c222cb5d781260ba283c268ec47c822d51b.png",
		iso_3166_1: "NZ",
		english_name: "New Zealand",

		native_name: "New Zealand",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/NI-768301e483e5cc69a81aa964953eaf7c21067ae51e03ba9752799513fa15e291.png",
		iso_3166_1: "NI",
		english_name: "Nicaragua",
		native_name: "Nicaragua",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/NE-da0768c15183c9e4e4eefbf28da2d8150ab52ce8e4c247ccb4eb2a56fc519c27.png",
		iso_3166_1: "NE",
		english_name: "Niger",
		native_name: "Niger",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/NG-65215f0ccbe9011892bcf48e1bee64a33ad36a5cbd6302cdf8e5574fdb83b45a.png",
		iso_3166_1: "NG",
		english_name: "Nigeria",
		native_name: "Nigeria",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/NU-b2fa3e63962b9235070c95faf6c64d72beaf67b392078200138bd3874da1d8c6.png",
		iso_3166_1: "NU",
		english_name: "Niue",
		native_name: "Niue",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/NF-b03e0463001f40c206263c8c8a9b3f3f519fc96e3adcd7529df288e8dbc0bb22.png",
		iso_3166_1: "NF",
		english_name: "Norfolk Island",

		native_name: "Norfolk Island",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/KP-0463e5ff71c57688e6a1db0ad5583d52712ab507a93d4c4b5fff3a4aa8997078.png",
		iso_3166_1: "KP",
		english_name: "North Korea",

		native_name: "North Korea",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/XI.png",
		iso_3166_1: "XI",
		english_name: "Northern Ireland",

		native_name: "Northern Ireland",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/MP-fa35fd9a63f1b78672c81c34b541bb6cfaabc860f2e19d3fde19e1f480f48904.png",
		iso_3166_1: "MP",
		english_name: "Northern Mariana Islands",
		native_name: "Northern Mariana Islands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/NO-5190735f3735ed2a927a33177baf3125ce201263a704da930e526dee5a4352d8.png",
		iso_3166_1: "NO",
		english_name: "Norway",
		native_name: "Norway",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/OM-2abae9aa2241f0baa7f3a9b0b11eb3f547e3a121274092763f6a2751ac9cf749.png",
		iso_3166_1: "OM",
		english_name: "Oman",
		native_name: "Oman",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/PK-fb2ba362fdb5d40bb4ea17b843a26ec88cf1e14d853c3343b0ced99df29308d8.png",
		iso_3166_1: "PK",
		english_name: "Pakistan",
		native_name: "Pakistan",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/PW-6a82e115df82d3adfa989046eee268c7948899febbc75b097ec9a6e04567e759.png",
		iso_3166_1: "PW",
		english_name: "Palau",
		native_name: "Palau",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/PS-10ba8e52835a8ad4eae22eeb7cbde333d7f658202d9dedf11f8eece2d1fd8a98.png",
		iso_3166_1: "PS",
		english_name: "Palestinian Territory",

		native_name: "Palestinian Territories",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/PA-10a6b756c09c2c9431c9a1d185dc3e91f2bcb24f229845964a14a2676acc39ca.png",
		iso_3166_1: "PA",
		english_name: "Panama",
		native_name: "Panama",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/PG-ac85ce197ff8d0e108d95bf5867169df8fff6448c12999e0f0c0e12617cfd65f.png",
		iso_3166_1: "PG",
		english_name: "Papua New Guinea",
		native_name: "Papua New Guinea",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/PY-f09678417172f5a98e9d2b28cfd9d5a854a4c12f4f33d3cc59454cf011567b7e.png",
		iso_3166_1: "PY",
		english_name: "Paraguay",
		native_name: "Paraguay",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/PE-c12deb68829f455243b9d7aba016b8047676581473e73c579e2f3220a1033f9a.png",
		iso_3166_1: "PE",
		english_name: "Peru",
		native_name: "Peru",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/PH-e184176368c0703af1e2d0d68daafc9134ff5ae913b22a08ac6dd58c0a18915d.png",
		iso_3166_1: "PH",
		english_name: "Philippines",
		native_name: "Philippines",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/PN-df98517dda9b6656e92046184e8bb18605df834c26b31cd4bf20fc8b76e1bbc0.png",
		iso_3166_1: "PN",
		english_name: "Pitcairn Island",

		native_name: "Pitcairn Islands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/PL-2c59201663e243a6301c363498eb34ec164bbce57521c1d29eef0121a5459b78.png",
		iso_3166_1: "PL",
		english_name: "Poland",
		native_name: "Poland",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/PT-a02b40637d0de02097b2322c3117c80575be518c1669f0f28c69cfce0d20a826.png",
		iso_3166_1: "PT",
		english_name: "Portugal",
		native_name: "Portugal",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/PR-e72768799c3eb86f3a9d60cef09e9fa7e97451c0cc468ad35167e6752346e09b.png",
		iso_3166_1: "PR",
		english_name: "Puerto Rico",

		native_name: "Puerto Rico",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/QA-fc40ef1f53643e1eed33ab62e906590d2fd7dc453d6b7a940b65083f7c109327.png",
		iso_3166_1: "QA",
		english_name: "Qatar",
		native_name: "Qatar",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/RE.png",
		iso_3166_1: "RE",
		english_name: "Reunion",
		native_name: "Réunion",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/RO-4098a7242007d38c3d0968bb58320ac70714d47fcdd064d76443c08087e9eb71.png",
		iso_3166_1: "RO",
		english_name: "Romania",
		native_name: "Romania",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/RU-44aaee85b78b6bd07f861e4927f147f4ca8b00dc8766fd20ecc88aa612d06fcd.png",
		iso_3166_1: "RU",
		english_name: "Russia",
		native_name: "Russia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/RW-387fa86eaa7ad258176c4d3815ec28170b8a843ff7644180d77c14e487f32be4.png",
		iso_3166_1: "RW",
		english_name: "Rwanda",
		native_name: "Rwanda",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/WS-fc7e500ea0e30c4aea95b3b826abdb2e81f5b09bb2f7428a33219e85fcffb969.png",
		iso_3166_1: "WS",
		english_name: "Samoa",
		native_name: "Samoa",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SM-53be820dc298703a9ff0eaf29d58f3efe409f3301b5d70ec9e44b92f511a97ba.png",
		iso_3166_1: "SM",
		english_name: "San Marino",

		native_name: "San Marino",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/ST-1ba8d6747889d9976b968b5970c8dc06c2d9e2e33fc3e5ddd2f08cc63ae08d23.png",
		iso_3166_1: "ST",
		english_name: "Sao Tome and Principe",
		native_name: "São Tomé \u0026 Príncipe",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SA-35ecfd4b56472c32a76a7b0e2966cb830f31ee340b831b2df66ab74c08e7d2a8.png",
		iso_3166_1: "SA",
		english_name: "Saudi Arabia",

		native_name: "Saudi Arabia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SN-ebdd6ed9e88e9cc10b87802a32a10383d5f5f445b075df702f447d6c8c07b374.png",
		iso_3166_1: "SN",
		english_name: "Senegal",
		native_name: "Senegal",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/RS-e9a417f8d7dd2a210c364b8fd45983122f5cba5a4aa34e3cfc72d6293e07f4ef.png",
		iso_3166_1: "RS",
		english_name: "Serbia",
		native_name: "Serbia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CS-e9a417f8d7dd2a210c364b8fd45983122f5cba5a4aa34e3cfc72d6293e07f4ef.png",
		iso_3166_1: "CS",
		english_name: "Serbia and Montenegro",
		native_name: "Serbia and Montenegro",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SC-d95787218bb380c15485e54fc33151df26fba297ae3a2f6a72fa832a21804390.png",
		iso_3166_1: "SC",
		english_name: "Seychelles",
		native_name: "Seychelles",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SL-bb0193597000e9dd5b490c3c9160f8c3e29e91d193d5f20bf783bc8447bec05e.png",
		iso_3166_1: "SL",
		english_name: "Sierra Leone",

		native_name: "Sierra Leone",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SG-327ee0325d7fc6424fdee9487353eac1ccea73db53298dfae0dd0c48231b3baa.png",
		iso_3166_1: "SG",
		english_name: "Singapore",
		native_name: "Singapore",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SK-5f70f0ff53ab2b4c3cc3f97c8081d387e4b76144bc2906f7f61302f0580dd844.png",
		iso_3166_1: "SK",
		english_name: "Slovakia",
		native_name: "Slovakia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SI-fe61c691870ff961b61978367c0b1b434ca62631619f9151ba8998a3abcb91a8.png",
		iso_3166_1: "SI",
		english_name: "Slovenia",
		native_name: "Slovenia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SB-a303dfb346f80844b27a756f2eb03194e2a7cb4e7f1d8a6383756d77dde7a769.png",
		iso_3166_1: "SB",
		english_name: "Solomon Islands",

		native_name: "Solomon Islands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SO-71c572624e6479ea29a247b65b80348d0eca0015ba84e82ce47325ee4da80c97.png",
		iso_3166_1: "SO",
		english_name: "Somalia",
		native_name: "Somalia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/ZA-4e8b8c43d8dd2f9cbb77d5d353fd98c5844f922eb227ad3478eb37af8329f8c4.png",
		iso_3166_1: "ZA",
		english_name: "South Africa",

		native_name: "South Africa",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GS-e9dc51203c4f98a929f54d43f20d202cb790739eb5f6fa27c01957d735711df0.png",
		iso_3166_1: "GS",
		english_name: "South Georgia and the South Sandwich Islands",
		native_name: "South Georgia \u0026 South Sandwich Islands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/KR-42af849ebe299438948216ee9270f194b5358cac2e5604773fc07bb66802af14.png",
		iso_3166_1: "KR",
		english_name: "South Korea",

		native_name: "South Korea",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SS-0c1e773931f58b9294162b5bac585ef6d70fd2a31e67c47cbe8552e5e89a5dad.png",
		iso_3166_1: "SS",
		english_name: "South Sudan",

		native_name: "South Sudan",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/SU.png",
		iso_3166_1: "SU",
		english_name: "Soviet Union",

		native_name: "Soviet Union",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/ES-ef578e78363c45694fb713a7c8d6ceddf7f23e294c30d9bba1c7547f61ba42b2.png",
		iso_3166_1: "ES",
		english_name: "Spain",
		native_name: "Spain",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/LK-4f334907f374e062808a7e2b5f1da55346d0de9d9b6406fb55ab85d621d7518b.png",
		iso_3166_1: "LK",
		english_name: "Sri Lanka",

		native_name: "Sri Lanka",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SH-dcaa47ca788a792dba67d599e0a695adbed009816caf0a026fc0ad27634a93bb.png",
		iso_3166_1: "SH",
		english_name: "St. Helena",
		native_name: "St. Helena",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/KN-a402fa28c9ea1de17e854d4bfba0a58a609b7428a59a0c1ef3091ddd2a7ba81f.png",
		iso_3166_1: "KN",
		english_name: "St. Kitts and Nevis",
		native_name: "St. Kitts \u0026 Nevis",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/LC-9a50a30f97cd78250e67a8e2cf579f86ad27a031c5f39d8522f56edcc8b919c2.png",
		iso_3166_1: "LC",
		english_name: "St. Lucia",
		native_name: "St. Lucia",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/PM.png",
		iso_3166_1: "PM",
		english_name: "St. Pierre and Miquelon",
		native_name: "St. Pierre \u0026 Miquelon",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/VC-12ee2347ea19904e96fe9c371eea94663b4566b1a6071bcd0f4f29675c26f215.png",
		iso_3166_1: "VC",
		english_name: "St. Vincent and the Grenadines",
		native_name: "St. Vincent \u0026 Grenadines",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SD-b9faa5ad4ea3b785b8c3bb776c4125bd831200e931fbd2fd299eed5c78ea9eb6.png",
		iso_3166_1: "SD",
		english_name: "Sudan",
		native_name: "Sudan",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SR-27b6fe87121597f5b595e294a2fccc71a02e74ddcea72fce1eb5bf3ef6bdbbe4.png",
		iso_3166_1: "SR",
		english_name: "Suriname",
		native_name: "Suriname",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/SJ.png",
		iso_3166_1: "SJ",
		english_name: "Svalbard \u0026 Jan Mayen Islands",
		native_name: "Svalbard \u0026 Jan Mayen",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SZ-a92ca942bf3951db7f8366caf577b7f20a9b88d766f2cd78d46b0354c1ffbeb5.png",
		iso_3166_1: "SZ",
		english_name: "Swaziland",
		native_name: "Eswatini (Swaziland)",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SE-5a97536c4c12f83fe02794f9aa3eb82b47ead7677217d0954a8cef22ac57233f.png",
		iso_3166_1: "SE",
		native_name: "Sweden",
		english_name: "Sweden",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/CH-5b64386f84ee6594a68b5dfc248a88892ab38178c1682702689d82c66ba8e20a.png",
		iso_3166_1: "CH",
		english_name: "Switzerland",
		native_name: "Switzerland",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/SY-440f1f55e81b335f55ea35ab12446dfdbac22d8329148c65a58a949184b96cc8.png",
		iso_3166_1: "SY",
		english_name: "Syrian Arab Republic",
		native_name: "Syria",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TW-47fec93073999a2397c91426ed10a4ded3ddfe3345fe1016401e053a8541ce2d.png",
		iso_3166_1: "TW",
		english_name: "Taiwan",
		native_name: "Taiwan",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TJ-c7135cd10e3cb05e2acb1e77ced894ce961e96c81a445db93697ec57121bd9f6.png",
		iso_3166_1: "TJ",
		english_name: "Tajikistan",
		native_name: "Tajikistan",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TZ-34a76401d61899319a1dbc580e7563bc9d54c8dac619694b94e7b750e03effa2.png",
		iso_3166_1: "TZ",
		english_name: "Tanzania",
		native_name: "Tanzania",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TH-a7f1ca882f8d0c6a7b532c8c4d9ac056505a97dc5dd33e8d7b82b1312d4c348b.png",
		iso_3166_1: "TH",
		english_name: "Thailand",
		native_name: "Thailand",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TL-41018c22454090b03107669a82286e50e59f914b0b3348e28599b9ea89c43d1d.png",
		iso_3166_1: "TL",
		english_name: "Timor-Leste",

		native_name: "Timor-Leste",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TG-6497f639c5a7dcbacb36dd660413ee02d4d30e8c1dcb4d583bd52f17a418e279.png",
		iso_3166_1: "TG",
		english_name: "Togo",
		native_name: "Togo",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TK-2e875c94a2319c5e68a9ee62b4c2790d8abe5d379bfb594cbbee990453d4cc82.png",
		iso_3166_1: "TK",
		english_name: "Tokelau",
		native_name: "Tokelau",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TO-dabd7eb4a2a0273bc88ed29d123998205186876fe5e51ef2d65a50ed611a1967.png",
		iso_3166_1: "TO",
		english_name: "Tonga",
		native_name: "Tonga",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TT-328bfa8f9d72edcd00009d360bbdb2b21a47e81ed89ee4a8d8b7ebf33f0922f4.png",
		iso_3166_1: "TT",
		english_name: "Trinidad and Tobago",
		native_name: "Trinidad \u0026 Tobago",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TN-934ff25d61ede4b7b169faaf04358ce194aa6e701c2a40321a681edd1e601004.png",
		iso_3166_1: "TN",
		english_name: "Tunisia",
		native_name: "Tunisia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TR-dde9ebaa44f6027c50ab4ebe6372c3f1656f12c7db00cdec8a447cb785fee93a.png",
		iso_3166_1: "TR",
		english_name: "Turkey",
		native_name: "Turkey",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TM-663e6e25bec09008084363bdca6162edf199e6109b738061aa69834e5bf51bca.png",
		iso_3166_1: "TM",
		english_name: "Turkmenistan",
		native_name: "Turkmenistan",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TC-4261bc2ddda415a1253dece799fe4409c98a1030e27fc09e5240a88412230853.png",
		iso_3166_1: "TC",
		english_name: "Turks and Caicos Islands",
		native_name: "Turks \u0026 Caicos Islands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/TV-313807e1a7b9956ab07e75fd9a38f91743c825a4d17313b52d71ac26dd8c568c.png",
		iso_3166_1: "TV",
		english_name: "Tuvalu",
		native_name: "Tuvalu",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/VI-35b961d8d0e3de6dce9f3872f39f3357780eab45cde9427a46c9b6c1d41a7eca.png",
		iso_3166_1: "VI",
		english_name: "US Virgin Islands",
		native_name: "U.S. Virgin Islands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/UG-2591667e374ef615c19ad3c2e333a5858701292eaa2827afb26a6825326df8fa.png",
		iso_3166_1: "UG",
		english_name: "Uganda",
		native_name: "Uganda",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/UA-69f9221eb0890805f4c36d35d3ff68267a1158b5411a02fa4d852ff5632f3b4f.png",
		iso_3166_1: "UA",
		english_name: "Ukraine",
		native_name: "Ukraine",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/AE-afa064bc388b2f8fdf243b697018ac3759c0a4bd80854e18f69d1eb7d2f445d1.png",
		iso_3166_1: "AE",
		english_name: "United Arab Emirates",
		native_name: "United Arab Emirates",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/GB-d20d3c377f9a6cd80339dd457b5ced7c2bbdd62197d8ef99085ec104fd1f7709.png",
		iso_3166_1: "GB",
		english_name: "United Kingdom",

		native_name: "United Kingdom",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/UM.png",
		iso_3166_1: "UM",
		english_name: "United States Minor Outlying Islands",
		native_name: "U.S. Outlying Islands",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/US-fc54af6e5c8237200d49fd6a49061fffeb8a7217bb9000acd1c02039b65b22ba.png",
		iso_3166_1: "US",
		english_name: "United States of America",

		native_name: "United States",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/UY-82c74dfa146618466b26f344ae35b9434f3c2c35786da10166f25a96f8981b2e.png",
		iso_3166_1: "UY",
		english_name: "Uruguay",
		native_name: "Uruguay",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/UZ-80b6095edcfa63366373f733b6129e3190442c75b7b7f5f4076a5b4c8342092c.png",
		iso_3166_1: "UZ",
		english_name: "Uzbekistan",
		native_name: "Uzbekistan",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/VU-bd3bd4ffb1795d265b89c35ef76a80b19fa98f4763d57e092e722c256478e988.png",
		iso_3166_1: "VU",
		english_name: "Vanuatu",
		native_name: "Vanuatu",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/VE-e7d4498591a5d5797b902e380aeee6715e1ae131f7b28588b0203673ede2ed99.png",
		iso_3166_1: "VE",
		english_name: "Venezuela",
		native_name: "Venezuela",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/VN-e29e7dc463f90e585f93db213338bbd1075b2ccd7dbf0c65080367aadc09d354.png",
		iso_3166_1: "VN",
		english_name: "Vietnam",
		native_name: "Vietnam",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/WF-ee3c2b9524125b20837bb540d9ccbf5c737033e4bf87dafcdfd93878cb33bdbf.png",
		iso_3166_1: "WF",
		english_name: "Wallis and Futuna Islands",
		native_name: "Wallis \u0026 Futuna",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/EH-7a86d2a4bb02b19e85b4e2e42b7d6e67ddafd1fd2f7cc8dad207414843b7e22a.png",
		iso_3166_1: "EH",
		english_name: "Western Sahara",

		native_name: "Western Sahara",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/YE-2737540e3c61b1397cc4a354336dee4bbf1ab7468a3b8e2ced2d8b0c83092ef3.png",
		iso_3166_1: "YE",
		english_name: "Yemen",
		native_name: "Yemen",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/YU.png",
		iso_3166_1: "YU",
		english_name: "Yugoslavia",
		native_name: "Yugoslavia",
	},
	{
		flagUrl: "/assets/2/flags_v2/48/ZR.png",
		iso_3166_1: "ZR",
		english_name: "Zaire",
		native_name: "Zaire",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/ZM-4ea15bfa09722cb6b6e32cc5818b06ad37fa2199b32b5d0f997fbf03b776f672.png",
		iso_3166_1: "ZM",
		english_name: "Zambia",
		native_name: "Zambia",
	},
	{
		flagUrl:
			"/assets/2/flags_v2/48/ZW-176e6c0f9ed6108aac542cb2d31a90a2bb6114d456019de853903649360d910f.png",
		iso_3166_1: "ZW",
		english_name: "Zimbabwe",
		native_name: "Zimbabwe",
	},
];

export const LANGUAGES_OPTIONS: Array<LanguagesOptionsType> = [
	{
		folded_name: "None Selected",
		english_name: "None Selected",
		iso_639_1: null,
		native_name: "None Selected",
		count: null,
	},
	{
		folded_name: "English",
		english_name: "English",
		iso_639_1: "en",
		native_name: "English",
		count: 674704,
	},
	{
		folded_name: "French",
		english_name: "French",
		iso_639_1: "fr",
		native_name: "French",
		count: 80990,
	},
	{
		folded_name: "Spanish; Castilian",
		english_name: "Spanish",
		iso_639_1: "es",
		native_name: "Spanish; Castilian",
		count: 73037,
	},
	{
		folded_name: "Japanese",
		english_name: "Japanese",
		iso_639_1: "ja",
		native_name: "Japanese",
		count: 68695,
	},
	{
		folded_name: "German",
		english_name: "German",
		iso_639_1: "de",
		native_name: "German",
		count: 62623,
	},
	{
		folded_name: "Portuguese",
		english_name: "Portuguese",
		iso_639_1: "pt",
		native_name: "Portuguese",
		count: 41613,
	},
	{
		folded_name: "Chinese",
		english_name: "Mandarin",
		iso_639_1: "zh",
		native_name: "Chinese",
		count: 32312,
	},
	{
		folded_name: "Italian",
		english_name: "Italian",
		iso_639_1: "it",
		native_name: "Italian",
		count: 28849,
	},
	{
		folded_name: "Russian",
		english_name: "Russian",
		iso_639_1: "ru",
		native_name: "Russian",
		count: 28812,
	},
	{
		folded_name: "Korean",
		english_name: "Korean",
		iso_639_1: "ko",
		native_name: "Korean",
		count: 15371,
	},
	{
		folded_name: "Czech",
		english_name: "Czech",
		iso_639_1: "cs",
		native_name: "Czech",
		count: 13503,
	},
	{
		folded_name: "Arabic",
		english_name: "Arabic",
		iso_639_1: "ar",
		native_name: "Arabic",
		count: 11221,
	},
	{
		folded_name: "Dutch; Flemish",
		english_name: "Dutch",
		iso_639_1: "nl",
		native_name: "Dutch; Flemish",
		count: 10772,
	},
	{
		folded_name: "Swedish",
		english_name: "Swedish",
		iso_639_1: "sv",
		native_name: "Swedish",
		count: 10273,
	},
	{
		folded_name: "Hindi",
		english_name: "Hindi",
		iso_639_1: "hi",
		native_name: "Hindi",
		count: 10257,
	},
	{
		folded_name: "Turkish",
		english_name: "Turkish",
		iso_639_1: "tr",
		native_name: "Turkish",
		count: 9703,
	},
	{
		folded_name: "Polish",
		english_name: "Polish",
		iso_639_1: "pl",
		native_name: "Polish",
		count: 8879,
	},
	{
		folded_name: "No Language",
		english_name: "No Language",
		iso_639_1: "xx",
		native_name: "No Language",
		count: 8746,
	},
	{
		folded_name: "Tagalog",
		english_name: "Tagalog",
		iso_639_1: "tl",
		native_name: "Tagalog",
		count: 8436,
	},
	{
		folded_name: "Cantonese",
		english_name: "Cantonese",
		iso_639_1: "cn",
		native_name: "Cantonese",
		count: 6678,
	},
	{
		folded_name: "Indonesian",
		english_name: "Indonesian",
		iso_639_1: "id",
		native_name: "Indonesian",
		count: 6564,
	},
	{
		folded_name: "Danish",
		english_name: "Danish",
		iso_639_1: "da",
		native_name: "Danish",
		count: 6384,
	},
	{
		folded_name: "Greek",
		english_name: "Greek",
		iso_639_1: "el",
		native_name: "Greek",
		count: 6068,
	},
	{
		folded_name: "Persian",
		english_name: "Persian",
		iso_639_1: "fa",
		native_name: "Persian",
		count: 5870,
	},
	{
		folded_name: "Tamil",
		english_name: "Tamil",
		iso_639_1: "ta",
		native_name: "Tamil",
		count: 5701,
	},
	{
		folded_name: "Malayalam",
		english_name: "Malayalam",
		iso_639_1: "ml",
		native_name: "Malayalam",
		count: 4814,
	},
	{
		folded_name: "Hungarian",
		english_name: "Hungarian",
		iso_639_1: "hu",
		native_name: "Hungarian",
		count: 4714,
	},
	{
		folded_name: "Bengali",
		english_name: "Bengali",
		iso_639_1: "bn",
		native_name: "Bengali",
		count: 4238,
	},
	{
		folded_name: "Finnish",
		english_name: "Finnish",
		iso_639_1: "fi",
		native_name: "Finnish",
		count: 4210,
	},
	{
		folded_name: "Thai",
		english_name: "Thai",
		iso_639_1: "th",
		native_name: "Thai",
		count: 4130,
	},
	{
		folded_name: "Ukrainian",
		english_name: "Ukrainian",
		iso_639_1: "uk",
		native_name: "Ukrainian",
		count: 3885,
	},
	{
		folded_name: "Telugu",
		english_name: "Telugu",
		iso_639_1: "te",
		native_name: "Telugu",
		count: 3745,
	},
	{
		folded_name: "Norwegian",
		english_name: "Norwegian",
		iso_639_1: "no",
		native_name: "Norwegian",
		count: 3635,
	},
	{
		folded_name: "Hebrew",
		english_name: "Hebrew",
		iso_639_1: "he",
		native_name: "Hebrew",
		count: 3310,
	},
	{
		folded_name: "Slovak",
		english_name: "Slovak",
		iso_639_1: "sk",
		native_name: "Slovak",
		count: 2962,
	},
	{
		folded_name: "Romanian",
		english_name: "Romanian",
		iso_639_1: "ro",
		native_name: "Romanian",
		count: 2686,
	},
	{
		folded_name: "Kannada",
		english_name: "Kannada",
		iso_639_1: "kn",
		native_name: "Kannada",
		count: 2289,
	},
	{
		folded_name: "Serbo-Croatian",
		english_name: "Serbo-Croatian",
		iso_639_1: "sh",
		native_name: "Serbo-Croatian",
		count: 2100,
	},
	{
		folded_name: "Serbian",
		english_name: "Serbian",
		iso_639_1: "sr",
		native_name: "Serbian",
		count: 1880,
	},
	{
		folded_name: "Latvian",
		english_name: "Latvian",
		iso_639_1: "lv",
		native_name: "Latvian",
		count: 1851,
	},
	{
		folded_name: "Malay",
		english_name: "Malay",
		iso_639_1: "ms",
		native_name: "Malay",
		count: 1758,
	},
	{
		folded_name: "Catalan; Valencian",
		english_name: "Catalan",
		iso_639_1: "ca",
		native_name: "Catalan; Valencian",
		count: 1751,
	},
	{
		folded_name: "Vietnamese",
		english_name: "Vietnamese",
		iso_639_1: "vi",
		native_name: "Vietnamese",
		count: 1597,
	},
	{
		folded_name: "Estonian",
		english_name: "Estonian",
		iso_639_1: "et",
		native_name: "Estonian",
		count: 1584,
	},
	{
		folded_name: "Marathi",
		english_name: "Marathi",
		iso_639_1: "mr",
		native_name: "Marathi",
		count: 1568,
	},
	{
		folded_name: "Georgian",
		english_name: "Georgian",
		iso_639_1: "ka",
		native_name: "Georgian",
		count: 1476,
	},
	{
		folded_name: "Icelandic",
		english_name: "Icelandic",
		iso_639_1: "is",
		native_name: "Icelandic",
		count: 1459,
	},
	{
		folded_name: "Croatian",
		english_name: "Croatian",
		iso_639_1: "hr",
		native_name: "Croatian",
		count: 1455,
	},
	{
		folded_name: "Bulgarian",
		english_name: "Bulgarian",
		iso_639_1: "bg",
		native_name: "Bulgarian",
		count: 1399,
	},
	{
		folded_name: "Slovenian",
		english_name: "Slovenian",
		iso_639_1: "sl",
		native_name: "Slovenian",
		count: 1298,
	},
	{
		folded_name: "Lithuanian",
		english_name: "Lithuanian",
		iso_639_1: "lt",
		native_name: "Lithuanian",
		count: 1246,
	},
	{
		folded_name: "Oriya",
		english_name: "Oriya",
		iso_639_1: "or",
		native_name: "Oriya",
		count: 1153,
	},
	{
		folded_name: "Panjabi; Punjabi",
		english_name: "Punjabi",
		iso_639_1: "pa",
		native_name: "Panjabi; Punjabi",
		count: 1010,
	},
	{
		folded_name: "Azerbaijani",
		english_name: "Azerbaijani",
		iso_639_1: "az",
		native_name: "Azerbaijani",
		count: 961,
	},
	{
		folded_name: "Kazakh",
		english_name: "Kazakh",
		iso_639_1: "kk",
		native_name: "Kazakh",
		count: 939,
	},
	{
		folded_name: "Mongolian",
		english_name: "Mongolian",
		iso_639_1: "mn",
		native_name: "Mongolian",
		count: 912,
	},
	{
		folded_name: "Urdu",
		english_name: "Urdu",
		iso_639_1: "ur",
		native_name: "Urdu",
		count: 798,
	},
	{
		folded_name: "Macedonian",
		english_name: "Macedonian",
		iso_639_1: "mk",
		native_name: "Macedonian",
		count: 782,
	},
	{
		folded_name: "Albanian",
		english_name: "Albanian",
		iso_639_1: "sq",
		native_name: "Albanian",
		count: 721,
	},
	{
		folded_name: "Armenian",
		english_name: "Armenian",
		iso_639_1: "hy",
		native_name: "Armenian",
		count: 716,
	},
	{
		folded_name: "Galician",
		english_name: "Galician",
		iso_639_1: "gl",
		native_name: "Galician",
		count: 532,
	},
	{
		folded_name: "Kurdish",
		english_name: "Kurdish",
		iso_639_1: "ku",
		native_name: "Kurdish",
		count: 506,
	},
	{
		folded_name: "Afrikaans",
		english_name: "Afrikaans",
		iso_639_1: "af",
		native_name: "Afrikaans",
		count: 506,
	},
	{
		folded_name: "Nepali",
		english_name: "Nepali",
		iso_639_1: "ne",
		native_name: "Nepali",
		count: 493,
	},
	{
		folded_name: "Bokmal, Norwegian; Norwegian Bokmal",
		english_name: "Norwegian Bokmål",
		iso_639_1: "nb",
		native_name: "Bokmål, Norwegian; Norwegian Bokmål",
		count: 456,
	},
	{
		folded_name: "Burmese",
		english_name: "Burmese",
		iso_639_1: "my",
		native_name: "Burmese",
		count: 453,
	},
	{
		folded_name: "Basque",
		english_name: "Basque",
		iso_639_1: "eu",
		native_name: "Basque",
		count: 437,
	},
	{
		folded_name: "Bosnian",
		english_name: "Bosnian",
		iso_639_1: "bs",
		native_name: "Bosnian",
		count: 413,
	},
	{
		folded_name: "Sinhala; Sinhalese",
		english_name: "Sinhalese",
		iso_639_1: "si",
		native_name: "Sinhala; Sinhalese",
		count: 387,
	},
	{
		folded_name: "Gujarati",
		english_name: "Gujarati",
		iso_639_1: "gu",
		native_name: "Gujarati",
		count: 377,
	},
	{
		folded_name: "Central Khmer",
		english_name: "Khmer",
		iso_639_1: "km",
		native_name: "Central Khmer",
		count: 348,
	},
	{
		folded_name: "Uzbek",
		english_name: "Uzbek",
		iso_639_1: "uz",
		native_name: "Uzbek",
		count: 325,
	},
	{
		folded_name: "Amharic",
		english_name: "Amharic",
		iso_639_1: "am",
		native_name: "Amharic",
		count: 281,
	},
	{
		folded_name: "Assamese",
		english_name: "Assamese",
		iso_639_1: "as",
		native_name: "Assamese",
		count: 245,
	},
	{
		folded_name: "Kirghiz; Kyrgyz",
		english_name: "Kirghiz",
		iso_639_1: "ky",
		native_name: "Kirghiz; Kyrgyz",
		count: 229,
	},
	{
		folded_name: "Javanese",
		english_name: "Javanese",
		iso_639_1: "jv",
		native_name: "Javanese",
		count: 215,
	},
	{
		folded_name: "Zulu",
		english_name: "Zulu",
		iso_639_1: "zu",
		native_name: "Zulu",
		count: 181,
	},
	{
		folded_name: "Irish",
		english_name: "Irish",
		iso_639_1: "ga",
		native_name: "Irish",
		count: 179,
	},
	{
		folded_name: "Belarusian",
		english_name: "Belarusian",
		iso_639_1: "be",
		native_name: "Belarusian",
		count: 146,
	},
	{
		folded_name: "Swahili",
		english_name: "Swahili",
		iso_639_1: "sw",
		native_name: "Swahili",
		count: 145,
	},
	{
		folded_name: "Welsh",
		english_name: "Welsh",
		iso_639_1: "cy",
		native_name: "Welsh",
		count: 131,
	},
	{
		folded_name: "Tibetan",
		english_name: "Tibetan",
		iso_639_1: "bo",
		native_name: "Tibetan",
		count: 119,
	},
	{
		folded_name: "Yiddish",
		english_name: "Yiddish",
		iso_639_1: "yi",
		native_name: "Yiddish",
		count: 99,
	},
	{
		folded_name: "Northern Sami",
		english_name: "Northern Sami",
		iso_639_1: "se",
		native_name: "Northern Sami",
		count: 94,
	},
	{
		folded_name: "Malagasy",
		english_name: "Malagasy",
		iso_639_1: "mg",
		native_name: "Malagasy",
		count: 89,
	},
	{
		folded_name: "Luxembourgish; Letzeburgesch",
		english_name: "Letzeburgesch",
		iso_639_1: "lb",
		native_name: "Luxembourgish; Letzeburgesch",
		count: 87,
	},
	{
		folded_name: "Haitian; Haitian Creole",
		english_name: "Haitian; Haitian Creole",
		iso_639_1: "ht",
		native_name: "Haitian; Haitian Creole",
		count: 85,
	},
	{
		folded_name: "Abkhazian",
		english_name: "Abkhazian",
		iso_639_1: "ab",
		native_name: "Abkhazian",
		count: 83,
	},
	{
		folded_name: "Moldavian; Moldovan",
		english_name: "Moldavian",
		iso_639_1: "mo",
		native_name: "Moldavian; Moldovan",
		count: 81,
	},
	{
		folded_name: "Yoruba",
		english_name: "Yoruba",
		iso_639_1: "yo",
		native_name: "Yoruba",
		count: 78,
	},
	{
		folded_name: "Turkmen",
		english_name: "Turkmen",
		iso_639_1: "tk",
		native_name: "Turkmen",
		count: 76,
	},
	{
		folded_name: "Wolof",
		english_name: "Wolof",
		iso_639_1: "wo",
		native_name: "Wolof",
		count: 74,
	},
	{
		folded_name: "Quechua",
		english_name: "Quechua",
		iso_639_1: "qu",
		native_name: "Quechua",
		count: 70,
	},
	{
		folded_name: "Pushto; Pashto",
		english_name: "Pushto",
		iso_639_1: "ps",
		native_name: "Pushto; Pashto",
		count: 66,
	},
	{
		folded_name: "Tajik",
		english_name: "Tajik",
		iso_639_1: "tg",
		native_name: "Tajik",
		count: 62,
	},
	{
		folded_name: "Divehi; Dhivehi; Maldivian",
		english_name: "Divehi",
		iso_639_1: "dv",
		native_name: "Divehi; Dhivehi; Maldivian",
		count: 62,
	},
	{
		folded_name: "Latin",
		english_name: "Latin",
		iso_639_1: "la",
		native_name: "Latin",
		count: 60,
	},
	{
		folded_name: "Gaelic; Scottish Gaelic",
		english_name: "Gaelic",
		iso_639_1: "gd",
		native_name: "Gaelic; Scottish Gaelic",
		count: 59,
	},
	{
		folded_name: "Inuktitut",
		english_name: "Inuktitut",
		iso_639_1: "iu",
		native_name: "Inuktitut",
		count: 58,
	},
	{
		folded_name: "Lao",
		english_name: "Lao",
		iso_639_1: "lo",
		native_name: "Lao",
		count: 55,
	},
	{
		folded_name: "Somali",
		english_name: "Somali",
		iso_639_1: "so",
		native_name: "Somali",
		count: 52,
	},
	{
		folded_name: "Dzongkha",
		english_name: "Dzongkha",
		iso_639_1: "dz",
		native_name: "Dzongkha",
		count: 51,
	},
	{
		folded_name: "Maltese",
		english_name: "Maltese",
		iso_639_1: "mt",
		native_name: "Maltese",
		count: 48,
	},
	{
		folded_name: "Faroese",
		english_name: "Faroese",
		iso_639_1: "fo",
		native_name: "Faroese",
		count: 45,
	},
	{
		folded_name: "Maori",
		english_name: "Maori",
		iso_639_1: "mi",
		native_name: "Maori",
		count: 42,
	},
	{
		folded_name: "Guarani",
		english_name: "Guarani",
		iso_639_1: "gn",
		native_name: "Guarani",
		count: 40,
	},
	{
		folded_name: "Kalaallisut; Greenlandic",
		english_name: "Kalaallisut",
		iso_639_1: "kl",
		native_name: "Kalaallisut; Greenlandic",
		count: 37,
	},
	{
		folded_name: "Bambara",
		english_name: "Bambara",
		iso_639_1: "bm",
		native_name: "Bambara",
		count: 36,
	},
	{
		folded_name: "Hausa",
		english_name: "Hausa",
		iso_639_1: "ha",
		native_name: "Hausa",
		count: 33,
	},
	{
		folded_name: "Kinyarwanda",
		english_name: "Kinyarwanda",
		iso_639_1: "rw",
		native_name: "Kinyarwanda",
		count: 28,
	},
	{
		folded_name: "Xhosa",
		english_name: "Xhosa",
		iso_639_1: "xh",
		native_name: "Xhosa",
		count: 28,
	},
	{
		folded_name: "Bashkir",
		english_name: "Bashkir",
		iso_639_1: "ba",
		native_name: "Bashkir",
		count: 26,
	},
	{
		folded_name: "Esperanto",
		english_name: "Esperanto",
		iso_639_1: "eo",
		native_name: "Esperanto",
		count: 25,
	},
	{
		folded_name: "Tatar",
		english_name: "Tatar",
		iso_639_1: "tt",
		native_name: "Tatar",
		count: 23,
	},
	{
		folded_name: "Igbo",
		english_name: "Igbo",
		iso_639_1: "ig",
		native_name: "Igbo",
		count: 23,
	},
	{
		folded_name: "Cree",
		english_name: "Cree",
		iso_639_1: "cr",
		native_name: "Cree",
		count: 23,
	},
	{
		folded_name: "Norwegian Nynorsk; Nynorsk, Norwegian",
		english_name: "Norwegian Nynorsk",
		iso_639_1: "nn",
		native_name: "Norwegian Nynorsk; Nynorsk, Norwegian",
		count: 22,
	},
	{
		folded_name: "Lingala",
		english_name: "Lingala",
		iso_639_1: "ln",
		native_name: "Lingala",
		count: 21,
	},
	{
		folded_name: "Uighur; Uyghur",
		english_name: "Uighur",
		iso_639_1: "ug",
		native_name: "Uighur; Uyghur",
		count: 21,
	},
	{
		folded_name: "Akan",
		english_name: "Akan",
		iso_639_1: "ak",
		native_name: "Akan",
		count: 21,
	},
	{
		folded_name: "Sundanese",
		english_name: "Sundanese",
		iso_639_1: "su",
		native_name: "Sundanese",
		count: 19,
	},
	{
		folded_name: "Sotho, Southern",
		english_name: "Sotho",
		iso_639_1: "st",
		native_name: "Sotho, Southern",
		count: 19,
	},
	{
		folded_name: "Sindhi",
		english_name: "Sindhi",
		iso_639_1: "sd",
		native_name: "Sindhi",
		count: 19,
	},
	{
		folded_name: "Kashmiri",
		english_name: "Kashmiri",
		iso_639_1: "ks",
		native_name: "Kashmiri",
		count: 18,
	},
	{
		folded_name: "Tigrinya",
		english_name: "Tigrinya",
		iso_639_1: "ti",
		native_name: "Tigrinya",
		count: 16,
	},
	{
		folded_name: "Fulah",
		english_name: "Fulah",
		iso_639_1: "ff",
		native_name: "Fulah",
		count: 16,
	},
	{
		folded_name: "Sanskrit",
		english_name: "Sanskrit",
		iso_639_1: "sa",
		native_name: "Sanskrit",
		count: 15,
	},
	{
		folded_name: "Cornish",
		english_name: "Cornish",
		iso_639_1: "kw",
		native_name: "Cornish",
		count: 14,
	},
	{
		folded_name: "Ganda",
		english_name: "Ganda",
		iso_639_1: "lg",
		native_name: "Ganda",
		count: 14,
	},
	{
		folded_name: "Western Frisian",
		english_name: "Frisian",
		iso_639_1: "fy",
		native_name: "Western Frisian",
		count: 14,
	},
	{
		folded_name: "Aymara",
		english_name: "Aymara",
		iso_639_1: "ay",
		native_name: "Aymara",
		count: 13,
	},
	{
		folded_name: "Romansh",
		english_name: "Raeto-Romance",
		iso_639_1: "rm",
		native_name: "Romansh",
		count: 13,
	},
	{
		folded_name: "Shona",
		english_name: "Shona",
		iso_639_1: "sn",
		native_name: "Shona",
		count: 13,
	},
	{
		folded_name: "Samoan",
		english_name: "Samoan",
		iso_639_1: "sm",
		native_name: "Samoan",
		count: 13,
	},
	{
		folded_name: "Chichewa; Chewa; Nyanja",
		english_name: "Chichewa; Nyanja",
		iso_639_1: "ny",
		native_name: "Chichewa; Chewa; Nyanja",
		count: 12,
	},
	{
		folded_name: "Twi",
		english_name: "Twi",
		iso_639_1: "tw",
		native_name: "Twi",
		count: 12,
	},
	{
		folded_name: "Tswana",
		english_name: "Tswana",
		iso_639_1: "tn",
		native_name: "Tswana",
		count: 11,
	},
	{
		folded_name: "Tonga (Tonga Islands)",
		english_name: "Tonga",
		iso_639_1: "to",
		native_name: "Tonga (Tonga Islands)",
		count: 9,
	},
	{
		folded_name: "Sardinian",
		english_name: "Sardinian",
		iso_639_1: "sc",
		native_name: "Sardinian",
		count: 9,
	},
	{
		folded_name: "Chechen",
		english_name: "Chechen",
		iso_639_1: "ce",
		native_name: "Chechen",
		count: 8,
	},
	{
		folded_name: "Breton",
		english_name: "Breton",
		iso_639_1: "br",
		native_name: "Breton",
		count: 8,
	},
	{
		folded_name: "Oromo",
		english_name: "Oromo",
		iso_639_1: "om",
		native_name: "Oromo",
		count: 8,
	},
	{
		folded_name: "Sango",
		english_name: "Sango",
		iso_639_1: "sg",
		native_name: "Sango",
		count: 8,
	},
	{
		folded_name: "Marshallese",
		english_name: "Marshall",
		iso_639_1: "mh",
		native_name: "Marshallese",
		count: 8,
	},
	{
		folded_name: "Interlingua (International Auxiliary Language Association)",
		english_name: "Interlingua",
		iso_639_1: "ia",
		native_name: "Interlingua (International Auxiliary Language Association)",
		count: 7,
	},
	{
		folded_name: "Navajo; Navaho",
		english_name: "Navajo",
		iso_639_1: "nv",
		native_name: "Navajo; Navaho",
		count: 7,
	},
	{
		folded_name: "Fijian",
		english_name: "Fijian",
		iso_639_1: "fj",
		native_name: "Fijian",
		count: 7,
	},
	{
		folded_name: "Occitan (post 1500)",
		english_name: "Occitan",
		iso_639_1: "oc",
		native_name: "Occitan (post 1500)",
		count: 7,
	},
	{
		folded_name: "Chuvash",
		english_name: "Chuvash",
		iso_639_1: "cv",
		native_name: "Chuvash",
		count: 7,
	},
	{
		folded_name: "Tahitian",
		english_name: "Tahitian",
		iso_639_1: "ty",
		native_name: "Tahitian",
		count: 7,
	},
	{
		folded_name: "Limburgan; Limburger; Limburgish",
		english_name: "Limburgish",
		iso_639_1: "li",
		native_name: "Limburgan; Limburger; Limburgish",
		count: 6,
	},
	{
		folded_name: "Kikuyu; Gikuyu",
		english_name: "Kikuyu",
		iso_639_1: "ki",
		native_name: "Kikuyu; Gikuyu",
		count: 6,
	},
	{
		folded_name: "Bislama",
		english_name: "Bislama",
		iso_639_1: "bi",
		native_name: "Bislama",
		count: 6,
	},
	{
		folded_name: "Swati",
		english_name: "Swati",
		iso_639_1: "ss",
		native_name: "Swati",
		count: 5,
	},
	{
		folded_name: "Corsican",
		english_name: "Corsican",
		iso_639_1: "co",
		native_name: "Corsican",
		count: 4,
	},
	{
		folded_name: "Ossetian; Ossetic",
		english_name: "Ossetian; Ossetic",
		iso_639_1: "os",
		native_name: "Ossetian; Ossetic",
		count: 4,
	},
	{
		folded_name: "Ojibwa",
		english_name: "Ojibwa",
		iso_639_1: "oj",
		native_name: "Ojibwa",
		count: 4,
	},
	{
		folded_name: "Avaric",
		english_name: "Avaric",
		iso_639_1: "av",
		native_name: "Avaric",
		count: 4,
	},
	{
		folded_name: "Tsonga",
		english_name: "Tsonga",
		iso_639_1: "ts",
		native_name: "Tsonga",
		count: 3,
	},
	{
		folded_name: "Rundi",
		english_name: "Rundi",
		iso_639_1: "rn",
		native_name: "Rundi",
		count: 3,
	},
	{
		folded_name: "Chamorro",
		english_name: "Chamorro",
		iso_639_1: "ch",
		native_name: "Chamorro",
		count: 3,
	},
	{
		folded_name: "Ndebele, North; North Ndebele",
		english_name: "Ndebele",
		iso_639_1: "nd",
		native_name: "Ndebele, North; North Ndebele",
		count: 3,
	},
	{
		folded_name: "Aragonese",
		english_name: "Aragonese",
		iso_639_1: "an",
		native_name: "Aragonese",
		count: 3,
	},
	{
		folded_name: "Manx",
		english_name: "Manx",
		iso_639_1: "gv",
		native_name: "Manx",
		count: 3,
	},
	{
		folded_name: "Inupiaq",
		english_name: "Inupiaq",
		iso_639_1: "ik",
		native_name: "Inupiaq",
		count: 3,
	},
	{
		folded_name: "Komi",
		english_name: "Komi",
		iso_639_1: "kv",
		native_name: "Komi",
		count: 2,
	},
	{
		folded_name: "Zhuang; Chuang",
		english_name: "Zhuang",
		iso_639_1: "za",
		native_name: "Zhuang; Chuang",
		count: 2,
	},
	{
		folded_name: "Hiri Motu",
		english_name: "Hiri Motu",
		iso_639_1: "ho",
		native_name: "Hiri Motu",
		count: 2,
	},
	{
		folded_name: "Venda",
		english_name: "Venda",
		iso_639_1: "ve",
		native_name: "Venda",
		count: 2,
	},
	{
		folded_name: "Herero",
		english_name: "Herero",
		iso_639_1: "hz",
		native_name: "Herero",
		count: 2,
	},
	{
		folded_name: "Sichuan Yi; Nuosu",
		english_name: "Yi",
		iso_639_1: "ii",
		native_name: "Sichuan Yi; Nuosu",
		count: 2,
	},
	{
		folded_name: "Afar",
		english_name: "Afar",
		iso_639_1: "aa",
		native_name: "Afar",
		count: 1,
	},
	{
		folded_name: "Kuanyama; Kwanyama",
		english_name: "Kuanyama",
		iso_639_1: "kj",
		native_name: "Kuanyama; Kwanyama",
		count: 1,
	},
	{
		folded_name: "Kanuri",
		english_name: "Kanuri",
		iso_639_1: "kr",
		native_name: "Kanuri",
		count: 1,
	},
	{
		folded_name: "Ido",
		english_name: "Ido",
		iso_639_1: "io",
		native_name: "Ido",
		count: 1,
	},
	{
		folded_name: "Ndebele, South; South Ndebele",
		english_name: "Ndebele",
		iso_639_1: "nr",
		native_name: "Ndebele, South; South Ndebele",
		count: 1,
	},
	{
		folded_name: "Interlingue; Occidental",
		english_name: "Interlingue",
		iso_639_1: "ie",
		native_name: "Interlingue; Occidental",
		count: 1,
	},
	{
		folded_name: "Kongo",
		english_name: "Kongo",
		iso_639_1: "kg",
		native_name: "Kongo",
		count: 1,
	},
	{
		folded_name: "None Selected",
		english_name: "None Selected",
		iso_639_1: "",
		native_name: "None Selected",
		count: 9999999,
	},
];
