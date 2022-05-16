export default {
	name: "users",
	title: "Users",
	type: "document",
	fields: [
	  {
		  name: "uid",
		  title: "Uid",
		  type: "string",
		  readOnly: true
	  },
	  {
		 name: "username",
		 title: "Username",
		 type: "string"
	  },
	  {
		 name: "email",
		 title: "Email",
		 type: "string"
	  },
	  {
		 name: "image",
		 title: "Image (Base64)",
		 type: "string"
	  },
	  {
		  name: "credits",
		  title: "Credits",
		  type: "number",
		  readOnly: true,
		  initialValue: 0
	  },
	  {
		  name: "admin",
		  title: "Admin",
		  type: "boolean",
		  initialValue: false
	  }
	],
	preview: {
		select: {
		  title: "email",
		  subtitle: "credits",
		  media: "image"
		}
	 }
 };