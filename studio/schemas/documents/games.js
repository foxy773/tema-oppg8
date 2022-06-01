export default {
	name: "games",
	title: "Games",
	type: "document",
	fields: [
		{
			name: "gameName",
			title: "Game Name",
			type: "string"
		},
		{
			name: "gameSlug",
			title: "Game slug",
			type: "slug",
			validation: Rule => Rule.required(),
			options: {
				source: 'gameName',
			}
		},
		{
			name: "enabled",
			title: "Game accessible",
			type: "boolean"
		},
		{
			name: "thumbnail",
			title: "Thumbnail",
			type: "image"
		},
		{
			name: "randomNum",
			title: "Random Number",
			type: "number",
			readOnly: true
		}
	]
};